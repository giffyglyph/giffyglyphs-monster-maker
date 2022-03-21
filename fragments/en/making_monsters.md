\contentBegin { "class": "page--mm-making-monsters", "header": "beholder-small", "bg": "pages/text/bg-glyph.png" }

# Making Monsters

Dangerous encounters need devious monsters-but how do you make a monster and how do you balance it against player characters?

This chapter introduces _scalers_ to help you build fun, balanced, combat-ready monsters with ease.

## Scalers

This supplement makes extensive use of _scalers_, a special type of monster profile that has **level-scaling**, **rank-scaling**, and **role-scaling** attributes: hit points, armor class, damage, ability modifiers, etc.

With standardized monster math and threat ratings, scalers can help to _drastically_ cut down the time you need to build monsters and design encounters:

* **Quick to Build:** With just three key dials (level, rank, role), you can get combat-ready stats in seconds.
* **Predictable Power:** Forget challenge ratings—use _combat levels_ to build a monster just like a PC.
* **Ranks and Roles:** Customize your scalers with 4 _combat ranks_ (minions, grunts, elites, and paragons) and 6 _combat roles_ (controllers, defenders, lurkers, scouts, strikers, and supporters).
* **Decoupled Combat Stats:** You don't need to micromanage equipment—use whatever's flavorful.
* **Combat-First Profile:** Scaler profiles are laid out _for combat_ with quick-reference icons, colors, and text.
* **Big Bosses:** With a fully-featured paragon power system, your paragons can be effective solo bosses.
* **Powers over Spell Slots:** No spell slots. Ever.
* **Improvisation-Friendly:** Scalers tell you everything you need to improvise new actions on-the-go.

For more information about _scalers_ and their particulars, see the FAQs (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='faqs']" }</span>).

\columnbreak

<div data-blueprint="scaler">
---
name: Kobold Pyroblaster
type: monster
portrait: dinosaur-rex.svg
size:
  primary: small
category:
  primary: humanoid
  secondary: kobold
combat:
  level: 4
  rank: grunt
  role: striker
abilityModifiers:
  ranking:
    - int
    - dex
    - cha
    - wis
    - con
    - str
savingThrows:
  ranking:
    - wis
    - int
    - dex
    - cha
    - con
    - str
awareness:
  senses:
    darkvision: 60
damageResistances:
  - fire
languages:
  - draconic
  - common
movement:
  speeds:
    walk:
      baseSpeedPercentage: 100
attack:
  distance:
    reach: 5
    range: 30
items:
  - spellbook
features:
  -
    name: Pack Tactics
    rarity: common
    description: You have advantage when attacking a creature adjacent to any ally that isn't incapacitated.
  -
    name: Firebolt
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: rwak
      attack:
        defence: ac
        attribute: int
      spell:
        components:
          - s
        school: evocation
      area: range 30 ft.
      targets: one target
      onHit: "[damage, d6|keepStatic] fire damage."
  -
    name: Immolate
    rarity: uncommon
    activation:
      type: action
      quantity: 1
    activity:
      type: rwak
      attack:
        defence: ac
        attribute: int
      spell:
        components:
          - v
          - s
        school: evocation
      area: range [attackRange] ft.
      targets: one target
      onHit: "[round(damage * 1.25), d6|keepStatic] fire damage (ongoing, DC [attackDcInt] CON)."
    uses:
      isOngoing: true
      type: cooldown
      cooldown:
        target: 3
  -
    name: Fireblast
    rarity: uncommon
    activation:
      type: action
      quantity: 1
    activity:
      type: msav
      attack:
        defence: dex
        attribute: int
      spell:
        components:
          - v
          - s
        school: evocation
      area: a 30 ft. cone extending from yourself
      targets: all targets
      onHit: "[round(damage * 1.25),d6|keepStatic] fire damage."
    uses:
      type: charges
      charges:
        maximum: 1
        period: sr
</div>

\panelBegin { "type": "aside", "title": "Scalers & Statics" }

All of the modules and mechanics presented in this supplement are fully compatible with any _static_ monster profile (i.e. those found in other 5th Edition materials).

\panelEnd

\contentEnd

