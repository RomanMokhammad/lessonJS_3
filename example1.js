const travel_1  = { 
    country : "Ukraine" ,
    cost: 500 }

const travel_2  = { 
    country : "Italy" ,
    cost: 1500}

 const travel_3  = { 
    country : "Thailand" ,
     cost: 500}

     let money = 600
     let desiredСountry = "Italy"
   
   

   
   if (desiredСountry == travel_3.country) { let resort = money  >= travel_3.cost 
    ? "congratulations on your trip to Thailand" 
    : money >= 500 
    ? "I can suggest a trip to Ukraine  cost  " + ""+ travel_1.cost
    : "lack of funds" 
   console.log(resort)}

    
    if  (desiredСountry == travel_2.country) {
        let resort = money  >= travel_2.cost 
        ? "congratulations on your trip to Italy" 
        : money >= 1000 
        ? "I can suggest a trip to Thailand  cost  " + ""+ travel_3.cost +"\n" + "or trip to Ukraine cost  " + ""+ travel_1.cost
        : money >= 500 
        ? "I can suggest a trip to Ukraine  cost " + ""+ travel_1.cost
        : "lack of funds" 
        console.log(resort)
    }
   
    else if  (desiredСountry == travel_1.country) {
        let resort = money  >= travel_1.cost 
        ? "congratulations on your trip to Ukraine" 
        :  "lack of funds"
        console.log(resort)
    }
    else{}
   

    

    // if (money >= travel_2.cost   ) {

    //     let resort = "congratulations on your trip to Italy"
    //     console.log (resort)

    // }
    // else {
    //     let resort = "lack of funds"
    
    //     console.log (resort)
    // }

    // console.log (resort)
       