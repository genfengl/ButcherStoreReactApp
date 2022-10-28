// app.get('/seed', async (req, res) => {
//   const newMeat = [
//     {
//       title: "Dry Aged Ribeye",
//       imageURL: "https://cdn.shopify.com/s/files/1/0014/3202/7194/products/DSC_3070_720x.jpg?v=1610717274",
//       price: 40,
//       stock: 20,
//       category: "Beef",
//       description: "Finest Ribeye the southern hemisphere has to offer",
//     },{
//       title: "Free Range Minced Pork",
//       imageURL: "https://cdn.shopify.com/s/files/1/0014/3202/7194/products/DSC_3346_720x.jpg?v=1610747631",
//       price: 25,
//       stock: 15,
//       category: "Pork",
//       description: "Our pork mince has the perfect balance of fat and meat (approximately 20% fat) to make it moist and flavoursome.",

//     },{
//       title: "Leg Lamb (Boneless)",
//       imageURL: "https://cdn.shopify.com/s/files/1/0014/3202/7194/products/DSC_3205_720x.jpg?v=1610784734",
//       price: 48,
//       stock: 10,
//       category: "Lamb",
//       description: "When cooked low and slow this Australian lamb leg is meltingly tender, and it has been boned, rolled and hand-tied by our head butcher for ease of carving.",

//     },

//   ]
//   const items = await Meat.create(newMeat)
//   res.send(items)
// })