import PainelSlide from "../../components/auth/PainelSlide";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";

type AuthMode = "login" | "register";

type Props = {
  mode: AuthMode;
};

export default function AuthPage({ mode }: Props) {
  const isLogin = mode === "register";

  return (
    <div  className="flex items-center justify-center min-h-screen">
      <div>
        <Login />
      </div>

      <div>
        <Register />
      </div>

      <PainelSlide isLogin={isLogin} />
    </div>
  );
}
