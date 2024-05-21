const key = "040ae734b6cb80c1dd0c4842dfed2c8e"
const id = "d4a2d291"
export async function fetchRecipes (filter){
    const {query, limit} = filter;
    

    const url = `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}&from=0&to=${limit}&`;


    const response = await fetch(url)

    const data = await response.json();

    return data?.hits;
}

export async function fetchRecipe(id){
const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=d4a2d291&app_key=040ae734b6cb80c1dd0c4842dfed2c8e`

const response = await fetch(url)

const data = await response.json();

return data[0];
}