import React from 'react';
import { StatusBar, Image, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Prescription from '../../pages/Prescription';
import MyPharma from '../../pages/MyPharma';
import Bularium from '../../pages/Bularium';
import Dependent from '../../pages/Dependent';
import MyAccount from '../../pages/MyAccount';
import { IconFA5 } from '../../assets/icon';
import { logoMedPres } from '../../assets/images';
import Button from '../../components/Button';
import Text from '../../components/Text';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  console.log(props);
  return (
    <DrawerContentScrollView
      contentContainerStyle={{ justifyContent: 'space-between', flex: 1 }}
      {...props}>
      <Image
        resizeMode="contain"
        source={logoMedPres}
        style={{ height: 100, width: 200, alignSelf: 'center' }}
      />
      <DrawerItemList {...props} />
      <TouchableOpacity
        style={{
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <IconFA5 style={{ marginRight: 10 }} size={18} name="sign-out-alt" />
        <Text fontSize={16}>Sair</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

export default function DrawerHome() {
  return (
    <>
      <StatusBar backgroundColor="#4DDBBC" />
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="Prescription"
          component={Prescription}
          options={{
            drawerLabel: ({ focused }) => (
              <Text fontWeight={focused && 'bold'} fontSize={16}>
                Prescrições
              </Text>
            ),
            drawerIcon: () => <IconFA5 name="notes-medical" size={20} />,
            labelStyle: { fontSize: 20, color: 'green' },
          }}
        />
        <Drawer.Screen
          name="MyPharma"
          component={MyPharma}
          options={{
            drawerLabel: ({ focused }) => (
              <Text fontWeight={focused && 'bold'} fontSize={16}>
                Minha Farmacia
              </Text>
            ),
            drawerIcon: () => <IconFA5 name="shopping-basket" size={20} />,
          }}
        />
        <Drawer.Screen
          name="Bularium"
          component={Bularium}
          options={{
            drawerLabel: ({ focused }) => (
              <Text fontWeight={focused && 'bold'} fontSize={16}>
                Bulário
              </Text>
            ),
            drawerIcon: () => <IconFA5 name="search" size={20} />,
          }}
        />
        <Drawer.Screen
          name="Dependent"
          component={Dependent}
          options={{
            drawerLabel: ({ focused }) => (
              <Text fontWeight={focused && 'bold'} fontSize={16}>
                Dependentes
              </Text>
            ),
            drawerIcon: () => <IconFA5 name="user-friends" size={20} />,
          }}
        />
        <Drawer.Screen
          name="MyAccount"
          component={MyAccount}
          options={{
            drawerLabel: ({ focused }) => (
              <Text fontWeight={focused && 'bold'} fontSize={16}>
                Minha Conta
              </Text>
            ),
            drawerIcon: () => <IconFA5 name="user-cog" size={20} />,
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
