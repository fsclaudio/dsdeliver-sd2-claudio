import React, { useEffect, useState } from 'react';
import {  StyleSheet,ScrollView ,Text, View,Alert } from 'react-native';
import Header from '../Header';
import OrderCard from '../OrderCard';
import {fetchOrders}from '../api';
import { Order } from '../types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useIsFocused, useNavigation } from '@react-navigation/native';

 function Orders() {
    const[ orders, setOrders]= useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const fetchData = () => {
      setIsLoading(true);
       fetchOrders()
       .then(response => setOrders(response.data))
       .catch(() => Alert.alert('Houve erro ao buscar os pedidos!'))
       .finally(() => setIsLoading(false));
    }

     useEffect(()=> {
       if (isFocused){
         fetchData();
       }
     },[isFocused]) 

     const handleOnPress = (order: Order) => {
        navigation.navigate('OrderDetails',{
          order
        });

     }
  return (
    <>
    <Header />
    <ScrollView style={styles.container} >
     { isLoading ? (
       <Text style= {styles.text}>Buscando Pedidos! </Text>
     ): (orders.map(order => (
      <TouchableWithoutFeedback key={order.id}
        onPress={() => handleOnPress(order)}
      >
        <OrderCard order={order}/>
      </TouchableWithoutFeedback>
    ))
    )}
    </ScrollView>
   
    </>
  );
}

const styles = StyleSheet.create({
      container:{
        paddingRight:'5%',
        paddingLeft: '5%',
        alignContent: 'center'

      },
      text: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: -0.24,
        color: '#9E9E9E',
        fontFamily: 'OpenSans_400Regular'
      },
      }
);

export default Orders;
