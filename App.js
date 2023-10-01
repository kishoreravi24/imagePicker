import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ImageViewer from './container/ImageViewer';
import Button from './container/Button';

const placeHolderImage = require('./assets/wallpaper1.jpeg');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={placeHolderImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo"/>
        <Button label="Use this photo"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
      flex: 1,
      paddingTop: 50,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center'
  }
});
