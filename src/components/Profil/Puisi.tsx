"use client";

import { bebasNeue } from "@/styles/font";
import style from "../../styles/profil/puisi.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";

const Puisi = () => {
  useEffect(() => {
    onHover();
    onLeave();
  }, []);
  const onHover = () => {
    // show bg
    const bg = document.querySelector(".background") as HTMLElement;
    bg.style.opacity = "100%";

    // set the pointer
    const pos = document.documentElement;

    const updateMousePosition = (e: MouseEvent) => {
      pos.style.setProperty("--cursor-clip-size", `400px`);
      pos.style.setProperty("--cursor-x", `${e.clientX}px`);
      pos.style.setProperty("--cursor-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  };

  const onLeave = () => {
    const bg = document.querySelector(".background") as HTMLElement;
    bg.style.opacity = "0";
  };

  return (
    <article
      className={style["puisi"]}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={`${style["background"]} background`}>
        <div className={style["description"]}>
          <p>
            Besides coding, I also like to write blogs when I have free time.
          </p>
          <Link href={"https://medium.com/@bmsptra"} target="_blank">
            <button className={style["btn-read-more"]}>Read more!</button>
          </Link>
        </div>
        <div className={style["description"]}>
          <p>
            Besides coding, I also like to write blogs when I have free time.
          </p>
          <Link href={"https://medium.com/@bmsptra"} target="_blank">
            <button className={style["btn-read-more"]}>Read more!</button>
          </Link>
        </div>
        <h1 className={`${bebasNeue.className} `}>PENGHARGAAN</h1>

        {/* <div className={style["puisi-body"]}>
          <p>
            1. Juara 1 Poster Terbaik dalam Kompetisi Mahasiswa Informatika
            Politeknik Nasional V (KMIPN V)
          </p>
          <br />
          <p>2. Juara 3 Desain Web Valter di HMJ TEKKOM</p>
          <br />
          <p>3. Finalis Desain Web ISC di Universitas Kristen Duta Wacana</p>
          <br />
          <p>
            4. Salah satu dari 3 individu yang terpilih sebagai Asisten Mentor
            untuk Pelatihan Desain Web
          </p>
        </div> */}
      </div>
      <h1 className={`${bebasNeue.className} `}>AWARDS</h1>

      {/* <div className={style["puisi-body"]}>
        <p>
          1. 1st Place Best Poster in Kompetisi Mahasiswa Informatika Politeknik
          Nasional V KMIPN V
        </p>
        <br />
        <p>2. 3rd Place Web Desain Valter in HMJ TEKKOM</p>
        <br />
        <p>3. Finalis Web Desain ISC in Universitas Kristen Duta Wacana</p>
        <br />
        <p>
          4. 1 out of 3 individuals is selected as a Assistant Mentor for Web
          Design Training
        </p>
      </div> */}
    </article>
  );
};

export default Puisi;
