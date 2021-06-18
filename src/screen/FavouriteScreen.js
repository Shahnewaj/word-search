import React from 'react'
import { View, Text, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWord, removefromFavStore, toggleFavourite } from '../store/actions/word'
import ResultItem from '../components/ResultItem'
import _ from 'lodash'
import ListEmptyComponent from '../components/ListEmptyComponent'

const FavouriteScreen = () => {

    const dispatch = useDispatch()
    const words = useSelector(state => state.word.words);
    const favouriteWords = useSelector(state => state.word.favouriteWords);
    const loading = useSelector(state => state.word.loading);

    const removefromFavList = (id) => {
        dispatch(removefromFavStore(id))
    }

    return (
        <View>

            {favouriteWords.length > 0 && < View style={{ alignItems: 'center', paddingVertical: 20 }}>
                <Text style={{ fontWeight: '500' }}>Tap on Item to remove </Text>
            </View>}

            {
                loading == true ?

                    <ActivityIndicator size='large' /> :

                    <FlatList
                        data={favouriteWords}
                        ListEmptyComponent={ListEmptyComponent}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) => <ResultItem
                            item={item.item}
                            onPress={() => {
                                removefromFavList(item.id)
                            }}
                        />}
                    />

            }
        </View >
    )
}

export default FavouriteScreen
