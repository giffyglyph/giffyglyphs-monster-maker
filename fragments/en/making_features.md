\contentBegin { "class": "page--mm-making-features", "header": "duration", "bg": "pages/text/bg-glyph.png" }

# Making Features

No monster is complete without a few _special_ tricks—passive traits, dangerous attacks, and handy utilities. But how do you build and balance these features?

This chapter describes how to make a range of _features_ for your scaling monsters.

## Features

A feature is any notable ability or quality that is not covered by your standard, basic attributes. Features come in one of three categories:

1. **Traits** are passive abilities and perks—advantage on particular saving throws, on-death events, unique movement options, etc.
2. **Attacks** are activated abilities that affect one or more _unwilling_ targets with an attack roll or saving throw. For more details on _making effects_, see p<span data-blueprint="value">{ type: page.number, selector: "h1[id='making-effects']" }</span>.
3. **Utilities** are activated abilities that affect yourself and/or _willing_ allies. Utilities work in much the same way as attacks and are built in the same way.

Use the following guidelines to equip your monsters with ancestral (i.e. racial), role, and other assorted features. Take care not to _overcomplicate_ your creations—keep it simple and focus on quality over quantity. 

\panelBegin { "type": "table", "class": "panel--recommended-features", "title": "Recommended Features" }

<table>
  <colgroup>
    <col>
    <col>
    <col>
    <col>
    <col>
  </colgroup>
  <thead>
    <tr>
      <th rowspan=2>Rank</th>
      <th rowspan=2>Max. Features</th>
      <th colspan=3><span class="spacer">Feature Breakdown</span></th>
    </tr>
    <tr>
      <th>Ancestral</th>
      <th>Role</th>
      <th>Misc.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Minion</td>
      <td>1-5</td>
      <td>1</td>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Grunt</td>
      <td>3-8</td>
      <td>2</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Elite</td>
      <td>5-11</td>
      <td>3</td>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr>
      <td>Paragon</td>
      <td>7-14</td>
      <td>3</td>
      <td>3</td>
      <td>7</td>
    </tr>
  </tbody>
</table>

\panelEnd

\columnbreak

<div data-blueprint="scaler">
---
name: Dire Wolf
type: monster
portrait: wolf-head.svg
size:
  primary: large
category:
  primary: beast
combat:
  level: 6
  rank: grunt
  role: skirmisher
  subrole: traveller
abilityModifiers:
  ranking:
    - str
    - dex
    - con
    - wis
    - cha
    - int
movement:
  speeds:
    walk:
      baseSpeedPercentage: 100
awareness:
  senses:
    darkvision: 60
damageResistances:
  - cold
features:
  -
    name: Dasher
    rarity: common
    activation:
      type: bonus
      quantity: 1
    description: You take the Dash action.
  -
    name: Keen Senses
    rarity: common
    description: You have advantage on Wisdom (Perception) checks that rely on hearing or smell.
  -
    name: Pack Tactics
    rarity: common
    description: You have advantage on attack rolls against creatures within 5 ft. of any ally that is not incapacitated.
  -
    name: Maul
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
      onHit: "[damage, d6|keepStatic] slashing damage"
  -
    name: Bite
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
      onHit: "[damage, d10|keepStatic] piercing damage."
  -
    name: Pounce
    rarity: uncommon
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
      onHit: "[damage, d8|keepStatic] bludgeoning damage. The target is knocked prone and grappled by you."
    uses:
      type: cooldown
      cooldown:
        target: 3
</div>

\exampleBegin

Zane froze when he heard the growl. How did the beast get _behind_ him so fast? "Clever girl," he hissed—before the assassin could draw his dagger, the wolf pounced...

\exampleEnd

\contentEnd

\contentBegin { "class": "page--mm-making-features" }

## Making a Feature

To create a new feature for your scaling monster, follow these basic steps:

1. **Category:** First, choose a category—are you making a trait, attack, or utility?
2. **Activation Time:** Next, decide how much time it takes to activate your feature.
3. **Rarity:** Now decide how _rare_ your feature is—the rarer it is, the more powerful it can be.
4. **Defence:** If your feature is an _attack_, choose how your targets can defend—do they use armor or a specific saving throw?
5. **Range:** Pick an effective range for your feature—are you targeting yourself, some _particular_ targets, or a wide reaching area?
6. **Targets:** Choose how many targets you get to affect.
7. **Activation:** Decide how long it takes your feature to apply effects once activated.
8. **Effects:** Finally, give your feature some _bite_ with special effects—damage, conditions, forced movement, empowerments, etc. For more details on _making effects_, see p<span data-blueprint="value">{ type: page.number, selector: "h1[id='making-effects']" }</span>.

