let React = require('react')
let Def = require('./default.jsx')

function error404(){
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page just yet!</p>
            </main>
        </Def>
    )
}

module.exports = error404