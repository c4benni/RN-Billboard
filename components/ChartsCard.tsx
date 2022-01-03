import { ElementType } from 'react'
import { StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, Text, Image, } from 'react-native'

interface Props {
    style?: object | object[],
    onPress?: Function,
    title: string
}


const ChartsCard = (props: Props) => {

    const { style, title } = props

    const IOS = Platform.OS === 'ios'

    const Root: ElementType =
        IOS ?
            TouchableOpacity
            : TouchableNativeFeedback

    const uri = `../assets/gradient.png`
    const imageURI = require(uri)

    return (
        <Root
            activeOpacity={0.8}
            style={[styles.root, style]}
        >
            <Image
                source={imageURI}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    opacity: 0.6,
                }}
                blurRadius={150}
            />
            <Text
                style={styles.title}
            >
                {title}
            </Text>
        </Root>
    )
}

export default ChartsCard;

interface style {
    root: object,
    title: object,
}


const styles: style = StyleSheet.create({
    root: {
        backgroundColor: '#000',
        borderRadius: 12,
        overflow: 'hidden'
    },
    title: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        margin: 8,
        fontWeight: '600',
        color: '#fff'
    }
})
