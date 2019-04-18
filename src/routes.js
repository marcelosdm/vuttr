const express = require('express')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

const controllers = require('./app/controllers')

routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

routes.use(authMiddleware)

/**
 * Tools
 */

routes.get('/tools', controllers.ToolController.index)
routes.get('/tools/:id', controllers.ToolController.show)
routes.post('/tools', controllers.ToolController.store)
routes.put('/tools/:id', controllers.ToolController.update)
routes.delete('/tools/:id', controllers.ToolController.destroy)

module.exports = routes
