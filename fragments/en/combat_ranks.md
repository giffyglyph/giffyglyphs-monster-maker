\contentBegin { "class": "page--mm-combat-ranks", "header": "upgrade", "bg": "pages/text/bg-glyph.png" }

# Combat Ranks

It is said that authority creates power and grants you more influence and notoriety on the battlefield. But how exactly do you assign authority to a monster, and how does it empower them?

This chapter introduces _combat ranks_ and pre-made templates to help you field an army of minions, grunts, elites, and paragons.

## Choosing a Rank

A _combat rank_ defines how _threatening_ you are in battle, adjusting attributes and granting access to special features. There are four ranks you can choose from:

* **Grunts** are the rank-and-file members of any fighting force—one grunt is the counterpart to one PC.
* **Minions** are frail but make up for it by fighting in large numbers—for the cost of one grunt you can field four minions.
* **Elites** are tough champions and powerful captains with twice the staying power of an grunt.
* **Paragons** are a force to be reckoned with, able to face an entire adventuring party single-handed.

Choose the rank that best describes how your monster acts in combat and then apply attribute modifiers as shown in the _Combat Ranks_ table below.

\columnbreak

### Ability Modifiers

Each rank comes with a recommended set of six ability modifiers—two _high_ modifiers, two _mid_ modifiers, and two _low_ modifiers. Allocate these ability modifiers as best fits your scaling monster.

If it wouldn't make sense for your monster to have a particular ability, either a) set the relevant modifier to −5 or b) set the ability score to 0 (you automatically fail ability checks/saving throws).

### Trained Saving Throws

When you create a new scaling monster, you can choose one or more _trained saving throws_ (TSTs). Try to split these evenly between _strong_ and _weak_ save categories:

* **Strong:** Dexterity, Constitution, Wisdom.
* **Weak:** Strength, Intelligence, Charisma.

### Threat

Each rank has a _threat rating_ that describes how many players (of equal level) should be threatened by this monster in combat. A grunt, for example, is a threat for one player character while an elite is a threat for two.

Use threat ratings to mix-and-match ranks easily. For more details, see _Making Encounters_ (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='making-encounters']" }</span>).

\regionBegin { "class": "region--fixed-bottom region--border-top columns-1" }

\panelBegin { "class": "panel--table", "title": "Combat Ranks" }

|Rank|Threat|Modifiers|INIT|AC|HP|TST|DMG|XP|Special Features|
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|---|
|Minion|<span data-blueprint="value">{ type: scaler.rank.combatThreat, rank: minion }</span>|<span data-blueprint="value">{ type: scaler.rank.abilityModifiers, rank: minion }</span>|<span data-blueprint="value">{ type: scaler.rank.initiativeBonus.proficiency, rank: minion }</span>|<span data-blueprint="value">{ type: scaler.rank.armorClass, rank: minion }</span>|<span data-blueprint="value">{ type: scaler.rank.hitPoints, rank: minion }</span>|<span data-blueprint="value">{ type: scaler.rank.trainedSavingThrows, rank: minion }</span>|<span data-blueprint="value">{ type: scaler.rank.attackDamage, rank: minion }</span>|<span data-blueprint="value">{ type: scaler.rank.experiencePoints, rank: minion }</span>|Elusive|
|Grunt|<span data-blueprint="value">{ type: scaler.rank.combatThreat, rank: grunt }</span>|<span data-blueprint="value">{ type: scaler.rank.abilityModifiers, rank: grunt }</span>|<span data-blueprint="value">{ type: scaler.rank.initiativeBonus.proficiency, rank: grunt }</span>|<span data-blueprint="value">{ type: scaler.rank.armorClass, rank: grunt }</span>|<span data-blueprint="value">{ type: scaler.rank.hitPoints, rank: grunt }</span>|<span data-blueprint="value">{ type: scaler.rank.trainedSavingThrows, rank: grunt }</span>|<span data-blueprint="value">{ type: scaler.rank.attackDamage, rank: grunt }</span>|<span data-blueprint="value">{ type: scaler.rank.experiencePoints, rank: grunt }</span>|—|
|Elite|<span data-blueprint="value">{ type: scaler.rank.combatThreat, rank: elite }</span>|<span data-blueprint="value">{ type: scaler.rank.abilityModifiers, rank: elite }</span>|<span data-blueprint="value">{ type: scaler.rank.initiativeBonus.proficiency, rank: elite }</span>|<span data-blueprint="value">{ type: scaler.rank.armorClass, rank: elite }</span>|<span data-blueprint="value">{ type: scaler.rank.hitPoints, rank: elite }</span>|<span data-blueprint="value">{ type: scaler.rank.trainedSavingThrows, rank: elite }</span>|<span data-blueprint="value">{ type: scaler.rank.attackDamage, rank: elite }</span>|<span data-blueprint="value">{ type: scaler.rank.experiencePoints, rank: elite }</span>|Paragon Power|
|Paragon|<span data-blueprint="value">{ type: scaler.rank.combatThreat, rank: paragon }</span>|<span data-blueprint="value">{ type: scaler.rank.abilityModifiers, rank: paragon }</span>|<span data-blueprint="value">{ type: scaler.rank.initiativeBonus.proficiency, rank: paragon }</span>|<span data-blueprint="value">{ type: scaler.rank.armorClass, rank: paragon }</span>|<span data-blueprint="value">{ type: scaler.rank.hitPoints, rank: paragon }</span>|<span data-blueprint="value">{ type: scaler.rank.trainedSavingThrows, rank: paragon }</span>|<span data-blueprint="value">{ type: scaler.rank.attackDamage, rank: paragon }</span>|<span data-blueprint="value">{ type: scaler.rank.experiencePoints, rank: paragon }</span></span>|Paragon Power, Paragon Defence|

