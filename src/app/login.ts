

export class login {
  constructor(firstname: string, lastname: string, gender: string, mobile: number, emailid: string, address: string, username: string, password: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender;
    this.mobile = mobile;
    this.emailid = emailid;
    this.address = address;
    this.username = username;
    this.password = password;

  }

  firstname: string;
  lastname: string;
  gender: string;
  mobile: number;
  emailid: string;
  address: string
  username: string;
  password: string;


}
