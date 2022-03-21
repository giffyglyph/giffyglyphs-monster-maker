\contentBegin { "class": "page--mm-the-sidekick", "header": "fairy", "bg": "pages/text/bg-glyph.png" }

# The Sidekick

Not every monster is your enemy. With the right actions and the right incentive, some can become trusted allies (if only temporarily) and fight by your side—some may even join the party. But how do you build and balance these allies?

This chapter introduces _sidekicks_ and how to use them in your combat encounters.

\exampleBegin

"I ain't afraid of one elf," sneered the thief as he pulled a dagger. Clanda smiled and snapped her fingers. Four hired bodyguards slid out from the shadows to flank the thief. "How about _five_ elves?" she asked.

\exampleEnd

## Sidekicks

A _sidekick_ is a special type of combatant that's designed to fight alongside (or even in place of) regular player characters. These are creatures that assist, protect, and ally with the party—henchmen, bodyguards, aides, squires, named NPCs, friendly monsters, etc.

There are four basic categories of sidekick: hirelings, players, champions, and powerhouses.

\panelBegin { "type": "table", "title": "Sidekick Categories" }

|Type|Description|
|---|---|
|Hireling|An ally hired to be in your service or assist the party in the some fashion (i.e. a minion).|
|Adept|A competent ally comparable to a traditional player character (i.e. a grunt).|
|Champion|A notable ally with potent powers and abilities (i.e. an elite).|
|Powerhouse|A fearsome monster that fights in your favor (ie. a paragon).|

\panelEnd

\columnbreak

<div data-blueprint="scaler">
---
name: Krazak, Berserker Barbarian
type: monster
portrait: dwarf-helmet.svg
size:
  primary: medium
category:
  primary: humanoid
  secondary: dwarf
combat:
  level: 9
  rank: grunt
  role: striker
  subrole: butcher
abilityModifiers:
  ranking:
    - str
    - con
    - cha
    - wis
    - dex
    - int
hitDice:
  maximum: "[level]"
  size: 10
attack:
  distance:
    range: 30
skills:
  athletics: trained
  intimidation: trained
movement:
  speeds:
    walk:
      baseSpeedPercentage: 100
awareness:
  senses:
    darkvision: 60
languages:
  - common
  - dwarvish
damageResistances:
  - poison
items:
  - greataxe
features:
  -
    name: Dwarven Resilience
    rarity: common
    description: You have advantage on saving throws against poison.
  -
    name: Rage
    rarity: rare
    activation:
      type: free
      quantity: 1
    description: You have advantage on Strength checks and Strength saving throws. In addition, you have resistance to bludgeoning, piercing, and slashing damage. This effect ends after one minute.
    uses:
      type: charges
      charges:
        maximum: 4
        period: lr
  -
    name: Greataxe
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: mwak
      attack:
        defence: ac
        attribute: str
      area: reach 5 ft.
      targets: one target
      onHit: "[damage, d12|keepStatic] slashing damage"
  -
    name: Cleave
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: mwak
      attack:
        defence: ac
        attribute: str
      area: reach 5 ft.
      targets: two targets
      onHit: "[round(damage * 0.5), d12|keepStatic] slashing damage"
  -
    name: Iron Grip
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: mwak
      attack:
        defence: ac
        attribute: str
      area: reach 5 ft.
      targets: one creature
      onHit: "the target is grappled by you."
  -
    name: Headbutt
    rarity: uncommon
    activation:
      type: action
      quantity: 1
    activity:
      type: mwak
      attack:
        defence: ac
        attribute: str
      area: reach 5 ft.
      targets: one creature
      onHit: "[damage, d8|keepStatic] bludgeoning damage and the target is knocked prone (save ends, DC [attackDcStr] CON)."
    uses:
      type: charges
      charges:
        maximum: 1
        period: sr
  -
    name: Grudge Breaker
    rarity: rare
    activation:
      type: action
      quantity: 1
    activity:
      type: mwak
      attack:
        defence: ac
        attribute: str
      area: reach 5 ft.
      targets: one creature
      onHit: "[round(damage * 2), d12|keepStatic] slashing damage."
    uses:
      type: charges
      charges:
        maximum: 1
        period: lr
