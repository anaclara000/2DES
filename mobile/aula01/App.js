import {View, Text, StyleSheet, Image} from 'react-native';
import { 
  NotoSans_400Regular,
  NotoSans_400Regular_Italic,
  NotoSans_700Bold,
  NotoSans_700Bold_Italic 
} from '@expo-google-fonts/noto-sans'
import { useFonts} from 'expo-font';

export default function App(){

  let[fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_400Regular_Italic,
    NotoSans_700Bold,
    NotoSans_700Bold_Italic 
  });

  const usuarios = [ 
    {
      "img": require('./assets/usuario2.jpg'),
      "nome":"Junior Gonçalves",
      "cargo":"Programador Senior",
    },
    {
      "img":require('./assets/usuario1.jpg'),
      "nome":"Juan Gabriel Pena",
      "cargo":"Cirurgião plástico",
    },
    {
      "img":require('./assets/usuario.png'),
      "nome":"Estela Oliveira",
      "cargo":"Atriz",
    },
    {
      "img":require('./assets/usuario3.jpg'),
      "nome":"Maria Gomes",
      "cargo":"Farmaceutica",
    },
  ];
 
  return(
    usuarios.map(usuario => {
      return(
        <View style={style.container}>
          <View style={style.principal}>
            <Image source={usuario.img} style={style.imagem}/>
            <Text>{`${usuario.nome} - ${usuario.cargo}`}</Text>
          </View>
        </View>
      )
    })     
  );
};

const style = StyleSheet.create({
  container : {
    margin: 0,
    padding:0,
    fontFamily:'NotoSans_700Bold'
  },
  principal: {
    flex: 1,
    textAlign: 'center',
    border: '1px solid #000',
    backgroundColor: 'pink',
    padding: '10px',
    margin: '10px',
    borderRadius: '10px'
  },
  imagem: {
    width: '32px',
    height: '32px',

  },

});