import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SIZES } from '../../constants';
import EndDate from './EndDate';
import { People } from './People';


export const SubInfo: React.FC = () => {
    return ( 
        <View style={styles.container}> 
            <People />
            <EndDate />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
 
