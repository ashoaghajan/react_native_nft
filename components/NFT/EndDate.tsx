import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, SHADOWS, SIZES } from '../../constants';


interface EndDateProps {
    
}
 
export const EndDate: React.FC<EndDateProps> = () => {
    return ( 
        <View style={styles.endDate}>
            <Text style={styles.endDateText1}>Ending in</Text>
            <Text style={styles.endDateText2}>12H 30m</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    endDate: {
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignContent: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%'
    },
    endDateText1: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.primary
    },
    endDateText2: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.primary
    }
});
 
export default EndDate;