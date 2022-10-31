import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function NavBar()
{
    return(
        <View style={navbarStyle}>
            <Image source={{ uri:"https://cdn-icons-png.flaticon.com/512/2311/2311531.png"}} />
            <Text>Loja</Text>
            <View>
                <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/158/158740.png"}} />
                <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/25/25619.png"}} />
            </View>
        </View>
    );
}




const navbarStyle = StyleSheet.create({

})