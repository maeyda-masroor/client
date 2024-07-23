import './A.css';
import './Testinomials.css';
import FlipMove from 'react-flip-move';
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
        
        <div class="container">
        {isLoading? <center><div class="dot-elastic"></div></center>:null}
        
        <div class="grid-container">
        <FlipMove easing="cubic-bezier(0, 1, 1, 1)">
        {
                data.map(value=><div>
                  <div><img src={value.imgUrl} height='200px' width='200px' /></div> 
                    <div class= "acheivement-description"><p>{value.txt}</p></div>
                   
                </div>)
        }
    </FlipMove>
        </div>
        
        </div>
        </div>
}
export default Acheivements;