\contentBegin { "class": "page--mm-making-monsters" }

### Scaler Combat Profiles

Listed below are some of the key differences between a scaler profile and a conventional 5th Edition stat block.

#### Level, Rank, and Role { "index": 1 }

At the forefront of every scaler is a combat level, combat rank, and combat role—use these descriptors to quickly judge how to use a scaler in battle.

#### Ability Modifiers { "index": 2 }

Attack rolls and ability checks depend on ability modifiers—find them at the very top of the stat block.

#### Defences { "index": 3 }

Armor class and saving throws are grouped together into one quick-reference _defensive_ line.

#### Health { "index": 4 }

Health attributes (HP, vulnerabilities, immunities, etc.) are grouped together into one quick-reference _health_ line. If your scaler can be _bloodied_ or _enraged_ (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='the-tides-of-battle']" }</span>), or has a _damage threshold_, those values are also listed here.

#### Combat Stats { "index": 5 }

Three basic attack stats serve as a central reference point when using attacks and actions:

* **ATK:** Add this to an ability modifier when you attack a target's AC (d20 + ability modifier + ATK).
* **DC:** Add this to an ability modifier when you force a target to make a saving throw (ability modifier + DC).
* **DMG:** This is the average amount of damage that can be caused with a single, common action (don't add ability modifiers to this value). If an action would make several _separate_ attacks, divide this damage across each attack.
* **Reach/Range:** These are basic attack ranges.

#### Initiative { "index": 6 }

If your scaler has an initiative bonus, find it listed next to your _speeds_. This bonus (if displayed) already includes your DEX ability modifier.

#### Items { "index": 7 }

If your scaler is carrying any notable items (potions, scrolls, spellbooks), equipment (weapons, armor, trinkets), or treasure (coins, gems, art), it is listed here.

#### Trigger { "index": 8 }

Some scalers lie _dormant_ until they are activated by a triggering action or event.

#### Special Features { "index": 9 }

Special features are grouped together by their activation cost: traits (passive features), free actions, bonus actions, actions, and reactions.

Features come in one of three _rarities_ of increasing power—common (green), uncommon (yellow), and rare (red)—and may be highlighted with _melee_ or _ranged_ icons for easy reference. For more information on how to build special features, see _Making Features_ (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='making-features']" }</span>).

\columnbreak

#### Countermeasures { "index": 10 }

Some scalers can be controlled or subdued in non-traditional ways—disabling, baiting, persuading, etc. This section describes any unique countermeasures.

<div data-blueprint="scaler">
---
name: Aberrant Monolith
type: hazard
portrait: fleshy-mass.svg
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
    - int
    - con
    - str
    - wis
    - cha
    - dex
  overrides: dex=-5,cha=-5
items:
  - bloodstone
trigger: <p>You lie <em>dormant</em> until a willing creature feeds you fresh blood. You may then remain <em>active</em> for 1 hour per unit of blood consumed (where one unit equals one hit die).</p><p>If an <em>unwilling</em> creature touches you while you are dormant, it must succeed on a Constitution saving throw (DC [attackDcCon]) or lose one hit die.</p>
movement:
  speeds:
    walk:
      override: 5
    climb:
      override: 5
awareness:
  senses:
    blindsight: 120
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
languages:
  - understands deep speech but can't speak
attack:
  distance:
    range: 120
countermeasures:
  -
    name: Sacrifice of Blood
    description: If you are bloodied, an adjacent creature may spend an action to sacrifice one hit die and compel you to fall dormant (DC [saveDcCha] Persuasion or Intimidate). The creature must be able to speak in deep speech.
features:
  -
    name: Regenerating Flesh
    rarity: common
    description: At the start of your turn, if you have at least 1 hit point, you regain [round(hp * 0.1)] hit points.
  -
    name: Eyebeam
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: rwak
      attack:
        defence: ac
        attribute: int
      area: range 120 ft.
      targets: one creature
      onHit: "[damage, d12|keepStatic] psychic damage, and the creature must succeed on an Intelligence saving throw (DC [attackDcInt]) or fall prone."
  -
    name: Hypnotic Sound
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: rwak
      attack:
        defence: int
        attribute: int
      area: range 120 ft.
      targets: one or two creatures
      onHit: "the creature has disadvantage on attack rolls and ability checks until the end of its next turn."
  -
    name: Otherworldly Visions
    rarity: uncommon
    activation:
      type: action
      quantity: 1
    activity:
      type: rsav
      attack:
        defence: int
        attribute: int
      area: range 60 ft.
      targets: one creature
      onHit: "the creature is blinded and vulnerable to psychic damage until the end of your next turn."
    uses:
      type: recharge
      recharge:
        target: 4
  -
    name: Song of the Great Ones
    rarity: rare
    activation:
      type: action
      quantity: 1
    activity:
      type: rsav
      attack:
        defence: int
        attribute: int
      area: range 30 ft.
      targets: one creature that is not deafened
      onHit: "the creature is stunned for up to one minute."
    uses:
      requiresConcentration: true
      type: charges
      charges:
        maximum: 1
        period: lr
      recovery: Regain one use when you are first bloodied (once per long rest).
</div>

<div class="pointer pointer-l a">1</div>
<div class="pointer pointer-l b">2</div>
<div class="pointer pointer-l c">3</div>
<div class="pointer pointer-l d">4</div>
<div class="pointer pointer-l e">5</div>
<div class="pointer pointer-l f">6</div>
<div class="pointer pointer-l g">7</div>
<div class="pointer pointer-l h">8</div>
<div class="pointer pointer-l i">9</div>
<div class="pointer pointer-l j">10</div>

\contentEnd

\contentBegin { "class": "page--mm-making-monsters" }

## Make a Monster

Once you have some inspiration, it's time to make a monster! To turn your idea into a fully-featured combat profile, follow the six steps below.

### Define your Combat Power { "index": 1 }

First, you must define your monster's <em>combat power</em>—how dangerous is it in a fight? Choose a combat level, a combat rank, and (optionally) a combat role.

#### Choose a Combat Level

A _combat level_ (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='combat-levels']" }</span>) describes how powerful a monster is—the higher the level, the greater its starting stats (hit points, damage, armor class, ability modifiers, etc.).

Combat levels work in the exact same way as _character levels_, so consider choosing a level between 1-20 that's suitable for the party's average character level.

#### Choose a Combat Rank

A _combat rank_ (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='combat-ranks']" }</span>) describes how influential your monster is on the battlefield—the higher the rank, the bigger the danger it presents.

There are four basic ranks of increasing strength: minions (p<span data-blueprint="value">{ type: page.number, selector: "h2[id='minions']" }</span>), grunts (p<span data-blueprint="value">{ type: page.number, selector: "h2[id='grunts']" }</span>), elites (p<span data-blueprint="value">{ type: page.number, selector: "h2[id='elites']" }</span>), and paragons (p<span data-blueprint="value">{ type: page.number, selector: "h2[id='paragons']" }</span>). Choose one.

#### Choose a Combat Role (Optional)

A _combat role_ (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='combat-roles']" }</span>) specializes your monster's fighting style with new features, skills, and stat adjustments.

There are six basic roles: controllers (p<span data-blueprint="value">{ type: page.number, selector: "h2[id='controllers']" }</span>), defenders (p<span data-blueprint="value">{ type: page.number, selector: "h2[id='defenders']" }</span>), lurkers (p<span data-blueprint="value">{ type: page.number, selector: "h2[id='lurkers']" }</span>), skirmishers (p<span data-blueprint="value">{ type: page.number, selector: "h2[id='skirmishers']" }</span>), strikers (p<span data-blueprint="value">{ type: page.number, selector: "h2[id='strikers']" }</span>), and supporters (p<span data-blueprint="value">{ type: page.number, selector: "h2[id='supporters']" }</span>). Choose one.

\exampleBegin

Valiant, Clanda, and Chansi have been waylaid by some bandits—a combat begins!

There are three player characters, and the _average party level_ is 5; the GM opts for three 5th level grunts to provide a medium-challenge encounter.

To mix things up, the GM gives each bandit a different combat role: one _striker_ to deal damage, one _defender_ to soak up some hits, and one lurker to snipe from a distance.

\exampleEnd

### Get your Stats { "index": 2 }

Once you know your monster's combat power, use the _Scaler Template_ tables (see p<span data-blueprint="value">{ type: page.number, selector: "h1[id='scaler-templates']" }</span>) to get its starting stats.

#### Assign your Attributes

Your monster's starting template include a set of six _recommended_ ability modifiers: two high, two mid, and two low. Assign these modifiers to your abilities (STR, DEX, CON, INT, WIS, and CHA) in order of preference.

If it doesn't make sense for the monster to have a particular ability, either a) set the ability modifier to −5 or b) set the ability score to 0 (the monster automatically fails ability checks/saving throws).

\columnbreak

#### Pick your Saving Throws

Your monster's starting template also specifies a number of _trained saving throws_ (TSTs): choose these saving throws. Try to split these evenly between strong and weak saving throw categories:

* **Strong:** Dexterity, Constitution, Wisdom.
* **Weak:** Strength, Intelligence, Charisma.

#### Choose a Reach and/or Range

Basic attack stats (attack bonus, DC bonus, and average damage) are also included in the starting template.

Define a reach and/or range for these basic attacks and actions. Note that specific features may override these distances whenever appropriate.

### Pick some Extras (Optional) { "index": 3 }

With the core attributes in place, it's time to choose some extras. There are eight common categories to consider: use these to flesh out your monster.

Try to keep in mind the overall _combat power_ of the monster—the lower the level (or the lower the rank), the fewer extras your monster should need.

\panelBegin { "title": "Extra Categories" }

<ul style="column-count: 2; column-gap: 0">
  <li>Speeds</li>
  <li>Senses</li>
  <li>Skills</li>
  <li>Vulnerabilities</li>
  <li>Resistances</li>
  <li>Immunities</li>
  <li>Languages</li>
  <li>Items</li>
</ol>

\panelEnd

### Create some Features { "index": 4 }

If you want to  to give your monster some _special_ tricks, equip them with _scaling features_. There are three different types of feature:

* **Trait:** A passive ability that's always on.
* **Attack:** An activated ability that tries to affect an unwilling target.
* **Utility:** An activated ability that tries to affect a willing target.

For some quick flavor, equip your monster with at least one _ancestral_ (racial) feature, one (if applicable) _combat role_ feature, and one _attack_ action.

Be sure not to overcomplicate your monster—a combat profile should be easy to read and easy to run. Aim for the following:

\panelBegin { "type": "table", "title": "Number of Features" }

|Combat Rank|Features|
|:-:|:-:|
|Minion|1-5|
|Grunt|3-8|
|Elite|5-11|
|Paragon|7-14|

\panelEnd

For a full exploration of how to build scaling features and choose effects, see _Making Features_ (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='making-features']" }</span>).

\contentEnd

\contentBegin { "class": "page--mm-making-monsters" }

#### Pick an Archetype (Optional)

Some creatures have _extra-special_ powers: casting magic, summoning allies, forming swarms, etc. These monsters can be built with an <em>archetype</em>—a prepackaged bundle of features, rules, and advice.

Choose one of six archetypes: the lifelinker (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='the-lifelinker']" }</span>), the hazard (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='the-hazard']" }</span>), the sidekick (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='the-sidekick']" }</span>), the spellcaster (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='the-spellcaster']" }</span>), the summoner (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='the-summoner']" }</span>), and the swarm (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='the-swarm']" }</span>). 

