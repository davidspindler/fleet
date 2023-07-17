import * as React from "react";
// import Navbar from "../components/Navbar";
import Layout from "../components/Layout/Layout";
import "../styles/global.css";
import Hero from "../components/Hero";
import Body from "../components/Body/Body";
import ContactPage from "../components/Contact/contact";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log(document.readyState);
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div className="container">
          <div id="loading"></div>
        </div>
      ) : (
        <Layout>
          {/* <Navbar></Navbar> */}
          <Hero />
          <Body />
          <ContactPage />
        </Layout>
      )}
    </>
  );
}
