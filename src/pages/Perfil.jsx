import { useAuth } from "../context/AuthContext";

export const Perfil = () => {
  const { user } = useAuth();
  console.log("Perfil user:", user);
  return (
    <div className="h-screen bg-amber-300 text-black">
      <span>{user.email}</span>
      <span>{user?.role ?? "sin rol"}</span>
    </div>
  );
};
