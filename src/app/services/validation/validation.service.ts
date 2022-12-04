import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  isOneWordBeginningWithLetter(input: string): boolean{ 
    return new RegExp('^[A-Za-z][A-Za-z0-9_]*$').test(input)
  }
}
