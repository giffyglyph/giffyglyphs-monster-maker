\contentBegin { "class": "page--mm-monster-maker page--single page--single--l" }

# <span class="small">Giffyglyph's</span><span>Monster Maker LE</span>

## Make a Monster

Choose a _combat level_ for your 5e monster (i.e. the party's average character level). Apply a _combat rank_ and one or more _combat tags_. Adjust stats as necessary and finish with some speeds/resistances/etc.

\panelBegin { "type": "table", "title": "1-1: Combat Stats" }

<table class="table--combat-stats">
  <colgroup>
    <col>
    <col>
    <col>
    <col>
    <col>
    <col>
    <col>
    <col>
    <col>
    <col>
  </colgroup>
  <thead>
  <tr>
      <th rowspan=2>LVL</th>
      <th colspan=3><span class="spacer">Defensive</span></th>
      <th colspan=3><span class="spacer">Offensive</span></th>
      <th colspan=3><span class="spacer">Ratings</span></th>
    </tr>
    <tr>
      <th>AC</th>
      <th>HP</th>
      <th>UST</th>
      <th>ATK</th>
      <th>DC</th>
      <th>DMG</th>
      <th>PB</th>
      <th>CR</th>
      <th>XP</th>
    </tr>
  </thead>
  <tbody>
    <tr data-level=0></tr>
    <tr data-level=1></tr>
    <tr data-level=2></tr>
    <tr data-level=3></tr>
    <tr data-level=4></tr>
    <tr data-level=5></tr>
    <tr data-level=6></tr>
    <tr data-level=7></tr>
    <tr data-level=8></tr>
    <tr data-level=9></tr>
    <tr data-level=10></tr>
    <tr data-level=11></tr>
    <tr data-level=12></tr>
    <tr data-level=13></tr>
    <tr data-level=14></tr>
    <tr data-level=15></tr>
    <tr data-level=16></tr>
    <tr data-level=17></tr>
    <tr data-level=18></tr>
    <tr data-level=19></tr>
    <tr data-level=20></tr>
    <tr data-level=21></tr>
    <tr data-level=22></tr>
    <tr data-level=23></tr>
    <tr data-level=24></tr>
    <tr data-level=25></tr>
    <tr data-level=26></tr>
    <tr data-level=27></tr>
  </tbody>
</table>

\panelEnd

\panelBegin { "type": "aside", "title": "Glossary & Calculations" }

* **LVL (Level):** Your combat level (i.e. character level).
* **AC (Armor Class):** 13 + (LVL/3).
* **HP (Hit Points):** 16 + (LVL×7).
* **UST (Untrained Saving Throw):** (LVL/3) − 1.
* **TST (Trained Saving Throw):** UST + PB.
* **ATK (Attack Bonus):** 3 + (LVL/2).
* **DC (Attack DC):** 11 + (LVL/2).
* **DMG (Damage per Action):** (LVL×4) − 2.
* **PB (Proficiency Bonus):** 1 + (LVL+3 / 4).
* **INIT (Initiative):** Your initiative bonus.
* **THREAT (Threat):** A target number of players.

\panelEnd

\columnbreak

\panelBegin { "type": "table", "title": "1-2: Combat Ranks" }

|Name|Changes|Tags|
|---|---|:-:|
|Minion|HP/4, CR/2, XP/4.|1|
|Grunt|INIT=PB/2. Gain one TST.|2|
|Paragon|Choose a THREAT (2+). HP×THREAT, CR=LVL, XP×THREAT, INIT=PB. Gain two TSTs. Gain PARAGON FEATURES.|3|

\panelEnd

\panelBegin { "type": "table", "title": "1-3: Combat Tags" }

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Changes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan=2 class="header"><span>Defense</th>
    </tr>
    <tr>
      <td>Enduring</td>
      <td>AC−2, HP×2, UST−2.</td>
    </tr>
    <tr>
      <td>Sturdy</td>
      <td>AC+4.</td>
    </tr>
    <tr>
      <td>Evasive</td>
      <td>UST+4.</td>
    </tr>
    <tr>
      <td>Careful</td>
      <td>AC+2, HP/2, UST+2.</td>
    </tr>
    <tr>
      <td>Lucky</td>
      <td>Gain three TSTs.</td>
    </tr>
    <tr>
      <td>Resilient</td>
      <td>If reduced to 0 HP, you are reduced to 1 with temp. HP equal to your LVL (1/lr).</td>
    </tr>
    <tr>
      <td>Shockproof</td>
      <td>Turn a critical hit against you into a normal hit (3/lr).</td>
    </tr>
    <tr>
      <th colspan=2 class="header"><span>Offense</th>
    </tr>
    <tr>
      <td>Controlling</td>
      <td>DMG−LVL. Targets have disadvantage on saving throws against your effects.</td>
    </tr>
    <tr>
      <td>Devious</td>
      <td>If you have advantage on your attack, deal LVL×2 extra damage (1/turn).</td>
    </tr>
    <tr>
      <td>Reliable</td>
      <td>ATK+4.</td>
    </tr>
    <tr>
      <td>Cunning</td>
      <td>DC+4.</td>
    </tr>
    <tr>
      <td>Forceful</td>
      <td>DMG−LVL. When you hit a target, move it 10 ft or knock it prone (1/turn).</td>
    </tr>
    <tr>
      <td>Disorienting</td>
      <td>DMG−LVL. When you hit a target, the next attack against it has advantage (1/turn).</td>
    </tr>
    <tr>
      <td>Hexing</td>
      <td>DMG−LVL. When you hit a target, it is POISONED until the end of its next turn (1/turn).</td>
    </tr>
    <tr>
      <td>Brutal</td>
      <td>DMG+LVL. Increase crit range by +1.</td>
    </tr>
    <tr>
      <th colspan=2 class="header"><span>Utility</th>
    </tr>
    <tr>
      <td>Helpful</td>
      <td>Spend a bonus action to grant two adjacent allies or one ally within 30 ft. advantage on their next attack roll.</td>
    </tr>
    <tr>
      <td>Sneaky</td>
      <td>Spend a bonus action to hide.</td>
    </tr>
    <tr>
      <td>Nimble</td>
      <td>Spend a bonus action to dash/disengage.</td>
    </tr>
    <tr>
      <td>Directing</td>
      <td>Spend a bonus action to let two adjacent allies or one ally within 30 ft. spend their reaction to make a basic attack.</td>
    </tr>
    <tr>
      <td>Tactical</td>
      <td>Spend a bonus action to let two adjacent allies or one ally within 30 ft. spend their reaction to move half their speed.</td>
    </tr>
    <tr>
      <td>Piercing</td>
      <td>Spend a bonus action to make your attacks ignore one type of damage resistance until the end of your turn.</td>
    </tr>
    <tr>
      <td>Enchanting</td>
      <td>Spend a bonus action to grant two adjacent allies or one ally within 30 ft. extra DMG equal to your LVL until the end of their next turn.</td>
    </tr>
  </tbody>
</table>

\panelEnd

\contentEnd

\contentBegin { "class": "page--mm-monster-maker page--single page--single--r" }

<div data-blueprint="action">
---
name: "1-4: Paragon Features"
actionType: Traits
body: |
  <p><strong class="title uncommon">Paragon Power <span class="normalcase">([THREAT-1] per round)</span>:</strong> At the end of another creature's turn, you may regain one reaction and choose one of the following:</p>
  <ol type="A" style="margin-top: -15px">
    <li>
      <p><strong>Act:</strong> Take an action. You may also spend some or all of your remaining movement as part of that action.</p>
      <p>This does not count as a turn. You can't dash more than once per round, and you lose the benefit of any currently-held disengage, dodge or readied action.</p>
    </li>
    <li>
      <p><strong>Resist:</strong> Reroll a saving throw against an ongoing effect. Spend [LVL×2] hit points to gain advantage on the roll.</p>
      <p>If you successfully save against a Concentration effect, you take [LVL×2] damage.</p>
    </li>
  </ol>
  <hr/>
  <p><strong class="title rare">Paragon Defence <span class="normalcase">([THREAT/2] per lr)</span>:</strong> When you would fail a saving throw, you may spend [LVL×2] hit points to succeed.</p>
</div>

## Make an Attack

Choose a defence (AC, STR, DEX, CON, INT, WIS, or CHA). Choose a range (reach/range) and an attacking distance (5/10/20/30/50/100 ft.). Choose one or more _attack tags_.

\panelBegin { "type": "table", "title": "2-1: Attack Tags" }

|Tag|Change|
|---|---|
|Basic|—|
|Multiattack|DMG/attacks.|
|Area|DMG/2, half damage on miss.|
|Frenzy|Attack with disadvantage, +2 crit range.|
|Condition|DMG=0, target gains a condition.|
|Movement|DMG=0, target is moved up to 10 ft.|
|Draining|DMG=0, target loses 1 + LVL/5 hit die.|
|Recharge&nbsp;5|DMG+LVL.|
|Limited&nbsp;1/sr|DMG×2.|
|Accurate|ATK+2, DMG/2.|
|Faultless|DC+2, DMG/2.|

\panelEnd

<div class="scaler scaler--monster scaler--grunt scaler--defender">
  <header class="scaler__header">
    <div class="scaler__title">Armored Berserker</div>
    <div class="scaler__subtitle">Level 4, Grunt, Sturdy/Lucky</div>
  </header>
  <section class="scaler__body">
    <ul class="scaler__skills scaler__skills--dual">
      <li>
        <strong><i class="fas fa-fw fa-shield"></i> AC</strong> 18
      </li>
      <li>
        <strong><i class="fas fa-fw fa-heart"></i> HP</strong> 44
      </li>
      <li>
        <strong><i class="fas fa-fw fa-dice-d20"></i> Initiative</strong> +1
      </li>
      <li>
        <strong><i class="fas fa-fw fa-tools"></i> Proficiency</strong> +2
      </li>
      <li>
        <strong><i class="fas fa-fw fa-crosshairs"></i> Atk Bonus</strong> +5
      </li>
      <li>
        <strong><i class="fas fa-fw fa-bullseye"></i> Atk DC</strong> 13
      </li>
      <li>
        <strong><i class="fas fa-fw fa-fire"></i> Dmg</strong> 11
      </li>
      <li>
        <strong><i class="fas fa-fw fa-award"></i> CR</strong> 1 (275 XP)
      </li>
    </ul>
    <div class="scaler__attributes" style="margin-top: -8px !important; margin-bottom: -2px;">
      <div class="scaler__attribute">
        <div class="scaler__attribute__name">STR</div>
        <div class="scaler__attribute__save">
          <i class="fas fa-shield"></i> +2
        </div>
      </div>
      <div class="scaler__attribute">
        <div class="scaler__attribute__name">DEX</div>
        <div class="scaler__attribute__save">
          <i class="fas fa-shield"></i> +2
        </div>
      </div>
      <div class="scaler__attribute">
        <div class="scaler__attribute__name">CON</div>
        <div class="scaler__attribute__save">
          <i class="fas fa-shield"></i> +2
        </div>
      </div>
      <div class="scaler__attribute">
        <div class="scaler__attribute__name">INT</div>
        <div class="scaler__attribute__save">
          <i class="fas fa-shield"></i> +0
        </div>
      </div>
      <div class="scaler__attribute">
        <div class="scaler__attribute__name">WIS</div>
        <div class="scaler__attribute__save">
          <i class="fas fa-shield"></i> +2
        </div>
      </div>
      <div class="scaler__attribute">
        <div class="scaler__attribute__name">CHA</div>
        <div class="scaler__attribute__save">
          <i class="fas fa-shield"></i> +0
        </div>
      </div>
    </div>
    <div class="scaler__heading"><span>Actions</span></div>
    <div class="scaler__feature scaler__feature--common">
      <div class="scaler__feature__header">
        <div class="scaler__feature__title">Slash</div>
      </div>
      <div class="scaler__feature__activity"><em>Melee:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 11 slashing damage.</div>
    </div>
    <div class="scaler__feature scaler__feature--common">
      <div class="scaler__feature__header">
        <div class="scaler__feature__title">Slam</div>
      </div>
      <div class="scaler__feature__activity"><em>Save:</em> DC 13 vs STR, reach 5 ft., one target. <em>Hit:</em> The target is knocked prone.</div>
    </div>
    <div class="scaler__feature scaler__feature--uncommon">
      <div class="scaler__feature__header">
        <div class="scaler__feature__title">Power Strike</div>
        <div class="scaler__feature__uses">Recharge 5</div>
      </div>
      <div class="scaler__feature__activity"><em>Melee:</em> +5 to hit (disadvantage), reach 5 ft., one target. <em>Hit:</em> 15 slashing damage (critical on 18-20).</div>
    </div>
  </section>
</div>

\columnbreak

\panelBegin { "class": "panel--table panel--conditions", "title": "2-2: Conditions" }

|Rarity|Condition|
|---|---|
|Common|Deafened, Grappled, Poisoned, Prone.|
|Uncommon|Blinded, Charmed, Petrified, Invisible, Restrained.|
|Rare|Paralyzed, Petrified, Stunned, Unconscious.|

\panelEnd

\panelBegin { "type": "table", "title": "2-3: Defensive Keywords" }

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

## Make an Encounter

Choose an _encounter level_ (if in doubt, use the party's average character level). You gain one _encounter point_ (EP) for each player the encounter should support—e.g. 5 players gets you 5 EP. Halve this for easy encounters, and double it for hard encounters.

Spend your EP to buy monsters—if their combat level is higher/lower than the encounter level, adjust their cost:

\panelBegin { "type": "table", "title": "3-1: EP Costs" }

|Rank|ELVL − 4|ELVL +− 0|ELVL + 4|
|---|:-:|:-:|:-:|
|Minion|0.125|0.25|0.5|
|Grunt|0.5|1|2|
|Paragon|THREAT/2|THREAT|2×THREAT|

\panelEnd

\panelBegin { "type": "table", "title": "3-2: Encounter Templates" }

|Name|Monsters|
|---|---|
|Mirror Match|(EP) × Grunt|
|Mass Swarm|(EP×4) × Minion|
|Mixed Mobs|(EP/2) × Grunt, (EP×4/2) × Minion|
|Big Boss|1 × Paragon (THREAT = EP)|
|Twin Champions|2 × Paragon (EP/2)|
|Elite Guard|1 × Paragon T2, (EP−2) × Grunt|
|Commander|1 × Paragon (EP/2), (EP×2) × Minion|

\panelEnd

\panelBegin { "type": "aside", "title": "Read the Full Book" }

For more advice on how to build level-scaling monsters and encounters for 5e, read **Giffyglyph's Monster Maker** at www.patreon.com/giffyglyph.

\panelEnd

\contentEnd

\contentBegin { "class": "page--mm-monster-maker page--single" }

<div class="scaler scaler--monster scaler--grunt scaler--defender">
  <header class="scaler__header">
    <div class="scaler__title" style="padding-right: 0; text-align: center">Deathlok Mastermind</div>
    <div class="scaler__combat" style="font-size: 11px; line-height: 17px; margin-top: 2px;">
      <div class="scaler__combat__level">Level 8</div>
      <div class="scaler__combat__rank">Paragon 3</div>
      <div class="scaler__combat__role">Sturdy, Disorienting, Directing</div>
    </div>
  </header>
  <section class="scaler__body">
    <ul class="scaler__skills scaler__skills--dual">
      <li>
        <strong><i class="fas fa-fw fa-shield"></i> AC</strong> 19
      </li>
      <li>
        <strong><i class="fas fa-fw fa-heart"></i> HP</strong> 216
      </li>
      <li>
        <strong><i class="fas fa-fw fa-dice-d20"></i> SAVE</strong> +1, I/Ch +4
      </li>
      <li>
        <strong><i class="fas fa-fw fa-tools"></i> Proficiency</strong> +3
      </li>
      <li>
        <strong><i class="fas fa-fw fa-crosshairs"></i> Atk Bonus</strong> +7
      </li>
      <li>
        <strong><i class="fas fa-fw fa-bullseye"></i> Atk DC</strong> 15
      </li>
      <li>
        <strong><i class="fas fa-fw fa-fire"></i> Dmg</strong> 15
      </li>
      <li>
        <strong><i class="fas fa-fw fa-award"></i> CR</strong> 8 (2,925 XP)
      </li>
    </ul>
    <ul class="scaler__skills scaler__skills--wide block">
      <li><strong><i class="fas fa-fw fa-shoe-prints"></i> Speed</strong> 30 ft.</li>
      <li><strong><i class="fas fa-fw fa-shield-alt"></i> Resistant</strong> to necrotic, nonmagical physical.</li>
      <li><strong><i class="fas fa-fw fa-shield"></i> D. Immune</strong> to poison.</li>
      <li><strong><i class="fas fa-fw fa-shield"></i> C. Immune</strong> to exhaustion, poisoned.</li>
      <li><strong><i class="fas fa-fw fa-bell"></i> Senses</strong> darkvision 120 ft.</li>
    </ul>
    <div class="scaler__heading"><span>Traits</span></div>
    <div class="scaler__feature scaler__feature--common">
      <div class="scaler__feature__header">
        <div class="scaler__feature__title">Devils Sight</div>
      </div>
      <div class="scaler__feature__activity"> You can see through magical darkness.</div>
    </div>
    <div class="scaler__feature scaler__feature--common">
      <div class="scaler__feature__header">
        <div class="scaler__feature__title">Turn Resistance</div>
      </div>
      <div class="scaler__feature__activity"> You have advantage on saving throws against any effect that turns Undead.</div>
    </div>
    <div class="scaler__feature scaler__feature--common">
      <div class="scaler__feature__header">
        <div class="scaler__feature__title">Unusual Nature</div>
      </div>
      <div class="scaler__feature__activity"> You don't require air, food, drink, or sleep.</div>
    </div>
    <div class="scaler__heading"><span>Free</span></div>
    <div class="scaler__feature scaler__feature--common">
      <div class="scaler__feature__header">
        <div class="scaler__feature__title">Disorienting Attack</div>
        <div class="scaler__feature__uses">1/turn</div>
      </div>
      <div class="scaler__feature__activity"> When you hit a target, the next attack against it has advantage.</div>
    </div>
    <div class="scaler__feature scaler__feature--uncommon">
      <div class="scaler__feature__header">
        <div class="scaler__feature__title">Paragon Power</div>
        <div class="scaler__feature__uses">2/round</div>
      </div>
      <div class="scaler__feature__description">
        <p>At the end of another creature's turn, you regain one reaction and <em>act</em> or <em>resist</em>:</p>
      </div>
    </div>
    <div class="scaler__feature scaler__feature--rare">
      <div class="scaler__feature__header">
        <div class="scaler__feature__title">Paragon Defence</div>
        <div class="scaler__feature__uses">1/lr</div>
      </div>
      <div class="scaler__feature__description">When you would fail a saving throw, you may spend 16 hit points to succeed.</div>
    </div>
    <div class="scaler__heading"><span>Bonus Actions</span></div>
    <div class="scaler__feature scaler__feature--common">
      <div class="scaler__feature__header">
        <div class="scaler__feature__title">Directing Attack</div>
      </div>
      <div class="scaler__feature__activity"><em>Utility:</em> Two adjacent allies or one ally within 60 ft. spend their reaction to make a basic attack.</div>
    </div>
    <div class="scaler__heading"><span>Actions</span></div>
    <div class="scaler__feature scaler__feature--common">
      <div class="scaler__feature__header">
        <div class="scaler__feature__title">Deathly Claw</div>
      </div>
      <div class="scaler__feature__activity"><em>Melee:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 15 necrotic damage.</div>
    </div>
    <div class="scaler__feature scaler__feature--common">
      <div class="scaler__feature__header">
        <div class="scaler__feature__title">Grave Bolt</div>
      </div>
      <div class="scaler__feature__activity"><em>Ranged:</em> +7 to hit, range 120 ft., two targets or the same target twice. <em>Hit:</em> The target is either a) restrained until the end of its next turn or b) takes 7 necrotic damage.</div>
    </div>
    <div class="scaler__feature scaler__feature--uncommon">
      <div class="scaler__feature__header">
        <div class="scaler__feature__title">Dimension Door</div>
        <div class="scaler__feature__uses">3/sr</div>
      </div>
      <div class="scaler__feature__activity"><em>Spell:</em> 3rd-level, Conjuration, V. <em>Utility:</em> You teleport to an unoccupied space within 60 ft.</div>
    </div>
    <div class="scaler__feature scaler__feature--rare">
      <div class="scaler__feature__header">
        <div class="scaler__feature__title">Darkness</div>
        <div class="scaler__feature__uses">1/lr</div>
      </div>
      <div class="scaler__feature__activity"><em>Spell:</em> 2nd-level, Evocation, VM. <em>Utility:</em> a 15 ft. radius sphere centered on a point or object within 60 ft. <em>Effect:</em> The area counts as magical darkness.</div>
    </div>
    <div class="scaler__feature scaler__feature--rare">
      <div class="scaler__feature__header">
        <div class="scaler__feature__title">Death Spiral</div>
        <div class="scaler__feature__uses">1/lr</div>
      </div>
      <div class="scaler__feature__activity"><em>Ranged:</em> +7 to hit (disadvantage), range 30 ft., one target. <em>Hit:</em> 30 necrotic damage (critical on 18-20).</div>
    </div>
  </section>
