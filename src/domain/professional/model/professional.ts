export class Professional {
  readonly #name: string;
  readonly #firstLastName: string;
  readonly #secondLastName: string;
  readonly #position: string;
  readonly #phoneNumber: string;
  readonly #department: string;
  readonly #institutionalEmail: string;
  readonly #contactCellPhone: string;
  readonly #mainSpecialty: string;
  readonly #othersSpecialties: string;
  readonly #otherNonFormalStudies: string;
  readonly #languages: string;
  readonly #profile: string;
  readonly #state: boolean;

  constructor(
    name: string,
    firstLastName: string,
    secondLastName: string,
    position: string,
    phoneNumber: string,
    department: string,
    institutionalEmail: string,
    contactCellPhone: string,
    mainSpecialty: string,
    othersSpecialties: string,
    otherNonFormalStudies: string,
    languages: string,
    profile: string,
  ) {
    this.#name = name;
    this.#firstLastName = firstLastName;
    this.#secondLastName = secondLastName;
    this.#position = position;
    this.#phoneNumber = phoneNumber;
    this.#department = department;
    this.#institutionalEmail = institutionalEmail;
    this.#contactCellPhone = contactCellPhone;
    this.#mainSpecialty = mainSpecialty;
    this.#othersSpecialties = othersSpecialties;
    this.#otherNonFormalStudies = otherNonFormalStudies;
    this.#languages = languages;
    this.#profile = profile;
    this.#state = true;
  }

  get name(): string {
    return this.#name;
  }

  get firstLastName(): string {
    return this.#firstLastName;
  }

  get secondLastName(): string {
    return this.#secondLastName;
  }

  get position(): string {
    return this.#position;
  }

  get phoneNumber(): string {
    return this.#phoneNumber;
  }

  get department(): string {
    return this.#department;
  }

  get institutionalEmail(): string {
    return this.#institutionalEmail;
  }

  get contactCellPhone(): string {
    return this.#contactCellPhone;
  }

  get mainSpecialty(): string {
    return this.#mainSpecialty;
  }

  get othersSpecialties(): string {
    return this.#othersSpecialties;
  }

  get otherNonFormalStudies(): string {
    return this.#otherNonFormalStudies;
  }

  get languages(): string {
    return this.#languages;
  }

  get profile(): string {
    return this.#profile;
  }

  get state(): boolean {
    return this.#state;
  }
}
