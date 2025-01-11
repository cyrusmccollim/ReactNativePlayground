import { 
    View, 
    Text, 
    StyleSheet, 
    useColorScheme, 
    SafeAreaView, 
    Dimensions } from 'react-native'
import React from 'react'

import {
    setDarkMode,
    schemeText,
    schemeBg,
} from '../helpers/scheme'

import CurrencyButton from '../components/CurrencyButton'
import { currencies } from '../data/currencies'

import { Formik } from 'formik'
import * as Yup from 'yup';

const numberValidation = Yup.object().shape({
    number: Yup.number().typeError("Must be a number.")  
               .required("Please enter a value.") 
})

const App = () => {
    setDarkMode(useColorScheme() === 'dark');

    const handleSubmit = (number : Number) => {

    }

    return (
        <SafeAreaView style={[styles.appContainer, schemeBg(false)]}>
            <Text style={[styles.headingText, schemeText(false)]}>CurrencyConverter</Text>

            <View style={[styles.formContainer, schemeBg(true)]}>
                <Formik initialValues={{ amount : 0 }} validationSchema={numberValidation} onSubmit={(values) => (handleSubmit(values.amount))}>
                    {({values, errors, touched, isValid, handleChange, handleSubmit, handleReset}) => (
                       <>
                       </> 
                    )}
                </Formik>
            </View>

            <View style={styles.buttonsContainer}>
                {currencies.map((currency : Currency) => (
                    <CurrencyButton{...currency}/>
                ))}
            </View>

        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({
    appContainer: {
        padding: 20,
        alignItems: 'center',
        minHeight: Dimensions.get('screen').height
    },
    buttonsContainer: {
        maxWidth: '90%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        width: '90%',
        height: 50,
    },
    headingText: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: '300',
        textAlign: 'center'
    }
})