import Image from "next/image";

const Gallery = () => {

    return (
        <section id="gallery" className="gallery">
            <h2>Our Work</h2>
            <div className="gallery__grid">
                {/* <div className="gallery__item"> */}
                    <Image src="/gague.webp" alt="Gallery Image 1" width={400} height={300} />
                {/* </div> */}
                {/* <div className="gallery__item"> */}
                    <Image src="/gas.webp" alt="Gallery Image 2" width={400} height={300} />
                {/* </div> */}
                {/* <div className="gallery__item"> */}
                    <Image src="/hob.webp" alt="Gallery Image 3" width={400} height={300} />
                {/* </div> */}
                {/* <div className="gallery__item"> */}
                    <Image src="/pipes.webp" alt="Gallery Image 4" width={400} height={300} />
                 {/* </div> */}
                {/* <div className="gallery__item"> */}
                    <Image src="/pipes-2.webp" alt="Gallery Image 5" width={400} height={300} />
                 {/* </div> */}
                {/* <div className="gallery__item"> */}
                    <Image src="/tap.webp" alt="Gallery Image 6" width={400} height={300} />
                {/* </div> */}
            </div>
        </section>
    )
};

export default Gallery;
