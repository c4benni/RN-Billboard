import React, { Fragment } from 'react'
import { StyleSheet } from "react-native";
import CardCarousel from './CardCarousel';
import HomeSection from './HomeSection';
import MiniChartCard from './MiniChartCard';

interface Props {
    windowWidth: number,
    divideBottom?: boolean
}

const TopGlobal = (props: Props) => {

    const { windowWidth, divideBottom } = props;

    const screenPercent = windowWidth > 600 ? 0.25 : 0.5

    const visibleOffset = screenPercent > 0.25 ? 20 : 40

    const cardWidth = (windowWidth * screenPercent) - visibleOffset

    const gap = screenPercent > 0.25 ? 8 : 12;

    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <HomeSection
            title='Global top 200'
            divideBottom={divideBottom}
            children={
            <CardCarousel
                length={list.length}
                itemWidth={cardWidth}
                gap={gap}
                children={
                    <Fragment>
                        {
                            list.map((_, i, a) => {
                                return (
                                    <MiniChartCard
                                        key={i}
                                        title='Easy on me'
                                        src={{ uri: 'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/400x400cc.jpg' }} subtitle={`Adele-${i}`}
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

export default TopGlobal;

const styles = StyleSheet.create({})