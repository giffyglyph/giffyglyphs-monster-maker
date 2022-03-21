\contentBegin { "class": "page--mm-paragon-features", "header": "temporary-shield", "bg": "pages/text/bg-glyph.png" }

# Paragon Features

In battle, the side with the most people is often the side that wins; with enough attacks, even the mightiest monster can be brought low. But what do you do when you want to run a combat encounter with a _tiny_ number of monsters?

This chapter introduces _paragon features_ and how you can use them to perk up your action economy.

\exampleBegin

Drakken grinned at the three so-called _heroes_ as they approached his throne, weapons drawn. Just a year ago, these odds would have worried him—but now, Tiamat's power surged through his blessed veins. Three enemies? Hah. This battle would be no challenge at all...

\exampleEnd

<div data-blueprint="action">
---
name: Paragon Features
actionType: Traits
body: |
  <div class="feature feature--uncommon">
    <p><strong>Paragon Power (Threat-1 per round):</strong> At the end of another creature's turn, you may either:</p>
    <ol type="A" style="margin-top: 0">
      <li>
        <p><strong>Act:</strong> Regain your reaction and take an action. You may spend some or all of your remaining movement as part of that action.</p>
        <p>This does not count as your turn. You can't dash more than once per round, and you lose the benefit of any currently-held disengage, dodge or readied action.</p>
      </li>
      <li>
        <p><strong>Resist:</strong> Reroll a saving throw against an ongoing effect. Spend [2 × combat level] hit points to gain advantage on the roll.</p>
        <p>If you succeed against a Concentration effect, you lose [2 × combat level] hit points.</p>
      </li>
    </ol>
  </div>
  <div class="feature feature--rare">
    <p><strong>Paragon Defence (Threat/2 per lr):</strong> When you would fail a saving throw, you may spend [2 × combat level] hit points to succeed.</p>
  </div>
</div>

\columnbreak

## Paragon Power

_Paragon power_ is a special resource that allows a monster to act multiple times each round, resist ongoing effects, and empower attacks—essential abilities for elites and paragons who might otherwise be outnumbered by a full adventuring party.

With paragon power, a single monster can tilt the action economy back in their favor and stand firm against overwhelming odds.

When another creature finishes its turn, you may spend one paragon power to do one of the following:

* **Act:** Regain your reaction (if expended) and take an action. You may spend some or all of your remaining movement as part of this action.
* **Resist:** Reroll a failed saving throw against an ongoing effect. Spend a number of hit points equal to 2 × your combat level to gain advantage on the roll.

A monster has a reserve of paragon power equal to their _threat rating_ minus one, and they regain all expended paragon power at the start of their turn—so don't worry about hoarding it. Use paragon power to be bold, dynamic, and cinematic in battle.

\panelBegin { "type": "aside", "title": "Scalers & Statics" }

Paragon powers are primarily designed for _scalers_, but you can easily use them with _static_ monsters (i.e. those found in other 5th Edition materials).

If your monster has any _legendary_ features (actions, defences, etc.), remove them—paragon features always replace legendary features.

\panelEnd

\contentEnd

\contentBegin

### Act { "index": "A" }

When you _act_, you regain your reaction (if expended) and take one action. You can also spend some (or all) of your remaining movement during this action. However, take note of the following:

* **Dash:** You can't take the _Dash_ action more than once per round (with limited exceptions, i.e. bonus actions, magic items, spells, etc.).
* **Disengage, Dodge, and Ready:** When you act, you lose the benefit of any _Disengage_, _Dodge_, or _Ready_ action you are currently maintaining _unless_ you spend your action to maintain the effect.
* **Not a Turn:** Acting in this way does _not_ count as a turn. Effects that take place at the start or end of your turn are not triggered.

\exampleBegin

Zane, Chansi, and Viridian engage Drakken, a fierce chromatic herald of Tiamat.

---

* Drakken spends his turn to move 20 ft. adjacent to Zane and then uses _claw slash_ to attack.
* Zane uses his turn to attack Drakken—but _misses_!
* At the end of Zane's turn, Drakken spends one paragon power to _act_. He uses the action to push the rogue away 10 ft., and then spends his remaining 10 ft. to move towards Chansi...

\exampleEnd

#### Be Big, Bold, and Cinematic

Though it may be tempting to use your _paragon power_ actions to relentlessly attack the nearest character, this can lead to dull and tedious combat.

Try to avoid using the same actions in a row. Dash across the battlefield, shove, taunt, threaten, put pressure on unsuspecting players, and _be cinematic_.

### Resist { "index": "B" }

When you _resist_, you reroll a failed saving throw against an ongoing effect on yourself—such as _Hold Person_, _Bane_, _Hypnotic Pattern_, _Ray of Enfeeblement_, _Bestow Curse_, _Banishment_, or _Phantasmal Killer_.

