const Testimonial = ({ name, date, stars, children }) => {
  return (
    <div className="testimonial">
      <p>{children}</p>
      <div>
          <h3>{name}</h3>
          <p>{date}</p>
      </div>
      <div>
          {'⭐'.repeat(stars)}
      </div>
    </div>
  );
}


export default Testimonial;