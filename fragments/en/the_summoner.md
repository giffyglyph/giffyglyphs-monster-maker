\contentBegin { "class": "page--mm-the-summoner", "header": "fairy-wand", "bg": "pages/text/bg-glyph.png" }

# The Summoner

In battle, the odds of success can change at any moment—when a brawl breaks out, you never know who else might join the fray. Keep an eye out for anyone who might raise an alarm or summon new reinforcements into battle—take them out fast to keep the odds in your favour.

This chapter introduces _summoners_ and how to use them in your combat encounters.

\exampleBegin

Brindergast breathlessly pushed open the door to the ossuary. In a few short seconds, the heroes would catch up to him—but they would not catch him alone.

Brindergast began his resurrection spell—the long-dead bones started to shudder and move...

\exampleEnd

## Summoners

A _summoner_ is a special type of combatant that can bring reinforcements into battle—a lone priest beseeching her dark god for protectors, a hidden alarm loudly rousing some nearby guards, a sickly necromancer raising foul undead from the graveyard.

There are five basic categories of summoner, each with a particular theme and summoning style: scouter, conjurer, animator, beseecher, and commander.

\panelBegin { "type": "table", "title": "Summoner Categories" }

|Type|Description|
|---|---|
|Animator|You craft new reinforcements.|
|Beseecher|You ask for reinforcements.|
|Commander|You demand some reinforcements.|
|Conjurer|You pull reinforcements from thin air.|
|Scouter|You rouse and rally nearby reinforcements.|

\panelEnd

\columnbreak

<div data-blueprint="scaler">
---
name: Fledgling Necromancer
type: monster
portrait: hood.svg
size:
  primary: medium
category:
  primary: humanoid
  secondary: human
combat:
  level: 6
  rank: grunt
  role: supporter
  subrole: booster
abilityModifiers:
  ranking:
    - int
    - cha
    - con
    - wis
    - dex
    - str
savingThrows:
  ranking:
    - con
    - int
    - cha
    - wis
    - dex
    - str
movement:
  speeds:
    walk:
      baseSpeedPercentage: 100
languages:
  - common
damageResistances:
  - necrotic
skills:
  arcana: trained
items:
  - spellbook
features:
  -
    name: Wither Flesh
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: rsav
      attack:
        defence: con
        attribute: int
      area: range 30 ft.
      targets: one creature
      onHit: "[damage, d8|keepStatic] necrotic damage."
  -
    name: Soul Blade
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
      targets: one creature
      onHit: "[damage, d4|keepStatic] necrotic damage."
  -
    name: Undying Resilience
    rarity: uncommon
    activation:
      type: action
      quantity: 1
    activity:
      type: utility
      area: range 30 ft.
      targets: one friendly undead creature
      onHit: the creature gains +4 AC and advantage on STR and CON saving throws for up to one minute.
    uses:
      requiresConcentration: true
      type: cooldown
      cooldown:
        target: 3
  -
    name: Reanimator
    rarity: rare
    activation:
      type: action
      quantity: 1
    activity:
      type: utility
      area: range 30 ft. (does not require line of sight)
      targets: 1-8 humanoid corpses
    description: |
      <p>You spend SP to reanimate the targeted corpses as [level]th-level undead creatures. These creatures act after your turn and obey your commands for up to 1 hour, at which point they revert to humanoid corpses.</p>
      <ul class="list--boxed list--columns-2">
        <li><strong>1 SP:</strong> 4 Minions</li>
        <li><strong>1 SP:</strong> 1 Grunt</li>
        <li><strong>2 SP:</strong> 8 Minions</li>
        <li><strong>2 SP:</strong> 4 Minions, 1 Grunt</li>
        <li><strong>2 SP:</strong> 2 Grunts</li>
        <li><strong>2 SP:</strong> 1 Elite</li>
      </ul>
    uses:
      type: charges
      charges:
        maximum: 2
        resource: sp
        period: lr
</div>

\contentEnd

\contentBegin { "class": "page--mm-the-summoner" }

### The Animator { "index": "A" }

Animators craft reinforcements from the inanimate and non-living. These summoners use their power to affect, awaken, or control something in the environment—use them when you want to foreshadow threats and turn the landscape against the party.

\exampleBegin

* A sorcerer uses lightning magic to energise some clockwork constructs.
* A terramancer places a hand on a giant stone golem and brings it to life.
* A dark pylon pulses necromantic power into the ground to resurrect the dead.
* A green dragon roars in the dark forest to awaken the slumbering treants.

\exampleEnd

### The Beseecher { "index": "B" }

Beseechers make a plea, bargain, or petition for aid. These summoners rely on the patronage of others to provide reinforcements—use them when you want to turn a seemingly weak obstacle into a significant danger.

\exampleBegin

