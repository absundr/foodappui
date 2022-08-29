import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors';

const DetailsScreen = ({route, navigation}) => {
  const {item} = route.params;
  const renderItem = ({item}) => (
    <View style={styles.ingredientsImageWrapper}>
      <Image source={item.image} style={styles.ingredientsImage} />
    </View>
  );
  return (
    <View style={styles.container}>
      {/* header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.backButtonWrapper}>
              <Feather name="chevron-left" size={8} color="#000" />
            </View>
          </TouchableOpacity>
          <View style={styles.favouriteButtonWrapper}>
            <MaterialCommunityIcons name="star" size={12} color="#FFF" />
          </View>
        </View>
      </SafeAreaView>

      {/* Title */}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleHeading}>{item.title}</Text>
        <Text style={styles.titlePrice}>{item.price}</Text>
      </View>

      {/* Description */}
      <View style={styles.descriptionWrapper}>
        <View style={styles.descriptionItemWrapper}>
          <View style={styles.descriptionItem}>
            <Text style={styles.descriptionItemTitle}>Size</Text>
            <Text style={styles.descriptionItemContent}>
              {item.sizeName} {item.sizeNumber}"
            </Text>
          </View>
          <View style={styles.descriptionItem}>
            <Text style={styles.descriptionItemTitle}>Crust</Text>
            <Text style={styles.descriptionItemContent}>{item.crust}</Text>
          </View>
          <View style={styles.descriptionItem}>
            <Text style={styles.descriptionItemTitle}>Delivery In</Text>
            <Text style={styles.descriptionItemContent}>
              {item.deliveryTime} Mins
            </Text>
          </View>
        </View>
        <View style={styles.descriptionImageWrapper}>
          <Image source={item.image} style={styles.descriptionImage} />
        </View>
      </View>

      {/* Ingredients */}
      <View style={styles.ingredientsWrapper}>
        <Text style={styles.ingredientsText}>Ingredients</Text>
        <View style={styles.ingredientsCardContainer}>
          <FlatList
            data={item.ingredients}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      {/* Order Button */}
      <TouchableOpacity>
        <View style={styles.orderButtonWrapper}>
          <Text style={styles.orderButtonText}>Place an order</Text>
          <Feather name="chevron-right" size={18} color={colors.textDark} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backButtonWrapper: {
    borderWidth: 2,
    borderColor: colors.textLight,
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 16,
  },
  favouriteButtonWrapper: {
    padding: 16,
    border: 'none',
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  titleWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  titleHeading: {
    fontSize: 36,
    fontFamily: 'Montserrat-Bold',
    color: colors.textDark,
    width: '75%',
  },
  titlePrice: {
    paddingTop: 20,
    color: colors.price,
    fontSize: 32,
    fontFamily: 'Montserrat-SemiBold',
  },
  descriptionWrapper: {
    paddingTop: 30,
    flexDirection: 'row',
    overflow: 'hidden',
    paddingHorizontal: 20,
  },
  descriptionItem: {
    paddingBottom: 20,
  },
  descriptionItemTitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: colors.textLight,
  },
  descriptionItemContent: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.textDark,
    paddingTop: 5,
  },
  descriptionImageWrapper: {
    marginLeft: 60,
  },
  descriptionImage: {
    width: 296,
    height: 176,
  },
  ingredientsWrapper: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  ingredientsText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: colors.textDark,
  },
  ingredientsImageWrapper: {
    marginTop: 20,
    marginRight: 15,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientsImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  orderButtonWrapper: {
    marginHorizontal: 20,
    marginTop: 58,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 22,
    flexDirection: 'row',
  },
  orderButtonText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    color: colors.textDark,
    paddingRight: 11,
  },
});

export default DetailsScreen;
