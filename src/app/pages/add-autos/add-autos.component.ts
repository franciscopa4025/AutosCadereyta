import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Auto } from 'src/app/Entidades/Auto';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-autos',
  templateUrl: './add-autos.component.html',
  styleUrls: ['./add-autos.component.css']
})
export class AddAutosComponent implements OnInit{
  registrationForm: FormGroup ;
  ano: number[] = [1990, 1991];
  marcas: string[] = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Volkswagen', 'BMW', 'Mercedes-Benz', 'Audi',"Jepp","Suzuki","Hyundai"];
  combustible: string[] = ["Gasolina", 'Disel', 'Electrico'];
  trasmision: string[] = ["Automatico", 'Estandar'];
  estado: string[] = ['Nuevo', 'Seminuevo',"Antiguo"];
  papeles: string[] = ['Nacional', 'Importado'];
  duenos: number[] = [0,1,2,3,5];
  archivoSeleccionado1: File | null = null;
  archivoSeleccionado2: File | null = null;
  archivoSeleccionado3: File | null = null;
  archivoSeleccionado4: File | null = null;
  archivoSeleccionado5: File | null = null;
  archivoSeleccionado6: File | null = null;
  archivoSeleccionado7: File | null = null;
  auto:any;





  constructor(
    private formBuilder: FormBuilder, private apiService:ApiService,private router: Router,private route: ActivatedRoute// Inyecta DatePipe
  ) {
    for (let year = 1992; year <= 2024; year++) {
      this.ano.push(year);
    }

    this.marcas.sort();
    this.registrationForm = this.formBuilder.group({
      Marca: ['', Validators.required],
      Modelo: ['', Validators.required],
      Año: ["", Validators.required],
      Color: ["", Validators.required],
      Precio: [, Validators.required],
      Cilindros: [, Validators.required],
      Kilometraje: [, Validators.required],
      Transmision: ["", Validators.required],
      EstadoVehiculo: ['', Validators.required],
      Motor: ['', Validators.required],
      Combustible: ['', Validators.required],
      Factura: ['', Validators.required],
      NumeroDeDueños: [, Validators.required],
      InformacionPapeles: [, Validators.required],
      FechaRegistro: ['', Validators.required],
      Caracteristicas: ['', Validators.required],
      Descripcion: ['', Validators.required],
      Disponible: [false],
      Foto1Url: ["" ,],
      Foto2Url: ['', ],
      Foto3Url: ['',],
      Foto4Url: ['', ],
      Foto5Url: ['', ],
      Foto6Url: ['',],
      Foto7Url: ['',]

    });
  }



 ngOnInit(): void {


  }

  foto1(event: any) {
    this.archivoSeleccionado1 = event.target.files[0];
    this.registrationForm.get('Foto1Url')?.setValue(this.archivoSeleccionado1);
    console.log('Archivo seleccionado1:', this.archivoSeleccionado1);
  }
  foto2(event: any) {
    this.archivoSeleccionado2 = event.target.files[0];
    this.registrationForm.get('Foto2Url')?.setValue(this.archivoSeleccionado2);
    console.log('Archivo seleccionado2:', this.archivoSeleccionado2);
  }
  foto3(event: any) {
    this.archivoSeleccionado3 = event.target.files[0];
    this.registrationForm.get('Foto3Url')?.setValue(this.archivoSeleccionado3);
    console.log('Archivo seleccionado3:', this.archivoSeleccionado3);
  }
  foto4(event: any) {
    this.archivoSeleccionado4 = event.target.files[0];
    this.registrationForm.get('Foto4Url')?.setValue(this.archivoSeleccionado4);
    console.log('Archivo seleccionado4:', this.archivoSeleccionado4);
  }
  foto5(event: any) {
    this.archivoSeleccionado5 = event.target.files[0];
    this.registrationForm.get('Foto5Url')?.setValue(this.archivoSeleccionado5);
    console.log('Archivo seleccionado5:', this.archivoSeleccionado5);
  }
  foto6(event: any) {
    this.archivoSeleccionado6 = event.target.files[0];
    this.registrationForm.get('Foto6Url')?.setValue(this.archivoSeleccionado6);
    console.log('Archivo seleccionado6:', this.archivoSeleccionado6);
  }
  foto7(event: any) {
    this.archivoSeleccionado7 = event.target.files[0];
    this.registrationForm.get('Foto7Url')?.setValue(this.archivoSeleccionado7);
    console.log('Archivo seleccionado7:', this.archivoSeleccionado7);
  }


  onSubmit() {
    console.log("dada")
    if (this.registrationForm.valid) {
      // El formulario es válido, puedes enviar los datos al servidor u otras acciones
      this.apiService.agregarautos(this.registrationForm.value).subscribe(
        (response) => {
          console.log('Solicitud POST exitosa:', response);
          this.router.navigate(['/admi']);
          // Realiza acciones adicionales si es necesario
        },
        (error) => {
          console.error('Error en la solicitud POST:', error);
          // Maneja errores si es necesario
        }
      );
      console.log(this.registrationForm.value);

    } else {
      console.log(this.registrationForm.value+"error");
      // El formulario no es válido, muestra mensajes de error o realiza otras acciones
    }
  }



}
