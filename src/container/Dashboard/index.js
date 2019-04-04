import { connect } from 'react-redux';
import Dashboard from '../../component/Dashboard';

import { startDate, endDate, graphType } from '../../redux/action';
import { requestData } from '../../redux/thunk';
import { selectGraph } from '../../redux/selector'
const mapStateToProps = (state, ownProps) => {
    return {
        graphData: selectGraph(state),
    }
}
const mapDispatchToProps = {
    requestData,
    startDate,
    endDate,
    graphType
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);