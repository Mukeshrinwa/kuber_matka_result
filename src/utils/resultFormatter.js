/**
 * Format market result string
 * Example Output:
 * 269-72-589
 */

export const formatMarketResult = (
  openCode,
  closeCode,
  openValue,
  closeValue
) => {
  // Handle empty values
  if (!openCode || !closeCode) {
    return "-";
  }

  // Safe values
  const open = openValue ?? "";
  const close = closeValue ?? "";

  // Create jodi
  let jodi = "--";

  // Both values available
  if (open && close) {
    jodi = `${open}${close}`;
  }

  // Only open value available
  else if (open) {
    jodi = `${open}-`;
  }

  // Only close value available
  else if (close) {
    jodi = `-${close}`;
  }

  // Final format
  return `${openCode}-${jodi}-${closeCode}`;
};

/**
 * Format single item
 */
export const formatMarketItem = (item) => {
  const {
    open_code,
    close_code,
    open_value,
    close_value,
  } = item;

  return formatMarketResult(
    open_code,
    close_code,
    open_value,
    close_value
  );
};

/**
 * Format multiple results
 */
export const formatMarketResults = (data) => {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.map((item) => ({
    ...item,
    formattedResult: formatMarketItem(item),
  }));
};

export default formatMarketResult;