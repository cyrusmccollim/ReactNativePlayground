import React from 'react'
import { 
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'
import {
    schemeText,
    schemeBg,
} from '../helpers/scheme'

const CurrencyButton = (currency : Currency) => {
    return (
        <TouchableOpacity style={[styles.button, schemeBg(true)]}>
            <Text style={[styles.flag, schemeText(true)]}>{currency.flag}</Text>
            <Text style={[styles.name, schemeText(true)]}>{currency.name}</Text>
        </TouchableOpacity>
    )
}

export default CurrencyButton

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flag: {
        fontSize: 20,
    },
    name: {
        fontSize: 15, 
    }
})