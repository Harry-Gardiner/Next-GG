import Testimonial from "./partials/Testimonial";

const Testimonials = () => {
    const testimonialsData = [
      { name: 'John Doe', date: '2022-01-01', stars: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { name: 'Jane Doe', date: '2022-02-01', stars: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { name: 'John Smith', date: '2022-03-01', stars: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
    ];
  
    return (
      <section id="testimonials" className="testimonials overflow">
        <div className="container">
            <h2>Testimonials</h2>
            {testimonialsData.map((testimonial, index) => (
              <Testimonial
                key={index}
                name={testimonial.name}
                date={testimonial.date}
                stars={testimonial.stars}
              >
                {testimonial.text}
              </Testimonial>
            ))}
        </div>
      </section>
    );
  }
  
  export default Testimonials;