<div data-blueprint="action">
---
name: Example Features
subtitle: Level 6, Grunt, Striker
actionType: Actions
body: |
  <div class="feature feature--common">
    <strong>Basic Melee Attack:</strong> <em>Melee:</em> +X to hit, reach 5 ft., one target. <em>Hit:</em> 100% slashing damage.
  </div>
  <div class="feature feature--common">
    <strong>Basic Ranged Attack:</strong> <em>Ranged:</em> +X to hit, range 30 ft., one target. <em>Hit:</em> 100% piercing damage.
  </div>
  <div class="feature feature--common">
    <strong>Basic Utility:</strong> <em>Utility:</em> range 30 ft., one target. <em>Effect:</em> The target can spend their reaction to make a basic attack against a target of your choice.
  </div>
  <div class="feature feature--common">
    <strong>Basic Save Melee Attack:</strong> <em>Save:</em> DC X vs STR, reach 5 ft., one target. <em>Hit:</em> The target is knocked prone.
  </div>
  <div class="feature feature--common">
    <strong>Basic Save Ranged Attack:</strong> <em>Save:</em> DC X vs DEX, a 10 ft. radius circle within 30 ft. of you, all targets. <em>Hit:</em> The target takes 75% piercing damage.
  </div>
</div>

## Activation Time

Activation times represent the _effort_ it takes to use your your feature—the greater the effort, the longer the time. There are six categories of activation time: choose one that best suits your feature.

\panelBegin { "type": "table", "title": "Activation Times" }

|d6|Type|Description|
|:-:|---|---|
|1|None|The feature is permanently active (i.e. it is passive).|
|2|Free|You can activate the feature freely.|
|3|Bonus&nbsp;Action|You must spend a bonus action.|
|4|Action|You must spend an action.|
|5|Reaction|You must spend a reaction.|
|6|Time|You must spend an extended amount of minutes/hours/days/etc.|

\panelEnd

\columnbreak

## Rarities

Features come in three _rarities_ of increasing power and effectiveness—common, uncommon, and rare.

When you create a feature, choose a rarity. The more rare you make your feature, the less often you can use it in combat—but the more _powerful_ it can become.

### Common Features { "index": "A" }

A _common_ feature is a basic, reliable ability that can be activated passively, at will, or once-per-turn without significant limitations—slashing with a sword, lashing out with a tail, casting a magical cantrip, etc.

### Uncommon Features { "index": "B" }

Uncommon features are more powerful than their common counterparts, but require special resources (stamina, rage, focus, spellpower, ammunition, etc.) or set periods of time to gather their strength.

When you create an uncommon feature, choose one of three limitations: **charges**, **recharging**, or **cooldown**.

#### Charges

Charge features have a limited _pool_ of resources—energy, ammunition, stamina, mana, fuel, rage, etc. Each time you use the feature, you consume one or more resources from this pool until it is exhausted.

\panelBegin { "type": "table", "title": "Charges" }

|Combat Rank|Av. Charges per Short Rest|
|---|:-:|
|Minion/Grunt|1|
|Elite|2|
|Paragon|Threat|

\panelEnd

#### Recovering Charges

Charges can be recovered if-and-when particular events are completed—taking a short rest, gathering ammunition, drinking a potion, becoming bloodied, etc.

Choose an event from the _Charge Events_ table below, or describe your own. Depending on the _effort_ required, you recover 25%, 50%, or 100% of your total charges when the event is resolved.

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

\contentEnd

\contentBegin { "class": "page--mm-making-features" }

\exampleBegin

A kobold slinger (grunt) is equipped with **Stink Pot _(1 charge)_**, an uncommon attack feature that 1) deals poison damage and 2) inflicts the _Poisoned_ condition.

This attack can be used one time (one attack, one pot) before the slinger runs out of ammunition.

\exampleEnd

#### Recharging