* A druid calls out to the land and summons the local wildlife to their aid.
* A warlock makes a sacrificial bargain and is rewarded with four gibbering abominations.
* A bandit uses promises of gold and treasure to turn the angry crowd on _you_.
* A cleric prays to their god and is blessed with a celestial, paragon defender.

\exampleEnd

### The Commander { "index": "C" }

Commanders make an irrefutable demand for aid. These summoners rely on underlings, adjutants, and vassals to fight in their service—use them when you want to showcase the influence and power of a monster.

\exampleBegin

* A noble commands her reluctant bodyguards to fight in her place.
* The commander of the guard blows a loud horn to rally his troops.
* An emperor orders the elite guards to ready their weapons and fight.
* A strange, psionic monolith dominates the nearby villagers and commands them to protect it.

\exampleEnd

### The Conjurer { "index": "D" }

Conjurers pull reinforcements from seemingly thin air, turning the insubstantial into a _very substantial_ threat. These summoners rely on their own powers and resources to conjure allies—use them to when you want to surprise the party with unexpected reinforcements.

\columnbreak

\exampleBegin

* A mad artificer throws four metal cubes on the ground which unfold into modron minions.
* A pyromancer reaches into the plane of fire to unleash a blazing, paragon elemental.
* A druid pulls a small rat from a pocket and uses _Enlarge_ to transform it into an elite, giant rat.
* A cracked soul trap releases two howling, mad wraiths.

\exampleEnd

### The Scouter { "index": "E" }

Scouters rouse and rally nearby reinforcements with a sign, signal, or sound. These are your alarms, sentries, guards, and lookouts—use them to create obstacles that the party should try to avoid or quickly subdue.

\exampleBegin

* A tripwire alarm unleashes a piercing screech to alert the kobold guardians.
* A drow hunter fires a flare into the sky to summon the rest of their hunting party.
* A surprised sentry rings a bell and cries alarm to rouse the city guard.
* An arcane ward sparks when touched, opening the ancient sarcophagi.

\exampleEnd

## Summoning Power

To bring reinforcements into battle, a summoner must spend _summoning power_ (SP)—the more powerful the reinforcement, the more power required to summon it.

The _Summoning Costs_ table below contains the basic costings for each combat rank. By default, summoned reinforcements inherit the combat level of their summoner—by changing this level, you can change the SP cost.

For every 3 levels you reduce the combat level, reduce the SP cost by half. For every 3 levels you raise the combat level, double the SP cost.

\panelBegin { "type": "table", "class": "panel--summoning-costs", "title": "Summoning Costs" }

<table>
	<thead>
		<tr>
			<th rowspan=2>Combat Rank</th>
			<th colspan=3><span class="spacer">Cost (SP)</span></th>
		</tr>
		<tr>
			<th>LVL-3</th>
			<th>LVL+0</th>
			<th>LVL+3</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Minion × 4</td>
			<td>0.5</td>
			<td>1</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Grunt</td>
			<td>0.5</td>
			<td>1</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Elite</td>
			<td>1</td>
			<td>2</td>
			<td>4</td>
		</tr>
		<tr>
			<td>Paragon T3</td>
			<td>1.5</td>
			<td>3</td>
			<td>6</td>
		</tr>
		<tr>
			<td>Paragon T4</td>
			<td>2</td>
			<td>4</td>
			<td>8</td>
		</tr>
		<tr>
			<td>Paragon T5</td>
			<td>2.5</td>
			<td>5</td>
			<td>10</td>
		</tr>
		<tr>
			<td>Paragon T6</td>
			<td>3</td>
			<td>6</td>
			<td>12</td>
		</tr>
	</tbody>
</table>

\panelEnd

\exampleBegin

Brindergast wants to summon 4 minions and 1 grunt. The necromancer likes his thralls to be _competent_, and so his summoned undead are of equal level (+0)—they cost a total of 2 SP. 

\exampleEnd

\contentEnd

\contentBegin { "class": "page--mm-the-summoner" }

### Regaining Summoning Power

Summoners typically recover all expended SP when they finish a long rest. However, you may want to use _other_ forms of recovery to reflect the particular fiction or habits of your summoner—for example:

* **Zone of Power:** When you start your turn within a particular area, you regain 1 expended SP.
* **Restorative:** When you consume a summoning stone, you regain up to 50% of your expended SP.
* **Escalation:** When battle begins, you have 0 SP. You regain 1 SP at the start of your turns.
* **Soul Siphon:** When you reduce a creature to 0 hit points, you regain 50% of your expended SP.

Use recovery options to create a variety of exciting, summoner-themed encounters.

## Making a Summoner

You can turn any scaling monster into a summoner with these three basic steps:

### Create an Uncommon Action { "index": 1 }

A summoning ability is an _uncommon_ action with a limited amount of power (i.e. summoning power) and a single effect (i.e. summoning reinforcements).

