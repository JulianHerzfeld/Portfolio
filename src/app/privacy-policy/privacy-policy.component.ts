import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit, OnDestroy {

  content = "";
  private langSub?: Subscription;

  constructor(
    private http: HttpClient,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.loadPrivacy(this.translate.currentLang || 'en');

    this.langSub = this.translate.onLangChange.subscribe(e => {
      this.loadPrivacy(e.lang);
    });
  }

  ngOnDestroy() {
    this.langSub?.unsubscribe();
  }

  private loadPrivacy(lang: string) {
    this.http
      .get(`/assets/legal/privacy.${lang}.html`, { responseType: 'text' })
      .subscribe(html => this.content = html);
  }
}
