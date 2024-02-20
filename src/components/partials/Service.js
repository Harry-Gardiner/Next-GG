import Image from 'next/image';

const Service = ({ icon, iconAlt, title, text }) => {
  return (
    <div className="service">
      <Image src={icon} alt={iconAlt} width={60} height={60}/>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Service;