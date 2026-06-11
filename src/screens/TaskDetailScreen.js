import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TaskDetailScreen({ route }) {
  // We grab the parameters passed via navigation routes
  const { taskId } = route.params || { taskId: 'N/A' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔍 Task Detail View</Text>
      <Text style={styles.detailText}>Viewing details for Task ID: {taskId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    color: '#333',
  },
});