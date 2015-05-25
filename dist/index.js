'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

console.clear();

// using ES6
//--------------------------
// show gulp, then webpack
// GULP
/*
npm install gulp gulp-babel

*/

var message = 'gulp is running, still';
console.log(message);

// fat arrow
//--------------------

var isEven = function isEven(num) {
  return num % 2 === 0;
};
console.log(isEven(5));
var isEven = function isEven(num) {
  return num % 2 === 0;
};
console.log(isEven(5));

var log = function log(val) {
  console.log(val);
};
log('log is easier than console.log');
var log = function log(val) {
  return console.log(val);
};
log('log is easier as a fat arrow');

// more elegant use in array.forEach
var starWarsActors = [{ name: 'Mark Hamill', age: 63 }, { name: 'Carrie Fisher', age: 58 }, { name: 'Harrison Ford', age: 72 }];

function totalAges(chars) {
  var age = 0;
  chars.forEach(function (char) {
    age += char.age;
  });
  return age;
}
console.log(totalAges(starWarsActors));

function totalAges2(chars) {
  var age = 0;
  chars.forEach(function (char) {
    return age += char.age;
  });
  return age;
}
console.log(totalAges2(starWarsActors));

// use with MAP
console.log(starWarsActors.map(function (char) {
  return char.name;
}));

// it does take a little bit of getting used to to make sure the syntax is right, but it's pretty easy

// class
//-------------------------
// get a volunteer, ask them to come up and code up a student class by hand
function Student(name, age, enrolled) {
  this.name = name;
  this.age = age;
  this.enrolled = enrolled;
}

Student.prototype.register = function (courseId) {
  if (!this.enrolled) {
    throw 'student not registered';
  } else {
    console.log('class registered!');
  }
};

//class Student {
//  constructor(name, age, enrolled) {
//    this.name = name;
//    this.age = age;
//    this.enrolled = enrolled;
//  }
//  register(courseId) {
//    if(!this.enrolled) {
//      throw('student not registered');
//    } else {
//      console.log('class registered!');
//    }
//  }
//}

var student = new Student('Joe', 35, true);
console.log(student.name, student.age, student.enrolled);
student.register();

// default parameters
//----------------
var defaultEnrolled = true;
/*class Student {
  constructor(name, enrolled) {
    this.name = name;
    this.enrolled = enrolled || defaultEnrolled;
  }
  toString() {
    return this.name + " - " + (this.enrolled ? "Enrolled" : "NOT Enrolled");
  }
}*/
/*
class Student {
  constructor(name, enrolled=defaultEnrolled) {
    this.name = name;
    this.enrolled = enrolled;
  }
  toString() {
    return this.name + " - " + (this.enrolled ? "Enrolled" : "NOT Enrolled");
  }
}


// this works with no parameter, but with a false, it fails.
var newStudent = new Student("Joe Eames", false);

console.log(newStudent.toString());*/

// destructuring
//--------------------------------

var x = 3;
var y = 4;
var _ref = [y, x];
x = _ref[0];
y = _ref[1];
// the [] on the left of the = says "i'm destructuring an array" not creating one
console.log('x', x, 'y', y);

var _firstName = { firstName: 'bob' };
var firstName = _firstName.firstName;

console.log(firstName);

var getStudent = function getStudent() {
  return {
    firstName: 'joe',
    lastName: 'eames'
  };
};

var _getStudent = getStudent();

var fname = _getStudent.firstName;

console.log(fname);

//class Http {
//  request(url, options) {
//    this.url = url;
//    if(options.method === "POST" && !!options.data) {
//      // do post
//    }
//  }
//}

var Http = (function () {
  function Http() {
    _classCallCheck(this, Http);
  }

  _createClass(Http, [{
    key: 'request',
    value: function request(url, _ref2) {
      var data = _ref2.data;
      var method = _ref2.method;

      this.url = url;
      if (method === 'POST' && !!data) {}
    }
  }]);

  return Http;
})();

// do post

// module systems
// make a new course.js file.  create a course class

// start with just importing course
//import {Max as CourseMaxStudents, Course} from './course.js'
//import * as crse from './course.js';
//console.log(crse);
//var course = new Course(3, 'JavaScript 101');
//course.addTime('Mon', '10:00');
//console.log('schedule', course.schedule[0]);

// then add the Max var in course.js and change import to:
// import {Max as CourseMaxStudents, Course} from './course.js'
// console.log(CourseMaxStudents);