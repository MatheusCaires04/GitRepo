import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  const handleLogin = () => {
    if (user === "") {
      alert("Informe um usuário!");
      navigate("/");
    } else {
      localStorage.setItem("@token/userGitRepo", JSON.stringify(user));
      navigate("/inicio");
    }
  };

  return (
    <div className="w-full h-screen bg-bgColor font-global">
      <div className="h-full flex flex-col items-center justify-center text-white text-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl md:text-4xl">Bem-Vindo ao GitRepo</h1>
          <AiFillGithub className="text-4xl md:text-6xl" />
        </div>
        <p className="w-[80%] md:w-[60%] text-sm md:text-base text-whiteOp/70 mt-3 mb-10">
          No GitRepo você coloca seu nome de usuário, e acessa todos seus
          repositórios diretamente!
        </p>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center gap-4 md:gap-2 w-[80%] md:w-[40%]"
        >
          <input
            type="text"
            name="user"
            id="user"
            placeholder="Nome de usuário do GitHub"
            className="w-full px-4 py-2 text-sm md:text-base text-black outline-none rounded-lg"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <button className="border-2 border-green text-xs md:text-sm px-8 py-2 rounded-xl hover:bg-green/20 duration-150">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
