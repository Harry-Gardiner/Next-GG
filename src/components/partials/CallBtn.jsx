import Image from "next/image";

const CallBtn = () => {
  return (
    <a href="tel:1234567890" className="call-btn">
      <Image src="/images/icon-phone-blue.svg" alt="Phone" width={35} height={35} />
      Call
    </a>
  );
};
export default CallBtn;
