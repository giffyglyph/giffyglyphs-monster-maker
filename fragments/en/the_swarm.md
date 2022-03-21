\contentBegin { "class": "page--mm-the-swarm", "header": "gold-scarab", "bg": "pages/text/bg-glyph.png" }

# The Swarm

It's dangerous to stand alone on the battlefield where a lone target becomes an _easy_ target. For the best chance of survival, stick with your friends and surround the enemy as one swarm—strength comes in numbers.

This chapter introduces _swarms_ and how to use them in your combat encounters.

\exampleBegin

Krazak tried to step back but the rats were all around him, swarming underfoot and making it _very_ hard to move. They looked at him with hungry eyes.

The dwarf gripped his axe and grinned, licking his lips. "Get yer stewpot ready, Chansi. We're gonna be eating rat meat for a _week_ after this fight."

\exampleEnd

## Swarms

A _swarm_ is a special type of monster that's comprised of many _smaller_ entities acting with one mind and as a single target—a swarm of rats, a mob of civilians, a horde of kobolds, an army of undead, etc.

There are six basic categories of swarm, each with a particular theme and combat style: swarms, mobs, hordes, squads, armies, and machines.

\panelBegin { "type": "table", "title": "Swarm Categories" }

|Type|Description|
|---|---|
|Pack|A group of beasts or mindless creatures.|
|Machine|A coordinated group of hazards or constructs.|
|Mob|A small, badly-organized group of creatures.|
|Horde|A large, badly-organized group of creatures.|
|Squad|A small, well-organized group of creatures.|
|Army|A large, well-organized group of creatures.|

\panelEnd

\columnbreak

<div data-blueprint="scaler">
---
name: Swarm of Rats
type: monster
portrait: rat.svg
size:
  primary: tiny
  swarm: medium
category:
  primary: beast
combat:
  level: 6
  rank: grunt
  role: lurker
  subrole: exploiter
abilityModifiers:
  ranking:
    - dex
    - str
    - con
    - wis
    - cha
    - int
  overrides: int=-5
movement:
  speeds:
    walk:
      baseSpeedPercentage: 100
    climb:
      baseSpeedPercentage: 50
features:
  -
    name: Swarm
    rarity: common
    description: |
      <p>You can occupy another creature's space and vice versa. You can move through any opening large enough for a tiny creature. Your space is considered difficult terrain. You have advantage on attack rolls against creatures in your space, and creatures within your space have disadvantage on attack rolls.</p>
      <p>You can't regain hit points or gain temporary hit points. When you would be subject to any of the following conditions, you instead lose [level] hit points: charmed,frightened, grappled, paralyzed, petrified, prone, restrained, or stunned.</p>
  -
    name: Thinning Numbers
    rarity: common
    description: When you are bloodied, your space is no longer considered difficult terrain.
  -
    name: Hold Still
    rarity: uncommon
    activation:
      type: free
      quantity: 1
    description: When you hit with an attack and the target moved a net distance of 10 ft. or less during it's last turn, you deal [level] additional damage.
    uses:
      type: charges
      charges:
        maximum: 1
        period: round
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
        attribute: dex
      area: reach 5 ft.
      targets: one creature
      onHit: "[damage, d6|keepStatic] piercing damage."
</div>

\contentEnd

\contentBegin { "class": "page--mm-the-swarm" }

### The Pack { "index": "A" }

When a group of beasts or mindless creatures band together in one place, they can form a feral _pack_.

A pack is a primal, gestalt intelligence more perceptive—and more <em>dangerous</em>—than the the sum of its parts. With a wild cunning, the pack can hunt, surround, trap, and overwhelm far bigger targets—in large enough numbers, the ant can overwhelm the tiger.

\exampleBegin

* The people of Timbervale find their logging camps overwhelmed by a pack of beavers.
* The sewers of Upper Grundelroot have been infested by a pack of oozes.
* A pack of wolves prowls Snowpine Forest and picks at unwary, vulnerable adventurers.
* A pack of ravenous, mindless zombies leaves the dead village to feast on the nearby town.

