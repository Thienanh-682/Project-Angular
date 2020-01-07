import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AwesomeService} from '../../awesomes/awesome.service';
import {Router} from '@angular/router';
import {IAwesome} from '../../IAwesome';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  addAwesomeForm = this.fb.group({
    tag: ['', [Validators.required, Validators.minLength(4)]],
    url: ['', [Validators.required, Validators.minLength(4)]],
    descriptions: ['', [Validators.required, Validators.minLength(4)]]
  });

  constructor(private fb: FormBuilder,
              private awesomeService: AwesomeService,
              private route: Router) {
  }

  ngOnInit() {
  }

  create() {
    const data = this.addAwesomeForm.value;
    this.awesomeService.add(data).subscribe((result: IAwesome) => {
      return this.route.navigate(['/awesomes']);
    });
  }

  get tag() {
    return this.addAwesomeForm.get('tag');
  }

  get url() {
    return this.addAwesomeForm.get('url');
  }

  get descriptions() {
    return this.addAwesomeForm.get('descriptions');
  }

}
