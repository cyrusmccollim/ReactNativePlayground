import React, { PropsWithChildren }from 'react'
import { 
    StyleSheet,
    TouchableOpacity,
    Text,
    ViewStyle
} from 'react-native'
import {
    schemeColor
} from '../helpers/scheme'

type currencyButtonProps = PropsWithChildren<{
    currency : Currency,
    customStyle : ViewStyle
}>

const CurrencyButton = (props : currencyButtonProps) => {
    return (
        <TouchableOpacity style={[styles.button, props.customStyle]}>
            <Text style={styles.flag}>{props.currency.flag}</Text>
            <Text style={styles.name}>{props.currency.name}</Text>
        </TouchableOpacity>
    )
}

export default CurrencyButton

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 7,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        backgroundColor: schemeColor(true)
    },
    flag: {
        fontSize: 30,
    },
    name: {
        fontSize: 10, 
        color: schemeColor(false)
    }
})