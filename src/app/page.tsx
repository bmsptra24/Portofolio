import React from "react";

import "../styles/profil.scss";
import Header from "@/components/Header/Header";
import Puisi from "@/components/Profil/Puisi";
import Project from "@/components/Profil/Project";
import Person from "@/components/Profil/Person";
import Footer from "@/components/Footer/Footer";
import Bmsptra24 from "@/components/Decoration/Animation/Bmsptra24";
const Page = () => {
  return (
    <>
      <Bmsptra24 />
      <main className="profil-container">
        <Header variant="dark" />
        <Person />
        {/* <Skills /> */}
        <Project />
        <Puisi />
        <Footer />
      </main>
    </>
    // <Loading />
  );
};

export default Page;
