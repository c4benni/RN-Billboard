import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ChartsCard from '../components/ChartsCard';
import UiInput from '../components/UiInput';

import Icon from 'react-native-vector-icons/MaterialIcons'

const ChartsScreen = () => {
    const [inputValue, setInput] = useState('')

    const charts = [
        'Global',
        'United States',
        'United Kingdom',
        'Dominican Republic',
        'Brasil',
        'Italy',
        'Japan',
        'Turkey'
    ].filter(x => {
        if (inputValue) {
            const searchRegExp = new RegExp(`${inputValue}`, 'i')

            return searchRegExp.test(x)
        }
        else return true
    })

    return (
        <ScrollView style={[
            styles.root
        ]}>
            <View
                style={[
                    styles.titleWrap
                ]}>
                <Text style={[
                    styles.title
                ]}>
                    Charts
                </Text>

                <UiInput
                    value={inputValue}
                    onChange={(text: string) => setInput(text)}
                />
            </View>

            <View style={{
                marginBottom: 96
            }}>
                <Text style={[styles.sectionTitle]}>
                    {
                        charts.length ?
                            'Browse charts'
                            : <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Icon
                                    name="error"
                                    size={20}
                                    color={'#df2b2b'}
                                />

                                <Text style={{
                                    marginLeft: 8,
                                    fontSize: 16,
                                    fontWeight: '600',
                                    color: '#fff'
                                }}>
                                    No chart found
                                </Text>
                            </View>
                    }
                </Text>

                {
                    charts.length ?
                        <View style={styles.chartsGrid}>
                            {
                                charts.map((item, index) => {
                                    return (
                                        <View
                                            key={item}
                                            style={[styles.chartItemWrap]}
                                        >
                                            <ChartsCard
                                                title={item}
                                                style={[styles.chartItem, {
                                                    marginLeft: (index + 1) % 2 == 0 ? 12 : 0
                                                }]}
                                            />
                                        </View>
                                    )
                                })
                            }
                        </View>
                        : null
                }
            </View>
        </ScrollView>
    );
};

export default ChartsScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: 72,
        paddingBottom: 96,
        paddingHorizontal: 16,
        backgroundColor: '#111',
    },
    titleWrap: {
        alignSelf: 'flex-start',
        flex: 1,
        paddingBottom: 12,
        borderBottomWidth: 0.75,
        borderBottomColor: '#333',
        marginBottom: 8
    },
    title: {
        fontSize: 32,
        fontWeight: '800',
        color: '#fff',
        marginBottom: 8
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
    },
    chartsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 8,
        flex: 1
    },
    chartItemWrap: {
        height: 144,
        width: '50%'
    },
    chartItem: {
        marginBottom: 12,
        flex: 1
    },
})
