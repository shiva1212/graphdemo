import { connect } from 'react-redux';
import Dashboard from '../../component/Dashboard';

import { startDate, endDate, graphType } from '../../redux/action';
import { requestData } from '../../redux/thunk';
import { selectGraph, selectGraphType } from '../../redux/selector'
const mapStateToProps = (state, ownProps) => {
    return {
        graphData: selectGraph(state),
        graphTypes: selectGraphType(state),
    }
}
const mapDispatchToProps = {
    requestData,
    startDate,
    endDate,
    graphType
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);