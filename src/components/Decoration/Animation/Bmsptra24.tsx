"use client";
import Rive, { useRive } from "@rive-app/react-canvas";
import React, { useEffect, useState } from "react";

const Bmsptra24 = () => {
  const { rive, RiveComponent, container } = useRive({
    src: "/animations/draw-bmsptra.riv",
    stateMachines: ["b", "m", "s", "p", "t", "r", "a"],
    autoplay: true,
    onStop: (event) => {
      console.log({ event });
      if (!event?.data) return;
      if (
        event.type === "stop" &&
        Array.isArray(event.data) &&
        event.data[0] === "a"
      ) {
        container?.classList.add("fadeOut");
      }
    },
  });

  return <RiveComponent className=" absolute inset-0 z-50 bg-[#432818]" />;
};

export default Bmsptra24;
