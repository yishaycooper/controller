import { connect } from "react-redux";
import { addTextAction } from "./../redux/actions";

let text = "";

const inpuChange = (e) => {
  text = e.target.value;
};

const TextWidget = (props) => {
  return (
    <>
      <label>
        TextWidget <input onChange={inpuChange} />
      </label>
      &nbsp;
      <button onClick={(e) => props.addTextAction({ textValue: text })}>
        Save Text
      </button>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  return { textValue: state.TextReducer.textValue };
}

const mapDispatchToProps = {
  addTextAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TextWidget);
