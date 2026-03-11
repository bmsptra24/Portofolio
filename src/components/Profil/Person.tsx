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
            Hi, my name is Bima Saputra. React Developer with a solid foundation
            in both mobile and web application development.
          </p>
          <p>
            While specializing in building clean, scalable, and user-friendly{" "}
            <span>cross-platform</span> applications with React Native, I also
            have strong skills in technologies like React.js, Next.js,
            TypeScript, ExpressJs, Lottie.
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
            While specializing in building clean, scalable, and user-friendly{" "}
            <span>cross-platform</span> applications with React Native, I also
            have strong skills in technologies like React.js, Next.js,
            TypeScript, ExpressJs, Lottie.
          </p>
        </div>
      </section>
    </article>
  );
};

export default Person;
