import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

export default function TaskDetailScreen({ route, navigation }) {
  const { taskId } = route.params || { taskId: '' };

  // Pulling live single item array indices directly out of Redux engine
  const tasks = useSelector((state) => state.tasks.items);
  const liveTask = tasks.find((t) => t.id === taskId);

  // Soft fallback structures just in case data parameters match a deleted structure
  const currentTask = liveTask || {
    title: 'Unknown Task Structure',
    description: 'No detailed specifications found for this index identifier.',
    dueDate: 'N/A',
    priority: 'Low',
    category: 'Other',
  };

  const getPriorityColor = (prio) => {
    if (prio === 'High') return '#ffb3ba'; 
    if (prio === 'Medium') return '#ffdfba'; 
    return '#bfffba'; 
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailCard}>
        {/* Category & Priority Badges */}
        <View style={styles.badgeRow}>
          <View style={styles.categoryBadge}>
            <Text style={styles.badgeText}>#{currentTask.category}</Text>
          </View>
          <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(currentTask.priority) }]}>
            <Text style={styles.badgeText}>{currentTask.priority} Priority</Text>
          </View>
        </View>

        {/* Task Title */}
        <Text style={styles.taskTitle}>{currentTask.title}</Text>

        {/* Due Date */}
        <Text style={styles.dateLabel}>Due Date:</Text>
        <Text style={styles.dateText}>📅 {currentTask.dueDate}</Text>

        {/* Description */}
        <Text style={styles.descriptionLabel}>Description:</Text>
        <Text style={styles.descriptionText}>{currentTask.description}</Text>

        {/* Edit Button Placeholder */}
        <TouchableOpacity 
  style={styles.editButton}
  // This command tells the app: "Open the AddTask screen, 
  // and pass this task's ID as a parameter named 'taskId'"
  onPress={() => navigation.navigate('AddTask', { taskId: currentTask.id })}
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
    backgroundColor: '#f8fdc7', 
    padding: 20,
    justifyContent: 'center',
  },
  detailCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    borderWidth: 1.5,
    borderColor: '#ffdae6', 
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
    backgroundColor: '#e8eaf6', 
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
    color: '#a366cc', 
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