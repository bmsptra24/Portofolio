"use client";
import { bebasNeue } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import style from "../../styles/profil/project.module.scss";
import { projectsList, TProject } from "@/constans/project";

const Project = () => {
  const [ilustration, setIlustration] = useState<[string, string]>([
    require("../../assets/image-1.jpg"),
    require("../../assets/image-1.jpg"),
  ]);

  //! add anmimate
  const onItemHover = async (project: TProject) => {
    setIlustration([project.ilustration1, project.ilustration2]);

    const cover = document.querySelector(".project .cover") as HTMLElement;
    cover.classList.replace("fadeOut", "fadeIn");
  };

  const onItemLeave = () => {
    const cover = document.querySelector(".project .cover") as HTMLElement;
    // cover.classList.replace('fadeIn', 'fadeIn')
    cover.classList.replace("fadeIn", "fadeOut");
  };

  return (
    <article className={`${style["project"]} project`}>
      <h1 className={`${bebasNeue.className} `}>PROJECTS</h1>

      <div className={`${style["cover"]} fadeOut cover`}>
        <div className={`${style["ilustration-1"]} floating-sm`}>
          <Image
            className={`${style["img"]}`}
            alt="ilustration-1"
            src={ilustration[0]}
          />
          <div className={`${style["ilustration-2"]} floating-md`}>
            <Image
              className={`${style["img"]}`}
              alt="ilustration-1"
              src={ilustration[1]}
            />
          </div>
        </div>
      </div>

      <div className={`${style["items"]}`}>
        <table>
          <tbody>
            {projectsList.map((project, index) => (
              <tr
                key={index}
                onMouseOver={() => onItemHover(project)}
                onMouseLeave={onItemLeave}
              >
                <td>{project.title}</td>
                <td>{project.tech}</td>
                <td>
                  <Link target="_blank" href={project.url}>
                    <span>
                      Launch{" "}
                      <FaArrowRightLong className={`${style["icon-arrow"]}`} />
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default Project;
