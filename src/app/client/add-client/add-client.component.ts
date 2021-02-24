import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client = {
    Name: '',
    Surname: '',
    IdNumber: '',
    Telephone: '',
    Email: '',
    Address: '',
    published: false
  };
  submitted = false;
  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {
  }

  saveClient(): void {
    const data = {
      name:this.client.Name,
      surname:this.client.Surname,
      idnumber:this.client.IdNumber,
      telephone:this.client.Telephone,
      email:this.client.Email,
      address:this.client.Address,
    };

    this.sharedservice.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newClient(): void {
    this.submitted = false;
    this.client = {
      Name: '',
      Surname: '',
      IdNumber:'',
      Telephone:'',
      Email:'',
      Address:'',
      published: false
    };
  }

}
