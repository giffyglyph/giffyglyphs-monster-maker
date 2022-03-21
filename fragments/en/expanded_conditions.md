\contentBegin { "class": "page--mm-expanded-conditions", "header": "sight-disabled", "bg": "pages/text/bg-glyph.png" }

# Expanded Conditions

Conditions describe status changes and can restrict certain abilities—a bard's lullaby makes you _fatigued_, a barbarian's axe makes you _bleed_, a cryomancer _binds_ your hands with ice magic, etc.

This chapter introduces _18 new conditions_ you can use to create new abilities and features.

## Severities

Not every condition is a life-threatening calamity—some are a mere hindrance, others a looming threat. There are three <em>severities</em>: common, uncommon, and rare.

* **Common conditions** can be easily inflicted and—for the most part—easily undone. These conditions _complicate_ life but don't necessarily threaten it.
* **Uncommon conditions** can apply more serious penalties, restrict a small range of actions, or compel you to act in particular ways. These conditions can quickly escalate—so watch out.
* **Rare conditions** can rob you of your agency, remove you from play, or put you at a _significant_ risk of death. These conditions are a major hindrance and should be countered as soon as possible.

Use a range of severities to create new, surprising condition effects for your scaling monsters.

\panelBegin { "type": "aside", "title": "Introducing Conditions" }

When you introduce new conditions into your game, be sure to inform your players _what_ they are and _how_ they work—the more people that understand your terminology (i.e. "slowed"), the better the experience.

\panelEnd

\columnbreak

<div data-blueprint="scaler">
---
name: Ghost
type: monster
portrait: spectre.svg
size:
  primary: medium
category:
  primary: undead
combat:
  level: 7
  rank: grunt
  role: controller
  subrole: hexer
abilityModifiers:
  ranking:
    - cha
    - dex
    - wis
    - con
    - int
    - str
movement:
  speeds:
    walk:
      override: 0
    fly:
      baseSpeedPercentage: 100
  canHover: true
damageResistances:
  - acid
  - fire
  - lightning
  - thunder
  - physical
damageImmunities:
  - cold
  - necrotic
  - poison
conditionImmunities:
  - charmed
  - exhaustion
  - frightened
  - grappled
  - paralyzed
  - petrified
  - poisoned
  - prone
  - restrained
attack:
  distance:
    range: 30
languages:
  - life
awareness:
  senses:
    darkvision: 60
features:
  -
    name: Incorporeal
    rarity: common
    description: You can move through other creatures and objects as if they were difficult terrain. You take [level] force damage if you end your turn inside an object.
  -
    name: Soul Sickness
    rarity: common
    activation:
      type: free
      quantity: 1
    description: When you hit with an attack, the target is poisoned until the end of its next turn.
    uses:
      type: charges
      charges:
        maximum: 1
        period: turn
  -
    name: Withering Touch
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: mwak
      attack:
        defence: ac
        attribute: cha
      area: reach 5 ft.
      targets: one creature
      onHit: "[damage, d6|keepStatic] necrotic damage."
  -
    name: Chilling Scream
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: rsav
      attack:
        defence: cha
        attribute: cha
      area: range 30 ft.
      targets: one creature
      onHit: The creature is <em>exposed</em> for up to 1 minute.
    uses:
      requiresConcentration: true
  -
    name: Soul Rend
    rarity: uncommon
    activation:
      type: action
      quantity: 1
    activity:
      type: mwak
      attack:
        defence: ac
        attribute: cha
      area: reach 5 ft.
      targets: one creature
      onHit: "the creature is <em>bleeding</em> and gains [damage, d6|keepStatic] ongoing necrotic damage (save ends both, DC [attackDcCha] CON)."
    uses:
      type: recharge
      recharge:
        target: 5
</div>

\contentEnd

\contentBegin { "class": "page--mm-expanded-conditions" }

## New Conditions

Listed below are 18 new conditions you can introduce into your game. Use these conditions in combination with _condition effects_ (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='making-effects']" }</span>) to create new abilities for your scaling monsters.

\exampleBegin

The mummy's hand burst through the rotten wood and grabbed hold of Chansi's leg with an iron grip.

In a few short seconds the mummy had drained all moisture from the halfling's body, leaving her both _dehydrated_ and _feeble_.

\exampleEnd

<div data-blueprint="condition">
---
name: Banished
icon: teleport
severity: rare
details:
  - You are banished to a harmless plane of existence
  - When this condition ends, you reappear in either a) the space you left or b) the nearest unoccupied space.
