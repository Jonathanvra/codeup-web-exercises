const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];
const leastThree = users.filter(user => user.languages.length >= 3);
console.log(leastThree);

const string = users.map(user => user.email);
console.log(string);

const totalYears = users.reduce((years, person) => {
	return years + person.yearsOfExperience;
}, 0);
console.log(totalYears);
console.log(totalYears / users.length)

const longestEmail = users.reduce((longEmail, user) =>{
	if (user.email.length >= longEmail.email.length){
		longEmail = user;
	}
	return longEmail;
},{email: ""});
console.log(longestEmail);

const allUsers =users.reduce((nombre, user, index)=>{
	if (index === users.length - 1){
		return nombre + `${user.name}.`;
	} else {
		return nombre + `${user.name}, `;
	}
	// return nombre + user.name;
}, "The users are: ")
console.log(allUsers);