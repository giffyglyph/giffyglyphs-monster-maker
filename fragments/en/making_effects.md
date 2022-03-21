\contentBegin { "class": "page--mm-making-effects", "header": "potion", "bg": "pages/text/bg-glyph.png" }

# Making Effects

At the heart of every scaling feature is an effect—a _rule_ that describes how your monster deal damages or affects the world. But how do you build and balance these effects? What's appropriate for a common attack, or an uncommon trait, or a rare bonus action utility?

This chapter introduces _effect points_, _effect durations_, and six _effect types_ to help you flesh out and complete your scaling features.

## Effects

An effect describes the mechanical, in-game impact of a feature—how much damage is dealt, what conditions are applied, what boons does your ally get, how long do they last for, etc.

This chapter details six categories of effect: deal damage, inflict conditions, force movement, destroy resources, change terrain, and empower allies. Mix-and-match these effect types to build a wide range of features for your scaling monsters. 

\panelBegin { "type": "aside", "title": "Combat Roles" }

You can use effects to reinforce the themes and fighting styles of your combat roles by focusing on particular effect <em>types</em>—for example:

---

* **Controller:** Inflict Conditions, Affect Terrain.
* **Defender:** Force Movement, Empower Ally.
* **Lurker:** Deal Damage, Destroy Resources
* **Skirmisher:** Destroy Resources, Inflict Conditions.
* **Striker:** Deal Damage, Destroy Resources
* **Supporter:** Empower Ally, Affect Terrain.

\panelEnd

\columnbreak

\panelBegin { "type": "table", "class": "panel--effect-types", "title": "Effect Types" }

|Effect|Description|
|---|---|
|Deal Damage|The target takes damage.|
|Inflict Conditions|The target gains conditions.|
|Change Terrain|Change the terrain in some fashion.|
|Destroy Resources|The target loses precious resources.|
|Force Movement|The target is forcibly moved.|
|Empower Ally|Grant power to a nearby ally (or yourself).|

\panelEnd

### Effect Durations

Effects can have different durations—some fade away in an instant, while others linger for an extended period of time. There are six basic categories of duration:

1. **Instant:** The effect ends once resolved.
2. **End of Your Next Turn:** The effect ends at the end of your next turn.
3. **End of the Target's Next Turn:** The effect ends either a) at the end of the target's next turn or b) when an appropriate countering action is taken.
4. **Concentration:** At the start of each of your turns, you reapply the consequences to the target. Unless specified otherwise, the effect ends after either a) 1 minute passes or b) you lose concentration.
5. **Ongoing:** At the start of each of its turns, the target may make a saving throw to end the effect (choose a saving throw and a DC). On a failed save, the target suffers the consequences again. 
6. **Save Ends:** At the end of each of its turns, the target may make a saving throw to end the effect (choose a saving throw and a DC).

Each effect type will describe which durations in particular can be used and at what cost.

\contentEnd

\contentBegin { "class": "page--mm-making-effects" }

## Making an Effect

To start making an effect, you first need a handful of _effect points_ (EP). You gain a number of EP when you create a feature, as shown below—the rarer the feature, the more points you gain.

Spend EP to buy one, two, or even three unique effects for your feature.

\panelBegin { "type": "table", "title": "Effect Points" }

|Feature|Effect Points (EP)|
|:-:|:-:|
|Common|1|
|Uncommon|3|
|Rare|5|
|Has a Requirement or Condition|+1|
|Is Delayed/Dooming|+1|
|Free/Bonus Action or Reaction|−1|

\panelEnd

\exampleBegin

The GM wants to add some effects to a _rare_ bonus action. They have 4 (5−1) EP to spend, and so buy two effects: _deal damage_ and _inflict condition_.

\exampleEnd

### Deal Damage { "index": "A" }

To deal some damage, first choose one option from the _Deal Damage_ table below using your feature's range and total number of targets—the more EP you spend, the more damage you can deal.

