let React = require('react')
let Def = require('./default.jsx')

function home(){
    return(
        <Def>
            <main>
                <h1>HOME is where the heart is</h1>
                <div>
                    <img src="images/veggies.jpg" alt="pizza"></img>
                </div>
                <div>
                <h3>Photo by <a href="https://unsplash.com/es/@danielcgold?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dan Gold</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></h3>
                </div>
                <a href="/places">
                    <div className="text-center">
                    <button className="btn-primary">Explore the places to eat</button>
                    </div>
                </a>

            </main>
        </Def>
    )
}

module.exports = home
