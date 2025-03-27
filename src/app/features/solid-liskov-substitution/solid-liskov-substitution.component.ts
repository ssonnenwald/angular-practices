import { Component, signal, WritableSignal } from '@angular/core';
import { CodeHighLightComponent } from '../../shared/components/code-highlight/code-highlight.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-solid-liskov-substitution',
  imports: [CodeHighLightComponent, MatIcon],
  templateUrl: './solid-liskov-substitution.component.html',
  styleUrl: './solid-liskov-substitution.component.scss',
})
export default class SolidLiskovSubstitutionComponent {
  constructor() {}

  public beforeCode: WritableSignal<string> = signal(`class AudioProcessor {
  constructor(protected audioFile: File) {}

  compress() {
    // Compress the size of the audio
  }

  changeTempo() {
    // Increase the size of the audio
  }

  separateMusicAndVocal() {
    // Remove the background of the audio
  }

  enhanceQualityWithAI() {
    // Enhance the quality of the audio with AI
  }
}

class LimitedAudioProcessor extends AudioProcessor {
  constructor(audioFile: File) {
    super(audioFile);
  }

  override separateMusicAndVocal(): Error {
    throw Error("You have to buy the premium version to access this feature!");
  }

  override enhanceQualityWithAI(): Error {
    throw Error("You have to buy the premium version to access this feature!");
  }
}
`);

  public afterCode: WritableSignal<string> = signal(`class AudioProcessor {
  constructor(protected audioFile: File) {}

  compress() {
    // Compress the size of the audio
  }

  changeTempo() {
    // Increase the size of the audio
  }
}

class PremiumAudioProcessor extends AudioProcessor {
  constructor(audioFile: File) {
    super(audioFile);
  }

  separateMusicAndVocal() {
    // Remove the background of the audio
  }

  enhanceQualityWithAI() {
    // Enhance the quality of the audio with AI
  }
}
`);
}
