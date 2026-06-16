import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function AddTaskScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('Study');

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.card}>
        <Text style={styles.label}>Task Title</Text>
        <TextInput style={styles.input} placeholder="e.g., Study OS Architecture" value={title} onChangeText={setTitle} />

        <Text style={styles.label}>Description</Text>
        <TextInput style={[styles.input, styles.textArea]} multiline placeholder="Provide assignment notes..." value={description} onChangeText={setDescription} />

        <Text style={styles.label}>Due Date</Text>
        <TextInput style={styles.input} placeholder="e.g., June 18, 2026" value={dueDate} onChangeText={setDueDate} />

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

        <TouchableOpacity style={styles.saveButton} onPress={() => navigation.goBack()}>
          <Text style={styles.saveButtonText}>Save Task Structure</Text>
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
  textArea: { height: 80, paddingTop: 10, textAlignVertical: 'top' },
  chipRow: { flexDirection: 'row', marginBottom: 15 },
  chip: { backgroundColor: '#f5f5f5', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 8, marginRight: 8, borderWidth: 1, borderColor: '#e0e0e0' },
  chipActive: { backgroundColor: '#a366cc', borderColor: '#a366cc' },
  chipText: { fontSize: 12, color: '#666', fontWeight: '600' },
  chipTextActive: { color: '#fff' },
  saveButton: { backgroundColor: '#a366cc', height: 45, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  saveButtonText: { color: '#fff', fontSize: 15, fontWeight: 'bold' }
});