<div data-blueprint="scaler">
---
name: Dragonborn Bandit
type: monster
portrait: spiked-dragon-head.svg
size:
  primary: medium
category:
  primary: humanoid
  secondary: dragonborn
combat:
  level: 5
  rank: grunt
  role: defender
abilityModifiers:
  ranking:
    - str
    - cha
    - con
    - wis
    - dex
    - int
savingThrows:
  ranking:
    - dex
    - cha
    - con
    - str
    - wis
    - int
languages:
  - draconic
  - common
movement:
  speeds:
    walk:
      baseSpeedPercentage: 100
awareness:
  senses:
    darkvision: 60
damageResistances:
  - lightning
items:
  - shield
  - spear
attack:
  distance:
    reach: 10
features:
  -
    name: Stop Right There
    rarity: uncommon
    activation:
      type: bonus
      quantity: 1
    activity:
      type: rsav
      attack:
        defence: cha
        attribute: cha
      area: range 30 ft
      targets: one creature
      onHit: the creature is restrained until the end of its next turn.
    uses:
      type: charges
      charges:
        maximum: 1
        period: sr
  -
    name: Spear
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: mwak
      attack:
        defence: ac
        attribute: str
      area: reach [attackReach] ft.
      targets: one target
      onHit: "[damage, d8|keepStatic] piercing damage."
  -
    name: Shield Slam
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
      onHit: the target is knocked prone.
