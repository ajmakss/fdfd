import React from 'react';
import Image from 'next/image';
import classes from '../styles/footer.module.scss'
import discordIcon from '../assets/icons/discord.svg'
import arctIcon from '../assets/icons/arcticons.svg'
import twitterIcon from '../assets/icons/twitter.svg'
import telegramIcon from '../assets/icons/telegram.svg'
import { Typography } from '@mui/material';


const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<footer className={classes.root} >
			<div className={classes.footerRows}>
				<div className={classes.footerRow}>
					<div className={classes.footerColums}>
						<div>
							<div className={classes.footerColum}>
						<div className={classes.logo}>
                		<img src='/img/logo.svg' alt='ambassador program screen'/>
            		</div>
						<Typography className={classes.text} >
								Ambassador Management Board is the unique and
								unified solution for qualitative program management
								and project promotion.
						</Typography>
							<div className={classes.socialMedia}>
							<div className={classes.socialMediaItemWrapper}>
								<a href='https://discord.gg/dgej2jVJE2'rel="nofollow noreferrer" target='_blank' className={classes.socialMediaItem}>
									<Image src={discordIcon} alt='discord'/>
								</a>
							</div>

							<div className={classes.socialMediaItemWrapper}>
								<a href='https://medium.com/@AMB.place' rel="nofollow noreferrer" target='_blank' className={classes.socialMediaItem}>
									<Image src={arctIcon} alt='arctIcon'/>
								</a>
							</div>
						

							<div className={classes.socialMediaItemWrapper}>
								<a href='https://twitter.com/ambplace' rel="nofollow noreferrer" target='_blank' className={classes.socialMediaItem}>
									<Image src={twitterIcon} alt='twitter'/>
								</a>
							</div>

							

							</div>
						</div>
						</div>

						<div className={classes.footerColumWrapper}>
							<div className={classes.footerColum}>
								<div className={classes.footerColumTitle}>
									Platform
								</div>
								<ul className={classes.footerColumLinks}>
									<li><a href='#about-section'>About</a></li>
									<li><a href='#advantage-section'>Advantages</a></li>
									<li><a href='#services-section'>Serices</a></li>
									<li><a href='#team-section'>Team</a></li>
									<li><a href='#faq-section'>FAQ</a></li>
									<li><a href='#contactUs-section'>Contact Us</a></li>
								</ul>
							</div>
							<div className={classes.footerColumMoblie}> 
								<div className={classes.footerColum}>
									<div className={classes.footerColumTitle}>
									Support
									</div>
									<ul className={classes.footerColumLinks}>
									<li><a href="/Privacy">Privacy Policy</a></li>
										<li><a href="/Disclaimer">Disclaimer</a></li>
										
									</ul>
								</div>
								<div className={classes.footerColum}>
									<div className={classes.footerColumTitle}>
									Contact Us
									</div>
									<ul className={classes.footerColumLinks}>
										<li><a href='mailto:mail@amb.place'>mail@amb.place</a></li>
									</ul>
								</div>
							</div>
						</div>

					</div>
				
				</div>
				<div className={classes.socialMediaMobile}>
						<div className={classes.socialMediaItemWrapper}>
								<a href='https://discord.gg/dgej2jVJE2'rel="nofollow noreferrer" target='_blank' className={classes.socialMediaItem}>
									<Image src={discordIcon} alt='discord'/>
								</a>
							</div>

							<div className={classes.socialMediaItemWrapper}>
								<a href='https://medium.com/@AMB.place' rel="nofollow noreferrer" target='_blank' className={classes.socialMediaItem}>
									<Image src={arctIcon} alt='arctIcon'/>
								</a>
							</div>
						

							<div className={classes.socialMediaItemWrapper}>
								<a href='https://twitter.com/ambplace' rel="nofollow noreferrer" target='_blank' className={classes.socialMediaItem}>
									<Image src={twitterIcon} alt='twitter'/>
								</a>
							</div>

							
				</div>
				<div className={classes.footerRow}>
						<span className={classes.footerGrayText}>ⒸAMB.place. All right reserved {year}</span>
						<span className={classes.footerGrayText}>Kyiv, Ukraine</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
