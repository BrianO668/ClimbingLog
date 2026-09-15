class Climb {
    id: number;
    grade: number;
    color: string;
    attempts: number;
    style: string;
    intensity: number;
    sent: boolean;

    constructor(grade: number, color: string, attempts: number, style: string, intensity: number, sent: boolean) {
        this.id = nextID
        this.grade = grade;
        this.color = color;
        this.attempts = attempts;
        this.style = style;
        this.intensity = intensity;
        this.sent = sent;

        nextID++;
    }
}

let nextID = 1;

const climbs = [];
 //Test data!
climbs.push(new Climb(7, "Orange", 8, "Crimps", 9, false));
climbs.push(new Climb(6, "Green", 3, "Slopers", 5, true));
climbs.push(new Climb(7, "Orange", 8, "Crimps", 9, false));
climbs.push(new Climb(6, "Green", 3, "Slopers", 5, true));

export {Climb, climbs}; //Makes Climb and climbs(array) public!