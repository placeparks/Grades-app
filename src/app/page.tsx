import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer/>
    </>
  );
}
