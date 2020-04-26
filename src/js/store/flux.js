const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
			peopleImages: [
				{
					name: "Luke Skywalker",
					urlImg:
						"https://media.gettyimages.com/photos/studio-headshot-of-actor-mark-hamill-undated-photograph-picture-id640269745?s=2048x2048"
				}
			]
		},

		actions: {
			// Use getActions to call a function within a fuction
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
