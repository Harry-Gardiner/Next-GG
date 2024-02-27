import Image from "next/image";

const CallBtn = () => {
  return (
    <a href="tel:1234567890" className="call-btn">
      <Image src="/images/icon-phone-white.svg" alt="Phone" width={45} height={45} />
      Call
    </a>
  );
};
export default CallBtn;
