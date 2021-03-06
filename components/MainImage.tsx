import { css } from '@emotion/react';
import Image from 'next/image';

interface MainImageProps {
  imageUrl: string;
  backgroundColor?: string;
}

const MainImage = ({ imageUrl, backgroundColor }: MainImageProps) => {
  let backgroundImage = '';
  if (imageUrl === 'signup') backgroundImage = '/bg-signup.svg';
  else if (imageUrl === 'signin') backgroundImage = '/bg-login.svg';
  else if (imageUrl === 'reset-password') backgroundImage = '/bg-password-reset.svg';

  return (
    <div css={mainImage} style={{ backgroundColor }}>
      {imageUrl && backgroundImage && <Image src={backgroundImage} className="image" loading="eager" layout="fill" />}
    </div>
  );
};

export const mainImage = css`
  width: 100%;
  height: 49.7rem;
  position: relative;

  @media (min-width: 768px) {
    /* flex: 1 1; */
    display: block;
    width: max(39.606vw, 76.044rem);
    height: 100%;
  }

  .image {
    width: 100%;
    height: 100%;
    position: relative !important;
  }
`;

export default MainImage;
