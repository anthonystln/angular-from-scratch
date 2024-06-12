import { CreditCardDirective } from "./directives/credit-card.directive";
import { PhoneNumberDirective } from "./directives/phone-number.directive";
import {Formatter} from "./services/formatter";
import {CreditCardVerifier} from "./services/credit-card-verifier";
import { Angular } from "./framework/framework";

Angular.bootstrapApplication({
	declarations: [PhoneNumberDirective, CreditCardDirective],
	providers: [
		{
			provide: "formatter",
			construct: () => new Formatter("global"),
		},
		{
			provide: "verifier",
			construct: () => new CreditCardVerifier()
		},
	] 
})
