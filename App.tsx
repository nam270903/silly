import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  
} from 'react-native';
import Tasks from './components/Tasks';



const App = () => {

  return (
    <View style = {styles.container}>
      
      <View style = {styles.tasksWrapper}> 
        <Text style = {styles.secontionTitle}> Today's Tasks </Text>
      </View>

      <View style = {styles.items}>
        <Tasks text = {'Task 1'}/>
        <Tasks text = {'Task 2'}/>
      </View>

    </View>
  )
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED'
    }, 
    
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },

    secontionTitle: {
      fontSize: 25,
      fontWeight: 'bold'
    },
    
    items: {
      paddingHorizontal: 20,
      paddingTop: 30,
    },
  });

export default App;
