import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    // Apply multiple styles using an array of styles, or place a container within another.
    <View>
        <Text style={styles.headingText}>Flat Cards</Text>
        <View style={styles.container}>
                <View style={[styles.card, styles.purple]}> 
                        <Text style={styles.cardText}>Purple</Text>
                </View>
                <View style={[styles.card, styles.blue]}>
                        <Text style={styles.cardText}>Blue</Text>
                </View>
                <View style={[styles.card, styles.green]}>
                        <Text style={styles.cardText}>Green</Text>
                </View>
        </View>
    </View>
  )
}

// Style sheet used by this custom component.
const styles = StyleSheet.create({
    headingText: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    container: {
        flexDirection: 'row', // Children are laid out in the horizontal direction.
        paddingBottom: 20,
        paddingLeft: 20
    },
    card: {
        alignItems: 'center', // Center-aligns children along cross axis.
        justifyContent: 'center', // Center-aligns children along main axis.
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 20,
    },
    cardText: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'light',
    },
    purple: {
        backgroundColor: '#aa89c4' 
    },
    blue: {
        backgroundColor: '#5e86ad'
    },
    green: {
        backgroundColor: '#5ead60'
    },
})