\panelEnd

\regionEnd

\contentEnd

\contentBegin { "class": "page--mm-combat-ranks" }

## Grunts

Grunts are the basic combatants, fighters, and soldiers of your monstrous hordes—creatures that can go toe-to-toe with a player character. One grunt is a threat for one adventurer of equal level.

To start building a grunt, either a) choose a combat level and look at the _Grunt Templates_ table, or b) create your own grunt using the _Grunt Template_.

\exampleBegin

The GM wants to create a new grunt for their campaign—a sparking _lightmare hexblade_.

---

* To get started, the GM chooses a combat level—in this case, level 7.
* They then assign six _ability modifiers_ in order of preference—for the hexblade, the GM assigns STR −1, DEX +1, CON +1, INT +4, WIS −1, CHA +4.
* The hexblade is then given AC 13 and 65 HP.
* Next, the GM assigns two trained saving throws—in this case, the GM chooses WIS and CHA.
* The hexblade has an attack bonus of +3, an attack DC of +11, and deals 21 damage on a successful hit.

---

In battle, the _lightmare hexblade_ makes an INT-based melee attack. They add their INT modifier (+4) to their _base_ attack bonus (+3) for a _total_ attack bonus of +7.

\exampleEnd

\columnbreak

\panelBegin { "class": "panel--monster-template grunt", "title": "Grunt Template" }

* **<i class="fas fa-fw fa-crown"></i> Level (LVL)** Your combat level (i.e. character level)
* **<i class="fas fa-fw fa-shield"></i> Armor Class** 12 + LVL/4
* **<i class="fas fa-fw fa-gauge-simple-min"></i> Ability Modifier (Low)** LVL/12 − 1
* **<i class="fas fa-fw fa-gauge-simple"></i> Ability Modifier (Mid)** 1 + LVL/8
* **<i class="fas fa-fw fa-gauge-simple-max"></i> Ability Modifier (High, LVL < 8)** 3 + LVL/4
* **<i class="fas fa-fw fa-gauge-simple-max"></i> Ability Modifier (High, LVL >= 8)** 5 + (LVL−8)/8
* **<i class="fas fa-fw fa-swords"></i> Attack Bonus** PB
* **<i class="fas fa-fw fa-bullseye"></i> Attack DC** 8 + PB
* **<i class="fas fa-fw fa-fire-flame-curved"></i> Attack Damage** LVL×3
* **<i class="fas fa-fw fa-heart"></i> Hit Points** 16 + LVL×7
* **<i class="fas fa-fw fa-bolt"></i> Initiative Bonus** 0
* **<i class="fas fa-fw fa-tools"></i> Proficiency Bonus (PB)** 1 + (LVL+3)/4
* **<i class="fas fa-fw fa-shield-plus"></i> Trained Saving Throws** 2
* **<i class="fas fa-fw fa-skull"></i> Threat** 1

