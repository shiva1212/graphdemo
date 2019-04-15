import { connect } from 'react-redux';
import Dashboard from '../../component/Dashboard';

import { startDate, endDate, graphType, selectedChartType } from '../../redux/action';
import { requestData, requestOrganisationData } from '../../redux/thunk';
import { selectGraph, selectGraphType, 
    selectOrganisation,
    selectChartType } from '../../redux/selector';
const mapStateToProps = (state, ownProps) => {
    return {
        graphData: selectGraph(state),
        organisationData: selectOrganisation(state),
        graphTypes: selectGraphType(state),
        chartTypeFilter: selectChartType(state),
    }
}
const mapDispatchToProps = {
    requestData,
    requestOrganisationData,
    startDate,
    endDate,
    graphType,
    selectedChartType,
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);