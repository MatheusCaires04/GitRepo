import React, { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";

import api from "./../service/api";

const GitRepo = () => {
  const isLogged = localStorage.getItem("@token/userGitRepo");
  const userLogged = JSON.parse(isLogged);

  const [dataRepo, setDataRepo] = useState([]);
  const [dataUser, setDataUser] = useState([]);

  async function getData() {
    const repo = await api.get(`${userLogged}/repos`);
    const user = await api.get(`${userLogged}`);

    setDataRepo(repo.data);
    setDataUser(user.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="text-white w-full h-auto md:h-screen p-10 font-global flex gap-2">
      <div className="w-72 h-full py-10 flex flex-col items-center text-center border-4 border-green rounded-2xl overflow-hidden">
        <img
          src={dataUser.avatar_url}
          alt="Foto de perfil do GitHub"
          className="rounded-full w-44 border-4 border-green shadow-md shadow-green"
        />
        <h1 className="mt-5 text-lg font-bold">{dataUser.name}</h1>
        <span className="px-4 py-5 text-xs text-white/70">{dataUser.bio}</span>
        <div className="flex flex-col justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xs">Seguidores</span>-
            <strong className="text-sm">{dataUser.followers}</strong>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs">Seguindo</span>-
            <strong className="text-sm">{dataUser.following}</strong>
          </div>
        </div>
      </div>
      <div className="flex-1 h-full flex flex-col px-5 py-10 border-4 border-green rounded-2xl">
        <h3 className="text-xl mb-5">Aqui estão seus repositórios</h3>
        <ul className="w-full h-full overflow-hidden overflow-y-auto flex flex-col gap-4 pr-5 scroll__color">
          {dataRepo.map((repo) => {
            return (
              <li className="border-2 border-whiteOp rounded-md px-10 py-2 flex items-center justify-between">
                <strong className="text-xs font-medium">
                  {repo.full_name}
                </strong>
                <a
                  href={repo.html_url}
                  target="_blank"
                  className="flex items-center gap-2 border-[1px] border-green rounded-md px-5 py-1 text-xs hover:text-green"
                >
                  Ver link <AiFillGithub className="text-base" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default GitRepo;
