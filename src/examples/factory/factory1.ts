interface IProps {
    name: string;
    type: string;
}

class Teacher {
    properties: IProps;

    constructor(private props: IProps) {
        this.properties = props;
    }
}

class Assistant {
    properties: IProps;

    constructor(private props: IProps) {
        this.properties = props;
    }
}

class Custodian {
    properties: IProps;

    constructor(private props: IProps) {
        this.properties = props;
    }
}

class StaffFactory {

    create(data: IProps) {
        let out: any;
        switch(data.type) {
            case 'teacher':
                out = new Teacher(data);
                break;
            case 'assistant':
                out = new Assistant(data);
                break;
            case 'custodian':
                out = new Custodian(data);
        }
        return out;
    }
}

const school = new StaffFactory();

console.log(school.create({ type: 'teacher', name: 'Ms. Jenny' }));

console.log(school.create({ type: 'assistant', name: 'Mrs. Smith' }));

export{};