import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../common/constants';

const baseUrl = `${API}`;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}
}
