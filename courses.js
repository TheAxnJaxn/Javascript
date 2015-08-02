function Student(first, last) {
  this.first = first;
  this.last = last;
  this.courses = [];
};

Student.prototype.name = function() {
  return this.first + " " + this.last;
};

// enrolls student in course, unless already enrolled
Student.prototype.enroll = function(course) {
  if (this.courses.indexOf(course) === -1) {
    if (this.hasConflict(course)) {
      throw "Course conflict"
    }
    this.courses.push(course);
    course.addStudent(this);
  }
};

// returns hash of departments with total number of credits
// for student's enrolled courses
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
};

Student.prototype.hasConflict = function (newCourse) {
  var conflict = false;

  this.courses.forEach( function(course) {
    if(course.hasConflict(newCourse)) {
      conflict = true;
    };
  });

  return conflict;
};


function Course(name, department, credits, days, block) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
  this.days = days;
  this.block = block;
}

// adds student to Course's students Array
Course.prototype.addStudent = function(student) {
  if (this.students.indexOf(student) === -1) {
    this.students.push(student);
    student.enroll(this);
  }
};

// returns true if the two courses conflict
Course.prototype.hasConflict = function (secondCourse) {
  var firstCourse = this;
  var conflict = false;

  firstCourse.days.forEach( function(day1) {
    secondCourse.days.forEach( function(day2) {
      if(day1 === day2 && firstCourse.block === secondCourse.block) {
        conflict = true;
      }
    });
  });

  return conflict;
};
