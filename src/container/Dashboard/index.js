import { connect } from 'react-redux';
import Dashboard from '../../component/Dashboard';

import { startDate, endDate, graphType, selectedChartType, selectGlobalFilter } from '../../redux/action';
import { requestData, requestOrganisationData } from '../../redux/thunk';
import { selectLineGraph, selectBarGraph, selectGraphType, 
    selectOrganisation,
    selectGlobalFilters,
    selectSelectedGlobalFilter,
    selectChartType } from '../../redux/selector';
const mapStateToProps = (state, ownProps) => {
    return {
        lineData: selectLineGraph(state),
        barData: selectBarGraph(state),
        organisationData: selectOrganisation(state),
        graphTypes: selectGraphType(state),
        chartTypeFilter: selectChartType(state),
        globalFilters: selectGlobalFilters(state),
        selectedGlobalFilter: selectSelectedGlobalFilter(state),

    }
}
const mapDispatchToProps = {
    requestData,
    requestOrganisationData,
    startDate,
    endDate,
    graphType,
    selectedChartType,
    selectGlobalFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);