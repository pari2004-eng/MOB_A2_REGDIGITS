
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

const STORAGE_KEY = 'huguette_profile';

export default function ProfileEditorScreen() {
  const [headline, setHeadline] = useState('Aspiring Software Developer');
  const [bio, setBio] = useState('');
  const [primarySkill, setPrimarySkill] = useState('React Native');
  const [availability, setAvailability] = useState('Open to opportunities');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);

        if (saved) {
          const profile = JSON.parse(saved);
          setHeadline(profile.headline ?? 'Aspiring Software Developer');
          setBio(profile.bio ?? '');
          setPrimarySkill(profile.primarySkill ?? 'React Native');
          setAvailability(profile.availability ?? 'Open to opportunities');
        }
      } catch {
        setMessage('Could not load saved profile information.');
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  async function handleSave() {
    const newErrors: Record<string, string> = {};

    if (headline.trim().length < 5) {
      newErrors.headline = 'Headline must be at least 5 characters.';
    }

    if (bio.trim().length < 20) {
      newErrors.bio = 'Bio must be at least 20 characters.';
    }

    if (!primarySkill.trim()) {
      newErrors.primarySkill = 'Please enter your primary skill.';
    }

    if (!availability.trim()) {
      newErrors.availability = 'Please enter your availability.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setMessage('Please correct the fields marked below.');
      return;
    }

    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          headline: headline.trim(),
          bio: bio.trim(),
          primarySkill: primarySkill.trim(),
          availability: availability.trim(),
        })
      );

      setMessage('Profile saved successfully!');
    } catch {
      setMessage('Could not save your profile. Please try again.');
    }
  }

  function handleReset() {
    Alert.alert(
      'Reset Profile',
      'Are you sure you want to delete your saved profile and restore the defaults?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem(STORAGE_KEY);

              setHeadline('Aspiring Software Developer');
              setBio('');
              setPrimarySkill('React Native');
              setAvailability('Open to opportunities');
              setErrors({});
              setMessage('Profile reset successfully.');
            } catch {
              setMessage('Could not reset your profile. Please try again.');
            }
          },
        },
      ]
    );
  }

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#5030A8" />
        <Text style={styles.subtitle}>Loading your profile...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.heading}>Edit My Profile</Text>
      <Text style={styles.subtitle}>
        Update your professional information.
      </Text>

      <Text style={styles.label}>Professional headline</Text>
      <TextInput
        style={styles.input}
        value={headline}
        onChangeText={setHeadline}
        placeholder="e.g. Aspiring Software Developer"
        accessibilityLabel="Professional headline"
      />
      {errors.headline && <Text style={styles.error}>{errors.headline}</Text>}

      <Text style={styles.label}>Short biography</Text>
      <TextInput
        style={[styles.input, styles.bioInput]}
        value={bio}
        onChangeText={setBio}
        placeholder="Tell people about yourself (at least 20 characters)"
        multiline
        textAlignVertical="top"
        accessibilityLabel="Short biography"
      />
      {errors.bio && <Text style={styles.error}>{errors.bio}</Text>}

      <Text style={styles.label}>Primary skill</Text>
      <TextInput
        style={styles.input}
        value={primarySkill}
        onChangeText={setPrimarySkill}
        placeholder="e.g. React Native"
        accessibilityLabel="Primary skill"
      />
      {errors.primarySkill && (
        <Text style={styles.error}>{errors.primarySkill}</Text>
      )}

      <Text style={styles.label}>Availability status</Text>
      <TextInput
        style={styles.input}
        value={availability}
        onChangeText={setAvailability}
        placeholder="e.g. Open to opportunities"
        accessibilityLabel="Availability status"
      />
      {errors.availability && (
        <Text style={styles.error}>{errors.availability}</Text>
      )}

      <Pressable style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Profile</Text>
      </Pressable>

      <Pressable style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>Reset Profile</Text>
      </Pressable>

      {message !== '' && (
        <View style={styles.messageBox}>
          <Text style={styles.message}>{message}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0FF',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F0FF',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5030A8',
    marginTop: 30,
  },
  subtitle: {
    fontSize: 15,
    color: '#555066',
    marginTop: 8,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5030A8',
    marginBottom: 7,
    marginTop: 14,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#C7B6F5',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    color: '#333044',
  },
  bioInput: {
    minHeight: 110,
  },
  error: {
    color: '#B42318',
    fontSize: 13,
    marginTop: 6,
  },
  button: {
    backgroundColor: '#5030A8',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#B42318',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  resetButtonText: {
    color: '#B42318',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageBox: {
    marginTop: 16,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#E9DFFF',
  },
  message: {
    color: '#5030A8',
    fontSize: 14,
  },
});