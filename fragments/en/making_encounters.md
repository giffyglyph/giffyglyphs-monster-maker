\contentBegin { "class": "page--mm-making-encounters", "header": "slime", "bg": "pages/text/bg-glyph.png" }

# Making Encounters

Once you've assembled together a horde of monsters, it's time to start a fight! Monsters rarely act alone, however—they team up with allies and use treacherous traps to confront, surround, and overcome unwary adventurers. But how do you build and balance these combats?

This chapter introduces _encounter outlines_ to help you build combat encounters for your games.

## Make an Encounter

A combat encounter pits your players against one or more monsters—combat ensues, usually ending with one side's death, defeat, escape, or surrender.

\exampleBegin

* As the party descends into the sewers beneath Little Grundelflat, they are _surprised_ by a swarm of sticky, foul-smelling oozes.
* In the Darksand Desert, a wild bulette leaps out of the ground just as an _obscuring_ sandstorm hits...
* A trio of goblin snipers fire crossbows from the city rooftop; can the party make good use of cover?
* A gargantuan dragon tears through the castle wall—if the party can't stop the dragon's rampage fast, the whole castle is likely to collapse.
* A vampire lord commands his undead champions to butcher the party—no grace, no mercy, just _violence_.
* As abominations pour through the portal, the party must _defend_ the mages long enough for them to finish the sealing ritual.

\exampleEnd

Once you have some inspiration, it's time to make an encounter! To turn your idea into a fully-featured combat encounter, take the following six steps.

\columnbreak

### Set the Scene { "index": 1 }

Your first step is to set the scene—what is happening, and where is happening? For some quick inspiration, use the tables provided in _Set the Scene_ (p<span data-blueprint="value">{ type: page.number, selector: "h2[id='set-the-scene']" }</span>).

Choose a theme, some creature details, and some basic tactics. Then choose 5-10 keywords from the _Environmental Details_ list to help flavour the encounter.

\exampleBegin

Valiant, Zane, and Chansi descend into Grundleflat's sewers as they pursue an assassin, only to run afoul of some oozes:

---

* **Grundleflat Sewers** (sewers, warm, sticky, dark, rancid, echoing, cramped) Aggressive oozes surprise the party, attacking from two directions. 

\exampleEnd

### Create a Combat Outline { "index": "2" }

Next, create an _combat outline_ by establishing three basic properties—the target party size, the average encounter level, and the intended amount of danger.

1. **Party Size:** Decide how many players the encounter should support (typically 3 to 6).
2. **Encounter Level:** Choose a _combat level_ for this encounter (typically 1 to 20). When in doubt, use a level within −2/+2 of the party's _average character level_. For more advice on choosing levels, see p<span data-blueprint="value">{ type: page.number, selector: "h1[id='combat-levels']" }</span>.
3. **Danger:** Describe how dangerous the encounter should be (trivial, easy, normal, hard, or extreme).

Consider adding a battle map or description of the environment, and think of at least one notable terrain feature as you build an engaging combat arena.

\contentEnd

\contentBegin { "class": "page--mm-making-encounters" }

\exampleBegin

The three player characters (Valiant, Zane, and Chansi) have an average character level of 6.

The GM establishes a simple _combat outline_ for the Grundleflat Sewers encounter: party size: 3, encounter level: 6, danger: hard. 

\exampleEnd

### Get your Threat Budget { "index": "3" }

Threat is a measurement of a monster's combat power—the higher a monster's threat, the more player characters it can threaten (for more details, see p<span data-blueprint="value">{ type: page.number, selector: "h1[id='combat-ranks']" }</span>).

Once you have a combat outline, use the _Threat Budget_ table below to find out how much threat your encounter can have—the bigger the _party size_ or the greater the _danger_, the higher your budget.

\panelBegin { "class": "panel--table", "title": "Threat Budget" }

|Danger|Maximum Total Threat|
|:-:|:-:|
|Trivial|Party Size × 0.25|
|Easy|Party Size × 0.5|
|Normal|Party Size × 1|
|Hard|Party Size × 1.5|
|Extreme|Party Size × 2|

\panelEnd

\exampleBegin

The ooze encounter is intended to be a _hard_ fight for the 3 players. This gives the GM a total budget of 4.5 (3×1.5) threat.

