import { Inter } from "next/font/google";
import HeroSection from "./components/HeroSection";
import Carousel from "./components/carousel";
import Feature from "./components/feature";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HeroSection></HeroSection>
      <Feature></Feature>
      <Carousel></Carousel>
    </main>
  );
}
