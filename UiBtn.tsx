import { ElementType, createElement } from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, View, Platform, } from 'react-native'

interface Props {
    title: string,
    type?: 'primary' | 'secondary',
    link?: boolean
}

const UiBtn = (props: Props) => {
    const { title, type } = props

    const Root: ElementType =
        Platform.OS === 'android' ?
            TouchableNativeFeedback
            : TouchableOpacity

    return (
        createElement(Root, {}, [
            <View
                key={'root-view'}
                style={[
                    styles.root,
                    type ? styles[type] : []
                ]}>
                <Text style={
                    [styles.text,
                    type ? styles.textColor : []
                    ]
                }>
                    {title}
                </Text>
            </View>
        ])
    )
}

export default UiBtn;

interface style {
    root: object,
    text: object,
    primary: object,
    secondary: object,
    textColor: object
}

const styles: style = StyleSheet.create({
    root: {
        paddingHorizontal: 32,
        height: 48,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 17,
        fontWeight: '500'
    },

    textColor: {
        color: '#fff'
    },

    primary: {
        backgroundColor: '#007bff',
    },

    secondary: {}
})
