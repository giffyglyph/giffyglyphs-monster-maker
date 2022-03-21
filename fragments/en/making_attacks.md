\contentBegin { "class": "page--mm-making-attacks", "header": "broad-dagger", "bg": "pages/text/bg-glyph.png" }

# Making Attacks

Once you've built a raging monster or lethal hazard, it's time to unleash it on your players. To be a _true_ threat on the battlefield, your scalers need to be able to attack—slashing wildly with a sharp sword, biting down with a strong jaw, piercing flesh with sharp spikes, casting dark spells with sinister magics—but how do you build and balance those attack actions?

This chapter describes how you can make attacks with your scalers in a variety of fun ways, introducing _basic attacks_ and _advanced attacks_.

## Basic Attacks

A basic attack is the most straightforward form of attack action: you attempt to _hit_ and _hurt_ a specific target.

You don't need to create a _specific_ action for your scaler to make a basic attack—with just three combat stats ("ATK Bonus", "ATK DCs", and "DMG") you can improvise _any_ basic attack that feels appropriate for your monster/hazard.

To get started, perform the following steps:

1. **Narrate:** First, describe _how_ your scaler is attacking. This description will influence the _range_ and _damage type_ of your attack—for some examples of this in action, see the _Eladrin Stormcaller_.
2. **Aim:** Choose a target within a sensible range—typically reach, 30 ft., or 60 ft.
3. **Attack:** Either a) make an attack roll vs AC using your attack bonus or b) have the target make a saving throw against a DC within your attack DC range.
4. **Damage:** If your attack hits, you deal damage.

In this way, you can make any kind of freeform, improvised, _basic_ attack with ease. Use this freedom to be _reactive_ with your monsters and hazards, shaping their attacks to the fiction.

\columnbreak

<div data-blueprint="scaler">
---
name: Eladrin Stormcaller
type: monster
size:
  primary: medium
category:
  primary: humanoid
alignment: neutralEvil
combat:
  level: 6
  rank: grunt
  role: controller
abilityModifiers:
  ranking:
    - dex
    - wis
    - int
    - con
    - str
    - cha
movement:
  speeds:
    walk:
      baseSpeedPercentage: 100
awareness:
  senses:
    darkvision: 60
languages:
  - elven
  - common
</div>

\exampleBegin { "class": "example--placeholder", "lines": 7 }

\exampleEnd

\panelBegin { "type": "aside", "title": "Non-attacking Actions" }

An attack action is defined as any action taken against an unwilling or resistant target (i.e. something that requires you to make an attack roll or have a target roll a saving throw). However, you can also use the process described in this chapter to create _non-attacking_ actions.

\panelEnd

\contentEnd

\contentBegin { "class": "page--sidebar-inner page--mm-making-attacks" }

## Advanced Attacks

With _advanced_ attacks, your monsters and hazards can sow chaos in more elaborate ways—dealing ongoing damage, inflicting status conditions, forcing movement, destroying resources, etc.

To create an advanced attack, follow these steps:

1. **Rarity:** First, decide how _rare_ your attack is—the rarer it is, the more powerful it can be.
2. **Range:** Pick an effective range for the attack—are you aiming at particular targets or affecting a wide area?
3. **Targets:** Choose how many targets you get to attack.
4. **Activation:** Choose how long your attack should take to power up and apply effects.
5. **Effects:** Give your attack some _bite_ with attacking effects—damage, conditions, forced movement, targeted resources, etc.
6. **Defence:** Finally, decide how your targets will be able defend against your attack—do they use armor or a specific saving throw?

Use advanced attacks to equip your scalers with a variety of fun, pre-made, and balanced abilities.

\exampleBegin { "class": "example--placeholder", "lines": 3 }

\exampleEnd

### How Many Actions?

Though it may be tempting to equip your creations with a wide variety of advanced attacks, be careful not to _overcomplicate_ things. Too many actions can overwhelm both GM and players—especially when paired with additional features like passive traits, combat role powers, triggered abilities, and paragon power.

As a rule of thumb, use the following guidelines when you equip your monsters and hazards:

<!-- \panelBegin { "type": "table", "title": "Recommended Actions" }

|Combat Rank|Common|Uncommon|Rare|
|---|:-:|:-:|:-:|
|Minion (Reliable)|1|—|—|
|Minion (Specialist)|—|1|—|
|Minion (Opportunist)|—|—|1|
|Grunt (Reliable)|2|1|—|
|Grunt (Opportunist)|2|—|1|
|Elite|3|2|1|
|Paragon|4|3|2|

\panelEnd

\panelBegin { "type": "aside", "title": "Remember to Improvise" }

If your scaler has advanced attacks, you can still improvise basic attacks as-and-when necessary. Use them to fill in the gaps and handle unexpected situations, building on the themes of your premade actions.

\panelEnd -->

\sidebarBegin { "class": "sidebar--wide" }

<div data-blueprint="scaler">
---
name: Aberrant Monolith
type: hazard
size:
  primary: large
category:
  primary: hazard
  secondary: aberration
combat:
  level: 6
  rank: elite
  role: controller
  subrole: hexer
abilityModifiers:
  ranking:
    - cha
    - con
    - str
    - wis
    - int
    - dex
trigger: <p>You lie <em>dormant</em> until a willing creature feeds you fresh blood. You may then remain <em>active</em> for 1 hour per unit of blood consumed (where one unit equals one hit die).</p><p>If an <em>unwilling</em> creature touches you while you are dormant, it must make a saving throw (DC [attackDcCon] CON) or lose one hit die.</p>
movement:
  speeds:
    walk:
      override: 5
damageThreshold: 10
damageImmunities:
  - psychic
conditionImmunities: 
  - blinded
  - charmed
  - deafened
  - exhaustion
  - frightened
  - stunned
  - paralyzed
  - prone
features:
  -
    name: Otherworldly Vision
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: save
      attack:
        defence: int
        attribute: cha
      area: range 30 ft.
      targets: one creature
      requirements: one grabbed creature.
      onHit: "[damage, d12|keepStatic] psychic damage."
  -
    name: Aberrant Bolt
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: rwak
      attack:
        defence: ac
        attribute: cha
      area: range 30 ft.
      targets: two creatures
      onHit: "[round(damage * 0.5), d8|keepStatic] force damage."
  -
    name: Blessing of the Beyond
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: utility
      area: range 30 ft.
      targets: one aberrant creature
      onEffect: The creature has advantage on their next attack roll.
  -
    name: Gibbering Scream
    rarity: uncommon
    activation:
      type: action
      quantity: 1
    activity:
      type: msav
      attack:
        defence: int
        attribute: cha
      area: reach 10 ft.
      targets: all creatures
      onHit: "[round(damage * 0.75), d8|keepStatic] psychic damage and the creature is frightened until the end of its next turn."
    uses:
      type: recharge
      recharge:
        target: 5
  -
    name: Kneel Before the Great Ones
    rarity: uncommon
    activation:
      type: action
      quantity: 1
    activity:
      type: rsav
      attack:
        defence: cha
        attribute: cha
      area: ranged 30 ft.
      targets: two creatures
      onHit: The creature is pulled 15 ft. towards you and falls prone.
    uses:
      type: charges
      charges:
        maximum: 3
        period: sr
  -
    name: Blessing of the Great Ones
    rarity: rare
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
      onHit: "[damage * 2, d12|keepStatic] psychic damage and the creature gains one level of exhaustion until it next finishes a short or long rest."
    uses:
      type: charges
      charges:
        maximum: 1
        period: lr
</div>

\sidebarEnd

\contentEnd

\contentBegin { "class": "page--mm-making-attacks" }

## Rarities

Your first step is to describe the intended power of your new attack with a _rarity_. Are you creating a day-to-day **common** attack, a special <strong>uncommon</strong> ability, or a **rare** showstopper that can change the course of battle?

The rarer you make your attack, the less often you can use it—but the more _spectacular_ it becomes when you do, unleashing more _effects_ in combat

Flesh out the fighting style of your scalers with a range of common, uncommon, and rare attacks.

\panelBegin { "type": "table", "title": "Attack Rarities" }

|Type|Description|Effect Points (EP)|
|---|---|:-:|
|Common|Can be used at will.|1|
|Uncommon|Has a limited number of uses.|2|
|Rare|Used once per long rest.|3|

\panelEnd

### Common Attacks { "index": "A" }

A _common_ attack can be performed at will without any significant limitation or overhead—slashing with a sword, lashing out with a tail, casting a magical cantrip, etc.

This is a basic, reliable action that can apply _one_ effect to your target—for example:

* Deal some direct damage.
* Inflict a condition (grappled, blinded, prone, etc.).
* Force the target to move.

Use common attacks to define your core combat abilities and fighting style.

\exampleBegin

The GM is building an orc berserker—a brutal, dour mercenary from the _Bloodshore Ring_.

For some simple variety, they equip the berserker with three common attacks: **Slash** (deals direct damage), **Shove** (moves the target back), and **Headbutt** (inflict the prone condition).

\exampleEnd

### Uncommon Attacks { "index": "B" }

Uncommon attacks have limited uses, requiring special resources (stamina, rage, focus, spellpower, ammunition, etc.) or time to gather power and recharge strength.

Uncommon attacks are more powerful than their common counterparts, however, and can apply _two_ effects when they hit—for example:

* Deal direct damage _twice_.
* Deal direct damage _and_ inflict a condition.
* Deal ongoing damage _and_ destroy a resource.
* Forced movement _and_ deal ongoing damage.

When you create an uncommon attack, choose one of three limitations: **charges**, **recharging**, or **cooldown**.

\columnbreak

#### Charges

Charge attacks have a <em>resource pool</em>—ammunition, stamina, mana, fuel, rage, reinforcements, etc. Each time you use the attack, you consume one or more resources from this pool until it is exhausted.

Charges may be recovered when a particular event is completed—taking a short rest, gathering ammunition, drinking a potion, becoming bloodied, etc. Depending on how much effort the event takes, you may recover either 25%, 50%, or 100% of your expended charges.

Choose an event from the _Charge Events_ table below, or describe your own. Use these events to build fun set pieces and synergies into your encounters.

\panelBegin { "type": "table", "title": "Charge Events" }

|d12|Event|
|:-:|---|
|1|You finish a short or long rest.|
|2|You become bloodied or enraged.|
|3|You suffer damage of a particular type.|
|4|You collect (or are given) new ammunition.|
|5|You drink a special potion.|
|6|You absorb some magical power.|
|7|An ally inspires you.|
|8|You land a critical hit.|
|9|You are critically hit by an attack.|
|10|A creature misses you with an attack.|
|11|A creature moves adjacent to you.|
|12|You spend an action to recover a charge.|

\panelEnd

\exampleBegin

A kobold slinger is equipped with an uncommon **Stink Pot _(3 charges)_** ranged attack that 1) deals poison damage and 2) inflicts the _Poisoned_ condition.

This attack can be used 3 times (one attack, one pot) before the slinger runs out of ammunition.

The slinger can be given new pots by _kobold runners_, nimble minions who dash around during the encounter to resupply the slingers—a supply chain that cunning adventurers can disrupt...

\exampleEnd

#### Recharging

When you use a recharging attack, it becomes exhausted. You can use it again when either a) the attack is recharged or b) you complete a short or long rest.

At the start of your turn, roll a d6 to see if your attack has recharged—if you roll within the specified range, you can use the attack again as normal.

Choose a range from the _Recharge Time_ table below. The narrow the range, the longer your attack will take to recharge—but the more _accurate_ it will be.

\panelBegin { "type": "table", "title": "Recharge Time" }

|Name|Recharge Range|Chance / Attempt|Av. Turns to Recharge|Attack Bonus/DCs|
|:--|:-:|:-:|:-:|:-:|
|Rapid|4-6|50%|1|−2|
|Steady|5-6|33%|2|—|
|Slow|6|16%|4|+2|

\panelEnd

\contentEnd

\contentBegin { "class": "page--mm-making-attacks" }

\exampleBegin

A tiefling pyromancer is equipped with an uncommon **Scorch _(recharge 4-6)_** melee attack. Normally, her attack bonus is +8—but because the attack is _rapid_, she rolls with a −2 penalty.

During her turn, she uses the attack to hit Valiant with some fire damage. The attack is exhausted. At the start of her next turn, the GM rolls a d6. The result is a 3—the attack has not yet recharged.

\exampleEnd

#### Cooldown

When you use a cooldown attack, it becomes exhausted. You can use it again once a specific period of time has passed—typically 2, 3, or 4 rounds.

When you exhaust a cooldown attack, start a countdown timer. At the start of your turn, reduce that timer by 1. Once it reaches 0, the attack can be used again.

Choose either 2, 3, or 4 turns for your cooldown attack. The longer the cooldown period, the less often you can use the attack—but the more _accurate_ it will be.

\panelBegin { "type": "table", "title": "Cooldown Time" }

|Name|Turns Required|Attack Bonus/DCs|
|:--|:-:|:-:|
|Rapid|2|−2|
|Steady|3|—|
|Slow|4|+2|

\panelEnd

\exampleBegin

