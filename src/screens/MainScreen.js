import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';

export default function MainScreen({ navigation }) {
  return (
    <View style={Platform.OS === 'web' ? styles.webWrapper : styles.fullScreen}>
      <View style={styles.container}>
        
        {/* App Name */}
        <Text style={styles.appName}>Sync Task</Text>

        {/* Tagline */}
        <Text style={styles.tagline}>
          Stay Organized, Stay Synced!
        </Text>

        {/* Let's Start Button */}
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.replace('HomeTabs')}
        >
          <Text style={styles.startButtonText}>Let's Organize</Text>
        </TouchableOpacity>

        {/* Task Management Image */}
        <Image
          source={require('../../assets/mainsc/1.png')}
          style={styles.image}
          // THE FIX: 'contain' on web shows the WHOLE image without cropping.
          // 'cover' on phone keeps your original look perfect.
          resizeMode={Platform.OS === 'web' ? 'contain' : 'cover'}
        />

        <View style={styles.quoteCard}>
          <Text style={styles.quoteText}>
            "The secret of getting ahead is getting started."
          </Text>
          <Text style={styles.quoteAuthor}>
            — ZenQuotes API placeholder
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // This style forces the web background to be yellow
  webWrapper: {
    flex: 1,
    backgroundColor: '#f8fdc7',
    alignItems: 'center', // Centers the content horizontally on web
    justifyContent: 'center', // Added to vertically center the content on web
  },
  fullScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f8fdc7',
    paddingTop: 80,
    paddingHorizontal: 25,
    width: '100%',
    maxWidth: 450, // This keeps the web view looking like a phone!
    maxHeight: '100vh',
  },
  appName: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#5e2783',
    marginTop: 0,
  },
  tagline: {
    fontSize: 18,
    color: '#5e2783',
    marginTop: 10,
    marginBottom: 20,
    fontStyle: 'italic',
  },
  startButton: {
    backgroundColor: '#5e2783',
    width: 180,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    flex: 1, // Allows image to shrink dynamically
    alignSelf: 'center',
    marginTop: 0,
  },
  quoteCard: {
    backgroundColor: '#f8fdc7',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
    color: '#41155f',
  },
  quoteAuthor: {
    fontSize: 14,
    textAlign: 'right',
    color: '#5e2783',
  },
});