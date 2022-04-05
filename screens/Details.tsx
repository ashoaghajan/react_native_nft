import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton } from '../components/Button';
import FocustedStatusBar from '../components/FocusedStatusBar';
import { SHADOWS, SIZES } from '../constants';

interface DetailsProps {
    route: any, 
    navigation: any
}
 
const Details: React.FC<DetailsProps> = ({ route, navigation }) => {

    const { data } = route.params;
    
    return ( 
        <SafeAreaView style={styles.container}>
            <FocustedStatusBar barStyle='dark-content' backgroundColor='transparent' transLucent />
            <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
 
export default Details;