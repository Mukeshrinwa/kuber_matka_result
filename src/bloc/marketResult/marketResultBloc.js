/**
 * Market Result BLoC
 * Handles fetching, parsing, and managing market result data
 * Follows clean architecture with BLoC pattern
 */

import axios from 'axios';
import {
  MarketResultEventTypes,
  FetchMarketResultsEvent,
  ChangeMonthEvent,
  RefreshMarketResultsEvent,
  SetMonthEvent,
} from './marketResultEvent';
import {
  MarketResultStatus,
  createInitialState,
  createState,
  generateDateRange,
  getMonthYearString,
} from './marketResultState';
import { MarketResultModel } from './marketResultModel';

const API_BASE_URL = 'http://server.lbgroupgames.com';

/**
 * Market Result BLoC Class
 */
class MarketResultBloc {
  constructor(options = {}) {
    this.apiBaseUrl = options.apiBaseUrl || API_BASE_URL;
    this.state = createInitialState();
    this.listeners = [];
  }

  /**
   * Subscribe to state changes
   */
  subscribe(listener) {
    this.listeners.push(listener);
    listener(this.state);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  /**
   * Emit state to all listeners
   */
  emit() {
    this.listeners.forEach(listener => listener(this.state));
  }

  /**
   * Dispatch an event to the BLoC
   */
  dispatch(event) {
    switch (event.type) {
      case MarketResultEventTypes.FETCH_MARKET_RESULTS:
        this.handleFetchMarketResults(event);
        break;
      case MarketResultEventTypes.CHANGE_MONTH:
        this.handleChangeMonth(event);
        break;
      case MarketResultEventTypes.REFRESH_MARKET_RESULTS:
        this.handleRefresh();
        break;
      case MarketResultEventTypes.SET_MONTH:
        this.handleSetMonth(event);
        break;
      default:
        console.warn('Unknown event type:', event.type);
    }
  }

  /**
   * Handle fetch market results event
   */
  async handleFetchMarketResults(event) {
    this.state = this.state.copyWith({
      status: MarketResultStatus.LOADING,
      enrollmentNo: event.enrollmentNo,
    });
    this.emit();

    try {
      const results = await this.fetchMarketResults(event.enrollmentNo);
      const resultsByDate = this.mapResultsByDate(results);

      this.state = this.state.copyWith({
        status: MarketResultStatus.SUCCESS,
        allResults: results,
        resultsByDate: resultsByDate,
        errorMessage: null,
      });
    } catch (error) {
      this.state = this.state.copyWith({
        status: MarketResultStatus.ERROR,
        errorMessage: error.message || 'Failed to fetch results',
      });
    }

    this.emit();
  }

  /**
   * Handle change month event
   */
  handleChangeMonth(event) {
    let newMonth = this.state.currentMonth + event.monthOffset;
    let newYear = this.state.currentYear;

    // Handle year wrap-around
    if (newMonth > 12) {
      newMonth = 1;
      newYear++;
    } else if (newMonth < 1) {
      newMonth = 12;
      newYear--;
    }

    const newDateRange = generateDateRange(newYear, newMonth);

    this.state = this.state.copyWith({
      currentYear: newYear,
      currentMonth: newMonth,
      dateRange: newDateRange,
    });

    this.emit();
  }

  /**
   * Handle refresh event
   */
  handleRefresh() {
    if (this.state.enrollmentNo) {
      this.dispatch(new FetchMarketResultsEvent(this.state.enrollmentNo));
    }
  }

  /**
   * Handle set specific month event
   */
  handleSetMonth(event) {
    const newDateRange = generateDateRange(event.year, event.month);

    this.state = this.state.copyWith({
      currentYear: event.year,
      currentMonth: event.month,
      dateRange: newDateRange,
    });

    this.emit();
  }

  /**
   * Fetch market results from API
   * @param {string} enrollmentNo - User enrollment number
   * @returns {Promise<MarketResultModel[]>}
   */
  async fetchMarketResults(enrollmentNo) {
    try {
      const response = await axios.get(`${this.apiBaseUrl}/api/v1/public/result`, {
        params: { enrollment_no: enrollmentNo },
        timeout: 30000,
      });

      const data = response.data;
      const resultsList = data.data || [];

      return resultsList.map(item => MarketResultModel.fromJson(item));
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message || 'Failed to load results');
    }
  }

  /**
   * Map results by date for quick lookup
   * Key is normalized date string (YYYY-MM-DD)
   */
  mapResultsByDate(results) {
    const map = {};

    results.forEach(result => {
      if (result.fromDate) {
        // Convert to local date only (ignore time)
        const localDate = new Date(
          result.fromDate.getFullYear(),
          result.fromDate.getMonth(),
          result.fromDate.getDate()
        );
        const key = localDate.toISOString().split('T')[0];

        // If multiple results for same date, keep the latest one
        if (!map[key] || result.fromDate > map[key].fromDate) {
          map[key] = result;
        }
      }
    });

    return map;
  }

  // ========== Helper Methods (can be used externally) ==========

  /**
   * Fetch market results (public method)
   */
  async fetchMarketResultsPublic(enrollmentNo) {
    return this.fetchMarketResults(enrollmentNo);
  }

  /**
   * Generate date range for a specific month
   * @param {number} year
   * @param {number} month
   * @returns {Date[]}
   */
  generateDateRange(year, month) {
    return generateDateRange(year, month);
  }

  /**
   * Get result for specific date
   * @param {Date} date
   * @returns {MarketResultModel|null}
   */
  getResultForDate(date) {
    const key = date.toISOString().split('T')[0];
    return this.state.resultsByDate[key] || null;
  }

  /**
   * Change month programmatically
   * @param {number} monthOffset - +1 for next, -1 for previous
   */
  changeMonth(monthOffset) {
    this.dispatch(new ChangeMonthEvent(monthOffset));
  }

  /**
   * Get month/year string
   * @param {number} year
   * @param {number} month
   * @returns {string}
   */
  getMonthYearString(year, month) {
    return getMonthYearString(year, month);
  }

  /**
   * Extract digits from code safely
   * Returns ["*", "*", "*"] if code is missing
   * @param {string|null} code
   * @returns {string[]}
   */
  getCodeDigits(code) {
    return MarketResultModel.getCodeDigits(code);
  }

  /**
   * Check if date matches API "from" date
   * Only compares year, month, day (ignores time)
   * @param {Date} calendarDate
   * @param {Date|null} apiDate
   * @returns {boolean}
   */
  isDateMatching(calendarDate, apiDate) {
    if (!apiDate) return false;
    return calendarDate.getFullYear() === apiDate.getFullYear() &&
           calendarDate.getMonth() === apiDate.getMonth() &&
           calendarDate.getDate() === apiDate.getDate();
  }
}

export default MarketResultBloc;