import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeUserInitialState } from "../../../store/user/userSlice";

const mapStateToProps = (state) => {
    return {
        formType: state.user.formType,
        initialValues: state.user.initialValues,
        showDrawer: state.user.showDrawer,
    };
};

const mapDispatch = {
    changeUserInitialState
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(mapDispatch, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;