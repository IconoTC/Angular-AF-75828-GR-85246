import { Component } from '@angular/core';
import { Counter } from "./components/counter/counter";
import { Greetings } from "./components/greetings/greetings";

@Component({
  selector: 'ind-home-page',
  imports: [Counter, Greetings],
  template: `
    <h2>Home Page</h2>

    <ind-counter />
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
