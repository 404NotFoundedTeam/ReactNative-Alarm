import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Switch, Alert, Vibration } from 'react-native';
import {PlayAudio, PlayVibrate} from '../components/audios/Sound'
import Sound from 'react-native-sound';



export default function Alarm() {
  const [time, setTime] = useState(new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString());  

  const [alarmsData, setAlarmsData] = useState(
    [
      { 
        time: '04:00',
        activeDays: [1, 2, 3],
        active: true
      },
      {
        time: '05:00',
        activeDays: [3],
        active: true
      },
      {
        time: '06:00',
        activeDays: [1, 2, 3],
        active: true
      },
      {
        time: '07:00',
        activeDays: [3],
        active: true
      },
    ]
    )

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString());
    }, 1000)
  }, []);
  
  myPress = () => {
    Vibration.vibrate();
  };

  const changeActicve = (index) => {
      const data = [...alarmsData]
      data[index].active = !data[index].active 
      setAlarmsData(() => data)
  }

  let days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  return (
    <View style={styles.container}>
      <Text style={styles.small}>Upcoming alarm!</Text>
      <Text style={styles.title}>6 hours 45 minutes</Text>
      <Text style={styles.gold}>{time}</Text>
      <TouchableOpacity
        style={styles.plusButton}
        onPress={() => myPress('HomeScreen')}
        underlayColor='#fff'>
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      {
        alarmsData.map((item, index) => {
          return (
            <View style={styles.alarmBox} key={item.time + index}>
              <Text style={styles.title}>{item.time}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.small}>
                  {days.map((day, i) => {
                    return (

                      <View style={{ paddingRight: 5 }} key={`${day}${i}`}><Text style={item.activeDays.includes(i) ? styles.gold : { color: 'gray' }}>{day}</Text></View>
                    )
                  })}
                </Text>
                <Switch               
                onValueChange={() => {
                  changeActicve(index)
                }}
                value={item.active}
                trackColor={{true: "gray", false: "gray" }}
                thumbColor={item.active ? "gold" : "gray"}
              />
              </View>
            </View>
          )
        })
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#191F37',
  },

  title: {
    fontSize: 28,
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
  plusButton: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
  },
  plusText: {
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
    paddingVertical: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8
  },
});