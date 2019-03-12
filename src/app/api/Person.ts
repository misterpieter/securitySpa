export class Person{
    public name: string;
    public profession: string;
    public id: string;
    /**
     *
     */
    constructor(name,profession, id) {
        this.id = id;
        this.profession = profession;
        this.name =name;
    }
}