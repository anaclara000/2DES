import { ScrollView, View, Text, TouchableOpacity , Image} from 'react-native';

import styles from './style'

export default function Compromissos({ navigation }) {
    const data = [
        {
            "img":"https://raw.githubusercontent.com/wellifabio/senai2022/master/2des/indmo/aula05/Exerc%C3%ADcio/assets/escola.png",
            "id":1,
            "tipo":2,
            "nome":"Escola",
            "horario":"07:30 - 11:30"
        },
        {
            "img":"https://raw.githubusercontent.com/wellifabio/senai2022/master/2des/indmo/aula05/Exerc%C3%ADcio/assets/medico.png",
            "id":2,
            "tipo":1,
            "nome":"Consulta Médica",
            "horario":"13:00 - 13:40"
        },
        {
            "img":"https://raw.githubusercontent.com/wellifabio/senai2022/master/2des/indmo/aula05/Exerc%C3%ADcio/assets/mercado.png",
            "id":3,
            "tipo":3,
            "nome":"Ir ao mercado",
            "horario":"16:30 - 17:00"
        },
        {
            "img":"https://raw.githubusercontent.com/wellifabio/senai2022/master/2des/indmo/aula05/Exerc%C3%ADcio/assets/cinema.png",
            "id":4,
            "tipo":4,
            "nome":"Ir ao cinema",
            "horario":"20:00 - 22:30"
        },
    ]

    return (
        <ScrollView style={styles.container}>
            {
                data.map((item, index) => {
                    return(
                        <TouchableOpacity style={styles.item} key={index} onPress={() =>{ navigation.navigate('Descrição', {'id':item.id})}}>
                            <View style={styles.contImage}>
                                <Image style={styles.image} source = {item.img}/>
                            </View>
                            <View>
                            <Text style={styles.title1}>{item.nome}</Text>
                            <Text style={styles.title}>Horario : {item.horario}</Text>       
                            </View>
                                                                
                        </TouchableOpacity>
                    )
                    
                })
            }
        </ScrollView>
    );
}