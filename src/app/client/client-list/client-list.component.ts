import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

    client: any;
    txtClientName: any;
    currentClient = null;
    clientIndex = -1;
    name = '';
    currentIndex: any;


  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {
    this.retrieveClient();
  }

  retrieveClient(): void{
    this.sharedservice.getAll()
    .subscribe(
      data => {
        this.client = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  refreshList(): void {
    this.retrieveClient();
    this.currentClient = null;
  }

  setActiveClient({ client, index }: { client: null; index: any; }): void {
    this.currentClient = client;
    this.currentIndex = index;
  }

  removeAllClients(): void {
    this.sharedservice.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveClient();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.sharedservice.findByTitle(this.txtClientName)
      .subscribe(
        data => {
          this.client = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
