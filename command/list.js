'use strict'
const config = require('../templates')

module.exports = () => {
	if (JSON.stringify(config.tpl) != "{}") {
		for(let k in config.tpl) {
			console.log(`${k}    ${config.tpl[k].description}`)
	     	console.log('\n')
		}
	} else {
		console.log('none template')
	}

     process.exit()
}
