import { Component, Input } from '@angular/core';
import { Fields } from 'src/app/shared/fields.model';
import { SubFields } from 'src/app/shared/subfields.model';

@Component({
  selector: 'app-enrollment-detail',
  templateUrl: './enrollment-detail.component.html',
  styleUrls: ['./enrollment-detail.component.css'],
})
export class EnrollmentDetailComponent {
  @Input() fields: Fields;
  subFieldsArr: SubFields[] = [];

  onSelectModal() {
    // console.log(this.fields);
    this.subFieldsArr = [];
    for (let subFields of this.fields.subFields) {
      this.subFieldsArr.push(subFields);
    }
    console.log(this.subFieldsArr);
  }
}
