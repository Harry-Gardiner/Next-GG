import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="hero overflow">
      <div className="hero__wrapper container flow">
        <h1 className="hero__title">Heating, Gas, Plumbing.<br/>Servicing & Repair.</h1>
        <div className="hero__content">
            <p className="hero__text">We are a local, family run business based in the heart of the Dorset. We offer a range of services including boiler servicing, repairs and installations, gas safety checks and general plumbing work.</p>
        </div>
        <Link className="button" href="#contact">Need a quote?</Link>
      </div>
    </section>
  );
};

export default Hero;