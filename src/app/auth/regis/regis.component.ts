import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})

export class RegisComponent implements OnInit {
  constructor(){}
  formRegistro!:FormGroup;
  ngOnInit(): void {
    
  }

}
