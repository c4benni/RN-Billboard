import { ElementType } from 'react'
import {
    StyleSheet, Text, View,
} from 'react-native'
import PressEffect from './PressEffect'

interface Props {
    title: string,
    type?: 'primary' | 'secondary',
    link?: boolean,
    style?: object | object[],
    onPress?: Function
}

const UiBtn = (props: Props) => {
    const { title, type, onPress } = props

    return (
        <PressEffect onPress={onPress}>
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
        </PressEffect>
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
