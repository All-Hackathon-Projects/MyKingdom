const mongoose = require('mongoose')
const Church = mongoose.model('Church')

exports.getChurch = (request, result) =>
{
	const churchID = request.query.churchID
	Church.findOne({churchID: churchID}, (error, church) =>
	{
		if(error) result.send(error)
		result.json(church)
	})
}

exports.getChurchImage = (request, result) =>
{
	const churchID = request.query.churchID
	Church.findOne({churchID: churchID}, (error, church) =>
	{
		if(error) result.send(error)
		result.sendFile('res/img/church/' + church.picture, {root: '.'})
	})
}

exports.authenticate = (request, result) =>
{
	const churchID = request.query.churchID
	Church.findOne({churchID: churchID}, (error, church) =>
	{
		if(error || church == undefined) result.send(404)
		else result.send(200)
	})
}

exports.downloadMP3 = (request, result) =>
{
	const filename = request.query.filename

	result.sendFile('res/mp3/sermon/' + filename, {root: '.'})
}

exports.addChurch = (request, result) =>
{
	/*const AnglicanChurch =
	{
		churchID: 'rxve',
		about:
		{
			location: '1408 W Huron Street',
			hours:
			{
				sunday: '5 AM - 9 PM',
				monday: '5 AM - 9 PM',
				tuesday: '5 AM - 9 PM',
				wednesday: '5 AM - 9 PM',
				thursday: '5 AM - 9 PM',
				friday: '5 AM - 9 PM',
				saturday: '5 AM - 9 PM'
			},
			description: 'Sample descrption.'
		},
		clergy: 
		[
			{
				name: 'Pastor Alex',
				picture: 'sample_url',
				phone: '8478345233',
				email: 'ivanfranco@gmail.com'
			},
			{
				name: 'Pastor Jerry',
				picture: 'sample_url',
				phone: '2248345233',
				email: 'notivanfranco@gmail.com'
			}
		],
		donations: [],
		bible:
		{
			verseOfTheDay: "Sample text"
		},
		sermons: 
		[
			{
				date: '05-23-2000',
				video: 'sample_url'
			}
		],
		events:
		[
			{
				title: 'Jerry goes to McDonalds',
				organizer: 'Jerry Zhou',
				location: '123 Anywhere Lane',
				duration: '3 hours',
				volunteersNeeded: 23,
				volunteers: []
			}
		]
	}

	const c = new Church(AnglicanChurch)

	c.save((error, task) =>
	{
		if(error) result.send(error)
		result.json(task)
	})*/
}

