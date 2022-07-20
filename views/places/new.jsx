let React = require('react')
let Def = require('../default')

function new_form(){
    return(
        <Def>
            <main>
                <h1>Add a new place to the menu</h1>
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control"  id="pic" name="pic"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required></input>
                    </div>
                    <div className="form-group">
                        <label for="founded">Founded Year</label>
                        <input className="form-control" type="number" id="founded" name="founded" defaultValue={new Date().getFullYear()}></input>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Place"></input>
                    <div className="btn btn-primary">
            <a href="/places"><input type="button" value="Go back to the list of places"></input></a>
          </div>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form