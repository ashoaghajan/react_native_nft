import React from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants';

interface ButtonProps {
    imgUrl: any,
    right: number,
    top: number,
    handlePress: any
}
 
export const CircleButton: React.FC<ButtonProps> = ({ imgUrl, handlePress, ...props }) => {
    return ( 
        <TouchableOpacity style={[styles.container1, props]} onPress={handlePress}>
            <Image source={imgUrl} resizeMode='contain' style={styles.image1} />
        </TouchableOpacity>
    );
}


export const RectButton = ({ handlePress, minWidth, fontSize }: any) => {
    return ( 
        <TouchableOpacity style={[styles.container2, { minWidth }]} onPress={handlePress}>
            <Text style={[styles.text, { fontSize }]}>Place a bid</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container1: {
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      position: 'absolute',
      borderRadius: SIZES.extraLarge,
      alignItems: 'center',
      justifyContent: 'center',
      ...SHADOWS.light
    },
    image1: {
        width: 24,
        height: 24
    },
    container2: {
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        padding: SIZES.small
    },
    text:{
        fontFamily: FONTS.semiBold,
        color: COLORS.white,
        textAlign: 'center'
    }
  });
 
