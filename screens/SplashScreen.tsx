import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ReactNode } from 'react'

interface Props {
    slot: ReactNode[] | ReactNode
}

export default function SplashScreen(props: Props) {
    const imageURI = require('../assets/gradient.png')

    return (
        <ImageBackground
            source={imageURI}
            style={styles.image}
            blurRadius={300}
        >
            {props.slot}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        backgroundColor: '#000',
        height: '100%',
        width: '100%',
    },
});
