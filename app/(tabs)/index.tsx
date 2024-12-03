import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function HomeScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [isEditing, setIsEditing] = useState(true);

  // Open image picker using Expo Image Picker
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // Toggle editing mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <View style={styles.container}>
      {isEditing ? (
        <View style={styles.form}>
          {/* Image Picker */}
          <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
            {image ? (
              <Image source={{ uri: image }} style={styles.imagePreview} />
            ) : (
              <Text style={styles.imagePlaceholder}>Tap to upload image</Text>
            )}
          </TouchableOpacity>

          {/* Message Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter your message"
            placeholderTextColor="#888"
            value={message}
            onChangeText={setMessage}
          />

          {/* Color Picker */}
          <View style={styles.colorPicker}>
            <TouchableOpacity
              style={[styles.colorOption, { backgroundColor: '#FF0000' }]}
              onPress={() => setTextColor('#FF0000')}
            />
            <TouchableOpacity
              style={[styles.colorOption, { backgroundColor: '#00FF00' }]}
              onPress={() => setTextColor('#00FF00')}
            />
            <TouchableOpacity
              style={[styles.colorOption, { backgroundColor: '#0000FF' }]}
              onPress={() => setTextColor('#0000FF')}
            />
          </View>

          {/* Finalize Button */}
          <Button title="Display Card" onPress={toggleEditMode} />
        </View>
      ) : (
        <View style={styles.display}>
          {/* Overlay Message */}
          <View style={styles.messageContainer}>
            <Image
              source={{
                uri: 'https://img.icons8.com/color/48/000000/birthday-cake.png',
              }}
              style={styles.cakeIcon}
            />
            <Text style={[styles.displayMessage, { color: textColor }]}>
              {message}
            </Text>
          </View>

          {/* Display Image */}
          {image && (
            <Image source={{ uri: image }} style={styles.displayImage} />
          )}

          {/* Edit Button */}
          <View style={styles.editButtonContainer}>
            <Button title="Edit" onPress={toggleEditMode} />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  imagePicker: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  imagePlaceholder: {
    fontSize: 16,
    color: '#888',
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  colorPicker: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  display: {
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  displayImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginTop: 16,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cakeIcon: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  displayMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  editButtonContainer: {
    marginTop: 20,
    alignSelf: 'center',
  },
});
