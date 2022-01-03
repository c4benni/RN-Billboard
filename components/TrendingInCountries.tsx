import React, { Fragment } from 'react'
import { StyleSheet } from "react-native";
import CardCarousel from './CardCarousel';
import HomeSection from './HomeSection';
import ChartCountries from './ChartCountries';

interface Props {
    windowWidth: number,
    divideBottom?: boolean
}

const TrendingInCountries = (props: Props) => {

    const { windowWidth, divideBottom } = props;

    const screenPercent = windowWidth > 600 ? 0.50 : 1

    const visibleOffset = screenPercent > 0.50 ? 40 : 20

    const cardWidth = (windowWidth * screenPercent) - visibleOffset

    const gap = screenPercent > 0.30 ? 10 : 16;

    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <HomeSection
            title='Trending in...'
            divideBottom={divideBottom}
            children={
                <CardCarousel
                    length={list.length}
                    itemWidth={cardWidth}
                    gap={gap}
                    decelerationRate={0.1}
                    children={
                        <Fragment>
                            {
                                list.map((_, i, a) => {
                                    return (
                                        <ChartCountries
                                            key={i}
                                            title='USA'
                                            subtitle='Featuring songs from Years & Years, Bon Iver, Fireboy DML & Ed Sheeran and more'
                                            src={{ uri: 'https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/a2/2d/df/a22ddf71-9254-043c-c162-11fbc25c5ff3/mzl.ilbjswky.jpg/800x800cc.jpg' }}
                                            style={{
                                                width: cardWidth,
                                                marginRight: i == a.length - 1 ? gap * 2 : gap,
                                                marginLeft: i == 0 ? gap * 2 : 0
                                            }}
                                        />
                                    )
                                })
                            }
                        </Fragment>
                    } />
            } />
    )

}

export default TrendingInCountries;

const styles = StyleSheet.create({})