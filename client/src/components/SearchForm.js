import { useState, useEffect } from "react";

import { NameCard } from "./NameCard";
import  {useQueryNew}  from "../utils/gqlQueries"

// mui: https://mui.com/material-ui/react-button/
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchForm.css"


export const SearchForm = () => {

    const { data, loading, error, refetch } = useQueryNew("A")
    const [name, setName] = useState("")
    useEffect(() => {
        console.log("rendered SearchForm")
        
    })
    
    

    if (loading) return <h1>Loading...</h1>;
    if (error) return <pre>{error.message}</pre>

    return (
    <div>
        <h1>SEARCH FORM</h1>
        <TextField onChange={(e) => setName(e.target.value)}/>
        <Button onClick={() => {console.log("search ME! ", name); refetch({"name": name}); console.log("data:",JSON.stringify(data))}}> MUI button</Button>
         <div className="cardContainer">
            {data.number.map(element =>{return ( <NameCard element={element}/>)})}
        </div>
    </div>
    )
}