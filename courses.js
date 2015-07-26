function Student(first, last) {
  this.first = first;
  this.last = last;
  this.courses = [];
}

Student.prototype.name = function() {
  return this.first + " " + this.last;
};

Student.prototype.enroll = function(course) {
  if (!this.courses.includes(course)) {
    this.courses.push(course);
    course.addStudent(this);
  }
};

Student.prototype.courseLoad = function() {
  var courseLoadHash = {};
  this.courses.forEach( function(course) {
    if (course.department in courseLoadHash) {
      courseLoadHash[course.department] += course.credits
    }
    else {
      courseLoadHash[course.department] = course.credits
    }
  } );
  return courseLoadHash;
}

function Course(name, department, credits) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
}

Course.prototype.addStudent = function(student) {
  if (!this.students.includes(student)) {
    this.students.push(student);
    student.enroll(this);
  }
}



if (![].includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1]) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) {
        return true;
      }
      k++;
    }
    return false;
  };
}
