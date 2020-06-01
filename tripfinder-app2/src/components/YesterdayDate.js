import React from "react"
import modelInstance from "../data/Model"

const yesterdayDate = () => {

    let todayDate = modelInstance.departureDate;
    let yesterdayDate;

    let returnDate = modelInstance.returnDate;


    function getYear() {
        let year = todayDate.slice(0, 4);
        return parseInt(year);
    }
    function getMonth() {
        let month = todayDate.slice(5, 7);
        return parseInt(month);
    }
    function getDay() {
        let day = todayDate.slice(8, 10);
        return parseInt(day);
    }

    function daysInMonth(m){
        var d= new Date(2020, m, 0);
        return d.getDate();
    }

    function getYesterday() {
        if(getMonth() === 1) {
            if(getDay() === 1) {
                yesterdayDate = (getYear() - 1) + "-12-31"
                return;
            }
        }
        else if(getDay() === 1) {
            yesterdayDate = getYear() + "-" + (getMonth() - 1) + "-" + daysInMonth(getMonth - 1)
            return;
        }
        yesterdayDate = getYear() + "-" + getMonth() + "-" + (getDay() - 1)
    }

    console.log(getDay(), getMonth(), getYear())
    return null;
}
export default yesterdayDate;