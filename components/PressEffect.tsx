import { ReactNode, useRef } from 'react'
import {
    Animated, Platform, Pressable, TouchableNativeFeedback
} from 'react-native'

interface Props {
    children?: ReactNode,
    activeScale: number,
    initialScale: number,
    activeOpacity: number,
    initialOpacity: number,
    onPress: Function,
    onPressIn: Function,
    onPressOut: Function,
    onTouchMove: Function,
    style?: object
}

const PressEffect = (props: Props) => {
    const { children, activeScale, initialScale, initialOpacity, activeOpacity, onPress, onPressIn, onPressOut, onTouchMove, style } = props

    const isAndroid = Platform.OS === 'android'

    if (isAndroid) {
        return (
            <TouchableNativeFeedback
                style={style}
                onPress={(e) => { onPress(e) }}
                onPressIn={(e) => onPressIn(e)}
                onPressOut={(e) => onPressOut(e)}
            >
                {children}
            </TouchableNativeFeedback>
        )
    }

    const scale = useRef(new Animated.Value(initialScale)).current;
    const fade = useRef(new Animated.Value(initialOpacity)).current;

    const scaleDown = () => {
        activeScale && Animated.spring(scale,
            {
                toValue: activeScale,
                useNativeDriver: true
            }
        ).start()

        activeOpacity && Animated.spring(fade,
            {
                toValue: activeOpacity,
                useNativeDriver: true
            }
        ).start()
    }

    const resetScale = () => {
        activeScale && Animated.spring(scale,
            {
                toValue: initialScale,
                useNativeDriver: true
            }
        ).start()

        activeOpacity && Animated.spring(fade,
            {
                toValue: initialOpacity,
                useNativeDriver: true
            }
        ).start()
    }

    return (
        <Pressable
            onPressIn={(e) => {
                onPressIn(e)
                scaleDown()
            }}
            onPressOut={(e) => {
                onPressOut(e);
                resetScale()
            }}
            onTouchMove={(e) => {
                onTouchMove(e)
                resetScale()
            }}
            style={style}
        >
            <Animated.View
                style={{
                    transform: [{
                        scale
                    }],
                    opacity: fade
                }}
            >
                {children}
            </Animated.View>
        </Pressable>
    )
}

PressEffect.defaultProps = {
    activeScale: 0.9875,
    initialScale: 1,
    activeOpacity: 0.75,
    initialOpacity: 1,
    onPress: () => { },
    onPressIn: () => { },
    onPressOut: () => { },
    onTouchMove: () => { }
}

export default PressEffect;
