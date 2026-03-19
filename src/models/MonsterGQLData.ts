import {gql, type TypedDocumentNode} from "@apollo/client";

export interface MonsterGQLItem {
    __typename: "Monster",
    name: string,
    index: string,
    image: string,
    challenge_rating: number,
    type: string,
}

type GetMonstersGQLQuery = {
    monsters: MonsterGQLItem[]
}

export interface GetMonstersGQLQueryVariables {
    skip: number
    searchTerm: string
}

export const MONSTERS_GQL_QUERY: TypedDocumentNode<
    GetMonstersGQLQuery,
    GetMonstersGQLQueryVariables
> = gql`
    query Monsters($skip: Int, $name: String) {
        monsters(limit: 12, skip: $skip, name: $name) {
            name
            index
            image
            challenge_rating
            type
        }
    }
`