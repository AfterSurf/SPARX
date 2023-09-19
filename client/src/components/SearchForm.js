import  {useQueryNew}  from "../utils/gqlQueries"

export const SearchForm = () => {
    
    const { data, loading, error, refetch } = useQueryNew({"name": "A"})

    if (loading) return <h1>Loading...</h1>;
    if (error) return <pre>{error.message}</pre>

    return (
    <div>
        <h1>SEARCH FORM</h1>
        <button onClick={() => {console.log("search ME! "); refetch({"name": "B"}); console.log(JSON.stringify(data))}}>SEARCH</button>
    </div>
    )
}