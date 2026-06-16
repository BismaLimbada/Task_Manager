import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function CompletedScreen() {
  const completedMockData = [
    { id: '2', title: 'Design Task Manager Logo Frame', priority: 'Medium', category: 'Work' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>Completed Archives ({completedMockData.length})</Text>
      <FlatList
        data={completedMockData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <View style={styles.checkboxChecked}>
              <Text style={styles.checkmark}>✓</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.taskTitle}>{item.title}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fdc7', padding: 20 },
  sectionHeading: { fontSize: 16, fontWeight: 'bold', color: '#a366cc', marginBottom: 12 },
  taskCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffdae6', padding: 15, borderRadius: 12, marginBottom: 10, opacity: 0.8 },
  checkboxChecked: { width: 20, height: 20, borderRadius: 10, backgroundColor: '#a366cc', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  checkmark: { color: '#fff', fontSize: 11, fontWeight: 'bold' },
  textContainer: { flex: 1 },
  taskTitle: { fontSize: 15, color: '#777', textDecorationLine: 'line-through' }
});