import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { format } from 'path';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  miFormulario: FormGroup =this.fb.group({
    genero:['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones:[false, Validators.required]

  })

  persona={
    genero:'F',
    notificaciones: true
    
  }

  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona, 
      condiciones:false
    });

    /* this.miFormulario.get('condiciones')?.valueChanges.subscribe(newValue=>console.log(newValue)) *///para extraer un solo valor
    this.miFormulario.valueChanges.subscribe( ({condiciones, ...restoArgumentos}) =>{
      this.persona=restoArgumentos;
    })
  }
  guardar(){
    const formValue={...this.miFormulario.value}
    delete formValue.condiciones

    this.persona=formValue
  }

}
