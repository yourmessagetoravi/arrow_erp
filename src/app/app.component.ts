import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'arrow-erp';
  showRed = true;

  onShowRedChange() {
    alert('Vaue Changed to ' + this.showRed);
  }

}
