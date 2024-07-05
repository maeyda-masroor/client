import './A.css';
import './Testinomials.css';

import { useState ,useEffect} from 'react';
import { imgDb ,db } from "../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";
function Acheivements(){
    const [data,setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const getData = async () =>{
        setIsLoading(true)
        const valRef = collection(db,'txtData')
        const dataDb = await getDocs(valRef)
        const allData = dataDb.docs.map(val=>({...val.data(),id:val.id}))
        setData(allData)
        setIsLoading(false);
        console.log(dataDb)
    }

    useEffect(()=>{
        getData()
})
    console.log(data,"datadata")

    return <div class="site-section">
         {isLoading? <center><div class="dot-elastic"></div></center>:null}
        <div class="container">
        <div class="grid-container">
        {
                data.map(value=><div>
                     <img src={value.imgUrl} height='200px' width='200px' /> 
                    <div class= "acheivement-description"><p>{value.txt}</p></div>
                   
                </div>)
        }
    
        </div>

        </div>
        </div>
}
export default Acheivements;