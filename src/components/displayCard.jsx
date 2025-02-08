import Card from "./card";
import { useState, useEffect } from "react";
import FontTitle from "../../public/pokemon-font-title.png";
import FontInfo from "../../public/pokemon-font-info.png";
import BestScore from "../../public/best-score.png";
import Score from "../../public/score.png";

function DisplayCard() {

    const [pokemonClicked, setPokemonClicked] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [pokemons, setPokemons] = useState(Array.from({ length: 12}, () => crypto.randomUUID()))

    const onClick = (event) => {
        const pokemonName = event.currentTarget.dataset.name;

        setPokemonClicked((prev) => {
            const updatedList = [...prev, pokemonName];

            const duplicates = updatedList.filter((pokemon, index) => updatedList.indexOf(pokemon) !== index);

            if (duplicates.length == 0) {

                setScore((prev) => {

                    const newScore = prev + 1;

                    setBestScore((prev) => Math.max(prev, newScore));

                    return newScore;

                });
                
            } else {

                setScore(0)

                return [];

            };

            return updatedList

        });

    };

    useEffect(() => {

        setPokemons(Array.from({ length: 12}, () => crypto.randomUUID()));

    }, [pokemonClicked])

    return (

        <div className="display-cards">

            <div className="title-infos-score">

                <div className="title">

                    <img  width="100%" src={FontTitle} alt="Pokemon Memory Game"/>

                    <img  width="100%" src={FontInfo} alt="Pokemon Memory Game"/>

                </div>

                <div className="scores">

                    <div className="best-score">
                        <img className="poke-score" height="25%" src={BestScore} alt="Best Score"/>
                        <span>{bestScore}</span>
                    </div>

                    <div className="current-score">
                        <img className="poke-score" height="25%" src={Score} alt="Best Score"/>
                        <span>{score}</span>
                    </div>

                </div>
                
            </div>

            <div className="cards-container">

                {pokemons.map((value) => <Card onClick={onClick} key={value}/>)}

            </div>

        </div>

    );

};

export default DisplayCard;