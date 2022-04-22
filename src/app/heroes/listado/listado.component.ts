import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitán America'];
  heroeBorrado: string = '';


  borrarHeroe(){
   this.heroeBorrado = this.heroes.shift() || '';
    
  }

  // mostrarHeroeBorrado(): boolean{
  //   if(this.heroeBorrado.length > 0 ){
  //     return true;
  //   } else{
  //     return false
  //   }
  //}


  

}
