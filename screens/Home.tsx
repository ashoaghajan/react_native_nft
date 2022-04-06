import React, { useState } from 'react';
import { View, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import FocustedStatusBar from '../components/FocusedStatusBar';
import HomeHeader from '../components/HomeHeader';
import NFTCard from '../components/NFTCard';
import { COLORS, NFTData } from '../constants';

interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = () => {

    const [nfdData, setNFTData] = useState<NTFCardData[]>(NFTData);

    const handleSearch = (value: string) => {
        if(value.length){
            const filteredData = NFTData.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
            filteredData.length && setNFTData(filteredData);
        }
        else setNFTData(NFTData);
    }

    return ( 
        <SafeAreaView style={styles.container}>
            <FocustedStatusBar background={COLORS.primary}/>
            <View style={{ flex: 1 }}>
                <View style={styles.flatList}>
                    <FlatList 
                        data={nfdData} 
                        renderItem={({ item }) => <NFTCard data={item}/>}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader handleSearch={handleSearch}/>}
                    />
                </View>
                <View style={styles.main}>
                    <View style={styles.view1} />
                    <View style={styles.view2} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1
    },
    flatList: {
        zIndex: 0
    },
    main: { 
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0, 
        left: 0,
        zIndex: -1,
    },
    view1:{ 
        height: 300, 
        backgroundColor: COLORS.primary 
    },
    view2: { 
        flex: 1, 
        backgroundColor: COLORS.white 
    }
});
 
export default Home;