Then finish by choosing one or more damage types and an effect duration from the _Damage Options_ list.

\panelBegin { "type": "table", "class": "panel--direct-damage", "title": "Deal Damage" }

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
      <th rowspan=2>Cost (EP)</th>
      <th colspan=2><span class="spacer">Aimed</span></th>
      <th colspan=2><span class="spacer">Area</span></th>
    </tr>
    <tr>
      <th>Single Target</th>
      <th>Multiple Targets</th>
      <th>Hit Only</th>
      <th>Miss Half</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>100%</td>
      <td>100% / targets</td>
      <td>75%</td>
      <td>50%</td>
    </tr>
    <tr>
      <td>2</td>
      <td>125%</td>
      <td>125% / targets</td>
      <td>100%</td>
      <td>75%</td>
    </tr>
    <tr>
      <td>3</td>
      <td>150%</td>
      <td>150% / targets</td>
      <td>125%</td>
      <td>100%</td>
    </tr>
	<tr>
      <td>4</td>
      <td>175%</td>
      <td>175% / targets</td>
      <td>150%</td>
      <td>125%</td>
    </tr>
	<tr>
      <td>5</td>
      <td>200%</td>
      <td>200% / targets</td>
      <td>175%</td>
      <td>150%</td>
    </tr>
  </tbody>
</table>

\panelEnd

\panelBegin { "type": "table", "class": "table--ongoing-durations", "title": "Damage Options" }

* **Damage Types:** acid, bludgeoning, cold, fire, force, lightning, necrotic, piercing, poison, psychic, radiant, slashing, thunder.
* **Effect Durations:** Instant, Concentration (+1 EP), Ongoing (+1 EP).

\panelEnd

\exampleBegin

A giant lizard deals 14 ongoing acid damage (DC 14 CON) to Clanda. She takes 14 damage from the initial hit. At the start of her turn, she rolls a saving throw to try to avoid more damage—but fails. The effect persists, and Clanda takes another 14 acid damage.

\exampleEnd

\columnbreak

### Inflict a Condition { "index": "B" }

To inflict a condition, first choose one or more conditions as described below—the more EP you spend, the more debilitating the conditions you can choose.

Then finish by choosing an effect duration from the _Condition Options_ list.

\panelBegin { "type": "table", "class": "panel--inflict-a-condition", "title": "Inflict a Condition" }

|Cost (EP)|Description|
|:-:|---|
|1|One common condition.|
|2|One uncommon condition.|
|4|One rare condition.|
|+1|Another condition of equal/lesser rarity.|
|+1|Affects an area or multiple targets.|
|−1|The target can roll an additional save to resist.|

\panelEnd

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
			<th colspan="3" class="header"><span>Common</span></th>
    </tr>
		<tr>
			<td>1</td>
			<td>Deafened</td>
			<td>You can't hear anything.</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Grappled</td>
			<td>You can't move.</td>
		</tr>
    <tr>
			<td>3</td>
			<td>Poisoned</td>
			<td>You have disadvantage on attack rolls and ability checks.</td>
		</tr>
		<tr>
			<td>4</td>
			<td>Prone</td>
			<td>You are lying on the ground.</td>
		</tr>
		<tr>
			<th colspan="3" class="header"><span>Uncommon</span></th>
		</tr>
    <tr>
			<td>5</td>
			<td>Blinded</td>
			<td>You can't see anything.</td>
		</tr>
		<tr>
			<td>6</td>
			<td>Charmed</td>
			<td>You can't attack your charmer.</td>
		</tr>
		<tr>
			<td>7</td>
			<td>Frightened</td>
			<td>You can't move towards the source of your fear.</td>
		</tr>
    <tr>
			<td>8</td>
			<td>Invisible</td>
			<td>You can't be seen.</td>
		</tr>
		<tr>
			<td>9</td>
			<td>Restrained</td>
			<td>You can't move.</td>
		</tr>
		<tr>
			<th colspan="3" class="header"><span>Rare</span></th>
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

