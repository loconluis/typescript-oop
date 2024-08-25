interface Driver {
  database: string;
  port: number;
  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

class PostgresDriver implements Driver {
  constructor(
    private _database: string,
    private _password: string,
    private _port: number
  ) {}
  disconnect(): void {
    throw new Error('Method not implemented.');
  }
  isConnected(name: string): boolean {
    throw new Error('Method not implemented.');
  }

  public get database(): string {
    return this._database;
  }

  public get port(): number {
    return this._port;
  }

  connect(): void {
    // code to connect
  }
}
