import { Controller, Get, Put, Param } from "@nestjs/common"
import { FindStudentResponseDto, StudentResponseDto } from "../student/dto/student.dto";

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {

    @Get()
    getStudents(@Param('teacherId') teacherId: string): FindStudentResponseDto[] {
        return `Get teacher's students with id of ${teacherId}`
    }

    @Put(':studentId') 
    updateStudentTeacher(@Param('teacherId') teacherId: string, @Param('studentId') studentId: string): StudentResponseDto {
        return `Updated student with id of ${studentId} to teacher with id of ${teacherId}`
    }

}