Resisting in this way does _not_ count as an action or reaction, but you must be _conscious_ to do so.

**Determination:** When you _resist_, you may spend a number of hit points equal to 2 × your combat level to gain advantage on the roll.

**Feedback:** When you use _resist_ and succeed against a _Concentration_ effect, you lose a number of hit points equal to 2 × your combat level.

\exampleBegin

Chansi has used _Ensnaring Strike_ to restrain Drakken. During his turn, Drakken fails to shrug off the effect—at the end of Zane's turn, Drakken spends one paragon power to _resist_. He spends 14 hit points to gain advantage and then, when he succeeds, loses another 14 hit points due to Chansi's concentration.

\exampleEnd

\columnbreak

<div data-blueprint="action">
---
name: Cinematic Actions
subtitle: Any level, rank, or role
actionType: Actions
body: |
  <div class="feature feature--common"><strong>Taunt:</strong> You take the <em>Dodge</em> action and taunt your enemies, daring them to attack you.</div>
  <div class="feature feature--common"><strong>Monologue:</strong> You talk at your enemies while taking the <em>Disengage</em> action to reposition yourself.</div>
  <div class="feature feature--common"><strong>Threaten:</strong> You threaten your enemies and <em>Ready an Action</em> to trigger if your demands are not met.</div>
  <div class="feature feature--common"><strong>Shove:</strong> You shove a target within reach. Make a melee attack vs. the target's AC. If you succeed, you can choose to either a) knock the target prone or b) push the target 10 ft. away from you.</div>
  <div class="feature feature--common"><strong>Grab:</strong> With a free hand, you grab a target within reach. Make a melee attack vs the target's AC. If you succeed, the target is <em>grappled</em> by you.</div>
  <div class="feature feature--common"><strong>Change the Environment:</strong> You take the <em>Use an Object</em> action to do something with the environment—knock over a pillar, kick open a door, start a fire, etc.</div>
  <div class="feature feature--common"><strong>Support:</strong> You take the <em>Help</em> action to assist an ally with an attack roll or ability check.</div>
  <div class="feature feature--uncommon"><strong>Power Up (Cooldown):</strong> You start to prepare a precision attack. The first attack you make during your next action is rolled with advantage. If you take damage before your next action (or are otherwise interrupted), this effect ends.</div>
  <div class="feature feature--uncommon"><strong>Execute (Cooldown):</strong> You prepare to kill a creature within reach that is at 0 hit points. The first attack you make during your next action deals instant death to the creature. If you take damage before your next action (or are otherwise interrupted), this effect ends.</div>
</div>

### Empowered Actions { "index": "C" }

Empowered actions allow you enhance an ability or an attack with _paragon power_. This is an easy way to add variety to your basic attacks _and_ spend paragon power even when there are no other creatures around.

Use the _Empowered Actions_ table below to build some action variants, or create your own: 

\panelBegin { "class": "panel--table", "title": "Empowered Actions" }

| # | Name | Effect |
|:-:|---|---|
|1|Accurate|Gain +2 to your attack bonus or DC.|
|2|Brutal|Critically hit on a 19-20.|
|3|Damaging|Deal additional damage (equal to your combat level) to one target.|
|4|Elemental|Change the attack damage type.|
|5|Piercing|Ignore a damage resistance, or reduce an immunity to resistance.|
|6|Movement|Move an additional 10 ft. of movement.|
|7|Pull|Pull the target 15 ft. towards you.|
|8|Push|Move the target 15 ft. away.|
|9|Afflict|Apply a status condition.|
|10|Barrier|Gain temporary hit points equal to your combat level.|
|11|Haste|Reduce the cooldown time by 1.|
|12|Gambler|Once the feature is resolved, roll to see if is immediately recharged.|
|13|Chargeless|Reduce the charge cost by 1.|

\panelEnd

\contentEnd

\contentBegin { "class": "page--mm-paragon-features" }

\exampleBegin

The GM wants to create some _empowered_ options for Drakken's favorite attacks. To begin, they create one variant for the <em>Greatsword</em> action—a _movement_ option to help Drakken reposition himself when necessary.

_Chromatic Breath_ then gains one variant—_haste_, which allows Drakken to reduce the cooldown and use the attack again one turn earlier.

\exampleEnd

<div data-blueprint="scaler">
---
name: Drakken the Chromatic
type: monster
portrait: spiked-dragon-head.svg
size:
  primary: large
category:
  primary: humanoid
  secondary: dragonborn
alignment: chaoticEvil
combat:
  level: 7
  rank: paragon
  role: striker
  subrole: Havoc
  threat: 3
abilityModifiers:
  ranking:
    - str
    - cha
    - con
    - wis
    - int
    - dex
damageResistances:
  - cold
  - fire
  - lightning
conditionImmunities:
  - frightened
  - charmed
