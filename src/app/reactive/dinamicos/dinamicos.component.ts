import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup= this.fb.group({
    nombre :      ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([['Super Mario Bros', Validators.required], ['GTA V', Validators.required]], Validators.required) 
   
  })

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  campoNoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors 
           && this.miFormulario.controls[campo].touched
  }

  guardar(){
  
    if( this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched //muestra los errores en todos los campos cuando es invalido
      return;
    }

    this.miFormulario.reset();
  }


}
