Game

In our game, you can choose a class, level up, cast spells and attack mobs until you die.

# Day 1 of game

I want to be able to level up a character, and increase its stats.

The stats of each character :
Level
Attack
Attack
Magic
Defense
Speed
Health
Mana

In our game, 10 is a very strong stat to start with. 1 is the lowest.
These are the boundries we ar going to define.

Health and mana are different. they have no bounds.

Warlock is a high mana, high magic character that uses pets, but low to mid defense and health

Medic is a high defence and health, but low attack character that uses healing spells. Does not start out with a pet.

Gambler is a high speed, high damage with low defence and mid health, gambler earns money from attacks that can be used to upgrade stats, levels, or healing. starts with the Golden Dagger weapon. Does not start with a pet.

## Game Rules

Our game logic dictates a character's damage is calculated using this algorithm:

    -If a character has an activePet, we take the activePet's damage and add it to the character's magic damage
    -If a character is casting a spell, we take the spell's damage and add it to the character's magic damage
    if a character has niether an activePet, nor a spell, we take their weapon's damage, and add it to the character's attack

## Pet Logic

A character can have an array of pets, but can only have a single active pet. They have to summon the pet.