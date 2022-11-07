import React from "react";
import { Image, StyleSheet, Text, View } from 'react-native';
import { Icon } from '@rneui/themed';


export default function NavBar()
{
    return(
        <View style={navbarStyle.container}>
            <View>
                <Icon name="menu-outline" type="ionicon" size={ 24 } />
                <Text>Loja</Text>
            </View>
            <View>
                <Icon name="search-outline" type="ionicon" size={ 24 } />
                <Icon name="cart" type="ionicon" size={ 24 } />
            </View>
        </View>
    );
}

const navbarStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})