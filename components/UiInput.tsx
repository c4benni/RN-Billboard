import { ElementType, createElement, useState, useRef } from 'react'
import { StyleSheet, TouchableOpacity, TouchableNativeFeedback, View, Platform, TextInput, } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

interface Props {
    value: string,
    onChange: Function,
}

const clearIconSize = 20

const UiInput = (props: Props) => {

    const { value, onChange } = props;

    const IOS = Platform.OS === 'ios'

    const inputRef = useRef<TextInput>(null)

    const Root: ElementType =
        IOS ?
            TouchableOpacity
            : TouchableNativeFeedback

    const idleColor = '#a7a7a7'

    return (
        <Root
            activeOpacity={0.8}
            onPress={
                () => {
                    if (inputRef?.current) {
                        inputRef.current.focus()
                    }
                }
            }
        >
            <View
                key={'root-view'}
                style={[
                    styles.root,
                ]}>
                <Icon
                    name="search"
                    size={20}
                    color={idleColor}
                    style={styles.searchIcon}
                />

                <TextInput
                    ref={inputRef}
                    placeholder='Search'
                    placeholderTextColor={idleColor}
                    keyboardAppearance='dark'
                    style={styles.input}
                    enablesReturnKeyAutomatically
                    value={value}
                    returnKeyType="search"
                    onChangeText={(text) => onChange(text)}
                />

                {
                    value ?
                        <View style={styles.clearIconWrap}>
                            <Root activeOpacity={0.7} onPress={() => onChange('')}>
                                <Icon
                                    name="clear"
                                    size={clearIconSize * 0.70}
                                    color={'#333'}
                                />
                            </Root>
                        </View>
                        : null
                }
            </View>
        </Root>
    )
}

UiInput.defaultProps = {
    value: '',
    onChange: () => { }
}

export default UiInput;

interface style {
    root: object,
    searchIcon: object,
    input: object,
    clearIconWrap: object,
}


const styles: style = StyleSheet.create({
    root: {
        paddingHorizontal: 12,
        height: 42,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#333',
        width: '100%'
    },

    searchIcon: {
        position: 'absolute',
        left: 8,
        opacity: 0.8
    },

    input: {
        minWidth: '100%',
        paddingHorizontal: 20,
        zIndex: 1,
        color: '#fff'
    },

    clearIconWrap: {
        position: 'absolute',
        right: 8,
        width: clearIconSize,
        height: clearIconSize,
        borderRadius: clearIconSize * 0.5,
        backgroundColor: '#888',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
})
