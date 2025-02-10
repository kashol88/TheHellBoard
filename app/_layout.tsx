import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen 
          name="index"
          options={{ 
            title: 'Welcome',
          }}
        />
        <Stack.Screen 
          name="lobby"
          options={{ 
            title: 'Game Lobby',
          }}
        />
        <Stack.Screen 
          name="game"
          options={{ 
            title: 'Game',
            headerBackVisible: false,
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
} 