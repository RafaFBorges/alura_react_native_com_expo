import React from "react";
import {SafeAreaView, StatusBar, Text, FlatList} from 'react-native';
import Item from "./Item";

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.90,
        descricao: "NÃO DE BANHO NO SEU GATO! Mas se precisar nós vamos."
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.90,
        descricao: "Uma dose da vacina V4. Seu gato precisa de duas."
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.90,
        descricao: "Uma dose da vacina Antirrábica. Seu gato precisa de uma por ano."
    }
];

export default function Servicos() {
    return <SafeAreaView>
        <StatusBar/>
        <Text>Serviços</Text>
        <FlatList
            data={servicos}
            renderItem={({item}) => <Item {...item}/>}
            keyExtractor={({id}) => String(id)}
        />
    </SafeAreaView>;
}