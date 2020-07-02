import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState(p => {
            return { count: p.count + 1 }
        })
    }

    decrement = () => {
        this.setState(p => {
            return { count: p.count - 1 }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.largeText}>Count: {this.state.count}</Text>
                <TouchableOpacity onPress={this.increment} style={styles.largeButton}>
                    <Text style={{ color: "black", fontSize: 22 }}>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.decrement} style={styles.largeButton}>
                    <Text style={{ color: "black", fontSize: 22 }}>Decrement</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#ececec',
        alignItems: 'center',
        justifyContent: 'center',
    },
    largeText: {
        fontSize: 24,
        marginBottom: 10
    },
    largeButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        width: 150,
        height: 60,
        padding: 10,
        margin: 10,
        borderWidth: 0,
        borderColor: "grey",
        borderStyle: "solid",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    }
});