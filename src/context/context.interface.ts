import { Context } from 'telegraf'

export interface ILesson {
    lessonId: number | null
    currentTask: number | null
}

export interface ISessionData {
    name: string
    completedLessons: number
    lesson: ILesson | null
}

export interface IBotContext extends Context {
    session: ISessionData
}