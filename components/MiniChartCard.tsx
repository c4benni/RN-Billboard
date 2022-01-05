import { ElementType } from 'react'
import { StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, Text, Image, View, } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import PressEffect from './PressEffect'

interface Props {
    style?: object | object[],
    onPress?: Function,
    title: string,
    subtitle: string,
    img: {
        src: string,
        alt: string
    },
    imageHeight?: number,
    imageStyle?: object,
    titleStyle: {},
    subTitleStyle: {}
}


const MiniChartCard = (props: Props) => {

    const { style, title, subtitle, img, imageHeight, imageStyle, subTitleStyle, titleStyle } = props

    const imageStyles = [styles.image, {
        height: imageHeight || 164,
        ...imageStyle
    }]

    return (
        <PressEffect
            style={[style]}
        >
            {
                img.src ? 
                    <Image
                        accessibilityLabel={img.alt}
                        source={{
                            uri: img.src,
                            cache: 'force-cache'
                        }}
                        style={imageStyles}
                    />
                    : <View
                        accessibilityLabel='music icon'
                        style={[imageStyles, {
                            backgroundColor: '#333'
                        }]}
                    >
                        <Icon
                            name='ios-musical-notes'
                            size={64}
                            color={'#777'}
                        />
                    </View>
            }
            <Text
                style={[styles.title, titleStyle]}
                numberOfLines={1}
            >
                {title}
            </Text>

            <Text
                style={[styles.subtitle, subTitleStyle]}
                numberOfLines={1}
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: '500',
        fontSize: 15,
        color: '#fff',
        marginTop: 4,
        paddingRight: 1
    },
    subtitle: {
        color: '#fff',
        fontSize: 14,
        opacity: 0.7,
        paddingRight: 1
    }
})
