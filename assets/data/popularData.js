const popularData = [
  {
    id: 1,
    image: require('../images/pizza1.png'),
    title: 'Primavera Pizza',
    weight: '540 gr',
    rating: '5.0',
    sizeName: 'Medium',
    sizeNumber: 14,
    crust: 'Thin Crust',
    deliveryTime: 30,
    ingredients: [
      {
        id: 1,
        name: 'Ham',
        image: require('../images/ham.png'),
      },
      {
        id: 2,
        name: 'Tomato',
        image: require('../images/tomato.png'),
      },
      {
        id: 3,
        name: 'Cheese',
        image: require('../images/cheese.png'),
      },
      {
        id: 4,
        name: 'Garlic',
        image: require('../images/garlic.png'),
      },
    ],
    price: '$5.99',
  },
  {
    id: 2,
    image: require('../images/pizza2.png'),
    title: 'Vegitarian Pizza',
    weight: '450 gr',
    rating: '4.0',
    sizeName: 'Medium',
    sizeNumber: 14,
    crust: 'Thin Crust',
    deliveryTime: 30,
    ingredients: [
      {
        id: 1,
        name: 'Cheese',
        image: require('../images/cheese.png'),
      },
      {
        id: 2,
        name: 'Garlic',
        image: require('../images/garlic.png'),
      },
    ],
    price: '$5.99',
  },
  {
    id: 3,
    image: require('../images/pizza1.png'),
    title: 'Pepperoni Pizza',
    weight: '700 gr',
    rating: '5.0',
    sizeName: 'Medium',
    sizeNumber: 14,
    crust: 'Thin Crust',
    deliveryTime: 30,
    ingredients: [
      {
        id: 1,
        name: 'Cheese',
        image: require('../images/cheese.png'),
      },
      {
        id: 2,
        name: 'Tomato',
        image: require('../images/tomato.png'),
      },
    ],
    price: '$5.99',
  },
];

export default popularData;
