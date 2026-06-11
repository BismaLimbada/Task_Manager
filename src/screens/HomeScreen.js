import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Revise OS Lecture 3 Notes', priority: 'High', category: 'Study', completed: false },
    { id: '2', title: 'Design Task Manager Logo Frame', priority: 'Medium', category: 'Work', completed: false },
    { id: '3', title: 'Buy pastel highlighters', priority: 'Low', category: 'Personal', completed: false },
  ]);

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const filteredTasks = tasks.filter(t => 
    !t.completed && t.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getPriorityColor = (prio) => {
    if (prio === 'High') return '#ffb3ba';
    if (prio === 'Medium') return '#ffdfba';
    return '#bfffba';
  };

  return (
    <View style={styles.container}>
      <View style={styles.quoteCard}>
        <Text style={styles.quoteText}>"The secret of getting ahead is getting started."</Text>
        <Text style={styles.quoteAuthor}>— ZenQuotes API placeholder</Text>
      </View>

      <TextInput 
        style={styles.searchBar}
        placeholder="Search active tasks..."
        placeholderTextColor="#b38ecc"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <Text style={styles.sectionHeading}>Active Assignments ({filteredTasks.length})</Text>
      
      <FlatList
        data={filteredTasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <TouchableOpacity style={styles.checkbox} onPress={() => handleToggleComplete(item.id)} />
            <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate('TaskDetail', { taskId: item.id })}>
              <Text style={styles.taskTitle}>{item.title}</Text>
              <View style={styles.badgeRow}>
                <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(item.priority) }]}>
                  <Text style={styles.badgeText}>{item.priority}</Text>
                </View>
                <View style={styles.categoryBadge}>
                  <Text style={styles.badgeText}>#{item.category}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No active tasks match your view.</Text>}
      />
      {/* FLOATING ACTION BUTTON TO CREATE TASKS */}
      <TouchableOpacity 
        style={styles.floatingButton} 
        onPress={() => navigation.navigate('AddTask')}
      >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fcffe0', padding: 20 },
  quoteCard: { backgroundColor: '#fff', padding: 15, borderRadius: 15, borderLeftWidth: 4, borderLeftColor: '#a366cc', marginBottom: 20 },
  quoteText: { fontStyle: 'italic', color: '#555', fontSize: 13 },
  quoteAuthor: { fontSize: 11, color: '#a366cc', marginTop: 5, textAlign: 'right' },
  searchBar: { backgroundColor: '#fff', height: 45, borderRadius: 12, paddingHorizontal: 15, borderWidth: 1, borderColor: '#ffdae6', marginBottom: 20 },
  sectionHeading: { fontSize: 16, fontWeight: 'bold', color: '#a366cc', marginBottom: 12 },
  taskCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 15, borderRadius: 12, marginBottom: 10, borderWidth: 1, borderColor: '#ffdae6' },
  checkbox: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#b38ecc', marginRight: 12 },
  textContainer: { flex: 1 },
  taskTitle: { fontSize: 15, color: '#333', fontWeight: '500' },
  badgeRow: { flexDirection: 'row', marginTop: 6 },
  priorityBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6, marginRight: 6 },
  categoryBadge: { backgroundColor: '#e8eaf6', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 },
  badgeText: { fontSize: 10, fontWeight: 'bold', color: '#555' },
  emptyText: { textAlign: 'center', color: '#b38ecc', marginTop: 20, fontStyle: 'italic' }, 
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#a366cc',
    width: 55,
    height: 55,
    borderRadius: 27.5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#a366cc',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  floatingButtonText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  }
});