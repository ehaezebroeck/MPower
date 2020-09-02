import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export default function InfluenceScreen() {
  const state = 'Iowa';
  const streetAddress = '8302 NW Chevalia Dr.';

  // rep static test data
  const president = 'Donald Trump';
  const senatorOne = 'Chuck G';
  const senatorTwo = 'Joni E';
  const houseReps = [
    {name: 'Abby Finkenauer', district: 1},
    {name: 'Dave Loebsack', district: 2},
    {name: 'Cindy Axne', district: 3}, 
    {name: 'Steve King', district: 4}
  ];



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Influence</Text>
      <Text style={styles.mainHeader}>Federal Government</Text>
      <Text style={styles.subHeader}>President:</Text>
      <Text>{president}</Text>
      <Text style={styles.subHeader}>Senators:</Text>
      <Text>{senatorOne}</Text>
      <Text>{senatorTwo}</Text>
      <Text style={styles.subHeader}>House Represenatives:</Text>
      <FlatList 
        style={styles.centeredList}
        data={houseReps}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.district}</Text>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/InfluenceScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  mainHeader: {
    fontSize: 25,
  },
  subHeader: {
    fontSize: 18,
  },
  centeredList: {
    textAlign: 'center',
  }
});
