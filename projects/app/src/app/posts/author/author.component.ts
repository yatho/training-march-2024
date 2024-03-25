import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  private authorService = inject(AuthorService);
  protected author$ = inject(ActivatedRoute).data.pipe(
    map(res => res['post'].author),
    switchMap(authorId => this.authorService.getAuthorById(authorId))
  );

}
