let React = require('react')
function Def (html){
    return(
        <html>
            <head>
                <title>TITLEindex</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def