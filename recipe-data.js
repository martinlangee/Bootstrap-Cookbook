const recipeData = {
    sections: [{
            name: 'Salad',
            recipes: []
        },
        {
            name: 'Spice &amp; More',
            recipes: [{
                    id: 'hunan-sauce',
                    title: 'Hunan Sauce',
                    author: 'Julie Awad',
                    date: '2020-11-16',
                    time: '5 min',
                    short: 'A blend of sweet and sour with hot and spicy',
                    imagePath: 'Dish-1.png',
                    comment: 'Sauce for one stir-fry recipe',
                    ingredients: [{
                            ingredient: 'Cream',
                            amount: '200 ml'
                        },
                        {
                            ingredient: 'Peach pulp',
                            amount: '400 g'
                        },
                        {
                            ingredient: 'Black chocolate',
                            amount: '200 g'
                        }
                    ],
                    steps: [
                        'Qui irure id Lorem proident sunt enim veniam exercitation culpa aliquip incididunt do nostrud ullamco.',
                        'Deserunt ea voluptate veniam nostrud do.',
                        'Non anim sunt amet nisi exercitation occaecat officia.',
                        'Cillum dolore ea commodo eiusmod laborum mollit commodo reprehenderit in.'
                    ],
                },
                {
                    id: 'austrian-guglhupf',
                    title: 'Austrian Gugelhupf Cake',
                    short: 'A recipe bringing back a lot of memories to Vienna',
                    author: 'John Connor',
                    date: '1997-08-29',
                    time: '1 hour',
                    imagePath: 'Dish-2.png',
                    comment: 'Something you cannot resist',
                    ingredients: [{
                            ingredient: 'Unsalted Butter (room temperature)',
                            amount: '200 g'
                        },
                        {
                            ingredient: 'Large Eggs',
                            amount: '5'
                        },
                        {
                            ingredient: 'All-Purpose Flour',
                            amount: '400 g'
                        },
                        {
                            ingredient: 'Lemon Zest',
                            amount: '1 pkg'
                        },
                        {
                            ingredient: 'Vanilla Extract',
                            amount: '1 pkg'
                        },
                    ],
                    steps: [
                        'Cillum fugiat nulla nisi et sint id elit cillum tempor reprehenderit.',
                        'Laboris tempor id commodo amet labore irure eu nostrud velit exercitation cillum ut.',
                        'Labore deserunt dolore et exercitation aliquip velit cillum nulla anim nisi ad elit excepteur exercitation. Eu et proident et sint.',
                        'Et ullamco veniam nostrud Lorem nisi enim cupidatat velit adipisicing tempor incididunt aute exercitation culpa.',
                        'Elit qui proident sint eu aliquip enim in ipsum veniam consectetur id anim aliquip reprehenderit.',
                        'Incididunt proident laborum et esse esse ipsum laboris veniam.'
                    ],
                },
            ]
        },
        {
            name: 'Rice',
            recipes: [] //{
                //     id: 'xxx',
                //     title: '',
                //     short: '',
                //     author: '',
                //     date: '',
                //     time: '',
                //     imagePath: '',
                //     comment: '',
                //     ingredients: [{
                //             ingredient: '',
                //             amount: ''
                //         },
                //         {
                //             ingredient: '',
                //             amount: ''
                //         },
                //         {
                //             ingredient: '',
                //             amount: ''
                //         }
                //     ],
                //     steps: [
                //         ''
                //     ],
                // }, ]
        },
        {
            name: 'Main Dish',
            recipes: [] //{
                //     id: 't-bone-steak',
                //     title: 'T-Bone Steak',
                //     short: 'How to fry the steak right',
                //     author: 'John Doe',
                //     date: '1965-05-11',
                //     time: '4 min',
                //     comment: '',
                //     imagePath: '',
                //     ingredients: [{
                //             ingredient: 'T-Bone steak',
                //             amount: '1 pc of 400 g'
                //         },
                //         {
                //             ingredient: 'Oil',
                //             amount: '3 Spoons'
                //         },
                //         {
                //             ingredient: 'Salt',
                //             amount: 'Pinch'
                //         }
                //     ],
                //     steps: [
                //         'Amet non incididunt eiusmod dolor ea commodo id ut duis esse voluptate ex.',
                //         'In veniam nisi exercitation aute incididunt excepteur tempor nisi ea est in eiusmod irure ea.',
                //         'Culpa consequat elit officia commodo sunt ex cupidatat cupidatat ex.',
                //         'Ea quis deserunt enim ut labore id occaecat labore.'
                //     ],
                // }, ]
        },
    ]
};