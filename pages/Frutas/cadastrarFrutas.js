import React,{useState} from "react";
import { Text,View,StyleSheet,Alert, TouchableOpacity, TextInput } from 'react-native';
import { salvarNovaFruta } from './ModelFrutas';

export default function cadastrarFrutas({navigation}){
const [idp, setIdp] = useState('');
const [frutap, setfrutap] = useState('');
const [valorp, setvalorp] = useState('');
const [fotop, setfotop] = useState('');

async function cadastro(){
    const resultado = await salvarNovaFruta(idp,frutap,valorp,fotop)
    if(resultado === 'Sucesso'){
        Alert.alert('Fruta cadastrada com sucesso!!');
        navigation.goBack();
}else{
        Alert.alert('erro ao cadastrar a fruta');
}
}

return(
    <View style={styles.container}>
        <TextInput
        value={idp}
        placeholder="Digite o código da fruta"
        style={styles.TextInputTodos}
        onChangeText={setIdp}
        />
         <TextInput
        value={frutap}
        placeholder="Digite o Nome da fruta"
        style={styles.TextInputTodos}
        onChangeText={setfrutap}
        />
         <TextInput
        value={valorp}
        placeholder="Digite o Valor da fruta"
        style={styles.TextInputTodos}
        onChangeText={setvalorp}
        />
         <TextInput
        value={fotop}
        placeholder="Digite o link da foto da fruta"
        style={styles.TextInputTodos}
        onChangeText={setfotop}
        />
    <TouchableOpacity style={styles.botaoCadastrar} onPress={cadastro}>
        <Text style={styles.textBotaoCadastrar}>Cadastrar</Text>
    </TouchableOpacity>

    </View>
    );
}
const styles = StyleSheet.create({
    container:{
    paddingTop: 90,
    flex: 1,
    backgroundColor: '#e9c46a',
    },
    botaoCadastrar:{
        backgroundColor: '#2a9d8f',    
        margin:15,
        padding:5,
        borderRadius:20,
    },
    textImputTodos: {
        fontSize:18
        
    },
})
