import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent implements OnInit, OnDestroy {

  content = '';
  private langSub?: Subscription;


  constructor(
    private http: HttpClient,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.loadPrivacy(this.translate.currentLang || 'de');

    this.langSub = this.translate.onLangChange.subscribe(e => {
      this.loadPrivacy(e.lang);
    });
  }

  ngOnDestroy() {
    this.langSub?.unsubscribe();
  }

  private loadPrivacy(lang: string) {
    this.http
      .get(`/assets/legal/imprint.${lang}.html`, { responseType: 'text' })
      .subscribe(html => this.content = html);
  }

}
