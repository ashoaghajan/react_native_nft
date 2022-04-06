import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
import EthPrice from '../NFT/EthPrice';
import { NFTTitle } from '../NFT/NFTTitle';

interface DetailsDescProps {
    data: NTFCardData
}
 
const DetailsDesc: React.FC<DetailsDescProps> = ({ data }) => {

    const [text, setText] = useState(data.description.slice(0,100));
    const [readMore, setReadMore] = useState(false);

    const handleReadMore = () => {
        if(readMore){
            setText(data.description.slice(0,100));
            setReadMore(false);
        }
        else{
            setText(data.description);
            setReadMore(true);
        }
    }

    return ( 
        <>
            <View style={styles.container1}>
                <NFTTitle title={data.name} subTitle={data.creator} size={SIZES.extraLarge} subTitleSize={SIZES.font}/>
                <EthPrice price={data.price}/>
            </View>
            <View style={styles.container2}>
                <Text style={styles.text1}>Description</Text>
                <View style={styles.view}>
                    <Text style={styles.text2}>
                        {text} {!readMore && '...'}
                        <Text style={styles.text3} onPress={handleReadMore}>
                            {readMore ? ' Show Less' : ' Read More'}
                        </Text>
                    </Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container1: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    container2: {
        marginVertical: SIZES.extraLarge * 1.5,
    },
    text1: {
        fontSize: SIZES.font,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary
    },
    view: {
        marginTop: SIZES.base,
    },
    text2: {
        fontSize: SIZES.small,
        fontFamily: FONTS.regular,
        color: COLORS.secondary,
        lineHeight: SIZES.large
    },
    text3: {
        fontSize: SIZES.small,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary,
    },
});
 
export default DetailsDesc;