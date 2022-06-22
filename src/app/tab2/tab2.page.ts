import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  abrirUrl(url: string) {
    window.open(url, '_blank').focus();
  }

  doarAlimentos() {
    this.abrirUrl(
      'https://www.google.com/maps/search/?api=1&query=ponto+doa%C3%A7%C3%A3o+alimento'
    );
  }

  doarRoupas() {
    this.abrirUrl(
      'https://www.google.com/maps/search/?api=1&query=doar+roupas'
    );
  }

  doarSangue() {
    this.abrirUrl(
      'https://www.google.com/maps/search/?api=1&query=doa%C3%A7%C3%A3o+sangue'
    );
  }
}
