\contentBegin { "class": "page--mm-combat-levels", "header": "medal-skull", "bg": "pages/text/bg-glyph.png" }

# Combat Levels

To overcome the enemy, you must first _understand_ the enemy: what are their strengths and weaknesses, and just how much danger are you in? Knowledge is power—but how do you _describe_ danger in simple terms? And how can you use ratings to set the strength of your scalers?

This chapter introduces _combat levels_ and their gameplay purpose, how to use them, and how you can integrate them with _challenge ratings_.

## Choosing a Level

Scaling monsters use _combat levels_ (i.e. character levels) to set their core attributes (ability modifiers, hit points, average damage, etc.)—the higher the level, the higher these core attributes will be.

Your first step in creating a new scaling monster is (typically) to choose their level, and there are three common approaches:

<ol type="A">
	<li><strong>Target the Party:</strong> Build monsters to combat a specific group of players based on the <em>average party level</em>.</li>
	<li><strong>Target a Region:</strong> Build monsters to populate a specific region base on the <em>average region level</em>.</li>
	<li><strong>Target a Tier:</strong> Build monsters for a particular tier of gameplay—adventurer, heroic, paragon, or epic.</li>
</ol>

\panelBegin { "class": "panel--aside", "title": "Core vs. Extended Combat Features" }

Combat levels set _core_ combat features—hit points, attack bonuses, armor classes, saving throws, etc.

Once these core details are in place, you can add _extended_ combat features (if necessary) to flesh out your creation—immunities, vulnerabilities, actions, etc.

\panelEnd

\columnbreak

### Target the Party { "index": "A" }

If you want to combat a specific adventuring party, target the _average party level_. You can create a **weaker** monster by going _below_ the average party level or a **stronger** monster by going _above_ it.

Use this approach when you want to build some _narrative_ content to scale alongside your players.

\panelBegin { "class": "panel--table panel--party-level", "title": "Party Combat Level" }

|Challenge|Combat Level|
|:-:|:-:|
|Weak|Average Party Level - 3|
|Competent|Average Party Level|
|Strong|Average Party Level + 3|

\panelEnd

\exampleBegin

The GM wants to create a group of orc warlocks to fight a 5th-level adventuring party. The orcs are intended to be a _competent_ threat, so the GM makes them 5th-level to match the party.

Another GM wants to build a combat encounter for a varied adventuring party—two 2nd-level characters and three 4th-level characters. The _average party level_ is 3, so the GM uses 3rd-level scalers in the battle.

\exampleEnd

### Target a Region { "index": "B" }

If you want to populate a region (a dark dungeon, a sinister forest, a cosmic plane, etc.), target the _average region level_. You can create a **weaker** monster by going _below_ the average region level or a **stronger** monster by going _above_ it.

Use this approach when you want to build some _sandbox_ content with a fixed challenge for your world (e.g. a hexcrawl or dungeoncrawl).

\contentEnd

\contentBegin { "class": "page--mm-combat-levels" }

\panelBegin { "class": "panel--table panel--region-level", "title": "Region Combat Level" }

|Challenge|Combat Level|
|:-:|:-:|
|Weak|Average Region Level - 3|
|Competent|Average Region Level|
|Strong|Average Region Level + 3|

\panelEnd

\exampleBegin

The GM wants to create some encounters in the _Firemaw Basin_, a 7th-level adventuring region in their hexcrawl-style campaign.

With an _average region level_ of 7, the GM can comfortably use a range of combat levels from 4th-level (weak) to 10th-level (strong).

\exampleEnd

### Pick a Power Tier { "index": "C" }

If you want to build content for a _power tier_ (adventurer, heroic, paragon, and epic), target a level range.

Use this approach when you want to build some _shareable_ content that others can easily drop into their own games and campaign settings.

\panelBegin { "class": "panel--table panel--power-tier", "title": "Tiered Combat Level" }

|Tier|Combat Level|
|:-:|:-:|
|Adventurer|1-4|
|Heroic|5-10|
|Paragon|11-16|
|Epic|17+|

\panelEnd

\exampleBegin

The GM wants to create some scaling monsters for an adventure they plan to share online.

The adventure is to be set in the _Heroic_ tier of gameplay, and so the GM uses a range of combat levels from 5th-level to 10th-level.

