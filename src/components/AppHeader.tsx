import {View, Text, StyleSheet, StatusBar, TextInput} from 'react-native';
import {Icons, Routes} from '../common';
import {useNavigation} from '@react-navigation/native';

function AppHeader(): JSX.Element {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar backgroundColor={'#048904'} />
      <View style={styles.container}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>
          Freyja
        </Text>

        {/* Search Bar */}
        <View style={styles.searchBox}>
          <Icons.AntDesign
            name="search1"
            size={20}
            color="black"
            style={{marginRight: 10}}
          />
          <TextInput />
        </View>

        {/* Icon Box */}

        <View style={styles.iconbox}>
          <Icons.AntDesign
            onPress={() => navigation.navigate(Routes.favouriteScreen)}
            name="hearto"
            size={25}
            color="#fff"
            style={{marginRight: 10}}
          />
          <Icons.AntDesign
            name="shoppingcart"
            size={25}
            color="#fff"
            style={{marginRight: 10}}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#048904',
    display: 'flex',
    height: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  iconbox: {
    display: 'flex',
    flexDirection: 'row',
  },
  searchBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    width: 210,
    paddingHorizontal: 5,
    height: 35,
  },
});

export default AppHeader;