\exampleEnd

### The Machine { "index": "B" }

When a group of constructs are linked together in one place, they can form a well-oiled _machine_.

A machine is an autonomous, goal-driven, constructed entity—when given a task, the machine does everything it can to complete that task as efficiently and as unimaginatively as possible.

\exampleBegin

* A machine of interlinked modrons stands watch outside a secret planar gateway.
* A swarm of tiny constructs form one unified machine at the command of their artificer.
* A mage protects her arcane tower with roaming machines of animated armor.
* A machine of golems digs tirelessly through the mountain, following their long-dead creator's order.

\exampleEnd

### The Mob { "index": "C" }

When a group of creatures gather together in one place, they can form an unruly _mob_.

A mob is a chaotic, emotional throng with a strong desire for _change_ but little-or-no direct leadership—the mob may agree on _what_ needs to change but not necessarily _why_ or _how_. Yet from that mayhem comes <em>action</em>—a mob may change the status quo in ways the individual cannot.

\exampleBegin

* A mob of scared civilians lashes out at an adventuring party wearing suspicious armor. 
* A mob of bandits attacks the village and steals a sacred amulet from the church.
* A mob of trolls sets up a toll booth on a vital bridge and charges extortionate fees.
* A mob of zealots prowl the town and attack anyone who dares to blaspheme against their deity. 

\exampleEnd

\columnbreak

### The Horde { "index": "D" }

When several mobs are gathered under one banner, they can form an innumerable _horde_.

A horde is a chaotic melting pot of creatures and cultures—a writhing mass held together typically by one _strong_ leader who rules with strength, fear, respect, or bribery (wealth, glory, retribution, etc.). Under the right leader, a horde can be a _devastating_ enemy.

\exampleBegin

* A powerful necromancer raises a horde of undead skeletons to serve a nefarious purpose.
* Kaladraxis protects his mountain of treasure with a horde of kobolds.
* A horde of barbarians, united under a wise leader, travels south to escape the Winter King.
* A horde of chaotic warriors lays seige to Bastion, the Walled City of the Northern Wild.

\exampleEnd

### The Squad { "index": "E" }

When a group of creatures work together in one place, they can form a trained _squad_.

A squad is an organized entity with a strong sense of _order_ and _unity_. Members are typically trained to obey a shared rulebook and code of conduct—everyone knows their place and purpose in a squad. 

\exampleBegin

* A squad of trained guards tries to arrest a band of suspicious adventurers.
* A squad of devoted paladins leaves the camp at sunrise to fulfill a divine oath.
* A squad of high elf spellswords use their combined grace to surround and outmaneuver enemies.
* A squad of goblin guncrackers, held in line by a commanding hobgoblin, attack as one unit.

\exampleEnd

### The Army { "index": "F" }

When several squads are assembled under an official commander, they can form a professional _army_.

An army is a strict, regimented organization with a well-understood chain of command—orders flow from top to bottom, and those orders must be enacted without question. Alert commanders know that this chain of command is _crucial_ to their army's success—one broken link and the entire enterprise can fall apart.

\exampleBegin

* An orc emperor assembles a mighty army to protect his #vast realm.
* A vampire army attacks the Spire of Toralath to destroy the White Star.
* The Matron Mothers of Elgin Orsul call forth their drow army to attack a vulnerable dwarf city.
* A kobold army overthrows their draconic overlord and takes over the mountain.

\exampleEnd

\contentEnd

\contentBegin { "class": "page--mm-the-swarm" }

## Making a Swarm

You can turn any scaling monster into a swarm with these three basic steps:

### Define the Swarm Size { "index": 1 }

First, define the size of the individual _thing_ that makes up the body of your swarm—the tiny bat, the medium orc, the large giant, etc.

