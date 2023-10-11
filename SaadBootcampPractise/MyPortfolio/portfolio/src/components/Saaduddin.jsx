import { useEffect, useState } from "react"
function Saaduddin(){
 
    const [name, setName] = useState([]) 


    useEffect(() => {
        const data = ["S", "Y", "E", "D"];
        setName(data);
      }, []);
  
 
    const nameElements =  name.map((ele, index) => (
            <p className={`name${index}`}>
              {ele}
            </p>
          ));
    
 
    return(
        <>
    <div className="homepage">
            <div className="leftpart">
                
                <p>{nameElements} </p>
            </div>
       <div className="Rightpart">

       </div>
    </div>
    </>
    )
}

export default Saaduddin