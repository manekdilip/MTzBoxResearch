import React, {Component} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import VerificationInput from "../Components/Verifications/VerificationInput"

const CELL_COUNT = 6;

export default class VerificationEx extends Component {
    constructor(props) {
        super(props);
        this.state = {
           text: ""
        };
    }

    textChangeMethod(text) {
        console.log("text---->" + text)
    }

    render() {
        return (
            <SafeAreaView style={styles.root}>
                <VerificationInput onTextChange={(text) => {
                     this.textChangeMethod(text)
                }} />
            </SafeAreaView>
        );
    }
};


const styles = StyleSheet.create({
    root: { padding: 20, minHeight: 300 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
});
