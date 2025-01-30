import React from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import alpine_milk_chocolate from "../assets/images/alpine_milk_chocolate.jpeg"
import alpine_milk_chocolate1 from "../assets/images/alpine_milk_chocolate1.jpeg"
import bourbon_vanilla from "../assets/images/bourbon_vanilla.jpeg"
import ethiopian_coffee from "../assets/images/ethiopian_coffee.jpeg"
import ethiopian_coffee1 from "../assets/images/ethiopian_coffee1.jpeg"
import swiss_white_chocolate from "../assets/images/swiss_white_chocolate.jpeg"
import swiss_white_chocolate1 from "../assets/images/swiss_white_chocolate1.jpeg"
import wheyProtein1 from "../assets/images/wheyProtein1.jpeg"
import wheyProtein from "../assets/images/wheyProtein.jpeg"
import wild_berries from "../assets/images/wild_berries.jpeg"

const products = [
    {
        id: 1,
        name: "Alpine Milk Chocolate",
        price: "$25",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: alpine_milk_chocolate,
    },
    {
        id: 2,
        name: "Alpine Milk Chocolate",
        price: "$30",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: alpine_milk_chocolate1,
    },
    {
        id: 3,
        name: "Bourbon Vanilla",
        price: "$120",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: bourbon_vanilla,
    },
    {
        id: 4,
        name: "Ethiopian Coffee",
        price: "$80",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: ethiopian_coffee,
    },
    {
        id: 5,
        name: "Ethiopian Coffee",
        price: "$80",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: ethiopian_coffee1,
    },
    {
        id: 6,
        name: "Swiss White Chocolate",
        price: "$80",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: swiss_white_chocolate,
    },
    {
        id: 7,
        name: "Swiss White Chocolate",
        price: "$80",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: swiss_white_chocolate1,
    },
    {
        id: 8,
        name: "whey Protein",
        price: "$80",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: wheyProtein1,
    },
    {
        id: 9,
        name: "wheyProtein",
        price: "$80",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: wheyProtein,
    },
    {
        id: 10,
        name: "Wild Berries",
        price: "$80",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: wild_berries,
    },

];


function Product() {
    return (
        <div>
            <Header />
            <div className="max-w-7xl mx-auto p-4">
                <h2 className="text-2xl font-bold text-center mb-6 text-[#ec4755]">Unsere Produkte</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow">
                            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
                            <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
                            <p className="text-gray-500 text-sm">{product.description}</p>
                            <span className="text-lg font-bold text-red-500">{product.price}</span>
                            <button className="mt-3 w-full bg-[#ec4755] text-white py-2 rounded-lg hover:bg-red-400">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product