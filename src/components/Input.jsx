const Input = (props) => {
  return (
    <article>
      <div className="form-field mb-3">
        <label htmlFor="name">Nombre</label>
        <input
          className="form-control"
          type="text"
          name="name"
          id="name"
          onChange={props.changeName}
        />
        {props.nameError}
      </div>
      <div className="form-field mb-3">
        <label htmlFor="password">Contraseña</label>
        <input
          className="form-control"
          type="password"
          name="password"
          id="password"
          onChange={props.changePassword}
        />
      </div>
    </article>
  );
};

export default Input;
