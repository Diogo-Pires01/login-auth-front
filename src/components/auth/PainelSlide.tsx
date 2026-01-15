type Props = {
  isLogin: boolean;
};

export default function PainelSlide({ isLogin }: Props) {
  return (
    <div>
      <div>
        {isLogin ? (
          <div>
            <h2>Não tem conta?</h2>
            <p>Crie uma agora</p>
          </div>
        ) : (
          <div>
            <h2>Já tem conta?</h2>
            <p>Faça login</p>
          </div>
        )}
      </div>
    </div>
  );
}
