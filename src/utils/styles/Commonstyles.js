// styles/UserProfileList.styles.js
import styled from 'styled-components/native';

// export const Container = styled.SafeAreaView`
//   flex: 1;
//   background-color: #f3f4f6;
//   padding: 20px;
// `;

export const Card = styled.View`
  background-color: white;
  padding: 24px;
  border-radius: 16px;
  align-items: center;
  margin-bottom: 16px;
  elevation: 5;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-bottom: 12px;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #111827;
`;

export const Bio = styled.Text`
  font-size: 14px;
  color: #6b7280;
  text-align: center;
  margin-top: 6px;
  margin-bottom: 16px;
`;

export const FollowButton = styled.TouchableOpacity`
  background-color: #3b82f6;
  padding: 10px 16px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

// export const ButtonText = styled.Text`
//   color: white;
//   font-size: 15px;
//   margin-left: 8px;
// `;
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f7fa;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 10px;
`;

export const Status = styled.Text`
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 20px;
`;

export const ScanButton = styled.TouchableOpacity`
  background-color: #3b82f6;
  padding: 14px;
  border-radius: 12px;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  margin-left: 8px;
`;

export const DeviceCard = styled.View`
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 12px;
  elevation: 3;
`;

export const DeviceName = styled.Text`
  font-size: 18px;
  color: #111827;
`;

export const DeviceId = styled.Text`
  font-size: 12px;
  color: #6b7280;
  margin-top: 4px;
`;
