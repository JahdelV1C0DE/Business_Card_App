import { Image, StyleSheet, Platform } from 'react-native';
import { Linking } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1A0D8', dark: '#3E1C64' }}
      headerImage={
        <Image
          source={require('@/assets/images/Jahdel.jpeg')}
          style={styles.Jahdel}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Jahdel White Computer Science Student</ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Email</ThemedText>
        <ThemedText>
        <ThemedText
          type="defaultSemiBold"
          onPress={() =>
            Linking.openURL(
              'https://mail.google.com/mail/u/3/#inbox'
            )
          }>
          https://mail.google.com/mail/u/3/#inbox
        </ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold">jahdelwhitetech@gmail.com</ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold">
          {' '}
            {Platform.select({
             // ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
       
        </ThemedText>
      </ThemedView>


      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Contact Number#</ThemedText>

        <ThemedText type="defaultSemiBold" 
            onPress={() => Linking.openURL('tel:(843)-457-7464')}> (843)-457-7464
        </ThemedText>
      </ThemedView>



      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">GitHub Respository</ThemedText>
        
          
          {' '}
         
         
          <ThemedText
          type="defaultSemiBold"
          onPress={() =>
            Linking.openURL(
              'https://github.com/Jahdel-V-White/IST236_2024.git'
            )
          }>
          https://github.com/Jahdel-V-White/IST236_2024.git
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}



const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  Jahdel: {
    height: 450,
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
    top: 30,
    resizeMode: 'cover', 
  },
  

  imageContainer: {
    flex: 3,
    backgroundColor: '#ff8800',
  },
  image: {
    height: 300,
  },
  informationContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25ff1d',
  },
});
