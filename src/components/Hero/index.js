import React, { useState } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <section className="logo-hero-container">
      {loaded ? null : (
        <img
          src="logo-hero.png"
          className="logo-hero"
          alt="hero image of fleet van for fleet mechanic shop"
        />
      )}
    </section>
  );
};

export default Hero;
