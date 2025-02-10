import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boardgame</Text>
      <View style={styles.buttonContainer}>
        <Link href="/lobby" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Create Game</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/lobby" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Join Game</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
    gap: 20,
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 8,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
}); 