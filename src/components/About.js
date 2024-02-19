import Image from "next/image";

const About = () => {
  return (
    <section id="about" class="about">
      <div class="about__wrapper flow">
        <h2>Welcome to Gardiners Gas & Plumbing Ltd.</h2>
        <div class="flow">
          <p>
            We are a local, family run business with over 30 years experience in
            the heating, gas and plumbing industry. We are fully qualified and
            Gas Safe registered.
          </p>

          <p>
            We offer a friendly, reliable and professional service at
            competitive prices.
          </p>
        </div>
      </div>
      <div class="about__gas-safe">
        <Image
          src="/gas-safe.png"
          alt="Gas Safe Logo"
          width={200}
          height={100}
        />
      </div>
    </section>
  );
};

export default About;
