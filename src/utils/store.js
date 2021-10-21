const cards = [
{
    id: 'card-1',
        content:'Learning how to cook',

},
    {
        id: 'card-2',
        content:'Making sandwiches',

    },
    {
        id: 'card-3',
        content:'Walking with dog',

    },
]

const data= {
    lists: {
    'list-1':{
            id:'list-1',
        title:'Todo',
        cards,
    },
        },
    listIds:['list-1']
}
export default data;
