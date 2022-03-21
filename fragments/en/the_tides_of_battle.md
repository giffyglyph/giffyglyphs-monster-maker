\contentBegin { "class": "page--mm-the-tides-of-battle", "header": "bleeding-eye", "bg": "pages/text/bg-glyph.png" }

# The Tides of Battle

Blood spills and tempers fray in battle, and only the _luckiest_ of monsters will survive a battle unscathed and unbloodied. When you take damage, how does it affect you and the way you fight?

This chapter introduces _battletide conditions_ and new _battletide effects_ to help you shake things up when your monsters start to take damage.

## Battletide Conditions

A monster's battle status can be described with three new conditions: _refreshed_, _bloodied_, and _enraged_. These conditions are gained and lost automatically as-and-when taking damage or receiving healing.

### Refreshed { "index": 1 }

While a grunt, elite, or paragon is undamaged (i.e. at 100% hit points), it is _refreshed_ and full of vigor.

### Bloodied { "index": 2 }

When a grunt, elite, or paragon suffers a notable wound of some kind (i.e. at 50% hit points or, in the case of paragons, 66%), it becomes _bloodied_.

When this condition is triggered, announce it with a clear description to showcase the shifting tide of battle—use it to excite, emphasize, and refocus attention.

### Enraged { "index": 3 }

When a paragon suffers a serious wound (i.e. at 33% hit points), it becomes _enraged_.

This is a moment of <em>dramatic escalation</em>—the paragon is backed into a corner and fighting for its life, so be bold with your descriptions.

\columnbreak

<div data-blueprint="condition">
---
name: Refreshed
icon: battery-100
severity: battletide
details:
  - <strong>Grunt/Elite/Paragon:</strong> You are at 100% hit points.
</div>

<div data-blueprint="condition">
---
name: Bloodied
icon: battery-50
severity: battletide
details:
  - <strong>Grunt/Elite:</strong> You are at 50% hit points or fewer.
  - <strong>Paragon:</strong> You are at 66% hit points or fewer.
</div>

<div data-blueprint="condition">
---
name: Enraged
icon: battery-25
severity: battletide
details:
  - <strong>Paragon:</strong> You are at 33% hit points or fewer.
</div>

\exampleBegin

Viridian is locked in battle with Sulfurak—an elite fire elemental with a burning temper. With a deft attack, the tiefling manages to bring Sulfurak below 50% hit points.

---

* **GM:** Sulfurak roars angrily and turns to face you, Viridian, eyes blazing with blue fire. It is _bloodied_, and it is _angry_...

\exampleEnd

\panelBegin { "type": "aside", "title": "Minions" }

Battletide conditions and effects affect only grunts, elites, and paragons. Minions (with low hit points and weak defences) aren't _important_ enough to track—they are never refreshed, bloodied, or enraged.

\panelEnd

\contentEnd

\contentBegin { "class": "page--mm-the-tides-of-battle" }

## Battletide Effects

As the tide of battle ebbs and flows, some monsters grow stronger or weaker—a _refreshed_ elf moves across the battlefield with extra grace, a _bloodied_ goblin is frightened by its attacker, an _enraged_ dragon breathes empowered dragonfire.

_Battletide effects_ change a monster's abilities according to their condition. There are three categories of effect: strengthening, weakening, and transformation. 

* **Strengthening** effects empower a monster with new or improved features.
* **Weakening** effects diminish a monster and make them easier to overcome.
* **Transformation** effects change a monster's fundamental capabilities in some fashion—movement types, size categories, combat roles, keywords, etc.

By using different effect categories, you can drastically alter the _tone_ and _combat potential_ of a monster; a defender who gets _tougher_ when they are bloodied tells a very different story from a defender who gets _weaker_ when they are bloodied.

Choose effects that best suit the _fiction_ of your scaling monster—for example:

<div data-blueprint="action">
name: Defensive Stance
subtitle: Battletide Effect (Strengthening)
actionType: Trait
body: |
  <p><strong class="title common"></strong>While you are bloodied, increase your AC by 1.</p>
</div>

<div data-blueprint="action">
name: Cracked Armor
subtitle: Battletide Effect (Weakening)
actionType: Trait
body: |
  <p><strong class="title common"></strong>While you are bloodied, decrease your AC by 1.</p>
</div>

### Individual Effects { "index": "A"}

To create a battletide effect for a scaling monster, follow these three steps:

1. **Condition:** Choose a battletide condition—refreshed, bloodied, or enraged.
2. **Category:** Decide if the monster is _stronger_, _weaker_, or _transformed_ in this condition.
3. **Effect:** Pick an effect from one of the _Battletide Effects_ tables, or create your own.

Use these effects to showcase how your monsters react under pressure.

\exampleBegin

The GM wants Sulfurak to get _stronger_ when it is bloodied to reflect the elemental's temperament.

