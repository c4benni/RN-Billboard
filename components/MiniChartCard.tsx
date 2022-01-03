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
    },
    imageHeight?: number,
    imageStyle?: object,
    titleStyle: {},
    subTitleStyle: {}
}


const MiniChartCard = (props: Props) => {

    const { style, title, subtitle, src, imageHeight, imageStyle, subTitleStyle, titleStyle } = props

    return (
        <PressEffect
            style={[style]}
        >
            <Image
                source={src}
                style={[styles.image, {
                    height: imageHeight || 164,
                    ...imageStyle
                }]}
            />
            <Text
                style={[styles.title, titleStyle]}
            >
                {title}
            </Text>

            <Text
                style={[styles.subtitle, subTitleStyle]}
            >
                {subtitle}
            </Text>
        </PressEffect>
    )
}

MiniChartCard.defaultProps = {
    imageStyle: {},
    titleStyle: {},
    subTitleStyle: {}
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
        borderRadius: 4,
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
