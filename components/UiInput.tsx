import { useRef } from 'react'
import { StyleSheet, View, Platform, TextInput, Pressable, } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import PressEffect from './PressEffect'

interface Props {
    value: string,
    onChange: Function,
}

const clearIconSize = 20

const UiInput = (props: Props) => {

    const { value, onChange } = props;

    const inputRef = useRef<TextInput>(null)

    const idleColor = '#a7a7a7'

    return (
        <PressEffect
            activeOpacity={0.8}
            activeScale={0.99}
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
                        <Pressable onPress={() => onChange('')} style={styles.clearIconWrap}>
                            <Icon
                                name="clear"
                                size={clearIconSize * 0.70}
                                color={'#333'}
                            />
                        </Pressable>
                        : null
                }
            </View>
        </PressEffect>
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
