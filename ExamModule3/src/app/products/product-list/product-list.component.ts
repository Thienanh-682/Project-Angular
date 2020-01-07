import {Component, OnInit} from '@angular/core';
import {IAwesome} from '../../IAwesome';
import {AwesomeService} from '../../awesomes/awesome.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  awesomes: IAwesome[] = [];
  count: number;

  constructor(private awesomeService: AwesomeService,
              private route: Router) {
  }

  ngOnInit() {
    this.awesomeService.getAll().subscribe((data: IAwesome[]) => {
      this.awesomes = data;
      console.log(data);
      this.count = this.awesomes.length;
    });
  }

}
