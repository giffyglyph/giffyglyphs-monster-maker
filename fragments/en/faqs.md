\contentBegin { "class": "page--mm-faq", "header": "faq", "bg": "pages/text/bg-glyph.png" }

# FAQs

This section lists at some of the frequently asked questions regarding _Giffyglyph's Monster Maker_. If your question isn't answered here, feel free to contact me.

## The Basics

### Is this official material? { "index": "A" }

No. This an unofficial compilation of new rules, templates, and mechanics intended to supplement official material found in 5th Edition books.

### Does this replace 5th Edition? { "index": "B" }

No. This modular supplement doesn't outright replace 5th Edition material, but provides you with advanced tools to create your own monsters and encounters.

You can use these new _scalers_ alongside official 5th Edition monsters, or use them exclusively in your encounters—whatever works best for your GM style!

### Why did you write this? { "index": "C" }

I like to improvise _a lot_ when I GM, so I need a quick and reliable way to generate fiction-first/combat-ready monsters with a (reasonably) predictable _threat_ level.

Unfortunately, I found this _needlessly_ difficult in 5th Edition—so I returned to 4th Edition for inspiration and wrote this supplement for my own 5e games.

With standardized monster math, straightforward encounter rules, and varied combat types (roles, ranks, etc), any 5e GM can now build fun, flexible encounters in seconds. I hope these tools, templates, and tables make the time you spend building encounters much more enjoyable—good luck!

\columnbreak

### How did you write this? { "index": "D" }

This document was written and rendered with **Giffyglyph's Project Publisher**, a custom-built Node.js toolkit that transforms markdown files into HTML, PDFs, PNGs, JPGs, and ZIPs.

You can download and use this free, open-source tool (licensed under GNU GPL 3.0) at:

<div class='button-group button-group--links'>
  <a class='button' href='https://github.com/giffyglyph/giffyglyphs-project-publisher'>
    <span class='button__icon'><i class='fab fa-github-alt fa-fw'></i></span>
    <span class='button__text'>github.com/giffyglyph/giffyglyphs-project-publisher</span>
  </a>
</div>

### What else have you written? { "index": "E" }

In addition to this 5th Edition supplement, you can find other examples of my work in:

* **Giffyglyph's Darker Dungeons:** Modular rules to expand your 5th Edition toolkit with brand new options and gameplay features.
* **Giffyglyph's Class Compendium:** A complete rewrite and re-balance of the 12 5th Edition core classes, retooled to focus on 1st-10th level gameplay.
* **Quick Quest:** A one-page quick-play RPG with OSR/narrative leanings.

Visit [giffyglyph.com](https://www.giffyglyph.com) and [github.com/giffyglyph](https://github.com/giffyglyph) to find a full collection of my work and applications.

### I spotted an error... { "index": "F" }

If you notice a spelling error, rendering issue, or other bug with this supplement, please a) contact me _or_ b) raise a new issue on the github repository:

<div class='button-group button-group--links'>
  <a class='button' href='https://github.com/giffyglyph/giffyglyphs-monster-maker'>
    <span class='button__icon'><i class='fas fa-bug fa-fw'></i></span>
    <span class='button__text'>github.com/giffyglyph/giffyglyphs-monster-maker</span>
  </a>
</div>

\contentEnd

\contentBegin { "class": "page--mm-faq" }

### Can I copy your text? { "index": "G" }

No. You may reference _parts_ of this supplement in your own free homebrew, with appropriate credit.

However, please don't replicate the text wholesale nor include my writing in _any_ for-sale variant.

## Scalers

### Why are they called Scalers? { "index": "A" }

This supplement uses the term _"scalers"_ to refer to scaling monsters—i.e. entities that have a combat level, a combat rank, and (optionally) a combat role. This is to distinguish them from _statics_:

* **Scaler:** Your attributes scale up or down easily when you change a core dial (level, rank, or role).
* **Static:** Your attributes are hardcoded or arbitrarily decided (i.e. official 5th Edition monsters).

This terminology can also be applied to features (a _scaling feature_ vs a _static feature_) and encounters (a _scaling encounter_ vs a _static encounter_).

### How are Scalers calculated? { "index": "B" }

