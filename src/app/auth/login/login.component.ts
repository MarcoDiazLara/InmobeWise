import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { AuthModule } from '../auth.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formLogin = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    if (this.formLogin.valid) {
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos al servidor
      console.log('Datos enviados:', this.formLogin.value);
    } else {
      // Manejar errores de validación
      console.error('El formulario contiene errores.');
    }
  }

  
  

}
