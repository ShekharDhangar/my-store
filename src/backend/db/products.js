import { v4 as uuid } from 'uuid';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
export const products = [
  {
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/131matte_600x.png?v=1652798471',
    alt: 'Product of tws earphones',
    _id: 'b8fe324c-4979-4354-b346-81ce0fff8e54',
    productTitle: 'Airdopes 131 ',
    brand: 'boat',
    color: 'black',
    productDesc:
      'Headphone Type: TWS Earbuds HD Sound: Yes Bluetooth Version: V5.0+EDR Driver Size: 13mm x 2 Drivers Bluetooth Profiles: HSP, HFP, A2DP, AVRCP Frequency: 20Hz-20KHz Voice Assistant: Yes ',
    productPrice: 1199,
    productDiscpercent: 60,
    productOgPrice: 2990,
    starRating: 5,
    reviews: 789,
    lazyLoading: "loading='lazy'",
    categories: 'wireless earphones',
    latest: true,
  },
  {
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/115-main3_600x.png?v=1650530657',
    alt: 'Product of tws earphones',
    _id: 'bb0ec543-4b15-4c95-a771-9d587c7d9eaf',
    productTitle: 'Airdopes 115',
    brand: 'boAt',
    color: 'red',
    productDesc:
      'Headphone Type: TWS Earbuds Driver Size: 13mm HD Sound: Yes Bluetooth Version: V5.2 Driver Size: 13mm x 2 Drivers Bluetooth Profiles: HSP, HFP, A2DP, AVRCP Frequency: 20Hz-20KHz Voice Assistant: Yes ',
    productPrice: 1499,
    productDiscpercent: 50,
    productOgPrice: 2990,
    starRating: 5,
    reviews: 42,
    lazyLoading: "loading='lazy'",
    categories: 'wireless earphones',
    latest: false,
  },
  {
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-1_600x.png?v=1641801662',
    alt: 'Product of bluetooth earphones',
    _id: '26ff83cd-ec8b-41d1-940f-e8bdf8b33a8b',
    productTitle: 'Rockerz 333',
    brand: 'boAt',
    color: 'black',
    productDesc:
      'Headphone Type: In-Ear Driver Size: 13mm HD Sound: Yes Bluetooth Version: V5.2 Driver Size: 13mm x 2 Drivers Bluetooth Profiles: HSP, HFP, A2DP, AVRCP Frequency: 20Hz-20KHz Voice Assistant: Yes ',
    productPrice: 1499,
    productDiscpercent: 62,
    productOgPrice: 3990,
    starRating: 5,
    reviews: 83,
    lazyLoading: "loading='lazy'",
    categories: 'wireless earphones',
    latest: true,
  },
  {
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_600x.png?v=1650386995',
    alt: 'Product of Smart watch',
    _id: '742542cd-88ec-4c9e-96a1-5f9b8b1275c6',
    productTitle: 'Watch Xtend‌',
    brand: 'boAt',
    color: 'green',
    productDesc: `Bluetooth Version BLE5.0 Operating Temperature "-10°C" -  "45°C" Bluetooth Range 10M Battery Capacity 300mAh Working Time Up to 7-10 Days Charging Time around 2 Hours Charging Type Magnetic Charger Sports Mode 14 Sports Mode Call Alert Yes Music Control Yes Gu_ided Meditative Breathing Yes Country Of Origin China Waterproof 5 ATM`,
    productPrice: 2999,
    productDiscpercent: 62,
    productOgPrice: 7990,
    starRating: 5,
    reviews: 88,
    lazyLoading: "loading='lazy'",
    categories: 'smart watches',
    latest: false,
  },
  {
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/white_600x.png?v=1648723802',
    alt: 'Product of Smart watch',
    _id: '2c7368c5-59a9-4fa4-813b-fa4fd6998a79',
    productTitle: 'Airdopes 141',
    brand: 'boAt',
    color: 'white',
    productDesc: `Bluetooth Version BLE5.0 Operating Temperature "-10°C" -  "45°C" Bluetooth Range 10M Battery Capacity 300mAh Working Time Up to 7-10 Days Charging Time around 2 Hours Charging Type Magnetic Charger Sports Mode 14 Sports Mode Call Alert Yes Music Control Yes Gu_ided Meditative Breathing Yes Country Of Origin China Waterproof 5 ATM`,
    productPrice: 1499,
    productDiscpercent: 67,
    productOgPrice: 4490,
    starRating: 5,
    reviews: 244,
    lazyLoading: "loading='lazy'",
    categories: 'wireless earphones',
    latest: true,
  },
  {
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_600x.png?v=1625046144',
    alt: 'Product of Headphones',
    _id: '80ac0db7-c735-458e-885e-e7e9303b981e',
    productTitle: 'Rockerz 550',
    brand: 'boAt',
    color: 'Red',
    productDesc: `Headphone Type Over-Ear Driver Type Moving Coil Driver Driver Size 50 mm Impedance 32Ω Sensitivity (dB) 90dB±3DB Frequency Response 20Hz-20KHz Battery Capacity (mAh) 500 mAh Playback Time 20 hours Charging Time 2.5 hours Standby Time 180 hours Bluetooth Version V5.0 Country Of Origin China Compatibility All Bluetooth Devices Bluetooth Range 10M`,
    productPrice: 1799,
    productDiscpercent: 64,
    productOgPrice: 4999,
    starRating: 5,
    reviews: 241,
    lazyLoading: "loading='lazy'",
    categories: 'headphones',
    latest: false,
  },
  {
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ae22e3a6-9590-401a-94f6-d8ecf42b4932_600x.png?v=1625046351',
    alt: 'Product of Headphones',
    _id: 'ebd301d7-9d17-46f8-a7fe-0c5c494d5b2b',
    productTitle: 'Rockerz 450',
    brand: 'boAt',
    color: 'sky blue',
    productDesc: `Headphone Type On-Ear Driver Type Moving Coil Driver Driver Size 40 mm Impedance 32Ω Sensitivity (dB) 108dB±3DB Frequency Response 20Hz-20KHz Battery Capacity (mAh) 300 mAh Playback Time 15 hours Charging Time 3 hours Standby Time 400 hours Bluetooth Version V4.2 Country Of Origin China Compatibility All Bluetooth Devices Bluetooth Range 10M`,
    productPrice: 1399,
    productDiscpercent: 65,
    productOgPrice: 3990,
    starRating: 5,
    reviews: 224,
    lazyLoading: "loading='lazy'",
    categories: 'headphones',
    latest: true,
  },
  {
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8d42bd81-b833-4fc7-9d54-90c603b5e9d0_600x.png?v=1625044984',
    alt: 'Product of Headphones',
    _id: '169ef3c1-ca7c-4622-be48-d158eb06c32b',
    productTitle: 'Rockerz 510',
    brand: 'boAt',
    color: 'red',
    productDesc: `Headphone Type On-Ear Driver Type Moving Coil Driver Driver Size 40 mm Impedance 32Ω Sensitivity (dB) 108dB±3DB Frequency Response 20Hz-20KHz Battery Capacity (mAh) 300 mAh Playback Time 15 hours Charging Time 3 hours Standby Time 400 hours Bluetooth Version V4.2 Country Of Origin China Compatibility All Bluetooth Devices Bluetooth Range 10M`,
    productPrice: 1399,
    productDiscpercent: 60,
    productOgPrice: 3490,
    starRating: 5,
    reviews: 117,
    lazyLoading: "loading='lazy'",
    categories: 'headphones',
    latest: false,
  },
  {
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_c07e7a91-ebc0-44bd-87fa-7e3d8d897b06_600x.png?v=1644301639',
    alt: 'Product of Headphones',
    _id: '49cbf17a-2d3e-4ef2-9d1f-59d0e60df26d',
    productTitle: 'Nirvanaa 751 ANC',
    brand: 'boAt',
    color: 'grey',
    productDesc: `Headphone Type On-Ear Driver Type Moving Coil Driver Driver Size 40 mm Impedance 32Ω Sensitivity (dB) 108dB±3DB Frequency Response 20Hz-20KHz Battery Capacity (mAh) 300 mAh Playback Time 15 hours Charging Time 3 hours Standby Time 400 hours Bluetooth Version V4.2 Country Of Origin China Compatibility All Bluetooth Devices Bluetooth Range 10M`,
    productPrice: 3499,
    productDiscpercent: 60,
    productOgPrice: 7990,
    starRating: 4.5,
    reviews: 11,
    lazyLoading: "loading='lazy'",
    categories: 'headphones',
    latest: true,
  },
  {
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/30292182-5454-42b0-b742-6c0954331d85_600x.png?v=1625045494',
    alt: 'Product of wireless earphones',
    _id: 'c6d940a2-c8ac-41aa-beda-9a42c4d9f414',
    productTitle: 'Rockerz 255 Pro',
    brand: 'boAt',
    color: 'yellow',
    productDesc: `Headphone Type Hybr_id ANC Driver Size 40 mm drivers Playing Time 65 Hours (54 Hours with ANC) Charging Time 1 Hour Noise Cancellation Upto 33dB SNR 80dB Wireless Technology Type Bluetooth Bluetooth Version V5.0 Bluetooth Range 10 Meters Frequency Range 20Hz -20kHz Charging Interface Type C Country Of Origin China`,
    productPrice: 1399,
    productDiscpercent: 60,
    productOgPrice: 3499,
    starRating: 5,
    reviews: 325,
    lazyLoading: "loading='lazy'",
    categories: 'wireless earphones',
    latest: false,
  },
  {
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m1_dac5a6b1-7937-4cdf-be70-76bb5a1fcf49_600x.png?v=1639153081',
    alt: 'Product of wireless earphones',
    _id: 'a2404e41-ba3a-4575-8c1c-3e7dd73b4c0f',
    productTitle: 'Rockerz 333 Pro',
    brand: 'boAt',
    color: 'black',
    productDesc: `Bluetooth Version V5.2 Operating Range 10m Frequency 20Hz-20000Hz Driver Size 10mm2 Drivers Sensitivity (dB) -98dB +3dB Battery 150mAh 2 Talk time: Up to 60 hours Playback Time Up to 60 hours @ 60% volume Charging Time About 1 hour Fast Charging 10 minutes charging,20 hours working Charging Port Type C Country Of Origin China Impedance 32Ω Water Resistance IPX5`,
    productPrice: 1699,
    productDiscpercent: 43,
    productOgPrice: 2990,
    starRating: 5,
    reviews: 67,
    lazyLoading: "loading='lazy'",
    categories: 'wireless earphones',
    latest: true,
  },
  {
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_600x.png?v=1574927262',
    alt: 'Product of wired earphones',
    _id: 'c5c4a001-68c5-4cb9-8f55-9319d644e852',
    productTitle: 'BassHeads 103',
    brand: 'boAt',
    color: 'red',
    productDesc: `Headphone Type In-Ear Super Extra Bass Yes Driver Size 10 mm Impedance 16Ω Sensitivity (dB) 107db Frequency Response 20Hz-20KHz Noise Isolation Passive Microphone Yes Country Of Origin China Rated Power 3mW Compatibility All 3.5mm Jack Device`,
    productPrice: 499,
    productDiscpercent: 61,
    productOgPrice: 1290,
    starRating: 5,
    reviews: 427,
    lazyLoading: "loading='lazy'",
    categories: 'wired earphones',
    latest: false,
  },
  {
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/f87f98c3-9b52-4f7f-9ebe-dd10ee9517d9_600x.png?v=1633152280',
    alt: 'Product of wired earphones',
    _id: '805be03e-9c72-4e1a-aa30-f25789838bef',
    productTitle: 'BassHeads 102',
    brand: 'boAt',
    color: 'blue',
    productDesc: `Headphone Type In-Ear Super Extra Bass Yes Driver Size 8 mm Impedance 18Ω Sensitivity (dB) 104db ±3db Frequency Response 20Hz-20KHz Noise Isolation Passive Microphone Yes Country Of Origin China Rated Power 3mW Compatibility All 3.5mm Jack Device`,
    productPrice: 499,
    productDiscpercent: 61,
    productOgPrice: 1290,
    starRating: 5,
    reviews: 126,
    lazyLoading: "loading='lazy'",
    categories: 'wired earphones',
    latest: true,
  },
  {
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/d642ebc5-2e7d-4450-bffc-03cc157b7d6f_600x.png?v=1625046491',
    alt: 'Product of wired earphones',
    _id: 'a8bf6e15-ea74-4e07-b1a4-2a943f5ea007',
    productTitle: 'BassHeads 152',
    brand: 'boAt',
    color: 'white',
    productDesc: `Headphone Type In-Ear Super Extra Bass Yes Driver Size 10 mm Impedance 16Ω Sensitivity (dB) 107db Frequency Response 20Hz-20KHz Noise Isolation Passive Microphone Yes Country Of Origin China Rated Power 3mW Compatibility All 3.5mm Jack Device`,
    productPrice: 499,
    productDiscpercent: 61,
    productOgPrice: 1290,
    starRating: 5,
    reviews: 9,
    lazyLoading: "loading='lazy'",
    categories: 'wired earphones',
    latest: false,
  },
  {
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/48f99cab-b0ac-4e12-a5b4-fca6af5adf47_600x.png?v=1625046259',
    alt: 'Product of wired earphones',
    _id: '2adb3749-71c0-41b0-90f9-566ce254cae4',
    productTitle: 'BassHeads 100',
    brand: 'boAt',
    color: 'pink',
    productDesc: `Headphone Type In-Ear Super Extra Bass Yes Driver Size 10 mm Impedance 16Ω Sensitivity (dB) 107db Frequency Response 20Hz-20KHz Noise Isolation Passive Microphone Yes Country Of Origin China Rated Power 3mW Compatibility All 3.5mm Jack Device`,
    productPrice: 399,
    productDiscpercent: 60,
    productOgPrice: 999,
    starRating: 5,
    reviews: 337,
    lazyLoading: "loading='lazy'",
    categories: 'wired earphones',
    latest: true,
  },
];

// export const products = [
//   {
//     _id: uuid(),
//     title: 'You Can WIN',
//     author: 'Shiv Khera',
//     price: '5000',
//     categoryName: 'non-fiction',
//   },
//   {
//     _id: uuid(),
//     title: 'You are Winner',
//     author: 'Junaid Qureshi',
//     price: '3000',
//     categoryName: 'horror',
//   },
//   {
//     _id: uuid(),
//     title: 'Think and Grow Rich',
//     author: 'Shiv Khera',
//     price: '1000',
//     categoryName: 'fiction',
//   },
// ];
