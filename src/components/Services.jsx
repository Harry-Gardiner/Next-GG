import Service from "./partials/Service";

const Services = () => {
    return (
      <section id="services" className="services overflow">
        <div className="container">
            <h2>Services</h2>
            <div className="services__wrapper">
                <Service
                    icon="/Next-GG/images/icon-flame.svg"
                    iconAlt="flame"
                    title="Boiler Servicing"
                    text="We offer a range of boiler servicing options to keep your boiler running smoothly."
                />
                <Service
                    icon="/Next-GG/images/icon-tool.svg"
                    iconAlt="wrench"
                    title="Boiler Repairs"
                    text="We can help with any boiler repairs, from a leaking pipe to a broken thermostat."
                />
                <Service
                    icon="/Next-GG/images/icon-document-check.svg"
                    iconAlt="gas"
                    title="Gas Safety Checks"
                    text="We offer gas safety checks for landlords and homeowners."
                />
                <Service
                    icon="/Next-GG/images/icon-plumbing.svg"
                    iconAlt="plumbing"
                    title="General Plumbing"
                    text="We can help with any general plumbing work, from a leaking tap to a new bathroom installation."
                />
            </div>
        </div>
      </section>
    );
  }
  
  export default Services;