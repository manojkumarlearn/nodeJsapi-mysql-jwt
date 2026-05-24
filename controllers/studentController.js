const db = require("../config/db");

// GET All Student Lists
const getAllStudents = async (req, res) => {
    console.log("---getAllStudents----");
    try {
        const [records] = await db.query("SELECT * FROM tblStudent")
        if(!records)
        {
            res.status(404).send({
                success: false,
                message: "No records found!!!",
                statusCode: 404,
                totalRecords: 0,
                data: []
            });
        }
        res.status(200).send({
            success: true,
            message: "All records found!!!",
            statusCode: 200,
            totalRecords: records.length,
            data: records,            
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Get All Students",
            statusCode: 500,
            totalRecords: 0,
            data: error
        });
    }
};

const getAllStudentsById = async (req, res) => {
    try {
        const studentId = req.params.id;
        const [records] = await db.query(`SELECT * FROM tblStudent where id=?`, [studentId]);
        if(!records)
        {
            res.status(404).send({
                success: false,
                message: "No records found!!!",
                statusCode: 404,
                totalRecords: 0,
                data: []
            });
        }
        res.status(200).send({
            success: true,
            message: "All records found!!!",
            statusCode: 200,
            totalRecords: records.length,
            data: records,            
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Get All Students By Id",
            statusCode: 500,
            totalRecords: 0,
            data: error
        });
    }
};

const createStudent = async (req, res) => {
    try {
        const {name, age} = req.body;
        const data = await db.query(`INSERT INTO tblStudent(name, age) values(?, ?)`, [name, age]);
        if(!data)
        {
            res.status(404).send({
                success: false,
                message: "No records found!!!",
                statusCode: 404,
                totalRecords: 0,
                data: []
            });
        }
        res.status(200).send({
            success: true,
            message: "record created successfully!!!",
            statusCode: 200,
            totalRecords: 1,
            data: [],            
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in create Students",
            statusCode: 500,
            totalRecords: 0,
            data: error
        });
    }
};

const updateStudent = async (req, res) => {
    try {
        const {name, age} = req.body;
        const studentId = req.params.id;
        const data = await db.query(`UPDATE tblStudent SET name = ?, age = ? WHERE id = ?`, [name, age, studentId]);
        if(!data)
        {
            res.status(404).send({
                success: false,
                message: "No records found!!!",
                statusCode: 404,
                totalRecords: 0,
                data: []
            });
        }
        res.status(200).send({
            success: true,
            message: "record updated successfully!!!",
            statusCode: 200,
            totalRecords: 1,
            data: [],            
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in update Students",
            statusCode: 500,
            totalRecords: 0,
            data: error
        });
    }
};

module.exports = { getAllStudents, getAllStudentsById, createStudent, updateStudent };