import { useState, useEffect } from 'react';
import {
  CardItem,
  Container,
  Logo,
  Image,
  Avatar,
  Line,
  WrapperImages,
  Wrapper,
  TextTweets,
  TextFollowers,
  Button,
  ButtonReverse,
} from './App.styled';

const initialValue = 100500;

export const App = () => {
  const [isFollowers, setIsFollowers] = useState(() => {
    const saved = localStorage.getItem('followers');
    const followers = JSON.parse(saved);
    return followers || initialValue;
  });

  useEffect(() => {
    localStorage.setItem('followers', JSON.stringify(isFollowers));
  }, [isFollowers]);

  const formatedFollowers = new Intl.NumberFormat('en').format(isFollowers);

  const onFollow = () => {
    setIsFollowers(prevState => prevState + 1);
  };

  const unFollow = () => {
    setIsFollowers(prevState => prevState - 1);
  };

  return (
    <Container>
      <CardItem>
        <Logo src={require('../images/logo.png')} alt="logo" />
        <WrapperImages>
          <Image src={require('../images/picture.png')} />
          <Avatar src={require('../images/avatar.png')} />
        </WrapperImages>
        <Line></Line>
        <Wrapper>
          <TextTweets> 777 tweets</TextTweets>
          <TextFollowers>{formatedFollowers} Followers</TextFollowers>
          {isFollowers === initialValue ? (
            <Button onClick={onFollow}>Follow</Button>
          ) : (
            <ButtonReverse onClick={unFollow}>Following</ButtonReverse>
          )}
        </Wrapper>
      </CardItem>
    </Container>
  );
};
