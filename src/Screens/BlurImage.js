/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, Modal, Text, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import * as globals from '../utills/globals'

export default class BlurImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            showBlurs: false,
            blurBlurType: 'light',
        };
    }

    /**
     *  modal render function
     */
    renderBgModel() {
        return (
            <Modal
                visible={this.state.visible}
                animationType="fade"
                transparent={true}
                onRequestClose={() => console.log('closed')}>
                <View style={styles.modalMainView}>
                    <TouchableWithoutFeedback onPress={() => this.closeModal()}>
                        <View style={{ position: 'absolute', right: -5, top: 0 }}>
                            <Image
                                source={require('../images/closeBtn/close-blue.png')}
                                style={styles.alertCloseBtnStyle}
                                resizeMode="contain"
                            />
                        </View>
                    </TouchableWithoutFeedback>
                    <Image
                        source={require('../images/closeBtn/close-blue.png')}
                        resizeMode="center"
                        style={{ height: 30, width: 80 }}
                    />
                    <Text style={{ fontSize: 20, marginTop: 10 }}>
                        Test modal with blur background
          </Text>
                    <TouchableWithoutFeedback onPress={() => this.closeModal()}>
                        <View style={styles.closebtnView}>
                            <Text style={{ fontSize: 20, textAlign: 'center' }}>close</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </Modal>
        );
    }

    /**
     * blur component, we can change blur behaviour by changing bluramount and blurtype
     */
    renderBlurs() {
        return (
            <View style={styles.container}>
                <View style={styles.blurContainer}>
                    <BlurView
                        blurType={this.state.blurBlurType}
                        blurAmount={1}
                        style={[styles.blurView]}
                    />
                </View>
            </View>
        );
    }

    /**
     * Method used for open modal
     */
    openModal() {
        this.setState({ visible: true, showBlurs: true });
    }

    /**
     * Method used for close modal
     */
    closeModal() {
        this.setState({ visible: false, showBlurs: false });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../images/backgroundImage/background.jpg')}
                    resizeMode="cover"
                    style={styles.img}
                />
                {this.renderBgModel()}
                <View style={{ position: 'absolute', margin: 10 }}>
                    <Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book
          </Text>
                </View>
                <View style={styles.blurToggle}>
                    <TouchableWithoutFeedback onPress={() => this.openModal()}>
                        <View style={styles.containerInner}>
                            <Text style={{ fontSize: 20 }}>Open modal</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                {this.state.showBlurs ? this.renderBlurs() : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: globals.screenHeight * 0.07,
        marginBottom: globals.screenHeight * 0.07,
    },
    containerInner: {
        marginVertical: globals.screenHeight * 0.07,
        paddingHorizontal: 25,
        paddingVertical: 17,
        borderColor: 'gray',
        borderRadius: 10,
        justifyContent: 'flex-end',
        backgroundColor: 'blue',
        alignItems: 'flex-end',
        flex: 1,
    },
    blurContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: 20,
    },
    blurView: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    img: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        height: null,
        width: null,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: 'white',
    },
    blurToggle: {
        position: 'absolute',
        left: globals.screenWidth * 0.3,
        //right: 10,
        alignItems: 'center',
        bottom: 10,
    },

    //modal
    modalMainView: {
        borderColor: 'gray',
        borderWidth: 4,
        width: globals.screenWidth * 0.9,
        backgroundColor: 'white',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        height: globals.screenHeight * 0.2,
        marginTop: globals.screenHeight * 0.3,
        marginHorizontal: 25,
    },
    alertCloseBtnStyle: {
        height: 25, width: 25,
        marginTop: -10,
    },
    closebtnView: {
        marginTop: 5,
        height: 30,
        width: 50,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
});