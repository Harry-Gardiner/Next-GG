import Image from "next/image";

const Testimonial = ({ name, date, stars, children }) => {
    date = new Date(date).toLocaleDateString('en-GB', {
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="testimonial">
        <div className="testimonial__content flow">
            <Image src="/Next-GG/images/quote.png" alt="quote" width={35} height={31} />
            <p>{children}</p>
            <div className="testimonial__info">
                <div className="testimonial__stars">
                    <div>
                        {Array.from({ length: stars }, (_, i) => (
                            <img key={i} src="/images/star.svg" alt="star" />
                        ))}
                    </div>
                </div>
                <div className="testimonial__name">
                    <p>{name}, {date}</p>
                </div>
            </div>
        </div>
        </div>
    );
}


export default Testimonial;