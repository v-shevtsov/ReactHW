import { connect } from "react-redux";
import { removeUser } from "../store/actions/actions";
import Users from "./Users";

function mapStateToProps(state) {
    return {
        list: state.users
    }
}

const mapDispatchToProps = {
    removeUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);