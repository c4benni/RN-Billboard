import { ElementType } from 'react'
import { StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, Text, Image, } from 'react-native'
import PressEffect from './PressEffect'

interface Props {
    style?: object | object[],
    onPress?: Function,
    title: string,
    src: {
        uri: string
    }
}

const ChartArtistCard = (props: Props) => {

    const { style, title, src } = props

    const IOS = Platform.OS === 'ios'

    const Root: ElementType =
        IOS ?
            TouchableOpacity
            : TouchableNativeFeedback

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
            >
                {title}
            </Text>
        </PressEffect>
    )
}

export default ChartArtistCard;

interface style {
    title: object,
    subtitle: object,
    image: object,
}


const styles: style = StyleSheet.create({
    image: {
        width: '100%',
        height: 236,
        borderRadius: 8
    },
    title: {
        fontWeight: '500',
        fontSize: 16,
        color: '#fff',
        marginTop: 8
    },
    subtitle: {
        color: '#fff',
        fontSize: 16,
        opacity: 0.7
    }
})