</div>

<div data-blueprint="scaler">
---
name: Dwarf Bandit
type: monster
portrait: dwarf-helmet.svg
size:
  primary: medium
category:
  primary: humanoid
  secondary: dwarf
combat:
  level: 5
  rank: grunt
  role: lurker
abilityModifiers:
  ranking:
    - wis
    - dex
    - int
    - con
    - cha
    - str
languages:
  - dwarvish
  - common
awareness:
  senses:
    darkvision: 60
movement:
  speeds:
    walk:
      baseSpeedPercentage: 100
items:
  - heavy crossbow
attack:
  distance:
    range: 60
features:
  -
    name: Sure-Footed
    rarity: common
    description: You have advantage on Strength and Dexterity saving throws made against effects that would knock you prone.
  -
    name: Heavy Crossbow
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: rwak
      attack:
        defence: ac
        attribute: dex
      area: range [attackRange] ft.
      targets: one target
      onHit: "[damage, d8|keepStatic] piercing damage."
</div>

\columnbreak

<div data-blueprint="scaler">
---
name: Orc Bandit
type: monster
portrait: orc-head.svg
size:
  primary: medium
category:
  primary: humanoid
  secondary: orc
combat:
  level: 5
  rank: grunt
  role: striker
abilityModifiers:
  ranking:
    - str
    - con
    - cha
    - wis
    - dex
    - int
