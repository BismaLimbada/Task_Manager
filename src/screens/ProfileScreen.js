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
      role: 'Lead System Architect',
      contributions: [
        'Generated core framework base skeleton app structure.',
        'Initialized system file configurations and project directory matrix.',
        'Established operational multi-platform workspace testing environments.',
      ],
    },
    {
      id: 2,
      name: 'M. Bilal Shahid',
      seatNo: 'B23110006091',
      role: 'QA Testing & Production Deployment Lead',
      contributions: [
        'Managed core codebase asset validation and layout alignment reviews.',
        'Monitored live rendering across mobile device screens and web viewports.',
        'Responsible for end-to-end cloud production build deployment configurations.',
      ],
    },
    {
      id: 3,
      name: 'M. Muzammil Hussain',
      seatNo: 'B23110006108',
      role: 'State Management Engineer',
      contributions: [
        'Programmed global interaction layers utilizing Redux Toolkit.',
        'Mapped core action dispatchers and centralized task data slices.',
        'Ensured clean data state availability across multi-tier views.',
      ],
    },
    {
      id: 4,
      name: 'Omaima Fatima',
      seatNo: 'B23110006132',
      role: 'Lead UI/UX Layout Engineer',
      contributions: [
        'Translated application wireframes into responsive frontend layouts.',
        'Engineered custom input sheets, forms, selector chips, and text layouts.',
        'Enforced strict custom pastel visual identity theme constraints.',
      ],
    },
    {
      id: 5,
      name: 'Saad Ahmed',
      seatNo: 'B23110006142',
      role: 'Data Persistence & API Specialist',
      contributions: [
        'Formulated key-value offline storage data models utilizing AsyncStorage.',
        'Designed logic routines to commit tasks directly to hardware storage memory.',
        'Connected network endpoints to parse incoming public REST API data trays.',
      ],
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={true}
    >
      <Text style={styles.mainScreenHeader}>Project Engineering Team</Text>
      
      {teamMembers.map((member) => (
        <View key={member.id} style={styles.profileCard}> 
          <Text style={styles.nameText}>{member.name}</Text>
          <Text style={styles.roleText}>{member.role}</Text>
          <Text style={styles.infoText}>Seat Number: {member.seatNo}</Text>

          <View style={styles.divider} />

          <Text style={styles.projectHeading}>Core Contributions</Text>
          
          <View style={styles.contributionContainer}>
            {member.contributions.map((contribution, index) => (
              <View key={index} style={styles.bulletRow}>
                <Text style={styles.bulletPoint}>🍇</Text>
                <Text style={styles.bulletText}>{contribution}</Text>
              </View>
            ))}
          </View>
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
  mainScreenHeader: {
    fontSize: width > 768 ? 26 : 22,
    fontWeight: 'bold',
    color: '#8038af',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileCard: {
    width: '100%',
    maxWidth: 700,
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#ffdae6',
    marginBottom: 20,
    shadowColor: '#a366cc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nameText: {
    fontSize: width > 768 ? 26 : 22,
    fontWeight: 'bold',
    color: '#8038af',
    textAlign: 'center',
  },
  roleText: {
    fontSize: width > 768 ? 16 : 14,
    fontWeight: '600',
    color: '#a366cc',
    marginTop: 4,
    textAlign: 'center',
  },
  infoText: {
    fontSize: width > 768 ? 14 : 12,
    color: '#b38ecc',
    marginTop: 3,
    textAlign: 'center',
  },
  divider: {
    width: '90%',
    height: 1,
    backgroundColor: '#ffdae6',
    marginVertical: 15,
    alignSelf: 'center',
  },
  projectHeading: {
    fontSize: width > 768 ? 16 : 14,
    fontWeight: 'bold',
    color: '#8038af',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  contributionContainer: {
    width: '100%',
    paddingHorizontal: 5,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 12,
    marginRight: 8,
    marginTop: 2,
  },
  bulletText: {
    flex: 1,
    fontSize: width > 768 ? 14 : 13,
    color: '#555',
    lineHeight: 18,
  },
});
