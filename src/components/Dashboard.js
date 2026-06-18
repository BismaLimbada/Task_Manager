import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { quote, author } = useSelector((state) => state.tasks);

  const quoteText = quote || 'The secret of getting ahead is getting started.';
  const authorText = author || 'Loading...';

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontStyle: 'italic' }}>"{quoteText}"</Text>
      <Text style={{ fontWeight: 'bold' }}>- {authorText}</Text>
    </View>
  );
};

export default Dashboard;