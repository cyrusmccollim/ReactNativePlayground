/*
    Cyrus McCollim
    ReactNativePlayground : App #3
    StringGenerator
    -- Generates a random string of characters based on user specifications.
    -- Displays:
        Text, textbox, and buttons.
        Generated string.
*/

import React, { useState } from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { 
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions
} from 'react-native'

export default function App(): JSX.Element {
  /** 
  * These are states and can be treated as variables. 
  * Each state has a methodName that can be used to update the states.
  * Syntax:
      * const [value, methodName] = useState(defaultValue)
  */
  const [string, setString] = useState('');
  const [stringGenerated, setStringGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [spaces, setSpaces] = useState(false);

  /** 
   * Method that accepts a length paramater and generates a string.
   * Arrow functions: 
      * const functionName = (paramName : type) => { implementation with return }
      * const functionName = (paramName : type) => ( implementation without return )
      -- Assigned to variable whose name will be used to call the function.
  */ 
  const generateString = (length : number) => {
    let chars = '';
    if (upperCase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowerCase) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) chars += '0123456789' + '0123456789';
    if (symbols) chars += '!@#$%^&*()_+' + '!@#$%^&*()_+';
    if (spaces) chars += '          ';

    let result = '';
    for (let i = 0; i < length; i++) result += chars.charAt(Math.round(Math.random() * chars.length));

    setString(result);
    setStringGenerated(true);

    return result;
  }

  // Method that resets the states of the app to their default.
  const resetStates = () => {
    setString('');
    setStringGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
    setSpaces(false);
  }

    /**
   * Defines a validation rule.
   * Yup.object().shape({}) creates a schema for validating objects. 
   * Makes sure the "stringLength" input is:
      * A number.
      * At least 1.
      * Not empty. 
  */
  const stringValidate = Yup.object().shape({
    stringLength: Yup.number().typeError("Must be a number.") // Ensuring it is of type number.
                  .min(1, "Must be at least 1.") // Ensuring it is of length 1 or greater.
                  .required("Length is required.") // Ensuring the field is not empty.
  })

  return (
    <ScrollView>
      <SafeAreaView style={styles.appContainer}>
        <Text style={styles.headingText}>String Generator</Text>

        <View style ={styles.formikWrapper}>
          {/**
            * Formik helps manage form data and handle user input.
            * initialValues: Sets default values for form fields. 
            * validateSchema: Uses Yup library define rules for input validation.
            * onSubmit(): Function is called when the form is submitted. In this case, it calls the generateString function, passing the stringLength value as a number.
          */}
          <Formik initialValues={{ stringLength : '8' }} validationSchema={stringValidate} onSubmit={(values) => { generateString(Number(values.stringLength))}}>
            {({values, errors, touched, isValid, handleChange, handleSubmit, handleReset}) => (
              <>
              <Text style={styles.sectionText}>Length</Text>
              
              <View style={styles.formInputWrapper}>
                {/**
                 * value: (from user) is passed into values.stringLength 
                 * onChangeText: Function is called when text field changes. In this case, handleChange is called on the stringLength value to run valdiation.
                */}
                <TextInput style={styles.textInput} value={values.stringLength} placeholderTextColor='lightgray' placeholder="Ex. 5" keyboardType='numeric' onChangeText={handleChange('stringLength')}/>

                {/* Renders the error text component when the stringLength is invalid. */}
                {touched.stringLength && errors.stringLength && (<Text style={styles.errorText}>{errors.stringLength}</Text>)}
              </View>
              
              <Text style={styles.sectionText}>Include</Text>

              <View style={styles.togglesContainer}>
                <View style={styles.toggleWrapper}>
                  <BouncyCheckbox style={styles.bouncyCheckbox} fillColor={'#2ecc72'} isChecked={lowerCase} onPress={() => (setLowerCase(!lowerCase))}></BouncyCheckbox>
                  <Text style={styles.toggleName}>Lowercase Letters</Text>
                </View>

                <View style={styles.toggleWrapper}>
                  <BouncyCheckbox style={styles.bouncyCheckbox} fillColor={'#2475B0'} isChecked={upperCase} onPress={() => (setUpperCase(!upperCase))}></BouncyCheckbox>
                  <Text style={styles.toggleName}>Uppercase Letters</Text>
                </View>

                <View style={styles.toggleWrapper}>
                  <BouncyCheckbox style={styles.bouncyCheckbox} fillColor={'#AE1438'} isChecked={symbols} onPress={() => (setSymbols(!symbols))}></BouncyCheckbox>
                  <Text style={styles.toggleName}>Symbols</Text>
                </View>

                <View style={styles.toggleWrapper}>
                  <BouncyCheckbox style={styles.bouncyCheckbox} fillColor={'#F3B431'} isChecked={numbers} onPress={() => (setNumbers(!numbers))}></BouncyCheckbox>
                  <Text style={styles.toggleName}>Numbers</Text>
                </View>

                <View style={styles.toggleWrapper}>
                  <BouncyCheckbox style={styles.bouncyCheckbox} fillColor={'#2B2B52'} isChecked={spaces} onPress={() => (setSpaces(!spaces))}></BouncyCheckbox>
                  <Text style={styles.toggleName}>Whitespace</Text>
                </View>
              </View>

              <View style={styles.buttonsContainer}>
                {/* onPress={handleSubmit}: Function call will collect values, errors, and other data to call the onSubmit() of the Formik component. */}
                <TouchableOpacity style={[styles.primaryButton, (!isValid && styles.disabledButton)]} disabled={!isValid} onPress={handleSubmit} >
                    <Text style={styles.primaryButtonText}>GENERATE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondaryButton} onPress={() => {handleReset(); resetStates();}}>
                    <Text style={styles.secondaryButtonText}>RESET</Text>
                </TouchableOpacity>
              </View>
              </>
            )}
          </Formik>
        </View>
        
        { stringGenerated ? 
          <View style={styles.outputBlock}>
            <Text style={styles.outputblockText} selectable={true}>
              {string}
            </Text>
          </View>
        : null }
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 20,
    backgroundColor: 'white',
    minHeight : Dimensions.get('screen').height
  },

  // TEXT 

  headingText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  sectionText: {
    textAlign: 'left',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold'
  },
  errorText: {
    fontSize: 12,
    color: 'darkred'
  },

  // TOGGLES

  togglesContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  toggleWrapper: {
    alignContent: 'center',
    flexDirection: 'row',
    marginRight: 10,
    marginBottom: 10,
  },
  toggleName: {
    fontSize: 14,
    textAlignVertical: 'center',
    marginLeft: 10,
  },
  bouncyCheckbox: {
    width: 25,
  },
  
  // FORM INPUT

  formikWrapper: {
    paddingTop: 10,
  },
  formInputWrapper: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  fieldTitle: {
    fontSize: 14,
    marginBottom: 3,
    color: 'grey',
  },
  textInput: {
    width: 150,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
    marginBottom: 3,
    color: 'black',
    borderColor: '#b4b7b8',
    borderWidth: 1,
    borderRadius: 5,
  },
  
  // BUTTONS

  buttonsContainer: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  
  disabledButton: {
    opacity: 0.66
  },

  primaryButton: {
    marginHorizontal: 10,
    height: 50,
    width: '65%',
    borderRadius: 5,
    backgroundColor: '#333945',
    justifyContent: 'center',
    alignItems: 'center'
  },
  primaryButtonText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },

  secondaryButton: {
    marginHorizontal: 10,
    height: 50,
    width: '45%',
    borderRadius: 5,
    backgroundColor: '#a4a2a2',
    justifyContent: 'center',
    alignItems: 'center'
  },
  secondaryButtonText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },

  // OUTPUT

  outputBlock: {
    marginTop: 20,
    borderRadius: 10,
    width: '100%',
    minHeight: 100,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  outputblockText: {
    color: 'grey',
    fontSize: 20
  }
})