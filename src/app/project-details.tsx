
import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';

export default function ProjectDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const isPlanner = id === 'planner';

  const project = isPlanner
    ? {
        title: 'Student Task Planner',
        problem: 'Keeping track of study tasks and deadlines.',
        contribution: 'Planned a simple way to organize daily tasks.',
        technology: 'Mobile app development',
      }
    : {
        title: 'My Portfolio App',
        problem: 'A way to introduce myself and present my skills.',
        contribution: 'Designed the screen and built the app step by step.',
        technology: 'React Native, Expo, TypeScript',
      };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>{project.title}</Text>

      <Text style={styles.label}>Problem</Text>
      <Text style={styles.body}>{project.problem}</Text>

      <Text style={styles.label}>My contribution</Text>
      <Text style={styles.body}>{project.contribution}</Text>

      <Text style={styles.label}>Technology used</Text>
      <Text style={styles.body}>{project.technology}</Text>

      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>← Back to Projects</Text>
      </Pressable>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5030A8',
    marginTop: 35,
    marginBottom: 20,
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#7048E8',
    marginTop: 18,
  },
  body: {
    fontSize: 16,
    color: '#444054',
    lineHeight: 24,
    marginTop: 6,
  },
  button: {
    backgroundColor: '#5030A8',
    padding: 16,
    borderRadius: 12,
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});