The GM equips a monstrous chimera with an uncommon **Acid Spray _(cooldown 5)_** area attack. Normally, the chimera's attack DC is 15—but because the attack is _slow_, the DC gains a +2 bonus.

During it's turn, the chimera uses the attack and then starts a new countdown timer at 5 (using a physical d6 to easily track the time).

At the start of the chimera's following turns, the timer is reduced by 1 until—at the start of the fifth following turn—the timer reaches 0.

\exampleEnd

### Rare Attacks { "index": "C" }

Rare attacks are extra-special, one-use abilities that take a significant time to recover. Once used, a rare attack recharges only at the end of a long rest.

These are some of your most powerful attacks, showcasing the particular strengths of your fighting style—limit breaks, overdrive techniques, masterwork magic, etc.

Because they can be used only once, rare attacks a) gain a +2 attack bonus/DC and b) can apply _three_ effects when they hit—for example:

* Deal _triple_ direct damage.
* Deal _double_ direct damage _and_ inflict a condition.
* Force movement _and_ deal _double_ ongoing damage.

When you describe a rare attack, use plenty of flavor and description—these are your most dangerous and _exciting_ abilities, so put on a good show.

\columnbreak

\exampleBegin

The GM equips an elite, greatsword-wielding soldier with an **Omnislash _(rare)_** attack. This brutal strike deals _triple_ damage on a successful hit with a +2 bonus to the attack roll—a devastating ability.

During it's turn, the soldier uses _omnislash_ to attack Krazak. The attack is then exhausted and can't be used again until the soldier finishes a long rest.

\exampleEnd

#### Recovery

Elites and paragons may recovery a rare attack when a particular event is triggered—being bloodied, draining a pool of power, sacrificing a victim, etc.

However, this is at the cost of <em>accuracy</em>. If you decide to add a recovery method to your rare attack, it loses the +2 bonus to the attack roll/DC.

Choose an event from the _Recovery Events_ table below, or create your own. 

\panelBegin { "type": "table", "title": "Recovery Events" }

|d6|Event|
|:-:|---|
|1|You become bloodied or enraged.|
|2|A significant ally is reduced to 0 hit points.|
|3|You collect (or are given) new ammunition.|
|4|You make a significant sacrifice.|
|5|You absorb a burst of power.|
|6|You reduce a player character to 0 hit points.|

\panelEnd

\exampleBegin

Two elite soldiers are fighting side-by-side against the party, both equipped with a rare _omnislash_ attack. When one of the soldiers is reduced to 0 hit points, the other soldier recovers it's omnislash attack.

Because this rare attack can be recovered, it loses the +2 bonus to the attack roll.

\exampleEnd

\panelBegin { "type": "aside", "title": "Build Fun Synergies" }

Attack rarities and recharge conditions make it _extremely_ easily to create fun, fiction-rich synergies for your combat encounters. For example:

---

* **Reloader:** A static, inanimate hazard (e.g. a rockfall trap) has an ability with _3 charges_. It can be manually reset by another monster.
* **Lucky:** A monster has a _slow recharge_ ability. If they are within range of a supporting hazard or monster, they roll their recharge with advantage.
* **Booster:** A hazard has a _slow cooldown_ ability. Another monster (e.g. a supporter) has an ability to reduce the cooldown by 1.
* **Battery:** A monster has an ability with _2 charges_. If they are standing within range of a particular hazard (e.g. an arcane pylon), the attack costs 0 charges.

---

Use these interplays to help create little narratives and challenges within your encounters.

\panelEnd

\contentEnd

\contentBegin { "class": "page--mm-making-attacks" }

## Activation

Activations allow you to change when your attack _hits_ and when it causes <em>effects</em>—a powerful tool when you want to customize the tone and utility of an attack.

There are three activation categories: **instant**, **delayed**, and **dooming**. Use the details below to help choose the right one for your attack.

### Instant { "index": "A" }

When you activate an _instant_ attack, you make the attack immediately and apply effects as the target is hit. These are your straightforward attacks—you _hit_ then _harm_.

### Delayed { "index": "B" }

When you activate a _delayed_ attack, you must wait until a period of time elapses before making the attack roll.

These are your countdown attacks—things that _tick_ or _charge up_ (i.e. a bomb that explodes after 12 seconds, charging up a spell, aiming a shot). Use these to threaten areas and encourage movement to avoid taking a hit.

Delayed attacks require an _uncommon_ or _rare_ action with an area range.

#### Activating a Delayed Attack

You can activate a delayed attack by first spending your action to initiate the action. Clearly describe what you are doing (charging power, throwing an explosive, causing a cave-in, etc.) and the area that will be affected by the attack. Then:

1. Create a visible _countdown timer_.
2. At the start of each of your turns, reduce this timer by 1.
3. Once the timer reaches 0, roll the attack or request saving throws. Apply effects immediately to any affected target.

This process may be interrupted if, when the timer reaches 0, you are unable to perform actions for any reason—stunned, paralyzed, reduced to 0 hit points, etc.

\exampleBegin { "class": "example--placeholder", "lines": 7 }

\exampleEnd

\columnbreak

\panelBegin { "type": "aside", "title": "Use Visible Clocks" }

