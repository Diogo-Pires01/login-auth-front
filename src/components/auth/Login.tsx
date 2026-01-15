const Login = () => {
  return (
    <div className="component-container">
      <div className="itens-container">
        <h1 className="form-title">Login</h1>

        <form className="form-container">
          <input type="text" placeholder="Email" className="form-input" />

          <input type="password" placeholder="Senha" className="form-input" />

          <button type="submit" className="form-btn">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
