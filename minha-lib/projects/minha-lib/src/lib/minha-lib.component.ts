import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-minha-lib',
  template: `
    <p>
      minha-lib works 2!
    </p>
  `,
  styles: [
  ]
})
export class MinhaLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
