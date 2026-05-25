/**
 * Market Result Model
 * Represents a single market result from API
 */
export class MarketResultModel {
  constructor({
    marketName,
    openValue,
    openCode,
    closeValue,
    closeCode,
    fromDate,
  }) {
    this.marketName = marketName || '';
    this.openValue = openValue || null;
    this.openCode = openCode || null;
    this.closeValue = closeValue || null;
    this.closeCode = closeCode || null;
    this.fromDate = fromDate ? new Date(fromDate) : null;
  }

  /**
   * Factory constructor to parse from API JSON
   */
  static fromJson(json) {
    return new MarketResultModel({
      marketName: json.market_name || '',
      openValue: json.open_value || null,
      openCode: json.open_code || null,
      closeValue: json.close_value || null,
      closeCode: json.close_code || null,
      fromDate: json.from || null,
    });
  }

  /**
   * Get open code digits as array safely
   * Returns ["*", "*", "*"] if open_code is missing
   */
  getOpenCodeDigits() {
    return MarketResultModel.getCodeDigits(this.openCode);
  }

  /**
   * Get close code digits as array safely
   * Returns ["*", "*", "*"] if close_code is missing
   */
  getCloseCodeDigits() {
    return MarketResultModel.getCodeDigits(this.closeCode);
  }

  /**
   * Helper to extract digits safely from code
   * If code is missing/empty, returns ["*", "*", "*"]
   */
  static getCodeDigits(code) {
    if (!code || code === '') {
      return ['*', '*', '*'];
    }

    const digits = code.split('').map((d) => {
      if (/^\d$/.test(d)) {
        return d;
      }
      return '*';
    });

    // Pad with * if less than 3 digits
    while (digits.length < 3) {
      digits.push('*');
    }

    return digits.slice(0, 3);
  }

  /**
   * Get open value safely
   * Returns "*" if open_value is missing
   */
  getOpenValue() {
    if (!this.openValue || this.openValue === '') {
      return '*';
    }
    return this.openValue;
  }

  /**
   * Get close value safely
   * Returns "*" if close_value is missing
   */
  getCloseValue() {
    if (!this.closeValue || this.closeValue === '') {
      return '*';
    }
    return this.closeValue;
  }

  /**
   * Format result string: open_panna-open_jodi close_panna-close_jodi
   * Example: 300-3 578-0
   */
  getFormattedResult() {
    const openCodeDigits = this.getOpenCodeDigits().join('');
    const closeCodeDigits = this.getCloseCodeDigits().join('');
    const openJodi = this.getOpenValue();
    const closeJodi = this.getCloseValue();

    return `${openCodeDigits}-${openJodi} ${closeCodeDigits}-${closeJodi}`;
  }

  /**
   * Get normalized date (year, month, day only) for comparison
   */
  getNormalizedDate() {
    if (!this.fromDate) return null;
    return new Date(
      this.fromDate.getFullYear(),
      this.fromDate.getMonth(),
      this.fromDate.getDate()
    );
  }

  toString() {
    return `MarketResultModel(marketName: ${this.marketName}, fromDate: ${this.fromDate})`;
  }
}

export default MarketResultModel;