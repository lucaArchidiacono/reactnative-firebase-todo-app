import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CheckBox, FormInput, FormLabel, FormValidationMessage, Icon, SocialIcon} from "react-native-elements";

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: true,
            formValue: {
                title: "",
                description: "",
                checkMark: false,
            },
            missingArguments: false
        };
        CheckForm = CheckForm.bind(this);
        SaveForm = SaveForm.bind(this);
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
        <FormInput editable={self.state.editable} placeholder="Type here for the title" onChangeText={(text) => CheckForm(text)} shake={self.state.missingArguments}/>
        {self.state.missingArguments ? <ErrorForm/> : null}
        <CheckBox
            title="Task already Done?"
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={self.state.formValue.checkMark}/>
        <SaveTodo/>
    </View>
);

const SaveTodo = () => (
    <Icon underlayColor="#F5FCFF" containerStyle={styles.saveButtonContainer} iconStyle={styles.saveButton} name="save" type="MaterialIcons" color="white"/>
);

const ErrorForm = () => (
    <FormValidationMessage>{'This field is required'}</FormValidationMessage>
);

function SaveForm(){
    this.setState({
        missingArguments: true
    });
}

function CheckForm(text) {
    if(text === ""){
        console.log("shake");
        this.setState({
            missingArguments: true
        })
    }else{
        console.log("don't shake");
        this.setState({
            missingArguments: false
        })
    }
}

function CloseForm(){

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    containerForm: {
        flex: 2,
        flexDirection: "column",
        justifyContent: "center"
    },
    saveButton: {
        textAlign: 'center',
    },
    saveButtonContainer: {
        height: 50,
        backgroundColor: "#68a0cf",
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#F5FCFF",
    }
});