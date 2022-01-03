import React, { ReactNode } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PressEffect from './PressEffect';

interface Props {
    title: string,
    children: ReactNode,
    divideBottom?: boolean
}

const HomeSection = (props: Props) => {
    const { title, children, divideBottom } = props;

    return (
        <View style={[
            styles.root,
        ]}>
            <View style={[
                styles.titleWrap
            ]}>
                <Text style={[
                    styles.title
                ]}>
                    {title}
                </Text>

                <PressEffect activeOpacity={0.4}>
                    <Text style={styles.viewAll}>
                        View all
                    </Text>
                </PressEffect>
            </View>

            {children}

            {
                divideBottom ? <View style={styles.divideBottom} /> : null
            }
        </View>
    );
};

export default HomeSection

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    titleWrap: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        marginTop: 16,
        marginBottom: 8,
        paddingHorizontal: 16
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
    },
    viewAll: {
        color: '#007bff',
        fontWeight: '600',
        padding: 4,
        paddingRight: 0
    },

    divideBottom: {
        marginTop: 16,
        marginHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#222'
    }
})