</div>

\contentEnd

\contentBegin { "class": "page--mm-the-sidekick" }

### The Hireling { "index": "A" }

Hirelings are lesser aides and assistants—allies that can help the party and deal some damage, but can't endure much punishment in return. To make a hireling, start with a _minion_.

\exampleBegin

* A sorceress hires four bodyguards to help keep her safe in the lawless city of Old Riftin.
* A group of adventurers, preparing for travel, hire two acolytes to help administer their wounds.
* When ambushed by goblin wolfriders, a beastmaster convinces four wolves to turn against their handlers.


\exampleEnd

### The Adept { "index": "B" }

Adepts are competent allies and capable fighters, able to stand shoulder-to-shoulder with traditional PCs. To make an adept, start with a _grunt_.

\exampleBegin

* A lone fighter hires an adept wizard and cleric to join with them in tackling a dungeon.
* A new player starts a game with an adept to help learn the ropes before making a full character.
* When a character suddenly dies, the player decides to play as an adept for the rest of the session.

\exampleEnd

### The Champion { "index": "C" }

Champions are dangerous enemies but make powerful allies. These are notable monsters and NPCs—creatures who hurt and can take harm. To make a champion, start with an _elite_.

\exampleBegin

* The party convinces an old hero to come out of retirement for one last battle.
* A wild-eyed artificer with advanced, arcane weapons helps the party break into a dragon's lair.
* The warlock speaks a secret word of eldritch power and takes command of a gibbering abomination.

\exampleEnd

### The Powerhouse { "index": "D" }

Powerhouses are a sight to behold on the battlefield, tackling multiple foes single-handed. These are your most valuable allies—if you can find a way to keep them that way. To make a powerhouse, start with a _paragon_.

\exampleBegin

* A priestess calls upon her deity and is transformed in a radiant avatar to help battle the undead.
* To save the city from a tarrasque, the party fight alongside a powerful red dragon and a mighty lich.
* A druid awakens the oldest treant to help save the forest from fire elementals.

\exampleEnd

\columnbreak

## Making a Sidekick

You can turn any scaling monster into a sidekick with these two basic steps:

### Add some Hit Dice { "index": 1 }

Like most player characters, sidekicks have an opportunity to mend their wounds. Add some hit dice based on your sidekick's combat rank and role:

\panelBegin { "type": "table", "title": "Maximum Hit Dice" }

|Combat Role|Hit Dice|
|---|---|
|Minion|1 per 4 levels|
|Grunt|1 per level|
|Elite|2 per level|
|Paragon|1 per threat per level|

\panelEnd

\panelBegin { "type": "table", "title": "Hit Die Size" }

|Combat Rank|Hit Die|
|---|:-:|
|Controller|d8|
|Defender|d8|
|Lurker|d6|

|Combat Rank|Hit Die|
|---|:-:|
|Striker|d10|
|Skirmisher|d6|
|Supporter|d10|

\panelEnd

\exampleBegin

The GM wants to turn an orc soldier (5th-level grunt, defender) into a sidekick. The orc gains 5 × d8 hit dice.

\exampleEnd

### Choose a Class (Optional) { "index": 2 }

If you want your sidekick to emulate a traditional 5th Edition class, choose a class package.

Some features can only be used a limited number of times; if a feature specifies "PB/lr", you can use it a number of times equal to your proficiency bonus.

\panelBegin { "title": "Artificer" }

* **Saving Throws:** Constitution, Intelligence.
* **Skills:** Choose two from Arcana, History, Investigation, Medicine, Nature, Perception, Sleight of Hand.
* **Imbue Item:** (Action, Rare (PB/lr)) You can touch a weapon or piece of armor to imbue it with +1 AC or +1 attack bonus for up to 1 hour. While imbued, the item counts as magical.

\panelEnd

\panelBegin { "title": "Barbarian" }

* **Saving Throws:** Strength, Constitution.
* **Skills:** Choose two from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival.
* **Rage:** (Free, Rare (PB/lr)) You have advantage on Strength checks and Strength saving throws. In addition, you have resistance to bludgeoning, piercing, and slashing damage. This effect ends after one minute.

