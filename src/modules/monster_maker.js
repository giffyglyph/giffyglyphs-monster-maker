'use strict';

const FRANKENSTEIN = require('./FRANKENSTEIN.js');
const DICE = {
	d4: {
		description: 'Accurate',
		values: [
			{
				min: 1,
				max: 4,
				mean: 2.5,
				deviation: 1.12
			}, {
				min: 2,
				max: 8,
				mean: 5,
				deviation: 1.58
			}, {
				min: 3,
				max: 12,
				mean: 7.5,
				deviation: 1.94
			}, {
				min: 4,
				max: 16,
				mean: 10,
				deviation: 2.24
			}, {
				min: 5,
				max: 20,
				mean: 12.5,
				deviation: 2.5
			}, {
				min: 6,
				max: 24,
				mean: 15,
				deviation: 2.74
			}
		]
	},
	d6: {
		description: 'Predictable',
		values: [
			{
				min: 1,
				max: 6,
				mean: 3.5,
				deviation: 1.71
			}, {
				min: 2,
				max: 12,
				mean: 7,
				deviation: 2.42
			}, {
				min: 3,
				max: 18,
				mean: 10.5,
				deviation: 2.96
			}, {
				min: 4,
				max: 24,
				mean: 14,
				deviation: 3.42
			}, {
				min: 5,
				max: 30,
				mean: 17.5,
				deviation: 3.82
			}, {
				min: 6,
				max: 36,
				mean: 21,
				deviation: 4.18
			}
		]
	},
	d8: {
		description: 'Reliable',
		values: [
			{
				min: 1,
				max: 8,
				mean: 4.5,
				deviation: 2.29
			}, {
				min: 2,
				max: 16,
				mean: 9,
				deviation: 3.24
			}, {
				min: 3,
				max: 24,
				mean: 13.5,
				deviation: 3.97
			}, {
				min: 4,
				max: 32,
				mean: 18,
				deviation: 4.58
			}, {
				min: 5,
				max: 40,
				mean: 22.5,
				deviation: 5.12
			}, {
				min: 6,
				max: 48,
				mean: 27,
				deviation: 5.61
			}
		]
	},
	d10: {
		description: 'Irregular',
		values: [
			{
				min: 1,
				max: 10,
				mean: 5.5,
				deviation: 2.87
			}, {
				min: 2,
				max: 20,
				mean: 11,
				deviation: 4.06
			}, {
				min: 3,
				max: 30,
				mean: 16.5,
				deviation: 4.97
			}, {
				min: 4,
				max: 40,
				mean: 22,
				deviation: 5.74
			}, {
				min: 5,
				max: 50,
				mean: 27.5,
				deviation: 6.42
			}, {
				min: 6,
				max: 60,
				mean: 33,
				deviation: 7.04
			}
		]
	},
	d12: {
		description: 'Volatile',
		values: [
			{
				min: 1,
				max: 12,
				mean: 6.5,
				deviation: 3.45
			}, {
				min: 2,
				max: 24,
				mean: 13,
				deviation: 4.88
			}, {
				min: 3,
				max: 36,
				mean: 19.5,
				deviation: 5.98
			}, {
				min: 4,
				max: 48,
				mean: 26,
				deviation: 6.9
			}, {
				min: 5,
				max: 60,
				mean: 32.5,
				deviation: 7.72
			}, {
				min: 6,
				max: 72,
				mean: 39,
				deviation: 8.46
			}
		]
	},
	d20: {
		description: 'Wild',
		values: [
			{
				min: 1,
				max: 20,
				mean: 10.5,
				deviation: 5.77
			}, {
				min: 2,
				max: 40,
				mean: 21,
				deviation: 8.15
			}, {
				min: 3,
				max: 60,
				mean: 31.5,
				deviation: 9.99
			}, {
				min: 4,
				max: 80,
				mean: 42,
				deviation: 11.53
			}, {
				min: 5,
				max: 100,
				mean: 52.5,
				deviation: 12.89
			}, {
				min: 6,
				max: 120,
				mean: 63,
				deviation: 14.12
			}
		]
	},
	d100: {
		description: 'Chaotic',
		values: [
			{
				min: 1,
				max: 100,
				mean: 50.5,
				deviation: 28.87
			}, {
				min: 2,
				max: 200,
				mean: 101,
				deviation: 40.82
			}, {
				min: 3,
				max: 300,
				mean: 151.5,
				deviation: 50
			}, {
				min: 4,
				max: 400,
				mean: 202,
				deviation: 57.73
			}, {
				min: 5,
				max: 500,
				mean: 252.5,
				deviation: 64.55
			}, {
				min: 6,
				max: 600,
				mean: 303,
				deviation: 70.71
			}
		]
	}
};

