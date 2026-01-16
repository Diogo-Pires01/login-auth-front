const Register = () => {
  return (
    <div className="component-container">
      <div className="itens-container">
        <h1 className="form-title">Registre-se</h1>

        <form className="form-container">
          <input
            type="text"
            placeholder="Nome Completo"
            className="form-input"
          />

          <input type="text" placeholder="Email" className="form-input" />

          <input type="password" placeholder="Senha" className="form-input" />

          <input
            type="password"
            placeholder="Confirme sua senha"
            className="form-input"
          />

          <button type="submit" className="form-btn">
            Criar conta
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
