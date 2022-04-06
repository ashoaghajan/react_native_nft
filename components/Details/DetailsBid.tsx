import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
import EthPrice from '../NFT/EthPrice';

interface DetailsBidProps {
    bid: BidItem
}
 
const DetailsBid: React.FC<DetailsBidProps> = ({ bid }) => {
    return ( 
        <View style={styles.container}>
            <Image source={bid.image} resizeMode='contain' style={styles.image}/>
            <View>
                <Text style={styles.text1}>Bid placed by {bid.name}</Text>
                <Text style={styles.text2}>{bid.date}</Text>
            </View>
            <EthPrice price={bid.price}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2
    },
    image: {
      width: 48,
      height: 48
    },
    text1: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.small,
        color: COLORS.primary
    },
    text2: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small - 2,
        color: COLORS.secondary,
        marginTop: 3
    }
  });
 
export default DetailsBid;