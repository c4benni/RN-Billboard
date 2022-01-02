import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UiBtn from '../UiBtn';
import SplashScreen from './SplashScreen';

const HomeScreen = () => {
    return (
        <SplashScreen
            slot={
                <View>
                    <View>
                        <Text style={[
                            styles.title
                        ]}>
                            RN-Billboard
                        </Text>

                        <Text style={[
                            styles.subtitle
                        ]}>
                            Discover Billboard's top 200 songs from different locations
                        </Text>
                    </View>

                    <UiBtn title='Get started' type='primary' />
                </View>
            }
        />
    );
};

export default HomeScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 56,
        fontWeight: '800',
        color: '#fff'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '400',
        opacity: .7,
        color: '#fff'
    }
})
