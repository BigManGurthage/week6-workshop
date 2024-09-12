import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { io } from 'socket.io-client';

@Component({
  selector: 'app-chat',
  standalone: true,  // Specify that this is a standalone component
  imports: [FormsModule, CommonModule],  // Include CommonModule here
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  socket: any;
  message: string = '';
  messages: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.socket = io('http://localhost:3000');

    this.socket.on('chat message', (msg: string) => {
      this.messages.push(msg);
    });
  }

  sendMessage(): void {
    if (this.message) {
      this.socket.emit('chat message', this.message);
      this.message = '';
    }
  }
}