Whenever you start a countdown, try to make it clearly visible to the players. Countdowns serve two important purposes: 1) to _inform_ your players that something will happen soon (even if they don't know _exactly_ what), and 2) to _build anticipation_ about the event.

Consider using a d6 or other die as a physical timer. If the countdown is on a player (i.e. a doom clock), give them temporary ownership of the die as a tangible relic of their approaching doom.

\panelEnd

### Dooming { "index": "C" }

When you hit a target with a _dooming_ attack, the effects don't happen until a period of time elapses.

These are your pressuring attacks—things that _corrupt_, _spread_, or _build up_ (i.e. a corruption of pain, a spreading fire, a painful toxin).

Dooming attacks require an _uncommon_ or _rare_ action with an aimed range.

#### Activating a Dooming Attack

You can activate a dooming attack by first describing the action and making the attack as normal. If the attack hits the target, it feels an immediate sense of _doom_ and gains a new countdown timer—the _doom_ clock.

At the start of each of the target's turns, reduce this timer by 1. Once it reaches 0, doom approaches—the target immediately suffers the attack's effects.

\exampleBegin { "class": "example--placeholder", "lines": 9 }

\exampleEnd

#### Countering Doom

A doomed target may be able to cancel the countdown with a reasonable countermeasure—bathing in water to quench fire, pulling out a poisonous stinger, focusing the mind against a hallucination, etc. Depending on the action taken, this may require an ability check.

If you allow your doom to be countered in some way, the consequences of the attack can be more severe—it can deal one additional effect.

\regionBegin { "class": "region--fixed-bottom region--border-top" }

\panelBegin { "type": "table", "title": "Activation Categories" }

|Category|Attack|Effect|Restrictions|Notes|
|---|---|---|---|---|
|Instant|Immediate|Immediate|—|—|
|Delayed|After a countdown |Immediate|Area ranges only, No common attacks|—|
|Doomed|Immediate|After a countdown|Aimed ranges only, No common attacks|+1 effect if can be countered.|

\panelEnd

\regionEnd

<!-- ### Ongoing { "index": "E" }

An _ongoing_ attack can maintain its effects over longer periods of time, often at the cost of some effort—typically _concentration_.

These are your persistent attacks—things that _curse_, _enchant_, and _transform_ (i.e. a curse of blindness, a wall of stone, a polymorph). Use these to threaten adventurers and reshape the battlefield.

\exampleBegin { "class": "example--placeholder", "lines": 4 }

\exampleEnd

Ongoing attacks can't be made as part of a multiattack and must be of rare attack rarity.

#### Using Concentration

Because of their extended duration, ongoing attacks are weaker—you deal one fewer effect. However, this can be negated if you use _concentration_ (or some other significant resource) to maintain the effect.

\exampleBegin { "class": "example--placeholder", "lines": 2 }

\exampleEnd -->

\contentEnd

\contentBegin { "class": "page--mm-making-attacks" }

## Ranges

A _range_ defines the threatening boundaries of your attack—where are targets at risk and where are they safe?

There are two categories of range—**aimed** and **area**. Choose one for your attack and use the templates provided to help define the specific details.

### Aimed { "index": "A" }

Aimed ranges focus on specific targets—you are trying to affect things close by or at a distance from yourself.

### Area { "index": "B" }

Area ranges focus on specific regions—you are trying to affect things within a certain space (a sphere, a cone, a line, a cube, etc.).

To use an area range, your action must be _uncommon_ or _rare_. Try to use smaller areas with your uncommon actions than with your rare actions.

**Common Actions:** You can use an area range with a common action if it has a terrain-modifying effect (pX);

\panelBegin { "type": "table", "title": "Range Templates" }

<table>
	<thead>
		<tr>
			<th>Type</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th colspan="2"><span class="header">Aimed</span></th>
		</tr>
		<tr>
			<td>Ranged</td>
			<td>Ranged [15/30/60/120] ft.</td>
		</tr>
		<tr>
			<td>Reach</td>
			<td>Reach [5/10/15/20] ft.</td>
		</tr>
		<tr>
			<td>Sight</td>
			<td>A target you can see within [30/60/120] ft.</td>
		</tr>
		<tr>
			<td>Sense</td>
			<td>A target you can sense within [30/60/120] ft.</td>
		</tr>
		<tr>
			<th colspan="2"><span class="header">Area</span></th>
		</tr>
		<tr>
			<td>Circle</td>
			<td>A [5/10/15/20] ft. radius circle centered on a point within [30/60] ft.</td>
		</tr>
		<tr>
			<td>Cone</td>
			<td>A [15/30/60] ft. cone extending from yourself.</td>
		</tr>
		<tr>
			<td>Cube</td>
			<td>A [15/30/60] ft. cube extending from yourself.</td>
		</tr>
		<tr>
			<td>Cylinder</td>
			<td>A [5/10/15/20] ft. radius, [20/40/60] ft. high cylinder centered on a point within [30/60] ft.</td>
		</tr>
		<tr>
			<td>Line</td>
			<td>A [15/30/60] ft. line that is [5/10] ft. wide.</td>
		</tr>
		<tr>
			<td>Reach</td>
			<td>Reach [5/10/15/20] ft.</td>
		</tr>
		<tr>
			<td>Ring</td>
			<td>A [5/10/15/20] ft inner radius, [10/15/20] ft. outer radius ring centered on a point within [30/60]&nbsp;ft.</td>
		</tr>
		<tr>
			<td>Sphere</td>
			<td>A [5/10/15/20] ft. radius sphere centered on a point within [30/60] ft.</td>
		</tr>
		<tr>
			<td>Square</td>
			<td>A [5/10/15/20] ft. square centered on a point within [30/60] ft.</td>
		</tr>
		<tr>
			<td>Zone</td>
			<td>An arbitrary region of influence.</td>
		</tr>
	</tbody>
</table>

\panelEnd

\exampleBegin { "class": "example--placeholder", "lines": 8 }

\exampleEnd

\columnbreak

## Targets

To make an attack, you must define a target—what are you trying to affect? Choose a _quantity_ and _category_ from the tables below.

If your attack is particularly specific, consider applying an _alliance_, _alignment_ or _creature category_ as well.

\panelBegin { "type": "table", "class": "table--target-quantities", "title": "Target Options" }

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th colspan="2"><span class="header">Quantities</span></th>
		</tr>
		<tr>
			<td>None</td>
			<td>No target.</td>
		</tr>
		<tr>
			<td>One</td>
			<td>A single target.</td>
		</tr>
		<tr>
			<td>Limited</td>
			<td>A limited number [2/3/4] of targets.</td>
		</tr>
		<tr>
			<td>All</td>
			<td>All targets (area range only).</td>
		</tr>
		<tr>
			<th colspan="2"><span class="header">Categories</span></th>
		</tr>
		<tr>
			<td>Target</td>
			<td>Anything (a creature or an object).</td>
		</tr>
		<tr>
			<td>Object</td>
			<td>A discrete, inanimate item.</td>
		</tr>
		<tr>
			<td>Creature</td>
			<td>Anything that is not an object.</td>
		</tr>
		<tr>
			<th colspan="2"><span class="header">Alliances</span></th>
		</tr>
		<tr>
			<td>Friendly</td>
			<td>The target is friendly to you.</td>
		</tr>
		<tr>
			<td>Hostile</td>
			<td>The target is hostile to you.</td>
		</tr>
		<tr>
			<th colspan="2"><span class="header">Alignments</span></th>
		</tr>
		<tr>
			<td>Chaotic</td>
			<td>The target has a chaotic alignment.</td>
		</tr>		
		<tr>
			<td>Evil</td>
			<td>The target has an evil alignment.</td>
		</tr>
		<tr>
			<td>Good</td>
			<td>The target has a good alignment.</td>
		</tr>
		<tr>
			<td>Lawful</td>
			<td>The target has a lawful alignment.</td>
		</tr>
		<tr>
			<td>Neutral</td>
			<td>The target has a neutral alignment.</td>
		</tr>
	</tbody>
</table>

\panelEnd

\panelBegin { "type": "table", "class": "table--creature-categories", "title": "Creature Categories" }

* Aberration
* Beast
* Celestial
* Construct
* Dragon
* Elemental
* Fey
* Fiend
* Giant
* Humanoid
* Monstrosity
* Ooze
* Plant
* Undead

\panelEnd

\exampleBegin { "class": "example--placeholder", "lines": 6 }

\exampleEnd

### Limited Targets

When you use a _limited_ quantity, the maximum number of targets you can have is determined by your combat level—the higher your level, the more targets you can aim at.

\panelBegin { "type": "table", "title": "Limited Targets" }

|Combat Level|Max. Limited Targets|
|:-:|:-:|
|5th|2|
|11th|3|
|17th|4|

\panelEnd

\contentEnd

\contentBegin { "class": "page--mm-making-attacks" }

## Effects

When you use an action, you get to apply one or more <em>effects</em>—dealing some damage, moving the target around, destroying a precious resource, etc.

There are six themes of attacking effect (**damage**, **conditions**, **movement**, **resources**, **power**, and **terrain**) and seven specific effect categories—mix and match categories to build a variety of flavorful attacks.

\panelBegin { "type": "table", "class": "panel--effect-types", "title": "Effect Types" }

|Effect|Description|
|---|---|
|Direct Damage|The target takes direct damage.|
|Ongoing Damage|The target takes ongoing damage.|
|Inflict Conditions|The target gains conditions.|
|Force Movement|The target is forcibly moved.|
|Destroy Resources|The target loses precious resources.|
|Affect Terrain|Change the terrain in some fashion.|
|Empower Ally|Grant power to a nearby ally (or yourself).|

\panelEnd

### Effect Points

You gain a number of <em>effect points</em> when you create your action—typically 1 EP for commmon actions, 2 EP for uncommon actions, and 3 EP for rare actions.

Each time you add an effect to your action, spend 1 or more EP until your effect budget is exhausted.

#### Stacking Effects

You can use the same type of effect (e.g. dealing direct damage) multiple times within the same action, combining them for more _potent_ power.

\exampleBegin { "class": "example--placeholder", "lines": 10 }

\exampleEnd

\panelBegin { "type": "aside", "title": "Base, Effect, & Attack Damage" }

To help distinguish between three forms of _calculated_ damage, this supplement uses three key terms:

---

* **Base Damage:** The damage value as listed on your monster/hazard profile (typically as DMG).
* **Effect Damage:** The amount of damage you deal within a specific effect.
* **Attack Damage:** The total amount of damage you can deal with a specific attacking action.

\panelEnd

\columnbreak

\exampleBegin { "class": "example--placeholder", "lines": 60 }

\exampleEnd

\contentEnd

<!-- \contentBegin { "class": "page--mm-making-attacks" }

\regionBegin { "class": "region--fixed-bottom region--border-top" }

<div data-blueprint="scaler">
---
type: monster
name: Kaladraxis, Adult Red Dragon
size:
  primary: huge
category:
  primary: dragon
alignment: chaoticEvil
combat:
  level: 9
  rank: paragon
  players: 3
  role: striker
display:
  columns: 2
  colbreaks:
    - 10
speeds:
  climb: "[speed]"
  fly: "[speed * 2]"
senses:
  blindsight: 60
  darkvision: 120
abilityModifiers:
  ranking:
    - str
    - con
    - cha
    - int
    - wis
    - dex
damageImmunities:
  - fire
languages:
  - common
  - draconic
abilities:
  -
    name: Bite
    type: action
    rarity: common
    attack:
      type: rsak
      toHit: "[attackBonus|sign]"
      area: reach 10 ft.
      targets: one target
      onHit: "[round(damage * 0.75), d10|keepStatic] piercing damage and [round(damage * 0.25), d12|keepStatic] fire damage."
  -
    name: Claw Swipe
    type: action
    rarity: common
    attack:
      type: rsak
      toHit: "[attackBonus|sign]"
      area: reach 5 ft.
      targets: two targets, or the same target twice
      onHit: "[round(damage * 0.5), d8|keepStatic] slashing damage."
  -
    name: Tail Slam
    type: action
    rarity: common
    attack:
      type: rsak
      toSave:
        dc: "[attackDcStr]"
        save: str
      area: reach 15 ft.
      targets: two targets
      onHit: "the target is either a) knocked back 5 ft. or b) knocked prone."
  -
    name: Grab
    type: action
    rarity: common
    attack:
      type: rsak
      toHit: "[attackBonus|sign]"
      area: reach 5 ft.
      targets: one target
      onHit: "the target is grappled by you."
  -
    name: Fire Breath
    type: action
    rarity: uncommon
    attack:
      type: msak
      toSave:
        dc: "[attackDcDex]"
        save: dex
      area: a 30 ft. cone extending from yourself.
      targets: all creatures
      onHit: "[damage, d8|keepStatic] fire damage."
      onMiss: half damage
    uses:
      recharge: 5
  -
    name: Throw Creature
    type: action
    rarity: uncommon
    attack:
      type: msak
      toSave:
        dc: "[attackDcDex]"
        save: dex
      area: ranged 30 ft.
      targets: one creature
      onHit: "the target and the thrown creature both take [round(damage * 0.5), d8|keepStatic] bludgeoning damage and fall prone."
      onMiss: the thrown creature falls prone adjacent to the target.
      requirements: requires a grappled creature
    uses:
      cooldown: 3
  -
    name: Scorching Heat
    type: action
    rarity: uncommon
    attack:
      type: msak
      toSave:
        dc: "[attackDcCon - 2]"
        save: con
      area: reach 10 ft.
      targets: one creature
      onHit: "the creature loses two unspent hit die, or gains two levels of exhaustion (save ends, DC [attackDcCon - 2] Constitution) if no hit die remain."
    uses:
      cooldown: 2
  -
    name: Fear Me
    type: action
    rarity: rare
    attack:
      type: msak
      toSave:
        dc: "[attackDcCha]"
        save: cha
      area: ranged 30 ft.
      targets: all hostile creatures
      onHit: "the target is frightened of you, save ends (DC [attackDcCha] Charisma)."
    recovery: "You regain this ability when you are bloodied or enraged."
  -
    name: Timebomb
    type: action
    rarity: rare
    attack:
      dooming: 3
      type: msak
      toHit: "[attackBonus + 2|sign]"
      area: reach 5 ft.
      targets: one creature
      onHit: "the target is doomed. When the doom triggers, the target takes [damage * 3, d12|keepStatic] fire damage and deals [round(damage * 0.75)|keepStatic] fire damage to all other creatures within 15 ft. The doom can be countered if the target is fully immersed in water when it triggers."
    uses:
      limited:
        quantity: 1
        period: lr
</div>

\regionEnd

\contentEnd -->

\contentBegin { "class": "page--sidebar-inner page--mm-making-attacks" }

### Deal Direct Damage { "index": "A" }

Direct damage is used to hurt, punish, defeat, and destroy. When you want to reduce the target to 0 hit points, deal some direct damage.

You can spend one or more EP to use this effect with any _common_, _uncommon_, or _rare_ attack.

<!-- * A cultist leaps from the shadows and stabs at you with a sharp, poisoned dagger.
* A giant tries to bludgeon you with a huge, stone mace.
* A goblin shoots an explosive arrow towards the middle of your adventuring party. -->

#### Aimed Ranges

To create this effect for an _aimed_ attack, apply 100% of your base damage for each EP you spend on this effect.

**Multiple Targets:** If your aimed attack has multiple targets, divide the damage you deal to each by the total number of targets.

\exampleBegin { "class": "example--placeholder", "lines": 7 }

\exampleEnd

#### Area Ranges

To create this effect for an _area_ attack, apply 75% of your base damage for each EP you spend on this effect.

If the attack would deal half damage on a miss, apply only 50% of of your base damage instead.

* **No damage on a miss:** You deal 75% base damage on hit, and zero damage on a miss.
* **Half damage on a miss:** You deal 50% base damage on a hit, and 25% base damage on a miss.

\exampleBegin

The GM has created a 4th-level artificer who deals _8 base damage_ with a thunder cannon. They want the artificer to deal damage over an area:

* **Thunderlance:** DC 14 vs Dexterity saving throw, 20 ft. by 5 ft. line from self, all creatures. _Hit_: 4 lightning damage. _Miss:_ Half damage.

\exampleEnd

#### Damage Types

Choose a damage type from the _Damage Types_ table. You can also split your damage across two or more types—a _slashing_ attack laced with _poison_, a _bludgeoning_ mace blessed with _radiant_ power, a searing _fire_ breath from a _necrotic_ dragon.

When you divide damage in this way, use a simple 50/50, 75/25, or 50/25/25 ratio to keep things simple.

\panelBegin { "type": "table", "class": "table--creature-categories", "title": "Damage Types" }

* Acid
* Bludgeoning
* Cold
* Fire
* Force
* Lightning
* Necrotic
* Piercing
* Poison
* Psychic
* Radiant
* Slashing
* Thunder

\panelEnd

\sidebarBegin { "class": "sidebar--wide" }

<div data-blueprint="scaler">
---
type: monster
description:
  name: Drow Barbarian
  size: medium
  category: humanoid
  alignment: chaoticNeutral
combat:
  level: 4
  rank: grunt
  role: striker
hp:
  dieSize: 12
damage:
  dieSize: 12
damageImmunities:
  - poison
conditionImmunities:
  - charmed
  - poisoned
abilityModifiers:
  ranking:
    - str
    - con
    - cha
    - wis
    - dex
    - int
senses:
  darkvision: 60
languages:
  - elven
  - common
abilities:
  -
    name: Smash
    type: action
    rarity: common
    attack:
      type: rsak
      toHit: "[attackBonus|sign]"
      area: reach 5 ft.
      targets: one target
      onHit: "[damage, d12|keepStatic] bludgeoning damage."
  -
    name: Twin Slash
    type: action
    rarity: common
    attack:
      type: rsak
      toHit: "[attackBonus|sign]"
      area: reach 5 ft.
      targets: two targets, or the same target twice
      onHit: "[round(damage * 0.5), d8|keepStatic] slashing damage."
  -
    name: Slashing Vortex
    type: action
    rarity: uncommon
    attack:
      type: msak
      toSave:
        dc: "[attackDcHigh]"
        save: dex
      area: reach 10 ft.
      targets: all targets
      onHit: "[damage * 1.5, d12|keepStatic] slashing damage."
    uses:
      limited:
        quantity: 2
        period: sr
</div>

<div data-blueprint="scaler">
---
type: hazard
description:
  name: Young Spider Mushroom
  size: medium
  category: hazard
  subcategory: plant
combat:
  level: 5
  rank: minion
  role: defender
speeds:
  canMove: false
hp:
  dieSize: 8
  maximumDice: 30
damage:
  dieSize: 4
damageThreshold: 5
trigger: <p>You lie <em>dormant</em> until a creature moves within 10 ft. of you. You may then activate immediately and use <em>Spore Cloud</em>. You remain active for up to 1 hour.</p>
abilityModifiers:
  ranking:
    - wis
    - int
    - con
damageImmunities:
  - poison
  - psychic
conditionImmunities: 
  - blinded
  - charmed
  - deafened
  - exhaustion
  - frightened
  - stunned
  - paralyzed
  - poisoned
  - prone
abilities:
  -
    name: Spore Cloud
    type: action
    rarity: common
    attack:
      type: rsak
      toSave:
        dc: "[attackDcHigh]"
        save: con
      area: reach 10 ft.
      targets: one creature
      onHit: "[damage, d4|keepStatic] poison damage."
</div>

\sidebarEnd

\contentEnd

\contentBegin { "class": "page--sidebar-inner page--mm-making-attacks" }

### Deal Ongoing Damage { "index": "B" }

Some damage can _linger_ to cause harm long after the initial attack has landed—burning acid, a bleeding wound, painful frostbite, etc.  When you want to hurt the target for a long period of time, deal some ongoing damage.

<!-- * A mage immolates your robes with a searing, magical enchantment.
* An orc slashes at your leg with its hooked blade.
* A kobold throws a vial of bubbling acid at you. -->

You can spend one or more EP to use this effect with any _uncommon_ or _rare_ attack that has an _aimed_ range.

#### Creating the Effect

To create this effect, first choose a saving throw and a save DC from your attack DC range—the higher the DC, the harder it is for the target to shrug off the effect.

Then apply 75% of your base damage for each EP you spend on this effect.

**Multiple Targets:** If your attack has multiple targets, divide the ongoing damage you would deal to each by the total number of targets.

**Damage Types:** Ongoing damage is always of a single damage type—fire, lightning, necrotic, etc.

#### Dealing Ongoing Damage

When you apply this effect, the target gains _ongoing damage_ equal to the effect damage.

* At the start of each of it's turns, the target must suffer the effect damage.
* At the end of its turn, the target may make a saving throw to remove the effect.

\exampleBegin { "class": "example--placeholder", "lines": 13 }

<!-- Clanda is hunting a 3rd-level giant lizard. The lizard has one attack per round, and deals 5 base damage. During the battle, the lizard tries to spit acid and cause _ongoing damage_.

* **GM:** The giant lizard spits a jet of hissing acid at you, Clanda. It... _(rolls 24)_ ...hits your AC.
* **Clanda:** Augh, these lizards are _the worst_.
* **GM:** The acid splashes over you, and you see it quickly eat into your robes. It's going to start burning through into your skin very soon—you gain 4 _ongoing_ acid damage.
* **Clanda:** Oh great, _I can't wait_. Who's turn is it now?
* **GM:** Yours. Take 4 points of acid damage.
* **Clanda:** That's it, I'm going to _skin_ this lizard... -->

\exampleEnd

#### Preventative Action

A target with ongoing damage may attempt to remove the effect by taking an appropriate action—pour water on the fire, tear off the bloodsucking tentacle, patch up a wound, etc. This may require an ability check.

Depending on the action taken, you may either a) end the effect or b) grant the target advantage on their next saving throw against it.

