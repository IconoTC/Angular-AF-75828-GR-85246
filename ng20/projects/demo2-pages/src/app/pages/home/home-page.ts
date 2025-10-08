import { Component } from '@angular/core';
import { Counter } from "./components/counter/counter";
import { Greetings } from "./components/greetings/greetings";
import { CountersWrapper } from "./components/counters-wrapper/counters-wrapper";

@Component({
  selector: 'ind-home-page',
  imports: [Counter, Greetings, CountersWrapper],
  template: `
    <h2>Home Page</h2>
    <ind-counters-wrapper />
    <ind-greetings />
  `,
  styles: `
    ind-counter  {
      display: block;
      padding: 16px;
      margin: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #f9f9f9;
    }
  `
})
export class HomePage {

}

export default HomePage;
