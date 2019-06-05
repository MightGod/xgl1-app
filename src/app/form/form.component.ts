import { Component, OnInit } from '@angular/core';
import xgl from './xgl1.json';
import xgl2 from './xgl2.json';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit 
{
  public firstTask: boolean = false;
  public secondTask: boolean = true;

  public viewMode: boolean = false;

  public tabPanel: any;
  public fieldPanel: any;

  public activeTabIndex: number = 0;

  constructor() { }

  ngOnInit()
  {
    this.fieldPanel = xgl.wgdialog.fieldPanel;

    this.tabPanel = xgl2.xgl.wgdialog.tabPanel;
    console.log(this.tabPanel.tab);
  }

  public submitForm(isValid : boolean) : void
  {
    console.log(`Form is ${isValid ? 'Valid' : 'Invalid'}`);
  }

  public switchTasks() : void
  {
    this.firstTask = !this.firstTask;
    this.secondTask = !this.secondTask;
  }

  public isDisplayed(index: number) : boolean
  {
    return (this.activeTabIndex === index);
  }

  public activateTab(index: number) : void
  {
    this.activeTabIndex = index;
  }
}
