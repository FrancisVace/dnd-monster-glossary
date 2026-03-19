import {fetchMonster, type Monster} from "../models/MonsterData.ts"
import {useEffect, useState} from "react"
import "../utils/StringUtils.ts"
import AttributeCard from "./AttributeCard.tsx"
import StatBox from "./StatBox.tsx"

function MonsterDetails(props: {id: string, onClose: () => void}) {
    const [monster, setMonster] = useState<Monster | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchMonster(props.id)
            .then((mon) => setMonster(mon))
            .catch((e) => setError(e))
            .finally(() => setLoading(false))
    }, [props.id])

    if (loading) return <h1 className="text text-2xl">Loading...</h1>
    if (error || !monster) return <h1 className="text text-2xl">`Error ${error}`</h1>

    return <div className="gap-8">
        <div className="relative flex items-center justify-center mt-4">
            <span>
                <h1 className="text text-4xl">{monster.name}</h1>
            </span>
            <span className="absolute inset-e-0">
                <button
                    className="btn btn-lg"
                    onClick={props.onClose}
                >X</button>
            </span>
        </div>

        <div className="flex gap-8 p-8">
            <div className="w-96 max-h-96">
                <img
                    src={`https://www.dnd5eapi.co${monster.image}`}
                    alt={`Image of an ${monster.name}`}
                    className="rounded-xl w-full object-cover"/>
            </div>

            <ul className=" flex flex-col justify-around gap-4 bg-accent p-4 rounded-xl">
                <StatBox>
                    <p className="text-accent-content">Size: {monster.size}</p>
                    <p className="text-accent-content">Type: {monster.type.capitalize()}</p>
                    <p className="text-accent-content">Alignment: {monster.alignment.capitalize()}</p>
                </StatBox>
                <StatBox>
                    <p className="text-accent-content">
                        Armour Class: {monster.armor_class[0].value} ({monster.armor_class[0].type.toUpperCase()})
                    </p>
                    <p className="text-accent-content">Hit Points: {monster.hit_points}</p>
                </StatBox>
                <StatBox>
                    <p className="text-accent-content">Challenge Rating: {monster.challenge_rating}</p>
                    <p className="text-accent-content">XP: {monster.xp}</p>
                </StatBox>
            </ul>
        </div>
        <div className="flex justify-center">
            <AttributeCard className="rounded-s-2xl" attributeName="STR" score={monster.strength}/>
            <AttributeCard attributeName="DEX" score={monster.dexterity}/>
            <AttributeCard attributeName="CON" score={monster.constitution}/>
            <AttributeCard attributeName="INT" score={monster.intelligence}/>
            <AttributeCard attributeName="WIS" score={monster.wisdom}/>
            <AttributeCard className="rounded-e-2xl" attributeName="CHA" score={monster.charisma}/>
        </div>
    </div>
}

export default MonsterDetails