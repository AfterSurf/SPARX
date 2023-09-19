import { useQuery, gql } from "@apollo/client";

const query = gql`
    query getSingleNumber($name: String!) {
        number(name: $name) {
        name
        phone
        }
    }
`;

// v: {
//    "name": "A"
// }

export const useQueryNew = (variable) => {
    return  useQuery(query,{variables:variable});
}
