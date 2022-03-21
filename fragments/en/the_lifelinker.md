\contentBegin { "class": "page--mm-the-lifelinker", "header": "transfuse", "bg": "pages/text/bg-glyph.png" }

# The Lifelinker

A common battle tactic is to _focus fire_ on a single enemy—the sooner you can bring them down, the sooner you can swing the action economy in your direction. But what happens when you meet enemies that _can't_ be so easily brought down?

This chapter introduces _lifelinkers_ and how to use them in your combat encounters.

\exampleBegin

As the tiefling reached out, Zane slashed up with his dagger and cut a line across the mindwarden's arm. It recoiled in pain—as did two others simultaneously.

Zane ducked back as he realized the mindwardens were all <em>lifelinked</em>—three bodies, one pool of health. This wouldn't be easy...

\exampleEnd

## Lifelinkers

A _lifelinker_ is a special type of combatant that's spiritually, physically, mentally, or magically linked with one or more creatures. Through their _lifelink_, these creatures share any damage or healing they take in equal measure—they rise as one and they fall as one.

There are five basic categories of lifelinker, each with a particular theme and combat style: entwined, fractured, fused, hivemind, and tethered.

\panelBegin { "type": "table", "title": "Lifelinker Categories" }

|Type|Description|
|---|---|
|Entwined|A group of spiritually-connected creatures.|
|Fractured|A singular creature with many separate parts.|
|Fused|A group of physically-connected creatures.|
|Hivemind|A group of mentally-connected creatures.|
|Tethered|A group of magically-connected creatures.|

\panelEnd

\columnbreak

<div data-blueprint="scaler">
---
name: Tiefling Mindwarden
type: monster
portrait: pentacle.svg
size:
  primary: medium
category:
  primary: humanoid
  subcategory: tiefling
combat:
  level: 9
  rank: grunt
  role: defender
  subrole: bulwark
abilityModifiers:
  ranking:
    - int
    - con
    - cha
    - wis
    - dex
    - str
savingThrows:
  ranking:
    - int
    - con
    - dex
    - cha
    - wis
    - str
attack:
  distance:
    range: 30
skills:
  athletics: trained
  insight: trained
movement:
  speeds:
    walk:
      baseSpeedPercentage: 100
awareness:
  senses:
    darkvision: 60
damageResistances:
  - fire
  - psychic
languages:
  - common
  - infernal
features:
  -
    name: Lifelinked
    rarity: common
    description: |
      <p>Divide any damage or healing you would take by the total size of your lifelink. Each other lifelinker then receives the same amount of non-preventable damage or healing. If you die, you are no longer lifelinked.</p>
  -
    name: Mind Spike
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: mwak
      attack:
        defence: ac
        attribute: int
      area: reach 5 ft.
      targets: two creatures
      onHit: "[round(damage * 0.5), d8|keepStatic] psychic damage."
  -
    name: Mind Blast
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: rwak
      attack:
        defence: ac
        attribute: int
      area: range 30 ft.
      targets: one creature
      onHit: "[damage, d8|keepStatic] psychic damage."
  -
    name: Force Pull
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: rsav
      attack:
        defence: str
        attribute: int
      area: range 30 ft
      targets: one creature
      onHit: "the creature is pulled 10 ft. towards you"
  -
    name: Brainstorm
    rarity: uncommon
    activation:
      type: action
      quantity: 1
    activity:
      type: msav
      attack:
        defence: int
        attribute: int
      area: a 15 ft. sphere centered on yourself
      targets: all hostile creatures
      onHit: "[damage, d6|keepStatic] psychic damage (ongoing, DC [attackDcInt] INT)."
    uses:
      type: charges
      charges:
        maximum: 1
        period: sr
  -
    name: Defensive Stance
    rarity: uncommon
    activation:
      type: bonus
      quantity: 1
    description: You gain +2 AC and advantage on one saving throw of your choice until the end of your next turn.
    uses:
      type: cooldown
      cooldown:
        target: 3
