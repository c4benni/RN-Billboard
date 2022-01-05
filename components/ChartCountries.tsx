import { ElementType } from 'react'
import { StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, Text, Image, } from 'react-native'
import PressEffect from './PressEffect'

interface Props {
    style?: object | object[],
    onPress?: Function,
    title: string,
    subtitle: string,
    src: {
        uri: string
    }
}

const ChartCountries = (props: Props) => {

    const { style, title, src, subtitle } = props

    return (
        <PressEffect
            style={[style]}
        >
            <Image
                source={src}
                style={styles.image}
            />
            <Text
                style={styles.title}
                numberOfLines={1}
            >
                {title}
            </Text>
            <Text
                style={styles.subtitle}
                numberOfLines={2}
            >
                {subtitle}
            </Text>
        </PressEffect>
    )
}

export default ChartCountries;

interface style {
    title: object,
    subtitle: object,
    image: object,
}


const styles: style = StyleSheet.create({
    image: {
        width: '100%',
        height: 280,
        borderRadius: 8
    },
    title: {
        fontWeight: '700',
        fontSize: 28,
        color: '#fff',
        marginTop: 12
    },
    subtitle: {
        color: '#fff',
        fontSize: 16,
        opacity: 0.7,
        marginTop: 4
    }
})