movement:
  speeds:
    walk:
      baseSpeedPercentage: 100
    fly:
      baseSpeedPercentage: 50
skills:
  athletics: trained
  intimidation: trained
items:
  - greatsword
awareness:
  senses:
    darkvision: 60
languages:
  - common
  - draconic
features:
  -
    name: Chromatic Shield
    rarity: uncommon
    activation:
      type: free
      quantity: 1
    description: When you critically hit a creature with an attack, you gain [level] temporary hit points.
    uses:
      type: cooldown
      cooldown:
        target: 2
  -
    name: Greatsword
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
      onHit: "[damage, d8|keepStatic] slashing damage."
    description: |
      <ul>
        <li><strong>Movement:</strong> Before you make your attack roll, you can spend 1 <em>paragon power</em> to move up to 10 ft.</li>
      </ul>
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
      onHit: "[round(damage * 0.5), d8|keepStatic] slashing damage."
  -
    name: Kneel Before Me
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: msav
      attack:
        defence: cha
        attribute: cha
      area: reach 5 ft.
      targets: one creature
      onHit: "the creature falls prone."
  -
    name: Wrath of the Dragon Queen
    rarity: uncommon
    activation:
      type: reaction
      quantity: 1
    description: When you are critically hit by an attack, your attacker takes [damage] cold, fire, or lightning damage.
    uses:
      type: charges
      charges:
        maximum: 3
        period: sr
  -
    name: Chromatic Breath
    rarity: uncommon
    activation:
      type: action
      quantity: 1
    activity:
      type: msav
      attack:
        defence: dex
        attribute: con
      area: a 30 ft. cone extending from yourself
      targets: all targets
      onHit: "[round(damage * 1.25), d12|keepStatic] cold, fire, or lightning damage."
    uses:
      type: cooldown
      cooldown:
        target: 2
    description: |
      <ul>
        <li><strong>Haste:</strong> You can spend 1 <em>paragon power</em> to reduce the cooldown by 1.</li>
      </ul>
  -
    name: Chromatic Bane
    rarity: uncommon
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
      onHit: the creature is vulnerable to cold, fire, or lightning damage for up to one minute.
      spell:
        components:
          - s
          - v
          - c
        school: evocation
    uses:
      type: recharge
      recharge:
        target: 4
  -
    name: Terror
    rarity: rare
    activation:
      type: action
      quantity: 1
    activity:
      type: msav
      attack:
        defence: cha
        attribute: cha
      area: reach 5 ft.
      targets: one creature
      onHit: the creature is paralyzed, save ends (DC [attackDcCha] CHA).
    uses:
      type: charges
      charges:
        maximum: 1
        period: lr
</div>

\columnbreak

## Paragon Defence

Paragons also gain access to _paragon defence_, a powerful ability that can turn failure into success. When you would fail a saving throw, you may instead succeed by spending a number of hit points equal to 2 × your combat level.

Paragons can do this a number of times equal to half their _target player count_ (rounded down) per long rest.

### Narrate a Consequence

When you use paragon defence, you should describe a narrative consequence to the players—what is happening to your monster?

This is important for two reasons: it a) notifies the players that a major gameplay mechanic has been used, and b) sets clear expectations on the encounter. Use this as an opportunity to heighten the drama of the current conflict and demonstrate that the paragon is expending _effort_ to use a limited resource.

Choose a consequence from the table below, or create your own to suit your scaler.

\panelBegin { "class": "panel--table", "title": "Narrative Consequences" }

| d10 | Description |
|:-:|---|
|1|You hear a sudden _crack_...|
|2|There is a disgusting _pop_...|
|3|Something delicate _shatters_...|
|4|You see something _break_...|
|5|Something _falls off_...|
|6|A wound _tears open_...|
|7|There is a terrible _roar_...|
|8|There is a sudden _flare_ of light...|
|9|You hear a loud _bang_...|
|10|You smell a foul _odour_...|

\panelEnd

\exampleBegin

The lich reaches into its skeletal chest, grabs at one of _three_ blue crystals, and _crushes_ it. Immediately, you feel the lich's will bolstered with arcane power...

\exampleEnd

### Alternative Costs

By default, you must spend hit points to use a paragon defence. But if you want to use an alternative cost, consider some of the following options:

<ol>
	<li><strong>Cracked Armor:</strong> Reduce your AC by 1.</li>
	<li><strong>Vulnerability:</strong> You gain a damage vulnerability.</li>
	<li><strong>Frail:</strong> You are critically hit on a 19-20 (increasing to 18-20/17-20/etc.).</li>
	<li><strong>Weakness:</strong> Your attacks deal half damage until the end of your next turn.</li>
	<li><strong>Mental Shock:</strong> Roll a d20. If you roll less than 10, you are stunned until the end of your next turn.</li>
</ol>

Mix and match these costs to create a range of paragon defences for your scalers.

\contentEnd