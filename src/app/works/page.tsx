"use client";

import React, { useState, useEffect } from "react";

const OrientationGradientBackground = () => {
  const [orientation, setOrientation] = useState({
    beta: 0, // Front to back tilt
    gamma: 0, // Left to right tilt
  });

  useEffect(() => {
    // Check if device orientation is supported
    if (window.DeviceOrientationEvent) {
      const handleOrientation = (event: DeviceOrientationEvent) => {
        setOrientation({
          beta: event.beta || 0, // -180 to 180
          gamma: event.gamma || 0, // -90 to 90
        });
      };

      // Add event listener
      window.addEventListener("deviceorientation", handleOrientation);

      // Cleanup listener on component unmount
      return () => {
        window.removeEventListener("deviceorientation", handleOrientation);
      };
    }
  }, []);

  // Smooth interpolation function to prevent step changes
  const smoothStep = (x: number) => {
    // Smoothstep interpolation
    return x * x * (3 - 2 * x);
  };

  // Map orientation to gradient colors
  const getGradientColors = () => {
    // Normalize beta and gamma with smoothing
    const normalizedBeta = smoothStep((orientation.beta + 180) / 360);
    const normalizedGamma = smoothStep((orientation.gamma + 90) / 180);

    // Base color #1d16f0 with smooth variations
    const baseColor = [29, 22, 240];
    const gradientColor1 = baseColor.map((c) =>
      Math.min(255, Math.max(0, c * (0.75 + normalizedBeta * 0.5))),
    );
    const gradientColor2 = baseColor.map((c) =>
      Math.min(255, Math.max(0, c * (0.75 + normalizedGamma * 0.5))),
    );

    return {
      background: `linear-gradient(
        ${normalizedBeta * 360}deg, 
        rgb(${gradientColor1.join(",")}), 
        rgb(${gradientColor2.join(",")})
      )`,
    };
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center"
      style={getGradientColors()}
    >
      <div className="text-white text-center p-4 bg-black/30 rounded">
        <h1 className="text-2xl">Tilt Your Device</h1>
        <p>Current Orientation:</p>
        <p>Beta: {orientation.beta.toFixed(2)}°</p>
        <p>Gamma: {orientation.gamma.toFixed(2)}°</p>
      </div>
    </div>
  );
};

export default OrientationGradientBackground;