\panelEnd

\contentEnd

\contentBegin { "class": "page--mm-the-sidekick" }

\panelBegin { "title": "Bard" }

* **Saving Throws:** Dexterity, Charisma.
* **Skills:** Choose any three.
* **Inspiring Word:** (Bonus Action, Rare (PB/lr)) Choose one ally within 60 ft. of you. Once within the next 10 minutes, the ally can add your proficiency bonus to one ability check, attack roll, or saving throw it makes.

\panelEnd

\panelBegin { "title": "Cleric" }

* **Saving Throws:** Wisdom, Charisma.
* **Skills:** Choose two from History, Insight, Medicine, Persuasion, and Religion.
* **Divine Blessing:** (Action, Rare (PB/lr), Concentration) Choose up to three allies within 30 ft. For the next minute, each ally can add half your proficiency bonus to any attack roll or saving throw it makes.

\panelEnd

\panelBegin { "title": "Druid" }

* **Saving Throws:** Intelligence, Wisdom.
* **Skills:** Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival.
* **Primal Shifter:** (Action, Rare (PB/lr)) You magically assume the shape of a known beast for up to 1 hour. Your basic statistics are unchanged, and the shape can be no larger than your natural size. Your new shape may grant you movement options, damage types, or senses.

\panelEnd

\panelBegin { "title": "Fighter" }

* **Saving Throws:** Strength, Constitution.
* **Skills:** Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival.
* **Decisive Action:** (Bonus Action, Rare (PB/lr)) You can take one additional action.

\panelEnd

\panelBegin { "title": "Monk" }

* **Saving Throws:** Strength, Dexterity.
* **Skills:** Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth.
* **Martial Flurry:** (Free, Rare (PB/lr)) When you hit a creature with a melee attack, you can a) knock it prone or b) push it up to 15 ft. away.

\panelEnd

\panelBegin { "title": "Paladin" }

* **Saving Throws:** Wisdom, Charisma.
* **Skills:** Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion.
* **Smite:** (Free, Rare (PB/lr)) When you critically hit a creature with a weapon attack, you deal additional radiant damage equal to half your base damage.

\panelEnd

\panelBegin { "title": "Ranger" }

* **Saving Throws:** Strength, Dexterity.
* **Skills:** Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival.
* **Hunter's Quarry:** (Bonus Action, Rare (PB/lr)) Choose a creature within 60 ft. For the next minute, you deal additional damage equal to your proficiency bonus whenever you hit the creature with a weapon attack.

\panelEnd

\panelBegin { "title": "Rogue" }

* **Saving Throws:** Dexterity, Intelligence.
* **Skills:** Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth.
* **Backstab:** (Free, Rare (PB/lr)) When you hit a creature with a weapon attack and have advantage, you deal additional damage equal to half your base damage.

\panelEnd

\panelBegin { "title": "Sorcerer" }

* **Saving Throws:** Constitution, Charisma.
* **Skills:** Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion.
* **Quick Caster:** (Free, Rare (PB/lr)) When you cast a spell that requires an action, you can cast it using a bonus action instead.

\panelEnd

\panelBegin { "title": "Warlock" }

* **Saving Throws:** Wisdom, Charisma.
* **Skills:** Choose two skills from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion.
* **Pact Weapon:** (Action, Rare (PB/lr)) You summon your pact blade into your empty hand. You can choose the form this weapon takes each time you summon it, and the weapon counts as magical.

\panelEnd

\panelBegin { "title": "Wizard" }

* **Saving Throws:** Wisdom, Charisma.
* **Skills:** Choose two skills from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion.
* **Magic Ward:** (Bonus Action, Rare (PB/lr)) Until the start of your next turn, you have a +5 bonus to AC and take no damage from magic missile.

\panelEnd

\panelBegin { "type": "aside", "title": "Quick Characters" }

Use an adept when you need a simple, _lightweight_ player character (one-shots, sidequests, new players, brief replacements for dead or missing characters, etc.).

\panelEnd

\contentEnd