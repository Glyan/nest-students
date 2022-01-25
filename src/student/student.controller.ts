import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

@Controller('students')
export class StudentController {

    @Get()
    getStudents() {
        return "All students";
    }

    @Get(':studentId')
    getStudentById(@Param('studentId') studentId: string) {
        return `Get student with id of ${studentId}`
    }

    @Post()
    createStudent(@Body() body) {
        console.log(body)
        return `Create student with data ${JSON.stringify(body)}`
    }

    @Put(':studentId') 
    updateStudent(@Param('studentId') studentId: string, @Body() body) {
        return `Updated student with id ${studentId} with data of ${JSON.stringify(body)}`
    }

}