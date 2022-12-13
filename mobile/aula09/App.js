import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [posts, setPosts] = useState([]);


  useEffect(() =>{
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(res => { return res.json()})
    .then(data => {
      data = data.results;
      setPosts(data)
    })
  },[posts]);
  useEffect(() =>{
  }, []);


  return (
    <View style={styles.container}>
       {
        posts.map((post, index) =>{
          return(
            <View style={styles.container} key={index}>
              <Text style={styles.text}>{post.name}</Text>
            </View>
          )
        })
       }
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: '200px',
    height: '200px',
  }
});