\exampleEnd

### Add some Monsters { "index": "4" }

Now it's time to populate your encounter! Choose a monster that has a _combat level_ within −2/+2 of the <em>encounter level</em>—the higher the rank, the more threat you must spend to add it to the encounter. Keep doing this until you have exhausted all of your threat budget.

When you add a monster, consider its _combat role_ and how it might interact with other monsters in combat—use this to set up some engaging tricks and battle tactics.

<!-- Try to create engaging synergies between your monsters based on their rank and role—defenders protecting snipers, supporters buffing strikers, controllers enabling lurkers, etc. -->

\panelBegin { "class": "panel--table panel--threat", "title": "Threat" }

|Combat Rank|Threat|
|---|:-:|
|Minion|0.25|
|Grunt|1|
|Elite|2|
|Paragon T3|3|

|Combat Rank|Threat|
|---|:-:|
|Paragon T4|4|
|Paragon T5|5|
|Paragon T6|6|
|Paragon T7|7|

\panelEnd

#### Summoning Power

If your monster is a _summoner_ (see p<span data-blueprint="value">{ type: page.number, selector: "h1[id='the-summoner']" }</span>), increase their threat by their amount of summoning power.

#### Adjusting Combat Levels

If your monster has a combat level that falls _outside_ of the −2/+2 encounter level range, adjust its threat. For every 3 levels _higher_ than the encounter level, double the monster's threat. For every 3 levels _lower_, halve it.

\columnbreak

\panelBegin { "class": "panel--table panel--scaler-cost", "title": "Scaler Cost" }

<table>
  <thead>
    <tr>
      <th rowspan=2>Combat Rank</th>
      <th colspan=4><span class="spacer">Threat</span></th>
    </tr>
    <tr>
      <th>LVL−6</th>
      <th>LVL−3</th>
      <th>LVL+3</th>
      <th>LVL+6</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Minion</td>
      <td>0.0625</td>
      <td>0.125</td>
      <td>0.5</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Grunt</td>
      <td>0.25</td>
      <td>0.5</td>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr>
      <td>Elite</td>
      <td>0.5</td>
      <td>1</td>
      <td>4</td>
      <td>8</td>
    </tr>
    <tr>
      <td>Paragon T3</td>
      <td>0.75</td>
      <td>1.5</td>
      <td>6</td>
      <td>12</td>
    </tr>
    <tr>
      <td>Paragon T4</td>
      <td>1</td>
      <td>2</td>
      <td>8</td>
      <td>16</td>
    </tr>
    <tr>
      <td>Paragon T5</td>
      <td>1.25</td>
      <td>2.5</td>
      <td>10</td>
      <td>20</td>
    </tr>
    <tr>
      <td>Paragon T6</td>
      <td>1.5</td>
      <td>3</td>
      <td>12</td>
      <td>24</td>
    </tr>
  </tbody>
</table>

\panelEnd

\exampleBegin

The GM has 4.5 threat to spend. They spend 2 threat to add two 6th-level grunts—some _hermit oozes_.

Now the GM wants to add lots of minions. Normally, 2.5 threat would buy only 10 6th-level minions—but if they are 3rd-level (3 levels _lower_ than the encounter level), the cost is halved allowing for 20 minions.
	
\exampleEnd

### Tailor the Fit { "index": 5 }

Compare your encounter against the adventuring party and adjust any aspects that may seem over or under-powered—use fewer minions if your party has minimal attacking actions, for example.

### Start Playing { "index": 6 }

Now it's time to put your encounter into practice! Roll initiative and start the battle.

#### Refine as you Play

As you play, you may discover that the encounter is noticeably weaker or stronger than intended. That's ok—it can be hard to predict how dangerous some battles may be. If you need to update an encounter during live play, try some of the following:

* **Change the HP:** Adjust the hit points of everything in the encounter by −10%/+10%.
* **Change the damage:** Adjust the average damage of everything in the encounter by −10%/+10%.
* **Change a combat rank:** If a monster hasn't yet acted or been harmed, change its rank.
* **Take non-damaging actions:** If the party are taking too much damage too quickly, spend actions in non-damaging, _cinematic_ ways instead.
* **Flee:** Break the morale of your monsters and have some of them flee.
* **Offer a Ceasefire:** Give the party a chance to call a truce, or offer terms of surrender.

