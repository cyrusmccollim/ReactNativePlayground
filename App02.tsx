/*
    Cyrus McCollim
    ReactNativePlayground : App #2
    -- Custom components (FlatCards, ScrollableCards, ImageCards, ActionCards, UserCards)
    -- Displays:
        Unscrollable cards with styling.
        Horizontally scrollable cards with styling.
        Horizontally scrollable cards with images and styling.
        Actionable cards with buttons.
        User cards with images and status.
*/

import React from 'react'
import FlatCards from './components/FlatCards' // Importing a custom component.
import ScrollableCards from './components/ScrollableCards' // Importing a custom component.
import ImageCards from './components/ImageCards'
import ActionCard from './components/ActionCards'
import ContactList from './components/UserCards'
import { 
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native'

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <FlatCards/>
        <ScrollableCards/>
        <ImageCards/>
        <ActionCard/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
  },
  headingText: {
      fontSize: 25,
      color: 'black',
      fontWeight: 'bold',
      paddingHorizontal: 20,
      paddingTop: 20
  },
})