</div>

\columnbreak

\contentEnd

\contentBegin { "class": "page--single" }

<div data-blueprint="scaler">
---
type: monster
name: Deathlock
size:
  primary: medium
category:
  primary: undead
combat:
  level: 8
  rank: grunt
  role: striker
movement:
  speeds:
    walk:
      baseSpeedPercentage: 100
awareness:
  senses:
    darkvision: 60
abilityModifiers:
  ranking:
    - cha
    - int
    - dex
    - wis
    - con
    - str
damageImmunities:
  - poison
languages:
  - life
features:
  -
    name: Turn Resistance
    rarity: common
    description: You have advantage on saving throws against any effect that turns Undead.
  -
    name: Unusual Nature
    rarity: common
    description: You don't require air, food, drink, or sleep.
  -
    name: Deathly Claw
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
      targets: one target
      onHit: "[damage, d6|keepStatic] necrotic damage."
  -
    name: Grave Bolt
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: mwak
      attack:
        defence: ac
        attribute: cha
      area: range 120 ft.
      targets: two targets, or the same target twice
      onHit: "[round(damage * 0.5), d8|keepStatic] necrotic damage."
</div>

<div data-blueprint="scaler">
---
type: monster
name: Deathlock Wight
size:
  primary: medium
category:
  primary: undead
