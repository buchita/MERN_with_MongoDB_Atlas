import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
// import "bootstrap/dist/css/bootstrap.min.css";


const MenuCard = (props) => {
    const menu = props.menu;


    

    return (
        <div className="card-container">
            
                <div className="card" key={menu.id}>
                    <img className="card-img-top" src={menu.picture} alt="card" />
                    <div className="card-body">
                        <h5 className="card-title">{menu.name} <span className="badge badge-danger">HOT</span></h5>
                        <p className="card-text">Price: {menu.price}</p>
                        <p className="card-text">Ingredient: {menu.description}</p>
                        <button id="viewbtn" href="#" className="btn btn-light btn-lg btn-block"
                                    onClick="" value="">View</button>
{/* {this.props.selectionClick(this.state)} */}

                    </div>
                </div>

        </div>
    )
};

export default MenuCard;