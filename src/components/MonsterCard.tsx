import type {MonsterGQLItem} from "../models/MonsterGQLData.ts";


function MonsterCard(props: {monsterCardInfo: MonsterGQLItem, onCardClick: (id: string) => void}) {
    const monster = props.monsterCardInfo
    return <div className="card bg-secondary w-64 shadow-sm m-2"
                onClick={() => props.onCardClick(monster.index)}>
        <figure className="px-10 pt-10">
            <img
                src={`https://www.dnd5eapi.co${monster.image}`}
                alt={`Image of an ${monster.name}`}
                className="rounded-xl"/>
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title text-secondary-content">{monster.name}</h2>
            <p className="card-text">Type: {monster.type.capitalize()}</p>
            <p className="card-text">Challenge Rating: {monster.challenge_rating}</p>
        </div>
    </div>
}

export default MonsterCard