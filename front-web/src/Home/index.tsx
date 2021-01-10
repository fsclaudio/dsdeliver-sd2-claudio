import React from "react";
import './styles.css';
import { ReactComponent as Mainimage } from './main.svg'
import Footer from "../Footer";
import { Link } from "react-router-dom";
function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-titles">
                            Faça seu pedido <br /> que entregamos <br /> para você!!!
                 </h1>
                        <h3 className="home-subtitle">
                            Escolha seu pedido e em poucos minutos <br /> levaremos na sua porta!
                 </h3>
                        <Link to='/orders' href="orders" className="home-btn-order">
                            FAZER PEDIDO
                 </Link>
                    </div>
                    <div className="home-image">
                        <Mainimage />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )

}

export default Home;