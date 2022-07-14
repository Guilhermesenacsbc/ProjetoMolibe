import React, {useState} from "react";
import { Text, View, StyleSheet, Alert, TextInput, TouchableOpacity } from 'react-native';
import { alterarFrutas, deletarFrutas } from './ModelFrutas';

export default function alterarFruta({navigation}){
    const[idp, setIdp] = useState('');
    const[frutap, setfrutap] = useState('');
    const[valorp, setvalorp] = useState('');
    const[fotop, setfotop] = useState('');

    async function alterar(){
        const resultado = await alterarFrutas(idp, frutap, valorp, fotop);
        if(resultado == 'Sucesso') {
            Alert.alert('Fruta alterado com Sucesso!!');
            navigation.goBack();
        }else {
            Alert.alert('Erro ao cadastrar a fruta ');
        }
    }
    async function deletar(){
        const resultado = await deletarFrutas(idp);
        if(resultado == 'Sucesso') {
            Alert.alert('Fruta alterado com Sucesso!!');

        }else {
            Alert.alert('Erro ao cadastrar a fruta ');
        }
    }
    return(
        <View style={styles.container}>
            <TextInput
            value={idp}
            placeholder="Digite o código da Fruta"
            style={styles.TextInputTodos}
            onChangeText={setIdp}
            />
              <TextInput
            value={frutap}
            placeholder="Digite o código da Fruta"
            style={styles.TextInputTodos}
            onChangeText={setfrutap}
            />
              <TextInput
            value={valorp}
            placeholder="Digite o código da Fruta"
            style={styles.textInputTodos}
            onChangeText={setvalorp}
            />
              <TextInput
            value={fotop}
            placeholder="Digite o código da Fruta"
            style={styles.textInputTodos}
            onChangeText={setfotop}
            />

            <TouchableOpacity style= {styles.botaoCadastrar} onPress={alterar}>
                <Text style={styles.textBotaoCadastrar}>Alterar</Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.botaoCadastrar} onPress={deletar}>
                <Text style={styles.textBotaoCadastrar}>Excluir</Text>
            </TouchableOpacity>
        </View>
    );

}
const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: '#e9c46a',
    },
    botaoCadastrar:{
        backgroundColor: '2a9d8f',
        margin: 15,
        padding: 5,
        borderRadius: 10,
    },
    textImputTodos: {
        fontSize:18
    },
})