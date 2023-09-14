function InputField(props) {
  return (
    <div>
      <label for={props.name}>{props.name}:</label>
      <br></br>
      {props.state === false ? (
        <input
          type={props.type}
          id={props.name}
          value={props.value}
          onChange={(event) => {
            props.set(event.target.value);
          }}
        ></input>
      ) : (
        <input
          type={props.text}
          id={props.name}
          name={props.name}
          value={props.value}
          readOnly
        ></input>
      )}
      <br></br>
    </div>
  );
}

export default InputField;
