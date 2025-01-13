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
    schemeBgStyle,
    schemeTextStyle,
    schemeShadowStyle
} from '../helpers/scheme'

import CurrencyButton from '../components/CurrencyButton'
import { currencies } from '../data/currencies'


const App = () => {
    setDarkMode(useColorScheme() === 'dark');

    const [inputValue, setInputValue] = useState('')
    const [result, setResult] = useState('')
    const [targetCurrency, setTargetCurrency] = useState<Currency>({ name: 'USD', flag: '🇺🇸', value: 1, symbol: '$' })

    const buttonPressed = (targetCurrency : Currency) => {
        setTargetCurrency(targetCurrency);
        
        if (inputValue.length < 1) {
            Snackbar.show({
                text: 'Please enter a value.',
                backgroundColor: 'grey',
                textColor: 'black'
            })
        }

        const amount = parseFloat(inputValue);
        if (!isNaN(amount)) {
            setResult(`  ${targetCurrency.symbol}${Math.round(amount * targetCurrency.value)}  `);
        } else {
            setResult(``);
        }
    }

    return (
        <SafeAreaView style={[styles.appContainer, schemeBgStyle(false)]}>
            <Text style={[styles.headingText, schemeTextStyle(false)]}>CurrencyConverter</Text>

            {(result.length > 0)?
                <View style={styles.resultContainer}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Text style={[styles.resultText]}>{result}</Text>
                    </ScrollView>
                </View>
            : null}

            <View style={styles.formContainer}>
                <Text style={[styles.formIcon, schemeTextStyle(false)]}>$</Text>

                <TextInput style={[styles.form, schemeBgStyle(true), schemeTextStyle(true)]} maxLength={15} onChangeText={setInputValue} placeholder='Amount' placeholderTextColor={schemeColor(false)} keyboardType='number-pad'>

                </TextInput>
            </View>

            <View style={styles.buttonsContainer}>
                <FlatList style={{marginBottom: 50}} numColumns={5} data={currencies} keyExtractor={(item) => (item.name)} showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <Pressable onTouchEnd={() => buttonPressed(item)}>
                            {(targetCurrency.name === item.name)?
                                <CurrencyButton currency={item} buttonStyle={[styles.button, styles.selectedButton, schemeShadowStyle(false)]} textStyle={[schemeTextStyle(true)]}/>
                                :
                                <CurrencyButton currency={item} buttonStyle={[styles.button, schemeBgStyle(true), schemeShadowStyle(false)]} textStyle={[schemeTextStyle(true)]}/>
                            }
                        </Pressable>
                    )}/>
            </View>
        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
        minHeight: Dimensions.get('screen').height,
    },
    resultContainer: {
        paddingHorizontal: 25,
        marginBottom: 20,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    resultText: {
        paddingHorizontal: 25,
        textAlignVertical: 'center',
        fontSize: 50,
        fontWeight: '500',
        color: '#1bd139',
        textShadowRadius: 30,
        textShadowColor: '#56d16a',
        shadowOpacity: 0.1
    },
    buttonsContainer: {
        height: '90%',
        marginTop: 20,
    },
    form: {
        paddingHorizontal: 10,
        width: 150,
        height: 50,
        borderRadius: 10,
        fontSize: 20,
    },
    formIcon: {
        fontSize: 30,
        fontWeight: '800',
        marginRight: 5,
    },
    formContainer: {
        width: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headingText: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: '300',
        textAlign: 'center',
    },
    selectedButton: {
        backgroundColor: '#6a9ea8',
    },
    button: {
        padding: 10,
        margin: 7,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
})