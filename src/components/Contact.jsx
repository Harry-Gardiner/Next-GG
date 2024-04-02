import Image from "next/image";

const Contact = () => {
    const mobile = '07788453423'
    const home = '01305260897'
    const email = 'Gardinergas@gmail.com'
  return (
    <section id="contact" className="contact overflow">
        <div className="container">
            <div className="contact__content flow">
                <h2>Contact Us</h2>
                <p>For a free quote or any other enquiry, please get in touch with us. We are happy to help.</p>
                <div className="contact__details">
                    <div className="contact__details--item">
                        <Image src="/images/icon-phone.svg" alt="phone" width={50} height={50} />
                        <div>
                            <p>Mobile: {mobile}</p>
                            <p>Home: {home}</p>
                        </div>
                    </div>
                    <div className="contact__details--item">
                        <Image src="/images/icon-email.svg" alt="email" width={50} height={50} />
                        <p>{email}</p>
                    </div>
                </div>
                <div className="contact__location">
                    <Image src="/images/icon-location-pin.svg" alt="location" width={50} height={50} />
                    <Image src="/images/dorset_map_area.webp" alt="Work area covered inc Dorchester, Bridport, Wareham, Crossways" width={1200} height={856}/>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;
