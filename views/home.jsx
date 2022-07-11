let React = require('react')
let Def = require('./default.jsx')

function home(){
    return(
        <Def>
            <main>
                <h1>HOME is where the heart is</h1>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = home
