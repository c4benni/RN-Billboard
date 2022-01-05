import React, { Fragment } from 'react'
import { StyleSheet } from "react-native";
import CardCarousel from './CardCarousel';
import HomeSection from './HomeSection';
import MiniChartCard from './MiniChartCard';

interface Props {
    windowWidth: number,
    divideBottom?: boolean
}

const CityCharts = (props: Props) => {

    const { windowWidth, divideBottom } = props;

    const screenPercent = windowWidth > 600 ? 0.50 : 0.75

    const visibleOffset = screenPercent > 0.50 ? 40 : 20

    const cardWidth = (windowWidth * screenPercent) - visibleOffset

    const gap = screenPercent > 0.30 ? 10 : 16;

    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <HomeSection
            title='City Chart'
            divideBottom={divideBottom}
            children={
                <CardCarousel
                    length={list.length}
                    itemWidth={cardWidth}
                    gap={gap}
                    data={list}
                    render={({ item, index }) => (<MiniChartCard
                        title='Adele'
                        subtitle='Featuring Ed-Sheeran, Adele, PopCaan...'
                        img={{ src: 'https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/a2/2d/df/a22ddf71-9254-043c-c162-11fbc25c5ff3/mzl.ilbjswky.jpg/800x800cc.jpg', alt: '' }}
                        style={{
                            width: cardWidth,
                            marginRight: index == list.length - 1 ? gap * 2 : gap,
                            marginLeft: index == 0 ? gap * 2 : 0
                        }}
                        imageHeight={296}
                        imageStyle={{
                            borderRadius: 12
                        }}
                        titleStyle={{
                            marginTop: 8,
                            fontSize: 20
                        }}
                        subTitleStyle={{
                            fontSize: 16
                        }}
                    />)}
                />
            } />
    )

}

export default CityCharts;

const styles = StyleSheet.create({})