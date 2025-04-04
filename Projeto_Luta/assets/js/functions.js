const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    strength: 0,
    defense: 0
}

const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name: name,
        life: 100,
        maxLife: 100,
        strength: 10,
        defense: 5
    }
}

const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name: name,
        life: 80,
        maxLife: 80,
        strength: 5,
        defense: 2
    }
}