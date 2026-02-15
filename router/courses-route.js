const express = require('express')
const router = express.Router()
const CoursesController = require('../controller/courses-controller')




router.get("/" ,CoursesController.get_All_Courses)
router.get("/:id" , CoursesController.get_Courses_ByID)
router.post("/" , CoursesController.post_new_course)
router.put('/:id' , CoursesController.put_course_ByID)
router.delete("/:id" , CoursesController.delete_course_ByID)

module.exports = router