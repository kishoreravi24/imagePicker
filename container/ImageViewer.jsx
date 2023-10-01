import { StyleSheet, Image } from "react-native"

export default function ImageViewer({placeholderImageSource}){
    return(
        <Image source={placeholderImageSource} style={StyleSheet.image}/>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 350,
        height: 350,
        borderRadius: 20,
      }
})