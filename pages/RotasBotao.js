import React from "react";
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const navBotao = createStackNavigator();

import listarFrutas from '../pages/Frutas/listarFrutas';
import cadastrarFrutas from '../pages/Frutas/cadastrarFrutas';
import alterarFrutas  from '../pages/Frutas/alterarFrutas';

export default function RotasBotao(){
    return(
        <navBotao.Navigator>
            <navBotao.Screen name="Listar" component={listarFrutas} options={{headerShown:false}} />
            <navBotao.Screen name="Cadastrar" component={cadastrarFrutas} options={{headerShown:false}} />
            <navBotao.Screen name="Alterar" component={alterarFrutas} options={{headerShown:false}} />
        </navBotao.Navigator>
    );
}