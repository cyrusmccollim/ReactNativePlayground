import { 
    View, 
    Text, 
    StyleSheet, 
    useColorScheme, 
    SafeAreaView, 
    Dimensions,
    TextInput,
    FlatList,
    Pressable,
    ScrollView,
} from 'react-native'

import React, { useState } from 'react'

import Snackbar from 'react-native-snackbar'

import {
    setDarkMode,
    schemeColor,
} from '../helpers/scheme'

import CurrencyButton from '../components/CurrencyButton'
import { currencies } from '../data/currencies'


const App = () => {
    setDarkMode(useColorScheme() === 'dark');

    const [inputValue, setInputValue] = useState('')
    const [result, setResult] = useState('')
    const [targetCurrency, setTargetCurrency] = useState<Currency>({ name: 'USD', flag: '🇺🇸', value: 1, symbol: '$' })

    const updateResult = () => {
        if (inputValue.length < 1) {
            Snackbar.show({
                text: 'Please enter a value.',
                backgroundColor: 'grey',
                textColor: 'black'
            })
        }

        const amount = parseFloat(inputValue);
        if (!isNaN(amount)) {
            setResult(`${targetCurrency.symbol}${Math.round(amount * targetCurrency.value)}`);
        } else {
            setResult(``);
        }
    }

    const buttonPressed = (targetCurrency : Currency) => {
        setTargetCurrency(targetCurrency);
        updateResult();
    }

    return (
        <SafeAreaView style={styles.appContainer}>
            <Text style={styles.headingText}>CurrencyConverter</Text>

            {(result.length > 0)?
                <ScrollView horizontal={true} style={styles.resultContainer} showsHorizontalScrollIndicator={false}>
                <Text style={styles.resultText}>{result}</Text>
                </ScrollView>
            : null}

            <View style={styles.formContainer}>
                <Text style={styles.formIcon}>$</Text>

                <TextInput style={styles.form} maxLength={15} onChangeText={setInputValue} placeholder='Amount' placeholderTextColor={schemeColor(false)} keyboardType='number-pad'>

                </TextInput>
            </View>

            <View style={styles.buttonsContainer}>
                <FlatList numColumns={5} data={currencies} keyExtractor={(item) => (item.name)}
                    renderItem={({item}) => (
                        <Pressable onTouchEnd={() => buttonPressed(item)}>
                            <CurrencyButton currency={item} customStyle={(targetCurrency.name === item.name)? styles.selectedButton : styles.button}/>
                        </Pressable>
                    )}/>
            </View>
        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({
    appContainer: {
        paddingVertical: 20,
        alignItems: 'center',
        minHeight: Dimensions.get('screen').height,
        backgroundColor: schemeColor(false)
    },
    resultContainer: {
        maxHeight: 80,
        flexDirection: 'row',
    },
    buttonsContainer: {
        height: 600,
        //flex: 1,
        marginTop: 20,
    },
    form: {
        paddingHorizontal: 10,
        width: 150,
        height: 40,
        borderRadius: 10,
        backgroundColor: schemeColor(true),
        color: schemeColor(false)
    },
    formIcon: {
        fontSize: 30,
        fontWeight: '200',
        marginRight: 5,
        color: schemeColor(true)
    },
    formContainer: {
        width: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: schemeColor(true)
    },
    headingText: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: '300',
        textAlign: 'center',
        color: schemeColor(true)
    },
    selectedButton: {
        backgroundColor: 'lightblue',
        shadowColor: schemeColor(true)
    },
    button: {
        shadowColor: schemeColor(true)
    },
    resultText: {
        fontSize: 50,
        fontWeight: '500',
        marginBottom: 10,
        color: schemeColor(true)
    }
})