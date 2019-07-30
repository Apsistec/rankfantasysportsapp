export class Request {
  constructor(
    public id: number,
    public type: string,
    public description: string,
    public os: string,
    public model: string,
    public topic: string
  ) {}
}
