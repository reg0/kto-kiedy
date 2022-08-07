import { IPerson }from 'interfaces/models/person.model.interface';

export class Person implements IPerson {
  constructor(public readonly id: string, public readonly firstName: string, public readonly lastName: string) { }

  get initials() {
    return `${this.firstName.charAt(0)}${
      this.lastName.replaceAll(/[\W]+/g, ' ')
        .split(' ')
        .map((part) => part.charAt(0))
        .join('')
        .toLocaleUpperCase()
    }`;
  }
}
