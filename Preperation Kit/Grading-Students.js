
/* Given a time in hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.  */


let array = [74, 73, 70, 0, 10, 100]

function gradingStudents(grades) {
    // Write your code here
    let diff = 0;
    const newGrades = grades.map((grade)=>{
        if(grade >= 38){
            if(grade % 5 >= 3){
                diff = 5 - (grade % 5)
                return grade + diff;
            }
            if(grade % 5 < 3 || grade == 0){
               return grade;
            }
        } else {
            return grade;
        }
    });
        return newGrades;
}
console.log(gradingStudents(array));