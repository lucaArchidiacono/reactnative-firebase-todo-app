import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from "react-native-elements";

export default class TodoItemView extends React.Component {
    render() {
        return ViewContainer(this);
    }
}

const ViewContainer = (self) => (
    <View style={styles.rowContainer}>
        <View style={styles.rowText}>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
                {self.props.title}
            </Text>
            <Text style={styles.description} numberOfLines={1} ellipsizeMode ={'tail'}>
                {self.props.description}
            </Text>
        </View>
        <View style={styles.checkMark}>
            <CheckMarkValue isDone={self.props.checkMark}/>
        </View>
    </View>
);


function CheckMarkValue(props) {
    const isDone = props.checkMark;
    if(isDone === true){
        return <Icon name="check-circle" type="FontAwesome" color="green"/>;
    }else{
        return <Icon name="warning" type="Entypo" color="red"/>;
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
    rowText: {
        flex: 4,
        flexDirection: 'column',
    },
    checkMark: {
        flex: 1,
        top: "2%"
    },
    description: {
        paddingLeft: 10,
        marginTop: 5,
        fontSize: 14,
        color: '#777'
    }
});
