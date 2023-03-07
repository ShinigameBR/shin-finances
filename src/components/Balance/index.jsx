import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Balance({ balance, expenses }) {
    const [showValue, setShowValue] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <TouchableOpacity style={styles.content} onPress={() => setShowValue(!showValue)}>
                    {showValue ? (
                        <>
                            <Text style={styles.currencySymbol}>R$</Text>
                            <Text style={styles.balance}>{balance}</Text>
                        </>
                    ) : (
                        <View style={styles.skeleton}></View>
                    )}
                </TouchableOpacity>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gasto</Text>
                <TouchableOpacity style={styles.content} onPress={() => setShowValue(!showValue)}>
                    {showValue ? (
                        <>
                            <Text style={styles.currencySymbol}>R$</Text>
                            <Text style={styles.expenses}>{expenses}</Text>
                        </>
                    ) : (
                        <View style={styles.skeleton}></View>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingStart: 18,
        paddingEnd: 18,
        paddingTop: 22,
        paddingBottom: 24,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        zIndex: 99,
    },
    itemTitle: {
        fontSize: 20,
        color: "#DADADA",
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
    },
    currencySymbol: {
        color: "#DADADA",
        marginRight: 6,
    },
    balance: {
        fontSize: 22,
        color: "#2ecc71",
    },
    expenses: {
        fontSize: 22,
        color: "#e74c3c",
    },
    skeleton: {
        marginTop: 12,
        width: 80,
        height: 10,
        backgroundColor: "#DADADA",
        borderRadius: 8
    }
})