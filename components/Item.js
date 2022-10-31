import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from "./Button";

export default function Item() {
    return(
        <View style={card}>
            <Image source={{uri:"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"}} />
            <Button />
        </View>
    );
}

const card = StyleSheet.create({

})