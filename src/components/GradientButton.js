import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from "react-native-size-matters";

export default class GradientButton extends Component {
    render() {
        return (
            <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#C438F0', '#7195C9', '#6EEAAE']}
                style={!this.props.enabled ? {...styles.btnEnabled, ...styles.btnDisabled} : styles.btnEnabled}>
                <TouchableOpacity onPress={this.props.onPress} disabled={!this.props.enabled}>
                    <Text style={styles.btnText}>{this.props.title}</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    gradient: {
        height: 44,
        width: 300,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    btnEnabled: {
        marginTop: moderateScale(18),
        justifyContent: 'center',
        width: '100%',
        borderRadius: moderateScale(8),
        paddingVertical: moderateScale(3),
    },
    btnDisabled: {
        opacity: 0.5,
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: moderateScale(15),
        paddingVertical: moderateScale(10),
        textAlign: 'center',
        color: '#FFFFFF',
    },
});
