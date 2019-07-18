export class User {

    public nombre: string;
    public email: string;
    public uid: string;
    public role?: string;

    constructor( obj: DataObj ) {
        this.nombre = obj && obj.nombre || null;
        this.uid    = obj && obj.uid || null;
        this.email  = obj && obj.email || null;
        this.role   = 'user';
    }

}

interface DataObj {
    uid: string;
    email: string;
    nombre: string;
}
