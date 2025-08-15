function leapYear(year){
    if(year%100!==0 && year%4===0){
        return true;
    }
    else if(year%400 === 0){
        return true;
    }
    else{
        return false;
    }
}

const lpYear = leapYear(1900);
const lpYear1 = leapYear(2000);
const lpYear2 = leapYear(2052);
const lpYear3 = leapYear(2040);
console.log(lpYear,lpYear1,lpYear2, lpYear3);