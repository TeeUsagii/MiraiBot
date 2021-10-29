const fs = require("fs");
module.exports.config = {
name: "đàm daddy",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Tee",
	description: "game",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Phạt")==0 || (event.body.indexOf("phạt")==0)) {
		var msg = {
				body: "Bạn quá hư, bạn sẽ bị phạt.",
				attachment: fs.createReadStream(__dirname + `/noprefix/damdaddy.jpg`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}