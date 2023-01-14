/*1.	Create constructor functions with properties representing the following:
○	WebApp: name, url, technologies, licence, stars
○	MobileApp: name, platforms, licence, stars*/

function WebApp(name, url, technologies, licence, stars) {
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this. licence = licence;
    this.stars = stars;
}

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
    this.name = name;
    this.platforms = platforms;
    this. licence = licence;
    this.stars = stars;
}
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

MobileApp.prototype.isCCLicence = function () {
    if (this.licence === 'CC') {
        console.log('The licence is of application is CC');
    } else {
        console.log('The licence is of application is not CC');
    }
}

MobileApp.prototype.like = function () {
    this.stars += 1;
}





var app = new WebApp('aplikacija', 'url address', 'React', 1234566788, 3.9);
app.getData();
app.reactBased();


var mobApp = new MobileApp('MobileService', 'Ios', 1361632634, 3.5);
mobApp.getData();
mobApp.forAndroids();
mobApp.isCCLicence();
mobApp.like();



console.log(app);
console.log(mobApp);