alignment: neutralEvil
combat:
  level: 8
  rank: minion
  role: lurker
movement:
  speeds:
    walk:
      baseSpeedPercentage: 100
awareness:
  senses:
    darkvision: 60
abilityModifiers:
  ranking:
    - cha
    - int
    - dex
    - wis
    - con
    - str
damageImmunities:
  - poison
languages:
  - life
features:
  -
    name: Unusual Nature
    rarity: common
    description: You don't require air, food, drink, or sleep.
  -
    name: Deathly Claw
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
      targets: one target
      onHit: "[damage, d6|keepStatic] necrotic damage."
  -
    name: Grave Bolt
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: mwak
      attack:
        defence: ac
        attribute: cha
      area: range 60 ft.
      targets: one target
      onHit: "[damage, d8|keepStatic] necrotic damage."
</div>

\contentEnd

\contentBegin { "class": "page--dark page--mm-making-features columns-1" }

<div data-blueprint="scaler">
---
type: monster
name: Kaladraxis, Adult Red Dragon
image:
  src: kaladraxis.png
  position: banner-top
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
displayOptions:
  columns: 2
  colbreaks:
    - 12
movement:
  speeds:
    walk:
      baseSpeedPercentage: 100
    climb:
      baseSpeedPercentage: 50
    fly:
      baseSpeedPercentage: 200
