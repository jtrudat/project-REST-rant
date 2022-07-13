let React = require('react')
let Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <img src={data.place.pic}></img>
            <h2>Currently unrated</h2>
            <h3>Description:</h3> 
            <h4>Some of the finest delicacies located in {data.place.city}, {data.place.state}
            </h4>
            <h4>Currently serving: {data.place.cuisines}</h4>
           
            <h4>Comments??</h4>
          </main>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit
          </a> 
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">Delete
            </button>
          </form>
        </Def>
    )
}

module.exports = show
