/*
    Cyrus McCollim
    ReactNativePlayground : App #4
    DiscoClicker
    -- Generates a random background color upon pressing a button.
    -- Displays: Text and a button.
*/

import React, { useState } from 'react'
import {
    StyleSheet,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
    Text,
    View
} from 'react-native'

export const App = () => {
    // State management.
    const [bgColor, setBgColor] = useState('#000000')

    // Business logic.
    const generateHex = () : string => {
        let chars = 'ABCDEF0123456789'
        let result = '#'
        for (let i = 0; i < 6; i++) result += chars.charAt(Math.floor((Math.random() * chars.length)))
        return result;
    }

    // Generating components.
    return (
        <SafeAreaView style={[styles.appContainer, {backgroundColor : bgColor}]}>
            <Text style={styles.headingText}>DiscoClicker</Text>
            <TouchableOpacity style={styles.button} onPress={() => (setBgColor(generateHex()))} activeOpacity={0.5}>
                <Text style={styles.buttonText}>
                    {`Switch it up!`}
                </Text>
            </TouchableOpacity>
            <Text style={styles.headingText} selectable={true}>{bgColor}</Text>
        </SafeAreaView>
    )
}

export default App;

// Styling.
const styles = StyleSheet.create({
    appContainer: {
        minHeight: Dimensions.get('screen').height,
        padding: 25,
        alignItems: 'center',
    },
    headingText: {
        color: 'white',
        fontWeight: '300',
        borderColor: 'black',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 5
    },
    button: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 5,
        marginBottom: 5
    },
    buttonText: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center'
    }
})