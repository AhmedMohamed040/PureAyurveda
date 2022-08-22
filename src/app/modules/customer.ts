export class Customer {

  constructor(
    public fullName = null,
    public mobile = null,
    public email = null,
    public address= null,
    public street1?: string,
    public street2?: string,
    public city?: string,
    public state = null,
    public zip?: string) { }
}
