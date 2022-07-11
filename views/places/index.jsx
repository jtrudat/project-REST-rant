let React = require('react')
let Def = require('../default.jsx')

function index(data){
    let placesFormatted = data.places.map((place)=>{
        return(
            <div className="col-sm-6">
                <h2 className="text-center">{place.name}</h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}></img>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return(
        <Def>
            <main>
                <h1>Places to Rant and Rave about</h1>
                <div className="row">
                {placesFormatted}
                </div>
                <div className="newButton">
            <a href="/places/new"><button className="btn btn-primary">Add a new place to rant and rave about</button></a>
        </div>
            </main>
        </Def>
    )
}

module.exports = index