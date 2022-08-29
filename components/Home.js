import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors';

function HomeScreen({navigation}) {
  const renderCategoryItem = ({item}) => {
    return (
      <View
        style={[
          styles.categoryItemContainer,
          {backgroundColor: item.selected ? colors.primary : '#fff'},
        ]}>
        <Image style={styles.categoryItemImage} source={item.image} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categoryItemSelectContainer,
            {backgroundColor: item.selected ? '#FFF' : colors.secondary},
          ]}>
          <Feather
            style={styles.categoryItemSelectIcon}
            name="chevron-right"
            size={8}
            color={item.selected ? '#000' : '#FFF'}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView>
          <View style={styles.headerContainer}>
            <Image
              source={require('../assets/images/profile.png')}
              style={styles.profilePicture}></Image>
            <Feather name="menu" size={24} color={colors.textDark}></Feather>
          </View>
        </SafeAreaView>
        <View style={styles.titleContainer}>
          <Text style={styles.subTitle}>Food</Text>
          <Text style={styles.title}>Delivery</Text>
        </View>
        <View style={styles.searchContainer}>
          <Feather name="search" size={24} color={colors.textDark} />
          <TextInput style={styles.searchText} placeholder="Search..." />
        </View>
        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesText}>Categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={styles.popularContainer}>
          <Text style={styles.popularText}>Popular</Text>
          {popularData.map(item => (
            <TouchableOpacity
              key={item.id.toString()}
              onPress={() =>
                navigation.navigate('Details', {
                  item: item,
                })
              }>
              <View style={styles.popularCardContainer}>
                <View>
                  <View>
                    <View style={styles.popularTopContainer}>
                      <MaterialCommunityIcons
                        size={12}
                        name="crown"
                        color={colors.primary}
                      />
                      <Text style={styles.popularTopText}>Top of the week</Text>
                    </View>
                    <View style={styles.popularMiddleContainer}>
                      <Text style={styles.popularTitle}>{item.title}</Text>
                      <Text style={styles.popularWeight}>
                        Weight {item.weight}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.popularCardBottom}>
                    <View style={styles.addPizzaButton}>
                      <Feather name="plus" size={10} color={colors.textDark} />
                    </View>
                    <View style={styles.ratingsContainer}>
                      <MaterialCommunityIcons
                        name="star"
                        size={10}
                        color={colors.textDark}
                      />
                      <Text style={styles.rating}>{item.rating}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.popularImageContainer}>
                  <Image source={item.image} style={styles.popularImage} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  profilePicture: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  titleContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  subTitle: {
    fontSize: 16,
    color: colors.textDark,
    marginBottom: 5,
    fontFamily: 'Montserrat-Regular',
  },
  title: {
    fontSize: 32,
    color: colors.textDark,
    fontFamily: 'Montserrat-Bold',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingTop: 36,
  },
  searchText: {
    flex: 1,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.textLight,
    color: colors.textDark,
    padding: 2.5,
    placeholder: colors.textLight,
  },
  categoriesContainer: {
    paddingTop: 30,
    marginLeft: 20,
  },
  categoriesText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: colors.textDark,
  },
  categoryItemContainer: {
    paddingTop: 15,
    paddingBottom: 20,
    backgroundColor: colors.primary,
    marginRight: 20,
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 23,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    marginTop: 24,
    width: 60,
    height: 60,
  },
  categoryItemTitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 10,
  },
  categoryItemSelectContainer: {
    marginTop: 20,
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    marginBottom: 20,
  },
  popularContainer: {
    marginTop: 20,
    marginLeft: 20,
  },
  popularText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: colors.textDark,
  },
  popularCardContainer: {
    borderRadius: 25,
    backgroundColor: '#fff',
    marginTop: 20,
    marginRight: 20,
    flexDirection: 'row',
    marginBottom: 0,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopContainer: {
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textDark,
  },
  popularMiddleContainer: {
    marginBottom: 10,
  },
  popularTitle: {
    marginLeft: 20,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textDark,
  },
  popularWeight: {
    marginLeft: 20,
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 22,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rating: {
    marginLeft: 5,
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.textDark,
  },
  popularImageContainer: {
    marginLeft: 30,
    paddingVertical: 18,
  },
  popularImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
