import styled from 'styled-components';
import GoogleIcon from '@mui/icons-material/Google';
import { ForestRounded, ParkRounded, LogoutRounded } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  setPersistence,
  browserSessionPersistence
} from 'firebase/auth';
import { auth } from '../../firebase';

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #c7d36f;
  color: #3f3f3f;
  padding: 10px;
`;

const ElementWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    font-weight: 800;
  }

  .mypage-link {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
`;

const IconWrapper = styled.section`
  margin: 0px 10px 0px 0px;
`;

const LogoDetail = styled.div`
  font-size: 13px;
  margin: 15px 0px 0px 0px;
`;

const OneLineText = styled.div`
  margin: 0px 10px 0px 0px;
  font-size: 17px;
`;

const TwoLineText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px 0px 0px;
  font-size: 15px;
`;

const Header = ({ isLogin, setUserData, name }) => {
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        signInWithPopup(auth, provider)
          .then((data) => {
            setUserData(data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogleLogout = () => {
    signOut(auth)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <HeaderContainer>
        <ElementWrapper>
          <IconWrapper>
            <ForestRounded sx={{ fontSize: 40 }} />
          </IconWrapper>
          <LogoDetail>나누고 나눔 받는 무한 지식 품앗이</LogoDetail>
        </ElementWrapper>
        {isLogin ? (
          <ElementWrapper>
            <a href="/mypage" className="mypage-link">
              <TwoLineText>
                <div>나는야 고수 {name} 님!</div>
                <div>오늘도 좋은 하루 보내세요!</div>
              </TwoLineText>
              <IconWrapper>
                <ParkRounded sx={{ fontSize: 30 }} />
              </IconWrapper>
            </a>
            <LogoutRounded sx={{ fontSize: 30 }} onClick={handleGoogleLogout} />
          </ElementWrapper>
        ) : (
          <ElementWrapper>
            <OneLineText>나무와 함께 하시겠어요?</OneLineText>
            <GoogleIcon sx={{ fontSize: 30 }} onClick={handleGoogleLogin} />
          </ElementWrapper>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