This supplement uses an approach coined by [Song of the Blade](https://songoftheblade.wordpress.com/2015/09/09/improved-monster-stats-table-for-dd-5th-edition/) in their 2015 article "Improved Monster Stats table for 5th Edition", aligning monster hit points and damage with the progression of the _fighter_ class.

A single grunt should be a one-to-one match for a fighter of equal level—it should die after four attacking actions, or kill the fighter with four attacking actions.

This underlying math is then augmented with _combat roles_ and _combat ranks_ (as coined by 4th Edition) to create a range of easy, reliable templates.

### Why use Scalers? { "index": "C" }

Though outwardly similar to traditional 5e NPCs, scalers are built to serve a specific purpose—_combat_.

#### Quick to Build

Scalers are designed to be quick and easy to build—just choose three modifiers: a combat level, a combat rank, and (optionally) a combat role. That's it!

#### Predictable Power

When you create a monster, it's important to know with _some_ certainty how lethal it may be. Scaler _combat levels_ are designed to scale alongside character levels:

* **Damage:** A grunt should defeat a fighter (of the same level) with 4 average damaging attacks.
* **Durability:** A fighter should defeat a grunt (of the same level) with 4 average damaging attacks.

With this simple 4:4 damage/durability power mapping, you can have more confidence in your monsters and their potential encounter impact.

#### Easy to Customize

If a 4:4 power mapping doesn't suit your campaign, you can simply apply simple a modifier to your scalers—+10% hit points, -20% damage, etc. This is an easy way to change the tone of combat—for example:

* **Safe Combat (4:2):** +0% dmg, -50% hp.
* **Faster Combat (3:3):** +33% dmg, -25% hp.
* **Risky Combat (3:4):** +33% dmg, +0% hp.
* **Lethal Combat (2:2):** +100% dmg, -50% hp.

#### Simple Encounter Design

Building an encounter with scalers is *incredibly* easy—just add one level-matched grunt for each player character in the party. That's it!

But it's just as easy to mix things up by switching around a few combat ranks. As a general rule of thumb:

* 4 **minions** are worth one grunt.
* One **grunt** is a match for one player character.
* One **elite** is worth 2 grunts.
* One **paragon** is a match for an entire party.

With these guidelines in hand, you can build a range of varied encounters in no time at all.

#### Big Boss Battles

Paragons are designed to face an entire adventuring party all by themselves, serving as the centerpiece for fully-featured big boss battles.

With a wide array of scaling features and options (multiple phases, transformations, multi-part bodies, paragon powers, etc.), you can let the boss *be the boss*.

#### Powers, Not Spells

Vancian magic may be a great feature for players, but it's a bad feature for NPCs—it's slow, it doesn't scale well, and juggling spell slots is a poor use of your time.

Magical scalers don't use spells or spell slots—with _scaling features_ (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='making-features']" }</span>) and the _spellcaster_ (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='the-spellcaster']" }</span>) or _summoner_ archetypes (p<span data-blueprint="value">{ type: page.number, selector: "h1[id='the-summoner']" }</span>), you can build and run any kind of spellcaster you need with zero overhead.

#### Self-contained Profiles

The scaler profile includes everything you need to confidently use them in battle—read the stat block and dive straight into combat.

#### Improvisation-Friendly

A combat profile isn't an *exhaustive* list of abilities—it's just a starting point. If you want to do something special that's thematic *and* makes sense, improvise it!

Scalers tell you their fundamental combat stats upfront (attack bonuses, DCs, damage, etc.) to help you improvise actions quickly, easily, and accurately.

#### Asymmetrical Design

Scalers aren't built in the same way as player characters—it's inefficient to micromanage equipment and spells for every monster.

With decoupled combat stats, scalers let you can focus on the *important* things—making fun monsters and great encounters.

\contentEnd

\contentBegin { "class": "page--mm-faq" }

<!-- ### Why doesn't AC follow PC rules? { "index": "E" } -->

### Why don't Minions have 1 HP? { "index": "D" }

In 4th Edition, minions had only 1 hit point—any successful attack would defeat them. However, this tends to be a _bad idea_ in 5th Edition.

Some spells (such as _Sleep_) distribute their effects based on hit point totals—if minions have only 1 HP, these basic spells can be greatly overpowered and take out crowds of minions all-too-easily. To that effect, scaler minions have a _severely_ reduced hit point pool that should—in practice—mean they are defeated within one attacking action.

### Can I share my Scalers? { "index": "E" }

Yes. If you create a scaling monster of your own design using this supplement, you can share it freely. Post it online, include it in your homebrew, put it in an adventure, print it—your content is your own.

## Online

### Is there VTT support? { "index": "A" }

Yes. You can build scaling monsters with **Foundry VTT** using the official **Giffyglyph's Monster Maker** module. You can download the module via any of the following:

\exampleBegin

* **Foundry VTT:** [foundryvtt.com/packages/giffyglyphs-5e-monster-maker](https://foundryvtt.com/packages/giffyglyphs-5e-monster-maker)
* **Foundry Hub:** [foundryvtt-hub.com/package/giffyglyphs-5e-monster-maker/](https://www.foundryvtt-hub.com/package/giffyglyphs-5e-monster-maker/)
* **The Forge:** [forge-vtt.com/bazaar/package/giffyglyphs-5e-monster-maker](https://forge-vtt.com/bazaar/package/giffyglyphs-5e-monster-maker)
* **Source Code:** [github.com/giffyglyph/foundry-5e-monster-maker](https://github.com/giffyglyph/foundry-5e-monster-maker)

\exampleEnd

For specific details about the Foundry VTT module, or to commission modules for other VTTs, please contact me.

### Is there a Web application? { "index": "B" }

Yes. You can create scaling monsters online with **Giffyglyph's Online Monster Maker**. If you notice a bug with this application, please a) contact me or b) raise a new issue on the github repository.

<div class='button-group button-group--links'>
  <a class='button' href='https://giffyglyph.com/monstermaker/app/'>
    <span class='button__icon'><i class='fas fa-link fa-fw'></i></span>
    <span class='button__text'>giffyglyph.com/monstermaker/app/</span>
  </a>
  <a class='button' href='https://github.com/giffyglyph/webapp-5e-monster-maker'>
    <span class='button__icon'><i class='fas fa-bug fa-fw'></i></span>
    <span class='button__text'>github.com/giffyglyph/webapp-5e-monster-maker</span>
  </a>
</div>

### Can I share this PDF? { "index": "C" }

This PDF is currently available on pay-what-you-want terms. You may share it with others, but may not charge for or sell it in any fashion.

\columnbreak

## Support

### Can I buy a printed version? { "index": "A" }

This supplement is currently a work-in-progress, so a printed version is not yet available.

However, once the text is complete, I hope to use a print-on-demand service (such as DriveThruRPG) to help you buy a physical copy.

### Can I contribute? { "index": "B" }

This supplement is supported by my very-kind patrons, ko-fi donations, and twitch subscribers. If these mechanics have helped out your game and you'd like to make a contribution, please consider:

* **Patreon:** Become a Patron ([patreon.com/giffyglyph](https://patreon.com/giffyglyph)) to support this and my other projects.
* **Ko-fi:** If you'd like to make a one-off donation, you can buy me a coffee at [ko-fi.com/giffyglyph](https://ko-fi.com/giffyglyph).
* **Twitch:** Stop by my Twitch stream ([twitch.tv/giffyglyph](https://twitch.tv/giffyglyph)) and say hello.
* **Spread the Word:** If you've enjoyed my work, a tweet/like/review/media-post/credit/etc would be greatly appreciated!
* **Translate:** This supplement is a work-in-progress and liable to change. However, if you would like to translate the _current_ content into another language, please contact me.

### Can I commission you? { "index": "C" }

I am not currently available for standard commission work at the moment. However, if you have a particular project of interest you'd like me to work on, please let me know via the channels below.

### How can I contact you? { "index": "D" }

If you have any feedback, reviews, or questions, please contact me via the following:

\exampleBegin

* **Discord:** Giffyglyph#7632
* **Email:** [giffyglyph@gmail.com](mailto:giffyglyph+dd@gmail.com)
* **Patreon:** [patreon.com/giffyglyph](https://patreon.com/giffyglyph)
* **Twitch:** [twitch.tv/giffyglyph](https://twitch.tv/giffyglyph)
* **Reddit:** [/u/giffyglyph](https://www.reddit.com/user/giffyglyph/)
* **Twitter:** [@giffyglyph](https://twitter.com/giffyglyph)
* **Website:** [giffyglyph.com](https://giffyglyph.com)
* **Youtube:** [youtube.com/c/giffyglyph](https://youtube.com/c/giffyglyph)

\exampleEnd

\panelBegin { "type": "aside", "title": "Thanks for Reading!" }

Thanks for taking the time to read this 5th Edition supplement. I hope you found something useful for your TTRPG games!

\panelEnd

\contentEnd

\contentBegin { "class": "page--mm-faq license" }

## License

This supplement references a variety of 5th Edition _Open Game Content_ (spells, mechanics, races, classes, etc.) as defined in the _Open Game License_ (OGL) below.

The following items are designated **Product Identity**, as defined in Section 1(e) of the _OGL v1.0a_, and are subject to the conditions set forth in Section 7 of the OGL, and are not Open Content: Giffyglyph, Giffyglyph's Monster Maker, proper names (including those used in the names of spells or items), places.

---

The following text is the property of Wizards of the Coast, Inc. and is Copyright 2000 Wizards of the Coast, Inc ("Wizards"). All Rights Reserved.

1. **Definitions:** (a)"Contributors" means the copyright and/or trademark owners who have contributed Open Game Content; (b)"Derivative Material" means copyrighted material including derivative works and translations (including into other computer languages), potation, modification, correction, addition, extension, upgrade, improvement, compilation, abridgment or other form in which an existing work may be recast, transformed or adapted; (c) "Distribute" means to reproduce, license, rent, lease, sell, broadcast, publicly display, transmit or otherwise distribute; (d)"Open Game Content" means the game mechanic and includes the methods, procedures, processes and routines to the extent such content does not embody the Product Identity and is an enhancement over the prior art and any additional content clearly identified as Open Game Content by the Contributor, and means any work covered by this License, including translations and derivative works under copyright law, but specifically excludes Product Identity. (e) "Product Identity" means product and product line names, logos and identifying marks including trade dress; artifacts; creatures characters; stories, storylines, plots, thematic elements, dialogue, incidents, language, artwork, symbols, designs, depictions, likenesses, formats, poses, concepts, themes and graphic, photographic and other visual or audio representations; names and descriptions of characters, spells, enchantments, personalities, teams, personas, likenesses and special abilities; places, locations, environments, creatures, equipment, magical or supernatural abilities or effects, logos, symbols, or graphic designs; and any other trademark or registered trademark clearly identified as Product identity by the owner of the Product Identity, and which specifically excludes the Open Game Content; (f) "Trademark" means the logos, names, mark, sign, motto, designs that are used by a Contributor to identify itself or its products or the associated products contributed to the Open Game License by the Contributor (g) "Use", "Used" or "Using" means to use, Distribute, copy, edit, format, modify, translate and otherwise create Derivative Material of Open Game Content. (h) "You" or "Your" means the licensee in terms of this agreement.

2. **The License:** This License applies to any Open Game Content that contains a notice indicating that the Open Game Content may only be Used under and in terms of this License. You must affix such a notice to any Open Game Content that you Use. No terms may be added to or subtracted from this License except as described by the License itself. No other terms or conditions may be applied to any Open Game Content distributed using this License.

3. **Offer and Acceptance:** By Using the Open Game Content You indicate Your acceptance of the terms of this License.

\columnbreak

4. **Grant and Consideration:** In consideration for agreeing to use this License, the Contributors grant You a perpetual, worldwide, royalty-free, nonexclusive license with the exact terms of this License to Use, the Open Game Content.

5. **Representation of Authority to Contribute:** If You are contributing original material as Open Game Content, You represent that Your Contributions are Your original creation and/or You have sufficient rights to grant the rights conveyed by this License.

6. **Notice of License Copyright:** You must update the COPYRIGHT NOTICE portion of this License to include the exact text of the COPYRIGHT NOTICE of any Open Game Content You are copying, modifying or distributing, and You must add the title, the copyright date, and the copyright holder's name to the COPYRIGHT NOTICE of any original Open Game Content you Distribute.

7. **Use of Product Identity:** You agree not to Use any Product Identity, including as an indication as to compatibility, except as expressly licensed in another, independent Agreement with the owner of each element of that Product Identity. You agree not to indicate compatibility or co-adaptability with any Trademark or Registered Trademark in conjunction with a work containing Open Game Content except as expressly licensed in another, independent Agreement with the owner of such Trademark or Registered Trademark. The use of any Product Identity in Open Game Content does not constitute a challenge to the ownership of that Product Identity. The owner of any Product Identity used in Open Game Content shall retain all rights, title and interest in and to that Product Identity.

8. **Identification:** If you distribute Open Game Content You must clearly indicate which portions of the work that you are distributing are Open Game Content.

9. **Updating the License:** Wizards or its designated Agents may publish updated versions of this License. You may use any authorized version of this License to copy, modify and distribute any Open Game Content originally distributed under any version of this License.

10. **Copy of this License:** You MUST include a copy of this License with every copy of the Open Game Content You Distribute.

11. **Use of Contributor Credits:** You may not market or advertise the Open Game Content using the name of any Contributor unless You have written permission from the Contributor to do so.

12. **Inability to Comply:** If it is impossible for You to comply with any of the terms of this License with respect to some or all of the Open Game Content due to statute, judicial order, or governmental regulation then You may not Use any Open Game Material so affected.

13. **Termination:** This License will terminate automatically if You fail to comply with all terms herein and fail to cure such breach within 30 days of becoming aware of the breach. All sublicenses shall survive the termination of this License.

14. **Reformation:** If any provision of this License is held to be unenforceable, such provision shall be reformed only to the extent necessary to make it enforceable.

15. **COPYRIGHT NOTICE**
    * **Open Game License** v1.0a Copyright 2000, Wizards of the Coast, Inc.
    * **System Reference Document** 5.0 Copyright 2016, Wizards of the Coast, Inc.; Authors Mike Mearls, Jeremy Crawford, Chris Perkins, Rodney Thompson, Peter Lee, James Wyatt, Robert J. Schwalb, Bruce R. Cordell, Chris Sims, and Steve Townshend, based on original material by E. Gary Gygax and Dave Arneson.
    * **Giffyglyph's Monster Maker** v3.0 Copyright 2022, Giffyglyph.

\contentEnd
