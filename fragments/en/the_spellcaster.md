\contentBegin { "class": "page--mm-the-spellcaster", "header": "spell-book", "bg": "pages/text/bg-glyph.png" }

# The Spellcaster

Magical power permeates the mortal world—it is in the air you breath, the food you eat, the water you drink. Watch out for those who can cast magic—the rules of reality are theirs to command.

This chapter introduces _spellcasters_ and how to use them in your combat encounters.

## Spellcasters

A spellcaster is a special type of combatant that can cast _magical_ spells—a warlock sacrifices blood to gather eldritch power, a wizard activates a well-researched ward, a sorcerer unleashes their inner power, etc.

There are eight basic categories of spellcaster, each with a particular theme and casting style: 

\panelBegin { "type": "table", "title": "Spellcaster Categories" }

|Type|Description|
|---|---|
|Borrower|You are temporarily borrowing power.|
|Innate|You are power incarnate.|
|Oathsworn|Your power comes from an oath.|
|Primal|You draw power from the land.|
|Puppet|You are possessed by a power.|
|Researcher|You have learned how to channel power.|
|Sacrificial|You made an offering for power.|
|Vassal|You are given power by a benefactor. |

\panelEnd

\panelBegin { "type": "aside", "title": "Magical Effects vs Magical Spells" }

Spells create magical effects, but not all magical effects are spells. In this supplement, a spell is defined as any magical action that has _spellcasting components_ and can be interrupted with _Counterspell_.

\panelEnd

\columnbreak

<div data-blueprint="scaler">
---
name: Storm Cleric
type: monster
portrait: dwarf-helmet.svg
size:
  primary: medium
category:
  primary: humanoid
  secondary: dwarf
combat:
  level: 10
  rank: grunt
  role: striker
  subrole: havok
abilityModifiers:
  ranking:
    - wis
    - str
    - con
    - cha
    - int
    - dex
languages:
  - common
  - dwarvish
damageResistances:
  - lightning
  - poison
skills:
  religion: trained
movement:
  speeds:
    walk:
      baseSpeedPercentage: 100
attack:
  distance:
    range: 30
awareness:
  senses:
    darkvision: 60
items:
  - warhammer, holy symbol
features:
  -
    name: Storm Bolt
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: rsak
      attack:
        defence: ac
        attribute: wis
      area: range 30 ft.
      targets: one target
      onHit: "[damage, d12|keepStatic] lightning damage."
      spell:
        components:
          - v
        school: evocation
  -
    name: Warhammer
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
      onHit: "[damage, d8|keepStatic] bludgeoning damage."
  -
    name: Call Lightning
    rarity: uncommon
    activation:
      type: action
      quantity: 1
    activity:
      type: rsav
      attack:
        defence: dex
        attribute: wis
      area: a 10 ft. radius circle centered on a point within 30 ft. of you
      targets: all targets
      onHit: "[damage, d12|keepStatic] lightning damage."
      onMiss: half damage.
      spell:
        components:
          - v
          - s
        school: evocation
    uses:
      type: charges
      charges:
        maximum: 1
        period: sr
  -
    name: Thunderblast
    rarity: uncommon
    activation:
      type: action
      quantity: 1
    activity:
      type: rsav
      attack:
        defence: str
        attribute: wis
      area: a 15 ft. radius circle centered on a point within 30 ft. of you
      targets: all targets
      onHit: "the target is pushed 20 ft away from the center."
      spell:
        components:
          - v
          - s
        school: evocation
    uses:
      type: cooldown
      cooldown:
        target: 3
</div>

\exampleBegin

The storm cleric raised her hammer high and pulled down a bolt of lighting from the sky.

\exampleEnd

\contentEnd

\contentBegin { "class": "page--mm-the-spellcaster" }

### The Borrower { "index": "A" }

Borrowers have _temporary_ possession of magical power, typically through an object, blessing, or curse. These spellcaster rely on a magical focus—destroying this focus can remove the borrower's magical abilities.

### The Innate { "index": "B" }

