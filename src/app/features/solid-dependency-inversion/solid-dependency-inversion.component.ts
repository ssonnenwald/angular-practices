import { Component, signal, WritableSignal } from '@angular/core';
import { CodeHighLightComponent } from '../../shared/components/code-highlight/code-highlight.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-solid-dependency-inversion',
  imports: [CodeHighLightComponent, MatIconModule],
  templateUrl: './solid-dependency-inversion.component.html',
  styleUrl: './solid-dependency-inversion.component.scss',
})
export class SolidDependencyInversionComponent {
  constructor() {}

  public beforeCode: WritableSignal<string> = signal(`class TelegramApi {
  start() {
    console.log("You are connected to Telegram API!");
  }

  messageTo(targetId: number, message: string) {
    console.log(\`\${message} sent to \${targetId} by Telegram!\`);
  }
}

class WhatsappApi {
  setup() {
    console.log("You are connected to Whatsapp API!");
  }

  pushMessage(message: string, targetId: number) {
    console.log(\`\${message} sent to \${targetId} by Whatsapp!\`);
  }
}

class SignalApi {
  open() {
    console.log("You are connected to Signal API!");
  }

  postMessage(params: { id: number; text: string }) {
    console.log(\`\${params.text} sent to \${params.id} by Signal!\`);
  }
}

class Messenger {
  constructor(private api: TelegramApi | WhatsappApi | SignalApi) {}

  sendMessage(targetId: number, message: string) {
    if (this.api instanceof TelegramApi) {
      this.api.start();
      this.api.messageTo(targetId, message);
    } else if (this.api instanceof WhatsappApi) {
      this.api.setup();
      this.api.pushMessage(message, targetId);
    } else {
      this.api.open();
      this.api.postMessage({ id: targetId, text: message });
    }
  }
}
`);

  public afterCode: WritableSignal<string> = signal(`interface MessengerApi {
  connect: () => void;
  send: (targetId: string, message: string) => void;
}

class TelegramApi implements MessengerApi {
  connect() {
    console.log("You are connected to Telegram API!");
  }

  send(targetId: string, message: string) {
    console.log(\`\${message} sent to \${targetId} by Telegram!\`);
  }
}

class WhatsappApi implements MessengerApi {
  connect() {
    console.log("You are connected to Whatsapp API!");
  }

  send(targetId: string, message: string) {
    console.log(\`\${message} sent to \${targetId} by Whatsapp!\`);
  }
}

class SignalApi implements MessengerApi {
  connect() {
    console.log("You are connected to Signal API!");
  }

  send(targetId: string, message: string) {
    console.log(\`\${message} sent to \${targetId} by Signal!\`);
  }
}

class Messenger {
  constructor(private api: MessengerApi) {}

  sendMessage(targetId: string, message: string) {
    this.api.connect();
    this.api.send(targetId, message);
  }
}
`);
}
