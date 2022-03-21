const diceDeviations = {
	4: [ 1.12, 1.58, 1.94, 2.24, 2.5, 2.74, 2.96, 3.16, 3.35, 3.54, 3.71, 3.87, 4.03, 4.18, 4.33, 4.47],
	6: [ 1.71, 2.42, 2.96, 3.42, 3.82, 4.18, 4.52, 4.83, 5.12, 5.40, 5.66, 5.92, 6.16, 6.39, 6.61, 6.83],
	8: [ 2.29, 3.24, 3.97, 4.58, 5.12, 5.61, 6.06, 6.48, 6.87, 7.25, 7.60, 7.94, 8.26, 8.57, 8.87, 9.17],
	10: [ 2.87, 4.06, 4.97, 5.74, 6.42, 7.04, 7.60, 8.12, 8.62, 9.08, 9.53, 9.95, 10.36, 10.75, 11.12, 11.49],
	12: [ 3.45, 4.88, 5.98, 6.90, 7.72, 8.46, 9.13, 9.76, 10.36, 10.92, 11.45, 11.96, 12.45, 12.92, 13.37, 13.81],
	20: [ 5.77, 8.15, 9.99, 11.53, 12.89, 14.12, 15.26, 16.31, 17.30, 18.23, 19.12, 19.97, 20.79, 21.58, 22.33, 23.07],
	100: [ 28.87, 40.82, 50.00, 57.73, 64.55, 70.71, 76.37, 81.65, 86.60, 91.28, 95.74, 99.99, 104.08, 108.01, 111.80, 115.46]
};

/**
 * Apply page numbers and chapters.
 * @param {Object} dom - The dom.
 * @param {boolean} isCollection - True if the dom represents a collection.
 * @returns {Object} The dom.
 */
