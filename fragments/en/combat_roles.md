\contentBegin { "class": "page--mm-combat-roles", "header": "crossed-swords", "bg": "pages/text/bg-glyph.png" }

# Combat Roles

Every monster has a preferred fighting style. Some like to charge into the front-line while others launch projectiles into the fray. Some wait for _just_ the right moment to strike while others devastate and destroy with wild abandon.

This chapter introduces _combat roles_ to help you customize the fighting abilities of your scaling monster.

\exampleBegin

Kalister Prax watched the distant _heroes_ through her telescope as they blithely crossed the bridge. Those fools—they had no right to trespass here. The hobgoblin turned, barking out orders for her unit to assemble.

On her left, goblin guncrackers formed a line. With keen eyes, they would shoot from afar. On her right, orc wolfriders reared and roared—they were eager to ride, scout, and harass. And in the middle stood her prized hobgoblin shieldwarriors—heavily armored and ready to defend against any attack.

Kalister grinned. This might be a ramshackle squad defending empire territory in the middle of nowhere—but it was _hers_, and she would lead it with pride.

\exampleEnd

\columnbreak

## Choosing a Role

A combat role defines a _fighting style_ in battle, adjusting attributes and granting access to special features. There are six roles you can choose from:

1. **Controller:** Manipulate enemies by _maneuvering_ foes, _inflicting_ conditions, and _transforming_ terrain.
2. **Defender:** Defend allies by _securing_ territory, _guarding_ the weak, and _enduring_ pain.
3. **Lurker:** Backstab enemies by _sneaking_ unseen, _exploiting_ weaknesses, and _assassinating_ targets.
4. **Skirmisher:** Outflank enemies by _spotting_ threats, _evading_ attacks, and _travelling_ the land.
5. **Striker:** Dominate enemies by _butchering_ foes, _aiming_ attacks, and _suppressing_ the battlefield.
6. **Supporter:** Support allies by _empowering_ friends, _leading_ teams, and _mending_ the sick.

Choose the role that best describes how your monster acts in combat and then apply attribute modifiers as shown in the _Combat Roles_ table below.

\regionBegin { "class": "region--fixed-bottom region--border-top columns-1" }

\panelBegin { "class": "panel--table panel--combat-roles", "title": "Combat Roles" }

<table>
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
  </colgroup>
	<thead>
		<tr>
			<th>Role</th>
      <th>INIT</th>
			<th>SPD</th>
      <th>AC</th>
      <th>HP</th>
      <th>TST</th>
      <th>DMG</th>
      <th>Skill</th>
      <th>Special Feature</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Controller</td>
			<td><span data-blueprint="value">{ type: scaler.role.initiativeBonus.proficiency, role: controller }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.baseSpeed, role: controller }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.armorClass, role: controller }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.hitPoints, role: controller }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.trainedSavingThrows, role: controller }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.attackDamage, role: controller }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.skill, role: controller }</span></td>
      <td><span data-blueprint="value">{ type: scaler.role.feature, role: controller }</span></td>
		</tr>
		<tr>
			<td>Defender</td>
			<td><span data-blueprint="value">{ type: scaler.role.initiativeBonus.proficiency, role: defender }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.baseSpeed, role: defender }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.armorClass, role: defender }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.hitPoints, role: defender }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.trainedSavingThrows, role: defender }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.attackDamage, role: defender }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.skill, role: defender }</span></td>
      <td><span data-blueprint="value">{ type: scaler.role.feature, role: defender }</span></td>
		</tr>
		<tr>
			<td>Lurker</td>
			<td><span data-blueprint="value">{ type: scaler.role.initiativeBonus.proficiency, role: lurker }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.baseSpeed, role: lurker }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.armorClass, role: lurker }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.hitPoints, role: lurker }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.trainedSavingThrows, role: lurker }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.attackDamage, role: lurker }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.skill, role: lurker }</span></td>
      <td><span data-blueprint="value">{ type: scaler.role.feature, role: lurker }</span></td>
		</tr>
		<tr>
			<td>Skirmisher</td>
			<td><span data-blueprint="value">{ type: scaler.role.initiativeBonus.proficiency, role: skirmisher }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.baseSpeed, role: skirmisher }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.armorClass, role: skirmisher }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.hitPoints, role: skirmisher }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.trainedSavingThrows, role: skirmisher }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.attackDamage, role: skirmisher }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.skill, role: skirmisher }</span></td>
      <td><span data-blueprint="value">{ type: scaler.role.feature, role: skirmisher }</span></td>
		</tr>
		<tr>
			<td>Striker</td>
			<td><span data-blueprint="value">{ type: scaler.role.initiativeBonus.proficiency, role: striker }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.baseSpeed, role: striker }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.armorClass, role: striker }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.hitPoints, role: striker }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.trainedSavingThrows, role: striker }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.attackDamage, role: striker }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.skill, role: striker }</span></td>
      <td><span data-blueprint="value">{ type: scaler.role.feature, role: striker }</span></td>
		</tr>
		<tr>
			<td>Supporter</td>
			<td><span data-blueprint="value">{ type: scaler.role.initiativeBonus.proficiency, role: supporter }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.baseSpeed, role: supporter }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.armorClass, role: supporter }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.hitPoints, role: supporter }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.trainedSavingThrows, role: supporter }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.attackDamage, role: supporter }</span></td>
			<td><span data-blueprint="value">{ type: scaler.role.skill, role: supporter }</span></td>
      <td><span data-blueprint="value">{ type: scaler.role.feature, role: supporter }</span></td>
		</tr>
	</tbody>
