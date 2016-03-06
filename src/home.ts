import { autoinject } from 'aurelia-framework';
import { Card } from './card';
import { CardDataInjector } from './card-data-injector';

@autoinject
export class Welcome {
  tierOneCards = [];
  tierTwoCards = [];
  tierThreeCards = [];

  constructor(private cardData: CardDataInjector) { }

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.
  //@computedFrom('firstName', 'lastName')

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
