import { StyleSheet, Text, View} from 'react-native';
import { useState, useEffect } from 'react';
import { TextInput } from 'react-native';
import axios from 'axios';

export default function App() {
  
  const [data, setData] = useState("");

  const getData = async () =>{
    try{
        const response = await axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
        ;

    const data = response.data;
    setData(data.brl);

    }
    catch(error){
        console.log(error.response.data);
    }
};

 useEffect (()=> {
    getData();
},[]);
}

  return (
    <View style={styles.container}>

<TextInput
        style={styles.input}
        value={number}
        placeholder="digite o código"
        keyboardType="numeric"
        onChangeText={text=>setInputNumber(text)}
      />
    
    <Button title="USD->BRL" onPress={()=>{
      return(
        <View>
          <Text>{'R$'[data]}</Text>
        </View>
  )}
    }/>
     
    </View>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    flex: 1,
    height: 40,
    margin: 12,
    marginTop: 80,
    borderWidth: 1,
    padding: 10,
  })