import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F0FFFF',
        padding: 20
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#33CCCC',
        marginBottom: 10
    },
    subtitulo:{
        fontSize: 16,
        color: '#666',
        fontStyle: 'italic',
        marginBottom: 20
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#DDD'
    },
    button: {
        backgroundColor: '#FFE4E1',
        height: 40,
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        width: '100%'
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#363636'
    },
    card:{
        borderWidth: 1,
        backgroundColor: 'white',
        marginTop: 30,
        width: '100%',
        borderRadius: 10,
        padding: 20,
        borderColor: '#DDD'

    },
    cardTitle:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,

    },
    cartText:{
        fontSize: 14,
        color: '#666'

    }


})

export default styles;