import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  overflow: auto;
`;

export const CardItem = styled.div`
  position: relative;
  width: 380px;
  margin: auto;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;

  width: 76px;
  height: 22px;
`;

export const WrapperImages = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28px;
  margin-bottom: 88px;
`;
export const Image = styled.img`
  width: 308px;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 178px;
  left: 50%;
  transform: translate(-50%);
  width: 80px;
  height: 80px;

  z-index: 1;
`;

export const Line = styled.div`
  position: absolute;
  top: 210px;
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 36px;
`;

export const TextTweets = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;

  margin-bottom: 16px;
`;

export const TextFollowers = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;

  margin-bottom: 26px;
`;

export const Button = styled.button`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;

  text-transform: uppercase;

  color: #373737;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border-width: 0;

  padding: 14px 56px;

  &:hover {
    background: #9263c4;
    cursor: pointer;
  }
`;

export const ButtonReverse = styled.button`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;

  text-transform: uppercase;

  color: #373737;
  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border-width: 0;

  padding: 14px 28px;

  &:hover {
    background: #2c8a68;
    cursor: pointer;
  }
`;

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
`;
