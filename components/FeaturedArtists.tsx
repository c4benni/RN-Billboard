import React, { Fragment } from 'react'
import { StyleSheet } from "react-native";
import CardCarousel from './CardCarousel';
import HomeSection from './HomeSection';
import ChartArtistCard from './ChartArtistCard';

interface Props {
    windowWidth: number,
    divideBottom?: boolean
}

const FeaturedArtists = (props: Props) => {

    const { windowWidth, divideBottom } = props;

    const screenPercent = windowWidth > 600 ? 0.30 : 0.60

    const visibleOffset = screenPercent > 0.30 ? 20 : 40

    const cardWidth = (windowWidth * screenPercent) - visibleOffset

    const gap = screenPercent > 0.30 ? 10 : 16;

    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <HomeSection
            title='Featured Top Artists'
            divideBottom={divideBottom}
            children={
                <CardCarousel
                    length={list.length}
                    itemWidth={cardWidth}
                    gap={gap}
                    data={list}
                    render={({ item, index }) => (
                        <ChartArtistCard
                            title='Adele'
                            src={{ uri: 'https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/a2/2d/df/a22ddf71-9254-043c-c162-11fbc25c5ff3/mzl.ilbjswky.jpg/800x800cc.jpg' }}
                            style={{
                                width: cardWidth,
                                marginRight: index == list.length - 1 ? gap * 2 : gap,
                                marginLeft: index == 0 ? gap * 2 : 0
                            }}
                        />
                    )}
                />
            } />
    )

}

export default FeaturedArtists;

const styles = StyleSheet.create({})