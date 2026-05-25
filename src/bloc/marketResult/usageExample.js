/**
 * Usage Example - How to use MarketResultBloc
 */

import MarketResultBloc from './marketResultBloc';

// 1. Create BLoC instance
const bloc = new MarketResultBloc({
  apiBaseUrl: 'http://server.lbgroupgames.com'
});

// 2. Subscribe to state changes
const unsubscribe = bloc.subscribe((state) => {
  console.log('State changed:', state.status);
  console.log('Current month:', state.monthYearString);
  console.log('Results:', state.allResults.length);
});

// 3. Fetch market results
bloc.dispatch(new FetchMarketResultsEvent('your-enrollment-number'));

// 4. Navigate to next month
bloc.changeMonth(1); // +1 for next, -1 for previous

// 5. Get result for specific date
const targetDate = new Date(2026, 4, 14); // May 14, 2026
const result = bloc.getResultForDate(targetDate);

if (result) {
  console.log('Market:', result.marketName);
  console.log('Result:', result.getFormattedResult());
  console.log('Open Digits:', result.getOpenCodeDigits());
  console.log('Close Digits:', result.getCloseCodeDigits());
}

// 6. Get month/year string
const monthStr = bloc.getMonthYearString(2026, 5);
console.log(monthStr); // "May 2026"

// 7. Get code digits safely
const digits = bloc.getCodeDigits('300');
console.log(digits); // ["3", "0", "0"]

const missingDigits = bloc.getCodeDigits(null);
console.log(missingDigits); // ["*", "*", "*"]

// 8. Generate date range
const dates = bloc.generateDateRange(2026, 5);
console.log('May 2026 has', dates.length, 'days');

// 9. Refresh data
bloc.dispatch(new RefreshMarketResultsEvent());

// 10. Set specific month
bloc.dispatch(new SetMonthEvent(2026, 3)); // March 2026

// Cleanup
unsubscribe();