The fire elemental burns with increased fury and searing heat, so the GM chooses the _Extender_ effect: Sulfurak's reach extends by 5 ft.

\exampleEnd

\columnbreak

### Group Effects { "index": "B"}

Battletide effects can also be used on large groups to reflect encounter-wide features—morale, loyalty, teamwork, lair effects, combat synergies, etc.

To create a battletide effect for a group of monsters, follow these three steps:

1. **Condition:** Choose a battletide condition (refreshed, bloodied, or enraged) and a particular group of monsters that should be affected.
2. **Category:** Decide if the affected monsters are _stronger_, _weaker_, or _transformed_ in this condition.
3. **Effect:** Pick an effect from one of the _Battletide Effects_ tables, or create your own.
4. **Percentage:** Finally, choose the percentage of active monsters that must be in this condition for the effect to trigger—typically 50%, 75%, or 100%. The higher the percentage, the harder it is to trigger this effect.

You can use these effects to influence the pace of your combat encounters—for example:

* **Escalation:** When at least 50% of the targeted monsters are bloodied, the battle gets _harder_.
* **Rout:** When at least 50% of the targeted monsters are bloodied, the battle gets _easier_.
* **Strike Team:** When at least 50% of the targeted monsters are refreshed, the battle gets _harder_.
* **Spike:** When a paragon is bloodied, the battle gets <em>easier</em>—but when enraged, the battle gets _harder_.

\exampleBegin

Sulfurak is accompanied by 3 _searing hearts_. The GM wants these grunts to get weaker when at least 2 of them are bloodied—they gain the _Fragile Hearts_ trait.

\exampleEnd

<div data-blueprint="action">
name: Fragile Hearts
subtitle: Battletide Effect (Weakening)
actionType: Trait
body: |
  <p><strong class="title common"></strong>When at least 50% of the <em>searing hearts</em> are bloodied, attacks made against any <em>searing heart</em> will critically hit on a roll of 19-20.</p>
</div>

\panelBegin { "class": "panel--aside", "title": "How Many Effects?" }

Battletide effects can be a fun and _flavorful_ way to add narrative-rich quirks and combat descriptions to your scaling monsters and encounters.

But be careful not to go overboard—not everything needs a battletide effect. Keep it simple, and when in doubt use the following rule of thumb:

---

* A **minion** has 0 effects.
* A **grunt** may have 0-1 effects.
* An **elite** may have 0-2 effects.
* A **paragon** may have 0-3 effects.
* An **encounter** may have 0-2 group effects.

\panelEnd

\contentEnd

\contentBegin { "class": "page--mm-the-tides-of-battle page--columns-1" }

\panelBegin { "class": "panel--table battletide-effects", "title": "Battletide Effects" }

