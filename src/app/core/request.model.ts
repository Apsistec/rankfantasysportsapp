export class Request {
  constructor(
    public id: number,
    public issue: string,
    public description: string,
    public displayName: string,
    public email: string
  ) {}
}
