import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from "react-native-elements";

export default class TodoListsView extends React.Component {

    render() {
        return(
            TodoLists(this)
        );
    }
}

const TodoLists = (self) => (
    <TouchableOpacity onPress={() => self.props.navigation.navigate('TodoListDetails', {id: self.props.id, todos: self.props.todos})}>
        <View style={styles.rowContainer}>
            <Image source={{uri: self.props.thumbnail}}
                   style={styles.thumbnail}
                   resizeMode="contain" />
            <View style={styles.rowText}>
                <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
                    {self.props.title}
                </Text>
                <Text style={styles.dates} numberOfLines={1} ellipsizeMode ={'tail'}>
                    {self.props.fromDate}
                </Text>
                <Text style={styles.dates} numberOfLines={1} ellipsizeMode ={'tail'}>
                    {self.props.tillDate}
                </Text>
            </View>
            <View style={styles.checkMark}>
                <CheckMarkValue isDone={self.props.checkMark}/>
            </View>
        </View>
    </TouchableOpacity>
);

function CheckMarkValue(props) {
    const isDone = props.checkMark;
    if(isDone === true){
        return <Icon name="check-circle" type="FontAwesome" color="green"/>;
    }else{
        return <Icon name="warning" type="AntDesign" color="red"/>;
    }
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        height: 100,
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 4,
        shadowOffset:{  width: 1,  height: 1,  },
        shadowColor: '#CCC',
        shadowOpacity: 1.0,
        shadowRadius: 1
    },
    title: {
        paddingLeft: 10,
        paddingTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#777'
    },
    dates: {
        paddingLeft: 10,
        marginTop: 5,
        fontSize: 14,
        color: '#777'
    },
    thumbnail: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    rowText: {
        flex: 4,
        flexDirection: 'column',
    },
    checkMark: {
        flex: 1,
        top: "2%"
    }
});