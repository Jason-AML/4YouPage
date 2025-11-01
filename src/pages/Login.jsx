import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase.js";
import bg from "../assets/hero/boy.webp";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      navigate("/");
    });
  };
  return (
    <main className="flex  h-screen w-full overflow-hidden">
      <form className="lg:w-[50%] w-[100%] bg-base-200  flex flex-col justify-center items-center  border-none  p-4">
        <legend className="fieldset-legend text-5xl">
          Bienvenido de vuelta
        </legend>

        <div className="flex flex-col gap-3 w-3/4 xl:w-1/2 mt-6">
          <label className="label">Email</label>
          <input
            type="email"
            className="relative bg-base-100 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="relative bg-base-100 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-neutral mt-4 " onClick={handleLogin}>
            Entrar
          </button>
          <span className="flex justify-around w-full px-2 mt-4  text-sm">
            <Link to="/register" className="btn">
              No tienes cuenta?
            </Link>
            <Link to="/" className="btn btn-accent">
              Volver al inicio
            </Link>
          </span>
        </div>
      </form>
      <div className="lg:w-[50%] hidden lg:block">
        <img src={bg} alt="" className="object-cover" />
      </div>
    </main>
  );
};
