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


const MiniChartCard = (props: Props) => {

    const { style, title, subtitle, src } = props

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

            <Text
                style={styles.subtitle}
            >
                {subtitle}
            </Text>
        </PressEffect>
    )
}

export default MiniChartCard;

interface style {
    image: object,
    title: object,
    subtitle: object,
}


const styles: style = StyleSheet.create({
    image: {
        width: '100%',
        height: 164,
        borderRadius: 4
    },
    title: {
        fontWeight: '500',
        fontSize: 15,
        color: '#fff',
        marginTop: 4
    },
    subtitle: {
        color: '#fff',
        fontSize: 14,
        opacity: 0.7
    }
})
