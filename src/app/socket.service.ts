import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket = io('http://localhost:3000');

  sendMessage(msg: string): void {
    this.socket.emit('chat message', msg);
  }

  getMessages(): Observable<string> {
    return new Observable<string>(observer => {
      this.socket.on('chat message', (msg: string) => {
        observer.next(msg);
      });
    });
  }
}
