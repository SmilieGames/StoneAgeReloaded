
// calculate the current citizens from the current game state
export function getCurrentCitizens(G){

  let currentCitizens = 0;

  for(var key in G){
    if(G[key].currentCitizens != null){
      currentCitizens += G[key].currentCitizens
    }
  }

  return currentCitizens;
}