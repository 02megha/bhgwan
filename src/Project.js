import { useState } from "react";
const EventManagement = ()=>{
const [event , events]  = useState([]);
const [venue , venues]  = useState("");
const [food , services] = useState ("");
const[decoration ,designs] =useState("");
const [shoot ,photoshoot] =useState("");

}
const createProject =()=> {
    if (newprojectitle === "")  return alert.warning ("provide the event title");
    else if (newvenuearea === "") return alert.warning ("provide  the new venue");
    else if (newdecoration === "") return alert.warning("provide the altest decoration ");
    else if (!newshoot) return alert.warning ("provide photoshoot ");

    const newProject ={
        name : newprojectitle,
        area :newvenuearea,
        decoration:newdecoration,
projectStatus :"TO-DO",

    };

    const oldProject =[...Project]
    oldProject.push(newProject);
    setProject(oldProject);
    alert.success("project created sucessfully");
    setnewprojecttitle("");
    setnewvenuearea("")    ;
};
    
    const handlechangestatus = (index,projectStatus)=>{
        let oldProject=[...newProject];
        if (projectstatus === "TO_Do"){
            oldProject[index].projectStatus ="ON_GOING";
        }
        else if (projectStatus ==="ON_GOING"){
            oldProject[index].projectStatus ="COMPLEATED";
}
else if (projectStatus==="COMPLEATED"){ 
    oldProject[index].projectStatus ="TO_Do";   
        
    
} 
const handledeleteproject =(index )=>{
    

}

const getButtonName = (projectStatus)=>{

}

const getColor = (projectStatus)=>{

}
    }