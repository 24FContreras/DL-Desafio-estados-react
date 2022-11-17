const Boton = (props) => {
  return (
    <button
      type="submit"
      className="btn btn-dark mb-3 w-100"
      onClick={props.click}
    >
      {props.text}
    </button>
  );
};

export default Boton;
