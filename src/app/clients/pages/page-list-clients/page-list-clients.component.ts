import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public collection: Client[];
  public headers: string[];
  public states = Object.values(StateClient);

  constructor(private cs: ClientsService) { }

  ngOnInit(): void {
    this.cs.collection.subscribe((flux) => {
      this.collection = flux;
    });
    this.headers = ['Type', 'Type', 'Type', 'Type'];
  }

  public changeState(item: Client, e){
    this.cs.changeState(item, e.target.value).subscribe((res) =>{
      item.state = res.state;
    });
  }

}
