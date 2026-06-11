import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Text style={styles.nameText}>Bisma</Text>
        <Text style={styles.infoText}>Seat Number: B23110006022</Text>
        <Text style={styles.infoText}>Degree: BS Computer Science</Text>
        <View style={styles.divider} />
        <Text style={styles.projectHeading}>Sync Task Application</Text>
        <Text style={styles.description}>
          A modern, beautiful pastel task manager built using React Native, Expo, and Redux Toolkit.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fcffe0', padding: 20, justifyContent: 'center' },
  profileCard: { backgroundColor: '#fff', padding: 25, borderRadius: 20, borderWidth: 1.5, borderColor: '#ffdae6', alignItems: 'center', elevation: 2 },
  nameText: { fontSize: 24, fontWeight: 'bold', color: '#a366cc', marginBottom: 5 },
  infoText: { fontSize: 14, color: '#b38ecc', marginVertical: 2, fontWeight: '500' },
  divider: { width: '80%', height: 1, backgroundColor: '#ffdae6', marginVertical: 15 },
  projectHeading: { fontSize: 16, fontWeight: 'bold', color: '#a366cc', marginBottom: 8 },
  description: { fontSize: 13, color: '#666', textAlign: 'center', lineHeight: 18 }
});