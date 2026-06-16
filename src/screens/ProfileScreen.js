import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function ProfileScreen() {
  const teamMembers = [
    {
      id: 1,
      name: 'Bisma',
      seatNo: 'B23110006022',
    },
    {
      id: 2,
      name: 'M. Bilal Shahid',
      seatNo: 'B23110006091',
    },
    {
      id: 3,
      name: 'M. Muzammil Hussain',
      seatNo: 'B23110006108',
    },
    {
      id: 4,
      name: 'Omaima Fatima',
      seatNo: 'B23110006132',
    },
    {
      id: 5,
      name: 'Saad Ahmed',
      seatNo: 'B23110006142',
    },
  ];

  return (<ScrollView
    style={styles.container}
    contentContainerStyle={styles.scrollContent}
    showsVerticalScrollIndicator={true}
  >
    {teamMembers.map((member) => (<View key={member.id} style={styles.profileCard}> 
      <Text style={styles.nameText}>
      {member.name} 
      </Text>
      <Text style={styles.infoText}>
        Seat Number: {member.seatNo}
      </Text>

      <View style={styles.divider} />

      <Text style={styles.projectHeading}>
        Sync Task Application
      </Text>
    </View>
    ))}
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fdc7',
  },

  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  profileCard: {
    width: '100%',
    maxWidth: 700,
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#ffdae6',
    alignItems: 'center',
    marginBottom: 20,
  },

  nameText: {
    fontSize: width > 768 ? 28 : 24,
    fontWeight: 'bold',
    color: '#a366cc',
    textAlign: 'center',
  },

  infoText: {
    fontSize: width > 768 ? 16 : 14,
    color: '#b38ecc',
    marginTop: 5,
    textAlign: 'center',
  },

  divider: {
    width: '80%',
    height: 1,
    backgroundColor: '#ffdae6',
    marginVertical: 15,
  },

  projectHeading: {
    fontSize: width > 768 ? 18 : 16,
    fontWeight: 'bold',
    color: '#a366cc',
    textAlign: 'center',
  },
});
