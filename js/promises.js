"use strict";
(() => {
	const getRecentCommit = (username) => {
		fetch(`http://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${GH_KEY}`}})
			.then(resp => {
				return resp.json();
			}) .then(events => {
				let eventTypes = events.map(event => event.type);
				let lastCommit =eventTypes.indexOf("PushEvent");
				console.log(events[lastCommit].created_at);
		});
	}
	getRecentCommit("jonathanvra")
})();

// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
