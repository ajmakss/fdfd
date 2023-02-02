const nodemailer = require('nodemailer')
require('dotenv').config()
const TelegramBot  = require('node-telegram-bot-api')

const bot = new TelegramBot(process.env.TOKEN)

export default function handler (req,res) {
	try{
		if(req.method === 'POST'){
			const {email} = req.body
			
			const transporter = nodemailer.createTransport({
				service:'gmail',
				auth:{
					user: process.env.EMAIL,
					pass: process.env.PASSWORD
				}
			})
			
			const mailOptions = {
				from:process.env.EMAIL,
				to:email,
				subject:'AMB subscribe',
				text:'You have successfully subscribed to AMB news and updates'
			}
			
			transporter.sendMail(mailOptions,(error) => {
				if(!error){
					bot.sendMessage(process.env.CHAT_ID,email)
					
					return res.status(200).json({ok:true})
				}else{
					return res.status(500).json({ok:false})
				}
			})

		}
	}catch(error){
		return res.status(500).json({ok:false,error})
	}

}


