let React = require('react')
let Def = require('./default.jsx')

function error404(){
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page just yet!</p>
                <div>
                    <img src="images/nogo.jpg" alt="nogo"></img>
                </div>
                <div>
                    <h3>Photo by <a href="https://unsplash.com/@mattseymour?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Matt Seymour</a> on <a href="https://unsplash.com/s/photos/no-entry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></h3>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404