export const addUps = [

    {
      id:'1',
      name:'prints',
      upgradePrice: 150,
      
    },

    {
      id:'2',
      name:'weight mattboard',
      upgradePrice: 800,
      
    },
    {
      id:'3',
      name:'metal print',
      upgradePrice: 3500,
     
    },
    {
      id:'4',
      name:'hinged print',
      upgradePrice: 2800,
      
    }
  
   ]

   export function getAddUps(addUpId){
    let matchingAdd

    addUps.forEach((addUp) => {
        if(addUp.id === addUpId)
          {matchingAdd = addUp}
           })
      
       return matchingAdd
       
   }

   export let yourUpgrade 
   
   
   if (!yourUpgrade) 
    yourUpgrade = [{
    addUpId:'1',
    addUpQuantity: 0
  }
      
   ]




   export function getUpgarde(addUpId){
    let matchingYou

    yourUpgrade.forEach((you) => {
        if(you.addUpId === addUpId)
          {matchingYou = you

          }

           });
      
       return matchingYou
       
   }






   