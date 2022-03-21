\contentBegin { "class": "page--mm-randomizing-damage", "header": "random", "bg": "pages/text/bg-glyph.png" }

# Randomizing Damage

This supplement uses static, _average_ values when describing features such as hit points and damage—static numbers are _much_ easier to work with when crafting attacks and making new monsters.

But what do you do if you want to add some _variety_ to your hit points and attack damage—or you just _really_ like to roll dice?

This chapter describes how you can convert static numbers into randomized dice rolls.

## Static to Random

To create a randomized roll from a static value, just follow these three simple steps:

<!-- * **Get the static average:** Find your static _base damage_ value—for scalers, this is typically listed as their DMG.
* **Choose an attack type:** Decide how accurate or unpredictable the randomized damage should be—the wilder the attack, the bigger the dice you roll.
* **Randomize the damage:** Use the _Randomized Damage_ table to convert that static value into a dice roll. -->

### Choose an Average Result { "index": "1" }

First, choose a number to act as the _average result_ for your random dice roll.

You can turn any static number (typically hit points or damage) into a random roll, and you can randomize either _all of_ or _part of_ the total amount.

\exampleBegin

_Gannimor Strax_ is a ferocious orc pit-fighter who dual-wields a battle axe and dagger in battle. As a 5th-level elite striker, the orc has a base damage of 14.

---

The GM wants to randomize Gannimor's damage and starts to create rolls for the orc's axe and dagger attacks—both with a _target average_ of 14.

The GM _could_ randomize the orc's hit points using the same process, but chooses not to—they decide that it wouldn't add any noticeable variety because Gannimor is already one-of-a-kind.

\exampleEnd

\columnbreak

### Choose a Random Range { "index": "2" }

Now decide how _unpredictable_ you want the result to be—the more chaotic, the bigger the dice you roll and the wider the range of possible results.

There are 7 basic categories to choose from: accurate (d4), predictable (d6), reliable (d8), irregular (d10), volatile (d12), wild (d20), and chaotic (d100).

\exampleBegin

Gannimor is reckless with his axe and precise with his dagger. To reflect this, the GM opts for _volatile_ (d12) axe damage and _accurate_ (d4) dagger damage.

\exampleEnd

### Create a Randomized Roll { "index": "3" }

Finally, look through the _Dice Rolls_ table to find a suitable dice roll for your range and target average.

\exampleBegin

The GM finds two dice rolls that are a good fit—2d12 (averaging 13) and 4d4 (averaging 10). Gannimor's profile is updated with two attack options:

---

* **Attack (Axe):** 2d12 + 1 _(14 - 13)_
* **Attack (Dagger):** 4d4 + 4 _(14 - 10)_

\exampleEnd

\panelBegin { "class": "panel--aside", "title": "Wild Swings" }

Rolling big dice for your damage (d10s, d12s, etc) is exciting but _can_ lead to some swingy combat. Use a variety of dice options to keep things interesting and control the tempo of your monsters.

\panelEnd

\contentEnd

\contentBegin { "class": "page--mm-randomizing-damage page--columns-1" }

\panelBegin { "type": "table", "class": "panel--random-rolls", "title": "Dice Rolls" }

<table class="table--random-damage">
	<thead>
		<tr>
			<th>Dice Roll</th>
			<th>Average</th>
			<th>Common Range</th>
			<th>Max</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th colspan="4" class="header"><span>Accurate</span></th>
		</tr>
		<tr data-die=4 data-count=1></tr>
		<tr data-die=4 data-count=2></tr>
		<tr data-die=4 data-count=3></tr>
		<tr data-die=4 data-count=4></tr>
		<tr data-die=4 data-count=5></tr>
		<tr data-die=4 data-count=6></tr>
		<tr data-die=4 data-count=7></tr>
		<tr data-die=4 data-count=8></tr>
		<tr data-die=4 data-count=9></tr>
		<tr data-die=4 data-count=10></tr>
		<tr data-die=4 data-count=11></tr>
		<tr data-die=4 data-count=12></tr>
		<tr data-die=4 data-count=13></tr>
		<tr data-die=4 data-count=14></tr>
		<tr data-die=4 data-count=15></tr>
		<tr data-die=4 data-count=16></tr>
		<tr>
			<th colspan="4" class="header"><span>Predictable</span></th>
		</tr>
		<tr data-die=6 data-count=1></tr>
		<tr data-die=6 data-count=2></tr>
		<tr data-die=6 data-count=3></tr>
		<tr data-die=6 data-count=4></tr>
		<tr data-die=6 data-count=5></tr>
		<tr data-die=6 data-count=6></tr>
		<tr data-die=6 data-count=7></tr>
		<tr data-die=6 data-count=8></tr>
		<tr data-die=6 data-count=9></tr>
		<tr data-die=6 data-count=10></tr>
		<tr data-die=6 data-count=11></tr>
		<tr data-die=6 data-count=12></tr>
		<tr data-die=6 data-count=13></tr>
		<tr data-die=6 data-count=14></tr>
		<tr data-die=6 data-count=15></tr>
		<tr data-die=6 data-count=16></tr>
		<tr>
			<th colspan="4" class="header"><span>Reliable</span></th>
		</tr>
		<tr data-die=8 data-count=1></tr>
		<tr data-die=8 data-count=2></tr>
		<tr data-die=8 data-count=3></tr>
		<tr data-die=8 data-count=4></tr>
		<tr data-die=8 data-count=5></tr>
		<tr data-die=8 data-count=6></tr>
		<tr data-die=8 data-count=7></tr>
		<tr data-die=8 data-count=8></tr>
		<tr data-die=8 data-count=9></tr>
		<tr data-die=8 data-count=10></tr>
		<tr data-die=8 data-count=11></tr>
		<tr data-die=8 data-count=12></tr>
		<tr data-die=8 data-count=13></tr>
		<tr data-die=8 data-count=14></tr>
		<tr data-die=8 data-count=15></tr>
		<tr data-die=8 data-count=16></tr>
		<tr>
			<th colspan="4" class="header"><span>Irregular</span></th>
		</tr>
		<tr data-die=10 data-count=1></tr>
		<tr data-die=10 data-count=2></tr>
		<tr data-die=10 data-count=3></tr>
		<tr data-die=10 data-count=4></tr>
		<tr data-die=10 data-count=5></tr>
    <tr data-die=10 data-count=6></tr>
	</tbody>
