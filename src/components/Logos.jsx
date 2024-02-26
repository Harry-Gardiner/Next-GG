const Logos = () => {
    const boilerLogos = ['viesmann.png', 'glow-worm.png', 'vaillant.png', 'baxi.png', 'worcester.png', 'bosch.png', 'potterton.png']; 
    const images = boilerLogos.map((logo) => `/images/boiler_logos/${logo}`); 
  return (
    <section className="logos">
        <div className="container">
            <div className="logos__grid">
            {images.map((image, index) => (
                <img key={index} src={image} alt="logo" />
            ))}
            </div>
        </div>
    </section>
  );
};

export default Logos;
