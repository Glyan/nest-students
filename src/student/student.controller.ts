import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from "./dto/student.dto"

@Controller('students')
export class StudentController {

    @Get()
    getStudents(): FindStudentResponseDto[] {
        return "All students";
    }

    @Get(':studentId')
    getStudentById(@Param('studentId') studentId: string): FindStudentResponseDto {
        return `Get student with id of ${studentId}`
    }

    @Post()
    createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
        console.log(body)
        return `Create student with data ${JSON.stringify(body)}`
    }

    @Put(':studentId') 
    updateStudent(@Param('studentId') studentId: string, @Body() body: UpdateStudentDto): StudentResponseDto {
        return `Updated student with id ${studentId} with data of ${JSON.stringify(body)}`
    }

}