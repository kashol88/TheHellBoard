import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

export default function LobbyScreen() {
  const [gameCode, setGameCode] = useState('');
  const [players, setPlayers] = useState<string[]>(['Player 1']); // Add more players as they join
  const router = useRouter();

  const startGame = () => {
    // In the future, this will create/join a real multiplayer game
    router.push({
      pathname: '/game',
      params: { gameId: gameCode || 'test-game' }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Lobby</Text>
      
      <View style={styles.codeContainer}>
        <Text style={styles.label}>Game Code:</Text>
        <TextInput
          style={styles.input}
          value={gameCode}
          onChangeText={setGameCode}
          placeholder="Enter game code"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.playersContainer}>
        <Text style={styles.label}>Players:</Text>
        {players.map((player, index) => (
          <Text key={index} style={styles.playerItem}>{player}</Text>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={startGame}
      >
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  codeContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  playersContainer: {
    marginBottom: 30,
  },
  playerItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
}); 