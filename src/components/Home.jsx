import React from 'react';
import "./home.css"
import Product from './Product';
const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2020/06/amazon-prime-video-windows10-app-2020.jpg"
                className="home_image"/>
            
            <div className="home_row">
                <Product id="1"
                title={"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"}
                price={19.99}
                rating={4} image={"https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"}/>
                <Product id="2"
                 title={"JBL Tune 215BT in-Ear Wireless Bluetooth Headphones with Mic, 16 Hours Playtime, Deep Bass, Quick Charge, Multi-Point Connection and Tangle Free Cable (Black)"}
                price={100}
                rating={3} image={"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"}/>
               
            </div>
            <div className="home_row">
            <Product id="3"
             title={"IPHONE 12 (12.9-inch, Wi-Fi, 128GB) - Green (4th Generation)"}
                price={500}
                rating={5} image={"https://images-na.ssl-images-amazon.com/images/I/61ers6OzvUL._SL1024_.jpg"}/>
                <Product id="4"
                 title={"Nike Men's Revolution 2 MSL Black/Black - Wolf Grey Sport Shoes (6 UK) 7US 39EU"}
                price={12.99}
                rating={4} image={"https://m.media-amazon.com/images/I/41JAVjvMhgL.jpg"}/>
                <Product id="5"
                title={"Tommy Hilfiger Analog Black Dial Men's Watch-W1161G1"}
                price={199.99}
                rating={5} image={"https://images-na.ssl-images-amazon.com/images/I/715DELJdP0L._UX342_.jpg"}/>
                <Product id="6"
                 title={"Canon EOS 80D 24.2MP Digital SLR Camera (Black) + EF-S 18-135mm f/3.5-5.6 Image Stabilization USM Lens Kit"}
                price={300}
                rating={4} image={"https://images-na.ssl-images-amazon.com/images/I/61VFkA-rceL._SL1000_.jpg"}/>
            </div>
            <div className="home_row">
            <Product id="7"
            title={"LG LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"}
                price={700}
                rating={6} image={"https://i.gadgets360cdn.com/products/televisions/large/1548153324_832_lg_43-inch-led-full-hd-tv-43lh576t.jpg"}/>
                
            </div>
            </div>
        </div>
    );
};

export default Home;