import React, { Fragment } from 'react'
import { StyleSheet } from "react-native";
import CardCarousel from './CardCarousel';
import HomeSection from './HomeSection';
import MiniChartCard from './MiniChartCard';

interface Props {
    windowWidth: number,
    divideBottom?: boolean,
    title: string
}

const GlobalGenre = (props: Props) => {

    const { windowWidth, divideBottom, title } = props;

    const screenPercent = windowWidth > 600 ? 0.25 : 0.5

    const visibleOffset = screenPercent > 0.25 ? 20 : 40

    const cardWidth = (windowWidth * screenPercent) - visibleOffset

    const gap = screenPercent > 0.25 ? 8 : 12;

    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <HomeSection
            title={title}
            divideBottom={divideBottom}
            children={
                <CardCarousel
                    length={list.length}
                    itemWidth={cardWidth}
                    gap={gap}
                    data={list}
                    render={({ item, index }) => (
                        <MiniChartCard
                            title='Easy on me'
                            img={{ src: 'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/400x400cc.jpg', alt: '' }} subtitle={`Adele-${index}`}
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

export default GlobalGenre;

const styles = StyleSheet.create({})