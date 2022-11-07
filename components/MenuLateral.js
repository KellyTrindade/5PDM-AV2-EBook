import React from "react";
import { Image, StyleSheet, Text, View } from 'react-native';
import { Icon } from '@rneui/themed';
import MenuLateralCategoria from './MenuLateralCategoria';


export default function MenuLateral() {
    return(
        <View style={menuLateralStyle.container}>
            <View style={menuLateralStyle.headerMenu}>
                <Icon name="person-circle" type="ionicon" size={ 26 } />
                <Text>Perfil</Text>
            </View>
            <View>
                <MenuLateralCategoria nome="desktop" texto="PC" />
                <MenuLateralCategoria nome="logo-playstation" texto="PlayStation" />
                <MenuLateralCategoria nome="logo-xbox" texto="XBox" />
                <MenuLateralCategoria nome="phone-portrait-outline" texto="Mobile" />
            </View>
        </View>
    );
}

const menuLateralStyle = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginTop: 10,
        alignItems: "start",
        justifyContent: "start",
        fontWeight: "500"
    },
    headerMenu: {
        padding: 20,
        borderBottomWidth: 2,
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        borderBottomColor: "#808080"
    }
})