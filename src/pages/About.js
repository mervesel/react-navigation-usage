import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const About = ({navigation, route}) => {
  const handleSubmit1 = () => {
    navigation.goBack('HomeScreen');
  };
  const handleSubmit=()=>{
    navigation.navigate('FinalScreen');
  }

  const {username} = route.params;
  const {email} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.aboutTitle}>About</Text>
      <View style={styles.content}>
        <Text style={styles.aboutText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          cupiditate aliquid voluptatem culpa odio totam veniam qui hic dicta
          ea?
        </Text>
        <View style={styles.paramsText}>
          <Text> {username} </Text>
          <Text> {email} </Text>
        </View>

        <Image
          style={styles.aboutImg}
          source={require('../assets/navPic.jpg')}
        />
        <View style={styles.innerButtons}>
          <View style={styles.aboutButton1}>
            <Button
              color="red"
              title="Go back to Home"
              onPress={handleSubmit1}
            />
          </View>
          <View style={styles.aboutButton}>
            <Button
              color="red"
              title="Go to the Final"
              onPress={handleSubmit}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  aboutImg: {
    width: 500,
    height: 500,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    marginVertical: 5,
    paddingVertical: 5,
  },
  aboutTitle: {
    padding: 5,
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
  },
  aboutText: {
    padding: 5,
  },
  aboutButton1: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    width: 180,
  },
  paramsText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  aboutButton: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    width: 180,

  },innerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default About;
