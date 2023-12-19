function distanceFromHqInBlocks(blocks) {
   if (blocks > 42){
return blocks - 42
}
else{
    return  42 - blocks
}



}
 function distanceFromHqInFeet(blocks){
if (blocks < 42){
            return (42 - blocks) * 264
        }
        else{
            return (blocks - 42)  * 264
        }
 }
        function distanceTravelledInFeet(start,destination){
        if (start > destination){
             return (start- destination) *264;
            }
            else {return (destination - start ) *264;
            }

        }
        function calculatesFarePrice(start,destination){
            let feet  = distanceTravelledInFeet(start,destination)
            if (feet < 400 ){
                return (0);
            }

        }
        function calculatesFarePrice(start,destination){
            let feet = distanceTravelledInFeet(start,destination)
            if (feet <= 400){
                return (0)// fare is free for the first 400 feet
            }
            else if (feet>= 401 && feet <=2000) {
                return(feet-400) * .02
                }
 }
        function calculatesFarePrice(start,destination){
            let feet= distanceTravelledInFeet(start,destination)
               if (feet>= 401 && feet <=2000)
               return (2.56) // 'gives customers a free sample'
            if  (feet >= 2500) {
                return "cannot travel that far";
            }               
            else if (feet>=2000) {
                return 25;
}                                                                        
        else if (feet >= 400) {
            return 2.56;
}
         else {
            return(0);
         }
             
              
        }
s
            
       


        
       
        
        
    





 


     
    


