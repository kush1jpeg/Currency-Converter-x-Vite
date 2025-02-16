import { useState , useEffect } from "react"         //creating a custom hook

function useCurinfo(currency){
    const [data, setdata] = useState({})

    useEffect(() => {
        fetch(`https://api.forexrateapi.com/v1/latest?api_key=6b2e7251d84f23da9c0fdfd610db0aad&base=${currency}`)
         .then((res) => res.json()) 
        .then((res) => setdata(res.rates)) 
        .catch((error) => console.error("Error fetching data:", error)); 
    }, [currency]);
    
    console.log(data);
    return data 
}
export default useCurinfo