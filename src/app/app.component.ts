import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name   : string = "rICaRdO gAuTO"
  upper  : string = "Bulbasaur"
  lower  : string = "Ivysaur"
  slice  : string = "Feraligator"
  PI     : number = Math.PI
  percent: number = 0.4569
  salary : number = 84500.50
  dates  : Date = new Date()
  poke = {
    id   : 1,
    name : 'Pikachu',
    type : "Electric",
    stats: {
      hp     : 35,
      attack : 55,
      defense: 40,
      speed  : 90
    }
  }
  asynchronus = new Promise<string> ((res) => {
    setTimeout(() => {
      res('Iniciando')
    }, 2500);
  })
  language : string = 'es'
  videoUrl : string = 'https://www.youtube.com/embed/eMvn7VOGrxQ'
  activated: boolean = true
}
