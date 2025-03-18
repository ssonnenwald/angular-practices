import { Component } from '@angular/core';
import { CodeHighLightComponent } from '../../shared/components/code-highlight/code-highlight.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-solid-single-responsibility',
  imports: [CodeHighLightComponent, MatIconModule],
  templateUrl: './solid-single-responsibility.component.html',
  styleUrl: './solid-single-responsibility.component.scss',
})
export class SolidSingleResponsibilityComponent {
  constructor() {}

  public beforeCode = `class Profile {
  private email: string;
  private bio: string;
  private theme: "LIGHT" | "DARK";
  private preferredLanguage: string;

  constructor(params: { email: string; bio: string; theme: "LIGHT" | "DARK"; preferredLanguage: string }) {
    const { email, bio, theme, preferredLanguage } = params;

    this.email = email;
    this.bio = bio;
    this.theme = theme;
    this.preferredLanguage = preferredLanguage;
  }

  public updateEmail(email: string): void {
    this.email = email;
  }

  public updateBio(bio: string): void {
    this.bio = bio;
  }

  public toggleTheme(): void {
    if (this.theme === "LIGHT") {
      this.theme = "DARK";
    } else {
      this.theme = "LIGHT";
    }
  }

  public updatePreferredLanguage(language: string): void {
    this.preferredLanguage = language;
  }

  public getProfile() {
    return {
      email: this.email,
      bio: this.bio,
      theme: this.theme,
      preferredLanguage: this.preferredLanguage,
    };
  }
}
`;

  public afterCode = `class Settings {
  constructor(
    protected theme: "LIGHT" | "DARK",
    protected preferredLanguage: string,
  ) {}

  public toggleTheme(): void {
    if (this.theme === "LIGHT") {
      this.theme = "DARK";
    } else {
      this.theme = "LIGHT";
    }
  }

  public updatePreferredLanguage(language: string): void {
    this.preferredLanguage = language;
  }

  public getSettings() {
    return { theme: this.theme, preferredLanguage: this.preferredLanguage };
  }
}

class Profile {
  constructor(
    protected email: string,
    protected bio: string,
    protected settings: Settings,
  ) {}

  public updateEmail(email: string): void {
    this.email = email;
  }

  public updateBio(bio: string): void {
    this.bio = bio;
  }

  public getProfile() {
    return { email: this.email, bio: this.bio, settings: this.settings.getSettings() };
  }
}
`;
}
