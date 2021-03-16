// state_capitals = [{ state: 'Maine', capital: 'Augusta' }]
// capital(state_capitals)[0] // returns "The capital of Maine is Augusta"

// country_capitals = [{ 'country': 'Spain', 'capital': 'Madrid' }]
// capital(country_capitals)[0]  // returns "The capital of Spain is Madrid"

// mixed_capitals: [{ "state": 'Maine', capital: 'Augusta' }, { country: 'Spain', "capital": "Madrid" }]
// capital(mixed_capitals)[1] // returns "The capital of Spain is Madrid"

// let arr = [{ "state": 'Maine', capital: 'Augusta' }, { country: 'Spain', "capital": "Madrid" }]
// // let obj = { country: 'Maine', capital: 'Augusta' };

// // let str = `The capital of ${obj.state || obj.country} is ${obj.capital}`


// for (let index = 0; index < arr.length; index++) {
// 	let str = `The capital of ${arr[index].state || arr[index].country} is ${arr[index].capital}`

// 	arr[index] = str

// }


// console.log(arr);




function capital(capitals) {

	//   return capitals.map(item => `The capital of ${item['state'] || item['country']} is ${item['capital']}`)

	for (let index = 0; index < capitals.length; index++) {
		let str = `The capital of ${capitals[index]['state'] || capitals[index]['country']} is ${capitals[index]['capital']}`

		capitals[index] = str

	}

	return capitals
}


