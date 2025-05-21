// Do not visit any of these sites that match the following RegEx.  They are considered phishing/scam

var scamWebsitesRegEx = [
	"^https?:\/\/(www\.)?powrnewsu\.click(\/.*)?$", // Fake news site
	"^https?:\/\/(www\.)?instagramsecure\.com(\/.*)?$/gm", // Instagram phishing site
	"^https?:\/\/(www\.)?idealassistenci\.com(\/.*)?$/gm", // Accused to be phishing by PhishTank
	"^https?:\/\/(www\.)?idealconecta\.com(\/.*)?$/gm", // Accused to be phishing by PhishTank
	"^https?:\/\/(www\.)?montepio24\.com(\/.*)?$/gm", // Accused to be phishing by PhishTank
	"^https?:\/\/(www\.)?noticiasdeagoraaa\.fr(\/.*)?$/gm", // Accused to be phishing by PhishTank
	"^https?:\/\/(www\.)?plateforme-transports\.com(\/.*)?$/gm", // Accused to be phishing by PhishTank
	"^https?:\/\/(www\.)?tartebakery\.ir(\/.*)?$/gm", // Accused to be phishing by PhishTank
	"^https?:\/\/(www\.)?supportealarez\.online(\/.*)?$/gm", // Accused to be phishing by PhishTank
]