</table>

\panelEnd

\regionEnd

\contentEnd

\contentBegin { "class": "page--mm-combat-roles" }

## Controllers

Controllers disorientate and manipulate their enemies by moving them around the battlefield, shaping the terrain, and applying a range of status conditions.

There are three common types of controller:

1. **The Hexer:** You inflict status conditions on your enemies to debilitate them.
3. **The Shaper:** You shape the landscape to hinder your enemies and aid your allies.
2. **The Tactician:** You use movement effects to rearrange the position of your enemies.

Apply the _Controller Template_ and add some _condition_, _movement_ or _terrain_ attacking actions. Use some of the example features below or build your own (for more details, see _Making Features_ (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='making-features']" }</span>).

\panelBegin { "class": "panel--role-template", "title": "Controller Template" }

* **<i class="fas fa-fw fa-shield"></i> Armor Class** <span data-blueprint="value">{ type: scaler.role.armorClass, role: controller }</span>
* **<i class="fas fa-fw fa-heart"></i> Hit Points** <span data-blueprint="value">{ type: scaler.role.hitPoints, role: controller }</span>
* **<i class="fas fa-fw fa-shield-plus"></i> T. Saving Throws** <span data-blueprint="value">{ type: scaler.role.trainedSavingThrows, role: controller }</span>
* **<i class="fas fa-fw fa-bolt"></i> Initiative** <span data-blueprint="value">{ type: scaler.role.initiativeBonus.proficiency, role: controller }</span>
* **<i class="fas fa-fw fa-tools"></i> Skill** <span data-blueprint="value">{ type: scaler.role.skill, role: controller }</span>
* **<i class="fas fa-fw fa-fire-flame-curved"></i> Attack Damage** <span data-blueprint="value">{ type: scaler.role.attackDamage, role: controller }</span>
* **<i class="fas fa-fw fa-shoe-prints"></i> Speed** <span data-blueprint="value">{ type: scaler.role.baseSpeed, role: controller }</span>
* <strong class="empty"></strong>

<div class="trait">
	<p><span data-blueprint="value">{ type: scaler.role.feature, role: controller }</span></p>
</div>

\panelEnd

\panelBegin { "type": "aside", "title": "Using Controllers" }

* Controllers deal lower damage on average, so focus instead on status effects and non-damaging actions.
* With tougher defences and improved initiative, controllers make great _secondary_ defenders.

\panelEnd

\bannersBegin { "class": "banners--stretched role--powers" }

\bannerBegin { "title": "The Hexer", "subtitle": "Conditions" }

**Blinding Attack:** (Action, Uncommon) Attack a target. _Hit:_ The target is blinded (save ends).

**Concussion:** (Action, Rare) Attack a target. _Hit:_ The target is stunned (save ends).

**Frighten:** (Action, Uncommon) Attack a target. _Hit:_ The target is frightened of you (save ends).

**Knockdown:** (Action, Common) Attack a target. _Hit:_ The target falls prone.

**Poisoning Attack:** (Action, Common) Attack a target. _Hit:_ The target is poisoned until the end of its next turn.

\bannerEnd

\bannerBegin { "title": "The Shaper", "subtitle": "Terrain" }

**Sticky Floor:** (Action, Common) Choose an area. _Effect:_ The area is difficult terrain until the end of your next turn.

**Barrier:** (Action, Rare, Concentration) Choose an area. _Effect:_ The area is impassable and grants total cover.

**Zone of Darkness:** (Bonus Action, Rare, Concentration) Choose an area. _Effect:_ The area is filled with magical darkness.

**Zone of Pain:** (Action, Uncommon, Concentration) Choose an area. _Effect:_ The area is damaging and unstable.

**Distracting Noise:** (Action, Common, Concentration) Choose an area. _Effect:_ The area is uncomfortable.

\bannerEnd

\bannerBegin { "title": "The Tactician", "subtitle": "Movement" }

**Explosive Force:** (Action, Uncommon) Attack an area. _Hit:_ The target is pushed 20 ft. away from the center.

**Get Over Here:** (Action, Common) Attack a target. _Hit:_ The target is pulled up to 10 ft. towards you.

**Pinning Attack:** (Action, Uncommon) Attack a target. _Hit:_ The target is restrained (save ends).

**Knockback:** (Action, Common) Attack a target. _Hit:_ The target is pushed away up to 10 ft.

**Reshuffle:** (Action, Common) Attack a target. _Hit:_ You move both yourself and the target 5 ft. in any direction. This movement doesn't trigger opportunity attacks.

\bannerEnd

\bannersEnd

\contentEnd

\contentBegin { "class": "page--mm-combat-roles" }

## Defenders

Defenders are the most resilient combatants on the battlefield, blocking enemy attacks and shielding allies whilst shrugging off the hardest hits with ease.

There are three common types of defender:

1. **The Bulwark:** You are unbreakable, turning aside dangerous attacks and resisting mortal pain.
2. **The Guardian:** You protect people by taking hits and putting yourself directly in the line of fire.
3. **The Sentinel:** You defend a space by holding territory and stopping enemies in their tracks.

Apply the _Defender Template_ and add some _condition_, _damage_, or _movement_ attacking actions. Use some of the example features below or build your own (for more details, see _Making Features_ (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='making-features']" }</span>).

\panelBegin { "class": "panel--role-template", "title": "Defender Template" }

* **<i class="fas fa-fw fa-shield"></i> Armor Class** <span data-blueprint="value">{ type: scaler.role.armorClass, role: defender }</span>
* **<i class="fas fa-fw fa-heart"></i> Hit Points** <span data-blueprint="value">{ type: scaler.role.hitPoints, role: defender }</span>
* **<i class="fas fa-fw fa-shield-plus"></i> T. Saving Throws** <span data-blueprint="value">{ type: scaler.role.trainedSavingThrows, role: defender }</span>
* **<i class="fas fa-fw fa-bolt"></i> Initiative** <span data-blueprint="value">{ type: scaler.role.initiativeBonus.proficiency, role: defender }</span>
* **<i class="fas fa-fw fa-tools"></i> Skill** <span data-blueprint="value">{ type: scaler.role.skill, role: defender }</span>
* **<i class="fas fa-fw fa-fire-flame-curved"></i> Attack Damage** <span data-blueprint="value">{ type: scaler.role.attackDamage, role: defender }</span>
* **<i class="fas fa-fw fa-shoe-prints"></i> Speed** <span data-blueprint="value">{ type: scaler.role.baseSpeed, role: defender }</span>
* <strong class="empty"></strong>

<div class="trait">
	<p><span data-blueprint="value">{ type: scaler.role.feature, role: defender }</span></p>
</div>

\panelEnd

\panelBegin { "type": "aside", "title": "Using Defenders" }

* Defenders are hard to hit—use them to draw fire and protect your vulnerable lurkers and skirmishers.
* Defenders are slower—pair them with supporters or use controllers to pull the enemy closer.

\panelEnd

\bannersBegin { "class": "banners--stretched role--powers" }

\bannerBegin { "title": "The Bulwark", "subtitle": "Endurance" }

**Raise Shield:** (Bonus Action, Uncommon) You gain +2 AC and advantage on one saving throw of your choice until the end of your next turn.

**Immunity:** (Bonus Action, Uncommon) You are immune to one damage type or one condition of your choice until the end of your next turn.

**Determination:** (Bonus Action, Uncommon) _Requires:_ you are below 25% hit points. _Effect:_ You gain temporary hit points equal to twice your combat level.

**Relentless:** (Free, Rare) When you are reduced to 0 hit points, you are instead reduced to 1 hit point.

**Shockproof:** (Bonus Action, Common) _Requires:_ You have at least 25% hit points. _Effect:_ Until the end of your next turn, any critical hit made against you counts as a normal hit.

\bannerEnd

\bannerBegin { "title": "The Guardian", "subtitle": "Protection" }

**Get Behind Me:** (Bonus Action, Uncommon, Concentration) Until the effect ends, adjacent allies count as having three-quarters cover.

**Hit Me:** (Action, Common, Concentration) Attack a target. _Effect:_ The creature is marked. A marked creature has disadvantage on any attack roll that doesn't include you.

**Shield Wall:** (Bonus Action, Common) You grant an adjacent target total cover until the start of your next turn. You must remain adjacent to the target to maintain this cover.

**Got Your Back:** (Reaction, Common) If you are adjacent to an ally that is the target of an attack which doesn't include you, you can redirect the attack onto yourself.

**I'm Right Beside You:** (Reaction, Common) When a nearby ally is attacked, you can move up to half your speed towards that ally.

\bannerEnd

\bannerBegin { "title": "The Sentinel", "subtitle": "Territory" }

**Watchful:** (Bonus Action, Common) Until the end of your next turn, creatures always provoke opportunity attacks from you (even if they disengage before leaving your reach).

**Difficult Space:** (Bonus Action, Common, Concentration) The space within your reach is difficult terrain to enemies.

**Stick Around:** (Action, Common) Attack a target. _Hit:_ The target is grappled by you.

**Dangerous Area:** (Bonus Action, Uncommon, Concentration) Any enemy that starts their turn within or moves into your reach takes damage equal to your combat level (once per turn).

**Trip:** (Free, Common) _Requires:_ You hit a target with an opportunity attack. _Effect:_ The target falls prone.

\bannerEnd

\bannersEnd

\contentEnd

\contentBegin { "class": "page--mm-combat-roles" }

## Lurkers

Lurkers lie in wait and stay out of sight until the enemy exposes a weak point—then they attack without mercy to cause _massive_ damage.

There are three common types of lurker:

1. **The Assassin:** Your trade is _death_ and you deal it with merciless precision.
2. **The Exploiter:** You exploit the enemy's weak points to turn inconveniences into catastrophes.
3. **The Sneak:** You use stealth and deception to hide yourself from prying eyes.

Apply the _Lurker Template_ and add some _damage_ or _destroy resource_ attacking actions. Use some of the example features below or build your own (for more details, see _Making Features_ (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='making-features']" }</span>).

\panelBegin { "class": "panel--role-template", "title": "Lurker Template" }

* **<i class="fas fa-fw fa-shield"></i> Armor Class** <span data-blueprint="value">{ type: scaler.role.armorClass, role: lurker }</span>
* **<i class="fas fa-fw fa-heart"></i> Hit Points** <span data-blueprint="value">{ type: scaler.role.hitPoints, role: lurker }</span>
* **<i class="fas fa-fw fa-shield-plus"></i> T. Saving Throws** <span data-blueprint="value">{ type: scaler.role.trainedSavingThrows, role: lurker }</span>
* **<i class="fas fa-fw fa-bolt"></i> Initiative** <span data-blueprint="value">{ type: scaler.role.initiativeBonus.proficiency, role: lurker }</span>
* **<i class="fas fa-fw fa-tools"></i> Skill** <span data-blueprint="value">{ type: scaler.role.skill, role: lurker }</span>
* **<i class="fas fa-fw fa-fire-flame-curved"></i> Attack Damage** <span data-blueprint="value">{ type: scaler.role.attackDamage, role: lurker }</span>
* **<i class="fas fa-fw fa-shoe-prints"></i> Speed** <span data-blueprint="value">{ type: scaler.role.baseSpeed, role: lurker }</span>
* <strong class="empty"></strong>

<div class="trait">
	<p><span data-blueprint="value">{ type: scaler.role.feature, role: lurker }</span></p>
</div>

\panelEnd

\panelBegin { "type": "aside", "title": "Using Lurkers" }

* With feeble defences and reduced hit points, lurkers can be glass cannons—put their increased damage to use as _secondary_ attackers.
* Keep your lurkers out of reach with speed and stealth, or pair them with defenders and supporters.

\panelEnd

\bannersBegin { "class": "banners--stretched role--powers" }

\bannerBegin { "title": "The Assassin", "subtitle": "Death" }

**Deathtouch:** (Free, Uncommon) _Requires:_ You critically hit a creature with an attack. _Effect:_ The creature immediately gains one failed death saving throw.

**The Grave Beckons:** (Action, Uncommon) Attack a target. _Hit:_ The target loses one unspent hit die (ongoing).

**Piercing Wounds:** (Bonus Action, Uncommon) Choose one damage type. Until the end of your next turn, your abilities ignore resistance to this damage and treat immunity as resistance.

**Marked for Death:** (Free, Uncommon, Concentration) _Requires:_ You hit a creature within 30 ft. of you that has 50% hit points or more. _Effect_: the creature is _marked for death_. While marked, if the creature is reduced to 0 hit points it suffers instant death.

**System Shock:** (Free, Uncommon) _Requires:_ You reduce a target to 0 hit points. _Effect:_ The target gains one level of exhaustion.

\bannerEnd

\bannerBegin { "title": "The Exploiter", "subtitle": "Weaknesses" }

**Stay Down:** (Action, Common) Attack a target. _Requires:_ The target is prone. _Hit:_ The target is restrained until the end of your next turn.

**Hold Still:** (Free, Common) _Requires:_ You hit a target that moved a net distance of 10 ft. or less during it's last turn. _Effect:_ The target falls prone.

**Sneak Attack:** (Free, Common) _Requires:_ You hit a target with an attack roll that has advantage. _Effect:_ You deal additional damage equal to your combat level.

**Jump Scare:** (Action, Uncommon) Attack a target. _Requires:_ The target is blinded or frightened. _Hit:_ The target is stunned until the end of your next turn.

**Pressure Point:** (Action, Uncommon) Attack a target. _Requires:_ The target is restrained. _Hit:_ The target is paralyzed until the end of your next turn.

\bannerEnd

\bannerBegin { "title": "The Sneak", "subtitle": "Stealth" }

**Guerilla:** (Bonus Action, Common) Until the end of your next turn, you don't reveal yourself or your place of hiding if you make an attack whilst hidden.

**Vanish:** (Action, Rare, Concentration) You become invisible. Making an attack or casting a spell ends this effect.

**Camouflage:** (Action, Uncommon) You blend into your surroundings and become completely indistinguishable from the environment. Moving, making an attack, or casting a spell ends this effect.

**Smoke Bomb:** (Bonus Action, Uncommon) Choose an area. _Effect:_ The area is heavily obscured until the end of your next turn.

**Flash Bomb:** (Action, Uncommon) Attack an area. _Hit:_ The target is blinded until the end of its next turn.

\bannerEnd

\bannersEnd

\contentEnd

\contentBegin { "class": "page--mm-combat-roles" }

## Skirmishers

Skirmishers outflank enemies with high mobility and keen perception, darting in and out of battle with ease as they dodge, duck, and dive their way through danger.

There are three common types of skirmisher:

1. **The Spotter:** You use your keen senses to spot dangers and call out warnings to your allies.
2. **The Evader:** You are hard to pin down, dodging attacks like a leaf on the wind.
3. **The Traveller:** You can move around the battlefield with ease—nowhere is off limits to you.

Apply the _Skirmisher Template_ and add some _condition_, _damage_ or _destroy resource_ attacking actions. Use some of the example features below or build your own (for more details, see _Making Features_ (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='making-features']" }</span>).

\panelBegin { "class": "panel--role-template", "title": "Skirmisher Template" }

* **<i class="fas fa-fw fa-shield"></i> Armor Class** <span data-blueprint="value">{ type: scaler.role.armorClass, role: skirmisher }</span>
* **<i class="fas fa-fw fa-heart"></i> Hit Points** <span data-blueprint="value">{ type: scaler.role.hitPoints, role: skirmisher }</span>
* **<i class="fas fa-fw fa-shield-plus"></i> T. Saving Throws** <span data-blueprint="value">{ type: scaler.role.trainedSavingThrows, role: skirmisher }</span>
* **<i class="fas fa-fw fa-bolt"></i> Initiative** <span data-blueprint="value">{ type: scaler.role.initiativeBonus.proficiency, role: skirmisher }</span>
* **<i class="fas fa-fw fa-tools"></i> Skill** <span data-blueprint="value">{ type: scaler.role.skill, role: skirmisher }</span>
* **<i class="fas fa-fw fa-fire-flame-curved"></i> Attack Damage** <span data-blueprint="value">{ type: scaler.role.attackDamage, role: skirmisher }</span>
* **<i class="fas fa-fw fa-shoe-prints"></i> Speed** <span data-blueprint="value">{ type: scaler.role.baseSpeed, role: skirmisher }</span>
* <strong class="empty"></strong>

<div class="trait">
	<p><span data-blueprint="value">{ type: scaler.role.feature, role: skirmisher }</span></p>
</div>

\panelEnd

\panelBegin { "type": "aside", "title": "Using Skirmishers" }

* With excellent speed, skirmishers excel at chasing down and harassing the enemy's back-line.
* Because of their high perception, skirmishers can make great detectives—use them to raise alarms and reveal hidden enemies.

\panelEnd

\bannersBegin { "class": "banners--stretched role--powers" }

\bannerBegin { "title": "The Spotter", "subtitle": "Perception" }

**Alway On Duty:** (Bonus Action, Uncommon, Concentration) You can't be surprised and hidden creatures don't gain advantage on attack rolls against you.

**Flare:** (Action, Uncommon) Attack a target. _Hit:_ The target is outlined in dim light until the end of your next turn. While outlined, attack rolls against the target have advantage (if the attacker can see it), and the target can't benefit from being invisible.

**Watch Out:** (Reaction, Uncommon) When a creature that you can see would be hit by an attack, you grant that ally +5 AC against the attack. You must be able to see the source of the attack, and the creature must be able to hear you.

**Sight Beyond Sight:** (Bonus Action, Uncommon) You gain blindsight 60 ft. until the end of your next turn.

**Subtle Vibrations:** (Bonus Action, Uncommon, Concentration) You gain tremorsense 30 ft.

\bannerEnd

\bannerBegin { "title": "The Evader", "subtitle": "Escape" }

**Relocate:** (Bonus Action, Rare, Concentration) You are banished. When the effect ends, you reappear in an unoccupied space within 30 ft.

**Sly Retreat:** (Reaction, Uncommon) When a creature moves adjacent to you or hits you with an attack, you move away up to half your speed. This movement does not provoke opportunity attacks.

**Dodge:** (Reaction, Uncommon) When you are hit by an attack, you halve the damage you would take.

**Invisible** (Bonus Action, Rare) Until the end of your next turn, you are invisible. This effect ends if you make an attack or cast a spell.

**Escape Artist:** (Reaction, Common) When you are grappled or placed in non-magical restraints, you can immediately escape or end the effect.

\bannerEnd

\bannerBegin { "title": "The Traveller", "subtitle": "Travel" }

**Dasher:** (Bonus Action, Uncommon) You take the Dash action.

**Freedom:** (Bonus Action, Common, Concentration) You suffer no movement penalty when squeezing through a space.

**Spider Climb:** (Bonus Action, Uncommon, Concentration) You can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.

**Liquid Snake:** (Bonus Action, Common, Concentration) You can stand on any liquid surface as if it were harmless solid ground.

**Flyer:** (Bonus Action, Uncommon, Concentration) You gain a flying speed equal to half your standard movement speed.

\bannerEnd

\bannersEnd

\contentEnd

\contentBegin { "class": "page--mm-combat-roles" }

## Strikers

Strikers hit the the enemy _hard_ with aggressive attacks and punishing damage. They are capable fighters, suitable for both front- and back-line positions.

There are three common types of striker:

1. **The Butcher:** You hunt lone targets and deal brutal damage with powerful attacks.
2. **The Deadeye:** You aim attacks with unerring precision, hitting reliably to keep up the pressure.
3. **The Havoc:** You dominate the battlefield with area effects to hit multiple enemies at once.

Apply the _Striker Template_ and add some _damage_ or _destroy resource_ attacking actions. Use some of the example features below or build your own (for more details, see _Making Features_ (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='making-features']" }</span>).

\panelBegin { "class": "panel--role-template", "title": "Striker Template" }

* **<i class="fas fa-fw fa-shield"></i> Armor Class** <span data-blueprint="value">{ type: scaler.role.armorClass, role: striker }</span>
* **<i class="fas fa-fw fa-heart"></i> Hit Points** <span data-blueprint="value">{ type: scaler.role.hitPoints, role: striker }</span>
* **<i class="fas fa-fw fa-shield-plus"></i> T. Saving Throws** <span data-blueprint="value">{ type: scaler.role.trainedSavingThrows, role: striker }</span>
* **<i class="fas fa-fw fa-bolt"></i> Initiative** <span data-blueprint="value">{ type: scaler.role.initiativeBonus.proficiency, role: striker }</span>
* **<i class="fas fa-fw fa-tools"></i> Skill** <span data-blueprint="value">{ type: scaler.role.skill, role: striker }</span>
* **<i class="fas fa-fw fa-fire-flame-curved"></i> Attack Damage** <span data-blueprint="value">{ type: scaler.role.attackDamage, role: striker }</span>
* **<i class="fas fa-fw fa-shoe-prints"></i> Speed** <span data-blueprint="value">{ type: scaler.role.baseSpeed, role: striker }</span>
* <strong class="empty"></strong>

<div class="trait">
	<p><span data-blueprint="value">{ type: scaler.role.feature, role: striker }</span></p>
</div>

\panelEnd

\panelBegin { "type": "aside", "title": "Using Strikers" }

* Strikers are reliable damage dealers and make great _primary_ attackers in any battle.
* Use strikers when you want to take the fight right to the enemy, or to provide cover for your more vulnerable lurkers and skirmishers.

\panelEnd

\bannersBegin { "class": "banners--stretched role--powers" }

\bannerBegin { "title": "The Butcher", "subtitle": "Single Target" }

**Brutal Attack:** (Action, Rare) Attack a target. _Hit:_ The target takes 200% damage.

**Rend:** (Action, Uncommon) Attack a target. _Hit:_ The target takes 125% damage (ongoing).

**Curse:** (Action, Uncommon, Concentration) Attack a target. _Hit:_ The target takes 125% damage.

**Bleed:** (Action, Uncommon) Attack a target. _Hit:_ The target loses one unspent hit die (ongoing).

**Aggression:** (Bonus Action, Uncommon) Until the end of your next turn, your critical hit range increases by +1. In addition, you make your next attack roll with advantage.

\bannerEnd

\bannerBegin { "title": "The Deadeye", "subtitle": "Reliability" }

**Take Aim:** (Bonus Action, Common) _Requires:_ You can't move during your turn. _Effect:_ Make your next attack roll with advantage.

**Extra Lucky:** (Bonus Action, Uncommon, Concentration) If you make an attack and roll a natural 1 or 2, reroll it. You must use the new result.

**Reliable Attacker:** (Free, Uncommon) When you make an attack roll, treat it as a natural 11. You may decide this after seeing the initial result.

**Quick Charger:** (Bonus Action, Uncommon) Choose one of your uncommon features and then a) reduce the cooldown by 1, b) reroll a recharge, or c) gain +1 charge.

**Try Again:** (Reaction, Common)  _Requires:_ You missed with an attack roll by 1, 2, or 3. _Effect:_ Reroll the attack. You must use the new result.

\bannerEnd

\bannerBegin { "title": "The Havoc", "subtitle": "Multiple Targets" }

**Blast:** (Action, Uncommon) Attack an area. _Hit:_ The target takes 100% damage. _Miss:_ Half damage.

**Oblivion:** (Action, Rare) Attack an area. _Hit:_ The target takes 175% damage.

**Void Magic:** (Action, Uncommon) Attack an area. _Hit:_ The target loses their lowest unspent spell slot.

**Destruction:** (Action, Uncommon, Concentration) Attack an area. _Hit:_ The target takes 100% damage.

**Drain Life:** (Action, Rare) Attack an area. _Hit:_ The target gains one level of exhaustion.

\bannerEnd

\bannersEnd

\contentEnd

\contentBegin { "class": "page--mm-combat-roles" }

## Supporters

Supporters are the glue that binds a team together, helping rag-tag fighters to reach their true potential by providing leadership and aid where needed.

There are three common types of supporter:

1. **The Booster:** You empower your allies with buffs and enchantments.
2. **The Leader:** You direct your allies in battle with tactics and strategy.
3. **The Mender:** You keep your allies in prime condition, healing wounds and raising spirits.

Apply the _Supporter Template_ and add some _damage_, _empowering_, or _terrain_ attacking actions. Use some of the example features below or build your own (for more details, see _Making Features_ (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='making-features']" }</span>).

\panelBegin { "class": "panel--role-template", "title": "Supporter Template" }

* **<i class="fas fa-fw fa-shield"></i> Armor Class** <span data-blueprint="value">{ type: scaler.role.armorClass, role: supporter }</span>
* **<i class="fas fa-fw fa-heart"></i> Hit Points** <span data-blueprint="value">{ type: scaler.role.hitPoints, role: supporter }</span>
* **<i class="fas fa-fw fa-shield-plus"></i> T. Saving Throws** <span data-blueprint="value">{ type: scaler.role.trainedSavingThrows, role: supporter }</span>
* **<i class="fas fa-fw fa-bolt"></i> Initiative** <span data-blueprint="value">{ type: scaler.role.initiativeBonus.proficiency, role: supporter }</span>
* **<i class="fas fa-fw fa-tools"></i> Skill** <span data-blueprint="value">{ type: scaler.role.skill, role: supporter }</span>
* **<i class="fas fa-fw fa-fire-flame-curved"></i> Attack Damage** <span data-blueprint="value">{ type: scaler.role.attackDamage, role: supporter }</span>
* **<i class="fas fa-fw fa-shoe-prints"></i> Speed** <span data-blueprint="value">{ type: scaler.role.baseSpeed, role: supporter }</span>
* <strong class="empty"></strong>

<div class="trait">
	<p><span data-blueprint="value">{ type: scaler.role.feature, role: supporter }</span></p>
</div>

\panelEnd

\panelBegin { "type": "aside", "title": "Using Supporters" }

* Supporters are decent all-rounders and, with boosted hit points, can endure a few good hits—use them to reinforce and empower your other units.
* With improved initiative, supporters are more likely to act first—use this to gain the upper hand.

\panelEnd

\bannersBegin { "class": "banners--stretched role--powers" }

\bannerBegin { "title": "The Booster", "subtitle": "Enhancements" }

**Ferocity:** (Action, Uncommon) Choose allies within an area. _Effect:_ Until the end of their next turn, each ally increases their critical hit range by +1 and may reroll any attack that is a natural 1.

**Piercing:** (Action, Common) Choose one ally. _Effect:_ Until the end of their turn, the ally's attacks ignore resistance to one damage type and treat immunity as if it were resistance.

**Enchanter:** (Bonus Action, Uncommon, Concentration) Choose allies within an area. _Effect:_ Each ally may change their attack damage type to one of your choosing.

**Haste:** (Bonus Action, Uncommon, Concentration) Choose one ally. _Effect:_ The ally gains +10 speed.

**Recharger:** (Bonus Action, Rare) Choose one ally. _Effect:_ The ally may immediately recharge one exhausted uncommon feature.

\bannerEnd

\bannerBegin { "title": "The Leader", "subtitle": "Teamwork" }

**Commander:** (Action, Common) Choose one ally. _Effect:_ The ally may spend its reaction to make a basic attack against a target of your choice.

**Checkmate:** (Action, Common) Choose one ally. _Effect:_ You move the ally 10 ft. in a direction of your choice. This movement does not provoke attacks of opportunity.

**Direct the Attack:** (Action, Common) Attack a target. _Effect:_ The creature is marked until the end of your next turn. Allies have advantage on their first attack roll made against the marked creature.

**Not Like That:** (Reaction, Uncommon) When an ally misses an attack, it may reroll the attack with advantage.

**Mass Teleport:** (Action, Rare) Choose allies within an area. _Effect:_ Each ally is teleported to an unoccupied space of your choice within 40 ft. of their original position.

\bannerEnd

\bannerBegin { "title": "The Mender", "subtitle": "Healing" }

**Purifier:** (Action, Common) Choose one ally. _Effect:_ The ally may reroll a failed saving throw against an ongoing effect.

**Shielder:** (Action, Uncommon) Choose one ally. _Effect:_ The ally gains temporary hit points equal to three times your combat level.

**Not On My Watch:** (Reaction, Rare) When an ally would be reduced to 0 hit points, you reduce it to 1 hit point instead.

**Mass Heal:** (Action, Rare) Choose allies within an area. _Effect:_ The ally regains hit points equal to twice your combat level.

**Regenerator:** (Action, Rare, Concentration) Choose one ally. _Effect:_ the ally regains hit points equal to twice your combat level.

\bannerEnd

\bannersEnd

\contentEnd