module.exports = {
	apply: apply
};

/**
 * Apply project-specific functions
 * @param {object} html DOM
 * @param {string} format output format
 * @param {string} language output language
 * @return {object} html DOM
 */
function apply (html, format, language) {
	FRANKENSTEIN.createMonsters(html);
	FRANKENSTEIN.createMonsterInfo(html);

	html.querySelectorAll('.table--monster-statistics tbody').forEach(function (element) {
		for (let i = -5; i <= 35; i++) {
			const level = FRANKENSTEIN.getStatsForLevel(i);
			element.innerHTML += `
				<tr>
					<td>${FRANKENSTEIN.formatNumber(level.level, true)}</td>
					<td>${level.ac}</td>
					<td>${level.hp}</td>
					<td>${FRANKENSTEIN.formatNumber(level.attack)}</td>
					<td>${level.damage}</td>
					<td>${level.dc}, ${(level.dc - 3)}</td>
					<td>${FRANKENSTEIN.formatNumber(level.skills)}</td>
					<td>${FRANKENSTEIN.formatNumber(level.proficiency)}</td>
					<td>${FRANKENSTEIN.formatSaves(level.saves, true)}</td>
					<td>${FRANKENSTEIN.formatAbilities(level.abilities, true)}</td>
					<td>${Math.floor(level.xp / 4).toLocaleString()}</td>
				</tr>
			`;
		}
	});

	html.querySelectorAll('.table--monster-roles tbody').forEach(function (element) {
		const roles = FRANKENSTEIN.getRoles().sort(function (a, b) {
			return a.name.localeCompare(b.name);
		});

		roles.forEach(function (role) {
			element.innerHTML += `
				<tr>
					<td>${role.name}</td>
					<td>${role.ac != 0 ? FRANKENSTEIN.formatNumber(role.ac) : `<span class='empty'>—</span>`}</td>
					<td>${role.saves != 0 ? FRANKENSTEIN.formatNumber(role.saves) : `<span class='empty'>—</span>`}</td>
					<td>${role.hp != 100 ? `x ${role.hp / 100}` : `<span class='empty'>—</span>`}</td>
					<td>${role.attack != 0 ? FRANKENSTEIN.formatNumber(role.attack) : `<span class='empty'>—</span>`}</td>
					<td>${role.damage != 100 ? `x ${role.damage / 100}` : `<span class='empty'>—</span>`}</td>
					<td>${role.speed != 0 ? FRANKENSTEIN.formatNumber(role.speed) : `<span class='empty'>—</span>`}</td>
					<td>${role.perception ? `Trained` : `<span class='empty'>—</span>`}</td>
					<td>${role.stealth ? `Trained` : `<span class='empty'>—</span>`}</td>
					<td>${role.initiative ? `Trained` : `<span class='empty'>—</span>`}</td>
				</tr>
			`;
		});
	});

	html.querySelectorAll('.table--monster-traits tbody').forEach(function (element) {
		const traits = FRANKENSTEIN.getTraits().sort(function (a, b) {
			return a.name.localeCompare(b.name);
		});
		const parent = element.closest('table');
		const start = parent.getAttribute('data-start-from') ? Number(parent.getAttribute('data-start-from')) : 1;
		const end = parent.getAttribute('data-end-at') ? Number(parent.getAttribute('data-end-at')) : traits.length;

		for (let i = (start - 1); i < end; i++) {
			const trait = traits[i];
			if (trait) {
				element.innerHTML += `
					<tr>
						<td>${i + 1}</td>
						<td>${trait.name}</td>
						<td>${FRANKENSTEIN.removeShortcodes(trait.description)}</td>
					</tr>
				`;
			}
		}
	});

	html.querySelectorAll('.table--monster-powers tbody').forEach(function (element) {
		const roles = FRANKENSTEIN.getRoles().sort(function (a, b) {
			return a.name.localeCompare(b.name);
		});
		const parent = element.closest('table');
		const start = parent.getAttribute('data-start-from') ? Number(parent.getAttribute('data-start-from')) : 1;
		const end = parent.getAttribute('data-end-at') ? Number(parent.getAttribute('data-end-at')) : (roles.map((x) => x.powers).reduce((acc, list) => acc + list.length, 0) + 1);
		let i = 1;

		roles.forEach(function (role) {
			if (i >= start && i <= end) {
				element.innerHTML += `
					<tr class='header'>
						<td colspan='3'><span>${role.name}</span></td>
					</tr>
				`;
			}

			const powers = role.powers.sort(function (a, b) {
				return a.name.localeCompare(b.name);
			});
			powers.forEach(function (power, index) {
				if (i >= start && i <= end) {
					element.innerHTML += `
						<tr>
							<td>${i}</td>
							<td>${power.name}</td>
							<td>${FRANKENSTEIN.removeShortcodes(power.description)}</td>
						</tr>
					`;
				}
				i++;
			});
		});
	});

	html.querySelectorAll('.table--random-damage tbody').forEach(function (element) {
		[ 'd4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd100' ].forEach(function (type) {
			const data = DICE[type];

			element.innerHTML += `
				<tr class='header'>
					<td colspan='6'><span>${data.description}</span></td>
				</tr>
			`;

			data.values.forEach(function (value, index) {
				element.innerHTML += `
					<tr>
						<td>${index + 1}${type}</td>
						<td>${value.min}-${value.max}</td>
						<td>${value.mean}</td>
						<td>${value.deviation}</td>
						<td>${Math.floor(value.mean - value.deviation)}-${Math.ceil(value.mean + value.deviation)}</td>
						<td>${(index + 1)}${type} + [static damage − ${Math.floor(value.mean)}]</td>
					</tr>
				`;
			});
		});
	});

	html.querySelectorAll('list[data-type=\'monster-templates\']').forEach(function (element) {
		const level = Number(element.getAttribute('data-level'));
		const templateTypes = [ 'Minion:1', 'Standard:1', 'Elite:1', 'Solo:3', 'Solo:4', 'Solo:5', 'Solo:6' ];
		const templateRoles = [ 'Controller', 'Defender', 'Lurker', 'Scout', 'Sniper', 'Striker', 'Supporter' ];
		let content = ``;

		templateTypes.forEach(function (type) {
			const tokens = type.split(':');

			templateRoles.forEach(function (role, index) {
				const players = tokens[1];
				const monster = FRANKENSTEIN.getMonsterStats({
					name: `${type} ${role}`,
					level: level,
					role: role,
					type: tokens[0],
					players: players
				});

				content += `
					<tr ${index == 0 ? `class='section'` : ``}>
						<td>${(tokens[1] > 1) ? `${tokens[0]} vs ${tokens[1]}` : tokens[0]}</td>
						<td>${role}</td>
						<td>${monster.stats.ac}</td>
						<td>${monster.stats.hp.max.toLocaleString()}</td>
						<td>${(tokens[0] == `Solo`) ? `3 x ${monster.stats.hp.phase}` : `2 x ${monster.stats.hp.bloodied}`}</td>
						<td>${FRANKENSTEIN.formatNumber(monster.stats.attack)}</td>
						<td>${monster.stats.damage}</td>
						<td>${monster.stats.dc.primary}, ${monster.stats.dc.secondary}</td>
						<td>${FRANKENSTEIN.formatNumber(monster.stats.perception, true)}</td>
						<td>${FRANKENSTEIN.formatNumber(monster.stats.initiative, true)}</td>
						<td>${FRANKENSTEIN.formatNumber(monster.stats.stealth, true)}</td>
						<td>${FRANKENSTEIN.formatSaves(monster.stats.saves, true)}</td>
						<td>${monster.cr}</td>
						<td>${monster.xp}</td>
					</tr>
				`;
			});
		});

		element.innerHTML += `
			<header class="panel__header">
				<h4 class="panel__title">Monster Templates: Level ${level}</h4>
			</header>
			<section class="panel__body">
				<table class='table table--monster-templates'>
					<thead>
						<tr>
							<th>Rank</th>
							<th>Role</th>
							<th>AC</th>
							<th colspan=2><div class='spacer'>Hit Points</div></th>
							<th>Atk Bonus</th>
							<th>Dmg / Action</th>
							<th>Spell DCs</th>
							<th>Perc.</th>
							<th>Init.</th>
							<th>Stl.</th>
							<th>Saving Throws</th>
							<th>CR</th>
							<th>XP</th>
						</tr>
						<tr>
							<th colspan=3></th>
							<th>Max</th>
							<th>Phases</th>
							<th colspan=9></th>
						</tr>
					</thead>
					<tbody>
						${content}
					</tbody>
					<tfoot>
						<tr>
							<th colspan=3></th>
							<th>Max</th>
							<th>Phases</th>
							<th colspan=9></th>
						</tr>
						<tr>
							<th>Rank</th>
							<th>Role</th>
							<th>AC</th>
							<th colspan=2><div class='spacer'>Hit Points</div></th>
							<th>Atk Bonus</th>
							<th>Dmg / Action</th>
							<th>Spell DCs</th>
							<th>Perc.</th>
							<th>Init.</th>
							<th>Stl.</th>
							<th>Saving Throws</th>
							<th>CR</th>
							<th>XP</th>
						</tr>
					</tfoot>
				</table>
			</section>
		`;
	});

	return html;
}
