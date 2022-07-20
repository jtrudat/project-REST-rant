let React = require('react')
let Def = require('./default.jsx')

function home(){
    return(
        <Def>
            <main>
                <h1>HOME is where the heart is</h1>
                <div>
                    <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80" alt="veggies"></img>
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
