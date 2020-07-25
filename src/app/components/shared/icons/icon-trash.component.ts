import { Component } from '@angular/core';

@Component({
  selector: 'pk-icon-trash',
  template: `
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z"
      />
    </svg>
  `,
  styles: [``],
})
export class IconTrashComponent {
  constructor() {}
}
