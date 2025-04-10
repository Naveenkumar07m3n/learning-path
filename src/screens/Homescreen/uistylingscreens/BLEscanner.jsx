import React, { useState } from 'react';
import styled from 'styled-components/native';
import { FlatList, } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';



const BLEScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [devices, setDevices] = useState([
    { id: '1', name: 'Heart Rate Monitor', uuid: '12:34:56:78:9A:BC' },
    { id: '2', name: 'Temp Sensor', uuid: '98:76:54:32:10:FF' },
    { id: '3', name: 'Fitness Tracker', uuid: 'AB:CD:EF:12:34:56' },
    { id: '4', name: 'Smart Scale', uuid: 'FE:DC:BA:65:43:21' },
  ]);

  const handleScan = () => {
    setIsScanning(true);
    // TODO: integrate actual BLE scan logic here
    setTimeout(() => setIsScanning(false), 2000);
  };

  return (
    <Container>
      <Title>BLE Device Scanner</Title>
      <Status>{isScanning ? 'Scanning for devices...' : 'Press scan to start searching'}</Status>

      <ScanButton onPress={handleScan}>
        {/* <Icon name="bluetooth" size={20} color="#fff" /> */}
        <ButtonText>{isScanning ? 'Scanning...' : 'Start Scan'}</ButtonText>
      </ScanButton>

      <FlatList
        data={devices}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <DeviceCard>
            <DeviceName>{item.name || 'Unnamed Device'}</DeviceName>
            <DeviceId>{item.uuid}</DeviceId>
          </DeviceCard>
        )}
      />
    </Container>
  );
};
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f7fa;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 10px;
`;

const Status = styled.Text`
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 20px;
`;

const ScanButton = styled.TouchableOpacity`
  background-color: #3b82f6;
  padding: 14px;
  border-radius: 12px;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  margin-left: 8px;
`;

const DeviceCard = styled.View`
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 12px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
  elevation: 3;
`;

const DeviceName = styled.Text`
  font-size: 18px;
  color: #111827;
`;

const DeviceId = styled.Text`
  font-size: 12px;
  color: #6b7280;
  margin-top: 4px;
`;

export default BLEScanner;
