// Uncomment the import statemnets while running the test code and while submitting the solution
// Comment this code while running the solution in the browser
// import React from 'react';

function Product(props) {

    const outOfStock = props.outOfStock;

    console.log(outOfStock);

    if (!outOfStock) {
        return React.createElement("li", { className: "product" },
            React.createElement("div", null,
                React.createElement("img", { src: props.image }, null), " "),
            React.createElement("div", null, props.name),
            React.createElement("div", null,
                React.createElement("span", null, props.price))
        );
    } else {
        return null;
    }
} 

function ProductList(props) {
    const products = props.products;
    var listItems = products.map(e => {
        return React.createElement(Product, {
            key: e.id,
            image: e.imageSrc,
            outOfStock: e.outOfStock,
            name: e.productName,
            price: e.price,
            discountPrice: e.discountPrice
        })
    })
    return React.createElement("ul", { className: "product-list" }, listItems);
}

// uncomment the export statement while testing the code and submitting the solution
// comment this code while running the solution in the browser
// module.exports = { Product, ProductList };


