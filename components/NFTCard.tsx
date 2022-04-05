import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { assets, COLORS, SHADOWS, SIZES } from '../constants';
import { CircleButton, RectButton } from './Button';
import EthPrice from './NFT/EthPrice';
import { NFTTitle } from './NFT/NFTTitle';
import { SubInfo } from './NFT/SubInfo';

interface NFTCardProps {
    data: NTFCardData
}
 
const NFTCard: React.FC<NFTCardProps> = ({ data }) => {

    const navigation: any = useNavigation();

    return ( 
        <View style={styles.container}>
            <View style={{ width: '100%', height: 250 }}>
                <Image source={data.image} resizeMode='cover' style={styles.image} />
                <CircleButton imgUrl={assets.heart} right={10} top={10} handlePress={() => {}}/>
            </View>
            <SubInfo />
            <View style={styles.NFTTitle}>
                <NFTTitle title={data.name} subTitle={data.creator} size={SIZES.large} subTitleSize={SIZES.small}/>
                <View style={styles.ethPrice}>
                    <EthPrice price={data.price}/>
                    <RectButton minWidth={120} fontSize={SIZES.font} handlePress={() => navigation.navigate("Details", { data })}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark
    },
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: SIZES.font,
        borderTopRightRadius: SIZES.font,
    },
    NFTTitle: {
        width: '100%',
        padding: SIZES.font
    },
    ethPrice: {
        marginTop: SIZES.font,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
 
export default NFTCard;