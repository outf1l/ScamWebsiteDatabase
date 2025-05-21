var scamWebsitesRegEx = [
	"^https?:\/\/(www\.)?powrnewsu\.click(\/.*)?$", // Fake news site
	"^https?:\/\/(www\.)?instagramsecure\.com(\/.*)?$/gm", // Instagram phishing site
	"^https?:\/\/(www\.)?idealassistenci\.com(\/.*)?$/gm", // Accused to be phishing by PhishTank
	"^https?:\/\/(www\.)?idealconecta\.com(\/.*)?$/gm", // Accused to be phishing by PhishTank
	"^https?:\/\/(www\.)?montepio24\.com(\/.*)?$/gm", // Accused to be phishing by PhishTank
	"^https?:\/\/(www\.)?noticiasdeagoraaa\.fr(\/.*)?$/gm", // Accused to be phishing by PhishTank
	"^https?:\/\/(www\.)?plateforme-transports\.com(\/.*)?$/gm", // Accused to be phishing by PhishTank
]

// Function part
var url = window.location.href;
var isScam = scamWebsitesRegEx.some(pattern => new RegExp(pattern).test(url));

if (isScam) {
    alert("Scam site detected!");
}
