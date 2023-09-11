export class BusinessError extends Error {
  constructor(message: string, className?: string) {
    super(message);
    this.name = className || BusinessError.name;
  }
}
