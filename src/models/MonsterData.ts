interface ArmorClass {
    type: string
    value: number
}

interface Speed {
    walk?: string
    climb?: string
    fly?: string
    swim?: string
    burrow?: string
}

interface Senses {
    passive_perception: number
    blindsight?: string
    darkvision?: string
    tremorsense?: string
    truesight?: string
}

export interface Monster {
    index: string
    name: string
    size: string
    type: string
    alignment: string
    armor_class: ArmorClass[]
    hit_points: number
    speed: Speed
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
    senses: Senses
    languages: string
    challenge_rating: number
    xp: number
    image?: string
}

export async function fetchMonster(index: string): Promise<Monster> {
    const response = await fetch(`https://www.dnd5eapi.co/api/2014/monsters/${index}`)

    if (!response.ok) {
        throw new Error(`Failed to fetch monster: ${response.status} ${response.statusText}`)
    }

    return await response.json() as Promise<Monster>
}