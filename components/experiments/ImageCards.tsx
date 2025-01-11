/*
    ImageCards - Components that have an image, title text, body text, and footer hyperlink.
    Belongs to App #2
*/  

import { StyleSheet, Text, View, Image, ScrollView, Linking } from 'react-native';
import React from 'react';

export default function ImageCard() {
    return (
        <View>
            <Text style={styles.headingText}>Image Cards</Text>
            <ScrollView horizontal={true} style={styles.scrollContainer}>
                <View style={styles.card}>
                    <Image source={require('../assets/sceneMountainLake.png')} style={styles.cardImage}/>
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Lake</Text>
                        <Text style={styles.cardDescription}>This image contains a lake, trees, and a mountain.</Text>
                        <Text style={[styles.cardFooter, styles.hyperLink]} onPress={() => Linking.openURL('https://live.staticflickr.com/65535/53880973992_c31e3439bd_b.jpg')}>Source</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image source={require('../assets/sceneCabinLake.png')} style={styles.cardImage}/>
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Cabin</Text>
                        <Text style={styles.cardDescription}>This image contains a cabin, trees, and a mountain.</Text>
                        <Text style={[styles.cardFooter, styles.hyperLink]} onPress={() => Linking.openURL('https://live.staticflickr.com/65535/53880973992_c31e3439bd_b.jpg')}>Source</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image source={require('../assets/sceneSnowyMountain.png')} style={styles.cardImage}/>
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Snowy</Text>
                        <Text style={styles.cardDescription}>This image contains a lake, trees, and a snowy mountain.</Text>
                        <Text style={[styles.cardFooter, styles.hyperLink]} onPress={() => Linking.openURL('https://live.staticflickr.com/65535/53880973992_c31e3439bd_b.jpg')}>Source</Text>
                    </View>
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
    hyperLink: {
        color: 'blue',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
    },
    scrollContainer: {
        flexDirection: 'row',
        paddingBottom: 20,
        paddingLeft: 20
    },
    card: {
        marginRight: 20,
        width: 220,
        borderRadius: 10,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        elevation: 10
    },
    cardImage: {
        marginBottom: 3,
        width: 220,
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardBody: {
        padding: 10,
    },
    cardTitle: {
        marginBottom: 3,
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'left',
        color: 'black',
    },
    cardDescription: {
        marginBottom: 5,
        textAlign: 'left',
        color: 'black',
        fontSize: 12
    },
    cardFooter: {
        marginBottom: 5,
        textAlign: 'right',
        color: 'black',
        fontSize: 12
    },
})