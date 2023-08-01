import React from 'react';
import {SafeAreaView, Text, View, Button, StyleSheet} from 'react-native';

const Final = ({navigation}) => {
  const handleButton = () => {
    navigation.popToTop('HomeScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.finalTitle}>Conclusion!</Text>
      <View style={styles.innerContainer}>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          est animi tenetur porro temporibus, non quidem doloribus autem esse at
          fugit rerum, in ipsa. Repellendus esse quam dolor odit iusto.
        </Text>
      </View>
      <View style={styles.finalButton}>
        <Button
        color="red"
          style={styles.finalButton}
          title="Back to Home Page"
          onPress={handleButton}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
    margin: 5,
  },
  finalTitle: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 22,
  },
  innerContainer: {
    marginTop: 10,
  },
  finalButton: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    width: 180,
    alignItems: 'center',
    marginLeft: 100,
    marginTop: 10,


  }
});

export default Final;
