import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    FlatList
} from 'react-native'
import styles from './styles/SearchScreenStyles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWord, toggleFavourite } from '../store/actions/word'
import ResultItem from '../components/ResultItem'
import _ from 'lodash'
import ListEmptyComponent from '../components/ListEmptyComponent'

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch()
    const words = useSelector(state => state.word.words);
    const favouriteWords = useSelector(state => state.word.favouriteWords);
    const loading = useSelector(state => state.word.loading);


    const onFavPress = (item) => {
        dispatch(toggleFavourite(item))
    }

    console.log('favouriteWords', favouriteWords)

    return (
        <SafeAreaView>
            <View style={styles.mainView}>
                <View style={styles.searchView}>
                    <TextInput
                        style={styles.searchBox}
                        onChangeText={(value) => {
                            setSearchTerm(value)
                        }}
                        placeholder="Search Dictiona"
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={searchTerm}
                    />
                    <TouchableOpacity onPress={() => { dispatch(fetchWord(searchTerm)) }} style={styles.SearchButton} >
                        <Text style={styles.searchButtonText}>Search</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.resultView} >
                    <View style={styles.resultTitleView}>

                        <Text style={styles.viewTitle}>Search Results</Text>
                        {_.get(words, 'definitions', []).length > 0 &&
                            <View style={{ alignItems: 'center', paddingVertical: 20 }}>
                                <Text style={{ fontWeight: '500' }}>Tap to favourite </Text>
                            </View>
                        }
                        <View style={styles.contentView}>
                            {loading == true ?

                                <ActivityIndicator size='large' /> :

                                <FlatList
                                    data={_.get(words, 'definitions', [])}
                                    keyExtractor={(item, index) => index}
                                    ListEmptyComponent={ListEmptyComponent}
                                    renderItem={({ item }) => <ResultItem
                                        item={item}
                                        onPress={() => {
                                            onFavPress(item)
                                        }}
                                    />}
                                />

                            }
                        </View>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default SearchScreen
