import React from 'react';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import { assets } from '../../constants';
import { CircleButton } from '../Button';

interface DetailsHeaderProps {
    data: NTFCardData,
    navigation: any
}
 
const DetailsHeader: React.FC<DetailsHeaderProps> = ({ data, navigation }) => {
    return ( 
        <View style={styles.container}>
            <Image source={data.image} resizeMode='cover' style={styles.image}/>
            <CircleButton imgUrl={assets.left} left={15} top={StatusBar.currentHeight && StatusBar.currentHeight + 10} 
                handlePress={() => navigation.goBack()}/>
            <CircleButton imgUrl={assets.heart} right={15} top={StatusBar.currentHeight && StatusBar.currentHeight + 10} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 373
    },
    image: {
        width: '100%',
        height: '100%'
    }
  });
 
export default DetailsHeader;