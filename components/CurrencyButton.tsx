import React, { PropsWithChildren }from 'react'
import { 
    StyleSheet,
    TouchableOpacity,
    Text,
    ViewStyle,
    TextStyle
} from 'react-native'

type currencyButtonProps = PropsWithChildren<{
    currency : Currency,
    buttonStyle : ViewStyle[]
    textStyle: TextStyle[]
}>

const CurrencyButton = (props : currencyButtonProps) => {
    return (
        <TouchableOpacity style={props.buttonStyle}>
            <Text style={[styles.flag, props.textStyle]}>{props.currency.flag}</Text>
            <Text style={[styles.name, props.textStyle]}>{props.currency.name}</Text>
        </TouchableOpacity>
    )
}

export default CurrencyButton

const styles = StyleSheet.create({
    flag: {
        fontSize: 30
    },
    name: {
        fontSize: 10
    }
})