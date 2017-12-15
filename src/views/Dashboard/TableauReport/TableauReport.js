import React, { Component } from 'react';
import PropTypes from 'prop-types';
import url from 'url';
import { shallowequal } from './utils';
import Tableau from './tableau-api';


/**
 * React Component to render reports created in Tableau.
 *
 * @class TableauReport
 * @extends {Component}
 */
class TableauReport extends Component {

  static propTypes = {
    filters: PropTypes.object,
    url: PropTypes.string,
    parameters: PropTypes.object,
    options: PropTypes.object,
    token: PropTypes.string
  }

  static defaultProps = {
    loading: false,
    parameters: {},
    filters: {},
    options: {}
  }

  state = {
    filters: {},
    parameters: {},
    currentUrl: '',
    sheets: {}
  }

  componentDidMount() {
    const { filters, parameters, url } = this.props

    this.setState({
      filters,
      parameters,
      currentUrl: url
    })

    this.initTableau();
  }

  compenentWillUnmount() {
    if (this.viz) {
      this.viz.dispose();
      this.viz = null;
    }
  }

  componentWillReceiveProps(nextProps) {
    const isReportChanged = nextProps.url !== this.state.currentUrl;
    const isFiltersChanged = !shallowequal(this.props.filters, nextProps.filters);
    const isParametersChanged = !shallowequal(this.props.parameters, nextProps.parameters);
    const isLoading = this.state.loading;

    if (isReportChanged) {
      this.setState({
        currentUrl: nextProps.url
      });
      this.forceUpdate();
      this.initTableau();
    }

    if (!isReportChanged && isFiltersChanged && !isLoading) {
      this.applyFilters(this.chooseFilters(this.props.filters, nextProps.filters));
    }

    if (!isReportChanged && isParametersChanged && !isLoading) {
      this.applyParameters(nextProps.parameters);
    }
  }

  /**
   * Make sure only the filters that have changed get applied.
   *
   * @returns {Object} Filters that should be applied.
   * @memberOf TableauReport
   */
  chooseFilters(currFilters, nextFilters) {
    const applyFilters = {}
    for (let key in nextFilters) {
      if(nextFilters[key] !== currFilters[key]) {
        applyFilters[key] = nextFilters[key]
      }
    }
    return applyFilters
  }

  /**
   * Gets the url for the tableau report.
   *
   * @returns {String} A constructed url.
   * @memberOf TableauReport
   */
  getUrl() {
    const parsed = url.parse(this.props.url, true);

    let result = parsed.protocol + '//' + parsed.host;
    if (this.props.token) result += '/trusted/' + this.props.token;
    result += parsed.pathname + '?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes';

    return result;
  }

  /**
   * Asynchronously applies filters to the worksheet, excluding those that have
   * already been applied, which is determined by checking against state.
   * @param  {Object} filters
   * @return {void}
   * @memberOf TableauReport
   */
  applyFilters(filters) {
    const REPLACE = Tableau.FilterUpdateType.REPLACE;
    const { topItemByMonth, top10MostQty } = this.state.sheets
    const promises = [];

    this.setState({ loading: true });

    for (const key in filters) {
      if(filters[key] === "") {
        promises.push( topItemByMonth.clearFilterAsync(key));
        promises.push( top10MostQty.clearFilterAsync(key));
      } else {
        promises.push( topItemByMonth.applyFilterAsync(key, filters[key], REPLACE));
        promises.push( top10MostQty.applyFilterAsync(key, filters[key], REPLACE));
      }
    }
    Promise.all(promises).then(() => {
      this.setState({ loading: false, filters })
    });
  }


  /**
   * Initialize the viz via the Tableau JS API.
   * @return {void}
   * @memberOf TableauReport
   */
  initTableau() {
    const vizUrl = this.getUrl();

    const options = {
      ...this.props.filters,
      ...this.props.parameters,
      ...this.props.options,
      onFirstInteractive: () => {
        this.workbook = this.viz.getWorkbook();
        this.sheets = this.workbook.getActiveSheet().getWorksheets();
        this.sheet = this.sheets[0];
        this.setState({
          sheets: {
            topItemByMonth: this.sheets.get('Top Item by Month'),
            topItemsAndStores: this.sheets.get('Top 10 for Top 10'),
            top10MostQty: this.sheets.get('Top 10 Most QTY sold')
          }
        })
      }
    };

    if (this.viz) {
      this.viz.dispose();
      this.viz = null;
    }

    this.viz = new Tableau.Viz(this.container, vizUrl, options);
  }

  render() {
    return <div ref={c => this.container = c} />;
  }
}


export default TableauReport;
