import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { NfcManager, NfcNdefData } from 'nativescript-nfc';
import { FrameNavigationProp } from "react-nativescript-navigation";
import * as moment from 'moment';

type NFCReadScreenProps = {
    navigation: FrameNavigationProp<any, "NFCRead">,
};

export function NFCReadScreen({ navigation }: NFCReadScreenProps) {
    const [nfcData, setNfcData] = React.useState<string | null>(null);
    const [lastScan, setLastScan] = React.useState<string | null>(null);

    React.useEffect(() => {
        const startNfcScan = async () => {
            try {
                await NfcManager.requestPermission();
                NfcManager.setOnNdefDiscoveredListener((data: NfcNdefData) => {
                    if (data.message) {
                        const ndefMessage = data.message[0].payload;
                        const textDecoder = new TextDecoder('utf-8');
                        const decodedMessage = textDecoder.decode(ndefMessage);
                        setNfcData(decodedMessage);
                        setLastScan(moment().format('YYYY-MM-DD HH:mm:ss'));
                    }
                });
                await NfcManager.startNdefListener();
            } catch (error) {
                console.error('Error al iniciar el escaneo NFC:', error);
            }
        };

        startNfcScan();

        return () => {
            NfcManager.setOnNdefDiscoveredListener(null);
            NfcManager.stopNdefListener();
        };
    }, []);

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-xl mb-4 text-center">
                Acerca una tarjeta NFC al dispositivo
            </label>
            {nfcData && (
                <>
                    <label style={styles.dataLabel}>Datos leídos:</label>
                    <label style={styles.data}>{nfcData}</label>
                </>
            )}
            {lastScan && (
                <>
                    <label style={styles.dataLabel}>Último escaneo:</label>
                    <label style={styles.data}>{lastScan}</label>
                </>
            )}
            <button
                style={styles.button}
                onTap={() => navigation.goBack()}
            >
                Volver
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
    dataLabel: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 20,
    },
    data: {
        fontSize: 16,
        marginTop: 5,
        textAlign: "center",
    },
    button: {
        fontSize: 18,
        color: "#ffffff",
        backgroundColor: "#2e6ddf",
        padding: 10,
        borderRadius: 5,
        marginTop: 30,
    },
});