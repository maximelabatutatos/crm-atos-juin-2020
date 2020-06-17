import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public collection: Client[];
  public headers: string[];

  constructor(private cs: ClientsService) { }

  ngOnInit(): void {
    this.cs.collection.subscribe((flux) => {
      this.collection = flux;
    });
    this.headers = ['Type', 'Type', 'Type', 'Type'];
  }

}
