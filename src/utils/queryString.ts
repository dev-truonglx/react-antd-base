interface QueryObject {
  [key: string]: string | undefined | null;
}
export default class QueryString {
  /**
   * Parse object into query string
   * @param {Params} params
   * @param {string} prefix
   * @returns {string}
   */
  static stringify<Params = QueryObject>(params = {} as Params, prefix = '?') {
    const query = [];
    for (const [key, value] of Object.entries(params).sort()) {
      let param = key;
      if (!key) {
        continue;
      } else if (value === null) {
        // Do nothing here
      } else if (value === undefined) {
        continue;
      } else {
        param += `=${encodeURIComponent(value)}`;
      }
      query.push(param);
    }
    return prefix + query.join('&');
  }

  /**
   * Parse query string into object
   * Return url query object by default
   * @param {string} text
   * @returns {Params}
   */
  static parse(text?: string) {
    const params = {} as QueryObject;
    const query = text || window.location.search.replace(/\?/g, '');
    query.split('&').forEach((param) => {
      if (param.includes('=')) {
        const [key, value] = param.split('=');
        params[key] = decodeURIComponent(value) || '';
      } else {
        params[param] = null;
      }
    });
    return params;
  }

  static replace<Params = QueryObject>(params: Params) {
    const urlParams = QueryString.parse();
    return QueryString.stringify({
      ...urlParams,
      ...params,
    });
  }

  /**
   * Get current query string of url
   * @returns {string}
   */
  static getUrlStringParams() {
    return QueryString.stringify(QueryString.parse());
  }
}
