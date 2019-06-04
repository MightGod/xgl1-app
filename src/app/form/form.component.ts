import { Component, OnInit } from '@angular/core';
import * as xgl from './xgl.json';

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
    console.log(this.fieldPanel.textField);
  }

  public submitForm(isValid : boolean) : void
  {
    console.log(`Form is ${isValid ? 'Valid' : 'Invalid'}`);
  }
}
