import { Pressable, View, StyleSheet, Text } from "react-native";


export default function Button({label}) {
    return(
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert("You pressed a button.")}>
            <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 350,
        height: 70,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 20,
    }
})