</div>

\columnbreak

<div data-blueprint="condition">
---
name: Bleeding
icon: bleeding-wound
severity: uncommon
details:
  - At the end of your turn, you lose 1 unspent hit die.
  - While you have no hit die, temporarily increase your level of exhaustion by 1.
</div>

<div data-blueprint="condition">
---
name: Bound
icon: handcuffs
severity: uncommon
details:
  - You can't use your hands.
  - You automatically fail any ability check that requires you to make a precise movements with your hands.
  - You drop anything you are carrying.
</div>

\exampleBegin

With a surprisingly potent spell, the cryomancer _bound_ Viridian's hands together with ice. The bard's songblade slipped from his frozen fingers and hit the floor with a loud clang...

\exampleEnd

\regionBegin { "class": "region--fixed-bottom region--border-top" }

\panelBegin { "class": "panel--table", "title": "Expanded Conditions" }

<table>
	<thead>
		<tr>
			<th>Condition</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th colspan="2" class="header"><span>Common</span>
    </th>
		<tr>
			<td>Deafened</td>
			<td>You can't hear anything.</td>
		</tr>
		<tr>
			<td>Exposed</td>
			<td>You are critically hit on a roll of 19-20.</td>
		</tr>
		<tr>
			<td>Feeble</td>
			<td>Whenever you deal damage, reduce it by half.</td>
		</tr>
		<tr>
			<td>Grappled</td>
			<td>You can't move.</td>
		</tr>
    <tr>
			<td>Poisoned</td>
			<td>You have disadvantage on attack rolls and ability checks.</td>
		</tr>
    <tr>
			<td>Prone</td>
			<td>You are lying on the ground.</td>
		</tr>
		<tr>
			<td>Slowed</td>
			<td>Your speed is reduced to 10 ft and you can't take reactions.</td>
		</tr>
		<tr>
			<td>Silenced</td>
			<td>You can't speak.</td>
		</tr>
    <tr>
			<td>Stinking</td>
			<td>You have disadvantage on concentration checks and social ability checks.</td>
		</tr>
		<tr>
			<th colspan="2" class="header"><span>Uncommon</span></th>
		<tr>
		<tr>
			<td>Bleeding</td>
			<td>At the end of your turn, lose one unspent hit die.</td>
		</tr>
    <tr>
			<td>Blinded</td>
			<td>You can't see anything.</td>
		</tr>
		<tr>
			<td>Bound</td>
			<td>You can't use your hands.</td>
		</tr>
		<tr>
			<td>Charmed</td>
			<td>You can't attack your charmer.</td>
		</tr>
		<tr>
			<td>Dazed</td>
			<td>On your turn, you can move or take an action—but not both.</td>
		</tr>
		<tr>
			<td>Fatigued</td>
			<td>Temporarily increase your level of exhaustion by 1.</td>
		</tr>
		<tr>
			<td>Dehydrated</td>
			<td>Temporarily increase your level of exhaustion by 1.</td>
		</tr>
		<tr>
			<td>Disoriented</td>
			<td>Whenever you make an attack roll, ability check, or a saving throw, roll a d4 and subtract that number.</td>
		</tr>
		<tr>
			<td>Frightened</td>
			<td>You can't move towards the source of your fear.</td>
		</tr>
    <tr>
			<td>Invisible</td>
			<td>You can't be seen.</td>
		</tr>
		<tr>
			<td>Restrained</td>
			<td>You can't move.</td>
		</tr>
		<tr>
			<td>Starving</td>
			<td>Temporarily increase your level of exhaustion by 1.</td>
		</tr>
    <tr>
			<td>Swarmed</td>
			<td>You move as if in difficult terrain, attack rolls against you have advantage, and you attack with disadvantage.</td>
		</tr>
		<tr>
			<td>Vulnerable</td>
			<td>You gain vulnerability to one damage type.</td>
		</tr>
		<tr>
			<th colspan="2" class="header"><span>Rare</span></th>
		<tr>
		<tr>
			<td>Banished</td>
			<td>You are momentarily banished to a harmless plane of existence.</td>
		</tr>
		<tr>
			<td>Cursed</td>
			<td>If you are reduced to 0 hit points, you die.</td>
		</tr>
		<tr>
			<td>Decaying</td>
			<td>You can't regain hit points through magical or non-magical means.</td>
		</tr>
		<tr>
			<td>Paralyzed</td>
			<td>You can't move, take actions, take reactions, or speak.</td>
		</tr>
		<tr>
			<td>Petrified</td>
			<td>You are transformed into a solid, inanimate material.</td>
		</tr>
		<tr>
			<td>Stunned</td>
			<td>You can't move, take actions, take reactions, or speak properly.</td>
		</tr>
		<tr>
			<td>Transformed</td>
			<td>You are physically changed into a new form.</td>
		</tr>
		<tr>
			<td>Unconscious</td>
			<td>You can't move, take actions, take reactions, or remain conscious.</td>
		</tr>
	</tbody>
