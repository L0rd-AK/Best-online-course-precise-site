import { useEffect } from "react";
import { useState } from "react";
import Card from "../card/Card";
import PropTypes from 'prop-types';

const Cards = ({handelListName}) => {
    const [Cards,setCards]=useState([]);
    useEffect(()=>{
        fetch('cards.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-3">
            {
                // Cards.map(Cards=> <Card key={Cards.id} card={Cards} handelListName={handelListName}></Card>)
                Cards.map(card=> <Card key={card.id} card={card} handelListName={handelListName}></Card>)
            }
        </div>
    );
};
Cards.propTypes = {
    handelListName:PropTypes.func
};
export default Cards;