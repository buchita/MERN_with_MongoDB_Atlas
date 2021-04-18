import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
// import MenuCard from './menuCard';


class basket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: []
        };

    }

    componentDidMount() {

        function submitForm() {
            axios.post('http://localhost:3000/api/basket', {
                name: name,
                quantity: quantity,
                price: price
            }).then(res => {
                alert("Item added successfully");
                // window.location.reload();
            }).catch(err => {
                console.log("Error from display menu list")
            })
        }
    };

    render() {
        // const menus = this.state.menus;
        // let menuList;


        // if (!menus) {
        //     menuList = "there is no menus";

        // }
        // else {
        //     menuList = menus.map((menu, k) =>
        //         <MenuCard menu={menu} key={k} />

        //     );
        // }


        return (
            <div className="Basket">
                <form onSubmit={submitForm}>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="Enter your username"
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Enter your email address"
                    />
                    <input type="submit" />
                </form>



            </div>




        );

    }

}
export default basket;