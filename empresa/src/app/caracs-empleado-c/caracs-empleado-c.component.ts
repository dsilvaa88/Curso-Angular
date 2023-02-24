import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caracs-empleado-c',
  templateUrl: './caracs-empleado-c.component.html',
  styleUrls: ['./caracs-empleado-c.component.css']
})
export class CaracsEmpleadoCComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>(); //el flujo de datos sera string

  constructor() { }

  ngOnInit(): void {
  }

}