</table>

\panelEnd

\regionEnd

\contentEnd

\contentBegin { "class": "page--mm-new-conditions" }

<div data-blueprint="condition">
---
name: Cursed
icon: dead-eye
severity: rare
details:
  - If you are reduced to 0 hit points, you die.
</div>

\exampleBegin

Clanda clutched her hand in sudden pain as it was struck by the eldritch cultist's dark magic. A black, inky spot took form in the middle of her palm—the mark of _The Maw_. The cultist drew a hooked knife with a grin, and stepped towards the sorceress...

\exampleEnd

<div data-blueprint="condition">
---
name: Dazed
icon: perspective-dice-six-faces-random
severity: uncommon
details:
  - During your turn, you can move <em>or</em> take an action.
  - You can't take reactions.
  - You have disadvantage on concentration checks.
</div>

<div data-blueprint="condition">
---
name: Decaying
icon: bleeding-heart
severity: rare
details:
  - You can't regain hit points through any means.
</div>

<div data-blueprint="condition">
---
name: Dehydrated
icon: desert-skull
severity: uncommon
details:
  - Temporarily increase your level of exhaustion by 1.
  - For every additional 24 hours you go without sufficient water, increase this penalty by 1.
</div>

<div data-blueprint="condition">
---
name: Disoriented
icon: misdirection
severity: uncommon
details:
  - Whenever you make an attack roll, ability check, or a saving throw, roll a d4 and subtract that number.
</div>

<div data-blueprint="condition">
---
name: Exposed
icon: cracked-shield
severity: common
details:
  - You are critically hit on a roll of 19-20.
</div>

<div data-blueprint="condition">
---
name: Fatigued
icon: tired-eye
severity: uncommon
details:
  - Temporarily increase your level of exhaustion by 1.
  - For every additional 24 hours you go without sufficient sleep, increase this penalty by 1.
</div>

<div data-blueprint="condition">
---
name: Feeble
icon: half-heart
severity: common
details:
  - Whenever you deal damage, reduce it by half.
</div>

\columnbreak

<div data-blueprint="condition">
---
name: Silenced
icon: silenced
severity: common
details:
  - You can't speak.
  - You automatically fail any ability check that requires you to make a vocal sound.
</div>

<div data-blueprint="condition">
---
name: Slowed
icon: snail
severity: common
details:
  - Your speed is reduced to 10 ft.
  - You can't take reactions.
</div>

<div data-blueprint="condition">
---
name: Starving
icon: food-chain
severity: uncommon
details:
  - Temporarily increase your level of exhaustion by 1.
  - For every additional 24 hours you go without sufficient food, increase this penalty by 1.
</div>

<div data-blueprint="condition">
---
name: Stinking
icon: turd
severity: common
details:
  - You have disadvantage on concentration checks and any ability check to interact socially.
</div>

<div data-blueprint="condition">
---
name: Swarmed
icon: mite
severity: uncommon
details:
  - You move as if in difficult terrain.
  - Attack rolls against you have advantage, and your attack rolls have disadvantage.
</div>

<div data-blueprint="condition">
---
name: Transformed
icon: frog-prince
severity: rare
details:
  - You are physically changed into a new form.
  - Your hit points and attributes are unchanged.
  - Your form dictates the actions you can take. You can't speak, cast spells, or take actions that require hands.
  - Your gear melds into your new form. You can't activate, use, wield, or benefit from your equipment.
</div>

\exampleBegin

Krazak was annoyed with himself. He _really_ should have known better than to drink that potion without checking it first—but _no_. Now he was stuck as a polymorphed frog for at least the next hour. Just _great_.

\exampleEnd

<div data-blueprint="condition">
---
name: Vulnerable
icon: shattered-heart
severity: uncommon
details:
  - You gain vulnerability to a particular damage type <em>or</em>, if you have immunity, it is reduced to resistance.
</div>

\contentEnd