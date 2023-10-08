import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit-autos',
  templateUrl: './edit-autos.component.html',
  styleUrls: ['./edit-autos.component.css']
})
export class EditAutosComponent implements OnInit {
  registrationForm!: FormGroup;
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
  valorCargado = false;
  autoId: any;




  constructor(
    private formBuilder: FormBuilder, private apiService:ApiService// Inyecta DatePipe
    ,private router: Router,private route: ActivatedRoute) {
    for (let year = 1992; year <= 2024; year++) {
      this.ano.push(year);
    }
    this.autoId = this.route.snapshot.paramMap.get('id');
    this.apiService.obtenerAutoPorId(this.autoId ).subscribe(data => {
      this.auto=data
    console.log("Auto obtenido:", this.auto.marca);
    console.log("Auto obtenido:", this.auto);
    this.registrationForm = this.formBuilder.group({
      Marca: [this.auto.marca|| '', Validators.required],
      Modelo: [this.auto.modelo|| '', Validators.required],
      Año: [this.auto.Ano|| '', Validators.required],
      Color: [this.auto.color, Validators.required],
      Precio: [ this.auto.precio|| '', Validators.required],
      Cilindros: [this.auto.cilindros|| '', Validators.required],
      Kilometraje: [ this.auto.kilometraje|| '', Validators.required],
      Transmision: [this.auto.transmision|| '', Validators.required],
      EstadoVehiculo: [this.auto.estadoVehiculo|| '', Validators.required],
      Motor: [this.auto.motor|| '', Validators.required],
      Combustible: [this.auto.combustible|| '', Validators.required],
      Factura: [this.auto.factura|| '', Validators.required],
      NumeroDeDueños: [this.auto.numeroDeDueños|| '', Validators.required],
      InformacionPapeles: [this.auto.informacionPapeles|| '', Validators.required],
      FechaRegistro: [this.auto.fechaRegistro|| '', Validators.required],
      Caracteristicas: [this.auto.caracteristicas|| '', Validators.required],
      Descripcion: [this.auto.descripcion|| '', Validators.required],
      Disponible: [this.auto.disponible|| ''],
      Foto1Url: ["" ,],
      Foto2Url: ['', ],
      Foto3Url: ['',],
      Foto4Url: ['', ],
      Foto5Url: ['', ],
      Foto6Url: ['',],
      Foto7Url: ['',]

    });
    this.registrationForm.get('Marca')?.setValue(this.auto.marca);
    this.valorCargado = true;
   // Aquí puedes manejar los datos del auto obtenido
 });

    this.marcas.sort();


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


    this.apiService.actualizarAuto(this.registrationForm.value, this.autoId ).subscribe(
      (respuesta) => {
        console.log('Automóvil actualizado con éxito', respuesta);
        this.router.navigate(['/admi']);
        // Puedes realizar acciones adicionales después de la actualización
      },
      (error) => {
        console.error('Error al actualizar el automóvil', error);
        // Puedes manejar errores aquí si es necesario
      }
    );
    console.log(this.registrationForm.value)

  }



}
