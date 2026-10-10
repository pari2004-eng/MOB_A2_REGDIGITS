import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const PHOTO_KEY = 'huguette_profile_photo';

export default function HomeScreen() {
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    async function loadPhoto() {
      try {
        const savedPhoto = await AsyncStorage.getItem(PHOTO_KEY);
        if (savedPhoto) setPhoto(savedPhoto);
      } catch {
        Alert.alert('Notice', 'Could not load your saved profile photo.');
      }
    }

    loadPhoto();
  }, []);

  async function choosePhoto() {
    try {
      const permission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permission.granted) {
        Alert.alert(
          'Gallery permission needed',
          'Please allow photo library access in your phone settings to select a profile photo.'
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (result.canceled) return;

      const selectedPhoto = result.assets[0]?.uri;
      if (!selectedPhoto) return;

      await AsyncStorage.setItem(PHOTO_KEY, selectedPhoto);
      setPhoto(selectedPhoto);
      Alert.alert('Success', 'Your profile photo has been saved.');
    } catch {
      Alert.alert('Photo error', 'Could not select or save the photo. Please try again.');
    }
  }

  function removePhoto() {
    Alert.alert(
      'Remove profile photo',
      'Are you sure you want to remove your photo?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem(PHOTO_KEY);
              setPhoto(null);
            } catch {
              Alert.alert('Error', 'Could not remove the saved photo.');
            }
          },
        },
      ]
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>WELCOME TO MY PORTFOLIO</Text>

        <View style={styles.photoSection}>
          {photo ? (
            <Image source={{ uri: photo }} style={styles.photo} />
          ) : (
            <View style={styles.photoPlaceholder}>
              <Text style={styles.photoEmoji}>👤</Text>
              <Text style={styles.photoPlaceholderText}>No photo yet</Text>
            </View>
          )}

          <Pressable style={styles.photoButton} onPress={choosePhoto}>
            <Text style={styles.photoButtonText}>
              {photo ? 'Replace Photo' : 'Choose Profile Photo'}
            </Text>
          </Pressable>

          {photo && (
            <Pressable
              style={styles.removeButton}
              onPress={removePhoto}
            >
              <Text style={styles.removeButtonText}>Remove Photo</Text>
            </Pressable>
          )}
        </View>

        <Text style={styles.name}>Huguette Parvine ISIMBI</Text>
        <Text style={styles.role}>Aspiring Software Developer</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>About Me 👋</Text>
        <Text style={styles.description}>
          My name is Huguette Parvine ISIMBI. I am a student passionate
          about technology, mobile applications, and learning new skills.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>My Skills 💻</Text>
        <Text style={styles.skill}>📱 React Native</Text>
        <Text style={styles.skill}>⚡ JavaScript</Text>
        <Text style={styles.skill}>🔷 TypeScript</Text>
        <Text style={styles.skill}>🎨 UI/UX Design</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>My Goal 🚀</Text>
        <Text style={styles.description}>
          To build useful mobile applications and become a skilled
          software developer.
        </Text>
      </View>

      <Text style={styles.footer}>Made with 💜 by Huguette</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0FF',
  },
  header: {
    backgroundColor: '#7048E8',
    padding: 30,
    paddingTop: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'flex-start',
  },
  greeting: {
    color: '#E9DDFF',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  photoSection: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 8,
  },
  photo: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  photoPlaceholder: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#E9DDFF',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoEmoji: {
    fontSize: 42,
  },
  photoPlaceholderText: {
    color: '#5030A8',
    fontSize: 12,
    marginTop: 4,
  },
  photoButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginTop: 12,
  },
  photoButtonText: {
    color: '#5030A8',
    fontWeight: 'bold',
  },
  removeButton: {
    padding: 10,
  },
  removeButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  name: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
  },
  role: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    marginBottom: 0,
    padding: 20,
    borderRadius: 18,
    elevation: 3,
  },
  title: {
    color: '#5030A8',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    color: '#444054',
    fontSize: 16,
    lineHeight: 25,
  },
  skill: {
    backgroundColor: '#F0E9FF',
    color: '#5030A8',
    padding: 12,
    borderRadius: 10,
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    textAlign: 'center',
    color: '#7048E8',
    padding: 25,
    fontSize: 14,
  },
});
