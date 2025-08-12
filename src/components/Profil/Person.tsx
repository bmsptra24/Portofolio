import { bebasNeue } from "@/styles/font";
import Image from "next/image";
import style from "../../styles/profil/person.module.scss";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import PhotoProfile from "../Decoration/Animation/PhotoProfile";

const Person = () => {
  return (
    <article className={style.person}>
      <section className={style["marquee"]}>
        <div className={`${bebasNeue.className} ${style.items}`}>
          <p>BIMA SAPUTRA</p>
          <p>BIMA SAPUTRA</p>
          <p>BIMA SAPUTRA</p>
          <p>BIMA SAPUTRA</p>
          <p>BIMA SAPUTRA</p>
          <p>BIMA SAPUTRA</p>
          <p>BIMA SAPUTRA</p>
          <p>BIMA SAPUTRA</p>
          <p>BIMA SAPUTRA</p>
          <p>BIMA SAPUTRA</p>
        </div>
      </section>

      <section className={style.intro}>
        <div className={style.text1}>
          <p>
            Hi, my name is Bima Saputra. I am a Student currently Sriwijaya
            State Polytechnic. I have a passion for Frontend Development.
          </p>
          <p>
            As someone deeply interested in Frontend Development, I am
            enthusiastic about creating intuitive user interfaces and engaging
            web experiences. I thrive on the <span>creativity</span> and{" "}
            <span>problem-solving</span>
            &#32;involved in crafting visually appealing and functional
            websites.{" "}
          </p>
          <Link href={"mailto:sbima2432@gmail.com"} className={style.btn}>
            Contact me
          </Link>
        </div>
        <div className={style.hero}>
          <PhotoProfile />
        </div>
        <div className={style.text2}>
          <p>
            As someone deeply interested in Frontend Development, I am
            enthusiastic about creating intuitive user interfaces and engaging
            web experiences. I thrive on the <span>creativity</span> and{" "}
            <span>problem-solving</span>
            involved in crafting visually appealing and functional websites.{" "}
          </p>
        </div>
      </section>
    </article>
  );
};

export default Person;
