// Bmsptra24.jsx
"use client";
import Rive, { useRive } from "@rive-app/react-canvas";
import React, { useEffect, useState } from "react";

const Bmsptra24 = () => {
  const [isVisible, setIsVisible] = useState(true); // State to control visibility

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
        // Add fadeOut class for visual effect
        container?.classList.add("fadeOut");

        // After a short delay (matching your fadeOut duration), remove the component
        // Assuming fadeOut takes around 0.5s or 1s based on common fade animations.
        // Adjust this duration to match your CSS animation's actual duration.
        setTimeout(() => {
          setIsVisible(false); // This will unmount the RiveComponent
        }, 1000); // For example, if fadeOut is 1s
      }
    },
  });

  // Only render the component if it's visible
  if (!isVisible) {
    return null;
  }

  return (
    <RiveComponent
      className="absolute inset-0 z-50 bg-[#432818]"
      // If you want to apply fadeOut directly, you can conditionally add it here
      // style={{ animation: isFadingOut ? 'fadeOut 1s forwards' : 'none' }}
    />
  );
};

export default Bmsptra24;