languages:
  - orc
  - common
movement:
  speeds:
    walk:
      baseSpeedPercentage: 100
awareness:
  senses:
    darkvision: 60
items:
  - greataxe
features:
  -
    name: Aggressive
    rarity: uncommon
    activation:
      type: bonus
      quantity: 1
    description: You move up to your speed towards a hostile creature that you can see.
    uses:
      type: cooldown
      cooldown:
        target: 3
  -
    name: Greataxe
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: mwak
      attack:
        defence: ac
        attribute: str
      area: reach [attackReach] ft.
      targets: one target
      onHit: "[damage, d12|keepStatic] slashing damage."
</div>

### Tailor the Fit { "index": 5 }

Now compare your monster against the adventuring party and adjust any values that may seem over or under-powered (e.g. lower the AC or HP if your party has trouble dealing damage, or increase the average damage dealt by the monster if the party's defenses or healing resources are high).

### Start Playing { "index": 6 }

Your monster is now ready! Start your encounter and improvise any additional features as you go.

<!-- #### Making Attacks

To make an attack roll or force a target to make a saving throw, add your monster's base attack/DC bonus to a relevant ability modifier (STR, DEX, CON, etc.). -->

#### Refine as you Play

It may turn out that your monster is too weak or too strong for the party. That's ok—it's hard to predict how powerful some features can be.

If you need to update a monster during live play, try to do so naturally. Avoid _explicitly_ telling players what you're changing—fold it into the fiction.

\exampleBegin

During the encounter, the party is having unexpected trouble hitting the defender's high AC. The GM decides to reduce the AC by 2 on the next attack.

---

* **GM:** As you slam your mace against the shield, Valiant, there is a loud crack; the bandit's shield splits in two from the force of your attack...

\exampleEnd

### What's Next? { "index": 7 }

Once you have the basics down, you can start to explore some new mechanics—such as paragon power (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='paragon-features']" }</span>), expanded conditions (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='expanded-conditions']" }</span>), and battletide effects (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='the-tides-of-battle']" }</span>). Use these to spice up your scaling monsters.

\contentEnd