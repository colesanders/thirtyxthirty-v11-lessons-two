import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lesson } from '@thirty/api-interfaces';
import { Observable } from 'rxjs';

export const BASE_URL = 'https://thirtyxthirty-lessons.herokuapp.com/lessons';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private http: HttpClient) { }

  getLessons(): Observable<[Lesson]> {
    return this.http.get<[Lesson]>(BASE_URL);
  }

  deleteLesson(lesson: Lesson) {
    return this.http.delete(BASE_URL + "/" + lesson.id);
  }

  createLesson(lesson: Lesson) {
    return this.http.post(BASE_URL, lesson);
  }

  updateLesson(lesson: Lesson){
    return this.http.put(BASE_URL + "/" + lesson.id, lesson);
  }
}
