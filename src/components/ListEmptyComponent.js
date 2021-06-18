import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Images from '../assets'

const ListEmptyComponent = () => {
    return (
        <View style={styles.mainView}>
            <Image style={styles.image} source={Images.EmptyImage} />
            <Text style={styles.text}> Nothing to show  </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    mainView: {
        alignItems: 'center',
        flexDirection: 'column',
        marginVertical: 40
    },
    image: {
        width: 150,
        height: 150,
        marginVertical: 30,
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        paddingVertical: 25,
    }
})

export default ListEmptyComponent
