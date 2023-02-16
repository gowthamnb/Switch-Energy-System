import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/interfaces/provider';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  providers: Provider[] = []; 

  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.providerService.getAllProviders().subscribe(res => {
      this.providers = res;
    });
  }

}
