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
            <h2 className="text-3xl font-semibold text-white">Não tem conta?</h2>
            <p className="text-white text-lg">Crie uma agora</p>
            <button
              onClick={() => onChangeMode("register")}
              className="painel-btn"
            >
              Criar conta
            </button>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-semibold text-white">Já tem conta?</h2>
            <p className="text-white text-lg">Faça login</p>
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
