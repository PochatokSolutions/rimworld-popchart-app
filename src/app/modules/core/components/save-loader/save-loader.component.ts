import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-loader',
  templateUrl: './save-loader.component.html',
  styleUrls: ['./save-loader.component.scss']
})
export class SaveLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Element initialized');
  }

}