Try to fold this into the fiction whenever possible (such as when a monster is bloodied or killed).

### What's Next? { "index": 7 }

Once you have the basics down, you can start to explore new mechanics for your encounters—such as hazards (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='the-hazard']" }</span>) and battletide conditions (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='the-tides-of-battle']" }</span>).

\contentEnd

\contentBegin { "class": "page--mm-making-encounters" }

<div data-blueprint="encounter">
name: Grundelflat Sewers
keywords:
  - sewer
  - warm
  - sticky
  - dark
  - rancid
  - echoing
  - cramped
image: maps/west-sewers-complex.png
tactics: |
  <p>The oozes are split into two groups and attack the party from two opposing directions. Oozes are ravenous carnivores. A cunning adventurer might be able to distract the swarm with a hunk of rotting meat...</p>
  <hr/>
  <ul>
  <li><strong>Sticky Oozes</strong> latch on to nearby prey with sticky pseudopods and spew dissolving, corrosive acid to melt flesh and bone.</li>
  <li><strong>Bloated Oozes</strong> hang from ceilings and spit digestive juices. With volatile gas pockets, these oozes are vulnerable to piercing damage—but don't stand nearby if one pops.</li>
  <li><strong>Hermit Oozes</strong> devour their food from the inside out and wear the skin of their latest meal as a shell.</li>
  </ul>
combat:
  level: 6
  players: 3
scalers:
  -
    name: Sticky Ooze
    quantity: 12
    level: 3
    rank: minion
    role: controller
    subrole: tactician
    portrait: acid-blob.svg
  -
    name: Bloated Ooze
    quantity: 8
    level: 3
    rank: minion
    role: lurker
    subrole: sneak
    portrait: acid-blob.svg
  -
    name: Hermit Ooze
    quantity: 2
    level: 6
    rank: grunt
    role: defender
    subrole: sentinel
    portrait: acid-blob.svg
</div>

<div data-blueprint="scaler">
---
name: Bloated Ooze
type: monster
portrait: acid-blob.svg
size:
  primary: small
category:
  primary: ooze
combat:
  level: 3
  rank: minion
  role: lurker
  subrole: sneak
attack:
  distance:
    range: 30
abilityModifiers:
  ranking:
    - dex
    - wis
    - con
    - str
    - cha
    - int
  overrides: int=-5,cha=-5
movement:
  speeds:
    walk:
      baseSpeedPercentage: 100
    climb:
      baseSpeedPercentage: 50
awareness:
  senses:
    blindsight: 60
damageVulnerabilities:
  - piercing
damageResistances:
  - acid
  - cold
  - fire
features:
  -
    name: Amorphous
    rarity: common
    description: You can move through a space as narrow as 1 inch wide without squeezing.
  -
    name: Pop
    rarity: common
    description: When you are reduced 0 hit points, you deal [level] acid damage to all creatures within [attackReach] ft.
  -
    name: Spit
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: rwak
      attack:
        defence: ac
        attribute: dex
      area: range 30 ft.
      targets: one target
      onHit: "[damage, d6|keepStatic] acid damage."
</div>

\columnbreak

<div data-blueprint="scaler">
---
name: Sticky Ooze
type: monster
portrait: acid-blob.svg
size:
  primary: small
category:
  primary: ooze
combat:
  level: 3
  rank: minion
  role: controller
  subrole: tactician
abilityModifiers:
  ranking:
    - str
    - con
    - wis
    - dex
    - cha
    - int
  overrides: int=-5,cha=-5
movement:
  speeds:
    walk:
      baseSpeedPercentage: 100
awareness:
  senses:
    blindsight: 60
damageResistances:
  - acid
  - cold
  - fire
features:
  -
    name: Amorphous
    rarity: common
    description: You can move through a space as narrow as 1 inch wide without squeezing.
  -
    name: Sticky
    rarity: common
    description: A creature grappled by you can't use the escape action to free itself.
  -
    name: Latch On
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
      targets: one creature
      onHit: "the creature is grappled and you move into its space. If the creature is larger than you, it can still move at half speed (increase your effective size category by +1 for every other sticky ooze grappling the same target). Your speed is 0, you move with the creature, and you remain latched on for as long as you have concentration."
  -
    name: Dissolve
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: mwak
      targets: one creature you are latched onto
      onEffect: "[damage, d6|keepStatic] acid damage."
