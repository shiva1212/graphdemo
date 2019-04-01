import { connect } from 'react-redux';
import Dashboard from '../../component/Dashboard';

import {  requestData } from '../../redux/action'
const mapStateToProps = (state, ownProps) => {
    return {
        graphData: state.get('graphData'),
    }
}
const mapDispatchToProps = {
    requestData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);