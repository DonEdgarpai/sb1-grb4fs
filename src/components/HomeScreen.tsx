import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

type HomeScreenProps = {
    navigation: FrameNavigationProp<any, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl mb-4 font-bold text-center">
                Bienvenido a la App NFC
            </label>
            <button
                style={styles.button}
                onTap={() => navigation.navigate("NFCRead")}
            >
                Leer Tarjeta NFC
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
    button: {
        fontSize: 18,
        color: "#ffffff",
        backgroundColor: "#2e6ddf",
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
});