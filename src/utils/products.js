const products = [
    {id: 1, title: 'Oklahoma', description: 'Cebolloza', stock: 8, price: 1200, pictureUrl: 'https://www.tasteofhome.com/wp-content/uploads/2022/04/oklahoma-onion-burger-041322-TOH-13-ADedit.jpg?resize=700,467'},
    {id: 2, title: 'PattyMelt', description: 'Pan de Molde', stock: 4, price: 1150, pictureUrl: 'https://www.simplyrecipes.com/thmb/t7XHWrIVonvr0Ug8NZdTwEfKm48=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__07__Classic-Patty-Melt-LEAD-3-64dadcd1afed43159a894e117372f70d.jpg'},
    {id: 3, title: 'Cheese Burger', description: 'Simple', stock: 6, price: 900, pictureUrl: 'https://www.foodandwine.com/thmb/poAyBCgbg-3TornILojwj9q8aeY=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpgz'},
    {id: 4, title: 'Crispy', description: 'Con cebolla rebozada finita', stock: 3, price: 1000, pictureUrl: 'https://saborgourmet.com/wp-content/uploads/smash-burger-como-se-prepara-en-casa-la-hamburguesa-con-queso-de-eeuu-10-istock.jpg'},
]

export const getProducts = () => {
    const promise = new Promise((resolve) =>{
        setTimeout(() => {
            return resolve(products);
        },2000)
    })
    return promise
};

export const getProduct = (id) => {
    const promise = new Promise((resolve) =>{
        const result = products.find((product) => product.id === id)
        setTimeout(() => {
            return resolve(result);
        },2000)
    })
    return promise
};