\exampleBegin { "class": "example--placeholder", "lines": 5 }

\exampleEnd

\sidebarBegin { "class": "sidebar--wide" }

<div data-blueprint="scaler">
---
type: monster
description:
  name: Giant Lizard
  size: large
  category: beast
  alignment: chaoticNeutral
combat:
  level: 6
  rank: grunt
  role: lurker
hp:
  dieSize: 12
damage:
  dieSize: 12
abilityModifiers:
  ranking:
    - str
    - con
    - cha
    - wis
    - dex
    - int
abilities:
  -
    name: Bite
    type: action
    rarity: common
    attack:
      type: rsak
      toHit: "[attackBonus|sign]"
      area: reach 5 ft.
      targets: one target
      onHit: "[damage, d12|keepStatic] piercing damage."
  -
    name: Tailwhip
    type: action
    rarity: common
    attack:
      type: rsak
      toHit: "[attackBonus|sign]"
      area: reach 5 ft.
      targets: two targets
      onHit: "[round(damage * 0.5), d8|keepStatic] bludgeoning damage."
  -
    name: Acid Spit
    type: action
    rarity: uncommon
    attack:
      type: msak
      toHit: "[attackBonus|sign]"
      area: ranged 10 ft.
      targets: one target
      onHit: "[round(damage * 1.5), d6|keepStatic] ongoing acid damage (save ends, DC [attackDcCon] CON)."
    uses:
      recharge: 5
</div>

<div data-blueprint="scaler">
---
type: hazard
description:
  name: Guardian Statue
  size: medium
  category: hazard
  subcategory: construct
combat:
  level: 7
  rank: grunt
  role: controller
speeds:
  canMove: false
hp:
  dieSize: 8
  maximumDice: 30
damage:
  dieSize: 4
damageThreshold: 5
trigger: <p>You lie <em>dormant</em> until a creature moves within 30 ft. of you. You may then activate immediately and use <em>Straight Shot</em>. You remain active for up to 1 minute.</p>
abilityModifiers:
  ranking:
    - wis
    - int
    - con
damageImmunities:
  - poison
  - psychic
conditionImmunities: 
  - blinded
  - charmed
  - deafened
  - exhaustion
  - frightened
  - stunned
  - paralyzed
  - poisoned
  - petrified
  - prone
abilities:
  -
    name: Straight Shot
    type: action
    rarity: common
    attack:
      type: rsak
      toHit: "[attackBonus|sign]"
      area: ranged 30 ft.
      targets: one target
      onHit: "[damage, d12|keepStatic] piercing damage."
  -
    name: Decaying Twinshot
    type: action
    rarity: uncommon
    attack:
      type: rsak
      toHit: "[attackBonus|sign]"
      area: ranged 30 ft.
      targets: two creatures
      onHit: "[round(damage * 0.75 * 0.5), d4|keepStatic] ongoing necrotic damage (save ends, DC [attackDcCon] CON)."
    uses:
      cooldown: 3
</div>

\sidebarEnd

\contentEnd

\contentBegin { "class": "page--mm-making-attacks" }

### Inflict a Condition { "index": "C" }

Some attacks don't deal damage—they inflict _conditions_ instead to blind, charm, and stun. When you want to put the target in a bind, give them a condition.

You can spend one or more EP to use this effect with any _common_, _uncommon_, or _rare_ attack.

#### Creating the Effect

To create this effect, choose one or more conditions as described below—or create your own if no option fits.

* **Common Effect:** The target gains a _minor_ condition until the end of their next turn.
* **Uncommon Effect:** The target gains a _moderate_ condition until the end of their next turn.
* **Rare Effect:** The target gains a _major_ condition until the end of their next turn.

You can repeat this process once for each EP you spend on this effect.

#### Durations

By default, conditions stop at the end of the target's next turn. However, you can choose two alternative durations:

* **Countering:** Stops when an appropriate countering action is taken—standing up, eating a meal, etc. To use a _countering_ duration, define a countering action.
* **Lingering:** At the end of each of its turns, the target may make a saving throw to remove the effect. To use a _lingering_ duration, either a) spend one additional EP or b) reduce the <em>effect rarity</em> by one step.

<!-- Finally, choose your condition as described in the _Choosing Conditions_ table—the rarer the effect, the more powerful the conditions you can use. -->

\columnbreak

\panelBegin { "class": "panel--table panel--conditions", "title": "Conditions" }

<table>
	<thead>
		<tr>
			<th>#</th>
			<th>Condition</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th colspan="3"><span class="header primary">Minor</span></th>
		<tr>
			<td>1</td>
			<td>Blinded</td>
			<td>You can't see anything.</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Deafened</td>
			<td>You can't hear anything.</td>
		</tr>
		<tr>
			<td>3</td>
			<td>Grappled</td>
			<td>You can't move.</td>
		</tr>
		<tr>
			<td>4</td>
			<td>Prone</td>
			<td>You are lying on the ground.</td>
		</tr>
		<tr>
			<th colspan="3"><span class="header primary">Moderate</span></th>
		<tr>
		<tr>
			<td>5</td>
			<td>Charmed</td>
			<td>You can't attack your charmer.</td>
		</tr>
		<tr>
			<td>6</td>
			<td>Frightened</td>
			<td>You can't move towards the source of your fear.</td>
		</tr>
		<tr>
			<td>7</td>
			<td>Poisoned</td>
			<td>You have disadvantage on attack rolls and ability checks.</td>
		</tr>
		<tr>
			<td>8</td>
			<td>Restrained</td>
			<td>You can't move.</td>
		</tr>
		<tr>
			<th colspan="3"><span class="header primary">Major</span></th>
		<tr>
		<tr>
			<td>9</td>
			<td>Invisible</td>
			<td>You can't be seen.</td>
		</tr>
		<tr>
			<td>10</td>
			<td>Paralyzed</td>
			<td>You can't move, take actions, take reactions, or speak.</td>
		</tr>
		<tr>
			<td>11</td>
			<td>Petrified</td>
			<td>You are transformed into a solid, inanimate material.</td>
		</tr>
		<tr>
			<td>12</td>
			<td>Stunned</td>
			<td>You can't move, take actions, take reactions, or speak properly.</td>
		</tr>
		<tr>
			<td>13</td>
			<td>Unconscious</td>
			<td>You can't move, take actions, take reactions, or remain conscious.</td>
		</tr>
	</tbody>
</table>

\panelEnd

\exampleBegin { "class": "example--placeholder", "lines": 4 }

\exampleEnd

\regionBegin { "class": "region--fixed-bottom region--border-top" }

\panelBegin { "type": "table", "class": "panel--choosing-conditions", "title": "Choosing Conditions" }

<table>
	<thead>
		<tr>
			<th>Targets</th>
			<th>Condition</th>
			<th>EP Cost</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th colspan=3><span class="header">Common Effect</span></th>
		</tr>
		<tr>
			<td>Single</td>
			<td>The target is [minor condition] until the end of its next turn.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>Single</td>
			<td>The target is [minor condition] until it takes a countering action.</td>
			<td>1</td>
		</tr>
		<tr>
			<th colspan=3><span class="header">Uncommon Effect</span></th>
		</tr>
		<tr>
			<td>Single</td>
			<td>The target is [moderate condition] until the end of its next turn.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>Single</td>
			<td>The target is [moderate condition] until it takes a countering action.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>Single</td>
			<td>The target is [minor condition], save ends.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>Single</td>
			<td>The target is [minor condition] worsening to [moderate/major conditions], save ends.</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Single</td>
			<td>The target is [moderate condition], save ends.</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Multiple</td>
			<td>The target is [moderate condition] until the end of its next turn.</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Multiple</td>
			<td>The target is [moderate condition] until it takes a countering action.</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Multiple</td>
			<td>The target is [minor condition], save ends.</td>
			<td>2</td>
		</tr>
		<tr>
			<th colspan=3><span class="header">Rare Effect</span></th>
		</tr>
		<tr>
			<td>Single</td>
			<td>The target is [major condition] until the end of its next turn.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>Single</td>
			<td>The target is [major condition] until it takes a countering action.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>Single</td>
			<td>The target is [moderate condition], save ends.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>Single</td>
			<td>The target is [moderate condition] worsening to [moderate/major conditions], save ends.</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Single</td>
			<td>The target is [major condition], save ends.</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Multiple</td>
			<td>The target is [major condition] until the end of its next turn.</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Multiple</td>
			<td>The target is [major condition] until it takes a countering action.</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Multiple</td>
			<td>The target is [moderate condition], save ends.</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Multiple</td>
			<td>The target is [moderate condition] worsening to [moderate/major conditions], save ends.</td>
			<td>3</td>
		</tr>
		<tr>
			<td>Multiple</td>
			<td>The target is [major condition], save ends.</td>
			<td>3</td>
		</tr>
	</tbody>
</table>

\panelEnd

\regionEnd

\contentEnd

\contentBegin { "class": "page--sidebar-inner page--mm-making-attacks" }

\exampleBegin { "class": "example--placeholder", "lines": 6 }

\exampleEnd

#### Multiple Targets

To apply conditions to multiple targets, either a) spend one additional EP or b) reduce the _effect rarity_ by one step.

\exampleBegin { "class": "example--placeholder", "lines": 4 }

\exampleEnd

#### Preventative Action

A target with _lingering_ conditions may attempt to remove the effect by taking an appropriate action—wipe mud off their face, pick up their sword, get up from the floor, etc. This may require an ability check.

Depending on the action taken, you may either a) end the effect or b) grant the target advantage on their next saving throw against it.

\exampleBegin { "class": "example--placeholder", "lines": 5 }

\exampleEnd

#### Worsening Conditions

Some conditions become more severe each time the target fails to save against them. These are _worsening_ conditions.

To turn a _lingering_ condition into a _worsening_ condition, spend one additional EP. Then choose up to two conditions of equal or increasing severity.

Each time the target fails to save against the effect, the condition advances to the next stage. If the target saves, the effect ends as normal.

\exampleBegin { "class": "example--placeholder", "lines": 12 }

\exampleEnd

\sidebarBegin { "class": "sidebar--wide" }

<div data-blueprint="scaler">
---
type: monster
description:
  name: Genasi Icerunner
  size: medium
  category: humanoid
  subcategory: genasi
  alignment: chaoticGood
combat:
  level: 8
  rank: grunt
  role: scout
hp:
  dieSize: 12
damage:
  dieSize: 12
damageImmunities:
  - cold
abilityModifiers:
  ranking:
    - dex
    - wis
    - con
    - cha
    - str
    - int
languages:
  - common
  - primordial
abilities:
  -
    name: Ice Spike
    type: action
    rarity: common
    attack:
      type: rsak
      toHit: "[attackBonus|sign]"
      area: reach 5 ft.
      targets: one target
      onHit: "[round(damage * 0.5), d6|keepStatic] piercing damage and [round(damage * 0.5), d4|keepStatic] cold damage."
  -
    name: You Shoulda Worn Goggles
    type: action
    rarity: common
    attack:
      type: rsak
      toHit: "[attackBonus|sign]"
      area: ranged 30 ft.
      targets: one creature
      onHit: "the creature is blinded until the end of its next turn."
  -
    name: Cold Breath
    type: action
    rarity: uncommon
    attack:
      type: msak
      toSave:
        dc: "[attackDcCon]"
        save: con
      area: reach 5 ft.
      targets: one creature
      onHit: the creature is blinded <i class="fas fa-angle-double-right"></i> restrained <i class="fas fa-angle-double-right"></i> petrified, save ends (DC [attackDcCon] Con).
    uses:
      recharge: 5
</div>

<div data-blueprint="scaler">
---
type: hazard
description:
  name: Frost Trap
  size: medium
  category: hazard
  subcategory: construct
combat:
  level: 9
  rank: minion
  role: controller
hp:
  dieSize: 12
speeds:
  canMove: false
damage:
  dieSize: 12
damageImmunities:
  - poison
  - psychic
conditionImmunities:
  - blinded
  - charmed
  - deafened
  - exhaustion
  - frightened
  - paralyzed
  - petrified
  - poisoned
  - prone
  - stunned
damageThreshold: 5
abilityModifiers:
  ranking:
    - con
trigger: |
  <p>You lie <em>dormant</em> until a creature steps on your pressure plate. You may then activate immediately and use <em>Frost Bold</em>. You remain active for up to 10 minutes.</p>
abilities:
  -
    name: Frost Bold
    type: action
    rarity: common
    attack:
      type: rsak
      toHit: "[attackBonus|sign]"
      area: ranged 30 ft.
      targets: the nearest creature
      onHit: the creature is slowed until the end of its next turn.
