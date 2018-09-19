import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngbd-collapse-basic',
  templateUrl: './collapse-contract.component.html',
  styleUrls:['./collapse-contract.component.css']
})
export class CollapseContractComponent implements OnInit{
  public isCollapsed = false;
  constructor(){}
  ngOnInit(){
    return this.isCollapsed;
  }

}
