import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../../constants";


interface NFTTitleProps {
    title: string,
    subTitle: string,
    size: number,
    subTitleSize: number
}
 
export const NFTTitle: React.FC<NFTTitleProps> = ({ title, subTitle, size, subTitleSize }) => {
    return ( 
        <View>
            <Text style={[styles.text1, { fontSize: size }]}>{title}</Text>
            <Text style={[styles.text2, { fontSize: subTitleSize }]}>{subTitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text1: { 
        fontFamily: FONTS.semiBold,
        color: COLORS.primary
    },
    text2: { 
        fontFamily: FONTS.regular,
        color: COLORS.primary
    }
});

