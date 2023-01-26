import { Injectable } from '@angular/core';
import { Hero } from '../interface/Hero' 
import { HEROES } from '../mock-hero' 
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private serviceMessage:MessageService) { }
  getHeroes():Observable<Hero[]>{
    const heroes=of(HEROES)
    this.serviceMessage.add("heroService: fetched heroes")
    return heroes;
  }
}
