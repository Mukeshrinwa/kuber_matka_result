/**
 * Market Result Events
 * Events that can be dispatched to the BLoC
 */

export const MarketResultEventTypes = {
  FETCH_MARKET_RESULTS: 'FETCH_MARKET_RESULTS',
  CHANGE_MONTH: 'CHANGE_MONTH',
  REFRESH_MARKET_RESULTS: 'REFRESH_MARKET_RESULTS',
  SET_MONTH: 'SET_MONTH',
};

/**
 * Event to fetch market results from API
 */
export class FetchMarketResultsEvent {
  constructor(enrollmentNo) {
    this.type = MarketResultEventTypes.FETCH_MARKET_RESULTS;
    this.enrollmentNo = enrollmentNo;
  }
}

/**
 * Event to change current month
 * @param {number} monthOffset - +1 for next month, -1 for previous month
 */
export class ChangeMonthEvent {
  constructor(monthOffset) {
    this.type = MarketResultEventTypes.CHANGE_MONTH;
    this.monthOffset = monthOffset;
  }
}

/**
 * Event to refresh current month data
 */
export class RefreshMarketResultsEvent {
  constructor() {
    this.type = MarketResultEventTypes.REFRESH_MARKET_RESULTS;
  }
}

/**
 * Event to set specific month/year
 */
export class SetMonthEvent {
  constructor(year, month) {
    this.type = MarketResultEventTypes.SET_MONTH;
    this.year = year;
    this.month = month;
  }
}