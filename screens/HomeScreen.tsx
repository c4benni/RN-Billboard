import React from 'react'
import { ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import SplashScreen from './SplashScreen';

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import TopGlobal from '../components/TopGlobal';

type RootStackParamList = {
    Home: undefined;
    Charts: undefined
};

type Props = NativeStackScreenProps<RootStackParamList, "Charts">

const HomeScreen = ({ navigation }: Props) => {

    const { width: windowWidth } = useWindowDimensions();

    return (
        <SplashScreen
            slot={
                <ScrollView style={[
                    styles.root
                ]}>
                    <TopGlobal windowWidth={windowWidth} />
                </ScrollView>
            }
        />
    );
};

export default HomeScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: 72,
        paddingBottom: 96,
    },
})
