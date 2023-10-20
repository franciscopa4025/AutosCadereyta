import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-autodetalles',
  templateUrl: './autodetalles.component.html',
  styleUrls: ['./autodetalles.component.css']
})
export class AutodetallesComponent implements  OnInit {
  constructor(private apiService:ApiService,private route: ActivatedRoute,private meta: Meta){}
  auto:any;
  autosimilares:any[]=[];
  autoId: any;
  ngOnInit(): void {
    this.autoId = this.route.snapshot.paramMap.get('id');

    this.apiService.obtenerAutoPorId(this.autoId).subscribe(data => {
         this.auto=data

         this.meta.addTag({ property: 'og:title', content: 'Autos Cadereyta' });
         this.meta.addTag({ property: 'og:description', content: 'autos' });
         this.meta.addTag({ property: 'og:image', content: 'https://autoscadereytaapi.blob.core.windows.net/autos/8d1b3025-eff9-4e38-bea7-e5f4cd8cafe3.jpg' });
         this.meta.addTag({ property: 'og:url', content: 'https://autoscadereytaapi.blob.core.windows.net/autos/8d1b3025-eff9-4e38-bea7-e5f4cd8cafe3.jpg' });
      console.log("Auto obtenido:", data);
      // Aquí puedes manejar los datos del auto obtenido
    });

    this.apiService.getAutosrecientes(8).subscribe(data => {
      this.autosimilares=data;
      console.log(this.autosimilares)
   // Aquí puedes manejar los datos del auto obtenido
 });
  }

}
