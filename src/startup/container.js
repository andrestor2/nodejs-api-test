const { createContainer, asClass, asValue, asFunction } = require("awilix");

//Configs
const config = require('../config');
const server = require('./index');

// services
const { HomeService, UserService, IdeaService, CommentService } = require('../services');

// controllers
const { HomeController, IdeaController, UserController, CommentController } = require('../controllers/index');

// Routers
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

// Models
const { User, Comment, Idea } = require('../models/index');

//Repositories
const { UserRepository, IdeaRepository, CommentRepository } = require('../repositories/index')

const container = createContainer();

container
    .register({
        server: asClass(server).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        HomeService: asClass(HomeService).singleton(),
        UserService: asClass(UserService).singleton(),
        IdeaService: asClass(IdeaService).singleton(),
        CommentService: asClass(CommentService).singleton()
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton(),
        CommentController: asClass(CommentController.bind(CommentController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton()
    })
    .register({
        User: asValue(User),
        Idea: asValue(Idea),
        Comment: asValue(Comment)
    })
    .register({
        UserRepository: asClass(UserRepository).singleton(),
        IdeaRepository: asClass(IdeaRepository).singleton(),
        CommentRepository: asClass(CommentRepository).singleton()
    });

module.exports = container;