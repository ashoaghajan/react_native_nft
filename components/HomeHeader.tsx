import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { assets, COLORS, FONTS, SIZES } from '../constants';

interface HomeHeaderProps {
    handleSearch: (value: string) => void
}
 
const HomeHeader: React.FC<HomeHeaderProps> = ({ handleSearch }) => {
    return ( 
        <View style={styles.container}>
            <View style={styles.imageView1}>
                <Image source={assets.logo} resizeMode='contain' style={styles.image1}/>
                <View style={styles.innerView}>
                    <Image source={assets.person01} resizeMode='contain' style={styles.personImg}/>
                    <Image source={assets.badge} resizeMode='contain' style={styles.badgeImg}/>
                </View>
            </View>
            <View style={styles.textView}>
                <Text style={styles.text1}>Hello, Victoria👋</Text>
                <Text style={styles.text2}>Let's find a masterpiece</Text>
            </View>
            <View style={styles.imageView2}>
                <View style={styles.imageView3}>
                    <Image source={assets.search} resizeMode='contain' style={styles.image2}/>
                    <TextInput placeholder='Search NFTs' style={styles.textInput} 
                        onChangeText={handleSearch}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: COLORS.primary,
        padding: SIZES.font
    },
    imageView1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image1: {
        width: 90,
        height: 25
    },
    innerView: {
        width: 45,
        height: 45,
    },
    personImg: {
        width: '100%',
        height: '100%',
    },
    badgeImg: {
        position: 'absolute',
        width: 15,
        height: 15,
        bottom: 0,
        right: 0
    },
    textView: {
        marginVertical: SIZES.font
    },
    text1: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.white
    },
    text2: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.large,
        color: COLORS.white,
        marginTop: SIZES.base / 2
    },
    imageView2: {
        marginTop: SIZES.font
    },
    imageView3: {
        width: '100%',
        borderRadius: SIZES.font,
        backgroundColor: COLORS.gray,
        flexDirection: 'row',
        alignContent: 'center',
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.small - 2
    },
    image2: {
        width: 20,
        height: 20,
        marginRight: SIZES.base
    },
    textInput: {
        flex: 1
    }
});
 
export default HomeHeader;