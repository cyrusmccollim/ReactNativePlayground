/*
    UserCards - Components that have an image, name, and status.
    Belongs to App #2
*/  

import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    // Array of objects.
    const users = [
        {
            uid: 1,
            name: 'Jeff',
            online: true,
            imageUrl: ''
        },
        {
            uid: 2,
            name: 'Amy',
            online: false,
            imageUrl: ''
        },
        {
            uid: 3,
            name: 'Bob',
            online: false,
            imageUrl: ''
        },
        {
            uid: 4,
            name: 'Emily',
            online: true,
            imageUrl: ''
        }
    ]

    const blankProfile = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png' // Will be used for profile image if undefined.

    return (
        <View>
            <Text style={styles.headingText}>User Cards</Text>
            <ScrollView horizontal={true} style={styles.scrollContainer}>
                {users.map(({uid, name, online, imageUrl}) => ( // Iterates through array of objects called users. Uses lambda function to grab object properties and use them in the function declaration where components are generated.
                    <View key={uid} style={styles.userCard}>
                        <Image source={{uri : (imageUrl === ''? blankProfile : imageUrl)}} style={styles.userImage}/>
                        <View style={styles.userField}>
                            <Text style={styles.userName}>{name}</Text>
                            {(online == true)? <View style={styles.onlineDot}/> : <View style={styles.offlineDot}/>}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

// Styling sheet.
const styles = StyleSheet.create({
    headingText: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    scrollContainer: {
        flexDirection: 'row',
        paddingBottom: 20,
        paddingLeft: 20
    },
    userCard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 130,
        marginRight: 20,
        borderRadius: 10,
    },
    userImage: {
        borderRadius: 75,
        width: 100,
        height: 100,
    },
    userField: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userName: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        paddingRight: 5
    },
    onlineDot: {
        backgroundColor: '#45CE30',
        width: 10,
        height: 10,
        borderRadius: 5
    },
    offlineDot: {
        backgroundColor: '#BA2F16',
        width: 10,
        height: 10,
        borderRadius: 5
    }
})