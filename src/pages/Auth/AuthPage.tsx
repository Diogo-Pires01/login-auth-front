import { useNavigate } from "react-router-dom";
import PainelSlide from "../../components/auth/PainelSlide";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";

type AuthMode = "login" | "register";

type Props = {
  mode: AuthMode;
};

export default function AuthPage({ mode }: Props) {
  const navigate = useNavigate();
  const isLogin = mode === "login";

  const handleChangeMode = (newMode: AuthMode) => {
    navigate(newMode === "login" ? "/login" : "/register");
  };

  return (
    <div className="auth-container">
      <div className="auth-components">
        <Login />
        <Register />

        <PainelSlide isLogin={isLogin} onChangeMode={handleChangeMode} />
      </div>
    </div>
  );
}
