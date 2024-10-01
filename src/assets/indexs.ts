// classes in  Ts
class Users {
  // static declaration
  protected _courseCount: number = 1;
  readonly city: string = "Khorsane";
  // constructor
  constructor(public email: string, public name: string) {}

  //getter
  get getAppEmail(): string {
    return `apple${this.email}`;
  }

  //setter
  set setAppleEmail(email: string) {
    this.email = email;
  }
}

class SubUser extends Users {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const bishal = new Users("b@bgmail.com", "bishal");
const komal = new SubUser("b@bgmail", "komal")
console.log(bishal,komal);






