// Do not visit any of these sites that match the following RegEx.  They are considered phishing/scam

var scamWebsitesRegEx = [
	"^https?:\/\/(www\.)?powrnewsu\.click(\/.*)?$", // Fake news site (Russia)
	"^https?:\/\/(www\.)?instagramsecure\.com(\/.*)?$/gm", // Instagram phishing site
	"^https?:\/\/(www\.)?idealassistenci\.com(\/.*)?$/gm", // Accused to be phishing by PhishTank
	"^https?:\/\/(www\.)?idealconecta\.com(\/.*)?$/gm", // Accused to be phishing by PhishTank
	"^https?:\/\/(www\.)?montepio24\.com(\/.*)?$/gm", // Accused to be phishing by PhishTank
	"^https?:\/\/(www\.)?noticiasdeagoraaa\.fr(\/.*)?$/gm", // Accused to be phishing by PhishTank
	"^https?:\/\/(www\.)?plateforme-transports\.com(\/.*)?$/gm", // Accused to be phishing by PhishTank
	"^https?:\/\/(www\.)?tartebakery\.ir(\/.*)?$/gm", // Accused to be phishing by PhishTank
	"^https?:\/\/(www\.)?supportealarez\.online(\/.*)?$/gm", // Accused to be phishing by PhishTank
	"^https?:\/\/(www\.)?alia33\.store(\/.*)?$/gm", // Grow a Garden scam (or at least a Roblox scam or Free robux scam) + notifications request
	"^https?:\/\/(www\.)?alia33\.store\/Roblxo(\/.*)?$/gm", // Grow a Garden scam (or at least a Roblox scam or Free robux scam) + notifications request. Roblox stage
	"^https?:\/\/(www\.)?alia33\.store\/Roblxo\/locker\.html(\/.*)?$/gm", // Grow a Garden scam (or at least a Roblox scam or Free robux scam) + notifications request. Locker stage
	"^https?:\/\/(www\.)?nationalconsumerscenter\.co\.uk(\/.*)?$/gm", // Survey scam (UK)
	"^https?:\/\/(www\.)?e\.mobiapp-games\.net(\/.*)?$/gm", // Phone number scam? (Germany)
	"^https?:\/\/(www\.)?rewardsgiantca\.com(\/.*)?$/gm", // Survey scam (Canada)
	"^https?:\/\/(www\.)?holsatomastrer\.click(\/.*)?$/gm", // Fake news site (Russia)
	"^https?:\/\/(www\.)?nl\.prijzen-winnaar\.com(\/.*)?$/gm", // Fake "Celebrate your mother with a gift" page (Netherlands)
	"^https?:\/\/(www\.)?promotion\.quiztionnaire\.app(\/.*)?$/gm", // Survey scam? (Netherlands)
	"^https?:\/\/(www\.)?app\.quiztionnaire-nl\.com(\/.*)?$/gm", // Survey scam? (Netherlands)
	"^https?:\/\/(www\.)?ru\.ubundle\.app(\/.*)?$/gm", // Phone Number scam (Russia)
	"^https?:\/\/(www\.)?sklinqasi\.com(\/.*)?$/gm", // Survey Scam? (Russia)
	"^https?:\/\/(www\.)?dxv9ab0p31jil\.cloudfront\.net(\/.*)?$/gm", // Phone Number scam (Russia/USA)
	"^https?:\/\/(www\.)?it.adessogratis.com(\/.*)?$/gm", // Survey/Credentials scam? (France)
	"^https?:\/\/(www\.)?addcode\.pages\.dev(\/.*)?$/gm", // Free Robux scam
	"^https?:\/\/(www\.)?addbux25\.pages\.dev(\/.*)?$/gm", // Free Robux scam
]
