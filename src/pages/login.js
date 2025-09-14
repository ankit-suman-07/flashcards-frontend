import AuthForm from "../components/AuthForm";
import useAuthStore from "../store/auth-store";

const LoginPage = () => {
  const login = useAuthStore((state) => state.login);

  const handleLogin = async (email, password) => {
    try {
      await login(email, password);
      window.location.href = "/dashboard"; // redirect
    } catch (err) {
      console.error("❌ Login failed:", err);
    }
  };

  return <AuthForm onSubmit={handleLogin} />;
};

export default LoginPage;
