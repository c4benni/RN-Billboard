import { ReactNode } from 'react';
import { FlatList, ListRenderItem, ScrollView } from 'react-native'

interface Props {
    decelerationRate?: number,
    scrollbar?: boolean,
    length: number,
    itemWidth: number,
    gap: number,
    render?: ListRenderItem<any>,
    snapAlign?: "start" | "center" | "end"
    data: any[]
}

const CardCarousel = (props: Props) => {

    const {
        scrollbar, decelerationRate,
        length, itemWidth, gap, render, snapAlign,
        data
    } = props;

    const snapOffsets = Array.from({
        length,
    }, (_, i) => (itemWidth * i) + (gap * i))

    return (
        <FlatList
            horizontal={true}
            decelerationRate={decelerationRate}
            showsHorizontalScrollIndicator={scrollbar}
            snapToOffsets={snapOffsets}
            snapToAlignment={snapAlign}
            keyExtractor={(_, i) => i.toString()}
            renderItem={render}
            data={data}
        />
    )
}

CardCarousel.defaultProps = {
    scrollbar: false,
    decelerationRate: 0.6,
    children: null,
    snapAlign: 'start'
}

export default CardCarousel