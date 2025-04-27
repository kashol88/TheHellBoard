import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function GameScreen() {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const router = useRouter();
  const { gameId } = useLocalSearchParams<{ gameId: string }>();

  const exitGame = () => {
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.gameInfo}>Game ID: {gameId}</Text>
        <Text style={styles.gameInfo}>Player {currentPlayer}'s Turn</Text>
      </View>

      <View style={styles.board}>
        {/* This is a placeholder for the game board */}
        <Text style={styles.placeholderText}>Game Board Will Go Here</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.button}
          onPress={exitGame}
        >
          <Text style={styles.buttonText}>Exit Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');
const boardSize = Math.min(width * 0.9, 400);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  gameInfo: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  board: {
    width: boardSize,
    height: boardSize,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ddd',
    marginVertical: 20,
  },
  placeholderText: {
    fontSize: 16,
    color: '#999',
  },
  controls: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#e74c3c',
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