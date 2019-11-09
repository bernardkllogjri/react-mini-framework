import { connect } from "react-redux";
import { addSocket } from "shared-actions/";

const mapStateToProps = ({ socketReducer }) => ({
  sockets: socketReducer.sockets
});
const mapDispatchToProps = dispatch => ({
  pushMessage: (type, payload) => dispatch(addSocket(type, payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