<table>
  <colgroup>
    <col>
    <col>
    <col>
  </colgroup>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>While/when you are [condition]...</th>
    </tr>
  </thead>
  <tbody>
    <tr>
			<th colspan="3" class="header"><span>Strengthening</span></th>
		</tr>
    <tr>
      <td>1</td>
      <td>Defensive</td>
      <td>Increase your AC by 1.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Shielded</td>
      <td>You immediately gain temporary hit points equal to twice your combat level.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Powerful</td>
      <td>Once per round, you deal additional damage equal to your combat level.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Resistant</td>
      <td>You gain a damage resistance.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Immune</td>
      <td>You gain a damage or condition immunity.</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Gather Power</td>
      <td>Increase your maximum paragon power by +1.</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Momentum</td>
      <td>Your maximum speed increases by 5 ft.</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Shake It Off</td>
      <td>You can immediately remove one negative condition on yourself.</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Precise</td>
      <td>Increase your attack bonus and DCs by 1.</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Piercing</td>
      <td>Your attacks ignore a damage resistance and reduce a resistance to immunity.</td>
    </tr>
    <tr>
      <td>11</td>
      <td>Unlocked</td>
      <td>You gain access to a new action.</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Brutal</td>
      <td>You critically hit on a roll of 19-20.</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Counterattack</td>
      <td>You can immediately make a basic attack against your attacker.</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Impenetrable</td>
      <td>Once per short rest, you gain one use of paragon defence.</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Saver</td>
      <td>You roll one type of saving throw with advantage.</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Extender</td>
      <td>Your reach extends by 5 ft.</td>
    </tr>
    <tr>
      <td>17</td>
      <td>Actor</td>
      <td>You can take one additional action on your next turn.</td>
    </tr>
    <tr>
      <td>18</td>
      <td>Dasher</td>
      <td>You can dash as a bonus action on your next turn.</td>
    </tr>
    <tr>
      <td>19</td>
      <td>Recharger</td>
      <td>You can immediately recharge one ability and then use it against your attacker.</td>
    </tr>
    <tr>
      <td>20</td>
      <td>Corruptor</td>
      <td>You can immediately inflict a status condition on your attacker until the end of their next turn.</td>
    </tr>
    <tr>
      <td>21</td>
      <td>Relocator</td>
      <td>You can immediately teleport adjacent to the source of the attack that harmed you.</td>
    </tr>
    <tr>
      <td>22</td>
      <td>Get&nbsp;Over&nbsp;Here</td>
      <td>You can immediately teleport your attacker to a space within your reach.</td>
    </tr>
    <tr>
      <td>23</td>
      <td>Turtle</td>
      <td>You are resistant to all damage until the start of your next turn.</td>
    </tr>
    <tr>
      <td>24</td>
      <td>Call of Alarm</td>
      <td>You immediately gain 1 summoning point (see p<span data-blueprint="value">{ type: page.number, selector: "h1[id='the-summoner']" }</span>).</td>
    </tr>
    <tr>
      <td>25</td>
      <td>Ranger</td>
      <td>The range of your attacks is doubled.</td>
    </tr>
    <tr>
      <td>26</td>
      <td>Leaper</td>
      <td>You can immediately leap to an unoccupied space within 15 ft.</td>
    </tr>
    <tr>
      <td>27</td>
      <td>Focused</td>
      <td>You have advantage on concentration saving throws.</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Disruptor</td>
      <td>Targets of your attacks have disadvantage on concentration saving throws.</td>
    </tr>
    <tr>
			<th colspan="3" class="header"><span>Weakening</span></th>
		</tr>
    <tr>
      <td>29</td>
      <td>Cracked</td>
      <td>Decrease your AC by 1.</td>
    </tr>
    <tr>
      <td>30</td>
      <td>Feeble</td>
      <td>You deal reduced damage equal to your combat level.</td>
    </tr>
    <tr>
      <td>31</td>
      <td>Vulnerable</td>
      <td>You either a) gain a damage vulnerability or b) lose a damage or condition immunity.</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Lose Power</td>
      <td>Reduce your maximum paragon power per round by 1.</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Stumble</td>
      <td>Your maximum speed is reduced by 5 ft.</td>
    </tr>
    <tr>
      <td>34</td>
      <td>Condition</td>
      <td>You immediately gain a status condition until the end of your next turn (eg. frightened).</td>
    </tr>
    <tr>
      <td>35</td>
      <td>Distracted</td>
      <td>Reduce your attack bonus and DCs by 1.</td>
    </tr>
    <tr>
      <td>36</td>
      <td>Locked</td>
      <td>You lose access to a specific action.</td>
    </tr>
    <tr>
      <td>37</td>
      <td>Fragile</td>
      <td>The critical hit range of your attackers increases by 1.</td>
    </tr>
    <tr>
      <td>38</td>
      <td>Flawed</td>
      <td>You roll one type of saving throw with disadvantage.</td>
    </tr>
    <tr>
      <td>39</td>
      <td>Shortsighted</td>
      <td>The range of your attacks is halved.</td>
    </tr>
    <tr>
      <td>40</td>
      <td>Clumsy</td>
      <td>You critically miss on a roll of 1-2.</td>
    </tr>
    <tr>
			<th colspan="3" class="header"><span>Transformation</span></th>
		</tr>
    <tr>
      <td>41</td>
      <td>Traveller</td>
      <td>You gain a new movement type.</td>
    </tr>
    <tr>
      <td>42</td>
      <td>Role Call</td>
      <td>You change your combat role.</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Grow</td>
      <td>Your size category increases by 1.</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Shrink</td>
      <td>Your size category decreases by 1.</td>
    </tr>
    <tr>
      <td>45</td>
      <td>Category</td>
      <td>You change your monster category.</td>
    </tr>
    <tr>
      <td>46</td>
      <td>Damage Type</td>
      <td>Your attacks deal a new damage type.</td>
    </tr>
    <tr>
      <td>47</td>
      <td>Sensitive</td>
      <td>You gain a new sense.</td>
    </tr>
    <tr>
      <td>48</td>
      <td>Shifter</td>
      <td>You take on a new form.</td>
    </tr>
    <tr>
      <td>49</td>
      <td>Realignment</td>
      <td>Your alignment changes.</td>
    </tr>
    <tr>
      <td>50</td>
      <td>Ticking Bomb</td>
      <td>You become a ticking bomb. At the end of your next turn, you explode. All targets within reach take damage equal to your remaining HP.</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Painful Aura</td>
      <td>You gain a damaging aura. Creatures that enter or start their turn within your aura take damage equal to your combat level.</td>
    </tr>
    <tr>
      <td>52</td>
      <td>Trailblazer</td>
      <td>When you move through a space, that space is corrupted until the start of your next turn. Creatures that enter or start their turn in corrupted ground take damage equal to your combat level.</td>
    </tr>
    <tr>
      <td>53</td>
      <td>Weaponized</td>
      <td>You gain a new weapon or form of attack.</td>
    </tr>
  </tbody>
</table>

\panelEnd

\contentEnd