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
  List,
} from './App.styled';
import data from '../data/data.json';

export const App = () => {
  const [isFollowers, setIsFollowers] = useState(data);

  const onFollow = id => {
    setIsFollowers(
      isFollowers.map(item =>
        item.id === id ? { ...item, followers: item.followers + 1 } : item
      )
    );
    console.log(setIsFollowers);
    console.log('follow');
  };

  const unFollow = id => {
    setIsFollowers(
      isFollowers.map(item =>
        item.id === id ? { ...item, followers: item.followers - 1 } : item
      )
    );
    console.log('unFollow');
  };

  //   useState(() => {
  //   const saved = localStorage.getItem('usersFollowers');
  //   const initialValue = JSON.parse(saved);
  //   // const amount = Object.values(data);
  //   const res = data.map(({ id }) => id === id.followers);
  //   console.log(res);

  //   return initialValue || data[1].followers;
  // });
  // console.log(data[1].followers);
  // useEffect(() => {
  //   localStorage.setItem('usersFollowers', JSON.stringify(isFollowers));
  // }, [isFollowers]);

  // const formatedFollowers = new Intl.NumberFormat('en').format(isFollowers);
  // console.log(formatedFollowers);

  // const onFollow = () => {
  //   setIsFollowers(prevState => prevState + 1);
  //   console.log('follow');
  // };

  // const unFollow = () => {
  //   setIsFollowers(prevState => prevState - 1);
  //   console.log('unFollow');
  // };

  return (
    <Container>
      <List>
        {data.map(({ id, avatar, tweets, followers }) => (
          <CardItem key={id}>
            <Logo src={require('../images/logo.png')} alt="logo" />
            <WrapperImages>
              <Image src={require('../images/picture.png')} />
              <Avatar src={require('../images/avatar.png')} />
            </WrapperImages>
            <Line></Line>
            <Wrapper>
              <TextTweets> {tweets} tweets</TextTweets>
              <TextFollowers>{followers} Followers</TextFollowers>
              <Button onClick={() => onFollow(id)}>Follow</Button>

              {/* {followers ? (
                <Button onClick={() => onFollow(id)}>Follow</Button>
              ) : (
                <ButtonReverse onClick={() => unFollow(id)}>
                  Following
                </ButtonReverse>
              )} */}
            </Wrapper>
          </CardItem>
        ))}
      </List>
    </Container>
  );
};
