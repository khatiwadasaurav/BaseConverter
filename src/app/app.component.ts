import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Base Converter'
  // title = 'Pipes';
  // name = 'Saurav';
  // date = new Date(1996,0,24);
  //
  // number =[1,3,4,9,5,2];
  form;

  ngOnInit() {
    this.form = new FormGroup({
      decimal: new FormControl(""),
      binary: new FormControl(""),
      octal: new FormControl(""),
      hexa: new FormControl(""),

    });
    //
  }

  decimalChanged = function (oldvalue, newvalue) {
    if (newvalue != "") {
      this.form.patchValue({binary: parseInt(newvalue, 10).toString(2)});
      this.form.patchValue({octal: parseInt(newvalue, 10).toString(8)});
      this.form.patchValue({hexa: parseInt(newvalue, 10).toString(16).toUpperCase()});

    } else {
      this.form.patchValue({binary: ""});
      this.form.patchValue({octal: ""});
      this.form.patchValue({hexa: ""});

    }
  }
  b = 0;
  o = 0;
  h = 0;
  binaryChanged = function (oldvalue, newvalue) {
    this.b = this.b + 1;
    if (this.b == 1) {
      if (newvalue != "") {
        this.form.patchValue({decimal: parseInt(newvalue, 2).toString(10)});

      } else {
        this.form.patchValue({decimal: ""});
      }
      this.b = 0;
    }

  }
  octalChanged = function (oldvalue, newvalue) {
    this.o = this.o + 1;
    if (this.o == 1) {
      if (newvalue != "") {
        this.form.patchValue({decimal: parseInt(newvalue, 8).toString(10)});

      } else {
        this.form.patchValue({decimal: ""});
      }
      this.o = 0;
    }
  }
  hexaChanged = function (oldvalue, newvalue) {
    this.h = this.h + 1;
    if (this.h == 1) {
      if (newvalue != "") {
        this.form.patchValue({decimal: parseInt(newvalue, 16).toString(10)});
      } else {
        this.form.patchValue({decimal: ""});
      }
      this.h = 0;
    }
  }
  // onSubmit = function (user) {
  //   console.log();
  // }
}