</div>

\sidebarEnd

\contentEnd

\contentBegin { "class": "page--sidebar-inner page--mm-making-attacks" }

### Force Movement { "index": "D" }

Some actions can move an unwilling target about the battlefield—pushing, pulling, and sliding. When you want to reposition the enemy, use forced movement.

You can spend one or more EP to use this effect with any _common_, _uncommon_, or _rare_ action.

#### Creating the Effect

To create this effect, first choose a movement type—do you want to pull, push, or slide the target? Then decide how far you want to move the target—the rarer the action, the greater the distance. Multiply this distance for each EP you spend on this effect.

**Multiple Targets:** If your action has multiple targets, divide the distance you would move each target by the total number of targets. If the action has an _area_ range, reduce the distance by a flat 50% instead.

\panelBegin { "class": "panel--table", "title": "Movement Types" }

|Type|Description|
|---|---|
|Direct|The target is moved instantly to a spot, such as by a teleport or magical effect (requires an _uncommon_ or _rare_ attack).|
|Pull|The target is pulled towards you in a straight line (or as close as possible).|
|Push|The target is pushed away from you in a straight line (or as close as possible).|
|Slide|The target is moved in a direction of your choice.|

\panelEnd

\panelBegin { "class": "panel--table", "title": "Movement Distances" }

|Effect Rarity|Max. Distance|
|---|:-:|
|Common|10 ft.|
|Uncommon|20 ft.|
|Rare| 30 ft.|

\panelEnd

\exampleBegin { "class": "example--placeholder", "lines": 9 }

<!-- Chansi is fighting a 6th-level giant who—in a drunken rage—is trying to destroy her forest home.

* **GM:** The giant kicks out at you with a swing of its huge leg, Chansi. It... _(rolls 17)_ ...hits your AC.
* **Chansi:** Damn, for how much damage?
* **GM:** No damage, but the blunt force of the impact sends you flying backwards 30 ft.
* **Chansi:** Right into the mud? You _bastard_, these are my new boots! -->

\exampleEnd

\panelBegin { "type": "aside", "title": "Avoid Cheapshots" }

Although movement attacks can move players into or onto dangerous terrain—boiling lava, sharp spikes, cliff edges, etc—take care when doing so.

Avoid moving your player characters into obviously fatal situations if they don't have any reasonable means of defense, escape, or survival. When in doubt, grant them a saving throw to fall prone or grab hold of an edge.

\panelEnd

\sidebarBegin { "class": "sidebar--wide" }

<div data-blueprint="scaler">
---
type: monster
description:
  name: Gnoll Slaver
  size: medium
  category: humanoid
  subcategory: gnoll
  alignment: chaoticEvil
combat:
  level: 9
  rank: grunt
  role: controller
hp:
  dieSize: 8
damage:
  dieSize: 10
damageImmunities:
  - poison
conditionImmunities:
  - poisoned
  - frightened
abilityModifiers:
  ranking:
    - con
    - wis
    - str
    - cha
    - int
    - dex
languages:
  - gnoll
senses:
  darkvision: 60
abilities:
  -
    name: Poisontip Whip
    type: action
    rarity: common
    attack:
      type: rsak
      toHit: "[attackBonus|sign]"
      area: reach 10 ft.
      targets: one target
      onHit: "[round(damage * 0.75), d8|keepStatic] slashing damage and [round(damage * 0.25)] poison damage."
  -
    name: Leg Whip
    type: action
    rarity: common
    attack:
      type: rsak
      toHit: "[attackBonus|sign]"
      area: reach 10 ft.
      targets: one target
      onHit: the target is knocked prone
  -
    name: I Said Get Back
    type: action
    rarity: uncommon
    attack:
      type: rsak
      toHit: "[attackBonus|sign]"
      area: reach 10 ft.
      targets: two creatures
      onHit: "[round(damage * 0.5), d6|keepStatic] slashing damage and the creature is pushed back 10 ft."
    uses:
      cooldown: 3
</div>

<div data-blueprint="scaler">
---
type: hazard
description:
  name: Knockback Trap
  size: medium
  category: hazard
  subcategory: construct
combat:
  level: 10
  rank: minion
  role: lurker
hp:
  dieSize: 8
  maximumDice: 30
damage:
  dieSize: 4
trigger: <p>You lie <em>dormant</em> until a creature steps on your pressure plate. You may then activate immediately and use <em>Breath of Wind</em>. You remain active for up to 1 minute.</p>
abilityModifiers:
  ranking:
    - wis
    - con
speeds:
  canMove: false
damageImmunities:
  - poison
  - psychic
conditionImmunities: 
  - blinded
  - charmed
  - deafened
  - exhaustion
  - frightened
  - stunned
  - paralyzed
  - poisoned
  - petrified
  - prone
abilities:
  -
    name: Breath of Wind
    type: action
    rarity: common
    attack:
      type: rsak
      toSave:
        dc: "[attackDcStr]"
        save: str
      area: ranged 30 ft.
      targets: the nearest creature
      onHit: "the creature is pushed back 10 ft."
</div>

\sidebarEnd

\contentEnd

\contentBegin { "class": "page--sidebar-inner page--mm-making-attacks" }

### Destroy a Resource { "index": "E" }

Some actions don't seek to harm the target directly but instead try to destroy precious resources—stamina, mana, gold, etc. When you want to rob a target of their valuables, use a resource effect.

You can spend one or more EP to use this effect with any action that has an _aimed_ range.

#### Creating the Effect

To create this effect, choose one or more resources from the table below—or create your own if no option fits.

* **Common Effect:** Choose one minor resource.
* **Uncommon Effect:** Choose one moderate or two minor resources.
* **Rare Effect:** Choose one major or any two moderate/minor resources.

You can repeat this process once for each EP you spend on this effect.

**Multiple Targets:** If your attack has multiple targets, either a) spend 1 additional EP or b) reduce the effect rarity by one step.

\panelBegin { "type": "table", "class": "panel--resource-types", "title": "Resource Types" }

<table>
	<thead>
		<tr>
			<th>Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th colspan="2"><span class="header primary">Minor</span></th>
		</tr>
		<tr>
			<td>Wealth</td>
			<td>The target loses carried wealth (currency, gems, art, etc.) equal to your damage (as valued in gold).</td>
		</tr>
		<tr>
			<th colspan="2"><span class="header primary">Moderate</span></th>
		</tr>
		<tr>
			<td>Item Damage</td>
			<td>An item carried by the target gains one notch. If an item gains 5 or more notches, it is destroyed. Notches can be removed with appropriate tools.</td>
		</tr>
		<tr>
			<td>Hit Dice</td>
			<td>The target loses one unspent hit die.</td>
		</tr>
		<tr>
			<td>Low Spell Slot</td>
			<td>The target loses their lowest unspent spell slot.</td>
		</tr>
		<tr>
			<th colspan="2"><span class="header primary">Major</span></th>
		</tr>
		<tr>
			<td>High Spell Slot</td>
			<td>The target loses their highest unspent spell slot.</td>
		</tr>
		<tr>
			<td>Death Save</td>
			<td>The target gains one failed death save.</td>
		</tr>
		<tr>
			<td>Exhaustion</td>
			<td>The target gains one fleeting level of exhaustion. This exhaustion lifts when the target finishes a short or long rest.</td>
		</tr>
	</tbody>
</table>

\panelEnd

<!-- Once you've picked a resource, decide how much is drained per hit (1 exhaustion, 1 hit die, 50 gp, etc). Then describe how your monster is performing the attack:

* The master thief pickpockets you (drain _gold_).
* The spectral wraith wraps around you and starts to feed on your soul (drain _hit dice_).
* The void sorcerer grabs hold of your arm and steals a portion of your magical energy (drain spell slots).

Finally, roll an attack as normal. If successful, the monster deals no direct damage but instead drains their target of the desired resource. -->

<!-- \exampleBegin

Viridian is fighting _Eldris Brune_, a 4th-level warlock who has been commanded by her patron—for unknowable reasons—to destroy all gold in the region.

* **GM:** "I'm really sorry about this, but I can't disobey my patron!" says Eldris as she raises a hand towards you, Viridian. Make a DC 12 Dexterity saving throw.
* **Viridian:** Ok... _(rolls 7)_ ...augh, that's _typical_.
* **GM:** A yellow beam strikes you in the chest, but you feel no pain. In fact, you feel lighter. Your hand moves down to your belt purse. Your _now-empty_ purse.
* **Viridian:** ...My _what_? I had 50 gp in that purse!
* **GM:** "Oh dear, I'm terribly sorry about that!" winces Eldris. "My patron recommends that you switch to silver pieces in future!"
* **Viridian:** Ok that does it—I'm not taking investment advice from an eldritch horror.

\exampleEnd -->

\exampleBegin { "class": "example--placeholder", "lines": 11 }

\exampleEnd

\sidebarBegin { "class": "sidebar--wide" }

<div data-blueprint="scaler">
---
type: monster
description:
  name: Blink Spellbreaker
  size: medium
  category: fey
  subcategory: eladrin
  alignment: chaoticNeutral
combat:
  level: 11
  rank: grunt
  role: striker
hp:
  dieSize: 8
damage:
  dieSize: 10
senses:
  darkvision: 60
damageResistances:
  - force
abilityModifiers:
  ranking:
    - con
    - wis
    - str
    - cha
    - int
    - dex
languages:
  - common
  - elvish
abilities:
  -
    name: Slash
    type: action
    rarity: common
    attack:
      type: rsak
      toHit: "[attackBonus|sign]"
      area: reach 5 ft.
      targets: one target
      onHit: "[damage, d8|keepStatic] slashing damage."
  -
    name: Force Pull
    type: action
    rarity: common
    attack:
      type: rsak
      toSave:
        dc: "[attackDcStr]"
        save: str
      area: ranged 15 ft.
      targets: one target
      onHit: "the target is pulled 10 ft. towards you."
  -
    name: Spellburner
    type: action
    rarity: uncommon
    attack:
      type: rsak
      toHit: "[attackBonus|sign]"
      area: reach 5 ft.
      targets: one creature
      onHit: "[damage, d6|keepStatic] force damage, and the creature loses their lowest unspent spell slot."
    uses:
      limited:
        quantity: 3
        period: sr
</div>

<div data-blueprint="scaler">
---
type: hazard
description:
  name: Pocketleech Trap
  size: small
  category: hazard
  subcategory: construct
combat:
  level: 12
  rank: minion
  role: lurker
speeds:
  walk: 5
  climb: 5
hp:
  dieSize: 8
  maximumDice: 30
damage:
  dieSize: 4
trigger: <p>You lie <em>dormant</em> until a creature moves within 10 ft. of you. You may then activate immediately and use <em>Devour Gold</em>. You remain active for up to 1 minute.</p>
abilityModifiers:
  ranking:
    - wis
    - int
    - con
damageImmunities:
  - poison
  - psychic
conditionImmunities: 
  - blinded
  - charmed
  - deafened
  - exhaustion
  - frightened
  - stunned
  - paralyzed
  - poisoned
  - petrified
  - prone
abilities:
  -
    name: Devour Gold
    type: action
    rarity: common
    attack:
      type: rsak
      toHit: "[attackBonus|sign]"
      area: reach 10 ft.
      targets: one target
      onHit: "the target loses up to [damage] gp of wealth."
</div>

\sidebarEnd

\contentEnd

\contentBegin { "class": "page--mm-making-attacks" }

### Empower an Ally { "index": "F" }

Some actions focus on bolstering allies with temporary strengths, defences, and movement options. When you want to support your allies, use empowering effects.

You can spend one or more EP to use this effect with any _common_, _uncommon_, or _rare_ action.

#### Creating the Effect

To create this effect, choose one or more _empowerments_ based on the rarity of your effect—or create your own empowerment if no suitable option fits.

* **Common Effect:** Choose one minor empowerment.
* **Uncommon Effect:** Choose one moderate or two minor empowerments.
* **Rare Effect:** Choose one major or any two moderate/minor empowerments.

You can repeat this process once for each EP you spend on this effect.

#### Overlapping Bonuses

If an ally gains overlapping bonuses from multiple _simultaneous_ empowerments, only the most potent benefit (i.e. the highest bonus) applies.

**Fusing Empowerments:** You can fuse together multiple copies of the same empowerment to create a single, more _potent_ instance. However, you can't fuse the same type (e.g. Armorer) more than three times.

\exampleBegin

A GM wants to build some actions for a necromancer who _empowers_ undead minions.

They create **Revenant Rage**, an _uncommon (charged)_ action and spend the 2 EP to select four _minor_ empowerments—in this case, four instances of _Aggressor_. These four bonuses can be fused and allocated in a variety of ways—for example:

---

* Give four allies +1 critical range.
* Give two allies +2 critical range.
* Give one ally +3 critical range and another ally the remaining +1.

\exampleEnd

#### Enduring Power

At the start of your turn, you can spend your reaction to refresh the duration of one empowering effect that is about to expire.

Target one effect on one ally within within 60 ft. of you—the duration is extended until the start of your _next_ turn. Allies who are not within 60 ft. of you lose the effect.

