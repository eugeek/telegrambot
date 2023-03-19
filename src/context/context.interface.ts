import { Context } from 'telegraf'

export interface ISessionData {
    name: string
    learned: number
}

export interface IBotContext extends Context {
    session: ISessionData
}