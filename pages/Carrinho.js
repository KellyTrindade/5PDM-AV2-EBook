import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableHighlight, Button } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
    
  return (
    <View style={styles.container1}>
      <Text style={styles.title}>
        Meu Carrinho
      </Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://customercare.igloosoftware.com/.api2/api/v1/communities/10068556/previews/thumbnails/4fc20722-5368-e911-80d5-b82a72db46f2?width=680&height=680&crop=False',}}
          style={styles.image1}
        />
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={styles.paragraph2}>
            Nome do Jogo
          </Text>
          <Text style={styles.paragraph1}>
            R$ 99,99
          </Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableHighlight onPress={() => alert('Remove 1 item do carrinho.')}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/2891/2891491.png',}}
                style={styles.image2}
              />
            </TouchableHighlight>
            <TextInput
              style={styles.textinput}
            />
            <TouchableHighlight onPress={() => alert('Adiciona mais 1 item ao carrinho.')}>
              <Image
                source={{
                  uri: 'https://cdn0.iconfinder.com/data/icons/ui-16px-perfect-megapack-line/16/82_Add-512.png',}}
                style={styles.image2}
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://customercare.igloosoftware.com/.api2/api/v1/communities/10068556/previews/thumbnails/4fc20722-5368-e911-80d5-b82a72db46f2?width=680&height=680&crop=False',}}
          style={styles.image1}
        />
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={styles.paragraph2}>
            Nome do Jogo
          </Text>
          <Text style={styles.paragraph1}>
            R$ 99,99
          </Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableHighlight onPress={() => alert('Remove 1 item do carrinho.')}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/2891/2891491.png',}}
                style={styles.image2}
              />
            </TouchableHighlight>
            <TextInput
              style={styles.textinput}
            />
            <TouchableHighlight onPress={() => alert('Adiciona mais 1 item ao carrinho.')}>
              <Image
                source={{
                  uri: 'https://cdn0.iconfinder.com/data/icons/ui-16px-perfect-megapack-line/16/82_Add-512.png',}}
                style={styles.image2}
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://customercare.igloosoftware.com/.api2/api/v1/communities/10068556/previews/thumbnails/4fc20722-5368-e911-80d5-b82a72db46f2?width=680&height=680&crop=False',}}
          style={styles.image1}
        />
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={styles.paragraph2}>
            Nome do Jogo
          </Text>
          <Text style={styles.paragraph1}>
            R$ 99,99
          </Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableHighlight onPress={() => alert('Remove 1 item do carrinho.')}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/2891/2891491.png',}}
                style={styles.image2}
              />
            </TouchableHighlight>
            <TextInput
              style={styles.textinput}
            />
            <TouchableHighlight onPress={() => alert('Adiciona mais 1 item ao carrinho.')}>
              <Image
                source={{
                  uri: 'https://cdn0.iconfinder.com/data/icons/ui-16px-perfect-megapack-line/16/82_Add-512.png',}}
                style={styles.image2}
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://customercare.igloosoftware.com/.api2/api/v1/communities/10068556/previews/thumbnails/4fc20722-5368-e911-80d5-b82a72db46f2?width=680&height=680&crop=False',}}
          style={styles.image1}
        />
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={styles.paragraph2}>
            Nome do Jogo
          </Text>
          <Text style={styles.paragraph1}>
            R$ 99,99
          </Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableHighlight onPress={() => alert('Remove 1 item do carrinho.')}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/2891/2891491.png',}}
                style={styles.image2}
              />
            </TouchableHighlight>
            <TextInput
              style={styles.textinput}
            />
            <TouchableHighlight onPress={() => alert('Adiciona mais 1 item ao carrinho.')}>
              <Image
                source={{
                  uri: 'https://cdn0.iconfinder.com/data/icons/ui-16px-perfect-megapack-line/16/82_Add-512.png',}}
                style={styles.image2}
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <Button
        title="Finalizar Compra"
        color="#228B22"
        onPress={() => alert('Redireciona para a tela de pagamento.')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraph1: {
    margin: 7,
    fontSize: 14,
    fontWeight: 'bold',
  },
  paragraph2: {
    margin: 7,
    fontSize: 14,
  },
  image1: {
    height: 110,
    width: 140,
  },
  image2: {
    margin:7,
    height: 25,
    width: 25,
  },
  textinput: {
    height: 25,
    width: 35,
    margin: 7,
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
  },
});
