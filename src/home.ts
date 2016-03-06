import { autoinject } from 'aurelia-framework';
import { Card } from './card';
import { CardDataInjector } from './card-data-injector';

@autoinject
export class Home {
  tierOneCards = [];
  tierTwoCards = [];
  tierThreeCards = [];

  constructor(private cardData: CardDataInjector) { }

  // Add a new card to the relevant list
  newCardClick(tier: number) {
    switch (tier) {
      case 1:
        if (this.cardData.cardsLeft(1) > 0)
          this.tierOneCards.push(new Card(this.cardData));
        break;
      case 2:
        if (this.cardData.cardsLeft(2) > 0)
          this.tierTwoCards.push(new Card(this.cardData));
        break;
      case 3:
        if (this.cardData.cardsLeft(3) > 0)
          this.tierThreeCards.push(new Card(this.cardData));
        break;
    }
  }
}
