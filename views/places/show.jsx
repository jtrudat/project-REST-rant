let React = require('react')
let Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <img src={data.place.pic}></img>
            <h4>located in {data.place.city}, {data.place.state}
            </h4>
            <h2>Description:</h2>
            <h3>Rating: N/A</h3>
            <h4>Comments??</h4>
            <h4>{data.place.showEstablished()}</h4> 
            <h4>Currently serving: {data.place.cuisines}</h4>       
          </main>
          <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit
          </a> 
          <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">Delete
            </button>
          </form>
        </Def>
    )
}

module.exports = show
