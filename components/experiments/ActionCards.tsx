/*
    ActionCards - Components that have a title, image, body text, and footer button.
    Belongs to App #2
*/  

import { StyleSheet, Linking, View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(websiteLink : string) {
        Linking.openURL(websiteLink);
    }

    return (
        <View>
            <Text style={styles.headingText}>Action Cards</Text>
            <ScrollView horizontal={true} style={styles.scrollContainer}>
                <View style={styles.actionCard}>
                    <View style={styles.actionCardHeading}>
                        <Text style={styles.actionCardTitle}>Parrot poem!</Text>
                    </View>
                    <Image source={require('../assets/parrot.png')} style={styles.actionCardImage}/>
                    <View style={styles.actionCardBody}>
                        <Text numberOfLines={3} style={styles.bodyText}>'O lonely parrot It’s such a pity You’re perched on a wire High above the city!'</Text>
                    </View>
                    <View style={styles.actionCardFooter}>
                        <TouchableOpacity onPress={() => openWebsite('https://hellopoetry.com/poem/337585/parrot-in-a-city/')}>
                            <Text style={styles.footerText}>Read more!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.actionCard}>
                    <View style={styles.actionCardHeading}>
                        <Text style={styles.actionCardTitle}>Tiger poem!</Text>
                    </View>
                    <Image source={require('../assets/tiger.png')} style={styles.actionCardImage}/>
                    <View style={styles.actionCardBody}>
                        <Text numberOfLines={3} style={styles.bodyText}>
                            'Tyger Tyger, burning bright, 
                            In the forests of the night; 
                            What immortal hand or eye, 
                            Could frame thy fearful symmetry?'
                        </Text>
                    </View>
                    <View style={styles.actionCardFooter}>
                        <TouchableOpacity onPress={() => openWebsite('https://www.poetryfoundation.org/poems/43687/the-tyger')}>
                            <Text style={styles.footerText}>Read more!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    scrollContainer: {
        flexDirection: 'row',
        paddingBottom: 20,
        paddingLeft: 20
    },
    headingText: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    bodyText: {
        fontSize: 12,
    },
    footerText: {
        fontSize: 12,
        color: 'white'
    },
    actionCard: {
        marginRight: 20,
        width: 150,
        borderRadius: 10,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 10
    },
    actionCardHeading: {
        padding: 10
    },
    actionCardTitle: {
        marginBottom: 3,
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black',
    },
    actionCardImage: {
        width: 150,
        height: 150,
    },
    actionCardBody: {
        padding: 10
    },
    actionCardFooter: {
        width: 150,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#487EB0',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
})