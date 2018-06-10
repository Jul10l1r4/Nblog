import { Component } from '@angular/core';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent{
  ngOnInit (){
    this.fetchTitle();
  }
  title : string
  async fetchTitle (){
    let a = await fetch("https://jsonplaceholder.typicode.com/posts/");
    let c  = await a.json();
    this.title = c
  }
}