</div>

\contentEnd

\contentBegin { "class": "page--mm-the-lifelinker" }

### The Entwined { "index": "B" }

Entwined lifelinkers are _spiritually_ connected to each other. These are your empaths and your soulmates—creatures who share one sensitive heart.

\exampleBegin

* Three clerics are spiritually entwined, bound together by their sacred battle oaths.
* A druid is spiritually entwined with the forest animals, sharing in their pain.
* Two high elves battle side-by-side, spiritually entwined after centuries of life together. 

\exampleEnd

### The Fractured { "index": "C" }

Fractured lifelinkers are a single creature with multiple, independent body parts. These are your gigants and colossals—monsters that can't be _fully_ represented with just one body.

When you want to threaten every part of the battlefield with a single enemy, consider a _fractured_.

\exampleBegin

* A fractured, raging dragon with four parts: head, body, wings, and tail.
* A fractured, lethal trap room with five parts: three flame towers, a crusher, and a power core.
* A fractured, hovering gunbot with three parts: rotors, body, and artillery.

\exampleEnd

### The Fused { "index": "A" }

Fused lifelinkers are _physically_ connected to each other. These are your monstrosities and abominations—creatures who share one compound body.

\exampleBegin

* Five giant rats have been fused at the tail to form a ravenous, conjoined rat king.
* An aberrant monolith dissolves into 4 conjoined, gibbering mouthers.
* An artificer has protected her workshop with 4 physically-interlinked traps and hazards.

\exampleEnd

### The Hive { "index": "D" }

Hive lifelinkers are _mentally_ connected to each other. These are your psions and your telepaths—creatures who share one awakened mind.

\exampleBegin

* A trio of psionics share their thoughts and pain when close to their hive brain.
* A wizard is mentally connected with his familiar, sharing thoughts, feelings, and wounds.
* An artificer is mentally connected with her trio of awakened golems.

\exampleEnd

\columnbreak

### The Tethered { "index": "E" }

Tethered lifelinkers are _magically_ or _situationally_ connected to each other—typically through a spell, a magic item, or simple proximity.

\exampleBegin

* Four bandits are tethered through a special, enchanted amulet they each wear.
* A knight leaps atop his horse and (while mounted) becomes tethered to the mount.
* A dying warlock casts a spell to tether his life pool himself to the nearest player.

\exampleEnd

## Making a Lifelinker

You can turn any scaling monster into a lifelinker with these two steps:

### Define a Lifelink { "index": 1 }

First, create a lifelink and add some creatures. By linking together different types of combatant, you can create a variety of challenges—for example:

* **Unity:** Link creatures with similar HP and defences.
* **Target:** Link one creature with _low_ HP and _high_ defences to creatures with _high_ HP and _low_ defences.
* **Weak Point:** Link one creature with _high_ HP and _low_ defences to creatures with _low_ HP and _high_ defences.

### Apply the Lifelinked Trait { "index": 2 }

Finally, apply the following trait to each lifelinker.

<div data-blueprint="action">
---
name: Lifelinked
subtitle: Any level, rank, or role
actionType: Trait
body: |
  <p>Divide any damage or healing you would take by the total size of your lifelink. Each other lifelinker then receives the same amount of non-preventable damage or healing. If you die, you are no longer lifelinked.</p>
</div>

\exampleBegin

A mindwarden is hit by a fireball which (after applying fire resistance) deals 12 fire damage.

Because the mindwarden is lifelinked with 2 other entities, it only takes 4 (12/3) fire damage. The other two lifelinkers then suffer 4 non-preventable fire damage.

\exampleEnd

\panelBegin { "type": "aside", "title": "Targeting Lifelinkers" }

Each lifelinker is an individual entity and can be targeted as such, sharing their damage in equal measure with each other. This makes lifelinkers _especially_ susceptible to area-of-effect spells and abilities—so beware!

\panelEnd

\contentEnd