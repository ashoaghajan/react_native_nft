import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { assets, SIZES } from "../../constants";


interface ImageCmpProps {
    imgUrl: any,
    index: number
}

export const ImageCmp: React.FC<ImageCmpProps> = ({ imgUrl, index }) => {
    return ( 
        <Image source={imgUrl} resizeMode='contain' 
            style={[styles.imageCmp, { marginLeft: index === 0 ? 0 : -SIZES.font }]} />
    );
}

export const People: React.FC = () => {
    return ( 
        <View style={styles.people}>
            {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
                <ImageCmp key={index} imgUrl={imgUrl} index={index}/>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    people: {
        flexDirection: 'row'
    },
    imageCmp: {
        width: 48,
        height: 48 
    }
});
 