</table>
<table class="table--random-damage">
	<thead>
		<tr>
			<th>Dice Roll</th>
			<th>Average</th>
			<th>Common Range</th>
			<th>Max</th>
		</tr>
	</thead>
	<tbody>
		<tr data-die=10 data-count=7></tr>
		<tr data-die=10 data-count=8></tr>
		<tr data-die=10 data-count=9></tr>
		<tr data-die=10 data-count=10></tr>
		<tr data-die=10 data-count=11></tr>
		<tr data-die=10 data-count=12></tr>
		<tr data-die=10 data-count=13></tr>
		<tr data-die=10 data-count=14></tr>
		<tr data-die=10 data-count=15></tr>
		<tr data-die=10 data-count=16></tr>
		<tr>
			<th colspan="4" class="header"><span>Volatile</span></th>
		</tr>
		<tr data-die=12 data-count=1></tr>
		<tr data-die=12 data-count=2></tr>
		<tr data-die=12 data-count=3></tr>
		<tr data-die=12 data-count=4></tr>
		<tr data-die=12 data-count=5></tr>
		<tr data-die=12 data-count=6></tr>
		<tr data-die=12 data-count=7></tr>
		<tr data-die=12 data-count=8></tr>
		<tr data-die=12 data-count=9></tr>
		<tr data-die=12 data-count=10></tr>
		<tr data-die=12 data-count=11></tr>
		<tr data-die=12 data-count=12></tr>
		<tr data-die=12 data-count=13></tr>
		<tr data-die=12 data-count=14></tr>
		<tr data-die=12 data-count=15></tr>
		<tr data-die=12 data-count=16></tr>
		<tr>
			<th colspan="4" class="header"><span>Wild</span></th>
		</tr>
		<tr data-die=20 data-count=1></tr>
		<tr data-die=20 data-count=2></tr>
		<tr data-die=20 data-count=3></tr>
		<tr data-die=20 data-count=4></tr>
		<tr data-die=20 data-count=5></tr>
		<tr data-die=20 data-count=6></tr>
		<tr data-die=20 data-count=7></tr>
		<tr data-die=20 data-count=8></tr>
		<tr data-die=20 data-count=9></tr>
		<tr data-die=20 data-count=10></tr>
		<tr data-die=20 data-count=11></tr>
		<tr data-die=20 data-count=12></tr>
		<tr data-die=20 data-count=13></tr>
		<tr data-die=20 data-count=14></tr>
		<tr data-die=20 data-count=15></tr>
		<tr data-die=20 data-count=16></tr>
		<tr>
			<th colspan="4" class="header"><span>Chaotic</span></th>
		</tr>
		<tr data-die=100 data-count=1></tr>
		<tr data-die=100 data-count=2></tr>
		<tr data-die=100 data-count=3></tr>
		<tr data-die=100 data-count=4></tr>
		<tr data-die=100 data-count=5></tr>
		<tr data-die=100 data-count=6></tr>
		<tr data-die=100 data-count=7></tr>
		<tr data-die=100 data-count=8></tr>
		<tr data-die=100 data-count=9></tr>
		<tr data-die=100 data-count=10></tr>
		<tr data-die=100 data-count=11></tr>
    <tr data-die=100 data-count=12></tr>
    <tr data-die=100 data-count=13></tr>
	</tbody>
</table>

\panelEnd

\contentEnd
