import homeController from '../controllers/homeController'
import express from 'express';
const router = express.Router()
let innitWebRoute = (app) => {
    router.get('/', homeController.getHomePage);
    router.post('/create-new-user',homeController.createUser)

    return app.use('/', router)
}
export default innitWebRoute;