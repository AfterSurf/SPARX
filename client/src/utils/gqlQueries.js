import { useQuery, gql } from "@apollo/client";

const query = gql`
    query getSingleNumber($name: String!) {
        number(name: $name) {
        name
        phone
        }
    }
`;

export const useQueryNew = (name) => {
    return  useQuery(query,{variables:{"name":name}});
}
