
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>About Me 💜</Text>

      <View style={styles.card}>
        <Text style={styles.label}>My Name</Text>
        <Text style={styles.value}>Huguette Parvine ISIMBI</Text>

        <Text style={styles.label}>App Name</Text>
        <Text style={styles.value}>HuguettePortfolio</Text>

        <Text style={styles.label}>Registration Number</Text>
        <Text style={styles.value}>25/27647</Text>

        <Text style={styles.label}>Verification Code</Text>
        <Text style={styles.value}>MOB-A2-7647</Text>

        <Text style={styles.label}>Version</Text>
        <Text style={styles.value}>1.0.0</Text>

        <Text style={styles.label}>My Goal</Text>
        <Text style={styles.value}>
          I am learning mobile application development and working to improve
          my programming skills.
        </Text>

        <Text style={styles.label}>Data Use</Text>
        <Text style={styles.value}>
          This app stores profile information and the selected profile photo
          locally on this device using AsyncStorage. The information is used
          to display and maintain my portfolio. It is not sent to a remote
          server by this app.
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
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 16,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5030A8',
    marginTop: 15,
  },
  value: {
    fontSize: 16,
    color: '#555066',
    marginTop: 6,
    lineHeight: 24,
  },
});