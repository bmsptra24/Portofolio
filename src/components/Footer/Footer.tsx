"use client";
import React, { useEffect } from "react";
import style from "../../styles/footer.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { FaCaretSquareRight } from "react-icons/fa";
// import audio1 from '/sound/no-no-wait-wait.mp3'

const Footer = () => {
  type TFooterItem =
    | {
        title: string;
        variant: "right";
        items: string;
      }
    | {
        title: string;
        variant: "left";
        items: string[];
      };

  const footerItems: TFooterItem[] = [
    {
      title: "About",
      variant: "right",
      items:
        "Hi, I am a student from Informatics Management at Sriwijaya State Polytechnic who is interested in web development. I am actively participating in web development training and competitions.",
    },
    {
      title: "Achievements",
      variant: "left",
      items: [
        "3rd Place | Web Design Competition",
        "1st Place Best Poster | Create Informatics Innovation | KMIPN V",
      ],
    },
    {
      title: "Languages",
      variant: "left",
      items: [
        "English | Limited working proficiency",
        "Indonesian | Native or bilingual proficiency",
      ],
    },
    {
      title: "Experience",
      variant: "left",
      items: [
        "MBKM Mandiri Frontend Developer Intern at SchooltechId",
        "GDSC Sriwijaya State Polytechnic",
        "Assistant Mentor in Web Design Training",
      ],
    },
  ];

  // ! Play the audio when mouse over sosmed
  // useEffect(() => {
  //   const audio = document.getElementById('audio-1') as HTMLAudioElement
  //   audio.play()
  // }, [])

  return (
    <section className={style["footer-container"]}>
      <footer>
        <div>
          {footerItems.map((item, index) => {
            return (
              item.variant === "left" && (
                <div key={index}>
                  <h1>{item.title}</h1>
                  <ul>
                    {item.items.map((list, index) => (
                      <li key={index}>
                        <FaCaretSquareRight className={style["icon-arrow"]} />
                        <p>{list}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            );
          })}
        </div>
        <div>
          {footerItems.map((item, index) => {
            return (
              item.variant === "right" && (
                <div key={index}>
                  <h1>{item.title}</h1>
                  <p>{item.items}</p>
                </div>
              )
            );
          })}
          <div>
            <h1>Get in touch</h1>
            <p>
              I really like listening to music while coding, here are some of my
              playlists{" "}
              <Link
                className={style["playlist-url"]}
                target="_blank"
                href={
                  "https://open.spotify.com/playlist/2VgfTVLyNkmyUm9mQoMzHf?si=163d686044264f5d"
                }
              >
                wilday
              </Link>{" "}
              and{" "}
              <Link
                className={style["playlist-url"]}
                target="_blank"
                href={
                  "https://open.spotify.com/playlist/2IjYmeGna3msVlvR6cmXEf?si=0c560dc3b1594a13"
                }
              >
                mildnight
              </Link>
              . And also here are some social media that I use
            </p>
            <ul>
              <li>
                <audio
                  id="audio-1"
                  src={"/sound/let-me-tell-you-something.mp3"}
                  hidden
                />
                <FaArrowRightLong className={style["icon-arrow"]} />
                <Link
                  // onMouseOver={playAudio}
                  className={style["link"]}
                  href={"mailto:sbima2432@gmail.com"}
                >
                  <p>MAIL</p>
                </Link>
              </li>
              <li>
                <FaArrowRightLong className={style["icon-arrow"]} />
                <Link
                  className={style["link"]}
                  href={"https://github.com/bmsptra24/"}
                >
                  <p>GITHUB</p>
                </Link>
              </li>
              <li>
                <FaArrowRightLong className={style["icon-arrow"]} />
                <Link
                  className={style["link"]}
                  href={"https://www.linkedin.com/in/bmsptra24/"}
                >
                  <p>LINKEDIN</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
