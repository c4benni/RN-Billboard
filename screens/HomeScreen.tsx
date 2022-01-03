import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
// import SplashScreen from './SplashScreen';

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import TopGlobal from '../components/TopGlobal';
import FeaturedArtists from '../components/FeaturedArtists';

type RootStackParamList = {
    Home: undefined;
    Charts: undefined
};

type Props = NativeStackScreenProps<RootStackParamList, "Charts">

const HomeScreen = ({ navigation }: Props) => {

    const { width: windowWidth } = useWindowDimensions();

    // return (
    //     <SplashScreen
    //         slot={
                
    //         }
    //     />
    // );

    return (
        <SafeAreaView style={[
            styles.root
        ]}>           
            <ScrollView>
                <View style={styles.titleWrap}>
                    <Text style={styles.title}>
                        Browse
                    </Text>
                </View>
                
                <TopGlobal windowWidth={windowWidth} divideBottom />

                <FeaturedArtists windowWidth={windowWidth} />
            </ScrollView>
        </SafeAreaView>
    )
};

export default HomeScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: 72,
        paddingBottom: 96,
        backgroundColor:'#111'
    },
    titleWrap: {
        borderBottomColor: '#222',
        borderBottomWidth: 0.75,
        paddingBottom: 8,
        marginHorizontal: 16,
        marginTop: 24
    },
    title: {
        fontSize: 36,
        fontWeight: '700',
        textAlign: 'left',
        color:'#fff'
    }
})
