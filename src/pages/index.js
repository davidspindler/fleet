import * as React from "react";
// import Navbar from "../components/Navbar";
import Layout from "../components/Layout/Layout";
import "../styles/global.css";
import Hero from "../components/Hero";
import Body from "../components/Body/Body";
import ContactPage from "../components/Contact/contact";

export default function Home() {
  return (
    <Layout>
      {/* <Navbar></Navbar> */}
      <Hero />
      <Body />
      <ContactPage />
    </Layout>
  );
}
