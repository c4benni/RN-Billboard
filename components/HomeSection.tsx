import React, { ReactNode } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    title: string,
    children: ReactNode
}

const HomeSection = (props: Props) => {
    const { title, children } = props;

    return (
        <View style={[
            styles.root
        ]}>
            <View style={[
                styles.titleWrap
            ]}>
                <Text style={[
                    styles.title
                ]}>
                    {title}
                </Text>

                <TouchableOpacity activeOpacity={0.4}>
                    <Text style={styles.viewAll}>
                        View all
                    </Text>
                </TouchableOpacity>
            </View>

            {children}
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
        marginBottom: 8,
        paddingHorizontal: 16
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fff',
    },
    viewAll: {
        color: '#007bff',
        fontWeight: '600',
        padding: 4,
        paddingRight: 0
    }
})
