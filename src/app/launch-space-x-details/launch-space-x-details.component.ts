import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-space-x-details',
  templateUrl: './launch-space-x-details.component.html',
  styleUrls: ['./launch-space-x-details.component.scss']
})
export class LaunchSpaceXDetailsComponent implements OnInit, OnChanges{
  launchesCount = 0;
  @Input() data :any;
  constructor() { }

  ngOnInit(): void {
  }
ngOnChanges(){
console.log(this.data)
}
}
