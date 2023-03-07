import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Movements({ data }) {
    return (
        <TouchableOpacity styles={styles.container}>
            <Text style={styles.date}>{data.date}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>
                <Text style={data.type === 1 ? styles.value : styles.expenses}>
                    R$ {data.type === 1 ? data.value : `-${data.value}`}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 64,
        borderBottomWidth: 0.5,
        borderBottomColor: "#DADADA"
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 2,
        marginBottom: 16,
    },
    date: {
        marginStart: 24,
        marginEnd: 24,
        color: "#8000ff",
        fontWeight: "bold",
    },
    label: {
        fontWeight: "bold",
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#2ecc71",
    },
    expenses: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#e74c3c",
    }
})