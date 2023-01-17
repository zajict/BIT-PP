function App(name, licence, stars,) {
        this.name = name;
        this.licence = licence;
        this.stars = stars;    
}

App.prototype.isCCLicence = function () {
    if (this.licence === 'CC') {
        console.log('The licence od the application is CC');
    } else {
        console.log('The licence od the application is not CC');
    }
}


App.prototype.like = function () {
    this.stars += 1;
    return this.stars
}

App.prototype.showStars = function () {
    console.log(this.stars);
}


function WebApp(name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function () {
    console.log(this.name + ' ' + this.url + ' ' + this.technologies + ' ' + this. licence + ' ' + this.stars);
}

WebApp.prototype.reactBased = function () {
    if (this.technologies = 'React') {
        console.log('React is one of used technologies');
    } else {
        console.log('React is not used');
    }
}



function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}

MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function () {
    console.log(this.name + ' ' + this.platforms + ' ' + this.licence + ' ' + this.stars);
}
MobileApp.prototype.forAndroids = function () {
    if (this.platforms === 'Android') {
        console.log('App is for Android');
    } else {
        console.log('App is not for Android');
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