When you use a recharging feature, it is exhausted until either a) the feature is randomly recharged or b) you complete a short or long rest. At the start of your turn, roll a d6—if you roll within a specified range, you can use the feature again as normal.

Choose a die range from the _Recharge Time_ table below based on your combat rank—the higher your rank, the faster your ability will recharge.

\panelBegin { "type": "table", "title": "Recharge Time" }

|Combat Rank|Recharge Range|
|---|:-:|
|Minion|6|
|Grunt|5-6|
|Elite/Paragon|4-6|

\panelEnd

\exampleBegin

A tiefling pyromancer is equipped with an uncommon **Scorch _(recharge)_** attack feature. Because the tiefling is a simple grunt, the recharge range is 5-6.

During her turn, she uses the attack to hit Valiant with some fire damage. The attack is then exhausted. At the start of her next turn, the GM rolls a d6. The result is only a 3—the attack has not yet recharged.

\exampleEnd

#### Cooldown

When you use a cooldown feature, it is exhausted until a period of time has passed. Once a cooldown feature is exhausted, start a countdown timer. At the start of each of your turns, reduce the timer by 1—once it reaches 0, the feature can be used again.

Choose a cooldown period from the _Cooldown Time_ table below based on your combat rank—the higher your rank, the faster your ability will recharge.

\panelBegin { "type": "table", "title": "Cooldown Time" }

|Combat Rank|Turns Required|
|---|:-:|
|Minion|4|
|Grunt|3|
|Elite/Paragon|2|

\panelEnd

\exampleBegin

The GM equips a monstrous, elite chimera with **Acid Spray _(cooldown)_**, an uncommon attack feature. Because the chimera is elite, the cooldown is 2.

During it's turn, the chimera uses the attack and then starts a new countdown timer at 2. At the start of the chimera's following turns, the timer is reduced by 1 until it reaches 0 on the fourth following turn—the attack has now recharged.

\exampleEnd

\columnbreak

### Rare Features { "index": "C" }

Rare features are extra-special abilities that, when exhausted, take _significant_ time to recover (typically a long rest). These are some of your most powerful features—limit breaks, overdrive techniques, masterwork magic, etc.

When you describe a rare attack, use plenty of flavor and description—these are your most dangerous and _exciting_ abilities, so put on a good show.

#### Recovery

Elites and paragons are able to recharge their rare features when a particular event is triggered—being bloodied, becoming enraged, draining a pool of power, consuming a potion, sacrificing a victim, etc.

To get started, choose a recovery event from the list below or create your own.

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

A sinister lich is equipped with a **Soul Rend (rare)** attack. The lich is a paragon monster, and so the GM chooses a recovery event for the attack—in this case, whenever a player character is reduced to 0 hit points.

During a battle, the lich uses _Soul Rend_ to attack the party and then finishes off a player character with a ray of frost. As the character falls to 0 hit points, the lich harvests some soul energy to recharge _Soul Rend_.

\exampleEnd

\panelBegin { "type": "aside", "title": "Build Fun Synergies" }

Rarities and recharge conditions make it easy to create fun, flavorful synergies. For example:

---

* **Reloader:** A static, inanimate hazard (e.g. a rockfall trap) has an feature with _3 charges_. It can be manually reset by another monster.
* **Lucky:** A monster has a _slow recharge_ feature. If they are within range of a supporting hazard or monster, they roll their recharge with advantage.
* **Booster:** A hazard has a _slow cooldown_ feature. Another monster (e.g. a supporter) has an ability to reduce the cooldown by 1.
* **Battery:** A monster has a feature with _2 charges_. If they are within range of a particular hazard (e.g. an arcane battery), the feature costs 0 charges to use.

---

Use these interplays to help create little narratives and challenges within your combat encounters.

\panelEnd

\contentEnd

\contentBegin { "class": "page--mm-making-features" }

## Defences

If you make an attack, your target has a chance to defend itself—blocking a sword with a shield, dodging an explosion with uncanny precision, defying a magical command with stern resolve, etc.

There are seven defences—**AC**, **STR**, **DEX**, **CON**, **INT**, **WIS**, and **CHA**—each dealing with a particular range of themes and effects. Choose one defence that is most appropriate for your particular attack.

### Defensive Options