Then, define the size of your swarm—medium, huge, gargantuan, etc. You must choose a _swarm_ size larger than than the _individual_ size.

### Gain Swarm Traits { "index": 2 }

Next, apply the following trait to your swarm:

<div data-blueprint="action">
---
name: Swarm
subtitle: Any level, rank, or role
actionType: Trait
body: |
  <p>You can occupy another creature's space and vice versa. You can move through any opening large enough for a [individual size] creature. You can't regain hit points or gain temporary hit points.</p>
  <p>Your space is considered difficult terrain. You have advantage on attack rolls against creatures in your space, and creatures within your space have disadvantage on attack rolls.</p>
  <p>When you would be subject to any of the following conditions, you instead lose hit points equal to your combat level: charmed, frightened, grappled, paralyzed, petrified, prone, restrained, or stunned.</p>
</div>

### Choose a Bloodied Event { "index": 3 }

When a swarm is bloodied (see p<span data-blueprint="value">{ type: page.number, selector: "h1[id='the-tides-of-battle']" }</span>), something happens that reflects the diminishing strength, quantity, or morale of the swarm's individual creatures. Choose one of the following events, or create your own:

\panelBegin { "type": "table", "class": "panel--bloodied-events", "title": "Bloodied Events" }

|Name|While you are bloodied...|
|---|---|
|Easily Spooked|You may be frightened or charmed as normal.|
|Easier Target|Reduce your AC by 2.|
|Fading Strength|Reduce any damage you deal by 50%.|
|Lose Momentum|Reduce your speed by 50%.|
|Thin Numbers|Your space is no longer considered difficult terrain.|

\panelEnd

\exampleBegin

Krazak hacked down into the writhing swarm biting at his feet, and there was a chorus of pained squeals as the axe cut clean through several rats.

The dwarf could tell that the swarm was bloodied—he was now able to move freely through their rapidly-thinning numbers...

\exampleEnd

\columnbreak

## Spliting a Swarm

A swarm can spend an action to split itself into two _separate_ swarms.

<div data-blueprint="action">
---
name: Split
subtitle: Common Action
body: |
  <p>You split yourself into two separate swarms. Each new swarm has 50% of your hit points (rounded down), deals 50% of your damage (rounded down), and is one size smaller than you.</p>
  <p>You can't split if your new <em>swarm</em> size would be equal to or smaller than your <em>individual</em> size.</p>
</div>

\exampleBegin

The medium swarm of tiny rats currently has 30 ft. movement, 44 hit points, and deals 21 base damage. On its turn, the swarm of rats moves 10 ft. and then uses it action to split into two separate swarms.

Each new swarm is _small_, has 22 hit points, and deals 10 base damage. The swarms then finish their turn by each moving their remaining 20 ft.

\exampleEnd

## Merging Swarms

A swarm can spend an action to merge itself into another adjacent swarm of the same type.

<div data-blueprint="action">
---
name: Merge
subtitle: Common Action
body: |
  <p>You merge yourself into another adjacent or overlapping swarm of the same type and size. Add your current hit points to the target swarm.</p>
  <p>If your size is equal to or larger than the target swarm, increase the size of the target swarm by one and the damage it deals by 100%.</p>
</div>

\exampleBegin

One small swarm of rats (4 hp / 8 dmg) moves adjacent to another swarm of rats (10 hp / 8 dmg) which hasn't yet acted, and spends its action to merge.

The newly unified swarm is one size larger (medium), has 14 hit points, and deals 16 base damage. The swarm then uses its turn to scurry towards Krazak...

\exampleEnd

\panelBegin { "type": "aside", "title": "The Swarmed Condition" }

This supplement also introduces a _Swarmed_ condition (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='expanded-conditions']" }</span>) which you can use in your encounters.

Apply this condition to any creature that is overlapped by a swarm, and remove it when the situation demands (i.e. the creature moves away).

\panelEnd

\contentEnd