function processDom(job, dom) {
	dom.querySelectorAll('.page__header .page__book .title').forEach((x) => x.innerHTML = "Giffyglyph's Monster Maker");
	dom.querySelectorAll('.table--monster-statistics').forEach(function (element) {
		let rows = "";
		for (let i = (element.dataset.levelStart ? element.dataset.levelStart : 0); i <= (element.dataset.levelEnd ? element.dataset.levelEnd : 20); i++) {
			const rank = element.dataset.rank ? element.dataset.rank : "grunt";
			const threat = element.dataset.threat ? element.dataset.threat : 1;
			const template = job.format.module.scalerFactory.createScalerTemplate(i, rank, null, threat);
      rows += `
        <tr>
          <td>${template.combatLevel}</td>
          <td>${template.abilityModifiers.map((x) => _renderNumber(x.getValue())).join(", ")}</td>
          <td>${_renderNumber(template.proficiencyBonus.getValue())}</td>
          <td>${template.initiativeBonus.getValue() ? _renderNumber(template.initiativeBonus.getValue()) : "—"}</td>
          <td>${template.armorClass.getValue()}</td>
          <td>${template.hitPoints.getValue().toLocaleString()}</td>
          <td>${template.trainedSavingThrows.getValue()}</td>
          <td>${_renderNumber(template.attackBonus.getValue())}</td>
          <td>${_renderNumber(template.attackDc.getValue())}</td>
          <td>${template.attackDamage.getValue()}</td>
          <td>${_renderChallengeRating(template.challengeRating.getValue())}</td>
          <td>${template.experiencePoints.getValue().toLocaleString()}</td>
        </tr>
      `;
    }
    element.innerHTML = `
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
        <col>
        <col>
        <col>
      </colgroup>
      <thead>
        <tr>
          <th rowspan=2>Level</th>
          <th colspan=3><span class="spacer">Attributes</span></th>
          <th colspan=3><span class="spacer">Defence</span></th>
          <th colspan=3><span class="spacer">Offense</span></th>
          <th colspan=2><span class="spacer">Ratings</span></th>
        </tr>
        <tr>
          <th>Ability Modifiers</th>
          <th>PB</th>
          <th>INIT</th>
          <th>AC</th>
          <th>HP</th>
          <th>TST</th>
          <th>ATK</th>
          <th>DC</th>
          <th>DMG</th>
          <th>CR</th>
          <th>XP</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    `;
	});
	dom.querySelectorAll('.table--scaler-templates').forEach(function (element) {
		const ranks = [ "minion:1", "grunt:1", "elite:1", "paragon:3", "paragon:4", "paragon:5", "paragon:6", "paragon:7" ];
		const roles = [ "controller", "defender", "lurker", "skirmisher", "striker", "supporter" ];
		let rows = "";
		ranks.forEach((x) => {
			let rank = x.split(':')[0];
			let players = x.split(':')[1];
			let stats = job.format.module.scalerFactory.createScalerTemplate(Number(element.dataset.level), rank, null, Number(players));
			rows += `
				<tr>
					<th colspan=21 class="header">
						<span>${job.translator.t(`scaler.rank.${rank}`, { "threat": players })}</span>
						<span class="info">Level ${element.dataset.level}</span>
						<span class="info">Ability Modifiers: ${stats.abilityModifiers.map((y) => _renderNumber(y.getValue())).join(", ")}</span>
            <span class="info">Threat: ${stats.combatThreat}</span>
					</th>
				</tr>
			`;
      roles.forEach((y) => {
				let level = job.format.module.scalerFactory.createScalerTemplate(Number(element.dataset.level), rank, y, Number(players));
				rows += `
					<tr>
						<td>${job.translator.t(`scaler.role.${y}`)}</td>
            <td>${level.proficiencyBonus.getValue() ? _renderNumber(level.proficiencyBonus.getValue()) : "—"}</td>
            <td>${level.initiativeBonus.getValue() ? _renderNumber(level.initiativeBonus.getValue()) : "—"}</td>
						<td>${(level.baseSpeed.getValue() - 30 != 0) ? _renderNumber(level.baseSpeed.getValue() - 30) : '—'}</td>
						<td>${level.armorClass.getValue()}</td>
						<td>${level.hitPoints.getValue().toLocaleString()}</td>
						<td>${level.trainedSavingThrows.getValue()}</td>
            <td>${_renderNumber(level.attackBonus.getValue())}</td>
            <td>${_renderNumber(level.attackDc.getValue())}</td>
						<td>${level.attackDamage.getValue()}</td>
            <td>${(level.paragonPower.getValue()) ? level.paragonPower.getValue() : "—"}</td>
            <td>${(level.paragonDefence.getValue()) ? level.paragonDefence.getValue() : "—"}</td>
						<td>${level.trainedSkill ? job.translator.t(`scaler.skill.${level.trainedSkill}`) : "—"}</td>
            <td>${_renderChallengeRating(stats.challengeRating.getValue())}</td>
						<td>${stats.experiencePoints.getValue().toLocaleString()}</td>
					</tr>
				`;
			});
		});
		
		element.innerHTML = `
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
        <col>
        <col>
        <col>
        <col>
        <col>
      </colgroup>
			<thead>
				<tr>
					<th rowspan=2>Role</th>
          <th colspan=3><span class="spacer">Attributes</span></th>
          <th colspan=3><span class="spacer">Defence</span></th>
					<th colspan=3><span class="spacer">Offense</span></th>
          <th colspan=2><span class="spacer">Paragon</span></th>
					<th rowspan=2>Skill</th>
          <th colspan=2><span class="spacer">Ratings</span></th>
				</tr>
				<tr>
          <th>PB</th>
          <th>INIT</th>
          <th>SPD</th>
          <th>AC</th>
          <th>HP</th>
          <th>TST</th>
					<th>ATK</th>
          <th>DC</th>
					<th>DMG</th>
          <th>POW</th>
					<th>DEF</th>
          <th>CR</th>
					<th>XP</th>
				</tr>
			</thead>
			<tbody>${rows}</tbody>
		`;
	});

	dom.querySelectorAll('.table--random-damage [data-die]').forEach(function (element) {
		let mean = ((1 + Number(element.dataset.die)) / 2) * element.dataset.count;
		let deviation = diceDeviations[element.dataset.die][element.dataset.count - 1];
		element.outerHTML = `
			<tr>
				<td>${element.dataset.count}d${element.dataset.die}</td>
				<td>${Math.floor(mean)}</td>
				<td>${Math.floor(mean - deviation)}-${Math.ceil(mean + deviation)}</td>
				<td>${element.dataset.count * element.dataset.die}</td>
			</tr>
		`;
	});

  dom.querySelectorAll('.table--combat-stats [data-level]').forEach(function (element) {
    let stats = job.format.module.scalerFactory.createScalerTemplate(Number(element.dataset.level), "grunt", null, 1);
    element.outerHTML = `
      <tr>
        <td>${stats.combatLevel}</td>
        <td>${13 + (Math.floor(stats.combatLevel / 3))}</td>
        <td>${16 + (stats.combatLevel * 7)}</td>
        <td>${_renderNumber(Math.floor(stats.combatLevel / 3) - 1)}</td>
        <td>${_renderNumber(3 + Math.floor(stats.combatLevel / 2))}</td>
        <td>${11 + Math.floor(stats.combatLevel / 2)}</td>
        <td>${Math.max(1, (stats.combatLevel * 4) - 2)}</td>
        <td>${_renderNumber(stats.proficiencyBonus.getValue())}</td>
        <td>${_renderChallengeRating(stats.challengeRating.getValue())}</td>
        <td>${stats.experiencePoints.getValue().toLocaleString()}</td>
      </tr>
    `;
  });
		
	return dom;
}

function _renderChallengeRating(cr) {
	switch (cr) {
		case 0.125:
			return "1/8";
		case 0.25:
			return "1/4";
		case 0.5:
			return "1/2";
		default:
			return cr;
	}
}

function _renderNumber(number, hidePositive) {
	const positive = (hidePositive) ? '' : '+';
	return (number >= 0) ? positive + number : `&minus;${Math.abs(number)}`;
}

export { processDom };