\exampleEnd

## Challenge Ratings

_Challenge ratings_ (CR) are another means of describing danger. To find out what challenge rating your scaling monster has (or to convert a static monster into a scaler) use the _Combat Levels to Challenge Ratings_ table.

When you convert scalers from _combat levels_ to _challenge ratings_ (and vice versa), be aware that this is more _art_ than science: no two scalers are 100% alike, and depending on the particulars of your NPC you may wish to make some modifications to keep the threat inline with expectations. For example:

* Adjust the armor class and/or hit points to make your scaler more (or less) durable.
* Change attack bonuses to hit more (or less) often.
* Add some paragon power.
* Add or remove some damage/condition immunities.
* Apply a combat role.
* Boost damage to keep your players on edge.
* Add some extra movement options.

\columnbreak

\panelBegin { "class": "panel--table", "title": "Combat Levels to Challenge Ratings" }

<table class="table--challenge-ratings">
  <colgroup>
    <col>
    <col>
    <col>
    <col>
    <col>
  </colgroup>
	<thead>
		<tr>
			<th rowspan="2">Combat Level</th>
			<th colspan="4"><span class="spacer">Challenge Rating (CR)</span></th>
		</tr>
		<tr>
			<th>Minion</th>
			<th>Grunt</th>
			<th>Elite</th>
			<th>Paragon T4</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>0</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 0, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 0, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 0, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 0, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>1</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 1, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 1, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 1, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 1, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>2</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 2, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 2, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 2, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 2, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>3</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 3, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 3, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 3, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 3, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>4</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 4, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 4, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 4, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 4, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>5</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 5, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 5, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 5, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 5, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>6</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 6, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 6, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 6, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 6, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>7</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 7, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 7, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 7, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 7, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>8</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 8, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 8, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 8, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 8, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>9</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 9, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 9, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 9, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 9, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>10</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 10, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 10, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 10, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 10, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>11</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 11, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 11, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 11, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 11, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>12</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 12, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 12, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 12, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 12, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>13</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 13, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 13, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 13, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 13, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>14</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 14, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 14, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 14, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 14, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>15</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 15, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 15, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 15, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 15, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>16</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 16, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 16, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 16, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 16, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>17</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 17, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 17, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 17, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 17, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>18</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 18, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 18, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 18, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 18, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>19</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 19, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 19, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 19, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 19, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>20</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 20, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 20, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 20, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 20, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>21</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 21, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 21, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 21, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 21, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>22</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 22, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 22, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 22, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 22, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>23</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 23, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 23, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 23, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 23, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>24</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 24, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 24, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 24, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 24, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>25</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 25, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 25, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 25, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 25, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>26</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 26, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 26, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 26, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 26, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>27</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 27, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 27, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 27, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 27, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>28</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 28, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 28, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 28, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 28, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>29</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 29, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 29, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 29, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 29, rank: paragon, threat: 4 }</span></td>
		</tr>
		<tr>
			<td>30</td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 30, rank: minion }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 30, rank: grunt }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 30, rank: elite }</span></td>
			<td><span data-blueprint="value">{ type: scaler.cr, level: 30, rank: paragon, threat: 4 }</span></td>
		</tr>
	</tbody>
</table>

\panelEnd

\exampleBegin

The GM wants to use a remorhaz (a CR 11 monster worth 7,200 XP) in an encounter alongside some scalers. This CR 11 monster can be used as if it were an 11th-level Paragon, a 16th-level elite, a 21st-level grunt, or a 28th-level minion.

Later, the GM creates a new monster–a 7th-level grunt. Using the table above, the GM can see that this monster has a _challenge rating_ of CR <span data-blueprint="value">{ type: scaler.cr, level: 7, rank: grunt }</span>.

\exampleEnd

\panelBegin { "class": "panel--aside", "title": "Danger is Relative" }

Danger ratings are rarely absolute; each encounter is a unique combination of variables (party composition, player knowledge, magic items, encounter layout, etc.), where some combat features may be overpowered whilst others are never used at all. 

What _objective_ value is fire immunity, for example, if the party never deals fire damage?

For this reason, extended combat features (such as traits, immunities, resistances, and abilities) don't impact a scaler's combat level or challenge rating.

\panelEnd

\contentEnd