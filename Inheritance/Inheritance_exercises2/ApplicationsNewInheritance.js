class App {
    constructor(name, licence, stars,) {
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    }
    isCCLicence() {
        if (this.licence === 'CC') {
            console.log('The licence od the application is CC');
        } else {
            console.log('The licence od the application is not CC');
        }
    }

    like() {
        this.stars += 1;
        return this.stars;
    }

    showStars() {
        console.log(this.stars);
    }

}

class WebApp extends App {
    constructor(name, url, technologies, licence, stars) {
        super(name, licence, stars);

        this.url = url;
        this.technologies = technologies;
    }
    getData() {
        console.log(this.name + ' ' + this.url + ' ' + this.technologies + ' ' + this.licence + ' ' + this.stars);
    }
    reactBased() {
        if (this.technologies = 'React') {
            console.log('React is one of used technologies');
        } else {
            console.log('React is not used');
        }
    }
}


class MobileApp extends App {
    constructor(name, platforms, licence, stars) {
        super(name, licence, stars);
        this.platforms = platforms;
    }
    getData() {
        console.log(this.name + ' ' + this.platforms + ' ' + this.licence + ' ' + this.stars);

    }
    forAndroids() {
        if (this.platforms === 'Android') {
            console.log('App is for Android');
        } else {
            console.log('App is not for Android');
        }

    }
}


var app = new WebApp('aplikacija', 'url address', 'React', 1234566788, 3.9);
app.getData();
app.reactBased();
app.isCCLicence();
app.like();
app.showStars();


var mobApp = new MobileApp('MobileService', 'Ios', 1361632634, 3.5);
mobApp.getData();
mobApp.forAndroids();
mobApp.isCCLicence();
mobApp.like();
mobApp.showStars();


console.log(app);
console.log(mobApp);