\panelBegin { "type": "table", "class": "table--ongoing-durations", "title": "Condition Options" }

* **Effect Durations:** End of Your Next Turn, End of the Target's Next Turn, Concentration (+1 EP), Save Ends (+1 EP).

\panelEnd

\exampleBegin

The GM wants to equip a kobold with a _stink pot_ area attack—an uncommon action worth 3 EP. They spend 1 EP to buy a "deal 75% damage" effect, and 2 EP to buy a "poisoned" area condition that lasts until the end of the target's next turn.

Later, the GM equips a lich with a _soul freeze_ attack—a rare action worth 5 EP. They spend 4 EP to buy a "petrified" condition, and another 1 EP to make it a _concentration_ effect for the lich.

\exampleEnd

\contentEnd

\contentBegin { "class": "page--mm-making-effects" }

### Change the Terrain { "index": "C" }

To change the terrain, first choose one or more terrain modifiers as described below—the more EP you spend, the more impactful the modifiers.

Then finish by choosing an effect duration from the _Terrain Options_ list.

\panelBegin { "type": "table", "class": "panel--inflict-a-condition", "title": "Change the Terrain" }

|Cost (EP)|Description|
|:-:|---|
|1|One common modifier.|
|2|One uncommon modifier.|
|4|One rare modifier.|
|+1|Another modifier of equal/lesser rarity.|

\panelEnd

\panelBegin { "type": "table", "class": "panel--terrain-modifiers", "title": "Terrain Modifiers" }

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th colspan="2" class="header"><span>Common</span></th>
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
			<th colspan="2" class="header"><span>Uncommon</span></th>
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
			<td>3/4 Cover</td>
			<td>+5 bonus to AC and DEX saving throws.</td>
		</tr>
		<tr>
			<th colspan="2" class="header"><span>Rare</span></th>
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

\panelBegin { "type": "table", "class": "table--ongoing-durations", "title": "Terrain Options" }

* **Effect Durations:** End of Your Next Turn, Concentration.

\panelEnd

\exampleBegin

The GM wants to equip a pyromancer with a _blazing fire_ spell—a rare, damaging attack with a persistent area effect worth 5 EP.

The GM spends 2 EP to buy a "deal 100% damage" area effect, and 3 EP to buy "damaging/difficult" modifiers with a _concentration_ duration.

\exampleEnd

\columnbreak

### Destroy a Resource { "index": "D" }

To destroy a precious resource, first choose one or more resources as described below—the more EP you spend, the more valuable the resources you can target.

Then finish by choosing an effect duration from the _Resource Options_ list.

\panelBegin { "type": "table", "class": "panel--inflict-a-condition", "title": "Destroy a Resource" }

|Cost (EP)|Description|
|:-:|---|
|1|One common resource.|
|2|One uncommon resource.|
|4|One rare resource.|
|+1|Another resource of equal/lesser rarity.|
|+1|Affects an area or multiple targets.|
|−1|The target can roll an additional save to resist.|

\panelEnd

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
			<th colspan="2" class="header"><span>Common</span></th>
		</tr>
		<tr>
			<td>Wealth</td>
			<td>The target loses carried wealth (currency, gems, art, etc.) equal to your damage (as valued in gold).</td>
		</tr>
    <tr>
			<td>Charges</td>
			<td>The target loses one charge from an equipped magic item. If this would destroy the item, nothing happens.</td>
		</tr>
		<tr>
			<th colspan="2" class="header"><span>Uncommon</span></th>
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
			<th colspan="2" class="header"><span>Rare</span></th>
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

\panelBegin { "type": "table", "class": "table--ongoing-durations", "title": "Resource Options" }

* **Effect Durations:** Instant, Concentration (+1 EP), Ongoing (+1 EP).

