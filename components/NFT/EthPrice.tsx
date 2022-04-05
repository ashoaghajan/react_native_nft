import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { assets, COLORS, FONTS, SIZES } from "../../constants";


interface EthPriceProps {
    price: number
}
 
const EthPrice: React.FC<EthPriceProps> = ({ price }) => {
    return ( 
        <View style={styles.container}>
            <Image source={assets.eth} resizeMode='contain' style={styles.image} />
            <Text style={styles.text}>{price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 20,
        height: 20,
        marginRight: 2
    },
    text: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.font,
        color: COLORS.primary
    }
});
 
export default EthPrice;