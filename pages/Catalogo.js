import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import ItemCatalogo from '../components/ItemCatalogo'
import { Icon } from '@rneui/themed';

export default function Catalogo() {
    return(
        <View style={catalogoStyle.container}>
            <NavBar />
            <View>
                <Text style={catalogoStyle.titulo}>Catálogo</Text>
                <View style={catalogoStyle.barraPesquisa}>
                    <TextInput style={container.inputPesquisa} />
                    <Icon name="search-outline" type="ionicon" size={24} />
                </View>
                <View style={catalogoStyle.categoria}>
                    <Text>PC <Icon name="close-circle-outline" type="ionicon" size={12} /></Text>
                </View>
                <View>
                    <ItemCatalogo />
                    <ItemCatalogo />
                    <ItemCatalogo />
                    <ItemCatalogo />
                    <ItemCatalogo />
                    <ItemCatalogo />
                </View>
            </View>
        </View>
    );
}

const deviceWidth = Math.round( Dimensions.get("window").width);

const catalogoStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 34,
        fontWeigh: "700"
    },
    barraPesquisa: {
        display: "flex",
        justifyContent: "center"
    },
    inputPesquisa: {
        width: deviceWidth - 80
    },
    categoria: {
        padding: 4,
        borderWidth: 1,
        marginTop: 10,
        marginLeft: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
})