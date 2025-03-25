import { Component, signal, WritableSignal } from '@angular/core';
import { CodeHighLightComponent } from '../../shared/components/code-highlight/code-highlight.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-solid-open-closed',
  imports: [CodeHighLightComponent, MatIconModule],
  templateUrl: './solid-open-closed.component.html',
  styleUrl: './solid-open-closed.component.scss',
})
export default class SolidOpenClosedComponent {
  constructor() {}

  public beforeCode: WritableSignal<string> =
    signal(`type DB = "MySQL" | "Redis" | "Neo4j";

class QueryGenerator {
  getReadingQuery(database: DB): string {
    switch (database) {
      case "MySQL":
        return "SELECT * FROM MySQL";
      case "Redis":
        return "SCAN 0";
      case "Neo4j":
        return "MATCH (n) RETURN n";
      default:
        return "Unknown";
    }
  }

  getWritingQuery(database: DB, data: string): string {
    switch (database) {
      case "MySQL":
        return \`INSERT INTO MySQL VALUES (\${data})\`;
      case "Redis":
        return \`SET \${data}\`;
      case "Neo4j":
        return \`CREATE (\${data})\`;
      default:
        return "Unknown";
    }
  }
}
`);

  public afterCode: WritableSignal<string> = signal(`interface QueryGenerator {
  getReadingQuery: () => string;
  getWritingQuery: (data: string) => string;
}

class MySql implements QueryGenerator {
  getReadingQuery() {
    return "SELECT * FROM MySQL";
  }

  getWritingQuery(data: string) {
    return \`INSERT INTO MySQL VALUES (\${data})\`;
  }
}

class Redis implements QueryGenerator {
  getReadingQuery() {
    return "SCAN 0";
  }

  getWritingQuery(data: string) {
    return \`SET \${data}\`;
  }
}

class Neo4j implements QueryGenerator {
  getReadingQuery() {
    return "MATCH (n) RETURN n";
  }

  getWritingQuery(data: string) {
    return \`CREATE (\${data})\`;
  }
}
`);
}