<div class="trait">
	<p><strong>Other Features:</strong> Choose 3-8 traits/attacks/utilities.</p>
</div>

\panelEnd

\panelBegin { "type": "aside", "title": "Using Grunts" }

* For a quick combat encounter, deploy one grunt for each player character (e.g. for five 6th-level players, deploy five 6th-level grunts).
* A grunt should be defeated within 4 successful attacking actions.
* Grunts are suitable for any combat role.

\panelEnd

\regionBegin { "class": "region--fixed-bottom region--border-top columns-1" }

\panelBegin { "class": "panel--table scaler-templates grunt", "title": "Grunt Templates" }

<table class="table table--monster-statistics" data-rank="grunt" data-level-end=25></table>

\panelEnd

\regionEnd

\contentEnd

\contentBegin { "class": "page--mm-combat-ranks" }

## Minions

Minions have few hit points and deal reduced damage. These are your lackeys, underlings, and lesser henchmen—things that should be easily overcome.

Yet minions can be a major threat when they attack the enemy in _large numbers_. Four minions are a threat for one adventurer of similar level; they are a great option when you want to pit the party against a mob.

To starting building a minion, either a) choose a combat level and look at the _Minion Templates_ table, or b) apply the _Minion Template_ below to any grunt.

### Elusive

Minions are <em>elusive</em>—they take no damage from a missed attack, even if it would normally deal damage on a miss or with a successful saving throw (e.g. a _Fireball_ spell).

\exampleBegin

The GM wants to create a minion variant of the 7th-level lightmare hexblade—a _lightmare hexing_. They start by applying the minion template to the hexblade:

---

* The hexing is given 13 HP.
* As a minion, the hexing has only one trained saving throw; the GM chooses WIS.
* The hexing deals only 16 damage on a successful hit.

\exampleEnd

\columnbreak

\panelBegin { "class": "panel--monster-template", "title": "Minion Template" }

* **<i class="fas fa-fw fa-shield"></i> Armor Class** <span data-blueprint="value">{ type: scaler.rank.armorClass, rank: minion }</span>
* **<i class="fas fa-fw fa-heart"></i> Hit Points** <span data-blueprint="value">{ type: scaler.rank.hitPoints, rank: minion }</span>
* **<i class="fas fa-fw fa-shield-plus"></i> T. Saving Throws** <span data-blueprint="value">{ type: scaler.rank.trainedSavingThrows, rank: minion }</span>
* **<i class="fas fa-fw fa-bolt"></i> Initiative** <span data-blueprint="value">{ type: scaler.rank.initiativeBonus.proficiency, rank: minion }</span>
* **<i class="fas fa-fw fa-gauge-simple"></i> Ability Modifiers** <span data-blueprint="value">{ type: scaler.rank.abilityModifiers, rank: minion }</span>
* **<i class="fas fa-fw fa-fire-flame-curved"></i> Attack Damage** <span data-blueprint="value">{ type: scaler.rank.attackDamage, rank: minion }</span>
* **<i class="fas fa-fw fa-award"></i> XP** <span data-blueprint="value">{ type: scaler.rank.experiencePoints, rank: minion }</span>
* **<i class="fas fa-fw fa-skull"></i> Threat** <span data-blueprint="value">{ type: scaler.rank.combatThreat, rank: minion }</span>

<div class="trait">
	<p><strong>Elusive:</strong> You take no damage from a missed attack (even if it would normally deal damage on a miss).</p>
</div>
<div class="trait">
	<p><strong>Other Features:</strong> Choose 1-5 traits/attacks/utilities.</p>
</div>

\panelEnd

\panelBegin { "type": "aside", "title": "Using Minions" }

* For a quick combat encounter, deploy four minions for each player character _or_ replace one grunt with four minions of equal level (e.g. for four 5th-level players, deploy 16 5th-level minions).
* A minion should be defeated by 1 successful attacking action.
* Minions are natural swarmers—use their large numbers to outflank and overwhelm the party, and make good use of the _Help_ action.
* With few hit points, melee minions are especially vulnerable to ranged attacks—use cover to keep them out of sight until they can close the gap.
* If you use large numbers of minions, make sure not to slow down the round time for your players.

