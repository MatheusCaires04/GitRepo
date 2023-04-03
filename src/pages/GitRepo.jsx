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
    <div className="text-white w-full h-auto md:h-screen p-2 md:p-10 font-global flex flex-col md:flex-row gap-2">
      <div className="flex-1 md:w-72 md:h-full py-5 md:py-10 px-2 sm:px-10 md:px-0 flex flex-row md:flex-col items-center text-center border-4 border-green rounded-2xl overflow-hidden">
        <img
          src={dataUser.avatar_url}
          alt="Foto de perfil do GitHub"
          className="rounded-full w-28 sm:w-36 md:w-44 border-4 border-green shadow-md shadow-green"
        />
        <div className="flex flex-col text-start px-5">
          <h1 className="mt-5 text-lg sm:text-xl md:text-lg font-bold">
            {dataUser.name}
          </h1>
          <div className="flex flex-col text-start">
            <span className="md:px-4 py-2 sm:py-5 text-sm md:text-xs text-white/70">
              {dataUser.bio}
            </span>
            <div className="flex flex-row md:flex-col gap-5 sm:gap-10 md:gap-0 md:justify-between items-start md:items-center">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-xs">Seguidores</span>-
                <strong className="text-sm">{dataUser.followers}</strong>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-xs">Seguindo</span>-
                <strong className="text-sm">{dataUser.following}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 h-full flex flex-col px-2 md:px-5 py-10 border-4 border-green rounded-2xl">
        <h3 className="text-xl text-center md:text-start mb-5">
          Aqui estão seus repositórios
        </h3>
        <ul className="w-full h-full overflow-hidden overflow-y-auto flex flex-col gap-4 md:pr-5 md:scroll__color">
          {dataRepo.map((repo) => {
            return (
              <li className="border-2 border-whiteOp rounded-md px-1 md:px-10 py-2 flex items-center justify-between">
                <strong className="text-xs font-medium">
                  {repo.full_name}
                </strong>
                <a
                  href={repo.html_url}
                  target="_blank"
                  className="flex items-center gap-2 border-[1px] border-green rounded-md px-2 md:px-5 py-2 md:py-1 text-xs hover:text-green whitespace-nowrap"
                >
                  <span className="hidden md:flex">Ver link</span>{" "}
                  <AiFillGithub className="text-lg md:text-base" />
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
