import React from 'react';
// import { Link } from 'react-router-dom';
import '../../App.css';
 
// import "bootstrap/dist/css/bootstrap.min.css";


const MenuCard = (props) => {
    const menu = props.menu;

    // const [email, setEmail] = React.useState("");
    // const [password, setPassword] = React.useState("");
    // const [country, setCountry] = React.useState("");
    // const [acceptedTerms, setAcceptedTerms] = React.useState(false);

    // function handleSubmit() 
    // {
    //     console.log("this is in the function")
    //     // event.preventDefault();
    // }

    return (
        <div className="card-container">
            
                <div className="card" key={menu.id}>
                    <img className="card-img-top" src={menu.picture} alt="card" />
                    <div className="card-body">
                        <h5 className="card-title">{menu.name} <span className="badge badge-danger">HOT</span></h5>
                        <p className="card-text">Price: {menu.price}</p>
                        <p className="card-text">Ingredient: {menu.description}</p>

                        {/* <form >
                        <button className="btn btn-light btn-lg btn-block"
                                   >Add</button>
                        <button type="submit" onClick={handleSubmit()} className="btn btn-light btn-lg btn-block">Add</button>
                        <input type='submit' />
                        </form>
                        
                         {this.props.selectionClick(this.state)} */}

                    </div>
                </div>

        </div>
    )
};

export default MenuCard;