\exampleBegin

On their turn, the necromancer uses _Revenant Rage_ on two nearby skeletons.

At the start of the necromancer's next turn, the empowering effect is about to expire—they target one skeleton within 60 ft. and spend their reaction to extend the effect for one more turn.

\exampleEnd

\columnbreak

\panelBegin { "type": "table", "title": "Empowerments" }

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th colspan="2"><span class="header primary">Minor</span></th>
		</tr>
		<tr>
			<td>Marker</td>
			<td>One ally makes their next attack roll with advantage.</td>
		</tr>
		<tr>
			<td>Adamant</td>
			<td>Until the start of your next turn, any critical hit against one ally becomes a normal hit.</td>
		</tr>
		<tr>
			<td>Aggressor</td>
			<td>Until the start of your next turn, increase the critical hit range of one ally by +1 (i.e. 19-20).</td>
		</tr>
		<tr>
			<td>Leader</td>
			<td>One ally can spend their reaction to make a basic attack against a target of your choice.</td>
		</tr>
		<tr>
			<td>Piercing</td>
			<td>Until the start of your next turn, one ally's attacks ignore resistance to one damage type and treat immunity as if it were resistance.</td>
		</tr>
		<tr>
			<td>Purifier</td>
			<td>One ally may reroll a failed saving throw against an ongoing effect.</td>
		</tr>
		<tr>
			<td>Resistor</td>
			<td>Until the start of your next turn, one ally gains resistance to one damage type.</td>
		</tr>
		<tr>
			<th colspan="2"><span class="header primary">Moderate</span></th>
		</tr>
		<tr>
			<td>Armorer</td>
			<td>Until the start of your next turn, one ally gains +2 AC and advantage on one saving throw of your choice.</td>
		</tr>
		<tr>
			<td>Barrier</td>
			<td>One ally gains temporary hit points equal to twice your combat level.</td>
		</tr>
		<tr>
			<td>Destroyer</td>
			<td>Until the start of your next turn, one ally deals additional damage equal to your combat level. Choose a damage type.</td>
		</tr>
		<tr>
			<td>Immuniser</td>
			<td>Until the start of your next turn, one ally gains immunity to one damage type.</td>
		</tr>
		<tr>
			<td>Traveller</td>
			<td>Until the start of your next turn, one ally gains a new form of movement.</td>
		</tr>
		<tr>
			<td>Speedster</td>
			<td>Until the start of your next turn, one ally gains +10 speed.</td>
		</tr>
		<tr>
			<td>Cooler</td>
			<td>One ally may reduce the cooldown of any one ability.</td>
		</tr>
		<tr>
			<th colspan="2"><span class="header primary">Major</span></th>
		</tr>
		<tr>
			<td>Cloaker</td>
			<td>Until the start of your next turn, one ally becomes invisible. This ends if the ally attacks or casts a spell.</td>
		</tr>
		<tr>
			<td>Healer</td>
			<td>One ally regains hit points equal to twice your combat level.</td>
		</tr>
		<tr>
			<td>Extracted</td>
			<td>Until the start of your next turn, one ally is banished. They reappear in an unoccupied space of your choice within 30 ft. of you.</td>
		</tr>
		<tr>
			<td>Recharger</td>
			<td>One ally may immediately recharge an uncommon ability.</td>
		</tr>
	</tbody>
</table>

\panelEnd

\panelBegin { "type": "aside", "title": "Empowerments & Empowering Effects" }

This supplement distinguishes between _empowerments_ and _empowering effects_ with the following:

---

* An _empowerment_ is a single boon gifted to one ally. These may be fused or unfused.
* An _empowering effect_ contains one or more empowerments. Empowering effects can be targeted with _enduring power_.

\panelEnd

<!-- 
<div data-blueprint="scaler">
---
type: monster
description:
  name: Orc Necromancer
  size: medium
  category: humanoid
  subcategory: orc
  alignment: lawfulEvil
combat:
  level: 13
  rank: grunt
  role: supporter
hp:
  dieSize: 8
damage:
  dieSize: 10
abilityModifiers:
  ranking:
    - con
    - wis
    - str
    - cha
    - int
    - dex
languages:
  - common
  - orc
abilities:
  -
    name: Black Fire
    type: action
    rarity: common
    attack:
      type: rsak
      toHit: "[attackBonus|sign]"
      area: ranged 30 ft.
      targets: one target
      onHit: "[damage, d6|keepStatic] necrotic damage."
  -
    name: Revenant Fury
    type: action
    rarity: common
    attack:
      type: rsak
      area: ranged 30 ft.
      targets: one undead creature
      onEffect: "until the start of your next turn, the creature critically hits on attack rolls of 19-20."
  -
    name: Death Coil
    type: action
    rarity: uncommon
    attack:
      type: rsak
      toHit: "[attackBonus|sign]"
      area: ranged 30 ft.
      targets: one creature
      onHit: "[damage, d6|keepStatic] necrotic damage. One undead creature within 15 ft. of the target gains [level * 2] temporary HP."
    uses:
      recharge: 5
</div> -->



<!-- <div data-blueprint="scaler">
---
type: hazard
description:
  name: Dark Crystal
  size: small
  category: hazard
combat:
  level: 12
  rank: minion
  role: supporter
speeds:
  canMove: false
hp:
  dieSize: 8
  maximumDice: 30
damage:
  dieSize: 4
damageThreshold: 5
trigger: <p>You lie <em>dormant</em> until an undead creature moves within 30 ft. of you. You may then activate immediately and use <em>Dark Blessing</em>. You remain active for up to 1 minute.</p>
abilityModifiers:
  ranking:
    - wis
    - con
    - int
damageImmunities:
  - poison
  - psychic
conditionImmunities: 
  - blinded
  - charmed
  - deafened
  - exhaustion
  - frightened
  - stunned
  - paralyzed
  - poisoned
  - petrified
  - prone
abilities:
  -
    name: Dark Blessing
    type: action
    rarity: common
    attack:
      type: rsak
      area: ranged 30 ft.
      targets: one undead creature
      onEffect: the creature gains +2 AC until the start of your next turn.
</div> -->

\contentEnd

\contentBegin { "class": "page--sidebar-inner page--mm-making-attacks" }

### Change the Terrain { "index": "G" }

Your actions can change the terrain—obscuring fog, clouds of darkness, magical cover, etc. When you want to reshape the landscape, use a terrain effect.

You can spend one or more EP to use this effect with any action that has an _area_ range.

#### Creating the Effect

To create this effect, choose one or more terrain modifiers based on the rarity of your effect—or create your own modifier if no suitable option fits.

* **Common Effect:** Choose one minor modifier.
* **Uncommon Effect:** Choose one moderate _or_ two minor modifiers.
* **Rare Effect:** Choose one major _or_ any two moderate/minor modifiers.

Repeat this process once for each EP you spend on this effect. Modifiers last until the start of your next turn.

\panelBegin { "type": "table", "class": "panel--terrain-effects", "title": "Terrain Modifiers" }

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th colspan="2"><span class="header primary">Minor</span></th>
		</tr>
		<tr>
			<td>Difficult</td>
			<td>Movement is at half speed.</td>
		</tr>
		<tr>
			<td>Half Cover</td>
			<td>+2 bonus to AC and DEX saving throws.</td>
		</tr>
		<tr>
			<td>Lightly Obscured</td>
			<td>Disadvantage on Wisdom (Perception) checks that rely on sight.</td>
		</tr>
		<tr>
			<td>Loud</td>
			<td>Deafened while within the area.</td>
		</tr>	
		<tr>
			<td>Uncomfortable</td>
			<td>Disadvantage on Concentration saving throws.</td>
		</tr>
		<tr>
			<td>Unstable</td>
			<td>When a creature ends their turn within the area, they fall prone.</td>
		</tr>
		<tr>
			<th colspan="2"><span class="header primary">Moderate</span></th>
		</tr>
		<tr>
			<td>Damaging</td>
			<td>When a creature enters or starts their turn within the area, they take damage equal to your combat level.</td>
		</tr>
		<tr>
			<td>Heavily Obscured</td>
			<td>
				<p>Choose one category:</p>
				<ol type="A" style="margin-top: 0">
					<li><strong>Darkness:</strong> Can't see into the area.</li>
					<li><strong>Cloud:</strong> Can't see into, out of, or through the area.</li>
				</ol>
			</td>
		</tr>
		<tr>
			<td>Three-Quarters Cover</td>
			<td>+5 bonus to AC and DEX saving throws.</td>
		</tr>
		<tr>
			<th colspan="2"><span class="header primary">Major</span></th>
		</tr>
		<tr>
			<td>Impassable</td>
			<td>Nothing can physically pass through the area.</td>
		</tr>	
		<tr>
			<td>Magical Darkness</td>
			<td>Creatures can't see into, out of, or through the area—even with darkvision. In addition, nonmagical light can't illuminate the area.</td>
		</tr>
		<tr>
			<td>Total Cover</td>
			<td>Can't be targeted directly by an attack or a spell.</td>
		</tr>
		<tr>
			<td>Vacuum</td>
			<td>You can't breathe.</td>
		</tr>
	</tbody>
</table>

\panelEnd

#### Enduring Power

At the start of your turn, when one of your terrain effects is about to expire within 60 ft. of you, you may choose to spend your reaction to extend the effect until the start of your _next_ turn.

\sidebarBegin { "class": "sidebar--wide" }

<div data-blueprint="scaler">
---
type: monster
description:
  name: Dwarven Geomancer
  size: medium
  category: humanoid
  alignment: lawfulNeutral
combat:
  level: 14
  rank: grunt
  role: controller
hp:
  dieSize: 8
damage:
  dieSize: 10
abilityModifiers:
  ranking:
    - con
    - wis
    - str
    - cha
    - int
    - dex
languages:
  - common
abilities:
  -
    name: Rockfall
    type: action
    rarity: common
    attack:
      type: mwak
      toHit: "[attackBonus|sign]"
      area: reach 5 ft.
      targets: one target
      onHit: "[damage, d6|keepStatic] bludgeoning damage."
  -
    name: Sand Pillar
    type: action
    rarity: common
    attack:
      type: utility
      area: Select an unoccupied 5 ft. square within 30 ft. of you.
      onEffect: "the terrain grants half cover until the end of your next turn."
  -
    name: Spiked Ground
    type: action
    rarity: uncommon
    attack:
      type: utility
      area: Select a 10 ft. radius circle centered on a point within 30 ft. of you
      onEffect: the ground is difficult and unstable terrain until the start of your next turn. Any creature that enters the terrain or starts their turn within it takes [level] bludgeoning damage.
    uses:
      recharge: 5
</div>

<div data-blueprint="scaler">
---
type: hazard
description:
  name: Dustbomb Trap
  size: medium
  category: hazard
combat:
  level: 15
  rank: minion
  role: supporter
speeds:
  canMove: false
hp:
  dieSize: 8
  maximumDice: 30
damage:
  dieSize: 4
damageThreshold: 5
trigger: <p>You lie <em>dormant</em> until a creature steps on your pressure plate. of you. You may then activate immediately and use <em>Dust Bomb</em>. You remain active for up to 1 minute.</p>
abilityModifiers:
  ranking:
    - wis
    - con
damageImmunities:
  - poison
  - psychic
conditionImmunities: 
  - blinded
  - charmed
  - deafened
  - exhaustion
  - frightened
  - stunned
  - paralyzed
  - poisoned
  - petrified
  - prone
abilities:
  -
    name: Dust Bomb
    type: action
    rarity: common
    attack:
      type: utility
      area: Select a 10 ft. radius sphere centered on the nearest creature within 30 ft. of you
      onEffect: The terrain is lightly obscured until the start of your next turn.
</div>

\sidebarEnd

\contentEnd

\contentBegin { "class": "page--mm-making-attacks" }

## Defences

When a target is attacked, it has a chance to defend itself from harm—blocking a sword with a shield, dodging an explosion with uncanny precision, defying a magical command with stern resolve, etc.

There are seven categories of defence—**AC**, **STR**, **DEX**, **CON**, **INT**, **WIS**, and **CHA**—each dealing with a particular range of themes and effects. Choose one defence that is most appropriate for your particular attack.

### Defensive Options

To help you choose a defensive option, first consider the _primary effect_ or _major theme_ of your attack—what influence are you trying to have on the target, and how are you trying to achieve it?

Then use the descriptions below and the _Defensive Keywords_ table to determine the appropriate option.

#### Armor Class (AC) { "index": 1 }

AC is about _armor_ and _fighting ability_. When you try to hit a target with something that can be deflected, parried, or absorbed, the target must _watch out_ and **block** with AC.

#### Strength (STR) { "index": 2 }

Strength is about _force_ and _resistance_. When you try to move, grab, or restrain a target with physical force, the target must _hold their ground_ and **resist** with a Strength saving throw.

#### Dexterity (DEX) { "index": 3 }

Dexterity is about _precision_ and _reflexes_. When you try to hit a target with something that blasts, explodes, showers, or sprays over a large area, the target must _move with precision_ and **evade** with a Dexterity saving throw.

#### Constitution (CON) { "index": 4 }

