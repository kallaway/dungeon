import React, { Component } from "react";
import "./Square.scss";
import Hero from "../Hero/Hero.js";
import Creature from "../Creature/Creature.js";
import Health from "../Health/Health.js";
import Portal from "../Portal/Portal.js";

// visibility: on and off
// can contain - Creature Item Hero Health Portal

class Square extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="Square-container" />;
    }
}

export default Square;
