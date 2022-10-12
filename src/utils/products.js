const products = [
    {id: 1, title: 'Oklahoma', category: 'hamburguesas', description: 'Cebolloza', stock: 8, price: 1200, pictureUrl: 'https://www.tasteofhome.com/wp-content/uploads/2022/04/oklahoma-onion-burger-041322-TOH-13-ADedit.jpg?resize=700,467'},
    {id: 2, title: 'PattyMelt', category: 'hamburguesas', description: 'Pan de Molde', stock: 4, price: 1150, pictureUrl: 'https://www.foodandwine.com/thmb/bXhsnYfLdGKvTXIDMNrEIGUFw-4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/patty-melt-with-charred-scallion-chipotle-mayo-FT-RECIPE0920-48a888ec76ce48dc91937021de1df6db.jpg'},
    {id: 3, title: 'Cheese Burger', category: 'hamburguesas', description: 'Simple', stock: 6, price: 900, pictureUrl: 'https://www.foodandwine.com/thmb/poAyBCgbg-3TornILojwj9q8aeY=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg'},
    {id: 4, title: 'Crispy', category: 'hamburguesas', description: 'Con cebolla rebozada finita', stock: 3, price: 1000, pictureUrl: 'https://saborgourmet.com/wp-content/uploads/smash-burger-como-se-prepara-en-casa-la-hamburguesa-con-queso-de-eeuu-10-istock.jpg'},
    {id: 5, title: 'Coca-Cola', category: 'bebidas', description: 'bebida sabor Cola', stock: 10, price: 250, pictureUrl:'https://st3.depositphotos.com/1024749/15589/i/600/depositphotos_155895180-stock-photo-global-brand-of-fruit-flavored.jpg'},
    {id: 6, title: 'Sprite', category: 'bebidas', description: 'bebida sabor Lima Limón', stock: 10, price: 250, pictureUrl:'https://st3.depositphotos.com/1024749/15589/i/600/depositphotos_155895180-stock-photo-global-brand-of-fruit-flavored.jpg'},
    {id: 7, title: 'Fanta', category: 'bebidas', description: 'bebida sabor Naranja', stock: 10, price: 250, pictureUrl:'https://st3.depositphotos.com/1024749/15589/i/600/depositphotos_155895180-stock-photo-global-brand-of-fruit-flavored.jpg'},
]

export const getAllProducts = () => {
    const promise = new Promise((resolve) =>{
        setTimeout(() => {
            return resolve(products);
        },2000)
    })
    return promise
};

export const getProduct = (id) => {
    const promise = new Promise((resolve) =>{
        const result = products.find((product) => product.id === parseInt(id))
        setTimeout(() => {
            return resolve(result);
        },2000)
    })
    return promise
};

export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) =>{
        const results = products.filter((product) => product.category === categoryId);
        setTimeout(() => {
            return resolve(results);
        },2000)
    })
    return promise
};