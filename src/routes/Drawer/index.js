import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Prescription from '../../pages/Prescription';
import MyPharma from '../../pages/MyPharma';
import { StatusBar } from 'react-native';

const Drawer = createDrawerNavigator();

export default function DrawerHome() {
  return (
    <>
      <StatusBar backgroundColor="#4DDBBC" />
      <Drawer.Navigator>
        <Drawer.Screen name="Prescription" component={Prescription} />
        <Drawer.Screen name="MyPharma" component={MyPharma} />
      </Drawer.Navigator>
    </>
  );
}
