import { useState, useEffect } from "react";


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};


function Card({ onClick }) {

    const [currentPokemon, setCurrentPokemon] = useState(null);

    async function fetchData() {

        const pokemonIndex = getRandomInt(30) + 1;
    
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`, {mode: "cors"});
            if (!response.ok) {
                throw new Error();
            } else {
                const pokemon = await response.json();
                setCurrentPokemon(pokemon);
            };
        } catch (error) {
            console.log(error);
        }
    
    }

    useEffect( () => {

        fetchData();

    }, []);

    return (

        <>
            {currentPokemon && (

                <button data-name={currentPokemon.name} type="button" onClick={onClick} className={`card ${currentPokemon.types[0].type.name}`}>

                    <img src={currentPokemon.sprites.front_default} alt={`${currentPokemon.name} picture`}/>
                    <h1>{currentPokemon.name}</h1>

                </button>

            )}

            {!currentPokemon && (

            <>

                <h1>Loading...</h1>

            </>

            )}
        
        </>
    
    )
};

export default Card;