To help you choose a defense, consider the _primary effect_ of your attack—what influence are you trying to have on the target, and how are you trying to achieve it?

Then use the descriptions below and the _Defensive Keywords_ table to determine the appropriate option.

#### Armor Class (AC) { "index": 1 }

AC is about _armor_ and _fighting ability_. When you try to hit a target with something that can be deflected, parried, or absorbed, the target must _watch out_ and **block** with AC.

#### Strength (STR) { "index": 2 }

Strength is about _force_ and _resistance_. When you try to move, grab, or restrain a target with physical force, the target must _hold their ground_ and **resist** with a Strength saving throw.

#### Dexterity (DEX) { "index": 3 }

Dexterity is about _precision_ and _reflexes_. When you try to hit a target with something that blasts, explodes, rains, or sprays over an area, the target must _move with precision_ and **evade** with a Dexterity saving throw.

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

There are many ways to achieve the same goal in combat. The way you describe your attack will define how it can be defended against—use this to dive into the fiction and create a wide variety of interesting, narrative-rich attacks for your monsters.

\exampleBegin

The GM wants to create a **Cause Fear** attack. They can do so in a variety of ways—for example:

---

* I raise your adrenaline levels to make you feel afraid. _(Chemical, CON save)_
* I create a hallucination in your mind to make you afraid. _(Hallucination, INT save)_
* I create an illusion of something terrifying to make you afraid. _(Illusion, WIS save)_
* I command you to be afraid of me. _(Command, CHA save)_

---

Later, the GM wants to create a **Petrification** attack for their encounters—for example:

---

* I shoot a magical arrow that turns you into a statue. _(Shoot, AC)_
* I inflict you with a magical corruption that turns flesh to stone. _(Corruption, CON save)_
* I attack your mind to make you think you are a statue. _(Madness, INT save)_
* I turn you into a statue. _(Polymorph, CHA save)_

\exampleEnd

\panelBegin { "type": "aside", "title": "Defence Definitions" }

These definitions may vary on occasion when compared to the 5th Edition SRD—but that's by design. Player spells and effects can be very inconsistent with defences—INT, WIS, and CHA saves in particular—and so don't make for a _reliable_ foundation.

The definitions and keywords used here serve to _clearly_ distinguish the intent and effect of your attack, helping you to pick defences with ease and consistency.

\panelEnd

\contentEnd

\contentBegin { "class": "page--mm-making-features" }

## Ranges

A _range_ defines the effective boundaries of your feature—where are targets at risk and where are they safe?

There are three basic categories—**self**, **aimed**, and **area**. Choose one for your feature and use the _Range Templates_ provided to help define the specific details.

**Distances:** Some templates contain _recommended distances_ for each rarity: common, uncommon, and rare. Use these as-and-when appropriate—the rarer the feature, the bigger the distance.

### Self { "index": "A" }

Features with no outwardly range focus on the internal—you are trying to affect yourself in some fashion.

### Aimed { "index": "B" }

Aimed ranges focus on specific targets—you are trying to affect things close by or at a distance from yourself.

### Area { "index": "C" }

