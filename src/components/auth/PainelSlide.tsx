type Props = {
  isLogin: boolean;
  onChangeMode: (mode: "login" | "register") => void;
};

export default function PainelSlide({ isLogin, onChangeMode }: Props) {
  return (
    <div
      className={`painel-container ${
        isLogin ? "translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="painel-el">
        {isLogin ? (
          <>
            <h2 className="text-2xl font-semibold">Não tem conta?</h2>
            <p className="text-purple-200">Crie uma agora</p>
            <button
              onClick={() => onChangeMode("register")}
              className="painel-btn"
            >
              Registrar
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold">Já tem conta?</h2>
            <p className="text-purple-200">Faça login</p>
            <button
              onClick={() => onChangeMode("login")}
              className="painel-btn"
            >
              Entrar
            </button>
          </>
        )}
      </div>
    </div>
  );
}
