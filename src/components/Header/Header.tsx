"use server";
import Link from "next/link";
import React from "react";
import style from "../../styles/header.module.scss";

type Props = {
  variant: "dark" | "light";
};

const Header: React.FC<Props> = (props) => {
  const { variant } = props;

  return (
    <section
      className={
        variant === "dark" ? style["header-dark"] : style["header-light"]
      }
      // style={{ backgroundColor: '#2d4059' }}
    >
      <header className={variant === "dark" ? "" : "px-5"}>
        <Link href={"/"} className={style["link"]}>
          <p>Bima Saputra</p>
        </Link>
        <div>
          <Link
            target="_blank"
            href={`https://medium.com/@bmsptra`}
            className={style["link"]}
          >
            <p>Blog</p>
          </Link>
        </div>
      </header>
    </section>
  );
};

export default Header;
