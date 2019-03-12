import { Component, OnInit } from '@angular/core';
import {API_CONFIG} from './api-config';
import { HttpClient } from '@angular/common/http';
import {Person} from './Person';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  data: any;
  persons: Person[] = [];
  constructor(private http: HttpClient) {
    this.getData();
    this.getPersons();
  }
  getData(){
    return this.http.get(API_CONFIG.endpoint);
  }
  getPersons(){
    return this.http.get(API_CONFIG.endpoint)
            .subscribe(data =>{
              this.data = data;
              if(this.data.length>1){
                for(let i=0; i<this.data.length; i++){
                  console.log(data[i]);
                  let name = data[i].name;
                  let profession = data[i].profession;
                  let id = data[i].id;
                  this.persons.push(new Person(name,profession,id));
                }
              }
               
            
              
            })
  }
  ngOnInit() {
  }

}