awareness:
  senses:
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
features:
  -
    name: Brutality
    rarity: common
    description: If you attack a target that is not adjacent to an ally, your attacks score a critical hit on a roll of 19-20.
  -
    name: Heavy Body
    rarity: common
    description: When you land heavily on the ground after flying, all creatures within 10 ft. of you must make a DC [attackDcStr] STR saving throw or be knocked prone.
  -
    name: Food is Fuel
    rarity: common
    description: When you devour the corpse of a small or medium-sized creature, you may immediately recharge either your <em>Fire Breath</em> or <em>Inferno</em> feature.
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
      area: reach 10 ft.
      targets: one target
      onHit: "[round(damage * 0.75), d10|keepStatic] piercing damage and [round(damage * 0.25), d12|keepStatic] fire damage."
  -
    name: Claw Swipe
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
      targets: two targets, or the same target twice
      onHit: "[round(damage * 0.5), d8|keepStatic] slashing damage."
  -
    name: Tail Swipe
    rarity: common
    activation:
      type: action
      quantity: 1
    activity:
      type: save
      attack:
        defence: str
        attribute: str
      area: reach 10 ft.
      targets: one target
      onHit: the target is either a) pushed back 10 ft., b) knocked prone, or c) grappled by your tail.
    requirements: you must have a free tail
  -
    name: Flame Spit
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
      targets: two targets
      onHit: "[round(damage * 0.5), d8|keepStatic] fire damage."
  -
    name: Fire Breath
    rarity: uncommon
    activation:
      type: action
      quantity: 1
    activity:
      type: save
      attack:
        defence: dex
      area: a 30 ft. cone extending from yourself.
      targets: all creatures
      onHit: "[damage, d8|keepStatic] fire damage."
      onMiss: half damage
    uses:
      type: recharge
      recharge:
        target: 5
  -
    name: Searing Heat
    rarity: uncommon
    activation:
      type: action
      quantity: 1
    activity:
      type: save
      attack:
        defence: con
      area: reach 5 ft.
      targets: one creature
      onHit: "[damage, d8|keepStatic] fire damage and the creature either a) loses one unspent hit die or b) loses their lowest unspent spell slot."
    uses:
      type: charges
      charges:
        maximum: 4
        period: sr
  -
    name: Inferno
    rarity: uncommon
    activation:
      type: action
      quantity: 1
    activity:
      type: utility
      area: a 20 ft. radius circle centered on a point within 60 ft. of you
      onEffect: the area is ablaze until the start of your next turn. When a creature enters or starts their turn within the area, they take [level * 2] fire damage.
      isEnduring: true
    uses:
      type: cooldown
      cooldown:
        target: 3
  -
    name: Fear Me
    rarity: rare
    activation:
      type: action
      quantity: 1
    activity:
      type: save
      attack:
        defence: cha
      area: a 60 ft. sphere centered on yourself
      targets: all hostile creatures
      onHit: "[round(damage * 0.75), d8|keepStatic] psychic damage and the creature is frightened of you, save ends (DC [attackDcCha] Charisma)."
    uses:
      type: charges
      charges:
        maximum: 1
        period: lr
      recovery: Regain one use when you are bloodied or enraged.
  -
    name: Timebomb
    rarity: rare
    activation:
      type: action
      quantity: 1
    activity:
      dooming: 3
      type: mwak
      attack:
        defence: ac
        attribute: str
      area: reach 5 ft.
      targets: one creature
      onHit: The creature is doomed.
      onDoom: "[damage * 2, d12|keepStatic] fire damage and the target deals [round(damage * 0.75)|keepStatic] fire damage to all other creatures within 15 ft. of it"
    uses:
      type: charges
      charges:
        maximum: 1
        period: lr
  -
    name: Watch the World Burn
    rarity: rare
    activation:
      type: action
      quantity: 1
    activity:
      delayed: 1
      type: overkill
      area: range 40 ft.
      targets: all creatures
      onHit: "[damage * 4, d12|keepStatic] fire damage. If a creature is reduced to 0 hit points, it is disintegrated."
      overkill:
        weakPoint: A hanging stalactite ([round(hp * 0.1)] HP)
      requirements:
        - You must be enraged
    uses:
      type: charges
      charges:
        maximum: 1
        period: lr
</div>

\contentEnd