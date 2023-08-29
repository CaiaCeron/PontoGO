"use client";
import { Container, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Card from "./components/Card";
import Followus from "./components/Followus";
import Footer from "./components/Footer";
import VSpacer from "./components/VSpacer";

export default function Home() {
  return (
    <>
      <main>
        <div>
          <Container backgroundColor={"#120039"} maxW={"full"} p={0}>
            <Box
              color={"white"}
              position={"relative"}
              backgroundImage={"/Galaxy_background.png"}
              backgroundSize={"cover"}
            >
              <Navbar></Navbar>
              <Hero></Hero>
              <Feature></Feature>
              <Card></Card>
              <VSpacer></VSpacer>
              <Followus></Followus>
              <Footer></Footer>
            </Box>
          </Container>
        </div>
      </main>
    </>
  );
}
