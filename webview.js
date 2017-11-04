// import path from 'path';
module.exports = (Franz) => {
	const getMessages = function getMessages() {
		// get all message badges
		const allBadges = document.querySelectorAll('.activity-indicator');
		let directCount = 0, indirectCount = 0;

		// get unread direct messages by tring to read the badge values
		allBadges.forEach((item) => {
			if (item.hasAttribute("data-count")) {
				// Count for DMs should be in the data-count attribute
				directCount += Math.max(1, +(item.getAttribute("data-count")));
			} else {
				// this will be the case for indirect messages
				indirectCount++;
			}
		});

		// set Franz badge
		Franz.setBadge(directCount, indirectCount);
	};
	// check for new messages every second and update Franz badge
	Franz.loop(getMessages);

	// inject franz.css stylesheet
	// Franz.injectCSS(path.join(__dirname, 'service.css'));
};
