/*
    Cyrus McCollim
    ReactNativePlayground : App #1
    -- Displays a large, bold, veritcally- and horizontally-centered "Hello!" against a light-purple background. 
*/

import React from 'react'

// Grabs necessary ReactNative components.
import {
    View, // Comparable to a <div>.
    Text, 
    StyleSheet, // For styling the components.
    useColorScheme, // Allows for dark mode, light mode, etc.
} from 'react-native'

function App(): JSX.Element /* Return type is JSX.Element */{
    const isDarkMode = useColorScheme() === 'dark' /* True when the device is in dark mode. */
    return (
        // 1. Creates a container.
            // 2. Text with style specified for header.
                // 3. Text with style based on device's color scheme.
                    // 4. Content of text.
        <View style={styles.container}>
            <Text style={styles.header}>
                <Text style={isDarkMode? styles.whiteText : styles.blackText}>
                    Hello!
                </Text>
            </Text>
        </View>
    )
}

// Defines the style sheet.
// Like key-value pairs.
const styles = StyleSheet.create({ // Object is being defined here and used as a parameter.
    image: {
        flex: 1, // Defines how much space the element takes.
        justifyContent: 'center' //Ajusts along veritcal axis.
    },
    container: {
        flex: 1, // Defines how much space the element takes.
        alignItems: 'center', // Adjusts along horizontal axis.
        justifyContent: 'center', //Ajusts along veritcal axis.
        backgroundColor: '#aa89c4' // Color for the background of the entire container.
    },
    header: {
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'Georgia' // Font-type.
    },
    whiteText: {
        color: '#FFFFFF',
    },
    blackText: {
        color: '#000001'
    },
})

export default App;