const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			recipes: [],
			favorites: []
		},

		actions: {
			recipePost(bubu, history) {
				console.log("buburesult", bubu);
				fetch("https://3000-f363fa9e-f9c8-47c9-9de0-be5494889094.ws-us02.gitpod.io/recipes", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(bubu)
				})
					.then(() => getActions().loadSomeData())
					.then(() => history.push("/recipes"))
					.catch(e => console.error("error in add" + e));
			},
			deleteRecipe: (id, history) => {
				fetch("https://3000-f363fa9e-f9c8-47c9-9de0-be5494889094.ws-us02.gitpod.io/recipes" + `${id}`, {
					method: "DELETE"
				})
					.then(() => {
						console.log("Pet profile deleted successfully");
						getActions().loadSomeData();
					})
					// .then(() => history.push("/dashboard-b"))
					.catch(function(error) {
						console.log("There was an Error : \n", error);
					});
			},
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
				fetch("https://3000-f363fa9e-f9c8-47c9-9de0-be5494889094.ws-us02.gitpod.io/recipes")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => setStore({ recipes: data }))
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