\panelEnd

\regionBegin { "class": "region--fixed-bottom region--border-top columns-1" }

\panelBegin { "class": "panel--table scaler-templates minion", "title": "Minion Templates" }

<table class="table table--monster-statistics" data-rank="minion" data-level-end=25></table>

\panelEnd

\regionEnd

\contentEnd

\contentBegin { "class": "page--mm-combat-ranks" }

## Elites

Elites are formidable champions, commanders, and leaders. These powerful combatants pose a great danger with their tougher armor, increased hit points, and boosted attack damage—one elite can threaten _two_ adventurers of similar level.

Elites are a great option for mid-boss encounters where they can serve as direct underlings, agents, and emissaries of the adventure's primary threat; consider using them as your _secondary_ antagonists.

To start building an elite, either a) choose a combat level and look at the _Elite Templates_ table, or b) apply the _Elite Template_ below to any grunt.

### Paragon Power

Paragon power is a measure of _exceptional_ ability—with it, you can take multiple actions each round and fend off even the most persistent of ongoing effects. For a full exploration of _paragon power_, see p<span data-blueprint="value">{ type: page.number, selector: "h1[id='paragon-features']" }</span>.

\exampleBegin

The GM creates a 7th-level _lightmare hexmaster_ to lead their monsters by applying the elite template to a lightmare hexblade.

With increased attributes, defences, and damage, the hexmaster is a formidable foe.

\exampleEnd

\columnbreak

\panelBegin { "class": "panel--monster-template", "title": "Elite Template" }

* **<i class="fas fa-fw fa-shield"></i> Armor Class** <span data-blueprint="value">{ type: scaler.rank.armorClass, rank: elite }</span>
* **<i class="fas fa-fw fa-heart"></i> Hit Points** <span data-blueprint="value">{ type: scaler.rank.hitPoints, rank: elite }</span>
* **<i class="fas fa-fw fa-shield-plus"></i> T. Saving Throws** <span data-blueprint="value">{ type: scaler.rank.trainedSavingThrows, rank: elite }</span>
* **<i class="fas fa-fw fa-bolt"></i> Initiative** <span data-blueprint="value">{ type: scaler.rank.initiativeBonus.proficiency, rank: elite }</span>
* **<i class="fas fa-fw fa-gauge-simple"></i> Ability Modifiers** <span data-blueprint="value">{ type: scaler.rank.abilityModifiers, rank: elite }</span>
* **<i class="fas fa-fw fa-fire-flame-curved"></i> Attack Damage** <span data-blueprint="value">{ type: scaler.rank.attackDamage, rank: elite }</span>
* **<i class="fas fa-fw fa-award"></i> XP** <span data-blueprint="value">{ type: scaler.rank.experiencePoints, rank: elite }</span>
* **<i class="fas fa-fw fa-skull"></i> Threat** <span data-blueprint="value">{ type: scaler.rank.combatThreat, rank: elite }</span>

<div class="trait">
	<p><strong>Paragon Power (1/round):</strong> At the end of another creature's turn, you may either a) take an action and regain your reaction <em>or</em> b) repeat a saving throw against an ongoing effect.</p>
</div>
<div class="trait">
	<p><strong>Other Features:</strong> Choose 5-11 traits/attacks/utilities.</p>
</div>

\panelEnd

\panelBegin { "type": "aside", "title": "Using Elites" }

* For a quick combat encounter, deploy one elite for every two player characters _or_ replace two grunts with one elite of equal level (e.g. for six 7th-level players, deploy three 7th-level elites).
* An elite should be defeated within 8 successful attacking actions.
* Elites are tough and durable; they make great leaders, tankbusters, and frontline fighters.
* With paragon power, an elite can act _twice_ each round—use this to be cinematic.
* Significant NPCs and named/notable villains are great candidates for the _elite_ rank.

\panelEnd

\regionBegin { "class": "region--fixed-bottom region--border-top columns-1" }

\panelBegin { "class": "panel--table scaler-templates elite", "title": "Elite Templates" }

