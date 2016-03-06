import {autoinject} from 'aurelia-framework';
import { CardDataInjector } from './card-data-injector';

@autoinject
export class Card {
	productionType: string;
	victoryPoints: number;
	cost: any;

	constructor(private cardData: CardDataInjector) {
		this.cost = {};
		console.log('constructor!');
	}

	activate(tier: number) {
	    let newCard = this.cardData.nextCard(tier);
		this.productionType = newCard.productionType;
		this.victoryPoints = newCard.victoryPoints;

		for (let gem in newCard.cost) {
			this.cost[gem] = newCard.cost[gem];
		}

		console.log('activate!');
	}
}