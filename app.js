const wrapper = document.querySelector('.wrapper')
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

const dataFetch = async ()  => {
   try {
       const response = await fetch(baseUrl)
       const responseData = await response.json()
       // console.log(responseData)
       responseData.results.map( async (item)  => {
           try {
               const responseResult = await fetch(item.url)
               const responseData = await responseResult.json()
               console.log(responseData)
               const card = document.createElement('div')
               card.innerHTML = `
                    <h1>${responseData.name}</h1>
                    <img src="${responseData.sprites.other.dream_world.front_default}" alt="${responseData.name}">

               `
               wrapper.append(card)
           }catch (e) {
               console.error(e)
           }

       })
   }catch (e){
       console.error(e)
   }
}
dataFetch()