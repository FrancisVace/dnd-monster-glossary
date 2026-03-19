import {useQuery} from "@apollo/client/react";
import {type GetMonstersGQLQueryVariables, type MonsterGQLItem, MONSTERS_GQL_QUERY} from "../models/MonsterGQLData.ts";
import MonsterCard from "./MonsterCard.tsx";

function MonsterGrid(props: {monsterDetails: GetMonstersGQLQueryVariables, onCardClicked: (id: string) => void}) {

    const {loading, error, data} = useQuery(MONSTERS_GQL_QUERY, {
        variables: props.monsterDetails
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    const safeData = data
    if (safeData === undefined) return <p>An error has occurred.</p>

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            { safeData.monsters.map(
                (monster: MonsterGQLItem) => <div key={monster.name}>
                    <MonsterCard monsterCardInfo={monster} onCardClick={props.onCardClicked} />
                </div>
            ) }
        </div>
    )
}

export default MonsterGrid