import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
// import SplashScreen from './SplashScreen';

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import TopGlobal from '../components/TopGlobal';
import FeaturedArtists from '../components/FeaturedArtists';
import TrendingInCountries from '../components/TrendingInCountries';
import GlobalGenre from '../components/GlobalGenre';
import MoreGenres from '../components/MoreGenres';
import CityCharts from '../components/CityChart';
import UiInput from '../components/UiInput';
import HomeSection from '../components/HomeSection';
import UiBtn from '../components/UiBtn';
import { useDispatch } from 'react-redux';
import { fetchResult as fetchCountries } from '../redux/slice/countrySchema';

type RootStackParamList = {
    Home: undefined;
    Charts: undefined
};

type Props = NativeStackScreenProps<RootStackParamList, "Charts">

const HomeScreen = ({ navigation }: Props) => {

    const { width: windowWidth } = useWindowDimensions();

    const [searchValue, updateSearch] = useState('');

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchCountries());
    }, [])

    return (
        <SafeAreaView style={[
            styles.root
        ]}>           
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView>
                    <View style={styles.titleWrap}>
                        <Text style={styles.title}>
                            Browse
                        </Text>
                    </View>

                    <TopGlobal windowWidth={windowWidth} />

                    <TrendingInCountries windowWidth={windowWidth} divideBottom />

                    <FeaturedArtists windowWidth={windowWidth} />

                    <CityCharts windowWidth={windowWidth} />


                    <GlobalGenre windowWidth={windowWidth} title='Afro beats to the world' />

                    <GlobalGenre windowWidth={windowWidth} title='Trendy in Pop' />

                    <GlobalGenre windowWidth={windowWidth} title='Hot Hip Hop Raps' />

                    <MoreGenres windowWidth={windowWidth} />


                    <View style={{ marginTop: 16 }}>
                        <HomeSection title='Search artists' showViewAll={false} >
                            <View style={{
                                paddingHorizontal: 16
                            }}>
                                <UiInput value={searchValue} onChange={(text: string) => updateSearch(text)} />
                            </View>
                        </HomeSection>
                    </View>

                    <View style={{
                        paddingHorizontal: 32,
                        marginVertical: 48
                    }}>
                        <UiBtn
                            title='Recognize track'
                            type='primary'
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
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
