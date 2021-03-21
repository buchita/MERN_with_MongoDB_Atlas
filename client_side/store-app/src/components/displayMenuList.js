import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import MenuCard from './menuCard';


class displayMenuList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: []
        };

        this.selectionClick = this.selectionClick.bind(this);

    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/menus').then(res => {
            this.setState({
                menus: res.data
            })
        }).catch(err => {
            console.log("Error from display menu list")
        })
    };

    selectionClick(e) {
        e.preventDefault(); // prevent form submit from reloading the page
        let name = e.target.value;

        // passing the id to another window
        this.props.history.push({
            pathname: '/item',
            data: name
        })
    }



    render() {
        const menus = this.state.menus;
        console.log("Menu " + menus);
        let menuList;


        if (!menus) {
            menuList = "there is no menus";

        }
        else {
            menuList = menus.map((menu, k) =>
                <MenuCard menu={menu} key={k} />

            );
        }


        return (
            <div className="displayMenuList">
                <img src="https://ice-cream-mern.s3-eu-west-1.amazonaws.com/header-scoops.png" alt="header" className="center" />
                <h2 className="display-4 text-center"><b>CONE</b>ction</h2>


                <div className="container-fluid">
                    {menuList}
                </div>



            </div>




        );

    }

}
export default displayMenuList;