import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TaskDetailScreen({ route, navigation }) {
  // In Phase 2, your partners will use this taskId to grab the exact task from Redux!
  const { taskId } = route.params || { taskId: '1' };

  // Hardcoded mock data matching the exact UI fields required by your checklist
  const mockTaskDetails = {
    id: taskId,
    title: 'Revise OS Lecture 3 Notes',
    description: 'Go through kernel architecture, process states, and context switching diagrams before the next quiz.',
    dueDate: 'June 18, 2026',
    priority: 'High',
    category: 'Study',
  };

  const getPriorityColor = (prio) => {
    if (prio === 'High') return '#ffb3ba'; // Pastel Red
    if (prio === 'Medium') return '#ffdfba'; // Pastel Orange
    return '#bfffba'; // Pastel Green
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailCard}>
        {/* Category & Priority Badges */}
        <View style={styles.badgeRow}>
          <View style={styles.categoryBadge}>
            <Text style={styles.badgeText}>#{mockTaskDetails.category}</Text>
          </View>
          <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(mockTaskDetails.priority) }]}>
            <Text style={styles.badgeText}>{mockTaskDetails.priority} Priority</Text>
          </View>
        </View>

        {/* Task Title */}
        <Text style={styles.taskTitle}>{mockTaskDetails.title}</Text>

        {/* Due Date */}
        <Text style={styles.dateLabel}>Due Date:</Text>
        <Text style={styles.dateText}>📅 {mockTaskDetails.dueDate}</Text>

        {/* Description */}
        <Text style={styles.descriptionLabel}>Description:</Text>
        <Text style={styles.descriptionText}>{mockTaskDetails.description}</Text>

        {/* Edit Button Placeholder (Requirement Check) */}
        <TouchableOpacity 
          style={styles.editButton}
          onPress={() => alert('Edit Screen Flow placeholder - For Phase 2 Technical Hand-off')}
        >
          <Text style={styles.editButtonText}>Edit Task Details</Text>
        </TouchableOpacity>
      </View>

      {/* Back Button Layout Navigation */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Go Back to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcffe0', // Muted Pastel Yellow base
    padding: 20,
    justifyContent: 'center',
  },
  detailCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    borderWidth: 1.5,
    borderColor: '#ffdae6', // Soft Pink Border
    shadowColor: '#b38ecc',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  badgeRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  categoryBadge: {
    backgroundColor: '#e8eaf6', // Muted Blue/Purple
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 10,
  },
  priorityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#555',
  },
  taskTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#a366cc', // Custom Deep Pastel Purple
    marginBottom: 20,
    lineHeight: 28,
  },
  dateLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#b38ecc',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
    marginBottom: 20,
  },
  descriptionLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#b38ecc',
    marginBottom: 4,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginBottom: 25,
  },
  editButton: {
    backgroundColor: '#a366cc',
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#a366cc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
  },
  backButtonText: {
    color: '#a366cc',
    fontSize: 14,
    fontWeight: '600',
  },
});