const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.json())
const coursesRout = require('./router/courses-route')
const { sql, poolpromise } = require('./utilities/mssql'); // فایل اتصال
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs'); 



// const usersRout = require('./router/user-route')
// const Log = require('./middleware/Log')

// app.use("/api/users" , usersRout)
// app.use("/api/courses" , coursesRout)
// app.use("/log" , Log)

// app.get("/upload-bill", (req, res) => {
//   res.render("upload-bill");
// });



app.get("/",(req, res)=>{
    res.render("index")
})

app.post('/save-patient', async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      father_name,
      national_id,
      birth_date,
      gender
    } = req.body;

    const pool = await poolpromise;

    await pool.request()
      .input('first_name', sql.NVarChar, first_name)
      .input('last_name', sql.NVarChar, last_name)
      .input('father_name', sql.NVarChar, father_name)
      .input('national_id', sql.NVarChar, national_id)
      .input('birth_date', sql.Date, birth_date)
      .input('gender', sql.NVarChar, gender)
      .query(`
        INSERT INTO patients
        (first_name, last_name, father_name, national_id, birth_date, gender)
        VALUES
        (@first_name, @last_name, @father_name, @national_id, @birth_date, @gender)
      `);

    res.json({ success: true, message: "اطلاعات با موفقیت ذخیره شد" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "خطا در ذخیره اطلاعات" });
  }
});



// ================================================
const PORT = process.env.PORT || 3000 
app.listen(PORT,()=>{
    console.log("server is running..")
})