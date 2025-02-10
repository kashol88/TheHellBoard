import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import our screens (we'll create these next)
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';
import LobbyScreen from './src/screens/LobbyScreen';

export type RootStackParamList = {
  Home: undefined;
  Lobby: undefined;
  Game: { gameId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen 
            name="Lobby" 
            component={LobbyScreen}
            options={{ title: 'Game Lobby' }}
          />
          <Stack.Screen 
            name="Game" 
            component={GameScreen}
            options={{ title: 'Game', headerBackVisible: false }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
