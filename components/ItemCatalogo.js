import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, IconButton } from 'react-native';
import { Icon } from '@rneui/themed';

export default function ItemCatalogo() {
    return(
        <View style={itemCatalogoStyle.container}>
            <View style={itemCatalogoStyle.banner}>
                <Image style={itemCatalogoStyle.imagem} source={{uri:"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"}} />
                <Icon style={itemCatalogoStyle.iconeFavoritar} name="hear-outline" type="ionicon" size={ 24 } />
            </View>
            <View>
                <Text>Nome do Jogo</Text>
                <View style={itemCatalogoStyle.valores}>
                    <Icon name="desktop-outline" type="ionicon" size={ 14 }  />
                    <Text>R$99,99</Text>
                </View>
            </View>
            <IconButton
                icon="cart"
                color="#4f3cb0"
                size={20}
            />
        </View>
    );
}

const deviceWidth = Math.round( Dimensions.get("window").width);

const itemCatalogoStyle = StyleSheet.create({
    container: {
        width: deviceWidth * 0.4,
        margin: 10,
        fontWeight: "200"
    },
    banner: {
        position: "relative",
    },
    imagem: {
        width: "100%"
    },
    iconeFavoritar: {
        position: absolute,
        top: "10%",
        right: "5%"
    },
    valores: {
        fontWeight: "700",
        fontSize: 16
    }
})