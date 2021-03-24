import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native'
//import meals from './recetas'

const DATAPRUEBA = [
    {
        id:"1",
        name: "prueba1"        
    },
    {
        id:"2",
        name: "prueba2"        
    },
    {
        id:"3",
        name: "prueba3"        
    },
    {
        id:"4",
        name: "prueba4"        
    },
    {
        id:"5",
        name: "prueba5"       
    }
]

const HorizonalList = ({ title }) => {
    

    const itemList = ({item})=>{
        
        <TouchableOpacity style={styles.item}>            
            <Text style={styles.textitem}>{item.name}</Text>         
        </TouchableOpacity>
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList style = {{backgroundColor: 'yellow'}}
                data={DATAPRUEBA}
                renderItem={itemList}
                keyExtractor={(item) => item.id}
                horizontal={true}
            />           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {        
        flex:1,
        padding: 10,
    },
    title: {
        color: '#F50087',
        fontSize: 50
    },
    textitem: {       
        color: 'white',
        fontSize: 20,

    },
    image:{  
        width:'100%',
        height:'100%'           
    },
    item:{        
        width:20,
        height:20
    }
})

export default HorizonalList