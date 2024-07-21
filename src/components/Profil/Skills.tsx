import { bebasNeue } from "@/styles/font";
import Image from "next/image";
import React, { Fragment } from "react";
import style from "../../styles/profil/skill.module.scss";

type Skill = {
  name: string;
  iconSrc: string;
};

type SkillItemProps = {
  skillName: string;
  iconSrc: string;
};

const SkillItem: React.FC<SkillItemProps> = ({ skillName, iconSrc }) => {
  return (
    <div>
      <Image
        className={style["img"]}
        width={100}
        height={100}
        alt={skillName}
        src={iconSrc}
      />
      <p>{skillName}</p>
    </div>
  );
};

const Skills = () => {
  // marqueee skil berisi 5 skill
  const skillsMarqueee1: Skill[][] = [
    [
      { name: "React", iconSrc: require("/icons/react.png") },
      { name: "Next JS", iconSrc: require("/icons/nextjs.png") },
      { name: "Node JS", iconSrc: require("/icons/nodejs.png") },
      { name: "Javascript", iconSrc: require("/icons/js.png") },
      { name: "Typescript", iconSrc: require("/icons/ts.png") },
    ],
    [
      { name: "HTML", iconSrc: require("/icons/html.png") },
      { name: "CSS", iconSrc: require("/icons/css.webp") },
      {
        name: "Bootstrap",
        iconSrc: require("/icons/bootstrap.png"),
      },
      { name: "Tailwind", iconSrc: require("/icons/tailwind.png") },
      { name: "SASS", iconSrc: require("/icons/sass.png") },
    ],
  ];

  const loopMarquee = 5;
  return (
    <article className={style["skill-container"]}>
      <div className={style["marquee"]}>
        <div className={style["items"]}>
          {[...Array(loopMarquee)].map((_, index) => (
            <React.Fragment key={index}>
              {skillsMarqueee1[0].map((skill, innerIndex) => (
                <SkillItem
                  key={innerIndex}
                  skillName={skill.name}
                  iconSrc={skill.iconSrc}
                />
              ))}
            </React.Fragment>
          ))}
        </div>

        <div className={style["items"]}>
          {[...Array(loopMarquee)].map((_, index) => (
            <React.Fragment key={index}>
              {skillsMarqueee1[1].map((skill, innerIndex) => (
                <SkillItem
                  key={innerIndex}
                  skillName={skill.name}
                  iconSrc={skill.iconSrc}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className={style["title"]}>
        <h1 className={`${bebasNeue.className}`}>SKILLS</h1>
      </div>
    </article>
  );
};

export default Skills;
