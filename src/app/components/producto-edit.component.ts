import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
    selector: 'producto-edit',
    templateUrl: '../views/producto-add.html',
    providers: [ProductoService]
})
export class ProductoEditComponent{
    public titulo: string;
    public producto: Producto;
    public filesToUpload;
    public resultoUpload;

    constructor(
        private _productoService: ProductoService,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.titulo = 'Editar un producto';
        this.producto = new Producto(0,'','',0,'');
    }
}