</div>

<div data-blueprint="scaler">
---
name: Hermit Ooze
type: monster
portrait: acid-blob.svg
size:
  primary: medium
category:
  primary: ooze
  secondary: humanoid
combat:
  level: 6
  rank: grunt
  role: defender
  subrole: sentinel
abilityModifiers:
  ranking:
    - str
    - con
    - wis
    - dex
    - cha
    - int
  overrides: int=-5,cha=-5
damageResistances:
  - acid
  - cold
  - fire
movement:
  speeds:
    walk:
      baseSpeedPercentage: 100
awareness:
  senses:
    blindsight: 60
features:
  -
    name: Amorphous
    rarity: common
    description: You can move through a space as narrow as 1 inch wide without squeezing.
  -
    name: Slam
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
      onHit: "[round(damage * 0.5), d8|keepStatic] bludgeoning and [round(damage * 0.5), d6|keepStatic] acid damage."
  -
    name: Stick Around
    rarity: uncommon
    activation:
      type: free
      quantity: 1
    description: When you hit a target of equal size or smaller with an attack, it is grappled by you.
    uses:
      type: charges
      charges:
        maximum: 1
        period: round
  -
    name: Dissolve
    rarity: uncommon
    activation:
      type: action
      quantity: 1
    activity:
      type: mwak
      targets: one grappled creature
      onHit: "[round(damage * 1.75), d8|keepStatic] acid damage."
    uses:
      type: cooldown
      cooldown:
        target: 3
  -
    name: Infest
    rarity: rare
    activation:
      type: action
      quantity: 1
    description: You enter an adjacent humanoid corpse and control it as if it were your own body. You also gain [level*4] temporary hit points.
    uses:
      type: charges
      charges:
        maximum: 1
        period: lr
</div>

\contentEnd

\contentBegin { "class": "page--mm-making-encounters" }

## Set the Scene

For some quick inspiration, use the tables below to add some flavor your encounter.

\panelBegin { "type": "table", "class": "table--encounter-themes", "title": "Encounter Themes" }

|Type|Description|
|---|---|
|Active|Active movement is _highly_ encouraged.|
|Aggressive|The monsters are _very_ aggressive.|
|Balanced|It's a fair fight. Mostly.|
|Blocking|There's plenty of cover.|
|Breach|Break through the enemy line.|
|Countdown|Win before a countdown expires.|
|Defend|You must defend someone.|
|Endure|Hold out until reinforcements arrive.|
|Environment|The environment is the true enemy.|
|Escort|You must escort someone.|
|Heist|Get it, get the thing, and get out.|
|No Mercy|You must defeat everyone.|
|Obscured|It's hard to see.|
|Puzzling|There's a gimmick somewhere.|
|Seige|Lay seige and break through.|
|Solo|There's just one _big boss_ to fight.|
|Sticky|Movement is cramped, confined, or risky.|
|Surprise|You are caught off-guard.|
|Swarmed|There are a _lot_ of enemies...|
|Trapped|You can't flee until the enemy is defeated.|

\panelEnd

\panelBegin { "type": "table", "class": "table--creature-categories", "title": "Creature Details" }

* **<i class="fas fa-fw fa-skull"></i> Categories:** aberration, beast, celestial, construct, dragon, elemental, fey, fiend, giant, humanoid, monstrosity, ooze, plant, undead.
* **<i class="fas fa-fw fa-face-smile"></i> Morale:** broken, wavering, uncertain, certain, resolute, fanatical.

\panelEnd

\panelBegin { "type": "table", "class": "table--monster-tactics", "title": "Combat Tactics" }

