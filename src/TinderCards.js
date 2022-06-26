import React from 'react'
import "./TinderCards.css"
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people, setPeople] = useSate ([
        {
            name:'Elon Musk',
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/220px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
        }
   
    {
        name:'Jeff Bezos',
        url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg"
    }
]);

const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
};
const outOFFrame = (name) => {
    console.log(name + " left the screen!");
};
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map((person)=>(
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => outOfFrame(character.name)}>
                    <div
                    style={{backgroundImage: "url(" + person.url +")"}}
                    className="card">

                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards