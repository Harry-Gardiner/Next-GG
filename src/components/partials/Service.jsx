import Image from 'next/image';

const Service = ({ icon, iconAlt, title, text }) => {
  return (
    <div className="service">
      <Image src={icon} alt={iconAlt} width={60} height={60}/>
      <div className='flow'>
          <h3 className='h5'>{title}</h3>
          <p>{text}</p>
      </div>
    </div>
  );
}

export default Service;