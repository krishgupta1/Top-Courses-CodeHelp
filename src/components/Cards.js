import React from "react";
import Card from "../components/Card"

const Cards = (props) => {
    let courses = props.courses;
    function getCourses () {
        let allCourses = [];
        // console.log("printing Courses");
        Object.values(courses).forEach(array => {
            array.forEach(courseData =>{
                allCourses.push(courseData);
            })
        })
        return allCourses;
    }

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
            getCourses().map((course) => {
            return<Card key={course.id} course={course}/>
            })
             }
        </div>
    )
};
export default Cards;