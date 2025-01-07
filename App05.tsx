import React, { PropsWithChildren, useState } from 'react'

import { diceImageByName } from './assets/dice/index.dice'

import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    useColorScheme,
    Text,
    ImageSourcePropType,
    Dimensions,
    ImageStyle,
    ScrollView,
    Vibration
} from 'react-native'

/**
 * Defines a type DiceProps that must be an object with the following properties:
 * - imageUrl of type ImageSourcePropType
 */
type DiceProps = PropsWithChildren<{ imageUrl : ImageSourcePropType, style : ImageStyle }>

/**
 * Dice Component
 * @param imageUrl path of the Dice's image
 * @returns JSX.Element component of Image within a View
 */
const Dice = ({imageUrl, style} : DiceProps) => {
    return (
        <View>
            <Image style={style} source={imageUrl}/>
        </View>
    )
}

let history : number[] = [];

/**
 * App Component
 */
const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    enum Scheme {
        light = '#e8e8e8',
        dark = '#1c1c1c',
    }

    const [diceNumber, setDiceNumber] = useState(1);

    const rollDice = () : void => {
        let randomNumber = (Math.floor((Math.random() * 6) + 1));
        setDiceNumber(randomNumber);
        updateHistory(randomNumber);
    }

    const getDiceImageByNumber = (number : number) => {
        return diceImageByName(`Dice${isDarkMode? 'White' : 'Black'}${number}`)
    }

    const updateHistory = (diceNumber : number) : void => {
        if (history.length >= 10) { 
            history.shift();
        }
        history.push(diceNumber);
    }

    const textScheme = () :     {} => { return { color: isDarkMode? Scheme.light : Scheme.dark } }
    const textSchemeFlip = () : {} => { return { color: isDarkMode? Scheme.dark : Scheme.light} }
    const bgScheme = () :       {} => { return { backgroundColor: isDarkMode? Scheme.dark : Scheme.light } }
    const bgSchemeFlip = () :   {} => { return { backgroundColor: isDarkMode? Scheme.light : Scheme.dark } }

    return (
        <ScrollView style={[styles.appContainer, bgScheme()]}>
            <View style={styles.diceContainer}>
            <Text style={[styles.headingText, textScheme()]}>DiceRoller</Text>
                <Dice imageUrl={getDiceImageByNumber(diceNumber)} style={styles.diceImagePrimary}/>
                <TouchableOpacity style={[styles.button, bgSchemeFlip()]} activeOpacity={0.8} onPress={() => {rollDice(); Vibration.vibrate(25)}}>
                    <Text style={[styles.buttonText, textSchemeFlip()]}>Roll</Text>
                </TouchableOpacity>
            </View>

            {history.length > 0 ? 
                <View style={styles.historyContainer}>
                    <Text style={[styles.subheadingText, textScheme()]}>History</Text>
                    <View style={[styles.historyDiceWrapper]}>
                        {[...history].reverse().map((number) => (<Dice imageUrl={getDiceImageByNumber(number)} style={styles.diceImageSecondary}/>))}
                    </View>
                    <View style={[styles.line, bgSchemeFlip()]}/>
                </View>
            : null }
        </ScrollView>
    )
}

export default App;

/**
 * Styling
 */
const styles = StyleSheet.create({
    appContainer: {
        padding: 20,
        paddingTop: 50,
        minHeight: Dimensions.get('screen').height,
    },
    diceContainer: {
        alignItems: 'center',
    },
    historyContainer: {

    },
    historyDiceWrapper: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        borderRadius: 10,
    },

    headingText: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '500'
    },
    subheadingText: {
        marginTop: 20,
        textAlign: 'left',
        fontSize: 25,
        fontWeight: '300'
    },

    diceImagePrimary: {
        marginTop: 20,
        width: 200,
        height: 200
    },
    diceImageSecondary: {
        marginTop: 20,
        width: 50,
        height: 50,
        marginRight: 10,
    },

    button: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 50,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
    },

    line: {
        height: 2,
        width: 50,
        marginTop: 10,
    }
})