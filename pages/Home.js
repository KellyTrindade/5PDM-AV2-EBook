import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NavBar from "../components/NavBar";
import Item from "../components/Item";

export default function Home()
{
    return(
        <View style={homeStyle.container}>
            <NavBar/>
            <View>
                <Item />
                <Item />
                <Item />
            </View>
        </View>
    );
}

const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})