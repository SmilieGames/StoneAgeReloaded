
/**
 * Define all technologies that can be bought.
 * Each technology has an active state, a technology cost and a list of techs that have to be active first.
 */

export const technologies = {

  gathering: {
    active: false,
    cost: 0,
    requirements: []
  },
  plants: {
    active: false,
    cost: 100,
    requirements: ['gathering']
  },
  advancedGathering: {
    active: false,
    cost: 200,
    requirements: ['plants']
  }  
}
      

export const TechMoves = {
  unlockTechnology(G, ctx, tech){
    G.technologies[tech].active = true;
  }

};
