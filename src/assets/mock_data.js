const products = [
  {
    Men: [ {
      id: 1,
      product_rating:4.4 ,
      product_name: "T-shirt",
      product_type: "Pure Cotton t-shirt",
      product_price: "1499",
      product_discount: 69
    },
    {
      id: 2,
      product_rating: 3.9,
      product_name: "T-shirt",
      product_type: "Pure Cotton t-shirt",
      product_price: "999",
      product_discount: 39
    },
    {
      id: 3,
      product_rating: 4.1 ,
      product_name: "T-shirt",
      product_type: "Oversized t-shirt",
      product_price: "1119",
      product_discount: 45
    },
    {
      id: 4,
      product_rating: 4.4,
      product_name: "T-shirt",
      product_type: "Pure Cotton t-shirt",
      product_price: "1999",
      product_discount: 68
    },
    {
      id: 5,
      product_rating: 3.9,
      product_name: "Polo T-shirt",
      product_type: "Polo Slim fit t-shirt",
      product_price: "799"
    },
    {
      id: 6,
      product_rating: 4.4,
      product_name: "T-shirt",
      product_type: "Pure Cotton t-shirt",
      product_price: "899",
      product_discount: 54
    },
    {
      id: 7,
      product_rating: 4.1 ,
      product_name: "T-shirt",
      product_type: "Pure Cotton Oversized t-shirt",
      product_price: "1599",
      product_discount: 44
    },
    {
      id: 8,
      product_rating: 3.9,
      product_name: "T-shirt",
      product_type: "Full Sleeve t-shirt",
      product_price: "1099"
    },
    {
      id: 9,
      product_rating: 4.4 ,
      product_name: "Hoddie",
      product_type: "Regular fit",
      product_price: "1699",
      product_discount: 70
    },
    {
      id: 10,
      product_rating: 3.9,
      product_name: "Jacket",
      product_type: "Regular fit",
      product_price: "399"
      
    },
    {
      id: 11,
      product_rating: 4.1,
      product_name: "Jacket",
      product_type: "Regular fit",
      product_price: "949"
    },
    {
      id: 12,
      product_rating: 3.9,
      product_name: "Jacket",
      product_type: "Oversized Jacket",
      product_price: "549"
      
    },
    {
      id: 13,
      product_rating: 4.4,
      product_name: "Jacket",
      product_type: "Denim Jacket",
      product_price: "1099"
    },
    {
      id: 14,
      product_rating: 3.9,
      product_name: "Jacket",
      product_type: "Regular Fit",
      product_price: "1999",
      product_discount: 33
    },
    {
      id: 15,
      product_rating: 4.4,
      product_name: "Hoddie",
      product_type: "Regular fit",
      product_price: "1299",
      product_discount: 67
    },
    {
      id: 16,
      product_rating: 3.9,
      product_name: "Jacket",
      product_type: "Pullover",
      product_price: "1799",
      product_discount: 61
    },
    {
      id: 17,
      product_rating: 4.1,
      product_name: "Jacket",
      product_type: "Regular Fit",
      product_price: "1899",
      product_discount: 32
    },
    {
      id: 18,
      product_rating: 3.9,
      product_name: "Hoddie",
      product_type: "Regular fit",
      product_price: "449"
    },
    {
      id: 19,
      product_rating: 4.4 ,
      product_name: "Hoddie",
      product_type: "Oversized Hoddie",
      product_price: "499"
    },
    {
      id: 20,
      product_rating: 3.9,
      product_name: "Jacket",
      product_type: "Slim fit",
      product_price: "1299",
      product_discount: 34
    },
    {
      id: 21,
      product_rating: 4.4,
      product_name: "Jeans",
      product_type: "Slim fit",
      product_price: "1039"
    },
    {
      id: 22,
      product_rating: 3.9,
      product_name: "Jeans",
      product_type: "Straight fit",
      product_price: "1539",
      product_discount: 56
    },
    {
      id: 23,
      product_rating: 4.1 ,
      product_name: "Jeans",
      product_type: "Straight fit",
      product_price: "1679",
      product_discount: 45
    },
    {
      id: 24,
      product_rating: 4.4 ,
      product_name: "Shorts",
      product_type: "Slim fit",
      product_price: "1899",
      product_discount: 36
    },
    {
      id: 25,
      product_rating: 3.9,
      product_name: "Shorts",
      product_type: "Regular fit",
      product_price: "1799",
      product_discount: 54
    } ],
    Women: [
      {
        id: 1,
        product_rating: 3.9 ,
        product_name: "Top",
        product_type: "Pure Cotton",
        product_price: "1699",
        product_discount: 53
      },
      {
        id: 2,
        product_rating: 4.4,
        product_name: "Jacket",
        product_type: "Oversized jacket",
        product_price: "1899",
        product_discount: 43
      },
      {
        id: 3,
        product_rating: 3.9,
        product_name: "Top",
        product_type: "Vested Top",
        product_price: "899"
      },
      {
        id: 4,
        product_rating: 4.1 ,
        product_name: "Top",
        product_type: "Printed Top",
        product_price: "1649",
        product_discount: 62
      },
      {
        id: 5,
        product_rating: 3.9,
        product_name: "Top",
        product_type: "Puff Sleeve",
        product_price: "1159",
        product_discount: 47
      },
      {
        id: 6,
        product_rating: 4.4 ,
        product_name: "Top",
        product_type: "Puff Sleeve",
        product_price: "849",
        product_discount: 38
      },
      {
        id: 7,
        product_rating: 3.9,
        product_name: "Top",
        product_type: "Full Sleeve",
        product_price: "599"
      },
      {
        id: 8,
        product_rating: 4.1 ,
        product_name: "Top",
        product_type: "Printed Top",
        product_price: "1249",
        product_discount: 48
      },
      {
        id: 9,
        product_rating: 3.9,
        product_name: "Top",
        product_type: "Printed Top",
        product_price: "499"
      },
      {
        id: 10, 
        product_rating: 4.4 ,
        product_name: "Top",
        product_type: "Puff Sleeve",
        product_price: "999",
        product_discount: 35
      },
      {
        id: 11,
        product_rating: 4.1 ,
        product_name: "Top",
        product_type: "Vest Ribbed Top",
        product_price: "499"
      },
      {
        id: 12,
        product_rating: 3.9,
        product_name: "Top",
        product_type: "Full Sleeve",
        product_price: "399"
      },
      {
        id: 13,
        product_rating: 4.4 ,
        product_name: "Top",
        product_type: "Vested Ribbed Top",
        product_price: "899"
      },
      {
        id: 14,
        product_rating: 4.1,
        product_name: "Top",
        product_type: "Puff Sleeve",
        product_price: "459"
      },
      {
        id: 15,
        product_rating: 3.9,
        product_name: "Top",
        product_type: "Full Sleeve",
        product_price: "1699",
        product_discount: 43
      },
      {
        id: 16,
        product_rating: 3.9,
        product_name: "Jeans",
        product_type: "Slim Fit",
        product_price: "999",
        product_discount: 30
      },
      {
        id: 17,
        product_rating: 4.4,
        product_name: "Jeans",
        product_type: "Relaxed Fit",
        product_price: "659"
      },
      {
        id: 18,
        product_rating: 4.1 ,
        product_name: "Trousers",
        product_type: "Straight Fit",
        product_price: "659"
      },
      {
        id: 19,
        product_rating: 3.9,
        product_name: "Trousers",
        product_type: "Relaxed Fit",
        product_price: "1269"
      },
      {
        id: 20,
        product_rating: 3.9,
        product_name: "Shorts",
        product_type: "Denim short",
        product_price: "699"
      },
      {
        id: 21,
        product_rating: 4.1 ,
        product_name: "Shorts",
        product_type: "Knee length",
        product_price: "1299",
        product_discount: 42
      },
      {
        id: 22,
        product_rating: 3.9,
        product_name: "Shorts",
        product_type: "Minil length",
        product_price: "1899",
        product_discount: 52
      },
      {
        id: 23,
        product_rating: 3.9,
        product_name: "Shorts",
        product_type: "Mini Length",
        product_price: "1299",
        product_discount: 51
      },
      {
        id: 24,
        product_rating: 4.4,
        product_name: "Shkirt",
        product_type: "Full Length",
        product_price: "499"
      },
      {
        id: 25,
        product_rating: 4.1 ,
        product_name: "Skirt",
        product_type: "Full Length",
        product_price: "1149"
      } ],
    Kids: [ {
      id: 1,
      product_rating: 3.9,
      product_name: "Hoddie",
      product_type: "Slim fit",
      product_price: "969"
    },
    {
      id: 2,
      product_rating: 3.9,
      product_name: "Hoddie",
      product_type: "Slim fit",
      product_price: "1799",
      product_discount: 60
    },
    {
      id: 3,
      product_rating: 4.4,
      product_name: "Hoddie",
      product_type: "Slim fit",
      product_price: "1299"
    },
    {
      id: 4,
      product_rating: 3.9,
      product_name: "Sweatshirt",
      product_type: "Slim fit",
      product_price: "1999",
      product_discount: 70
    },
    {
      id: 5,
      product_rating: 4.1 ,
      product_name: "Jacket",
      product_type: "Slim fit",
      product_price: "1099"
    },
    {
      id: 6,
      product_rating: 3.9,
      product_name: "Jacket",
      product_type: "Relaxed fit",
      product_price: "599"
    },
    {
      id: 7,
      product_rating: 4.1 ,
      product_name: "Jacket",
      product_type: "Slim fit",
      product_price: "1899",
      product_discount: 49
    },
    {
      id: 8,
      product_rating: 3.9,
      product_name: "Sweatshirt",
      product_type: "Regular fit",
      product_price: "549"
    },
    {
      id: 9,
      product_rating: 3.9,
      product_name: "Sweatshirt",
      product_type: "Regular fit",
      product_price: "1399",
      product_discount: 70
    },
    {
      id: 10,
      product_rating: 4.1,
      product_name: "Jacket",
      product_type: "Slim fit",
      product_price: "569"
    },
    {
      id: 11,
      product_rating: 4.4,
      product_name: "Jacket",
      product_type: "Slim fit",
      product_price: "1769",
      product_discount: 63
    },
    {
      id: 12,
      product_rating: 3.9,
      product_name: "Jacket",
      product_type: "Relaxed fit",
      product_price: "1169",
      product_discount: 49
    },
    {
      id: 13,
      product_rating: 4.1,
      product_name: "T-Shirts",
      product_type: "Slim fit",
      product_price: "1669",
      product_discount: 62
    },
    {
      id: 14,
      product_rating: 3.9,
      product_name: "Dress",
      product_type: "Printed Dress",
      product_price: "549"
    },
    {
      id: 15,
      product_rating: 4.4 ,
      product_name: "Dress",
      product_type: "Printed Dress",
      product_price: "469"
    },
    {
      id: 16,
      product_rating: 4.1,
      product_name: "Dress",
      product_type: "Printed Dress",
      product_price: "1299",
      product_discount: 57
    },
    {
      id: 17,
      product_rating: 3.9,
      product_name: "Jeans",
      product_type: "Slim fit",
      product_price: "799",
      product_discount: 33
    },
    {
      id: 18,
      product_rating: 4.1 ,
      product_name: "Jeans",
      product_type: "Slim fit",
      product_price: "1999",
      product_discount:"55"
    },
    {
      id: 19,
      product_rating: 3.9,
      product_name: "Jeans",
      product_type: "Relaxed fit",
      product_price: "1559"
    }, {
      id: 20,
      product_rating: 4.1,
      product_name: "Trouser",
      product_type: "Cargo Pants",
      product_price: "949"
    },
    {
      id: 21,
      product_rating: 3.9 ,
      product_name: "Shorts",
      product_type: "Slim fit",
      product_price: "1959",
      product_discount: 34
    },
    {
      id: 22,
      product_rating: 4.4,
      product_name: "Shorts",
      product_type: "Slim fit",
      product_price: "1899",
      product_discount: 54
    },
    {
      id: 23,
      product_rating: 4.1,
      product_name: "Shorts",
      product_type: "Slim fit",
      product_price: "1959",
      product_discount: 32
    },
    {
      id: 24,
      product_rating: 3.9,
      product_name: "Skirts",
      product_type: "Knee length",
      product_price: "749",
      product_discount: 32
    },
    {
      id: 25,
      product_rating: 4.1 ,
      product_name: "Shorts",
      product_type: "Knee Length",
      product_price: "499"
    } ]
  }
];

export default products;
