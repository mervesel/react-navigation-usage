import React from 'react';
import {SafeAreaView, Text, StyleSheet, Button, View} from 'react-native';

const Home = ({navigation}) => {
  const handleButton = () => {
    navigation.navigate('AboutScreen', {username: 'mervesel', email: 'merve@gmail.com'});
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.homeText}>Giriş</Text>
      <Text style={styles.text2}>Hoş Geldiniz!</Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.homeButton}
          color="red"
          title="Next Page"
          onPress={handleButton}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeText: {
    color: 'red',
    fontSize: 22,
    fontWeight: 'bold',
  },
  text2: {
    color: '#333',
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonContainer: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    textAlign: 'right',
    width: 120
    
  }
});

export default Home;
