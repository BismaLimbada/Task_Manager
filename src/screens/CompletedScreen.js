import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, LayoutAnimation } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
// 1. Import deleteTask alongside toggleTaskCompletion
import { toggleTaskCompletion, deleteTask } from '../redux/tasksSlice';

export default function CompletedScreen() {
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();

  // 2. Track which task is currently tapped/expanded
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const completedTasks = tasks.filter((task) => task.completed);

  const handleSelectTask = (id) => {
    // Optional: Make the expansion look smooth
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    
    // If it's already selected, clicking it again closes it. Otherwise, open it.
    setSelectedTaskId(selectedTaskId === id ? null : id);
  };

  const handleUndo = (id) => {
    dispatch(toggleTaskCompletion(id));
    if (selectedTaskId === id) setSelectedTaskId(null); // Close the menu if it was open
  };

  const handleRemove = (id) => {
    dispatch(deleteTask(id));
    if (selectedTaskId === id) setSelectedTaskId(null); // Close the menu if it was open
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>Completed Archives ({completedTasks.length})</Text>
      <FlatList
        data={completedTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isSelected = selectedTaskId === item.id;

          return (
            // 3. Make the entire card clickable to expand it
            <TouchableOpacity 
              style={[styles.taskCard, isSelected && styles.taskCardSelected]} 
              onPress={() => handleSelectTask(item.id)}
              activeOpacity={0.9}
            >
              <View style={styles.mainRow}>
                {/* Quick Undo: Tapping the checkmark still works instantly */}
                <TouchableOpacity
                  style={styles.checkboxChecked}
                  onPress={() => handleUndo(item.id)}
                >
                  <Text style={styles.checkmark}>✓</Text>
                </TouchableOpacity>
                
                <View style={styles.textContainer}>
                  <Text style={styles.taskTitle}>{item.title}</Text>
                </View>
              </View>

              {/* 4. The Action Buttons (Only visible if this specific task is selected) */}
              {isSelected && (
                <View style={styles.actionRow}>
                  <TouchableOpacity 
                    style={styles.undoButton}
                    onPress={() => handleUndo(item.id)}
                  >
                    <Text style={styles.undoText}>Undo</Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                    style={styles.removeButton}
                    onPress={() => handleRemove(item.id)}
                  >
                    <Text style={styles.removeText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              )}
            </TouchableOpacity>
          );
        }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No completed tasks yet. Mark tasks done from the Tasks tab.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fdc7', padding: 20 },
  sectionHeading: { fontSize: 16, fontWeight: 'bold', color: '#a366cc', marginBottom: 12 },
  
  // Card Styles updated for expanding
  taskCard: { 
    backgroundColor: '#ffdae6', 
    padding: 15, 
    borderRadius: 12, 
    marginBottom: 10, 
    opacity: 0.8,
    // Ensure contents layout top-to-bottom
    flexDirection: 'column', 
  },
  taskCardSelected: {
    // Slight highlight when opened so it stands out
    opacity: 1,
    borderWidth: 1,
    borderColor: '#a366cc',
  },
  
  // Keep the original layout for the checkmark and text
  mainRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxChecked: { 
    width: 20, 
    height: 20, 
    borderRadius: 10, 
    backgroundColor: '#a366cc', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 12 
  },
  checkmark: { color: '#fff', fontSize: 11, fontWeight: 'bold' },
  textContainer: { flex: 1 },
  taskTitle: { fontSize: 15, color: '#777', textDecorationLine: 'line-through' },
  
  // --- The New Expanding Action Row Styles ---
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(163, 102, 204, 0.2)', // Faint purple divider line
    paddingTop: 10,
  },
  undoButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(163, 102, 204, 0.15)', // Light purple
    borderRadius: 8,
    marginRight: 10,
  },
  undoText: { 
    color: '#a366cc', 
    fontSize: 14, 
    fontWeight: 'bold',
  },
  removeButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 100, 100, 0.15)', // Light red for danger/delete
    borderRadius: 8,
  },
  removeText: { 
    color: '#e63946', // Deeper red for visibility
    fontSize: 14, 
    fontWeight: 'bold',
  },
  
  emptyText: { textAlign: 'center', color: '#b38ecc', marginTop: 20, fontStyle: 'italic' },
});