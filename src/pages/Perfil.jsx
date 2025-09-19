import { useAuth } from "../context/AuthContext";

export const Perfil = () => {
  const { user } = useAuth();
  return (
    <div className="h-screen bg-amber-300 text-black">
      <span>{user.email}</span>
    </div>
  );
};
