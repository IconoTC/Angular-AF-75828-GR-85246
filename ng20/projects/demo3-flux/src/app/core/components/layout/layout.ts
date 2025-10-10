import { Component, input,  } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Menu } from "../menu/menu";
import { menuOptions } from '../../../app.routes';
import { MenuOption } from '../../types/menu-option';

@Component({
  selector: 'ind-layout',
  imports: [Header, Footer, Menu],
  template: `
    <ind-header [appTitle]="appTitle()">
      <ind-menu [options]="options" />
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
// @Input({
//   required: true
// }) appTitle!: WritableSignal<string>;

appTitle = input.required<string>();
options: MenuOption[] = menuOptions;


}
