import { NextPage } from 'next';

import SignIn from '@components/SignIn';
import MainImage from '@components/MainImage';
import { mainLayout } from '@styles/index';
import DivideLine from '@components/DivideLine';

const SignInPage: NextPage = () => {
  return (
    <div css={mainLayout}>
      <SignIn />
      <DivideLine />
      <MainImage imageUrl="signin" backgroundColor="#080808" />
    </div>
  );
};

export default SignInPage;
