"use client";
import { bebasNeue } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import style from "../../styles/profil/project.module.scss";
import { projectsList, TProject } from "@/constans/project";
import { blurDataURL } from "@/constans/image";

const Project = () => {
  const [ilustration, setIlustration] = useState<[string, string]>([
    "/images/helper/loading.jpg",
    "/images/helper/loading.jpg",
  ]);
  const [coverDegX, setCoverDegX] = useState(0);
  const [coverDegY, setCoverDegY] = useState(0);

  useEffect(() => {
    // set the pointer
    const updateMousePosition = (e: MouseEvent) => {
      // display-size = 100
      // clientX      = ?
      // formula      = (clientX x 100 / display-size) - 50, 50 untuk agar dia membelah deg nya jadi dua, yakni ke kanan dan kiri
      const maxDegX = 100;
      const calculateX =
        ((e.clientX * maxDegX) / window.innerWidth - maxDegX / 2) * -1;
      setCoverDegX(calculateX);

      const maxDegY = 40;
      const calculateY =
        (e.clientY * maxDegY) / window.innerHeight - maxDegY / 2;
      setCoverDegY(calculateY);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

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
      <h1 className={`${bebasNeue.className}`}>PROJECTS</h1>

      <div
        style={{
          transform: `rotateY(${coverDegX}deg) rotateX(${coverDegY}deg)`,
        }}
        className={`${style["cover"]} fadeOut cover`}
        id="cover-project"
      >
        <div className={`${style["ilustration-1"]} floating-sm`}>
          <Image
            loading="lazy"
            blurDataURL={blurDataURL.project}
            placeholder="blur"
            className={`${style["img"]}`}
            alt="ilustration-1"
            src={ilustration[0]}
            width={900}
            height={600}
          />
          <div className={`${style["ilustration-2"]} floating-md`}>
            <Image
              loading="lazy"
              blurDataURL={blurDataURL.project}
              placeholder="blur"
              className={`${style["img"]}`}
              alt="ilustration-1"
              src={ilustration[1]}
              width={230}
              height={350}
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
