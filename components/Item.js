import React from "react";
import { Dimensions, Image, StyleSheet, Text, View, Button } from 'react-native';

export default function Item() {
    return(
        <View style={card.container}>
            <Image style={card.image} source={{uri:"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"}}  />
            <Button style={card.button} />
        </View>
    );
}

const deviceWidth = Math.round( Dimensions.get("window").width);
const radius = 5;

const card = StyleSheet.create({
    container: {
        position: "relative",
        width: deviceWidth - 40,
        height: 200,
        borderRadius: radius,
        shadowColor: "black",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.75,
        shadowRadius: radius,
        elevation: 9
    },
    button: {
        position: absolute,
        top: "90%",
        left: "50%"
    },
    image: {
        width: deviceWidth - 40,
        height: 200,
    }
})