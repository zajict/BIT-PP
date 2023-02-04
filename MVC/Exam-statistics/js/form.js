"use strict";

/* In form.js file:
● write a function that collects all the data from the form
● write a function that validates all collected data
● write a function that updates the given list so it adds the new item at
the end of the list
● write a function that updates the part of the page with the statistics */

function collectData() {
    var choosenSubject = subject.value;
    var choosenStudent = student.value;
    var finalGrade = grade.value;
    return {subject: choosenSubject, student: choosenStudent, grade: finalGrade}
}
function validateData(o) {
    if (o.subject === "Choose subject" || o.student === "" || o.grade === "grade") {
        var subjectError = "All fields are required!";
        return errorMessage.textContent = subjectError;
    }
    errorMessage.textContent = " ";
}

function addNewExamItem(p) {
    var index = student.value.indexOf(" ");
    var firstName = student.value.slice(0, index);
    var lastName = student.value.slice(index + 1, index.length);
    var madeStudent = new Student(firstName, lastName);
    var madeSubject = new Subject(subject.value);
    var e = new Exam(madeSubject.subject, madeStudent.getStudentData(), p.grade);
    var s = e.getExamInfo();
    var g = e.grade;
    var lP = document.createElement("li");
    var lF = document.createElement("li");
    var test = e.hasPassed();
    if (test === true) {
        lP.textContent = "PASSED";
        listP.appendChild(lP);
        lP.classList.add("passed-li");
        var h = document.createElement("hr");
        listP.appendChild(h);
        var infoS = document.createElement("p");
        infoS.textContent = s;
        infoS.style.display = "inline";
        var infoG = document.createElement("p");
        infoG.textContent = g;
        infoG.style.display = "inline";
        infoG.style.marginLeft = "150px";
        infoG.style.color = "green";
        listP.appendChild(infoS);
        listP.appendChild(infoG);
        h = document.createElement("hr")
        listP.appendChild(h);
        var allLiP = document.getElementsByClassName("passed-li").length;
        numberOfPassed.textContent = allLiP;
        numberOfPassed.classList.add("counterP");
        subject.value = "Choose subject";
        student.value = "";
        grade.value = 0;
    } else {
        lF.textContent = "FAILLED";
        listF.appendChild(lF);
        lF.classList.add("falled-li");
        var h = document.createElement("hr");
        listF.appendChild(h);
        var infoS = document.createElement("p");
        infoS.textContent = s;
        infoS.style.display = "inline";
        var infoG = document.createElement("p");
        infoG.textContent = g;
        infoG.style.display = "inline";
        infoG.style.marginLeft = "150px";
        infoG.style.color = "tomato";
        listF.appendChild(infoS);
        listF.appendChild(infoG);
        h = document.createElement("hr")
        listF.appendChild(h);
        var allLiF = document.getElementsByClassName("falled-li").length;
        numberOfFalled.textContent = allLiF;
        numberOfFalled.classList.add("counterF");
        procentageOfFalled.classList.add("procentageF");
        subject.value = "Choose subject";
        student.value = "";
        grade.value = 0;
    }
}

function updateStatistic() {
    var allLi = document.getElementsByTagName("li").length;
    var allLiF = document.getElementsByClassName("falled-li").length;
    var p = 0;
    if (allLi === 0) {
        procentageOfFalled.textContent = "";
        return;
    }
    if (allLiF === 0) {
        allLiF = 1;
        procentageOfFalled.textContent = p.toFixed(2) + " %";
    } else {
        p = (allLiF * 100) / allLi;
        procentageOfFalled.textContent = p.toFixed(2) + " %";
    }
    procentageOfFalled.classList.add("procentage2");
}

