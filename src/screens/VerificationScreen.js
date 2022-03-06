import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, TextInput, View, TouchableOpacity, Alert} from "react-native";
import {moderateScale} from 'react-native-size-matters';
import * as solanaApi from "../services/SolanaAPI";
import GradientButton from "../components/GradientButton";
import Loader from "../components/Loader";

const VerificationScreen = ({ navigation: { goBack }, route }) => {
    const [loading, setLoading] = useState(false);

    const confirmBlockId = () => {
        setLoading(true);

        solanaApi.confirmBlockId(route.params.publicKey).then((transactionId: string) => {
            Alert.alert('Transaction successful', 'You have successfully approved the action. TransactionId: ' + transactionId);
            goBack();
        }).catch((error) => {
            Alert.alert('Transaction failed', '' + error);
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <View style={styles.container}>
            <SafeAreaView/>
            <Loader loading={loading}/>

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
            <GradientButton
                title={"Confirm " + route.params.action}
                enabled={!loading}
                onPress={confirmBlockId}/>
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
});

export default VerificationScreen;
