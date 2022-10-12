enum Department {
    Engineering = 'engineering',
    Marketing = 'marketing',
    Accounting = 'accounting'
}

interface IEmployee {
    getDepartment(): Department
    getSalary(): number;
    getName(): string;
}

class AccountingManager implements IEmployee {
    getDepartment(): Department {
        return Department.Accounting;
    }
    getSalary(): number {
        return 80000;
    }
    getName(): string {
        return 'Accounting Manager 1';
    }
}

class SoftwareEngineer implements IEmployee {
    getDepartment(): Department {
        return Department.Engineering;
    }
    getSalary(): number {
        return 95000;
    }
    getName(): string {
        return 'Software Engineer 1';
    }
}

class MarketingManager implements IEmployee {
    getDepartment(): Department {
        return Department.Marketing;
    }
    getSalary(): number {
        return 75000;
    }
    getName(): string {
        return 'Marketing Manager 1';
    }
}

class OrganizationFactory {
    private organizationName: string;
    private employees: IEmployee[] = [];

    constructor(name: string) {
        this.organizationName = name;
    }

    
    public get name() : string {
        return this.organizationName;
    }
    
    addEmployees(employeeList: IEmployee[]) {
        this.employees = this.employees.concat(employeeList);
    }

    findEmployee(name: string) {
        return this.employees.filter(emp => emp.getName() === name)[0];
    }
}

const HBCFactory = new OrganizationFactory('HBC');
console.log(HBCFactory);
HBCFactory.addEmployees([new MarketingManager(), new SoftwareEngineer(), new AccountingManager()]);
console.log(HBCFactory);
console.log(HBCFactory.findEmployee('Software Engineer 1'));

export{};