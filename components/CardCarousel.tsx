import { ReactNode } from 'react';
import { ScrollView } from 'react-native'

interface Props {
    decelerationRate?: number,
    scrollbar?: boolean,
    length: number,
    itemWidth: number,
    gap: number,
    children?: ReactNode,
    snapAlign?: "start" | "center" | "end"
}

const CardCarousel = (props: Props) => {

    const {
        scrollbar, decelerationRate,
        length, itemWidth, gap, children, snapAlign
    } = props;

    const snapOffsets = Array.from({
        length,
    }, (_, i) => (itemWidth * i) + (gap * i))

    return (
        <ScrollView
            horizontal={true}
            decelerationRate={decelerationRate}
            showsHorizontalScrollIndicator={scrollbar}
            snapToOffsets={snapOffsets}
            snapToAlignment={snapAlign}
        >
            {children}
        </ScrollView>
    )
}

CardCarousel.defaultProps = {
    scrollbar: false,
    decelerationRate: 0.6,
    children: null,
    snapAlign: 'start'
}

export default CardCarousel