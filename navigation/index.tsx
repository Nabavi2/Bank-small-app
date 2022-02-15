/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, MaterialCommunityIcons, MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName, Platform, View, Text, SafeAreaView } from 'react-native';
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import BelanceScreen from '../screens/BelanceScreen';
import HomeScreen from '../screens/HomeScreen';
import CardScreen from '../screens/CardScreen';
import LoginScreen from '../screens/LoginScreen';
import { HomeParamList, RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Icon } from 'native-base';




export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<HomeParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Card" component={CardScreen} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Belance" component={BelanceScreen} />
      </Stack.Group>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.white,
        tabBarStyle: { backgroundColor: Colors.black, }

      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'HomeScreen', headerShown: false, tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" size={35} color={color} />, }}
      />
      <BottomTab.Screen
        name="Belance"
        component={BelanceScreen}
        options={{
          title: 'BelanceScreen',
          headerShown: false,

          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="currency-usd" size={35} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Card"
        component={CardScreen}
        options={{
          headerShown: false,
          title: 'CardScreen',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cart" size={35} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

//Drawer Stack Navigator for show drawer and navigate
const DrawerNavigator = createDrawerNavigator();
export const AppDrawerNavigator = () => {
  return (
    <DrawerNavigator.Navigator
      drawerContent={(props: any) => {
        return (
          <View style={{ flex: 1, paddingTop: 20, backgroundColor: "#222" }}>
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
              {/* <Image
                style={{
                  width: 200,
                  height: 200,
                  marginLeft: 30,
                  marginBottom: 20,
                  marginTop: 30,
                  borderRadius: 100,
                }}
                source={require("../assets/images/netflixx.png")}
              /> */}
              <DrawerItemList {...props} />

            </SafeAreaView>
          </View>
        );
      }}
      screenOptions={{
        drawerActiveTintColor: Colors.primary,
        headerStyle: { backgroundColor: "#222" },
        headerTintColor: "white",
        drawerInactiveTintColor: "#ddd",
      }}
    >
      <DrawerNavigator.Screen
        name="NETFLIX"
        component={HomeScreen}
        options={{
          drawerIcon: (props: any) => (
            <Ionicons
              name={Platform.OS === "android" ? "home" : "ios-home"}
              size={23}
              color={props.color}
            />
          ),
          headerTitleStyle: { color: Colors.primary },
        }}
      />
      <DrawerNavigator.Screen
        name="Belance"
        component={BelanceScreen}
        options={{
          drawerIcon: (props: any) => (
            <Ionicons
              name={Platform.OS === "android" ? "search" : "ios-search"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />

      <DrawerNavigator.Screen
        name="CardScreen"
        component={CardScreen}
        options={{
          drawerIcon: (props: any) => (
            <MaterialIcons
              name={
                Platform.OS === "android" ? "video-library" : "video-library"
              }
              size={23}
              color={props.color}
            />
          ),
        }}
      />
    </DrawerNavigator.Navigator>
  );
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