Area ranges focus on specific regions—you are trying to affect things within a certain space (a sphere, a cone, a line, a cube, etc.).

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
			<th colspan="2" class="header"><span>Self</span></th>
		</tr>
		<tr>
			<td>Self</td>
			<td>No external range.</td>
		</tr>
		<tr>
			<th colspan="2" class="header"><span>Aimed</span></th>
		</tr>
    <tr>
			<td>Cube</td>
			<td>A 5 ft. cube within 30/60/90 ft.</td>
		</tr>
    <tr>
			<td>Point</td>
			<td>A point within 30/60/90 ft.</td>
		</tr>
		<tr>
			<td>Ranged</td>
			<td>Ranged 30/60/120 ft.</td>
		</tr>
		<tr>
			<td>Reach</td>
			<td>Reach 5/10/15 ft.</td>
		</tr>
		<tr>
			<td>Square</td>
			<td>A 5 ft. square within 30/60/90 ft.</td>
		</tr>
		<tr>
			<td>Touch</td>
			<td>Physical touch.</td>
		</tr>
		<tr>
			<th colspan="2" class="header"><span>Area</span></th>
		</tr>
		<tr>
			<td>Circle</td>
			<td>A 10/15/20 ft. radius circle centered on yourself / a point within 30/60/90 ft.</td>
		</tr>
		<tr>
			<td>Cone</td>
			<td>A 15/30/60 ft. cone extending from yourself / a point within 30/60/90 ft.</td>
		</tr>
		<tr>
			<td>Cube</td>
			<td>A 10/20/40 ft. cube centered on yourself / a point within 30/60/90 ft.</td>
		</tr>
		<tr>
			<td>Cylinder</td>
			<td>A 10/15/20 ft. radius, 20/40/60 ft. high cylinder centered on yourself / a point within 30/60/90&nbsp;ft.</td>
		</tr>
		<tr>
			<td>Line</td>
			<td>A 15/30/60 ft. line that is 5/10 ft. wide extending from yourself / a point within 30/60/90 ft.</td>
		</tr>
		<tr>
			<td>Reach</td>
			<td>Reach 5/10/15 ft.</td>
		</tr>
		<tr>
			<td>Ring</td>
			<td>A 10/15/20 ft inner radius, 10/15/20 ft. outer radius ring centered on yourself / a point within 30/60/90 ft.</td>
		</tr>
		<tr>
			<td>Sphere</td>
			<td>A 10/15/20 ft. radius sphere centered on yourself / a point within 30/60/90 ft.</td>
		</tr>
		<tr>
			<td>Square</td>
			<td>A 10/20/40 ft. square centered on yourself / a point within 30/60/90 ft.</td>
		</tr>
		<tr>
			<td>Zone</td>
			<td>An arbitrary region of influence.</td>
		</tr>
	</tbody>
</table>

\panelEnd

\columnbreak

## Targets

To use a feature, you must have a target—who or what are you trying to affect? Choose a _quantity_ and _category_ from the tables below.

If your feature is particularly specific, consider also applying an _alliance_, _alignment_ or _creature category_.

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
			<th colspan="2" class="header"><span>Quantities</span></th>
		</tr>
		<tr>
			<td>None</td>
			<td>No specific target (i.e the terrain itself).</td>
		</tr>
		<tr>
			<td>One</td>
			<td>A single instance.</td>
		</tr>
		<tr>
			<td>Limited</td>
			<td>A limited number (2/3/4) of instances.</td>
		</tr>
		<tr>
			<td>All</td>
			<td>All instances (area range only).</td>
		</tr>
		<tr>
			<th colspan="2" class="header"><span>Categories</span></th>
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
			<td>Self</td>
			<td>Yourself.</td>
		</tr>
		<tr>
			<th colspan="2" class="header"><span>Alliances</span></th>
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
			<th colspan="2" class="header"><span>Alignments</span></th>
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

### Limited Targets

When you use a _limited_ quantity, the maximum number of targets you can have is determined by your combat level—the higher your level, the more targets you can aim at.

\panelBegin { "type": "table", "title": "Limited Targets" }

|Combat Level|Max. Limited Targets|
|:-:|:-:|
|5th|2|
|11th|3|
|17th|4|

\panelEnd

\panelBegin { "type": "aside", "title": "Multiattacks" }

In this supplement, a multiattack is defined as any single action with an _aimed_ range that attacks more than one target—i.e. two targets within reach 5 ft, three creatures within range 30 ft., etc.

\panelEnd

\contentEnd

\contentBegin { "class": "page--mm-making-features" }

## Deferrals

If your feature is _uncommon_ or _rare_, you can use a _deferral_ to change when it chooses targets, makes attacks, or applies effects—a fireball becomes a ticking bomb, a punch becomes a dooming fist of death, a healing power becomes a regeneration power, etc.

There are two types of deferral: **delayed**, and **dooming**. Choose one when you want to mix things up.

### Delayed { "index": "A" }

When you activate a _delayed_ feature, you must wait until some time passes (i.e. 1, 2, or 3 turns) before you choose targets and make attacks.

These are your _countdown_ attacks—things that _tick down_, _wind up_, or _charge power_. Use these to threaten areas and encourage movement to avoid being a hit.

#### Using a Delayed Feature

When you use a delayed feature, first describe what you are doing (charging power, throwing an explosive, causing a cave-in, etc.) and the likely area or targets that will be affected by the attack. Then:

