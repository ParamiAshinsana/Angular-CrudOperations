import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  items: any;
  item = {
    id: null,
    name: '',
    description: ''
  };

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.crudService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  createItem() {
    this.crudService.createItem(this.item).subscribe(data => {
      this.getItems();
      this.item = { id: null, name: '', description: '' }; // Reset form
    });
  }

  updateItem() {
    if (this.item.id !== null) {
      this.crudService.updateItem(this.item.id, this.item).subscribe(data => {
        this.getItems();
        this.item = { id: null, name: '', description: '' }; // Reset form
      });
    }
  }

  editItem(item: any) {
    this.item = Object.assign({}, item);
  }

  deleteItem(id: number) {
    this.crudService.deleteItem(id).subscribe(data => {
      this.getItems();
    });
  }
}
