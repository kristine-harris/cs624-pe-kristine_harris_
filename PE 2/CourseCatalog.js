import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const CourseCatalog = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('./icon.png')} style={styles.image} />
      <TextInput
        style={styles.textInput}
        onChangeText={setText}
        value={text}
        placeholder="Enter a course name"
      />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.courseTitle}>Software Engineering</Text>
        <Text style={styles.courseTitle}>Programming</Text>
        <Text style={styles.courseTitle}>Cloud Computing</Text>
        <Text style={styles.courseTitle}>Computer Architecture</Text>
        <Text style={styles.courseTitle}>Secure Systems</Text>
        <Text style={styles.courseTitle}>Discrete Math</Text>
        <Text style={styles.courseTitle}>Artificial Intelligence</Text>
        <Text style={styles.courseTitle}>Machine Learning</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  textInput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  scrollView: {
    width: '80%',
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CourseCatalog;