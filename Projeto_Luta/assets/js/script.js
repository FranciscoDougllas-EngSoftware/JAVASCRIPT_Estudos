let char = new Knight('Francisco');
let monster = new LittleMonster();

const stage = new Stage(
    char, monster, 
    document.querySelector("#char"),
    document.querySelector("#monster")
);