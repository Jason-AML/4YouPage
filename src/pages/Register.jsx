import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import bg from "../assets/hero/boy.webp";
export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const registerUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        console.log("Usuario registrado:", userCredential.user);
        navigate("/");
      }
    );
  };
  return (
    <main className="flex  h-screen w-full overflow-hidden">
      <form className="lg:w-[50%] w-[100%] bg-base-200  flex flex-col justify-center items-center  border-none  p-4">
        <legend className="fieldset-legend text-4xl">
          Registrese para continuar
        </legend>

        <div className="flex flex-col gap-3  xl:w-1/2 mt-6">
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

          <button className="btn btn-neutral mt-4 " onClick={registerUser}>
            Entrar
          </button>
          <span className="flex justify-around w-full px-2 mt-4  text-sm">
            <Link to="/login" className="btn">
              Ya tienes cuenta?
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
