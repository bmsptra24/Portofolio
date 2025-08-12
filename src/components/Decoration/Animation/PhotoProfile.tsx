"use client";

import { useRive } from "@rive-app/react-canvas";
import React, { useEffect } from "react";

const PhotoProfile = () => {
  const { rive, RiveComponent: PhotoRiveComponent } = useRive({
    src: "/animations/photo-profile.riv",
    autoplay: false,
  });

  useEffect(() => {
    if (rive) {
      const timer = setTimeout(() => {
        rive.play();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [rive]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        overflow: "hidden",
      }}
    >
      <PhotoRiveComponent
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default PhotoProfile;
