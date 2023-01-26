import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/Hero';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[]=[]
  selectedHero?:Hero;
  hero:Hero={
    id:1,
    name:"jesus"
  }
  constructor(private serviceHero:HeroService, private serviceMessage:MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero:Hero): void{
    this.selectedHero=hero
    this.serviceMessage.add(`HeroesComponent: Selected hero id=${hero.id} hero name=${hero.name}`)
  }
  getHeroes():void{
    this.serviceHero.getHeroes()
    .subscribe(response=>this.heroes=response)
  }


}
