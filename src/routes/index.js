const { Router } = require('express')

const usersRoutes = require('./users.routes.js')
const notesRouter = require('./notes.routes.js')


const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/notes', notesRouter)

module.exports = routes