import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';

const projects = [
  {
    id: 'portfolio',
    title: 'My Portfolio App',
    problem: 'A way to introduce myself and present my skills.',
    contribution: 'Designed the screen and built the app step by step.',
    technology: 'React Native, Expo, TypeScript',
  },
  {
    id: 'planner',
    title: 'Student Task Planner',
    problem: 'Keeping track of study tasks and deadlines.',
    contribution: 'Planned a simple way to organize daily tasks.',
    technology: 'Mobile app development',
  },
];

export default function ProjectsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Projects 🚀</Text>

      <Text style={styles.subtitle}>
        Tap a project to see its details.
      </Text>

      {projects.map((project) => (
        <Pressable
          key={project.id}
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: '/project-details',
              params: { id: project.id },
            })
          }
        >
          <Text style={styles.title}>{project.title}</Text>

          <Text style={styles.body}>{project.problem}</Text>

          <Text style={styles.tap}>Tap to view details →</Text>
        </Pressable>
      ))}
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
    marginBottom: 16,
    elevation: 2,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#5030A8',
    marginBottom: 10,
  },
  body: {
    fontSize: 15,
    color: '#444054',
    lineHeight: 22,
  },
  tap: {
    fontSize: 14,
    color: '#7048E8',
    fontWeight: 'bold',
    marginTop: 14,
  },
});