When you create this action, assign any range/target restrictions as necessary (see p<span data-blueprint="value">{ type: page.number, selector: "h2[id='ranges']" }</span> for more details).

#### Choose a Duration

Summoned reinforcements rarely last forever. Choose one of the following durations:

* **Time:** The reinforcements leave, fade, or vanish after a period of time passes (typically 1 hour). This is most common with animators and conjurers.
* **Condition:** The reinforcements leave, fade, or vanish when a certain condition is fulfilled—the enemies are defeated, an oath is satisfied, an order is carried out, etc. This is most common with beseechers, commanders, and scouters.

### Allocate Power { "index": 2 }

Next, set the _maximum_ amount of summoning power your summoner can hold at one time—the more SP, the more they can summon into battle. Highlight this power with a notable, visual flourish to forewarn the party.

\panelBegin { "type": "aside", "title": "Encounter Costs" }

When you build _scaling encounters_ (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='making-encounters']" }</span>), your summoning power affects your value—the more SP you have, the more _expensive_ you are to put in an encounter.

As a rule of thumb, think of 1 summoning power as 1 additional grunt for the encounter.

\panelEnd

\columnbreak

### Pick your Reinforcements { "index": 3 }

Now you know how much power you have to spend, you can create a _summoning list_ to determine _what_ your summoner can summon—a handful of minions, a powerful elite, a dangerous paragon, etc.

Choose some options from the _Reinforcements_ table below, or create your own. As a general rule of thumb, a single summoner shouldn't be able to spend more than 6 SP with one action.

\panelBegin { "type": "table", "class": "panel--reinforcements", "title": "Reinforcements" }

<table>
	<thead>
		<tr>
			<th>SP</th>
			<th>Reinforcements</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th colspan=2 class="header"><span>Instant</th>
		</tr>
		<tr>
			<td>1</td>
			<td>1 × Grunt</td>
		</tr>
		<tr>
			<td>1</td>
			<td>4 × Minion</td>
		</tr>
		<tr>
			<th colspan=2 class="header"><span>Short Countdown</th>
		</tr>
		<tr>
			<td>2</td>
			<td>1 × Elite</td>
		</tr>
		<tr>
			<td>2</td>
			<td>2 × Grunt</td>
		</tr>
		<tr>
			<td>2</td>
			<td>4 × Minion, 1 × Grunt</td>
		</tr>
		<tr>
			<td>2</td>
			<td>8 × Minion</td>
		</tr>
		<tr>
			<th colspan=2 class="header"><span>Long Countdown</th>
		</tr>
		<tr>
			<td>3</td>
			<td>1 × Paragon T3</td>
		</tr>
		<tr>
			<td>3</td>
			<td>3 × Grunt</td>
		</tr>
		<tr>
			<td>3</td>
			<td>4 × Minion, 1 × Elite</td>
		</tr>
		<tr>
			<td>3</td>
			<td>4 × Minion, 2 × Grunt</td>
		</tr>
		<tr>
			<td>3</td>
			<td>8 × Minion, 1 × Grunt</td>
		</tr>
		<tr>
			<td>3</td>
			<td>12 × Minion</td>
		</tr>
		<tr>
			<td>4</td>
			<td>1 × Paragon T4</td>
		</tr>
		<tr>
			<td>4</td>
			<td>2 × Elite</td>
		</tr>
		<tr>
			<td>4</td>
			<td>4 × Minion, 1 × Grunt, 1 × Elite</td>
		</tr>
		<tr>
			<th colspan=2 class="header"><span>Extended Countdown</th>
		</tr>
		<tr>
			<td>5</td>
			<td>1 × Paragon T5</td>
		</tr>
		<tr>
			<td>6</td>
			<td>1 × Paragon T6</td>
		</tr>
		<tr>
			<td>6</td>
			<td>3 × Elite</td>
		</tr>
	</tbody>
</table>

\panelEnd

#### Summoning Time

Reinforcements may not always appear the _instant_ they are summoned—the bigger your summon, the longer it takes to complete.

When you perform a summon, use the following guidelines to see when your reinforcements will arrive.

* **Instant:** (max. 1 SP) The reinforcements appear instantly. This increases the rarity of your action by one step to _rare_.
* **Short Countdown:** (max. 2 SP) Start a countdown clock at 1. Reduce the clock by 1 at the start of your turns (or, if you are removed from play, where your turn would normally be). When the clock reaches 0, the reinforcements appear.
* **Long Countdown:** (max. 4 SP) Start a countdown at 2.
* **Extended Countdown:** Start a countdown at 3.

\exampleBegin

Brindergast spends 2 points of summoning power to raise 4 skeleton shamblers (minions) and 1 skeleton shielder (grunt).

This requires a _short_ (1) countdown—the skeletons won't appear until the start of Brindergast's next turn. 

\exampleEnd

\contentEnd