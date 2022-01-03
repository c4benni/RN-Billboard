import { ElementType } from 'react'
import { StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, Text, Image, } from 'react-native'

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
        <Root
            activeOpacity={0.8}
            style={[styles.root, style]}
        >
            <Image
                source={src}
                style={{
                    width: '100%',
                    height: 164,
                    borderRadius: 4
                }}
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
        </Root>
    )
}

export default MiniChartCard;

interface style {
    root: object,
    title: object,
    subtitle: object,
}


const styles: style = StyleSheet.create({
    root: {
    },
    title: {
        fontWeight: '500',
        fontSize: 16,
        color: '#fff'
    },
    subtitle: {
        color: '#fff',
        fontSize: 16,
        opacity: 0.7
    }
})
