import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ContactmeService} from '../../Service/Contactme.service';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {
  baseUrl: 'http://localhost:8080';

  constructor(private contactmeService: ContactmeService) { }

  ngOnInit() {
  }

  onSendInformations(data: any) {
    return this.contactmeService.onSendInformations( 'email name  phoneNumbe message');
  }

}
