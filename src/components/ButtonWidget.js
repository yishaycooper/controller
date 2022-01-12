import { connect } from "react-redux";
import { togglePropertyAction } from "./../redux/actions";

let enabled = false;

const ButtonWidget = (props) => {
  return (
    <button
      onClick={(e) => {
        enabled = !enabled;
        props.togglePropertyAction(enabled);
      }}
    >
      Enable / Desable
    </button>
  );
};

function mapStateToProps(state, ownProps) {
  return {};
}

const mapDispatchToProps = {
  togglePropertyAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonWidget);
