import React, { Fragment, useEffect } from 'react'
import { StyleSheet, Text } from "react-native";
import CardCarousel from './CardCarousel';
import HomeSection from './HomeSection';
import ChartCountries from './ChartCountries';
import store, { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResult } from '../redux/slice/homeTrendingInSlice';
import { HomeTrendingIn } from '../types/homeScreen';

interface Props {
    windowWidth: number,
    divideBottom?: boolean
}

const TrendingInCountries = (props: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchResult())
    }, [])

    const trendingIn = useSelector((state: RootState) => state.homeTrendingIn);

    if (trendingIn.loading) {
        return (
            <Text>
                Loading
            </Text>
        )
    }

    // return null if fetchResults has an error 
    // or there's no result;
    if (trendingIn.error || !trendingIn.result.length) {
        return null
    }

    const { windowWidth, divideBottom } = props;

    const screenPercent = windowWidth > 600 ? 0.50 : 1

    const visibleOffset = screenPercent > 0.50 ? 30 : 20

    const cardWidth = (windowWidth * screenPercent) - visibleOffset

    const gap = screenPercent > 0.50 ? 8 : 16;

    const list = trendingIn.result;

    const divide = divideBottom ? {
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#222',
    } : {}

    const countries = store.getState().countrySchema.result

    return (
        <HomeSection
            title='Trending in...'
            divideBottom={false}
            children={
                <CardCarousel
                    length={list.length}
                    itemWidth={cardWidth}
                    gap={gap}
                    decelerationRate={0.1}
                    data={list}
                    render={({ item, index }: { item: HomeTrendingIn, index: number }) => (<ChartCountries
                        title={countries[item.code]?.name || item.code}
                        subtitle={item.featuring}
                        src={{ uri: item.images[0] }}
                        style={{
                            width: cardWidth,
                            marginRight: index == list.length - 1 ? gap * 2 : gap,
                            marginLeft: index == 0 ? gap * 2 : 0,
                            ...divide
                        }}
                    />)}
                />
            } />
    )

}

export default TrendingInCountries;

const styles = StyleSheet.create({})