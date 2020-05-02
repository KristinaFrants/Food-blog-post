const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			recipes: [],
			vehImages: [
				{
					name: "Sand Crawler",
					urlImg: "https://i.pinimg.com/originals/f2/7c/8b/f27c8b2e228ae33fc2eab2df58d506e6.jpg"
				},
				{
					name: "T-16 skyhopper",
					urlImg: "https://media.moddb.com/cache/images/mods/1/36/35029/thumb_620x2000/Skyhopper.jpg"
				},
				{
					name: "X-34 landspeeder",
					urlImg:
						"https://squir.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/7/47948.jpg"
				},
				{
					name: "TIE/LN starfighter",
					urlImg:
						"https://cdna.artstation.com/p/assets/images/images/002/488/170/large/bruno-parillo-screenshot135.jpg"
				},
				{
					name: "Snowspeeder",
					urlImg: "https://i.pinimg.com/originals/13/1b/0d/131b0d6360800d68c41cb469f9e0e504.jpg"
				},
				{
					name: "TIE bomber",
					urlImg: "https://cdn.hipwallpaper.com/i/46/81/lpOKd9.png"
				},
				{
					name: "AT-AT",
					urlImg: "https://i.pinimg.com/originals/20/04/ca/2004caf55a4de767be4c18715c52b7bc.jpg"
				},
				{
					name: "AT-ST",
					urlImg: "https://cdn.hipwallpaper.com/i/28/44/0w5SFt.jpg"
				},
				{
					name: "Storm IV Twin-Pod cloud car",
					urlImg:
						"https://cdna.artstation.com/p/assets/images/images/009/354/520/large/jay-machado-cloudcar-0003.jpg"
				},
				{
					name: "Sail barge",
					urlImg:
						"https://lumiere-a.akamaihd.net/v1/images/the-khetanna_d1d5b294.jpeg?region=0%2C160%2C1560%2C879&width=768"
				},
				{
					name: "",
					urlImg: ""
				}
			],
			favorites: []
		},

		actions: {
			// getCorrectImage: itemObject => {
			// 	// birth_year - person
			// 	// climate - planet
			// 	// crew - vehicles
			// 	let itemType = "";

			// 	if (itemObject.hasOwnProperty("crew")) {
			// 		itemType = "vehImages";
			// 	} else if (itemObject.hasOwnProperty("climate")) {
			// 		itemType = "planetImages";
			// 	} else {
			// 		itemType = "peopleImages";
			// 	}

			// 	// look @ itemObject to see which property it contains
			// 	let store = getStore();
			// 	let image = store[itemType].filter(item => itemObject.name === item.name)[0].urlImg;
			// 	return image;
			// 	// Then, we need to loop the correct array in the store for the images
			// },
			// // Use getActions to call a function within a fuction
			loadSomeData: () => {
				fetch("https://swapi.dev/api/people/")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => setStore({ people: data.results }))
					.catch(function(error) {
						console.log("There was na Error: \n", error);
					});

				fetch("https://swapi.dev/api/planets/")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => setStore({ planets: data.results }))
					.catch(function(error) {
						console.log("error :\n", error);
					});

				fetch("https://swapi.dev/api/vehicles/")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => setStore({ vehicles: data.results }))
					.catch(function(error) {
						console.log("error :\n", error);
					});

				fetch("https://tasty.p.rapidapi.com/recipes/list?tags=under_30_minutes&from=0&sizes=20", {
					method: "GET",
					headers: {
						"x-rapidapi-host": "tasty.p.rapidapi.com",
						"x-rapidapi-key": "baeda6d0dfmsh4caffbfa08c8fe2p11d85ajsnffdca706dfc5"
					}
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => setStore({ recipes: data.results }))
					.catch(function(error) {
						console.log("error :\n", error);
					});
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			toggleFavorite: person => {
				let store = getStore();
				let index = store.favorites.indexOf(person);
				console.log(index);
				if (index === -1) {
					store.favorites.push(person);
				} else {
					store.favorites.splice(index, 1);
				}
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
