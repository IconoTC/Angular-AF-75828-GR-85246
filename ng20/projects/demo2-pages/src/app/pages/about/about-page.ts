import { Component } from '@angular/core';
import { Contact } from "./components/contact/contact";

@Component({
  selector: 'ind-about-page',
  imports: [Contact],
  template: `
    <h2>About Page</h2>
    <ind-contact />
  `,
  styles: ``
})
export class AboutPage {

}


export default AboutPage;
