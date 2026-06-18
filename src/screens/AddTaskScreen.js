import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask } from '../redux/tasksSlice'; // Added updateTask
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddTaskScreen({ navigation, route }) {
  // 1. Detect if we are editing an existing task
  const taskId = route.params?.taskId;
  const taskToEdit = useSelector((state) => 
    state.tasks.items.find(t => t.id === taskId)
  );

  // 2. Initialize state with existing task data or empty values
  const [title, setTitle] = useState(taskToEdit ? taskToEdit.title : '');
  const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : '');
  const [priority, setPriority] = useState(taskToEdit ? taskToEdit.priority : 'Medium');
  const [category, setCategory] = useState(taskToEdit ? taskToEdit.category : 'Study');
  const [date, setDate] = useState(taskToEdit ? new Date(taskToEdit.dueDate) : new Date());
  const [dueDate, setDueDate] = useState(taskToEdit ? taskToEdit.dueDate : '');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const dispatch = useDispatch();

  const onChangeDate = (event, selectedDate) => {
    if (Platform.OS === 'android') setShowDatePicker(false);
    if (event.type === 'set' && selectedDate) {
      setDate(selectedDate);
      setDueDate(selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    }
  };

  const handleSaveTask = () => {
    if (!title.trim()) {
      alert('Please enter a task title!');
      return;
    }

    if (taskToEdit) {
      // 3. Dispatch update if editing
      dispatch(updateTask({
        id: taskId,
        title: title.trim(),
        description: description.trim(),
        dueDate: dueDate || 'No Due Date',
        priority,
        category,
      }));
    } else {
      // 4. Dispatch add if new
      dispatch(addTask({
        id: Date.now().toString(),
        title: title.trim(),
        description: description.trim(),
        dueDate: dueDate || 'No Due Date',
        priority,
        category,
        completed: false,
      }));
    }
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.card}>
        <Text style={styles.label}>{taskToEdit ? "Edit Task Title" : "Task Title"}</Text>
        <TextInput style={styles.input} placeholder="e.g., Study OS Architecture" value={title} onChangeText={setTitle} />
        
        <Text style={styles.label}>Description</Text>
        <TextInput style={[styles.input, styles.textArea]} multiline placeholder="Provide assignment notes..." value={description} onChangeText={setDescription} />

        <Text style={styles.label}>Due Date</Text>
        {Platform.OS === 'web' ? (
          <input type="date" onChange={(e) => {
             const d = new Date(e.target.value);
             setDueDate(d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
          }} style={styles.webInput} />
        ) : (
          <View>
            <TouchableOpacity style={styles.dateInput} onPress={() => setShowDatePicker(true)}>
              <Text style={{ color: dueDate ? '#333' : '#999' }}>{dueDate || 'Select a due date...'}</Text>
            </TouchableOpacity>
            {showDatePicker && <DateTimePicker value={date} mode="date" display="default" onChange={onChangeDate} />}
          </View>
        )}

        <Text style={styles.label}>Category Tag</Text>
        <View style={styles.chipRow}>
          {['Study', 'Personal', 'Work', 'Other'].map(cat => (
            <TouchableOpacity key={cat} style={[styles.chip, category === cat && styles.chipActive]} onPress={() => setCategory(cat)}>
              <Text style={[styles.chipText, category === cat && styles.chipTextActive]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Priority Tier</Text>
        <View style={styles.chipRow}>
          {['Low', 'Medium', 'High'].map(prio => (
            <TouchableOpacity key={prio} style={[styles.chip, priority === prio && styles.chipActive]} onPress={() => setPriority(prio)}>
              <Text style={[styles.chipText, priority === prio && styles.chipTextActive]}>{prio}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSaveTask}>
          <Text style={styles.saveButtonText}>{taskToEdit ? "Update Task" : "Save Task Structure"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fdc7', padding: 20 },
  card: { backgroundColor: '#fff', borderRadius: 20, padding: 20, borderWidth: 1.5, borderColor: '#ffdae6' },
  label: { fontSize: 13, fontWeight: '700', color: '#a366cc', marginBottom: 6 },
  input: { backgroundColor: '#fcffe0', height: 45, borderRadius: 10, paddingHorizontal: 12, marginBottom: 15, fontSize: 14, color: '#333' },
  dateInput: { backgroundColor: '#fcffe0', height: 45, borderRadius: 10, paddingHorizontal: 12, marginBottom: 15, justifyContent: 'center' },
  textArea: { height: 80, paddingTop: 10, textAlignVertical: 'top' },
  chipRow: { flexDirection: 'row', marginBottom: 15 },
  chip: { backgroundColor: '#f5f5f5', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 8, marginRight: 8, borderWidth: 1, borderColor: '#e0e0e0' },
  chipActive: { backgroundColor: '#a366cc', borderColor: '#a366cc' },
  chipText: { fontSize: 12, color: '#666', fontWeight: '600' },
  chipTextActive: { color: '#fff' },
  saveButton: { backgroundColor: '#a366cc', height: 45, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  saveButtonText: { color: '#fff', fontSize: 15, fontWeight: 'bold' }
});