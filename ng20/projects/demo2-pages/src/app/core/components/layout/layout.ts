import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Menu } from "../menu/menu";

@Component({
  selector: 'ind-layout',
  imports: [Header, Footer, Menu],
  template: `
    <ind-header>
      <ind-menu />
      <hr />
    </ind-header>
    <main>
      <ng-content></ng-content>
    </main>
    <ind-footer />
  `,
  styles: ``
})
export class Layout {

}
