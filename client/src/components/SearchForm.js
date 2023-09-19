import { useQuery, gql } from "@apollo/client";

const query = gql`
    query getSingleNumber($name: String!) {
        number(name: $name) {
        name
        phone
        }
    }
`;

export const SearchForm = () => {
    
    const { data, loading, error, refetch } = useQuery(query,{variables:{
        "name": "A"
      }});



    console.log("data: ", JSON.stringify(data))
    if (loading) return <h1>Loading...</h1>;
    if (error) return <pre>{error.message}</pre>

    return (
    <div>
        <h1>SEARCH FORM</h1>
        <button onClick={() => {console.log("search ME! "); refetch({"name": "B"}); console.log(JSON.stringify(data))}}>SEARCH</button>
    </div>
    )
}