* **Pincer Attack:** (Skirmisher, Striker) Attack the enemy from two directions.
* **Pinning Assault:** (Controller, Defender) Pin the enemy down in one spot.
* **Rain of Fire:** (Defender, Lurker) Shoot from a distance.
* **Turtle:** (Defender, Supporter) Close ranks to endure the assault or protect something valuable.
* **Shield Wall:** (Defender, Lurker) Form a defensive line.
* **Guerilla:** (Lurker, Skirmisher) Attack from the shadows.
* **Charge:** (Striker, Skirmisher) Close the gap between you and the enemy _fast_.
* **Scorched Earth:** (Striker, Supporter) Destroy everything.
* **Hit and Run:** (Skirmisher, Supporter) Attack the enemy then move back out of range.
* **Armored Spearhead:** (Defender, Striker) Breach the line.
* **Focus Fire:** (Any) Focus attacks on a single target.
* **Duel:** (Any) Take on the enemy one-vs-one.
* **Merciless:** (Any) Focus on the most defenseless enemy. 
* **Disorient:** (Controller, Supporter) Confuse the enemy. 

\panelEnd

\columnbreak

\panelBegin { "type": "table", "class": "table--encounter-details", "title": "Environmental Details" }

* **<i class="fas fa-fw fa-trees"></i> Biome:** aberrant, aquatic, arcane, arctic, arid, astral, badland, beach, cavern, cloud, corrupted, crystal, deadland, desert, divine, ethereal, fen, forest, grassland, hill, infernal, jungle, lair, marsh, maze, mechanical, mine, mountain, plains, planar, river, ocean, ruins, rural, savannah, sewer, shore, swamp, tomb, taiga, tundra, underdark, urban, volcanic, wasteland.
* **<i class="fas fa-fw fa-clouds"></i> Weather:** breezy, clear, cloudy, drizzle, fog, hurricane, indoor, magic, misty, overcast, rain, sandstorm, snow, storm, sunny, windy.
* **<i class="fas fa-fw fa-snowflake"></i> Temperature:** boiling, chilly, cold, comfortable, freezing, hot, subzero, tepid, warm, volcanic.
* **<i class="fas fa-fw fa-droplet"></i> Humidity:** damp, dank, dehydrated, desiccated, dry, muggy, parched, sticky, steamy, wet.
* **<i class="fas fa-fw fa-clock"></i> Time of Day:** dawn, morning, afternoon, evening, twilight, night.
* **<i class="fas fa-fw fa-lightbulb"></i> Lighting:** bright, dazzling, blinding, dark, shadowed, gloomy, atmospheric, dim, warm, cold.
* **<i class="fas fa-fw fa-ruler"></i> Spacing:** compact, confined, confusing, cramped, narrow, open, roomy, spacious, tangled, vast, wide.
* **<i class="fas fa-fw fa-moon"></i> Phases of the Moon:** new, waxing crescent, first quarter, waxing gibbous, full, waning gibbous, last quarter, waning crescent.
* **<i class="fas fa-fw fa-music"></i> Sound:** boisterous, cacophonous, chaotic, discordant, echoing, loud, muffled, musical, noisy, painful, peaceful, pleasant, piercing, primal, quiet, reverberating, sharp, silent, soft, serene, soothing, unnerving, vibrating.
* **<i class="fas fa-fw fa-flower-tulip"></i> Smell/Taste:** acid, acrid, airy, animal, artificial, billowy, biting, citrus, clean, crisp, dirty, earthy, faint, fetid, fishy, floral, flowery, fresh, heady, lemony, lilac, lime, loamy, mildewed, minty, misty, moist, moldy, musty, nauseating, overpowering, perfumed, pine, pungent, putrid, rancid, redolent, repulsive, rich, rose, rotten, savory, sharp, skunky, smoky, sour, spicy, spoiled, stale, stinking, sweaty, sweet, tart, wispy, woodsy.
* **<i class="fas fa-fw fa-hand"></i> Texture:** blemished, blistered, bloated, bristly, bushy, cottony, craggy, creamy, decorated, feathery, flawed, fluffy, furry, glossy, grainy, gritty, hairy, indented, lumpy, pockmarked, pokey, polished, pressed, puffy, rocky, satiny, scored, scraped, seedy, silky, slimy, smoothed, tarnished, unaltered, unsoiled, velvety, wooly.
* **<i class="fas fa-fw fa-house"></i> Structure:** abbey, arena, armory, barracks, castle, church, citadel, court, den, dock, dungeon, fortress, gallery,  garden, guardhouse, guildhall, hall, house, hut, keep, library, manor, market, merchant, monument, palace, plaza, pool, prison, shipyard, shrine, smithy, stronghold, tavern, temple, theatre, tower, trading post, vault, wall, warehouse.

\panelEnd

\contentEnd