Innates are power incarnate—magic is in their very blood and they know how to use it. These spellcasters rely on their own willpower to carefully shape and control their magical power—when an innate loses control, they can be a danger to themselves _and_ those around them.

### The Oathsworn { "index": "C" }

Oathsworn draw their power from a sacred oath made with the universe. These spellcasters rely on conviction and strict adherence to their oath—words have power, and few take this as seriously as the oathsworn.

### The Primal { "index": "D" }

Primals draw their power from the natural world and take strength in careful measure. These spellcasters rely on the environment and the elements—to fight a primal in their native land is to invite disaster.

\columnbreak

### The Puppet { "index": "E" }

Puppets are possessed by a greater power and made to act by its command. These spellcasters rely on a physical, mental, or spiritual connection with their possessor—breaking this may free the puppet.

### The Researcher { "index": "F" }

Researchers learn how to control magical power through careful practice, dedication, and arduous study. These spellcasters rely on their knowledge, training, and expertise—researchers learn how to manipulate the very fabric of reality itself.

### The Sacrificial { "index": "G" }

Sacrificials are rewarded with power when they make an offering to a patron. These spellcasters rely on promises, pacts, and sacrifices to fuel their power—but woe betide the sacrificial who reneges on a pact made with their patron.

### The Vassal { "index": "H" }

Vassals are gifted power in exchange for loyal service to a benefactor. These spellcasters rely on zeal, faith, obedience, and worship—the vassal sets aside their personal interests to serve a greater purpose.

\regionBegin { "class": "region--fixed-bottom region--border-top" }

\panelBegin { "class": "panel--table", "title": "Magic Domains" }

|Theme|Description|Examples|
|---|---|---|
|Air|Control over air, wind, and thunder.|Fly, Feather Fall, Thunderwave.|
|Beasts|Control and communicate with animals.|Conjure Animals, Hold Monster, Insect Plague.|
|Body|Transmute flesh, change physical shape and appearance.|Enlarge/Reduce, Polymorph, Flesh to Stone.|
|Death|Sever souls from bodies, talk to the dead, animate dead.|Chill Touch, Power Word: Kill, Speak with Dead.|
|Decay|Erode, poison, and corrupt.|Acid Splash, Cloudkill, Poison Spray.|
|Destruction|Destroy and obliterate.|Circle of Death, Disintegrate, Eldritch Blast.|
|Earth|Control over earth, rock, and gravity.|Earthquake, Move Earth, Stone Shape.|
|Fear|Create fear and nightmares.|Confusion, Fear, Dream.|
|Fire|Control over fire and heat.|Burning Hands, Produce Flame, Fireball.|
|Knowledge|Divination, detect alignment, learn secrets.|Guidance, True Strike, Zone of Truth.|
|Life|Tie souls to bodies and objects, modify spiritwebs.|Animate Objects, Raise Dead, Resurrection.|
|Light|Create light and illusions.|Dancing Lights, Disguise Self, Faerie Fire.|
|Lightning|Create and channel lightning, electricity.|Call Lightning, Chain Lightning, Lightning Bolt.|
|Metal|Detect, shape, create, and move metal.|Cloud of Daggers, Fabricate, Heat Metal.|
|Mind|Telepathy, domination, read thoughts, and sense truth.|Charm Person, Sleep, Telepathic Bond.|
|Peace|Dampen emotions, cause calm.|Beacon of Hope, Calm Emotions, Sanctuary.|
|Plants|Control and communicate with plants.|Plant Growth, Speak with Plants, Tree Stride.|
|Protection|Shield and defend.|Blade Ward, Death Ward, Globe of Invulnerability.|
|Resolve|Reinforce willpower and create geas.|Aid, Geas, Heroism.|
|Restoration|Heal and mend.|Mending, Cure Wounds, Heal.|
|Shadow|Create darkness and manipulate shadows.|Darkness, Black Tentacles, Shadow Blade.|
|Sight|Truesight, perception, sight-beyond-sight, scrying.|Darkvision, Scrying, True Seeing.|
|Sound|Create sounds, silence, communication, change voice.|Sending, Shatter, Silence.|
|Space|Teleportation, size, and pocket dimensions.|Misty Step, Banishment, Instant Summons.|
|Strength|Control physical power, muscle mass, and endurance.|Enhance Ability, Enlarge/Reduce, Polymorph.|
|Time|Alter the flow of time.|Haste, Slow, Time Stop.|
|War|Incite emotions, and cause rage or passion.|Heroism, Storm of Vengeance, Hellish Rebuke.|
|Water|Control over water and ice.|Ray of Frost, Ice Storm, Wall of Ice.|

