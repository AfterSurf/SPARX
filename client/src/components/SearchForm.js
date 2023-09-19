import { useState } from "react";

import  {useQueryNew}  from "../utils/gqlQueries"

// mui: https://mui.com/material-ui/react-button/
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const SearchForm = () => {

    const [name, setName] = useState("")
    
    const { data, loading, error, refetch } = useQueryNew({"name": "A"})

    if (loading) return <h1>Loading...</h1>;
    if (error) return <pre>{error.message}</pre>

    return (
    <div>
        <h1>SEARCH FORM</h1>
        <TextField onChange={(e) => setName(e.target.value)}/>
        <Button> MUI button</Button>
        <button onClick={() => {console.log("search ME! ", name); refetch({"name": name}); console.log("data:",JSON.stringify(data))}}>SEARCH</button>
    </div>
    )
}