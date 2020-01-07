import {Component, OnInit} from '@angular/core';
import {AwesomeService} from '../../awesomes/awesome.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {IAwesome} from '../../IAwesome';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  updateAwesomeForm = this.fb.group({
    tag: [''],
    url: [''],
    descriptions: [''],
  });
  id = +this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private awesomeService: AwesomeService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private route: Router) {
  }

  ngOnInit() {
    this.awesomeService.findById(this.id).subscribe((result: IAwesome) => {
      this.updateAwesomeForm = this.fb.group({
        tag: [result.tag, [Validators.required, Validators.minLength(4)]],
        url: [result.url, [Validators.required, Validators.minLength(4)]],
        descriptions: [result.descriptions, [Validators.required, Validators.minLength(4)]],
      });
    });
  }

  create() {
    const data = this.updateAwesomeForm.value;
    const id = this.id;
    this.awesomeService.edit(data, id).subscribe((result: IAwesome) => {
      return this.route.navigate(['/awesomes']);
    });
  }

  delete(id: number) {
    if (confirm('Bạn có chắc chắn muốn xoá ?')) {
      this.awesomeService.delete(id).subscribe((result: IAwesome) => {
        this.route.navigate(['/awesomes']);
      });
    }
  }
  get tag() {
    return this.updateAwesomeForm.get('tag');
  }

  get url() {
    return this.updateAwesomeForm.get('url');
  }

  get descriptions() {
    return this.updateAwesomeForm.get('descriptions');
  }
}
