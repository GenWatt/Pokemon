import React from 'react'
import { StyleSheet, Image, Platform } from 'react-native';
import { ThemedText } from '../ThemedText'
import { ThemedView } from '../ThemedView'
import Logo from '../UI/Logo'
import Ionicons from '@expo/vector-icons/Ionicons';

const AppBar = () => {
    return (
        <ThemedView style={styles.container}>
            <Logo />
            <Ionicons name="notifications" size={24} color="white" />
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 8,
        paddingLeft: 8,
        paddingTop: 8,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',

    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});


export default AppBar