import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ScrollService } from '../../../models/scroll-service';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  http = inject(HttpClient);

  checkbox = new FormControl(false);

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  overlayStatus: 'success' | 'error' | null = null;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  constructor(private service: ScrollService) { }


  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.overlayStatus = null;
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.overlayStatus = 'success';
            ngForm.resetForm();
            this.checkbox = new FormControl(false);
          },
          error: (error) => {
            this.overlayStatus = 'error';
            ngForm.resetForm();
            this.checkbox = new FormControl(false);
            console.error(error);
            setTimeout(() => {
              this.overlayStatus = null;
            }, 2000);
          },
          complete: () => {
            console.info('send post complete');
            setTimeout(() => {
              this.overlayStatus = null;
            }, 2000);
          },
        });
    }
  }


  goTop() {
    this.service.scrollToTop();
  }


  mailNow() {
    this.service.openMail();
  }


  callNow() {
    this.service.call();
  }

}
