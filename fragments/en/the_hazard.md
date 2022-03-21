\contentBegin { "class": "page--mm-the-hazard", "header": "wolf-trap", "bg": "pages/text/bg-glyph.png" }

# The Hazard

When you head out into adventure, monsters are not the only thing you should be afraid of. Hidden traps, treacherous pitfalls, fearsome storms, toxic flora—hazards are abundant in the dark and dangerous places of the world. But how do you build these traps and environmental threats?

This chapter introduces _hazards_ and how to use them in your combat encounters.

\exampleBegin

Krazak and Clanda peered over the stone wall into the old graveyard. Faint lights hovered in the dark night—wraithmotes, deranged and ravenous spectral embers.

Clanda spotted a mouse running across the graveyard—in an instant, the wraithmotes had swarmed it and drained the creature's soul.

Interesting—could the wraithmotes be baited away? The sorceress looked at Krazak. An idea formed...

\exampleEnd

## Hazards

A _hazard_ is a special type of combatant that creates problems for adventurers. These are things to be avoided, endured, disabled, or disarmed—traps, dangerous weather, hostile environments, automated defences, toxic pits, patrolling sentinels, etc.

There are three basic categories of hazard, each with their style of combat: traps, passives, and actives.

\panelBegin { "type": "table", "title": "Hazard Categories" }

|Type|Description|
|---|---|
|Trap|A hazard designed to surprise or ambush.|
|Passive|A hazard that keeps to itself unless disturbed.|
|Active|A hazard that actively hunts or hurts.|

\panelEnd

\columnbreak

<div data-blueprint="scaler">
---
name: Spark Pylon
type: hazard
portrait: power-lightning.svg
size:
  primary: medium
category:
  primary: hazard
  secondary: construct
combat:
  level: 9
  rank: grunt
  role: controller
  subrole: hexer
abilityModifiers:
  ranking:
    - int
    - con
    - wis
    - dex
    - str
damageThreshold: 10
damageImmunities:
  - necrotic
  - poison
  - psychic
conditionImmunities:
  - allConditions
attack:
  distance:
    reach: 0
    range: 60
movement:
  canMove: false
trigger: You lie dormant until a creature moves within 60 ft. of you. You may then activate and use <em>Spark Bolt</em>. You remain active for up to 10 minutes.
features:
  -
    name: Spark Bolt
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: rwak
      attack:
        defence: ac
        attribute: int
      area: range 60 ft.
      targets: one creature
      onHit: "[damage, d12|keepStatic] lightning damage."
  -
    name: Shocking Spark
    rarity: uncommon
    activation:
      type: bonus
      quantity: 1
    activity:
      type: rwak
      attack:
        defence: ac
        attribute: int
      area: range 60 ft.
      targets: one creature
      onHit: "the target is restrained until the end of its next turn."
countermeasures:
  -
    name: Deactivate
    description: "An adjacent creature can spend an action to deactivate you using a set of thieves' tools (or other appropriate equipment). <em>Check:</em> DC 11 INT (Arcana) Success: You take [round(hp * 0.33), d12|keepStatic] force damage. If you are reduced to 0 hit points, you are safely deactivated."
  -
    name: Destroy
    description: If you are reduced to 0 hit points by a damaging attack, you explode. You deal [damage, d12|keepStatic] lightning damage to each creature within 10 ft.
</div>

\contentEnd

\contentBegin { "class": "page--mm-the-hazard" }

### The Trap { "index": "A" }

Traps are static hazards that are built, assembled, or otherwise crafted to guard an area or resource. Use a trap when you want to protect something, surprise an adventurer, or test the party's perception.

\exampleBegin

* A kobold assembles a rockfall trap at the entrance of their clan's den with some _very_ heavy rocks.
* A dark wizard secures their precious spellbook with a soulshredding trap that activates on touch.
* An artificer builds a trap room lined with spark pylons, pitfalls, and spike traps.

\exampleEnd

### The Passive { "index": "B" }

Passive hazards keep to themselves until something aggravates them—at which point they react defensively. Use a passive hazard when you want the party to worry about entering or moving around a particular area.

\exampleBegin

* A field of poisonous mushrooms releases toxic spores when a poor creature steps into them.
* A giant, wandering sentinel bearing a valuable treasure turns hostile only when attacked.
* A static turret watches over an area, shooting bolts of force at any who dare approach.

\exampleEnd

### The Active { "index": "C" }

Active hazards are always on the hunt, causing harm to any targets in range. Use an active hazard when you want the party to sneak around an area, hide from a pursuer, or endure an environmental force.

\exampleBegin

* Wandering elemental sentinels patrol the druid's grove and attack any unfortunate intruder.
* A dangerous chaos storm rains down on the party, electrocuting anyone not in cover.
* Deranged wraithmotes haunt the old graveyard and siphon life from the living. 

\exampleEnd

\panelBegin { "type": "aside", "title": "Overriding Attributes" }

If a hazard shouldn't have a particular ability, either a) set the modifier to −5 or b) set the score to 0 (automatically fail ability checks/saving throws).

---

* **Strength (STR):** I can physically affect/resist things.
* **Dexterity (DEX):** I can move and/or aim at things.
* **Constitution (CON):** I can endure pain/damage.
* **Intelligence (INT):** I can make decisions/deductions.
* **Wisdom (WIS):** I can sense or search for things.
* **Charisma (CHA):** I am self-aware and/or influential.

\panelEnd

\columnbreak

## Making a Hazard

You can turn any scaling monster into a hazard with these three basic steps:

### Define a Trigger { "index": "1" }

A hazard lies dormant until it is _activated_ somehow—stepping on a trigger plate, walking into range, making noise, etc. Define this trigger in three parts:

1. What action or event activates the hazard?
2. What (if anything) happens when the hazard becomes active?
3. How long does the hazard remain active for until it becomes dormant again?

### Set a Countermeasure { "index": "2" }

Next, define how the hazard can be overcome (if at all). There are four basic types of countermeasure—choose any that seem appropriate for your hazard and describe any related events.

\panelBegin { "type": "table", "title": "Countermeasures" }

|Type|Description|
|---|---|
|Disable|The hazard can be completely disabled (i.e. reduced to 0 hit points by an ability check).|
|Destroy|The hazard can be destroyed through damage and harmful effects.|
|Control|The hazard can be controlled for a short time through some means (i.e. with ability checks).|
|Distract|The hazard can be distracted or diverted (i.e. with an appropriate ability check).|

\panelEnd

### Refine your Attributes { "index": "3" }

To finish off your hazard, review its attributes and adjust any that seem out of place. Consider the following:

* **Add a Damage Threshold:** Some hazards are particularly hardy and durable. Add a damage threshold to showcase their resilience.
* **Immobility:** If your hazard is static and immobile, remove any movement speeds.
* **Immaterial:** Not every hazard can be attacked, damaged, or destroyed. If your hazard is a _force_ (e.g. a fierce storm), remove any defences or hit points.
* **Static Initiative:** if your hazard reacts at _fixed_ intervals, consider using a static initiative bonus.
* **Passive Stealth:** If your hazard is intended to use stealth or go undetected for a period of time, make a note of its passive stealth.
* **Salvage:** Add any valuable materials can be salvaged from your hazard (gemstones, gold, precious metals, special herbs, etc.).

Your hazard is now ready to be used in an encounter! Mix-and-match hazards with monsters to create a range of exciting encounters for your campaign.

\contentEnd