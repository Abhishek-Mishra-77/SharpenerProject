class Student {
   constructor(name, age, marks) {
     this.name = name;
     this.age = age;
     this.marks = marks;
   }
   
   setPlacementAge(minPlacementAge) {
     return (minMarks) => {
       return this.marks > minMarks && this.age > minPlacementAge;
     }
   }
 }
 
 const Riya = new Student("Riya", 20, 80);
 const isEligible = Riya.setPlacementAge(18)(40);
 console.log(isEligible); // true
 