import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DisplayhelloworldComponent } from '@app/displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from '@app/showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from '@app/displayname/displayname.component';
import { CounterComponent } from '@app/counter/counter.component';
import { SimpleformComponent } from '@app/simpleform/simpleform.component';
import { UserageComponent } from '@app/userage/userage.component';
import { UsergreetingComponent } from '@app/usergreeting/usergreeting.component';
import { CalculatorComponent } from '@app/calculator/calculator.component';
import { TextlengthComponent } from '@app/textlength/textlength.component';
import { CurrencyconverterComponent } from '@app/currencyconverter/currencyconverter.component';
import { EvenoddcheckerComponent } from '@app/evenoddchecker/evenoddchecker.component';
import { WordreverserComponent } from '@app/wordreverser/wordreverser.component';
import { ShowdateComponent } from '@app/showdate/showdate.component';
import { ShowusernameComponent } from '@app/showusername/showusername.component';
import { MultiplicationtableComponent } from '@app/multiplicationtable/multiplicationtable.component';
import { SimpleloginComponent } from '@app/simplelogin/simplelogin.component';
import { FahrenheittocelsiusComponent } from '@app/fahrenheittocelsius/fahrenheittocelsius.component';
import { BookmarklistComponent } from '@app/bookmarklist/bookmarklist.component';
import { CharactercounterComponent } from '@app/charactercounter/charactercounter.component';
import { PalindromecheckerComponent } from '@app/palindromechecker/palindromechecker.component';
import { TemperatureconverterComponent } from '@app/temperatureconverter/temperatureconverter.component';
import { ShoppinglistComponent } from '@app/shoppinglist/shoppinglist.component';
import { FactorialcalculatorComponent } from '@app/factorialcalculator/factorialcalculator.component';
import { TodomanagerComponent } from '@app/todomanager/todomanager.component';
import { GuessnumbergameComponent } from '@app/guessnumbergame/guessnumbergame.component';
import { WordcounterComponent } from '@app/wordcounter/wordcounter.component';
import { RandomnumbergeneratorComponent } from '@app/randomnumbergenerator/randomnumbergenerator.component';
import { MultiplicationcheckerComponent } from '@app/multiplicationchecker/multiplicationchecker.component';
import { UppercaseconverterComponent } from '@app/uppercaseconverter/uppercaseconverter.component';
import { WordshufflerComponent } from '@app/wordshuffler/wordshuffler.component';
import { BmisolverComponent } from './bmisolver/bmisolver.component';

export const routes: Routes = [
	{
		title: 'Component #1: Display Hello World',
		component: DisplayhelloworldComponent,
		path: 'hello-world',
	},
	{
		title: 'Component #2: Show Hello Button',
		component: ShowhellobuttonComponent,
		path: 'hello-button',
	},
	{
		title: "Component #3: Display User's name",
		component: DisplaynameComponent,
		path: 'display-name',
	},
	{
		title: 'Component #4: Counter',
		component: CounterComponent,
		path: 'counter',
	},
	{
		title: 'Component #5: Simple Form',
		component: SimpleformComponent,
		path: 'simple-form',
	},
	{
		title: 'Component #6: User Age',
		component: UserageComponent,
		path: 'user-age',
	},
	{
		title: 'Component #7: User Greeting',
		component: UsergreetingComponent,
		path: 'user-greeting',
	},
	{
		title: 'Component #8: Calculator',
		component: CalculatorComponent,
		path: 'calculator',
	},
	{
		title: 'Component #9: Text Length',
		component: TextlengthComponent,
		path: 'textlength',
	},
	{
		title: 'Component #10: Currency Converter',
		component: CurrencyconverterComponent,
		path: 'currency-converter',
	},
	{
		title: 'Component #11: Even or Odd',
		component: EvenoddcheckerComponent,
		path: 'evenodd',
	},
	{
		title: 'Component #12: Reverse Word',
		component: WordreverserComponent,
		path: 'word-reverser',
	},
	{
		title: 'Component #13: Show Date',
		component: ShowdateComponent,
		path: 'date-now',
	},
	{
		title: 'Component #14: Show Username',
		component: ShowusernameComponent,
		path: 'show-username',
	},
	{
		title: 'Component #15: Multiplication Table',
		component: MultiplicationtableComponent,
		path: 'multiplication-table',
	},
	{
		title: 'Component #16: Simple Login',
		component: SimpleloginComponent,
		path: 'simple-login',
	},
	{
		title: 'Component #17: Fahrenheit to Celcius',
		component: FahrenheittocelsiusComponent,
		path: 'fahrenheittocelsius',
	},
	{
		title: 'Component #18: Bookmarks List',
		component: BookmarklistComponent,
		path: 'bookmark-list',
	},
	{
		title: 'Component #19: Character Counter',
		component: CharactercounterComponent,
		path: 'character-counter',
	},
	{
		title: 'Component #20: Palindrome',
		component: PalindromecheckerComponent,
		path: 'palindrome',
	},
	{
		title: 'Component #21: Temperature Converter',
		component: TemperatureconverterComponent,
		path: 'temp-converter',
	},
	{
		title: 'Component #22: Shopping List',
		component: ShoppinglistComponent,
		path: 'shopping-list',
	},
	{
		title: 'Component #23: Factorial',
		component: FactorialcalculatorComponent,
		path: 'factorial',
	},
	{
		title: 'Component #24: Todo Manager',
		component: TodomanagerComponent,
		path: 'todo',
	},
	{
		title: 'Component #25: Guess Number Game',
		component: GuessnumbergameComponent,
		path: 'guess-number-game',
	},
	{
		title: 'Component #26: Words counter',
		component: WordcounterComponent,
		path: 'words-counter',
	},
	{
		title: 'Component #27: Random Number Generator',
		component: RandomnumbergeneratorComponent,
		path: 'rand-num',
	},
	{
		title: 'Component #28: Multiplication Checker',
		component: MultiplicationcheckerComponent,
		path: 'multiplication-check',
	},
	{
		title: 'Component #29: Upper Case Converter',
		component: UppercaseconverterComponent,
		path: 'uppercase-converter',
	},
	{
		title: 'Component #30: Word Shuffler',
		component: WordshufflerComponent,
		path: 'shuffler',
	},
	{
		title: 'Component #31: BMI Solver',
		component: BmisolverComponent,
		path: 'bmi',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
