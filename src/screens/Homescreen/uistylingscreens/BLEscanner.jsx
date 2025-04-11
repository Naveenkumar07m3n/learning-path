// components/BLEScanner.js
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {Container,Title,Status,ScanButton,ButtonText,DeviceCard,DeviceName,DeviceId,} from '../../../utils/styles/Commonstyles'; // 👈 path might change based on folder structure

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
        <ButtonText>{isScanning ? 'Scanning...' : 'Start Scan'}</ButtonText>
      </ScanButton>

      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
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

export default BLEScanner;
