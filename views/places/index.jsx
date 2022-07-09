let React = require('react')
let Def = require('../default.jsx')

function index(data){
    let placesFormatted = data.places.map((place)=>{
        return(
            <div>
                <h2>{place.name}</h2>
                <h2>{place.city}</h2>
                <img src={place.pic} alt={place.name}></img>
            </div>
        )
    })
    return(
        <Def>
            <main>
                <h1>Places index page</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = index