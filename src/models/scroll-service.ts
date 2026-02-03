import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })

export class ScrollService {


    constructor(private router: Router) { }



    scrollToId(id: string) {
        setTimeout(() => {
            document.getElementById(id)
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }


    scrollToTop(): void {
        if (this.router.url === '/' || this.router.url === '') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            this.router.navigateByUrl('/').then(() => {
                setTimeout(() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            });
        }
    }
    

    call() {
        window.location.href = 'tel:' + '+49' + '15140468925';
    }


    openMail() {
        window.location.href =
            'mailto:' + 'herzfeldjulian' + '@' + 'hotmail.de';
    }

}