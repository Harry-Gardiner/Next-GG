import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
    <Header />
    <main className="container">
      <Hero />
      <About />
      <Services />
    </main>
    </>
  );
}
