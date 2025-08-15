function resultReport( marks ) {
    // You have to write your code here
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let totalMarks = 0;
    let pass = [];
    let fail = [];
    for (const mark of marks) {
        totalMarks += mark;

        if (mark >= 40) {
            pass.push(mark);
        } else {
            fail.push(mark);
        }
    }
    const averageMarks =  totalMarks / marks.length;
    
    const result = {
        finalScore: Math.round(averageMarks),
        pass: pass.length,
        fail: fail.length
    }
    return result;

}