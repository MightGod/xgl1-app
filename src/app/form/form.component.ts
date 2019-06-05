import { Component, OnInit } from '@angular/core';
import xgl from './xgl1.json';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit 
{
  public viewMode: boolean = false;
  public fieldPanel: any;
  constructor() { }

  ngOnInit()
  {
    this.fieldPanel = xgl.wgdialog.fieldPanel;
    console.log(this.fieldPanel.fields);
  }

  public submitForm(isValid : boolean) : void
  {
    console.log(`Form is ${isValid ? 'Valid' : 'Invalid'}`);
  }
}