\panelEnd

\exampleBegin

A drow assassin is given a _false widow's bite_ uncommon attack worth 3 EP. The GM uses all 3 EP to buy a "hit dice" resource effect with an ongoing duration.

Later, an elite drow assassin is given a rarer _black widow's bite_ attack worth 5 EP. The GM uses 1 EP to buy a "deal 100% damage" effect, and the remaining 4 EP to buy an ongoing "hit dice × 2" resource effect.

A mummy, meanwhile, is given a _life drain_ rare attack worth 5 EP. The GM uses all 5 EP to buy an instant "exhaustion" resource effect with an area range

\exampleEnd

\contentEnd

\contentBegin { "class": "page--mm-making-effects" }

### Force Movement { "index": "E" }

To force movement, first choose a distance and a type as described in the tables below—the more EP you spend, the further you can move your targets.

Then finish by choosing an effect duration from the _Movement Options_ list.

\panelBegin { "type": "table", "class": "panel--force-movement", "title": "Force Movement" }

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
      <th rowspan="2">Cost (EP)</th>
      <th colspan="2"><span class="spacer">Aimed</span></th>
      <th colspan="2"><span class="spacer">Area</span></th>
    </tr>
    <tr>
      <th>Single Target</th>
      <th>Multiple Targets</th>
      <th>Hit Only</th>
      <th>Miss Half</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>10 ft.</td>
      <td>10 ft. / targets</td>
      <td>5 ft.</td>
      <td>—</td>
    </tr>
    <tr>
      <td>2</td>
      <td>20 ft.</td>
      <td>20 ft. / targets</td>
      <td>10 ft.</td>
      <td>—</td>
    </tr>
    <tr>
      <td>3</td>
      <td>30 ft.</td>
      <td>30 ft. / targets</td>
      <td>20 ft.</td>
      <td>10 ft.</td>
    </tr>
	<tr>
      <td>4</td>
      <td>40 ft.</td>
      <td>40 ft. / targets</td>
      <td>30 ft.</td>
      <td>20 ft.</td>
    </tr>
	<tr>
      <td>5</td>
      <td>50 ft.</td>
      <td>50 ft. / targets</td>
      <td>40 ft.</td>
      <td>30 ft.</td>
    </tr>
  </tbody>
</table>

\panelEnd

\panelBegin { "class": "panel--table", "title": "Movement Types" }

|Type|Description|
|---|---|
|Direct|The target is moved instantly to a spot, such as by a teleport or magical effect.|
|Pull|The target is pulled towards you in a straight line (or as close as possible).|
|Push|The target is pushed away from you in a straight line (or as close as possible).|
|Slide|The target is moved in a direction of your choice.|

\panelEnd

\panelBegin { "type": "table", "class": "table--ongoing-durations", "title": "Movement Options" }

* **Effect Durations:** Instant, Concentration (+1 EP), Ongoing (+1 EP).

\panelEnd

\exampleBegin

The orc slammed into Chansi, pushing her back 10 ft.

\exampleEnd

### Empower an Ally { "index": "F" }

To empower an ally (or yourself), first choose one or more boons as described below—the more EP you spend, the more powerful the boon.

Then finish by choosing an effect duration from the _Empowering Options_ list.

\panelBegin { "type": "table", "class": "panel--inflict-a-condition", "title": "Empower an Ally" }

|Cost (EP)|Description|
|:-:|---|
|1|One common boon.|
|2|One uncommon boon.|
|4|One rare boon.|
|+1|Another boon of equal/lesser rarity.|
|+1|Affects an area or multiple targets.|

\panelEnd

\panelBegin { "type": "table", "class": "table--ongoing-durations", "title": "Empowering Options" }

* **Effect Durations:** Instant, End of Your Next Turn, End of the Target's Next Turn, Concentration.

\panelEnd

\columnbreak

