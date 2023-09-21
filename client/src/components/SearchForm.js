import { useState, useEffect } from "react";

import { NameCard } from "./NameCard";
import  {useQueryNew}  from "../utils/gqlQueries"

// mui: https://mui.com/material-ui/react-button/
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchForm.css"


export const SearchForm = () => {

    const { data, loading, error, refetch } = useQueryNew("")
    const [name, setName] = useState("")
    const [stateData, setStateData] = useState([])
    const [valid, setValid] = useState(false);


    const handleValidation = (e) => {
      const reg = new RegExp("[a-z]");
      setValid(reg.test(e.target.value));
    };

    useEffect(() => {
        console.log("rendered SearchForm: ", data?.number.length, stateData)
    },[data])
    
    useEffect(() => {}, [])

    if (loading) return <h1>Loading...</h1>;
    if (error) return <pre>{error.message}</pre>

    return (
    <div className="grid">
        <div >
            <h1 className="title">SEARCH FOR PHONE</h1>
            <h4 className="phoneMagic">by <span className="brand">PhoneMagic</span></h4>
            <TextField onChange={async (e) => {
                handleValidation(e); 
                // setName(e.target.value); 
                await refetch({"name": e.target.value}).then(data =>{ console.log("refetched Data: ", data); setStateData(data)}); }} 
            error={!valid} helperText={valid? "" : "Incorrect entry."}/>
            {/* <Button onClick={() => {console.log("search ME! ", name); refetch({"name": name}); console.log("data:",JSON.stringify(data))}}> MUI button</Button> */}
        </div>
       <div className="cardContainer">
            {stateData?.map(element =>{return ( <NameCard element={element}/>)})}
        </div>
    </div>
    )
}