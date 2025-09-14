import useAuthStore from "../store/auth-store";

const DashboardPage = () => {
  const { user, logout } = useAuthStore();

  if (!user) {
    return <p>Please login first</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.username} 🎉</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default DashboardPage;
