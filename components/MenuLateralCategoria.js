import React from "react";
import { Image, StyleSheet, Text, View } from 'react-native';
import { Icon } from '@rneui/themed';

export default function MenuLateralCategoria( props ) {
    return(
        <View style={categoriaStyle.container}>
            <Icon name={props.nome} type="ionicon" size={ 20 } />
            <Text>{props.texto}</Text>
        </View>
    );
}

const categoriaStyle = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center"
	}
})