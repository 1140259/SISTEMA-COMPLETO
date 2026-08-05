import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-receta-imprimir',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './receta-imprimir.component.html',
  styleUrls: ['./receta-imprimir.component.css']
})
export class RecetaImprimirComponent implements OnInit {

  receta: any = {};

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.cargarReceta(Number(id));

  }

  cargarReceta(id: number): void {

    this.http.get<any>(
      `http://localhost:5000/api/recetas/imprimir/${id}`
    ).subscribe({

      next: (res: any) => {

        this.receta = { ...res };

        this.cdr.detectChanges();

      },

      error: (err: any) => {

        console.error('ERROR RECETA:', err);

      }

    });

  }

  imprimir(): void {

    window.print();

  }

}