\panelBegin { "type": "table", "title": "Boons" }

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th colspan="2" class="header"><span>Common</span></th>
		</tr>
		<tr>
			<td>Adamant</td>
			<td>Any critical hit made against the target becomes a normal hit.</td>
		</tr>
		<tr>
			<td>Aggressor</td>
			<td>The target's critical hit range increases by +1.</td>
		</tr>
		<tr>
			<td>Leader</td>
			<td>The target can spend their reaction to make a basic attack against a target of your choice.</td>
		</tr>
    <tr>
			<td>Lucky</td>
			<td>The target may reroll any attack roll that is a natural 1.</td>
		</tr>
    <tr>
			<td>Marker</td>
			<td>The target makes their next attack roll with advantage.</td>
		</tr>
    <tr>
			<td>Mover</td>
			<td>The target is unaffected by difficult terrain.</td>
		</tr>
		<tr>
			<td>Piercing</td>
			<td>The target's attacks ignore resistance to one damage type and treat immunity as if it were resistance.</td>
		</tr>
		<tr>
			<td>Purifier</td>
			<td>The target may reroll a failed saving throw against an ongoing effect.</td>
		</tr>
		<tr>
			<td>Resistor</td>
			<td>The target gains resistance to one damage type.</td>
		</tr>
		<tr>
			<th colspan="2" class="header"><span>Uncommon</span></th>
		</tr>
		<tr>
			<td>Armorer</td>
			<td>The target gains +2 AC and advantage on one saving throw of your choice.</td>
		</tr>
		<tr>
			<td>Barrier</td>
			<td>The target gains temporary hit points equal to your combat level.</td>
		</tr>
    <tr>
			<td>Cooler</td>
			<td>The target may reduce the cooldown of any one feature by 1 or reroll a recharge feature.</td>
		</tr>
		<tr>
			<td>Destroyer</td>
			<td>The target deals additional damage equal to your combat level. Choose a damage type.</td>
		</tr>
		<tr>
			<td>Immuniser</td>
			<td>The target is immune to one damage type or condition.</td>
		</tr>
		<tr>
			<td>Traveller</td>
			<td>The target gains a new form of movement.</td>
		</tr>
    <tr>
			<td>Sensor</td>
			<td>The target gains a new sense.</td>
		</tr>
		<tr>
			<td>Speedster</td>
			<td>The target gains +10 speed.</td>
		</tr>
		<tr>
			<th colspan="2" class="header"><span>Rare</span></th>
		</tr>
		<tr>
			<td>Cloaker</td>
			<td>The target becomes invisible. This ends if the target attacks or casts a spell.</td>
		</tr>
    <tr>
			<td>Deflector</td>
			<td>The first time the target is reduced to 0 hit points, it is reduced to 1 instead.</td>
		</tr>
		<tr>
			<td>Healer</td>
			<td>The target regains hit points equal to twice your combat level.</td>
		</tr>
		<tr>
			<td>Extracted</td>
			<td>The target is banished. When the effect ends, the target reappears in an unoccupied space of your choice within 30 ft. of you.</td>
		</tr>
		<tr>
			<td>Recharger</td>
			<td>The target may immediately regain one exhausted uncommon feature, or gain +1 charges to a charged uncommon feature.</td>
		</tr>
		<tr>
			<td>Thorns</td>
			<td>The target reflects half of any damage they take onto their attacker.</td>
		</tr>
	</tbody>
</table>

\panelEnd

\exampleBegin

The GM wants to equip a necromancer with some empowering actions to support their risen undead.

To start, the GM creates a _revenant rage_ uncommon bonus action worth 2 EP. They spend 1 EP to buy an "aggressor" boon, and 1 EP to make it an area effect with a concentration duration.

The necromancer is then given _resummon_, a rare bonus action worth 4 EP. They spend all 4 EP to buy an instant "extracted" empowerment for an area effect.

\exampleEnd

\contentEnd