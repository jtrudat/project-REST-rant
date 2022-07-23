let React = require('react')
let Def = require('../default')

function show (data) {
    let comments = (
      <h3 className="inactive">
        No comments yet
      </h3>
    )
    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! :(' : 'Rave! :)'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    return (
        <Def>
          <main>
            <div className='row'>
            <h1>{data.place.name}</h1>
            <img src={data.place.pic}></img>
            <h4>located in {data.place.city}, {data.place.state}
            </h4>
            <h2>Description:</h2>
            <h4>{data.place.showEstablished()}</h4> 
            <h4>Currently serving: {data.place.cuisines}</h4>
            <h3>Rating: N/A</h3>
            </div>
            <h4>Comments below</h4>
            {comments}       
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
