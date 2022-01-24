import { Controller, Get, Put } from "@nestjs/common"

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {

    @Get()
    getStudents() {
        return "Get teacher's students"
    }

    @Put(':studentId') 
    updateStudentTeacher() {
        return "Updated teacher's student"
    }

}