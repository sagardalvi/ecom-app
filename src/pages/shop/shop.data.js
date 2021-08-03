const SHOP_DATA = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://i.ibb.co/1snJ0yz/brown-brim.png',
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://i.ibb.co/Rj9W6kk/blue-beanie.png',
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://i.ibb.co/p2gv57P/brown-cowboy.png',
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://i.ibb.co/GPZbbTy/grey-brim.png',
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://i.ibb.co/JqCfXnV/green-beanie.png',
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/YR7wDfL/palm-tree-cap.png',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/yXvNXrn/red-beanie.png',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/Q6dTC9C/wolf-cap.png',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/Bw9sS4F/blue-snapback.png',
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 1,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/sttdJq9/adidas-nmd.png',
        price: 220
      },
      {
        id: 2,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/d2hZCpz/yeezy.png',
        price: 280
      },
      {
        id: 3,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/BZHVcLh/black-converse.png',
        price: 110
      },
      {
        id: 4,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/wQTFdwt/white-nike-high-tops.png',
        price: 160
      },
      {
        id: 5,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/WvLFz4N/nikes-red.png',
        price: 160
      },
      {
        id: 6,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/mDr533W/nike-brown.png',
        price: 160
      },
      {
        id: 7,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/WK8Hnzm/nike-funky.png',
        price: 190
      },
      {
        id: 8,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/c82gLRM/timberlands.png',
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 1,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/3dzDhc4/black-shearling.png',
        price: 125
      },
      {
        id: 2,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/t8rg1zL/blue-jean-jacket.png',
        price: 90
      },
      {
        id: 3,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/4K9WtMz/grey-jean-jacket.png',
        price: 90
      },
      {
        id: 4,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/bH4YMHc/brown-shearling.png',
        price: 165
      },
      {
        id: 5,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/qCkCRR7/brown-trench.png',
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 1,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/4Ws7GYx/blue-tank.png',
        price: 25
      },
      {
        id: 2,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/JQLDbLY/floral-blouse.png',
        price: 20
      },
      {
        id: 3,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/6v9tbJK/floral-skirt.png',
        price: 80
      },
      {
        id: 4,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/ctHnWK3/red-polka-dot-dress.png',
        price: 80
      },
      {
        id: 5,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/mX5bS8h/striped-sweater.png',
        price: 45
      },
      {
        id: 6,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/C1MwrDz/yellow-track-suit.png',
        price: 135
      },
      {
        id: 7,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/zFF8BNB/white-vest.png',
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 1,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/rfRtscm/camo-vest.png',
        price: 325
      },
      {
        id: 2,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/hgYYpMN/floral-shirt.png',
        price: 20
      },
      {
        id: 3,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/0VpPHy7/long-sleeve.png',
        price: 25
      },
      {
        id: 4,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/bgqV6ws/pink-shirt.png',
        price: 25
      },
      {
        id: 5,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/T4C168L/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 6,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/Y8Nhcjs/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
]

export default SHOP_DATA;