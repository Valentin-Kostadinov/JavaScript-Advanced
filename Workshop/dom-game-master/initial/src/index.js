// globals e

function createCharacter(name, hp, dmg) {
    const character = {
        alive: true,
        name,
        maxHp: hp,
        hp,
        dmg,
        attack,
        takeDamage
    };

    return character;

    function attack(target) {
        console.log(`${character.name} attacks ${target.name} for ${character.dmg}`);
        target.takeDamage(character.dmg);
    }

    function takeDamage(incomingDmg) {
        console.log(`${character.name} took ${incomingDmg} damage`);
        character.hp = Math.max(character.hp - incomingDmg, 0);
        if (character.hp == 0) {
            character.alive = false;
        }
    }

    function createCharacterCard(character) {
        const element = e('article', {className: 'character-card'},
            e('div', {className: 'portrait'}), e('img', {src: 'assets/player.png'}), 
            e('div', {className: 'description'}, e('h3', {}, character.name)),
            e('ul', {className: 'stats'},
                e('li', {}, 'HP: ', e('span', {}, `${character.hp} / ${character.maxHp}`))
            ),
            e('li', {}, 'Damage: ', e('span', {}, character.dmg)),


        )

        return element;
    }

}

const player = createCharacter('Player', 100, 25);
const enemy = createCharacter('Bad Guy', 50, 10);

const card1 = createCharacterCard(player);
const card2 = createCharacterCard(enemy);

document.getElementById('player').appendChild(card1);
document.getElementById('enemies').appendChild(card2);

window.game = {
    player,
    enemy
}