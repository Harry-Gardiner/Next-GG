import Image from "next/image";
import { keyframes } from '@emotion/react';
import Reveal from 'react-awesome-reveal';

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

function CustomAnimation({ children }) {
  return <Reveal keyframes={customAnimation} className="call-btn animation animation--call-btn">{children}</Reveal>;
}

const CallBtn = () => {
  return (
    <CustomAnimation>
      <a href="tel:1234567890">
        <Image src="/Next-GG/images/icon-phone-blue.svg" alt="Phone icon" width={35} height={35} />
        Call
      </a>
    </CustomAnimation>
  );
};
export default CallBtn;
