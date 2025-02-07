import Card from "./card";
import { useState, useEffect } from "react";


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

            <div className="scores">

                <div>Best Score: {bestScore}</div>
                <div>Current Score: {score}</div>

            </div>

            <div className="cards-container">

                {pokemons.map((value) => <Card onClick={onClick} key={value}/>)}

            </div>

        </div>

    );

};

export default DisplayCard;