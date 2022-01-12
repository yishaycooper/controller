import { connect } from "react-redux";
const StatusWidget = (props) => {
  return (
    <div className="status">
      <p>
        <b>Widget Status</b>{" "}
      </p>
      <span>TextWidget:</span> &nbsp;
      <input type="text" value={props.textValue.textValue} />
      &nbsp; <span>Button:</span> &nbsp;
      <input type="text" value={props.propertyEnabled} />
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    textValue: state.TextReducer.textValue,
    propertyEnabled: state.ButtonReducer.propertyEnabled,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StatusWidget);
