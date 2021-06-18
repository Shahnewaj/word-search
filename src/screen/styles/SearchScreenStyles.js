import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    mainView: {
        paddingHorizontal: 20,
    },
    contentView: {

    },
    searchView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 20,
        alignItems: 'center',
    },
    searchBox: {
        backgroundColor: '#ddd',
        flex: 0.7,
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center',
        lineHeight: 18,
        borderRadius: 5
    },
    SearchButton: {
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#000',
        flex: 0.3,
        marginHorizontal: 10,
        borderRadius: 5,
    },
    searchButtonText: {
        color: '#fff',
        fontWeight: '500'

    },
})

export default styles