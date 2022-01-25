import { Controller, Get, Put, Param } from "@nestjs/common"

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {

    @Get()
    getStudents(@Param('teacherId') teacherId: string) {
        return `Get teacher's students with id of ${teacherId}`
    }

    @Put(':studentId') 
    updateStudentTeacher(@Param('teacherId') teacherId: string, @Param('studentId') studentId: string) {
        return `Updated student with id of ${studentId} to teacher with id of ${teacherId}`
    }

}