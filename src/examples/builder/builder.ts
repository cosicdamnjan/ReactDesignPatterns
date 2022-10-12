type IAirLineTripFareClass = 'economy' | 'premium_economy' | 'first';

interface IAirLineTripOptions {
    fromDate: Date;
    toDate: Date;
    from: string;
    to: string;
    class: IAirLineTripFareClass;
}

class AirlineTrip {
    private airlineOptions: IAirLineTripOptions;

    constructor(options: IAirLineTripOptions) {
        this.airlineOptions = options;
    }

    changeFromDate(newDate: IAirLineTripOptions['fromDate']) {
        this.airlineOptions.fromDate = newDate;
        return this;
    }

    changeToDate(newDate: IAirLineTripOptions['toDate']) {
        this.airlineOptions.toDate = newDate;
        return this;
    }

    changeTo(newTo: IAirLineTripOptions['to']) {
        this.airlineOptions.to = newTo;
        return this;
    }

    changeFrom(newFrom: IAirLineTripOptions['from']) {
        this.airlineOptions.from = newFrom;
        return this;
    }

    changeClass(newClass: IAirLineTripOptions['class']) {
        this.airlineOptions.class = newClass;
        return this;
    }

}

const summerTrip = new AirlineTrip({ 
    from: 'LAX', 
    to: 'MIA', 
    fromDate: new Date(), 
    toDate: new Date('07/23/2021'),
    class: 'economy'
})

summerTrip.changeClass('premium_economy')
.changeFrom('SFO')
.changeTo('HOU')
.changeClass('first')
.changeFromDate(new Date()).changeToDate(new Date());

console.log({ summerTrip })

export {}