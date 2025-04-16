import React from 'react';
import { AuthProvider } from '../../screens/Homescreen/Authscreen/Authcontext';
import Hookscontext from './Hookscontext';

const Mainscreencontext = () => {
  return (
    <AuthProvider>
        <Hookscontext />
    </AuthProvider>
   
  );
};

export default Mainscreencontext;
