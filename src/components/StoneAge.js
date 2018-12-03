import { Game } from 'boardgame.io/core';

const StoneAge = Game({
  setup: () => ({
    currentCitizens: 8,
    maxCitizens: 12,
    food: 0,

    agrar: {
      currentCitizens: 0,
      maxCitizens: 10,
      foodProductionFactor: 2.0
    },

    factors: {
      foodConsumptionPerCitizen: 1.0
    }
  }),
  moves: {
    addCitizensToAgrar(G, ctx){
      if(G.agrar.currentCitizens < G.agrar.maxCitizens)
        G.agrar.currentCitizens ++;
    },
    removeCitizensFromAgrar(G, ctx){
      if(G.agrar.currentCitizens > 0)
        G.agrar.currentCitizens--;
    },
    calculate(G, ctx){

      // food production
      G.food = G.food + G.agrar.currentCitizens * G.agrar.foodProductionFactor;

      // food consumption
      for(let i = 0; i < G.currentCitizens; i++){
        if(G.food >= G.factors.foodConsumptionPerCitizen){
          G.food = G.food - G.factors.foodConsumptionPerCitizen;
        }else{
          G.currentCitizens = i + 1;
          break;
        }
      }
      
      // add people if food is left
      while(G.food >= 10 && G.currentCitizens <= G.maxCitizens){
        G.food -= 10;
        G.currentCitizens++;
      }

      // don't let food build up indefinitely. Otherwise you could hoard food and build houses later on and BOOM massive citizen rate in one turn.
      if(G.food > 10){
        G.food = 9;
      }
    }
  }
})


export default StoneAge;