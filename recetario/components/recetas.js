const meals =[
        {
            id:"1",
            name: "Peperoni Pizza Pockets",
            servings: 4,
            favorite: false,
            ingredients: [{
                    name: 'Peperoni',
                    amount: '15 slices',
                    id: 'item1',
                }, {
                    name: 'Puff Pastry',
                    amount: '1 sheet',
                    id: 'item2',
                }, {
                    name: 'Marinada sauce',
                    amount: "1 cup",
                    id: 'item3',
            }],
            trending:false,
            recent:false,
            imgUrl: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/pizzapepperoni0.jpg"
        },
        {
            id:"2",
            name: "Meatball Sub Bake", 
            servings: 2,
            favorite: false,
            ingredients: [{
                name: 'Refrigerated biscuit',
                amount: '1 tube',
                id: 'item1',
            }, {
                name: 'Frozen mini meatballs',
                amount: '24',
                id: 'item2',
            }, {
                name: 'Marinada Sauce',
                amount: "1 jar",
                id: 'item3',
            }, {
                name: 'Sherdded mozzarella cheese',
                amount: "2 cup",
                id: 'item4',
            }],
            trending:true,
            recent:false,
            imgUrl: "https://www.thechunkychef.com/wp-content/uploads/2017/09/Meatball-Sub-Casserole-cheese.jpg"
        },
        {
            id:"3",
            name: "Chocolate Chip Cookies",
            servings: 3,
            favorite: false,
            ingredients: [{
                name: 'Butter softened',
                amount: '1 cup',
                id: 'item1',
            }, {
                name: 'White sugar',
                amount: '1 cup',
                id: 'item2',
            }, {
                name: 'Packed brown sugar',
                amount: "1 cup",
                id: 'item3',
            }, {
                name: 'Eggs',
                amount: "2",
                id: 'item4',
            }, {
                name: 'Vanilla extract',
                amount: '2 teaspoons',
                id: 'item5',
            },
            {
                name: 'Baking soda',
                amount: '1 teaspoon',
                id: 'item6',
            },
            {
                name: 'Salt',
                amount: '1/2 teaspoon',
                id: 'item7',
            },
            {
                name: 'All purpose flour',
                amount: '3 cups',
                id: 'item8',
            },
            {
                name: 'Semisweet chocolate chips',
                amount: '2 cups',
                id: 'item9',
            },
            {
                name: 'Chopped walnuts',
                amount: '1 cup',
                id: 'item10',
            },],
            trending:true,
            recent:false,
            imgUrl: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/62298.jpg?output-format=auto&output-quality=auto"
        },
        {
            id:"4",
            name: "Spaghetti puttanesca",
            servings: 2,
            favorite: false,
            ingredients: [{
                name: 'Olive oil',
                amount: '3 tbsp',
                id: 'item1',
            }, {
                name: 'Onion',
                amount: '1',
                id: 'item2', 
            },{
                name: 'Garlic cloves',
                amount: '2',
                id: 'item3',
            },{
                name: 'Chopped tomatoes',
                amount: '400g',
                id: 'item4',
    
            },{
                name: 'Anchovy fillets',
                amount: '5',
                id: 'item5',
            },{
                name: 'Pitted black olives',
                amount: '120g',
                id: 'item6',
                
            },{
                name: 'Capers',
                amount: '2 tbsp',
                id: 'item7',
                
            },{
                name: 'Spaghetti',
                amount: '300g',
                id: 'item8',
            },{
                name: 'Bunch of parsley',
                amount: '1/2',
                id: 'item9',
            },],
            trending:true,
            recent:false,
            imgUrl: "https://realfood.tesco.com/media/images/RFO-1400x919-PastaPuttanesca-0c525969-43b4-4017-9f77-3fa308a922be-0-1400x919.jpg"
        },

        {
            id:"5",
            name: "Chorizo mozzarella gnocchi bake",
            servings: 4,
            favorite: false,
            ingredients: [{
                name: 'Olive oil',
                amount: '1 tbsp',
                id: 'item1',
            },{
                name: 'Onion',
                amount: '1',
                id: 'item2',
            },
            {
                name: 'Garlic cloves',
                amount: '2',
                id: 'item3',
            },
            {
                name: 'Chorizo',
                amount: '120g',
                id: 'item4',
            },{
                name: 'Chopped tomatoes', 
                amount: '800g can',
                id: 'item5',
            },
            {
                name: 'Caster sugar',
                amount: '1 tsp',
                id: 'item6',
            },
            {
                name: 'Fresh hnocchi',
                amount: '600g',
                id: 'item7',
            },
            {
                name: 'Mozzarella ball',
                amount: '125g',
                id: 'item8',
            },
            {
                name: 'Basil',
                amount: 'Small bunch',
                id: 'item9',
            },],
            trending:true,
            recent:false,
            imgUrl: "https://1.bp.blogspot.com/-tAf2-wAxIUM/XtqMdSVgDoI/AAAAAAAAy2E/NTdATKbKl2EyOluaJpTE589HchhkhZEaQCK4BGAsYHg/s640/A50B0308-FFD6-404A-BF02-9F2FD63F63BC.jpeg"
        }
]

export default meals