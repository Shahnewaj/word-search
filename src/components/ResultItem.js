import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Images from '../assets'

const ResultItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.mainView}>
                <View style={styles.imageView}>
                    <Image style={styles.image} source={item.image_url !== null ? { uri: item.image_url } : Images.ImageFallback} />
                </View>
                <View style={styles.contentView}>
                    <Text style={styles.textItem}>Type: {item.type}</Text>
                    <Text style={styles.textItem}>Description: {item.definition}</Text>
                    <Text style={styles.textItem}>Example:  {item.example}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        flex: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        borderWidth: 1
    },
    imageView: {
        marginRight: 10,
        flex: .3
    },
    image: {
        width: 60,
        height: 60,
    },
    contentView: {
        flex: 1
    },
    textItem: {
        marginVertical: 5
    }
})


export default ResultItem
