export class CardDataInjector {
	private tierOneCards = [
		{productionType: "Onyx", victoryPoints: 0, cost: {diamond:1, sapphire:1, emerald:1, ruby:1, onyx:0}},
		{productionType: "Sapphire", victoryPoints: 0, cost: {diamond:1, sapphire:0, emerald:1, ruby:1, onyx:1}},
		{productionType: "Diamond", victoryPoints: 0, cost: {diamond:0, sapphire:1, emerald:1, ruby:1, onyx:1}},
		{productionType: "Emerald", victoryPoints: 0, cost: {diamond:1, sapphire:1, emerald:0, ruby:1, onyx:1}},
		{productionType: "Ruby", victoryPoints: 0, cost: {diamond:1, sapphire:1, emerald:1, ruby:0, onyx:1}}
	];

	private tierTwoCards = [
		{productionType: "Onyx", victoryPoints: 1, cost: {diamond:3, sapphire:2, emerald:2, ruby:0, onyx:0}},
		{productionType: "Sapphire", victoryPoints: 1, cost: {diamond:0, sapphire:2, emerald:2, ruby:3, onyx:0}},
		{productionType: "Diamond", victoryPoints: 1, cost: {diamond:0, sapphire:0, emerald:3, ruby:2, onyx:2}},
		{productionType: "Emerald", victoryPoints: 1, cost: {diamond:3, sapphire:0, emerald:2, ruby:3, onyx:0}},
		{productionType: "Ruby", victoryPoints: 1, cost: {diamond:2, sapphire:0, emerald:0, ruby:0, onyx:3}}
	];

	private tierThreeCards = [
		{productionType: "Onyx", victoryPoints: 3, cost: {diamond:3, sapphire:3, emerald:5, ruby:3, onyx:0}},
		{productionType: "Sapphire", victoryPoints: 3, cost: {diamond:3, sapphire:0, emerald:3, ruby:3, onyx:5}},
		{productionType: "Diamond", victoryPoints: 3, cost: {diamond:0, sapphire:3, emerald:3, ruby:5, onyx:3}},
		{productionType: "Emerald", victoryPoints: 3, cost: {diamond:5, sapphire:3, emerald:0, ruby:3, onyx:3}},
		{productionType: "Ruby", victoryPoints: 3, cost: {diamond:3, sapphire:5, emerald:3, ruby:0, onyx:3}}
	];

	nextCard(tier: number): any {
		let tmpList;
		switch (tier) {
			case 1:
				tmpList = this.tierOneCards;
				break;
			case 2:
				tmpList = this.tierTwoCards;
				break;
			case 3:
				tmpList = this.tierThreeCards;
				break;
		}

		if (tmpList.length > 0) {
			let idx = this.pickRandomIndex(tmpList);
			let selectedElement = tmpList[idx];

			tmpList.splice(idx, 1);

			return selectedElement;
		} else {
			return null;
		}
	}

	cardsLeft(tier: number): number {
		switch (tier) {
			case 1:
				return this.tierOneCards.length;
			case 2:
				return this.tierTwoCards.length;
			case 3:
				return this.tierThreeCards.length;
		}
	}

	pickRandomIndex(data: any[]): number {
	    let index = Math.floor(Math.random() * (data.length -1));
	    return index;
	}
}