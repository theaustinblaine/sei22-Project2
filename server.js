const express = require('express')
const app = express()
const methodOverride = require('method-override')

/* Step 2
 * 
 * import routers from controllers/
 *
 */
const { songRouter } = require('./controllers/song.js')
const { writerRouter } = require('./controllers/writer.js')


app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(methodOverride('_method'))

/* Step 3.c
 *
 * use the `./public` directory to host static resources such as css and
 * image files 
 */
app.use(express.static(__dirname+"/public"))

app.set('view engine', 'hbs')


/* Step 4
 *
 * add router for the application to use. The first argument is a prefix to all
 * the paths defined in the router.
 */
app.use('/songs', songRouter)
app.use('/writers', writerRouter)

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
