const CourseModel = require('../models/courses-model')


const get_All_Courses = (req , res)=>{
    const result = CourseModel.getCourses().then(result =>{
        res.send(result)
    })
}

const get_Courses_ByID = (req , res)=>{
    const result = CourseModel.getCourse(Number(req.params.id)).then(result =>{
        res.send(result)
    })
}


const post_new_course = (req , res)=>{
    const result = CourseModel.insertCourse(req.body.Course).then(result =>{
        res.send(result)
    })
}

const put_course_ByID = (req , res)=>{
    const result = CourseModel.updateCourse(Number(req.params.id) , req.body.Course).then(result =>{
        res.send(result)
   })
}

const delete_course_ByID = (req , res)=>{
   const result = CourseModel.deleteCourse(Number(req.params.id)).then(result =>{
        res.send(result)
    })
}


module.exports = {
    get_All_Courses,
    get_Courses_ByID,
    post_new_course,
    put_course_ByID,
    delete_course_ByID
}