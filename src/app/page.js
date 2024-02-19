import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";

export default function Home() {
  return (
    <>
    <Header />
    <main className="container">
      <Hero />
      <About />
    </main>
    </>
  );
}
