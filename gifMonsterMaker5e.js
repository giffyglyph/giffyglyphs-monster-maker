/**
 * This module defines the gifMonsterMaker5e project.
 * 
 * @module gifMonsterMaker5e
 * @author Giffyglyph <giffyglyph@gmail.com>
 * @copyright Giffyglyph 2021
 * @license GPL-3.0-or-later
 */

 import { Project } from 'giffyglyphs-markdown-maker';
 import * as projectManager from './modules/projectManager.js';

 const project = new Project({
	 version: "3.0.0",
	 formats: [
		 {
			 name: "gifBookMonsterMaker5e",
			 version: "1.x.x",
			 languages: [ "en" ]
		 }
	 ],
	 override: {
	 	processDomFragment: projectManager.processDom,
		processDomCollection: projectManager.processDom
	 }
 });
 
 export default project;