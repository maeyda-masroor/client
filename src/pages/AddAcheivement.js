import React from "react";
import { useState } from "react";
import { imgDb ,db } from "../config/firebase";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";

function AddAcheivement(){
    const [txt,settext] = useState("");
    const [img,setimg]= useState("");
    const handleupload=(e)=>{
        const imgs = ref(imgDb,`Imgs/${v4()}`)
        console.log(e.target.files[0]);
        uploadBytes(imgs,e.target.files[0]).then(data=>{
            console.log(data,"imgs")
            getDownloadURL(data.ref).then(val=>{
                setimg(val)
            })
        })
    }
    const handleClick = async () =>{
        const valRef = collection(db,'txtData')
        await addDoc(valRef,{txt:txt,imgUrl:img})
        alert("Data added successfully")
}
    return (
        <div>
            <input onChange={(e)=>settext(e.target.value)}/>
            <input type="file"onChange={(e)=>handleupload(e)}/>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}
export default AddAcheivement;