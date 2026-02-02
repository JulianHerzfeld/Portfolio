import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ScrollService {
    scrollToId(id: string) {
        setTimeout(() => {
            document.getElementById(id)
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
}