'use client'

import Hero from "@/components/Hero";
import Header from "@/components/partials/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Logos from "@/components/Logos";
import Contact from "@/components/Contact";
import Footer from "@/components/partials/Footer";
import CallBtn from "@/components/partials/CallBtn";

export default function Home() {
  return (
    <>
    <Header />
    <CallBtn />
    <main className="container">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Logos />
      <Contact />
    </main>
    <Footer />
    </>
  );
}
