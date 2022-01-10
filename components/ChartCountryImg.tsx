import { useEffect, useState } from 'react'
import { View, NativeModules } from 'react-native'
import ImageColors from 'react-native-image-colors'

const ChartCountryCard = ({ images }: { images: string[] }) => {
    const initialState = {
        colorOne: { value: '', name: '' },
        colorTwo: { value: '', name: '' },
        colorThree: { value: '', name: '' },
        colorFour: { value: '', name: '' },
        rawResult: '',
    }

    const [colors, setColors] = useState(initialState);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchColors = async () => {

            const resizeImage = (str: string, size: string) =>
                str.replace(/\/\d+x\d+\w+?\.\w+$/, `/${size}cc.jpg`);

            const loadingImage = resizeImage(images[0], '32x32');

            NativeModules.colorGraber.getColors(loadingImage, (_, res) => {
                alert(res);
                // Returns:
                // {
                //  'UIDeviceRGBColorSpace 0.0784314 0.0941176 0.0823529 1': '0.1666667',
                //  'UIDeviceRGBColorSpace 0.215686 0.203922 0.262745 1': '0.1666667',
                //  'UIDeviceRGBColorSpace 0.517647 0.45098 0.380392 1': '0.6666667'
                // }
            });

            const result = await ImageColors.getColors(loadingImage, {
                fallback: '#000000',
                quality: 'low',
                pixelSpacing: 5,
                // cache: true,
            })

            alert(result)

            switch (result.platform) {
                case 'android':
                case 'web':
                    setColors({
                        colorOne: { value: result.lightVibrant || '', name: 'lightVibrant' },
                        colorTwo: { value: result.dominant || '', name: 'dominant' },
                        colorThree: { value: result.vibrant || '', name: 'vibrant' },
                        colorFour: { value: result.darkVibrant || '', name: 'darkVibrant' },
                        rawResult: JSON.stringify(result),
                    })
                    break
                case 'ios':
                    setColors({
                        colorOne: { value: result.background, name: 'background' },
                        colorTwo: { value: result.detail, name: 'detail' },
                        colorThree: { value: result.primary, name: 'primary' },
                        colorFour: { value: result.secondary, name: 'secondary' },
                        rawResult: JSON.stringify(result),
                    })
                    break
                default:
                    throw new Error('Unexpected platform')
            }
        }

        fetchColors().then(() => {
            setLoading(false)
        })
    }, [])

    const selfStyles = {
        backgroundColor: '#000',
        width: '100%',
        height: 280,
        borderRadius: 8
    }

    if (loading) {
        return (
            <View style={selfStyles} />
        )
    } else return <View style={{
        ...selfStyles,
        backgroundColor: colors.colorOne.value,
    }} />
}

export default ChartCountryCard