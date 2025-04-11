// components/UserProfileList.js
import React from 'react';
import { FlatList } from 'react-native';
import {Container, Card, Avatar, Name, Bio, FollowButton, ButtonText,
} from '../../../utils/styles/Commonstyles';

const users = [
  {
    id: '1',
    name: 'Samantha Lee',
    bio: 'Mobile Dev. Coffee lover.',
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  {
    id: '2',
    name: 'Daniel Kim',
    bio: 'React Native Wizard.',
    avatar: 'https://i.pravatar.cc/100?img=15',
  },
  {
    id: '3',
    name: 'Ava Patel',
    bio: 'UX Designer & plant mom',
    avatar: 'https://i.pravatar.cc/100?img=20',
  },
  {
    id: '4',
    name: 'Marcus Brown',
    bio: 'Full Stack Engineer.',
    avatar: 'https://i.pravatar.cc/100?img=30',
  },
  {
    id: '5',
    name: 'Luna García',
    bio: 'iOS Dev. Love Swift & space',
    avatar: 'https://i.pravatar.cc/100?img=40',
  },
  {
    id: '6',
    name: 'Yuki Nakamura',
    bio: 'Android + Kotlin. Cat person',
    avatar: 'https://i.pravatar.cc/100?img=50',
  },
];

const UserProfileList = () => {
  const renderItem = ({ item }) => (
    <Card>
      <Avatar source={{ uri: item.avatar }} />
      <Name>{item.name}</Name>
      <Bio>{item.bio}</Bio>
      <FollowButton onPress={() => alert(`Followed ${item.name}`)}>
        {/* <Icon name="user-plus" size={18} color="#fff" /> */}
        <ButtonText>Follow</ButtonText>
      </FollowButton>
    </Card>
  );

  return (
    <Container>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default UserProfileList;
