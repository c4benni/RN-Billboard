import React, { useEffect } from 'react'
import { StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../redux/store'
import { fetchResult } from '../redux/slice/homeTopGlobalSlice';

import CardCarousel from './CardCarousel';
import HomeSection from './HomeSection';
import MiniChartCard from './MiniChartCard';
import { SongType } from '../types/homeScreen';

interface Props {
    windowWidth: number,
    divideBottom?: boolean
}

const TopGlobal = (props: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchResult())
    }, [])

    const screenState = useSelector((state: RootState) => state.homeTopGlobal);

    // return null if fetchResults has an error 
    // or there's no result;
    if (screenState.error || !screenState.result.length) {
        return null
    }

    const { windowWidth, divideBottom } = props;

    const screenPercent = windowWidth > 600 ? 0.25 : 0.5

    const visibleOffset = screenPercent > 0.25 ? 20 : 40

    const cardWidth = (windowWidth * screenPercent) - visibleOffset

    const gap = screenPercent > 0.25 ? 8 : 12;

    const list = screenState.result

    if (screenState.loading) {
        return (
            <Text>
                Loading
            </Text>
        )
    }

    return (
        <HomeSection
            title='Global top 200'
            divideBottom={divideBottom}
            children={
            <CardCarousel
                length={list.length}
                itemWidth={cardWidth}
                    gap={gap}
                    data={list}
                    render={({ item, index }: { item: SongType, index: number }) => (
                        <MiniChartCard
                            title={item.title}
                            img={item.img} subtitle={item.artist}
                            style={{
                                width: cardWidth,
                                marginRight: index == list.length - 1 ? gap * 2 : gap,
                                marginLeft: index == 0 ? gap * 2 : 0
                            }}
                        />
                    )} />
        } />
    )

}

export default TopGlobal;

const styles = StyleSheet.create({})