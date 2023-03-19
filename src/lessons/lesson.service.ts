import { ISessionData } from './../context/context.interface';


export class LessonService {
    lessonNo: number

    constructor(private session: ISessionData) {
        this.lessonNo = Math.floor((session.learned || 0) / 10)
    }

    startLesson() {
        // get from database new words
    }

    showNewWord() {
        
    }
}