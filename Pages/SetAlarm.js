import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Switch, Alert, Vibration } from 'react-native';

export default function Alarm() {
  const dataAlarm = [
    { 
      time: '04:00',
      activeDays: [1, 2, 3],
      active: true
    },
  ]
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#191F37',
  },

  title: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center'
  },

  small: {
    marginVertical: 10,
    fontSize: 16,
    color: 'gray',
    textAlign: 'center'
  },
  gold: {
    color: 'gold',
  },
  loginScreenButton: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
  },
  loginText: {
    color: 'gold',
    textAlign: 'right',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 24,
  },
  alarmBox: {
    backgroundColor: '#2C314F',
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8
  },
  weekDays: {
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 2,
    paddingHorizontal: 10,
  },
});