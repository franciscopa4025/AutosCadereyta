import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auto } from '../Entidades/Auto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi="https://autoscadereytaapi20231006141615.azurewebsites.net/api/"
public getAutosMarcas():Observable<any>{
    return this.http.get<any>(this.urlApi+"autos/marca");
  }

  public getAutosModelo(marca:string):Observable<any>{
    return this.http.get<any>(this.urlApi+"autos/"+marca+"/modelo");
  }
  constructor(private http:HttpClient) { }
  public getAutosdelano():Observable<any>{
    return this.http.get<any>(this.urlApi+"autos/delano");
  }




  public getAutosrecientes(cantidad:number):Observable<any>{

    return this.http.get<any>(this.urlApi+"autos/ultimos/"+cantidad);

  }

  public getAutostodos():Observable<any>{

    return this.http.get<any>(this.urlApi+"autos/todos/recientes");

  }
  public buscarAutosPorMarcaYModelo(marca?: string, modelo?: string,combustible?:string,transmision?:string,estadoVehiculo?:string): Observable<any[]> {
    const params: any = {

    };
    if (marca) {
      params.marca = marca;
    }

    if (modelo) {
      params.modelo = modelo;
    }
    if (combustible) {
      params.combustible = combustible;
    }
    if (transmision) {
      params.transmision = transmision;
    }
    if (estadoVehiculo) {
      params.estadoVehiculo = estadoVehiculo;
    }

    return this.http.get<any[]>(`${this.urlApi}autos/buscador`, { params: params });
  }

  obtenerAutoPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlApi}autos/${id}`);
  }



  public agregarautos(data: Auto):Observable<Auto>{
    const formData = new FormData();
    formData.append('Marca', data.Marca || '');
    formData.append('Modelo', data.Modelo || '');
    formData.append('Año', data.Año?.toString() || '');
    formData.append('Color', data.Color || '');
    formData.append('Precio', data.Precio?.toString() || '');
    formData.append('Cilindros', data.Cilindros?.toString() || '');
    formData.append('Kilometraje', data.Kilometraje?.toString() || '');
    formData.append('Transmision', data.Transmision || '');
    formData.append('EstadoVehiculo', data.EstadoVehiculo || '');
    formData.append('Motor', data.Motor || '');
    formData.append('Combustible', data.Combustible || '');
    formData.append('Factura', data.Factura || '');
    formData.append('NumeroDeDueños', data.NumeroDeDueños?.toString() || '');
    formData.append('InformacionPapeles', data.InformacionPapeles || '');
    formData.append('FechaRegistro', data.FechaRegistro?.toString() || '');
    formData.append('Caracteristicas', data.Caracteristicas || '');
    formData.append('Descripcion', data.Descripcion || '');
    formData.append('Disponible', data.Disponible?.toString() || '');

    if (data.Foto1Url) {
      formData.append('Foto1Url', data.Foto1Url, 'foto1.jpg');
    }
    if (data.Foto2Url) {
      formData.append('Foto2Url', data.Foto2Url, 'foto2.jpg');
    }
    if (data.Foto3Url) {
      formData.append('Foto3Url', data.Foto3Url, 'foto3.jpg');
    }
    if (data.Foto4Url) {
      formData.append('Foto4Url', data.Foto4Url, 'foto4.jpg');
    }
    if (data.Foto5Url) {
      formData.append('Foto5Url', data.Foto5Url, 'foto5.jpg');
    }
    if (data.Foto6Url) {
      formData.append('Foto6Url', data.Foto6Url, 'foto6.jpg');
    }
    if (data.Foto7Url) {
      formData.append('Foto7Url', data.Foto7Url, 'foto7.jpg');
    }

    return this.http.post<Auto>(`${this.urlApi}/autos`, formData);
  }

  patchauto(id: number,formData:any): Observable<any> {
    return this.http.patch<any>(`${this.urlApi}autos/disponible/${id}`, formData);
  }
  patchAuto(autoId: number, operation: any): Observable<any> {
    const url = `${this.urlApi}autos/disponible/${autoId}`; // Reemplaza "autos" con la ruta de tu recurso
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json' // Especificamos el tipo de contenido JSON Patch
      })
    };

    return this.http.patch(url, [operation], httpOptions);
  }

  public actualizarAuto(data: Auto, autoId: number): Observable<Auto> {
    const formData = new FormData();
    formData.append('Marca', data.Marca || '');
    formData.append('Modelo', data.Modelo || '');
    formData.append('Año', data.Año?.toString() || '');
    formData.append('Color', data.Color || '');
    formData.append('Precio', data.Precio?.toString() || '');
    formData.append('Cilindros', data.Cilindros?.toString() || '');
    formData.append('Kilometraje', data.Kilometraje?.toString() || '');
    formData.append('Transmision', data.Transmision || '');
    formData.append('EstadoVehiculo', data.EstadoVehiculo || '');
    formData.append('Motor', data.Motor || '');
    formData.append('Combustible', data.Combustible || '');
    formData.append('Factura', data.Factura || '');
    formData.append('NumeroDeDueños', data.NumeroDeDueños?.toString() || '');
    formData.append('InformacionPapeles', data.InformacionPapeles || '');
    formData.append('FechaRegistro', data.FechaRegistro?.toString() || '');
    formData.append('Caracteristicas', data.Caracteristicas || '');
    formData.append('Descripcion', data.Descripcion || '');
    formData.append('Disponible', data.Disponible?.toString() || '');

    if (data.Foto1Url) {
      formData.append('Foto1Url', data.Foto1Url, 'foto1.jpg');
    }
    if (data.Foto2Url) {
      formData.append('Foto2Url', data.Foto2Url, 'foto2.jpg');
    }
    if (data.Foto3Url) {
      formData.append('Foto3Url', data.Foto3Url, 'foto3.jpg');
    }
    if (data.Foto4Url) {
      formData.append('Foto4Url', data.Foto4Url, 'foto4.jpg');
    }
    if (data.Foto5Url) {
      formData.append('Foto5Url', data.Foto5Url, 'foto5.jpg');
    }
    if (data.Foto6Url) {
      formData.append('Foto6Url', data.Foto6Url, 'foto6.jpg');
    }
    if (data.Foto7Url) {
      formData.append('Foto7Url', data.Foto7Url, 'foto7.jpg');
    }

    return this.http.put<Auto>(`${this.urlApi}/autos/${autoId}`, formData);
  }

}
