const products = [
    {
        id: 1,
        name: "VARIABLE PRODUCT",
        price: 390,
        ratingAvg: 5.0,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, 
                      eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes 
                      nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.`,
        productImgs: [
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/variable-product-img-505x505.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-3-gallery-5.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-3-gallery-6.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-3-gallery-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-3-gallery-2.jpg'
        ],

        color: [
            'black',
            'white',
        ],

        material: [
            'chrome',
            'wood'
        ],
        weight: "2 kg",
        dimensions: "10 x 10 x 15 cm",

        reviews: [
            { forProductId: 1, reviewId: 1, rating: 5.0, reviewerName: "Mark Jackson", description: "asd", dateOfReview: "01/23/2024" },
        ],
        path: "variable-product"
    },

    {
        id: 2,
        name: "TABLE LAMP",
        price: 240,
        ratingAvg: 5.0,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, 
                      eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes 
                      nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.`,
        productImgs: [
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-1-gallery-4.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-1-gallery-3.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-1-gallery-2.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-1-gallery-1.jpg'
        ],

        color: [],
        material: [],
        weight: "2 kg",
        dimensions: "10 x 10 x 15 cm",

        reviews: [
            { forProductId: 2, reviewId: 2, rating: 5.0, reviewerName: "Mark Jackson", description: "asd", dateOfReview: "01/23/2024" },
        ],
        path: "table-lamp"
    },

    {
        id: 3,
        name: "POTTERY VASE",
        price: 60,
        ratingAvg: 5.0,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, 
                      eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes 
                      nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.`,
        productImgs: [
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-2.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-2.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-3.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-4.jpg'
        ],

        color: ["Beige"],
        material: ["Concrete"],
        weight: "2 kg",
        dimensions: "10 x 10 x 15 cm",

        reviews: [
            { forProductId: 3, reviewId: 3, rating: 5.0, reviewerName: "Mark Jackson", reviewImg: "https://freesvg.org/img/abstract-user-flat-4.png", description: "asd", dateOfReview: "01/23/2024" },
        ],
        path: "pottery-vase"
    },

    {
        id: 4,
        name: "ROSE HOLDBACK",
        price: 24,
        ratingAvg: 5.0,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, 
                      eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes 
                      nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.`,
        productImgs: [
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-18-gallery-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-18-gallery-2.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-18-gallery-3.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-18-gallery-4.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-3-1.jpg'
        ],

        color: ["Rose"],
        material: ["Wood"],
        weight: "2 kg",
        dimensions: "10 x 10 x 15 cm",

        reviews: [
            { forProductId: 4, reviewId: 4, rating: 5.0, reviewerName: "Mark Jackson", reviewImg: "https://freesvg.org/img/abstract-user-flat-4.png", description: "asd", dateOfReview: "01/23/2024" },
        ],
        path: "rose-holdback"
    },

    {
        id: 5,
        name: "NEWSPAPER STORAGE",
        price: 90,
        ratingAvg: 4.0,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, 
                      eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes 
                      nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.`,
        productImgs: [
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-2.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-3.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-4.jpg'
        ],

        color: ["Beige", "White"],
        material: ["Wood"],
        weight: "2 kg",
        dimensions: "10 x 10 x 15 cm",

        reviews: [
            { forProductId: 5, reviewId: 5, rating: 5.0, reviewerName: "Mark Jackson", reviewImg: "https://freesvg.org/img/abstract-user-flat-4.png", description: "asd", dateOfReview: "01/23/2024" },
        ],
        path: "newspaper-storage"
    },

    {
        id: 6,
        name: "WALL CLOCK",
        price: 110,
        ratingAvg: 4.0,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, 
                      eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes 
                      nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.`,
        productImgs: [
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-5-gallery-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-5-gallery-2.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-5-gallery-3.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-5-gallery-4.jpg'
        ],

        color: ["Black"],
        material: ["Chrome"],
        weight: "2 kg",
        dimensions: "10 x 10 x 15 cm",

        reviews: [
            { forProductId: 6, reviewId: 6, rating: 5.0, reviewerName: "Mark Jackson", reviewImg: "https://freesvg.org/img/abstract-user-flat-4.png", description: "asd", dateOfReview: "01/23/2024" },
        ],
        path: "wall-clock"
    },

    {
        id: 7,
        name: "DECO ACCESSORY",
        price: 15,
        ratingAvg: 5.0,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, 
                      eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes 
                      nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.`,
        productImgs: [
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-6-gallery-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-6-gallery-2.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-6-gallery-3.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-6-gallery-4.jpg'
        ],

        color: ["Beige"],
        material: ["Wood"],
        weight: "2 kg",
        dimensions: "10 x 10 x 15 cm",

        reviews: [
            { forProductId: 7, reviewId: 7, rating: 5.0, reviewerName: "Mark Jackson", reviewImg: "https://freesvg.org/img/abstract-user-flat-4.png", description: "asd", dateOfReview: "01/23/2024" },
        ],
        path: "deco-accessory"
    },

    {
        id: 8,
        name: "FLOWER VASE",
        price: 170,
        ratingAvg: 4.0,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, 
                      eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes 
                      nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.`,
        productImgs: [
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-7-gallery-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-7-gallery-2.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-7-gallery-3.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-7-gallery-4.jpg'
        ],

        color: ["Gold,White"],
        material: ["Concrete, Metal"],
        weight: "2 kg",
        dimensions: "10 x 10 x 15 cm",

        reviews: [
            { forProductId: 8, reviewId: 8, rating: 5.0, reviewerName: "Mark Jackson", reviewImg: "https://freesvg.org/img/abstract-user-flat-4.png", description: "asd", dateOfReview: "01/23/2024" },
        ],
        path: "flower-vase"
    },

    {
        id: 9,
        name: "BASKET WITH HANDLES",
        price: 160,
        ratingAvg: 5.0,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, 
                      eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes 
                      nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.`,
        productImgs: [
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-8-gallery-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-8-gallery-2.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-8-gallery-3.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-8-gallery-4.jpg'
        ],

        color: ["Beige,Black"],
        material: ["Metal, Wood"],
        weight: "2 kg",
        dimensions: "10 x 10 x 15 cm",

        reviews: [
            { forProductId: 9, reviewId: 9, rating: 5.0, reviewerName: "Mark Jackson", reviewImg: "https://freesvg.org/img/abstract-user-flat-4.png", description: "asd", dateOfReview: "01/23/2024" },
        ],
        path: "basket-with-handles"
    },



    {
        id: 10,
        name: "ELEGANT PENDANT",
        price: 290,
        ratingAvg: 5.0,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, 
                      eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes 
                      nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.`,
        productImgs: [
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h3-product-2.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-1-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-2-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-3-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-2-gallery-4-1.jpg'
        ],

        color: ["Black,Orange"],
        material: ["Chrome"],
        weight: "2 kg",
        dimensions: "10 x 10 x 15 cm",

        reviews: [
            { forProductId: 10, reviewId: 10, rating: 5.0, reviewerName: "Mark Jackson", reviewImg: "https://freesvg.org/img/abstract-user-flat-4.png", description: "asd", dateOfReview: "01/23/2024" },
        ],
        path: "elegant-pendant"
    },

    {
        id: 11,
        name: "FLOWERING CACTUS",
        price: 65,
        ratingAvg: 5.0,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, 
                      eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes 
                      nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.`,
        productImgs: [
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h3-product-3.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-3-gallery-1-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-3-gallery-2-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-3-gallery-3.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-3-gallery-4.jpg'
        ],

        color: ["White"],
        material: ["Concrete"],
        weight: "2 kg",
        dimensions: "10 x 10 x 15 cm",

        reviews: [
            { forProductId: 11, reviewId: 11, rating: 5.0, reviewerName: "Mark Jackson", reviewImg: "https://freesvg.org/img/abstract-user-flat-4.png", description: "asd", dateOfReview: "01/23/2024" },
        ],
        path: "flowering-cactus"
    },

    {
        id: 12,
        name: "SHELL COLLECTION",
        price: 25,
        ratingAvg: 4.0,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, 
                      eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes 
                      nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.`,
        productImgs: [
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h3-product-4.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-4-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-3-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-2-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-1-1.jpg'
        ],

        color: ["White"],
        material: ["Steel"],
        weight: "2 kg",
        dimensions: "10 x 10 x 15 cm",

        reviews: [
            { forProductId: 12, reviewId: 12, rating: 5.0, reviewerName: "Mark Jackson", reviewImg: "https://freesvg.org/img/abstract-user-flat-4.png", description: "asd", dateOfReview: "01/23/2024" },
        ],
        path: "shell-collection"
    },

    {
        id: 13,
        name: "MODERN CHAIR",
        price: 345,
        ratingAvg: 5.0,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, 
                      eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes 
                      nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.`,
        productImgs: [
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h3-product-6a.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-3-gallery-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-3-gallery-2.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-3-gallery-5.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-3-gallery-6.jpg'
        ],

        color: ["Beige", "White"],
        material: ["Chrome", "Wood"],
        weight: "2 kg",
        dimensions: "10 x 10 x 15 cm",

        reviews: [
            { forProductId: 13, reviewId: 13, rating: 5.0, reviewerName: "Mark Jackson", reviewImg: "https://freesvg.org/img/abstract-user-flat-4.png", description: "asd", dateOfReview: "01/23/2024" },
        ],
        path: "modern-chair"
    },


    {
        id: 14,
        name: "CLEW",
        price: 15,
        ratingAvg: 5.0,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, 
                      eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes 
                      nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.`,
        productImgs: [
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h4-product-14.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-14-gallery-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-14-gallery-2.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-14-gallery-4.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-14-gallery-3.jpg'
        ],

        color: ["Beige"],
        material: ["Wood"],
        weight: "2 kg",
        dimensions: "10 x 10 x 15 cm",

        reviews: [
            { forProductId: 14, reviewId: 14, rating: 5.0, reviewerName: "Mark Jackson", reviewImg: "https://freesvg.org/img/abstract-user-flat-4.png", description: "asd", dateOfReview: "01/23/2024" },
        ],
        path: "clew"
    },

    {
        id: 15,
        name: "DECORATIVE HORSE",
        price: 40,
        ratingAvg: 5.0,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, 
                      eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes 
                      nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.`,
        productImgs: [
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h4-product-19.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-19-gallery-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-19-gallery-2.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-19-gallery-3.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-19-gallery-4.jpg'
        ],

        color: ["Black"],
        material: ["Wood"],
        weight: "2 kg",
        dimensions: "10 x 10 x 15 cm",

        reviews: [
            { forProductId: 15, reviewId: 15, rating: 5.0, reviewerName: "Mark Jackson", reviewImg: "https://freesvg.org/img/abstract-user-flat-4.png", description: "asd", dateOfReview: "01/23/2024" },
        ],
        path: "decorative-horse"
    },
]

export default products;