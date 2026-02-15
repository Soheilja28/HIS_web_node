const {sql , poolpromise} = require('../utilities/mssql')

class CourseModel{

    static getCourses = async() => {
        const pool = await poolpromise
        const request = pool.request()
        const result = await request.execute('get_courses')
        console.log(result)
        return result.recordset
    }

    static getCourse = async(id)=>{
        const pool = await poolpromise
        const request = pool.request()
        request.input("ID" , sql.Int , id)
        const result = await request.query('select * from Courses where id = @ID') // MySQL : pool.query()
        console.log(result)
        return result.recordset
    }

    static insertCourse = async(course)=>{
        const pool = await poolpromise
        const request = pool.request()
        request.input("Course" , sql.NVarChar , course)
        const result = await request.query('insert into Courses(Course) values (@Course)')
        console.log(result)
        return result
    }


    static updateCourse = async (id , Course)=>{
        const pool = await poolpromise
        const request = pool.request()
        request.input("Course" , sql.NVarChar , Course)
        request.input("ID" , sql.Int , id)
        const result = await request.query('update Courses set Course = @Course where ID = @ID')
        console.log(result)
        return result
    }

    static deleteCourse = async (id) =>{
        const pool = await poolpromise
        const request = pool.request()
        request.input("ID" , sql.Int , id)
        const result = await request.query('delete from Courses where ID = @ID')
        console.log(result)
        return result
    }
}


module.exports = CourseModel