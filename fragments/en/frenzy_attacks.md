\contentBegin { "class": "page--mm-frenzy-attacks", "header": "daggers", "bg": "pages/text/bg-glyph.png" }

# Frenzy Attacks

Sometimes it's not enough to make just one _big_ attack on your turn—when the enemy surrounds you, sometimes the best option is to make lots of _small_ attacks.

This chapter introduces _frenzy attacks_ to help you chain together single-target common actions.

## Going into a Frenzy

A _frenzy attack_ is a special action that allows any grunt, elite, or paragon to take two, three, or even _four_ single-target common actions on their turn while also spending movement between each action.

However, this comes at the cost of accuracy and power—frenzy attacks have a -2 attack/DC penalty _and_ deal reduced damage. The maximum number of actions you can take increases with your combat level.

\panelBegin { "type": "table", "title": "Frenzy Attacks" }

|Combat Level|Max. Frenzy Attacks|
|:-:|:-:|
|5th|2|
|11th|3|
|17th|4|

\panelEnd

<div data-blueprint="action">
---
name: Frenzy Attack (2/3/4)
subtitle: 5th-level and higher, Grunt/Elite/Paragon, Any role
body: |
  <p>You can take two/three/four of any other single-target common action.</p>
  <hr/>
  <ul>
    <li>You have a -2 penalty to attack rolls and save DCs.</li>
    <li>Divide any damage you deal by 2/3/4.</li>
    <li>You can spend some or all of your movement in-between each action.</li>
  </ul>
</div>

\columnbreak

<div data-blueprint="scaler">
---
name: Ogre Brute
type: monster
portrait: orc-head.svg
size:
  primary: medium
category:
  primary: giant
  secondary: ogre
combat:
  level: 6
  rank: grunt
  role: striker
  subrole: butcher
abilityModifiers:
  ranking:
    - str
    - con
    - wis
    - cha
    - dex
    - int
movement:
  speeds:
    walk:
      baseSpeedPercentage: 100
awareness:
  senses:
    darkvision: 60
languages:
  - giant
  - common
features:
  -
    name: Concussive Attack
    rarity: uncommon
    activation:
      type: free
      quantity: 1
    description: When you critically hit a creature, it must make a Constitution saving throw (DC [attackDcStr]) or be stunned until the end of its next turn.
    uses:
      type: cooldown
      cooldown:
        target: 3
  -
    name: Smash
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
      onHit: "[damage, d10|keepStatic] bludgeoning damage."
  -
    name: Slam
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: msav
      attack:
        defence: str
        attribute: str
      area: reach 5 ft.
      targets: one target
      onHit: the target is knocked prone
  -
    name: Rampage
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      frenzy: 2
    description: You can take two of any single-target common action. You have a -2 attack/DC penalty and must divide any damage you deal by 2. You can spend movement in-between each action.
</div>

\panelBegin { "type": "aside", "title": "When to Frenzy?" }

Frenzy attacks are a good option to consider when you want some increased flexibility with your attack actions. They can also help to prevent players being overwhelmed with massive damage from a single hit.

\panelEnd

\contentEnd