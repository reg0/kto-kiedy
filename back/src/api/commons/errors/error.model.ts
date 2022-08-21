export class ErrorResponse {
  constructor(
    public readonly httpCode: number,
    public readonly message: string
  ) { }
}