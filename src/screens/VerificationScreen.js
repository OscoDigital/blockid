import React from 'react';
import {SafeAreaView, Text, StyleSheet, Button, Alert, TextInput, View, TouchableOpacity} from "react-native";
import {moderateScale} from 'react-native-size-matters';
import Config from "react-native-config";

const VerificationScreen = ({ navigation, route }) => {
    console.debug('publicKey: ' + Config.WALLET_PUBLIC_KEY);
    console.debug('privateKey: ' + Config.WALLET_PRIVATE_KEY);
    console.debug('params: ' + JSON.stringify(route.params));

    return (
        <View style={styles.container}>
            <SafeAreaView/>
            <Text style={styles.infoLabel}>Do you really want to connect your wallet for the following website?</Text>
            <View style={{marginTop: 24}}>
                <Text style={styles.inputTextLabel}>Destination address:</Text>
                <TextInput
                    style={styles.inputText}
                    editable={false}
                    multiline={true}
                    value={route.params.publicKey}
                />
                <Text style={styles.inputTextLabel}>Domain:</Text>
                <TextInput
                    style={styles.inputText}
                    editable={false}
                    value={route.params.domain}
                />
                <Text style={styles.inputTextLabel}>Action:</Text>
                <TextInput
                    style={styles.inputText}
                    editable={false}
                    value={route.params.action}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => Alert.alert('Button with adjusted color pressed')}>
                <Text style={styles.buttonLabel}>Confirm {route.params.action}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: moderateScale(20)
    },
    infoLabel: {
        marginBottom: moderateScale(16),
        fontSize: moderateScale(16),
        color: '#777'
    },
    inputTextLabel: {
        marginBottom: moderateScale(8),
        fontSize: moderateScale(14),
        fontWeight: '500',
    },
    inputText: {
        width: '100%',
        borderColor: '#777',
        borderWidth: 1,
        marginBottom: moderateScale(16),
        paddingVertical: moderateScale(15),
        borderRadius: moderateScale(8),
        paddingHorizontal: moderateScale(12),
        paddingTop: moderateScale(15),
    },
    button: {
        display: 'flex',
        height: moderateScale(45),
        borderRadius: moderateScale(8),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateScale(16),

        backgroundColor: '#777',
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowOffset: { height: 8, width: 0 },
        shadowRadius: 8,
    },
    buttonLabel: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: '#FFFFFF',
    },
});

export default VerificationScreen;
