// import { StatusBar } from 'expo-status-bar';]
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput, FlatList } from 'react-native';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import styleM from './styleM'

import iconCraft from './img/1.png'
import iconDicas from './img/4.png'
import iconMods from './img/2.png'
import iconBugs from './img/3.png'
import iconChat from './img/chatIcon.png'
import { ActivityIndicator } from 'react-native-web';

export default function Main({ navigation }) {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const options = {method: 'GET'};

  fetch('http://localhost:3000/Perguntas', options)
      .then(res => { return res.json() })
      .then(data => {
        setQuestions(data);
      })
  }, [questions]);
  useEffect(() =>{
  }, []);

  return (
    <View>
       {
        questions.map((post, index) => {
          return (
            <View>
              <Text>{post.pergunta}</Text>
            </View>
          )
        })
       }
      
    </View >

  );
}

function teste() {
  console.log('asdad')
}





