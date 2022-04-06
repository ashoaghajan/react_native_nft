import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RectButton } from '../components/Button';
import DetailsBid from '../components/Details/DetailsBid';
import DetailsDesc from '../components/Details/DetailsDesc';
import DetailsHeader from '../components/Details/DetailsHeader';
import FocustedStatusBar from '../components/FocusedStatusBar';
import { SubInfo } from '../components/NFT/SubInfo';
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants';

interface DetailsProps {
    route: any, 
    navigation: any
}
 
const Details: React.FC<DetailsProps> = ({ route, navigation }) => {

    const data: NTFCardData = route.params.data;
    
    return ( 
        <SafeAreaView style={styles.container}>
            <FocustedStatusBar barStyle='dark-content' backgroundColor='transparent' transLucent />
            <View style={styles.view1}>
                <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
            </View>
            <FlatList data={data.bids} renderItem={({ item }) => <DetailsBid bid={item}/>} keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}
                ListHeaderComponent={() => (
                    <>
                        <DetailsHeader data={data} navigation={navigation}/>
                        <SubInfo />
                        <View style={styles.view2}>
                            <DetailsDesc data={data}/>
                            {data.bids.length > 0 && (
                                <Text  style={styles.text}>Current Bit</Text>
                            )}
                        </View>
                    </>
                )} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    view1: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
        zIndex: 1,
    },
    contentContainer: {
        paddingBottom: SIZES.extraLarge * 3
    },
    view2: {
        padding: SIZES.font
    },
    text: {
        fontSize: SIZES.font,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary
    }
  });
 
export default Details;