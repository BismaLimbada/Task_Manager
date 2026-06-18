import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskCompletion } from '../redux/tasksSlice';

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  // 1. New state to control the visibility of the celebration popup
  const [showCongrats, setShowCongrats] = useState(false);
  
  // Pulling live data dynamically from the Redux global store engine
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();

  const handleToggleComplete = (task) => {
    // Forward the action to toggle state parameters globally
    dispatch(toggleTaskCompletion(task.id));

    // 2. Trigger the celebration modal since the task is being completed
    if (!task.completed) {
      setShowCongrats(true);
      
      // Automatically hide the popup after 2 seconds
      setTimeout(() => {
        setShowCongrats(false);
      }, 2000);
    }
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
      <TextInput 
        style={styles.searchBar}
        placeholder="Search active tasks..."
        placeholderTextColor="#b38ecc"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <Text style={styles.sectionHeading}>Current Tasks ({filteredTasks.length})</Text>
      
      <FlatList
        data={filteredTasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            {/* 3. Pass the entire 'item' to the handler instead of just the ID */}
            <TouchableOpacity style={styles.checkbox} onPress={() => handleToggleComplete(item)} />
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

      <TouchableOpacity 
        style={styles.floatingButton} 
        onPress={() => navigation.navigate('AddTask')}
      >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>

      {/* 4. The Celebration Modal Overlay */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showCongrats}
        onRequestClose={() => setShowCongrats(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.celebrationCard}>
            <Text style={styles.celebrationEmoji}>🎉</Text>
            <Text style={styles.celebrationTitle}>Task Completed!</Text>
            <Text style={styles.celebrationSubtitle}>Great job, keep that momentum going.</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fdc7', padding: 20 },
  searchBar: { backgroundColor: '#fff', height: 45, borderRadius: 12, paddingHorizontal: 15, borderWidth: 1, borderColor: '#ffdae6', marginBottom: 20 },
  sectionHeading: { fontSize: 16, fontWeight: 'bold', color: '#8038af', marginBottom: 12 },
  taskCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 15, borderRadius: 12, marginBottom: 10, borderWidth: 1, borderColor: '#ffdae6' },
  checkbox: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#b38ecc', marginRight: 12 },
  textContainer: { flex: 1 },
  taskTitle: { fontSize: 15, color: '#333', fontWeight: '500' },
  badgeRow: { flexDirection: 'row', marginTop: 6 },
  priorityBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6, marginRight: 6 },
  categoryBadge: { backgroundColor: '#b38ecc', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 },
  badgeText: { fontSize: 10, fontWeight: 'bold', color: '#ffffff' },
  emptyText: { textAlign: 'center', color: '#b38ecc', marginTop: 20, fontStyle: 'italic' }, 
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#8038af',
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
  },
  
  // --- New Modal Styles ---
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  celebrationCard: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 30,
    alignItems: 'center',
    width: '80%',
    maxWidth: 350,
    borderWidth: 2,
    borderColor: '#ffdae6', // Matches your card borders
    shadowColor: '#8038af',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 10,
  },
  celebrationEmoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  celebrationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8038af', // Matches your section headings
    marginBottom: 8,
    textAlign: 'center',
  },
  celebrationSubtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
});