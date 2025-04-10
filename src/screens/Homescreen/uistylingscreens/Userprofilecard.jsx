import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { FlatList } from 'react-native';


const users = [
  {
    id: '1',
    name: 'Samantha Lee',
    bio: 'Mobile Dev. Coffee lover. ',
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  {
    id: '2',
    name: 'Daniel Kim',
    bio: 'React Native Wizard. ',
    avatar: 'https://i.pravatar.cc/100?img=15',
  },
  {
    id: '3',
    name: 'Ava Patel',
    bio: 'UX Designer & plant mom ',
    avatar: 'https://i.pravatar.cc/100?img=20',
  },
  {
    id: '4',
    name: 'Marcus Brown',
    bio: 'Full Stack Engineer. ',
    avatar: 'https://i.pravatar.cc/100?img=30',
  },
  {
    id: '5',
    name: 'Luna García',
    bio: 'iOS Dev. Love Swift & space ',
    avatar: 'https://i.pravatar.cc/100?img=40',
  },
  {
    id: '6',
    name: 'Yuki Nakamura',
    bio: 'Android + Kotlin. Cat person ',
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
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
const Container = styled.SafeAreaView
`
  flex: 1;
  background-color: #f3f4f6;
  padding: 20px;
`;

const Card = styled.View
`
  background-color: white;
  padding: 24px;
  border-radius: 16px;
  align-items: center;
  margin-bottom: 16px;
  box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
  elevation: 5;
`;

const Avatar = styled.Image
`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-bottom: 12px;
`;

const Name = styled.Text
`
  font-size: 20px;
  font-weight: bold;
  color: #111827;
`;

const Bio = styled.Text
`
  font-size: 14px;
  color: #6b7280;
  text-align: center;
  margin-top: 6px;
  margin-bottom: 16px;
`;

const FollowButton = styled.TouchableOpacity
`
  background-color: #3b82f6;
  padding: 10px 16px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`

const ButtonText = styled.Text
`
  color: white;
  font-size: 15px;
  margin-left: 8px;
`

export default UserProfileList;
