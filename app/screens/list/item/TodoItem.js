import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CheckBox, FormInput, FormLabel} from "react-native-elements";

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: true,
            stateOfCheckBox: false,
            missingArguments: false
        };
    }

    render() {
        return (
            ViewContainer(this)
        );
    }
}


const ViewContainer = (self) => (
    <>
        <View style={styles.container}>
            <TodoForm self={self}/>
        </View>
    </>
);

const TodoForm = ({self}) => (
    <View style={styles.containerForm}>
        <FormLabel>{'Todo Title'}</FormLabel>
        <FormInput editable={self.state.editable} placeholder="Type here for the title" onChangeText={(text) => CheckForm({text}, self.state)} shake={self.state.missingArguments}/>
        <CheckBox
            title="Already Done?"
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={self.stateOfCheckBox}/>
    </View>
);

function CheckForm(text, selfState) {
    if(text === "Hello"){
        console.log("shake");
        console.log(text);
        console.log(selfState.missingArguments);
    }else{
        console.log("don't shake");
        console.log(text);
        console.log(selfState.missingArguments);
    }
}
/*
const ErrorForm = (self) => (
    <View>
        <Input
            placeholder="Todo Title"
            errorStyle={{ color: 'red' }}
            shake={self.missingArguments}
            errorMessage='Please provide a title'/>
        <Input
            placeholder="Todo Description"
            errorStyle={{ color: 'red' }}
            shake={self.missingArguments}
            errorMessage='Please provide some additional info about your todo'/>
    </View>
);*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    containerForm: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    }
});