Constitution is about _resilience_ and _sensitivity_. When you try to change or affect the physical form of a target (extreme temperatures, poison, corruption, blind, deafen), the target must _grit their teeth_ and **endure** with a Constitution saving throw.

#### Intelligence (INT) { "index": 5 }

Intelligence is about _sanity_ and _knowledge_. When you try to affect the mind and mental abilities of a target, the target must _hold onto their sanity_ and **focus** with an Intelligence saving throw.

#### Wisdom (WIS) { "index": 6 }

Wisdom is about _instinct_ and _perception_. When you try to subtly influence a target's judgement without them knowing about it, the target must _harness their insight_ and **perceive the truth** with a Wisdom saving throw.

#### Charisma (CHA) { "index": 7 }

Charisma is about _presence_ and _soul_. When you try to openly control a target or transform their essence by force, the target must _hold onto their sense of self_ and **defy you** with a Charisma saving throw.

\columnbreak

\panelBegin { "type": "table", "title": "Defensive Keywords" }

|Defence|Keywords|
|:-:|:--|
|AC|Aim, Shoot, Swipe, Slash, Stab, Pierce, Bash.|
|STR|Push, Pull, Slide, Grab, Press, Drag, Squeeze, Stretch, Crush, Restrain, Move.|
|DEX|Burst, Blast, Explode, Spray, Shower, Erupt, Line, Area, Zone.|
|CON|Temperature, Poison, Corruption, Disease, Chemical, Body, Sense, Physiology.|
|INT|Mind, Insanity, Madness, Confusion, Memory, Hallucination, Delusion.|
|WIS|Beguile, Seduce, Charm, Influence, Deceive, Disguise, Hide, Manipulate, Illusion.|
|CHA|Dominate, Possess, Control, Puppet, Command, Demand, Polymorph, Banish.|

\panelEnd

### Varying Defences

There are many ways to achieve the same goal in combat. The way you describe your attack will define how it can be defended against—use this to dive into the fiction and create a wide variety of interesting, narrative-rich attacks for your monsters and hazards.

\exampleBegin

The GM wants to create a **Cause Fear** attack. They can do so in a variety of ways—for example:

* I raise your adrenaline levels to make you feel afraid. _(Chemical, CON save)_
* I create a hallucination in your mind to make you afraid. _(Hallucination, INT save)_
* I create an illusion of something terrifying to make you afraid. _(Illusion, WIS save)_
* I command you to be afraid of me. _(Command, CHA save)_

---

Later, the GM wants to create a **Petrification** attack for their encounters—for example:

* I shoot a magical arrow that turns you into a statue. _(Shoot, AC)_
* I inflict you with a magical corruption that turns flesh to stone. _(Corruption, CON save)_
* I attack your mind to make you think you are a statue. _(Madness, INT save)_
* I turn you into a statue. _(Polymorph, CHA save)_

\exampleEnd

\panelBegin { "type": "aside", "title": "Defence Definitions" }

These definitions may vary on occasion when compared to the D&D 5e SRD—but that's by design. Player spells and effects can be very inconsistent with defences—INT, WIS, and CHA saves in particular—and so don't make for a _reliable_ foundation.

Instead, the definitions and keywords used here serve to _clearly_ distinguish the intent and effect of your attack, helping you to pick defences with ease and consistency.

\panelEnd

\contentEnd

\contentBegin { "class": "page--mm-making-attacks" }

## Attack Templates

To get you started with basic and advanced attacks, this section contains a set of Attack and Effect templates.

Use the _Attack Templates_ to see how many effects you can have, and the _Effect Templates_ tables to choose specific effects.

\columnbreak

\exampleBegin { "class": "example--placeholder", "lines": 6 }

\exampleEnd

\regionBegin { "class": "region--fixed-bottom" }

\panelBegin { "type": "table", "class": "panel--attack-templates", "title": "Attack Templates" }

<table>
	<thead>
		<tr>
			<th>Range</th>
			<th>Activation</th>
			<th>Attack Bonus/DCs</th>
			<th>Attack Effects</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th colspan=4><span class="header primary">Common</span></th>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Instant</td>
			<td></td>
			<td>1</td>
		</tr>
		<tr>
			<th colspan=4><span class="header primary">Uncommon</span></th>
		</tr>
		<tr>
			<th colspan=4><span class="header secondary">Charges</span></th>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Instant</td>
			<td></td>
			<td>2</td>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Dooming</td>
			<td></td>
			<td>2</td>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Dooming, Counterable</td>
			<td></td>
			<td>3</td>
		</tr>
		<tr>
			<td>Area</td>
			<td>Instant</td>
			<td></td>
			<td>2</td>
		</tr>
		<tr>
			<td>Area</td>
			<td>Delayed</td>
			<td></td>
			<td>2</td>
		</tr>
		<tr>
			<th colspan=4><span class="header secondary">Recharging, Rapid</span></th>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Instant</td>
			<td>−2</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Dooming</td>
			<td>−2</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Dooming, Counterable</td>
			<td>−2</td>
			<td>3</td>
		</tr>
		<tr>
			<td>Area</td>
			<td>Instant</td>
			<td>−2</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Area</td>
			<td>Delayed</td>
			<td>−2</td>
			<td>2</td>
		</tr>
		<tr>
			<th colspan=4><span class="header secondary">Recharging, Steady</span></th>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Instant</td>
			<td></td>
			<td>2</td>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Dooming</td>
			<td></td>
			<td>2</td>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Dooming, Counterable</td>
			<td></td>
			<td>3</td>
		</tr>
		<tr>
			<td>Area</td>
			<td>Instant</td>
			<td></td>
			<td>2</td>
		</tr>
		<tr>
			<td>Area</td>
			<td>Delayed</td>
			<td></td>
			<td>2</td>
		</tr>
		<tr>
			<th colspan=4><span class="header secondary">Recharging, Slow</span></th>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Instant</td>
			<td>+2</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Dooming</td>
			<td>+2</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Dooming, Counterable</td>
			<td>+2</td>
			<td>3</td>
		</tr>
		<tr>
			<td>Area</td>
			<td>Instant</td>
			<td>+2</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Area</td>
			<td>Delayed</td>
			<td>+2</td>
			<td>2</td>
		</tr>
		<tr>
			<th colspan=4><span class="header secondary">Cooldown, Rapid</span></th>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Instant</td>
			<td>−2</td>
			<td>2</td>
		</tr>
	</tbody>
</table>
<table>
	<thead>
		<tr>
			<th>Range</th>
			<th>Activation</th>
			<th>Attack Bonus/DCs</th>
			<th>Attack Effects</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Aimed</td>
			<td>Dooming</td>
			<td>−2</td>
			<td>2</td>
		</tr>	
		<tr>
			<td>Aimed</td>
			<td>Dooming, Counterable</td>
			<td>−2</td>
			<td>3</td>
		</tr>
		<tr>
			<td>Area</td>
			<td>Instant</td>
			<td>−2</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Area</td>
			<td>Delayed</td>
			<td>−2</td>
			<td>2</td>
		</tr>
		<tr>
			<th colspan=4><span class="header secondary">Cooldown, Steady</span></th>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Instant</td>
			<td></td>
			<td>2</td>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Dooming</td>
			<td></td>
			<td>2</td>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Dooming, Counterable</td>
			<td></td>
			<td>3</td>
		</tr>
		<tr>
			<td>Area</td>
			<td>Instant</td>
			<td></td>
			<td>2</td>
		</tr>
		<tr>
			<td>Area</td>
			<td>Delayed</td>
			<td></td>
			<td>2</td>
		</tr>
		<tr>
			<th colspan=4><span class="header secondary">Cooldown, Slow</span></th>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Instant</td>
			<td>+2</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Dooming</td>
			<td>+2</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Dooming, Counterable</td>
			<td>+2</td>
			<td>3</td>
		</tr>
		<tr>
			<td>Area</td>
			<td>Instant</td>
			<td>+2</td>
			<td>2</td>
		</tr>
		<tr>
			<td>Area</td>
			<td>Delayed</td>
			<td>+2</td>
			<td>2</td>
		</tr>
		<tr>
			<th colspan=4><span class="header primary">Rare</span></th>
		</tr>
		<tr>
			<th colspan=4><span class="header secondary">Single Use</span></th>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Instant</td>
			<td>+2</td>
			<td>3</td>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Dooming</td>
			<td>+2</td>
			<td>3</td>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Dooming, Counterable</td>
			<td>+2</td>
			<td>4</td>
		</tr>
		<tr>
			<td>Area</td>
			<td>Instant</td>
			<td>+2</td>
			<td>3</td>
		</tr>
		<tr>
			<td>Area</td>
			<td>Delayed</td>
			<td>+2</td>
			<td>3</td>
		</tr>
		<tr>
			<th colspan=4><span class="header secondary">Recharging</span></th>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Instant</td>
			<td></td>
			<td>3</td>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Dooming</td>
			<td></td>
			<td>3</td>
		</tr>
		<tr>
			<td>Aimed</td>
			<td>Dooming, Counterable</td>
			<td></td>
			<td>4</td>
		</tr>
		<tr>
			<td>Area</td>
			<td>Instant</td>
			<td></td>
			<td>3</td>
		</tr>
		<tr>
			<td>Area</td>
			<td>Delayed</td>
			<td></td>
			<td>3</td>
		</tr>
	</tbody>
</table>

\panelEnd

\panelBegin { "type": "table", "class": "panel--effect-templates", "title": "Effect Templates" }

<table>
	<thead>
		<tr>
			<th>#</td>
			<th>Targets</th>
			<th>Description</th>
			<th>Effect Cost</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th colspan="4"><span class="header primary">Common</th>
		</tr>
		<tr>
			<th colspan="4"><span class="header secondary">Damage</th>
		</tr>
		<tr>
			<td>1</td>
			<td>Aimed, 1</td>
			<td>100% damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Aimed, 1</td>
			<td>75% <em>[type a]</em> damage and 25% <em>[type b]</em> damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>3</td>
			<td>Aimed, 1</td>
			<td>50% <em>[type a]</em> damage and 50% <em>[type b]</em> damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>4</td>
			<td>Aimed, 2</td>
			<td>50% damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>5</td>
			<td>Aimed, 2</td>
			<td>37% <em>[type a]</em> damage and 12% <em>[type b]</em> damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>6</td>
			<td>Aimed, 2</td>
			<td>25% <em>[type a]</em> damage and 25% <em>[type b]</em> damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>7</td>
			<td>Aimed, 3</td>
			<td>33% damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>8</td>
			<td>Aimed, 3</td>
			<td>25% <em>[type a]</em> damage and 8% <em>[type b]</em> damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>9</td>
			<td>Aimed, 3</td>
			<td>16% <em>[type a]</em> damage and 16% <em>[type b]</em> damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<th colspan="4"><span class="header secondary">Conditions</th>
		</tr>
		<tr>
			<td>10</td>
			<td>Aimed, 1</td>
			<td>The target is <em><em>[minor condition]</em></em> until the end of its next turn.</td>
			<td>1</td>
		</tr>
		<tr>
			<th colspan="4"><span class="header secondary">Movement</th>
		</tr>
	</tbody>
</table>

\panelEnd

\regionEnd

\contentEnd

\contentBegin { "class": "page--mm-making-attacks columns-1" }

\panelBegin { "type": "table", "class": "panel--effect-templates", "title": "Effect Templates" }