\panelEnd

\regionEnd

\contentEnd

\contentBegin { "class": "page--mm-the-spellcaster" }

## Making a Spellcaster

You can turn any scaling monster into a spellcaster with these two basic steps:

### Choose a Magic Domain { "index": 1 }

A _magical domain_ acts a general theme for your spellcaster and spellcasting abilities. Choose one from the _Magical Domains_ table or create your own.

### Create a Spell { "index": 2 }

Create a common, uncommon, or rare feature for your spellcaster as normal (see p<span data-blueprint="value">{ type: page.number, selector: "h1[id='making-features']" }</span>). When you have a suitable attack or utility feature, you can convert it into a _spell_ with these simple guidelines.

#### Choose Spellcasting Components

Spellcasting components are physical requirements you must meet in order to cast your spell—if you can't provide one or more of these components, you are unable to cast the spell.

* **Verbal (V):** I need to be able to speak.
* **Somatic (S):** I need to be able to use one free hand.
* **Material (M):** I need to be in reach of a particular resource or spellcasting focus.

Choose a number of components according to the rarity of your feature: common (one), uncommon (two), or rare (three). If your spell uses a material component, you can (optionally) define what that material is.

\columnbreak

#### Ritual

If you want your spellcaster to be able to perform this spell regularly outside of combat, turn it into a _ritual_.

To perform a ritual, you must spend 10 minutes more than you usually would to cast the spell—but you don't have to expend any action resources in the process (recharges, cooldowns, charges, etc).

#### Choose a Spell School

Spells can be categorized into one of eight schools of magic: abjuration, conjuration, divination, enchantment, evocation, illusion, necromancy, and transmutation.

Use the _Spell Schools_ table below to help you choose the school that best fits your particular action.

#### Set the Spell Level

Every spell has a _spell level_ that helps describe its overall power—1st level, 3rd level, etc. This can be useful to know in certain circumstances (i.e. when someone tries to interrupt the spell with _Counterspell_).

Your spell level is determined by your combat rank, your combat level, and your action rarity—use the _Spell Levels_ table below to find the appropriate level.

**Common Features:** If your spell is of _common_ rarity, its level is always 0 (i.e. a cantrip).

\panelBegin { "type": "aside", "title": "No Spell Slots" }

By design, scalers don't use spell slots or other arcane currencies to cast magic. If you want to _emulate_ that system more closely, use a selection of _uncommon_ and _rare_ actions with a limited number of charges.

\panelEnd

\regionBegin { "class": "region--fixed-bottom region--border-top" }

\panelBegin { "class": "panel--table", "title": "Spell Schools" }

|School|Description|
|---|---|
|Abjuration|Create magical barriers, negate harmful effects, harm trespassers, or banish creatures to other planes.|
|Conjuration|Transport objects and creatures from one location to another.|
|Divination|Reveal information.|
|Enchantment|Affect the minds of others to influence or control their behavior|
|Evocation|Manipulate magical energy to produce a desired effect.|
|Illusion|Deceive the senses or minds of others.|
|Necromancy|Manipulate the energies of life and death.|
|Transmutation|Change the properties of a creature, object, or environment.|

\panelEnd

\panelBegin { "type": "table panel--spell-levels", "title": "Spell Levels" }

