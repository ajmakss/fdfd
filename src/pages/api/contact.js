const nodemailer = require('nodemailer')
const TelegramBot  = require('node-telegram-bot-api')
require('dotenv').config()

const bot = new TelegramBot(process.env.TOKEN)

export default function handler (req,res) {
	try{
		if(req.method === 'POST'){
			const {name,email,budget,message} = req.body
			bot.sendMessage(process.env.CHAT_ID,
				
			`<b>Имя: </b>${name}
	
			<b>Email: </b>${email}
	
			<b>Бюджет: </b>${budget}
	
			<b>Сообщение: </b>${message}
			`	
			,{parse_mode:'HTML'})
			
			return res.status(200).json({ok:true})
		}
	}catch(error){
		return res.status(500).json({ok:false})
	}
	
}