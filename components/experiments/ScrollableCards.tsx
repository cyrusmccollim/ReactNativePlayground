/*
    ScrollableCards - Components that have a background color and text.
    Belongs to App #2
*/  

import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function ScrollableCard() {
  return (
    <View>
      <Text style={styles.headingText}>Scrollable Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.purpleCard]}>
            <Text style={styles.cardText}>Purple</Text>
        </View>
        <View style={[styles.card, styles.blueCard]}>
            <Text style={styles.cardText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.greenCard]}>
            <Text style={styles.cardText}>Green</Text>
        </View>
        <View style={[styles.card, styles.purpleCard]}>
            <Text style={styles.cardText}>Purple</Text>
        </View>
        <View style={[styles.card, styles.blueCard]}>
            <Text style={styles.cardText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.greenCard]}>
            <Text style={styles.cardText}>Green</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    cardText: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'light',
    },
    container: {
        flexDirection: 'row',
        paddingBottom: 20,
        paddingLeft: 20
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 20,
    },
    purpleCard: {
        backgroundColor: '#aa89c4' 
    },
    blueCard: {
        backgroundColor: '#5e86ad'
    },
    greenCard: {
        backgroundColor: '#5ead60'
    },
})