<table>
	<thead>
		<tr>
			<th rowspan=2>Combat Rank</th>
			<th colspan=27><span class="spacer">Combat Level</span></th>
		</tr>
		<tr>
			<th>0</th>
			<th>1</th>
			<th>2</th>
			<th>3</th>
			<th>4</th>
			<th>5</th>
			<th>6</th>
			<th>7</th>
			<th>8</th>
			<th>9</th>
			<th>10</th>
			<th>11</th>
			<th>12</th>
			<th>13</th>
			<th>14</th>
			<th>15</th>
			<th>16</th>
			<th>17</th>
			<th>18</th>
			<th>19</th>
			<th>20</th>
			<th>21</th>
			<th>22</th>
			<th>23</th>
			<th>24</th>
			<th>25</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th colspan=27 class="header"><span>Uncommon Feature</span></th>
		</tr>
		<tr>
			<td>Minion</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>3</td>
		</tr>
		<tr>
			<td>Grunt</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>3</td>
			<td>3</td>
			<td>3</td>
			<td>3</td>
			<td>3</td>
			<td>3</td>
			<td>3</td>
			<td>3</td>
			<td>4</td>
		</tr>
		<tr>
			<td>Elite</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>3</td>
			<td>3</td>
			<td>3</td>
			<td>3</td>
			<td>4</td>
			<td>4</td>
			<td>4</td>
			<td>4</td>
			<td>5</td>
			<td>5</td>
			<td>5</td>
			<td>5</td>
			<td>6</td>
			<td>6</td>
			<td>6</td>
			<td>6</td>
			<td>7</td>
		</tr>
		<tr>
			<td>Paragon</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>3</td>
			<td>3</td>
			<td>3</td>
			<td>3</td>
			<td>4</td>
			<td>4</td>
			<td>4</td>
			<td>4</td>
			<td>5</td>
			<td>5</td>
			<td>5</td>
			<td>5</td>
			<td>6</td>
			<td>6</td>
			<td>6</td>
			<td>6</td>
			<td>7</td>
		</tr>
		<tr>
			<th colspan=27 class="header"><span>Rare Feature</span></th>
		</tr>
		<tr>
			<td>Minion</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>3</td>
			<td>3</td>
			<td>3</td>
			<td>3</td>
			<td>3</td>
			<td>3</td>
			<td>4</td>
			<td>4</td>
			<td>4</td>
			<td>4</td>
			<td>4</td>
			<td>4</td>
			<td>5</td>
		</tr>
		<tr>
			<td>Grunt</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>2</td>
			<td>3</td>
			<td>3</td>
			<td>3</td>
			<td>3</td>
			<td>4</td>
			<td>4</td>
			<td>4</td>
			<td>4</td>
			<td>5</td>
			<td>5</td>
			<td>5</td>
			<td>5</td>
			<td>6</td>
			<td>6</td>
			<td>6</td>
			<td>6</td>
			<td>7</td>
		</tr>
		<tr>
			<td>Elite</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>2</td>
			<td>2</td>
			<td>3</td>
			<td>3</td>
			<td>4</td>
			<td>4</td>
			<td>5</td>
			<td>5</td>
			<td>6</td>
			<td>6</td>
			<td>7</td>
			<td>7</td>
			<td>8</td>
			<td>8</td>
			<td>9</td>
			<td>9</td>
			<td>9</td>
			<td>9</td>
			<td>9</td>
			<td>9</td>
			<td>9</td>
			<td>9</td>
			<td>9</td>
		</tr>
		<tr>
			<td>Paragon</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>2</td>
			<td>2</td>
			<td>3</td>
			<td>3</td>
			<td>4</td>
			<td>4</td>
			<td>5</td>
			<td>5</td>
			<td>6</td>
			<td>6</td>
			<td>7</td>
			<td>7</td>
			<td>8</td>
			<td>8</td>
			<td>9</td>
			<td>9</td>
			<td>9</td>
			<td>9</td>
			<td>9</td>
			<td>9</td>
			<td>9</td>
			<td>9</td>
			<td>9</td>
		</tr>
	</tbody>
</table>

\panelEnd

\regionEnd

\contentEnd