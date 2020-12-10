const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			recipes: [
				{
					description: "FIRST",
					background: "white",
					initial: "white"
				}
			],
			singleRecipe: []
		},

		actions: {
			recipePost(bubu, history) {
				console.log("buburesult", bubu);
				fetch("https://foodblogpost.herokuapp.com/recipes", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(bubu)
				})
					.then(() => getActions().loadSomeData())
					.then(() => history.push("/recipes"))
					.catch(e => console.error("error in add" + e));
			},
			deleteRecipe: (id, history) => {
				fetch("https://foodblogpost.herokuapp.com/recipes" + `${id}`, {
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

			loadSomeData: () => {
				fetch("https://foodblogpost.herokuapp.com/recipes")
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

			// toggleFavorite: person => {
			// 	let store = getStore();
			// 	let index = store.favorites.indexOf(person);
			// 	console.log(index);
			// 	if (index === -1) {
			// 		store.favorites.push(person);
			// 	} else {
			// 		store.favorites.splice(index, 1);
			// 	}
			// },

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
