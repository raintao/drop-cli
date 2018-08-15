'use strict'
const config = require('../templates')
const chalk = require('chalk')


module.exports = () => {
	if (JSON.stringify(config.tpl) != "{}") {
		console.log('\n Available official templates:\n')
		for(let k in config.tpl) {
			console.log(` ${chalk.yellow('★')}  ${chalk.blue(k) }  -  ${config.tpl[k].description}`)
		}
		console.log('\n')
	} else {
		console.log('Unavailable template')
	}

     process.exit()
}
