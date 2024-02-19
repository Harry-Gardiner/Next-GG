import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" class="hero overflow">
      <div class="hero__wrapper container flow">
        <h1 class="hero__title">Heating, Gas, Plumbing.<br/>Servicing & Repair.</h1>
        <div class="hero__content">
            <p class="hero__text">We are a local, family run business based in the heart of the Dorset. We offer a range of services including boiler servicing, repairs and installations, gas safety checks and general plumbing work.</p>
        </div>
        <Link className="button" href="#contact">Need a quote?</Link>
      </div>
    </section>
  );
};

export default Hero;
