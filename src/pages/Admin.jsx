import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/admin-login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold">Welcome to Admin Page</h2>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Admin;
