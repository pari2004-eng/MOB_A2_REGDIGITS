
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const skills = [
  { name: 'React Native', detail: 'Learning mobile app development' },
  { name: 'JavaScript', detail: 'Learning programming fundamentals' },
  { name: 'TypeScript', detail: 'Learning typed JavaScript' },
  { name: 'UI/UX Design', detail: 'Exploring user-friendly interfaces' },
  { name: 'Problem Solving', detail: 'Practising logical thinking' },
];

export default function SkillsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Skills 💜</Text>
      <Text style={styles.subtitle}>
        Skills I am developing on my learning journey.
      </Text>

      {skills.map((skill) => (
        <View key={skill.name} style={styles.card}>
          <Text style={styles.name}>{skill.name}</Text>
          <Text style={styles.detail}>{skill.detail}</Text>
        </View>
      ))}

      {/* Education and Training - added section */}
      <Text style={styles.sectionHeading}>Education & Training</Text>

      <View style={styles.card}>
        <Text style={styles.name}>Software Engineering</Text>
        <Text style={styles.educationPlace}>INES Ruhengeri</Text>
        <Text style={styles.educationDate}>2024–2027 · Year 3</Text>
        <Text style={styles.detail}>
          Studying software engineering and developing programming
          and application development skills.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.name}>
          Certificate in Artificial Intelligence
        </Text>
        <Text style={styles.educationPlace}>Additional Training</Text>
        <Text style={styles.detail}>
          Completed training in artificial intelligence and received
          a certificate.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0FF',
    padding: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5030A8',
    marginTop: 35,
  },
  subtitle: {
    fontSize: 16,
    color: '#555066',
    marginTop: 8,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 14,
    elevation: 2,
  },
  name: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#5030A8',
  },
  detail: {
    fontSize: 15,
    color: '#555066',
    marginTop: 8,
  },

  // Styles added for Education and Training
  sectionHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5030A8',
    marginTop: 18,
    marginBottom: 16,
  },
  educationPlace: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555066',
    marginTop: 8,
  },
  educationDate: {
    fontSize: 14,
    color: '#7048E8',
    marginTop: 6,
  },
});