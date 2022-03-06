import React from 'react';
import {RNCamera} from "react-native-camera";
import QRCodeScanner from "react-native-qrcode-scanner";
import {Text, StyleSheet} from "react-native";
import * as QueryString from "query-string";
import {moderateScale} from "react-native-size-matters";
import GradientText from "../components/GradientText";

export default class ScanScreen extends React.Component {
    onSuccess = e => {
        const parsedQRCodeData = QueryString.parseUrl(e.data);

        if (parsedQRCodeData.query.publickey !== undefined && parsedQRCodeData.query.domain !== undefined &&
            parsedQRCodeData.query.action !== undefined) {
            this.props.navigation.navigate('Verification', {
                publicKey: parsedQRCodeData.query.publickey,
                domain: parsedQRCodeData.query.domain,
                action: parsedQRCodeData.query.action
            });
        }
    };

    render() {
        return (
            <QRCodeScanner
                onRead={this.onSuccess}
                flashMode={RNCamera.Constants.FlashMode.off}
                topContent={
                    <Text style={styles.centerText}>
                        Go to{' '}
                        <Text style={styles.textBold}>spl.cards/blockid/</Text> on
                        your computer press one of the button and scan the generated QR code to login.
                    </Text>
                }
                bottomContent={
                    <GradientText
                        colors={['#C438F0', '#7195C9', '#6EEAAE']}
                        style={styles.footerText}>This project was build for the Riptide Hackathon.
                    </GradientText>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: moderateScale(16),
        padding: moderateScale(24),
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    footerText: {
        fontWeight: '600',
        fontSize: moderateScale(12),
        color: '#000'
    }
});
