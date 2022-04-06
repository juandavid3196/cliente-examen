import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MapservicesService } from "../app/servicios/mapservices.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examen';
  data = {};
  position = {
    lat: -34.681,
    lng: -58.371
  };

  label = {
    color: 'red',
    text: 'Marcador'
  }
  createIp : FormGroup;

  constructor(private fb : FormBuilder,
    private _mapServices:MapservicesService) {
      this.createIp =  this.fb.group({
        ip : ['',Validators.required],
      });
  }

  enviarIp(){

    const createIp = {
      ip: this.createIp.value.ip,
    }
    this._mapServices.setData(createIp).subscribe((data)=>{
      console.log('terminado');
      
    })
  }

  getInfo(){
    this._mapServices.getData().subscribe(data =>{
      this.data = data;
    });
  }
}
