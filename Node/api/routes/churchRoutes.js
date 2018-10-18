module.exports = (app) =>
{
	const churchController = require('../controllers/churchController')

	app.route('/getChurch')
	   .get(churchController.getChurch)

    app.route('/getChurchImage')
	   .get(churchController.getChurchImage)

	app.route('/downloadMP3')
		.get(churchController.downloadMP3)

	app.route('/authenticate')
	   .get(churchController.authenticate)
}