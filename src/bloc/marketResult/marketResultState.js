/**
 * Market Result States
 * States emitted by the BLoC
 */

export const MarketResultStatus = {
  INITIAL: 'initial',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

/**
 * Generate date range for a specific month
 * @returns {Date[]} Array of dates in the month
 */
export function generateDateRange(year, month) {
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0); // Last day of month

  const dates = [];
  for (let i = 1; i <= lastDay.getDate(); i++) {
    dates.push(new Date(year, month - 1, i));
  }

  return dates;
}

/**
 * Get month/year string for display
 * @returns {string} e.g., "May 2026"
 */
export function getMonthYearString(year, month) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return `${months[month - 1]} ${year}`;
}

/**
 * Create initial state
 */
export function createInitialState() {
  const now = new Date();
  return createState({
    status: MarketResultStatus.INITIAL,
    currentYear: now.getFullYear(),
    currentMonth: now.getMonth() + 1,
    dateRange: generateDateRange(now.getFullYear(), now.getMonth() + 1),
  });
}

/**
 * Create state object
 */
export function createState({
  status = MarketResultStatus.INITIAL,
  allResults = [],
  resultsByDate = {},
  currentYear,
  currentMonth,
  dateRange = [],
  errorMessage = null,
  enrollmentNo = null,
}) {
  return {
    status,
    allResults,
    resultsByDate,
    currentYear,
    currentMonth,
    dateRange,
    errorMessage,
    enrollmentNo,

    // Computed properties
    get monthYearString() {
      return getMonthYearString(currentYear, currentMonth);
    },

    get isCurrentMonth() {
      const now = new Date();
      return currentYear === now.getFullYear() && currentMonth === now.getMonth() + 1;
    },

    get canGoToPreviousMonth() {
      return true;
    },

    get canGoToNextMonth() {
      const now = new Date();
      if (currentYear < now.getFullYear()) return true;
      if (currentYear === now.getFullYear() && currentMonth < now.getMonth() + 1) return true;
      return false;
    },

    // Get result for specific date
    getResultForDate(date) {
      const normalizedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      const key = normalizedDate.toISOString().split('T')[0];
      return resultsByDate[key] || null;
    },

    // Get results for current month
    get currentMonthResults() {
      return allResults.filter(result => {
        if (!result.fromDate) return false;
        return result.fromDate.getFullYear() === currentYear &&
               (result.fromDate.getMonth() + 1) === currentMonth;
      });
    },

    // Copy with method for immutable updates
    copyWith(updates) {
      return createState({
        ...this,
        ...updates,
        dateRange: updates.dateRange || this.dateRange,
      });
    },
  };
}