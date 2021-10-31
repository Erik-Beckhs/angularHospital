import { Injectable } from '@angular/core';
import { URL_SERVICES } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  constructor() { 
    console.log('subir achivo modal iniciado')
  }

  subirArchivo(archivo:File, tipo:string, id:string){
    return new Promise((resolve, reject)=>{
      let formData = new FormData()
      let xhr = new XMLHttpRequest()

      formData.append('imagen', archivo, archivo.name)
      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            console.log('Imagen subida')
            resolve(JSON.parse(xhr.response))
          }
          else{
            console.log('Falló la subida')
            reject(xhr.response)
          }
        }
      };
      let url=`${URL_SERVICES}/upload/${tipo}/${id}`

      xhr.open('PUT', url, true)
      xhr.send(formData)
    })
  }
}