<table>
	<thead>
		<tr>
			<th>#</td>
			<th>Targets</th>
			<th>Description</th>
			<th>Effect Cost</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>11</td>
			<td>Aimed, 1</td>
			<td>The target is moved back 10 ft.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>12</td>
			<td>Aimed, 1</td>
			<td>The target is pulled 10 ft. towards you.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>13</td>
			<td>Aimed, 1</td>
			<td>The target is slid 10 ft. in a direction of your choice.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>14</td>
			<td>Aimed, 2</td>
			<td>The target is moved back 5 ft.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>15</td>
			<td>Aimed, 2</td>
			<td>The target is pulled 5 ft. towards you.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>16</td>
			<td>Aimed, 2</td>
			<td>The target is slid 5 ft. in a direction of your choice.</td>
			<td>1</td>
		</tr>
		<tr>
			<th colspan="4"><span class="header secondary">Resources</th>
		</tr>
		<tr>
			<td>17</td>
			<td>Aimed, 1</td>
			<td>The target loses a <em>[minor resource]</em>.</td>
			<td>1</td>
		</tr>
		<tr>
			<th colspan="4"><span class="header secondary">Empower</th>
		</tr>
		<tr>
			<td>18</td>
			<td>—</td>
			<td>An ally gains a minor empowerment.</td>
			<td>1</td>
		</tr>
		<tr>
			<th colspan="4"><span class="header secondary">Terrain</th>
		</tr>
		<tr>
			<td>19</td>
			<td>Area, All</td>
			<td>The terrain gains a minor modifier until the start of your next turn.</td>
			<td>1</td>
		</tr>
		<tr>
			<th colspan="4"><span class="header primary">Uncommon</th>
		</tr>
		<tr>
			<th colspan="4"><span class="header secondary">Damage</th>
		</tr>
		<tr>
			<td>20</td>
			<td>Aimed, 1</td>
			<td>100% damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>21</td>
			<td>Aimed, 1</td>
			<td>75% <em>[type a]</em> damage and 25% <em>[type b]</em> damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>22</td>
			<td>Aimed, 1</td>
			<td>50% <em>[type a]</em> damage and 50% <em>[type b]</em> damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>23</td>
			<td>Aimed, 1</td>
			<td>75% ongoing damage, save ends.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>24</td>
			<td>Aimed, 2</td>
			<td>50% damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>25</td>
			<td>Aimed, 2</td>
			<td>37% <em>[type a]</em> damage and 12% <em>[type b]</em> damage.</td>
			<td>1</td>
		</tr>		
		<tr>
			<td>26</td>
			<td>Aimed, 2</td>
			<td>25% <em>[type a]</em> damage and 25% <em>[type b]</em> damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>27</td>
			<td>Aimed, 2</td>
			<td>37% ongoing damage, save ends.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>28</td>
			<td>Aimed, 3</td>
			<td>33% damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>29</td>
			<td>Aimed, 3</td>
			<td>25% <em>[type a]</em> damage and 8% <em>[type b]</em> damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>30</td>
			<td>Aimed, 3</td>
			<td>16% <em>[type a]</em> damage and 16% <em>[type b]</em> damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>31</td>
			<td>Aimed, 3</td>
			<td>25% ongoing damage, save ends.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>32</td>
			<td>Area, All</td>
			<td>75% damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>33</td>
			<td>Area, All</td>
			<td><em>Hit:</em> 50% damage. <em>Miss:</em> 25% damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<th colspan="4"><span class="header secondary">Conditions</th>
		</tr>
		<tr>
			<td>34</td>
			<td>Aimed, 1</td>
			<td>The target is <em>[minor condition]</em>, save ends.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>35</td>
			<td>Aimed, 1</td>
			<td>The target is <em>[minor condition]</em> worsening to <em>[moderate/major conditions]</em>, save ends.</td>
			<td>2</td>
		</tr>
		<tr>
			<td>36</td>
			<td>Aimed, 1</td>
			<td>The target is <em>[moderate condition]</em> until the end of its next turn.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>37</td>
			<td>Aimed, 1</td>
			<td>The target is <em>[moderate condition]</em>, save ends.</td>
			<td>2</td>
		</tr>
		<tr>
			<td>38</td>
			<td>Aimed, 2</td>
			<td>The target is <em>[minor condition]</em>, save ends.</td>
			<td>2</td>
		</tr>
		<tr>
			<td>39</td>
			<td>Aimed, 2</td>
			<td>The target is <em>[moderate condition]</em> until the end of its next turn.</td>
			<td>2</td>
		</tr>
		<tr>
			<td>40</td>
			<td>Area, All</td>
			<td>The target is <em>[minor condition]</em> until the end of its next turn.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>41</td>
			<td>Area, All</td>
			<td>The target is <em>[minor condition]</em>, save ends.</td>
			<td>2</td>
		</tr>
		<tr>
			<td>42</td>
			<td>Area, All</td>
			<td>The target is <em>[moderate condition]</em> until the end of its next turn.</td>
			<td>2</td>
		</tr>
		<tr>
			<th colspan="4"><span class="header secondary">Movement</th>
		</tr>
		<tr>
			<td>43</td>
			<td>Aimed, 1</td>
			<td>The target is moved back 20 ft.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>44</td>
			<td>Aimed, 1</td>
			<td>The target is pulled 20 ft. towards you.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>45</td>
			<td>Aimed, 1</td>
			<td>The target is slid 20 ft. in a direction of your choice.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>46</td>
			<td>Aimed, 1</td>
			<td>The target is teleported 20 ft. to a position of your choice.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>47</td>
			<td>Aimed, 2</td>
			<td>The target is moved back 10 ft.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>48</td>
			<td>Aimed, 2</td>
			<td>The target is pulled 10 ft. towards you.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>49</td>
			<td>Aimed, 2</td>
			<td>The target is slid 10 ft. in a direction of your choice.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>50</td>
			<td>Aimed, 2</td>
			<td>The target is teleported 10 ft. to a position of your choice.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>51</td>
			<td>Area, All</td>
			<td>The target is moved back 15 ft.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>52</td>
			<td>Area, All</td>
			<td>The target is pulled 15 ft. towards you.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>53</td>
			<td>Area, All</td>
			<td>The target is slid 15 ft. in a direction of your choice.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>54</td>
			<td>Area, All</td>
			<td>The target is teleported 15 ft. to a position of your choice.</td>
			<td>1</td>
		</tr>
		<tr>
			<th colspan="4"><span class="header secondary">Resources</th>
		</tr>
		<tr>
			<td>55</td>
			<td>Aimed, 1</td>
			<td>The target loses a <em>[moderate resource]</em>.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>56</td>
			<td>Area, All</td>
			<td>The target loses a <em>[minor resource]</em>.</td>
			<td>1</td>
		</tr>
		<tr>
			<th colspan="4"><span class="header secondary">Empower</th>
		</tr>
		<tr>
			<td>57</td>
			<td>—</td>
			<td>An ally gains a moderate empowerment.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>58</td>
			<td>—</td>
			<td>An ally gains two minor empowerments.</td>
			<td>1</td>
		</tr>
		<tr>
			<th colspan="4"><span class="header secondary">Terrain</th>
		</tr>
	</tbody>
</table>

\panelEnd

\contentEnd

\contentBegin { "class": "page--mm-making-attacks columns-1" }

\panelBegin { "type": "table", "class": "panel--effect-templates", "title": "Effect Templates" }

<table>
	<thead>
		<tr>
			<th>#</th>
			<th>Targets</th>
			<th>Description</th>
			<th>Effect Cost</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>59</td>
			<td>Area, All</td>
			<td>The terrain gains a moderate modifier until the start of your next turn.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>60</td>
			<td>Area, All</td>
			<td>The terrain gains two minor modifiers until the start of your next turn.</td>
			<td>1</td>
		</tr>
		<tr>
			<th colspan="4"><span class="header primary">Rare</th>
		</tr>
		<tr>
			<th colspan="4"><span class="header secondary">Damage</th>
		</tr>
		<tr>
			<td>61</td>
			<td>Aimed, 1</td>
			<td>100% damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>62</td>
			<td>Aimed, 1</td>
			<td>75% <em>[type a]</em> damage and 25% <em>[type b]</em> damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>63</td>
			<td>Aimed, 1</td>
			<td>50% <em>[type a]</em> damage and 50% <em>[type b]</em> damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>64</td>
			<td>Aimed, 1</td>
			<td>75% ongoing damage, save ends.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>65</td>
			<td>Aimed, 2</td>
			<td>50% damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>66</td>
			<td>Aimed, 2</td>
			<td>37% <em>[type a]</em> damage and 12% <em>[type b]</em> damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>67</td>
			<td>Aimed, 2</td>
			<td>25% <em>[type a]</em> damage and 25% <em>[type b]</em> damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>68</td>
			<td>Aimed, 2</td>
			<td>37% ongoing damage, save ends.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>69</td>
			<td>Aimed, 3</td>
			<td>33% damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>70</td>
			<td>Aimed, 3</td>
			<td>25% <em>[type a]</em> damage and 8% <em>[type b]</em> damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>71</td>
			<td>Aimed, 3</td>
			<td>16% <em>[type a]</em> damage and 16% <em>[type b]</em> damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>72</td>
			<td>Aimed, 3</td>
			<td>25% ongoing damage, save ends.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>73</td>
			<td>Area, All</td>
			<td>75% damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>74</td>
			<td>Area, All</td>
			<td><em>Hit:</em> 50% damage. <em>Miss:</em> 25% damage.</td>
			<td>1</td>
		</tr>
		<tr>
			<th colspan="4"><span class="header secondary">Conditions</th>
		</tr>
		<tr>
			<td>75</td>
			<td>Aimed, 1</td>
			<td>The target is <em>[moderate condition]</em>, save ends.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>76</td>
			<td>Aimed, 1</td>
			<td>The target is <em>[moderate condition]</em> worsening to <em>[moderate/major conditions]</em>, save ends.</td>
			<td>2</td>
		</tr>
		<tr>
			<td>77</td>
			<td>Aimed, 1</td>
			<td>The target is <em>[major condition]</em> until the end of its next turn.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>78</td>
			<td>Aimed, 1</td>
			<td>The target is <em>[major condition]</em>, save ends.</td>
			<td>2</td>
		</tr>
		<tr>
			<td>79</td>
			<td>Aimed, 2</td>
			<td>The target is <em>[moderate condition]</em>, save ends.</td>
			<td>2</td>
		</tr>
		<tr>
			<td>80</td>
			<td>Aimed, 2</td>
			<td>The target is <em>[moderate condition]</em> worsening to <em>[moderate/major conditions]</em>, save ends.</td>
			<td>3</td>
		</tr>
		<tr>
			<td>81</td>
			<td>Aimed, 2</td>
			<td>The target is <em>[major condition]</em> until the end of its next turn.</td>
			<td>2</td>
		</tr>
		<tr>
			<td>82</td>
			<td>Aimed, 2</td>
			<td>The target is <em>[major condition]</em>, save ends.</td>
			<td>3</td>
		</tr>
		<tr>
			<td>83</td>
			<td>Area, All</td>
			<td>The target is <em>[moderate condition]</em> until the end of its next turn.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>84</td>
			<td>Area, All</td>
			<td>The target is <em>[moderate condition]</em>, save ends.</td>
			<td>2</td>
		</tr>
		<tr>
			<td>85</td>
			<td>Area, All</td>
			<td>The target is <em>[moderate condition]</em> worsening to <em>[moderate/major conditions]</em>, save ends.</td>
			<td>3</td>
		</tr>
		<tr>
			<td>86</td>
			<td>Area, All</td>
			<td>The target is <em>[major condition]</em> until the end of its next turn.</td>
			<td>2</td>
		</tr>
		<tr>
			<td>87</td>
			<td>Area, All</td>
			<td>The target is <em>[major condition]</em>, save ends.</td>
			<td>3</td>
		</tr>
		<tr>
			<th colspan="4"><span class="header secondary">Movement</th>
		</tr>
		<tr>
			<td>88</td>
			<td>Aimed, 1</td>
			<td>The target is moved back 30 ft.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>89</td>
			<td>Aimed, 1</td>
			<td>The target is pulled 30 ft. towards you.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>90</td>
			<td>Aimed, 1</td>
			<td>The target is slid 30 ft. in a direction of your choice.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>91</td>
			<td>Aimed, 1</td>
			<td>The target is teleported 20 ft. to a position of your choice.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>92</td>
			<td>Aimed, 2</td>
			<td>The target is moved back 15 ft.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>93</td>
			<td>Aimed, 2</td>
			<td>The target is pulled 15 ft. towards you.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>94</td>
			<td>Aimed, 2</td>
			<td>The target is slid 15 ft. in a direction of your choice.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>95</td>
			<td>Aimed, 2</td>
			<td>The target is teleported 15 ft. to a position of your choice.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>96</td>
			<td>Aimed, 3</td>
			<td>The target is moved back 10 ft.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>97</td>
			<td>Aimed, 3</td>
			<td>The target is pulled 10 ft. towards you.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>98</td>
			<td>Aimed, 3</td>
			<td>The target is slid 10 ft. in a direction of your choice.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>99</td>
			<td>Aimed, 3</td>
			<td>The target is teleported 10 ft. to a position of your choice.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>100</td>
			<td>Area, All</td>
			<td>The target is moved back 10 ft.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>101</td>
			<td>Area, All</td>
			<td>The target is pulled 10 ft. towards you.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>102</td>
			<td>Area, All</td>
			<td>The target is slid 10 ft. in a direction of your choice.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>103</td>
			<td>Area, All</td>
			<td>The target is teleported 10 ft. to a position of your choice.</td>
			<td>1</td>
		</tr>
		<tr>
			<th colspan="4"><span class="header secondary">Resources</th>
		</tr>
		<tr>
			<td>104</td>
			<td>Aimed, 1</td>
			<td>The target loses a <em>[major resource]</em>.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>105</td>
			<td>Area, All</td>
			<td>The target loses a <em>[moderate resource]</em>.</td>
			<td>1</td>
		</tr>
		<tr>
			<th colspan="4"><span class="header secondary">Empower</th>
		</tr>
		<tr>
			<td>106</td>
			<td>—</td>
			<td>An ally gains a major empowerment.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>107</td>
			<td>—</td>
			<td>An ally gains two moderate/minor empowerments.</td>
			<td>1</td>
		</tr>
		<tr>
			<th colspan="4"><span class="header secondary">Terrain</th>
		</tr>
		<tr>
			<td>108</td>
			<td>Area, All</td>
			<td>The terrain gains a major modifier until the start of your next turn.</td>
			<td>1</td>
		</tr>
		<tr>
			<td>109</td>
			<td>Area, All</td>
			<td>The terrain gains two moderate/minor modifiers until the start of your next turn.</td>
			<td>1</td>
		</tr>
	</tbody>
</table>

\panelEnd

\contentEnd