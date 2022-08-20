import { useEffect, useState } from "react"

const useServices=()=>{
    const [services,setServics]=useState([]);
    useEffect(()=>{
        fetch('parts.json')
        .then(res=>res.json())
        .then(data=>setServics(data))
    },[])
    return [services,setServics]
}
export default useServices;