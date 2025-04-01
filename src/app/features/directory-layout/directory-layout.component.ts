import { Component, signal, WritableSignal } from '@angular/core';
import { CodeHighLightComponent } from '../../shared/components/code-highlight/code-highlight.component';

@Component({
  selector: 'app-directory-layout',
  imports: [CodeHighLightComponent],
  templateUrl: './directory-layout.component.html',
  styleUrl: './directory-layout.component.scss',
})
export default class DirectoryLayoutComponent {
  public suggestedDirectoryStructure: WritableSignal<string> =
    signal(`/angular-standalone-app
│── src/
│   ├── app/
│   │   ├── core/                # Core services, interceptors, auth, and singleton services
│   │   │   ├── auth/            # Authentication-related services (e.g., AuthService)
│   │   │   ├── services/        # Singleton services used across the app
│   │   │   ├── interceptors/    # HTTP interceptors
│   │   │   ├── guards/          # Route guards
│   │   │   ├── models/          # Interfaces & models
│   │   │   ├── config/          # Configuration files (e.g., environment settings)
│   │   │   ├── core.config.ts   # Central configuration
│   │   ├── features/            # Feature-based components
│   │   │   ├── home/            # Home page feature
│   │   │   │   ├── components/  # UI Components specific to this feature
│   │   │   │   ├── views/       # Views/pages
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.scss
│   │   │   ├── about/           # Another feature (e.g., About page)
│   │   ├── shared/              # Reusable components, directives, pipes
│   │   │   ├── components/      # Shared UI components (e.g., buttons, modals)
│   │   │   ├── directives/      # Reusable directives
│   │   │   ├── pipes/           # Reusable pipes
│   │   │   ├── shared.module.ts # (optional, if using a shared module)
│   │   ├── layout/              # Global layout components
│   │   │   ├── header/          # Header (mat-toolbar, navigation)
│   │   │   ├── footer/          # Footer
│   │   │   ├── sidebar/         # Sidebar (if any)
│   │   │   ├── layout.component.ts
│   │   │   ├── layout.component.html
│   │   │   ├── layout.component.scss
│   │   ├── app.component.ts     # Root component
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.config.ts        # Application configuration (bootstrap standalone)
│   │   ├── app.routes.ts        # Routing configuration
│   ├── assets/                  # Static assets (images, icons, etc.)
│   ├── environments/            # Environment-specific configurations
│   ├── main.ts                  # Main entry point
│   ├── index.html               # Root HTML file
│   ├── styles.scss              # Global styles
│   ├── angular.json             # Angular configuration
│   ├── package.json             # Dependencies
│   ├── tsconfig.json            # TypeScript configuration
`);

  public directoryStructureDiagram: WritableSignal<string> =
    signal(`📂 angular-standalone-app
│── 📂 src
│   │── 📂 app
│   │   │── 📂 core
│   │   │   │── 📂 auth
│   │   │   │── 📂 services
│   │   │   │── 📂 interceptors
│   │   │   │── 📂 guards
│   │   │   │── 📂 models
│   │   │   │── 📂 config
│   │   │   │── core.config.ts
│   │   │── 📂 features
│   │   │   │── 📂 home
│   │   │   │   │── 📂 components
│   │   │   │   │── 📂 views
│   │   │   │   │── home.component.ts
│   │   │   │   │── home.component.html
│   │   │   │   │── home.component.scss
│   │   │   │── 📂 about
│   │   │── 📂 shared
│   │   │   │── 📂 components
│   │   │   │── 📂 directives
│   │   │   │── 📂 pipes
│   │   │   │── shared.module.ts (optional)
│   │   │── 📂 layout
│   │   │   │── 📂 header
│   │   │   │── 📂 footer
│   │   │   │── 📂 sidebar
│   │   │   │── layout.component.ts
│   │   │   │── layout.component.html
│   │   │   │── layout.component.scss
│   │   │── app.component.ts
│   │   │── app.component.html
│   │   │── app.component.scss
│   │   │── app.config.ts
│   │   │── app.routes.ts
│   │── 📂 assets
│   │── 📂 environments
│   │── main.ts
│   │── index.html
│   │── styles.scss
│── angular.json
│── package.json
│── tsconfig.json
`);
}