<table class="table table--monster-statistics" data-rank="elite" data-level-end=25></table>

\panelEnd

\regionEnd

\contentEnd

\contentBegin { "class": "page--mm-combat-ranks" }

## Paragons

Paragons are a force to be reckoned with; they hit hard, have high defenses, act multiple times each round, and can shrug off effects that would bring any lesser creature to their knees.

These are your big bosses, brutes, solos, and showstoppers—the _big-bad_ usually waiting at the climax of an adventure: a mighty red dragon, a dominating elder brain, a bone-chilling skeleton queen, etc.

To start building a paragon, either a) choose a combat level and look at the _Paragon Templates_ table, or b) apply the _Paragon Template_ below to any grunt.

### Variable Threat

Paragons can threaten a _variable_ number of enemies (typically 3-6). This number is usually displayed as part of the combat rank (Paragon T3, Paragon T4, etc.).

When you create a paragon, choose a _threat rating_ (i.e. how many player characters is it designed to fight?). For each point of threat, your paragon gains additional hit points, XP, and paragon features.

### Paragon Defence

Paragons gain access to <em>paragon defence</em>—a powerful feature that enables them to turn failure into success. For a full exploration of _paragon defence_, see p<span data-blueprint="value">{ type: page.number, selector: "h1[id='paragon-features']" }</span>.

\columnbreak

\panelBegin { "class": "panel--monster-template", "title": "Paragon Template" }

* **<i class="fas fa-fw fa-shield"></i> Armor Class** <span data-blueprint="value">{ type: scaler.rank.armorClass, rank: paragon }</span>
* **<i class="fas fa-fw fa-heart"></i> Hit Points** <span data-blueprint="value">{ type: scaler.rank.hitPoints, rank: paragon }</span>
* **<i class="fas fa-fw fa-shield-plus"></i> T. Saving Throws** <span data-blueprint="value">{ type: scaler.rank.trainedSavingThrows, rank: paragon }</span>
* **<i class="fas fa-fw fa-bolt"></i> Initiative** <span data-blueprint="value">{ type: scaler.rank.initiativeBonus.proficiency, rank: paragon }</span>
* **<i class="fas fa-fw fa-gauge-simple"></i> Ability Modifiers** <span data-blueprint="value">{ type: scaler.rank.abilityModifiers, rank: paragon }</span>
* **<i class="fas fa-fw fa-fire-flame-curved"></i> Attack Damage** <span data-blueprint="value">{ type: scaler.rank.attackDamage, rank: paragon }</span>
* **<i class="fas fa-fw fa-award"></i> XP** <span data-blueprint="value">{ type: scaler.rank.experiencePoints, rank: paragon }</span>
* **<i class="fas fa-fw fa-skull"></i> Threat** <span data-blueprint="value">{ type: scaler.rank.combatThreat, rank: paragon }</span>

<div class="trait">
	<p><strong>Paragon Power (threat-1 per round):</strong> At the end of another creature's turn, you may either a) take an action and regain your reaction <em>or</em> b) repeat a saving throw against an ongoing effect.</p>
</div>
<div class="trait">
	<p><strong>Paragon Defence (threat/2 per lr):</strong> When you would fail a saving throw, you may spend (2 x combat level) hit points to succeed.</p>
</div>
<div class="trait">
	<p><strong>Other Features:</strong> Choose 7-14 traits/attacks/utilities.</p>
</div>

\panelEnd

\panelBegin { "type": "aside", "title": "Using Paragons" }

* For a quick combat encounter, deploy one paragon with a threat equal to the number of player characters (e.g. for four 9th-level players, deploy one 9th-level paragon with a _threat_ of 4).
* A paragon should be defeated within (4×Threat) successful attacking actions.
* Paragons make excellent brutes and solo monsters.
* With paragon defence, paragons can comfortably shrug off dangerous spells and lingering effects.

\panelEnd

\regionBegin { "class": "region--fixed-bottom region--border-top columns-1" }

\panelBegin { "class": "panel--table scaler-templates paragon", "title": "Paragon T4 Templates" }

<table class="table table--monster-statistics" data-rank="paragon" data-threat=4 data-level-end=25></table>

\panelEnd

\regionEnd

\contentEnd