1. Create a visible _countdown timer_.
2. At the start of your turns, reduce the timer by 1.
3. When the timer reaches 0, choose your targets immediately and make attacks if required.
4. Apply effects to any affected target before you continue with the rest of your turn.

This process may be interrupted if, when the timer reaches 0, you are unable to choose targets or the situation otherwise no longer applies.

\exampleBegin

As they assault the _Ctharonite Workshop_, Valiant and Viridian are attacked by a pair of mad artificers.

---

* **GM:** The _mad artificer_ aims her spark cannon into the air and fires. A crackling orb lands next to you, Valiant, pulsing with raw electrical power. You hear a beeping that seems to be _rapidly_ accelerating...
* **Valiant:** Uh. _How_ rapidly?
* **GM:** You think about one round (puts a d6 on the table). Sparks are reaching out in a 10 ft. sphere...

\exampleEnd

\panelBegin { "type": "aside", "title": "Use Visible Clocks" }

When you start a countdown, try to make it clearly visible to the players. Countdowns serve two important purposes: 1) to _inform_ your players that something will happen soon (even if they don't know _exactly_ what), and 2) to _build anticipation_ about the event.

Try using a d6 as a physical timer. If the countdown is on a player (i.e. a doom clock), give them ownership of the die as a tangible relic of their approaching doom.

\panelEnd

\columnbreak

### Dooming { "index": "B" }

When you hit a target with a _dooming_ feature, you must wait until some time passes (i.e. 1, 2, or 3 turns) before you apply the effects.

These are your pressuring features—things that _corrupt_, _spread_, or _build up_. Use these to give your players a sense of _impending doom_.

#### Activating a Dooming Attack

When you use a dooming feature, choose your targets and make attacks if required. When a target is hit, it gains a new countdown timer—the _doom_ clock.

At the start of each of the target's turns, reduce the doom clock by 1. Once it reaches 0, doom has arrived—the target suffers the feature's effects.

#### Dispelling Doom

Doom can be countered if the target spends an action to take a _reasonable_ countermeasure—bathing in water to quench fire, pulling out a poisonous stinger, focusing the mind against a hallucination, etc.

Depending on the action taken, this may require one or more ability checks from the target.

#### Respite

You can use _dooming_ features to deliver positive effects to targets—such as healing or empowerments. In this case, reflavor doom as _respite_.

<div data-blueprint="scaler">
---
name: Mad Artificer
type: monster
portrait: dwarf-helmet.svg
size:
  primary: medium
category:
  primary: humanoid
  secondary: dwarf
combat:
  level: 6
  rank: grunt
  role: striker
  subrole: havoc
abilityModifiers:
  ranking:
    - int
    - dex
    - cha
    - str
    - con
    - wis
movement:
  speeds:
    walk:
      baseSpeedPercentage: 100
languages:
  - common
  - dwarvish
damageImmunities:
  - lightning
items:
  - thunder cannon
  - grenade belt
features:
  -
    name: Leaping Spark
    rarity: uncommon
    description: When you hit a creature with <em>Spark Cannon</em>, make a second attack against another creature within 15 ft.
    uses:
      type: cooldown
      cooldown:
        target: 3
  -
    name: Spark Cannon
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
      targets: one target
      onHit: "[damage, d8|keepStatic] lightning damage"
  -
    name: Spark Grenade
    rarity: uncommon
    activation:
      type: action
      quantity: 1
    activity:
      type: rsav
      delayed: 1
      onEffect: You throw a grenade onto the ground within 30 ft. of you.
      onDelay: All creatures within 15 ft. of the grenade must make a DC [attackDcInt] DEX saving throw or take [round(damage * 1.25), d8|keepStatic] lightning damage (half damage on a miss).
    uses:
      type: charges
      charges:
        maximum: 1
        period: sr
  -
    name: Sticky Grenade
    rarity: rare
    activation:
      type: action
      quantity: 1
    activity:
      type: rwak
      dooming: 2
      attack:
        defence: ac
        attribute: int
      area: range 30 ft.
      targets: one target
      onHit: "the target is doomed 2."
      onDoom: "[damage * 2, d8|keepStatic] acid damage (ongoing, DC [attackDcInt] CON)."
    uses:
      type: charges
      charges:
        maximum: 1
        period: lr
</div>

\contentEnd