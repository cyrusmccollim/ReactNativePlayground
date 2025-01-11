/*
    Cyrus McCollim
    ReactNativePlayground : App #2
    Styling
    -- Custom components (FlatCards, ScrollableCards, ImageCards, ActionCards, UserCards)
    -- Displays:
        Unscrollable cards with styling.
        Horizontally scrollable cards with styling.
        Horizontally scrollable cards with images and styling.
        Actionable cards with buttons.
        User cards with images and status.
*/

import React from 'react'
import FlatCards from '../components/experiments/FlatCards' // Importing a custom component.
import ScrollableCards from '../components/experiments/ScrollableCards' // Importing a custom component.
import ImageCards from '../components/experiments/ImageCards'
import ActionCard from '../components/experiments/ActionCards'
import ContactList from '../components/experiments/UserCards'
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