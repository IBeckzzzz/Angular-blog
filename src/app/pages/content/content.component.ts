import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

photoCover:string = "https://www.freecodecamp.org/portuguese/news/content/images/2022/04/react-vs-angular.png"
contentTitle:string = "Angular x React"
contentDescription:string = "nfskjsdfjksadfjksjfsdfsdfsdfsdfsff"

  constructor() { }

  ngOnInit(): void {
  }

}
