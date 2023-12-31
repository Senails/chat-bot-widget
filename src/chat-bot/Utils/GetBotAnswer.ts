import { Sleep } from "@/shared/Utils/Sleep/Sleep";
import type { TMessageType } from "../types"

export type TBotAnswer = {
    botMessage: TMessageType,
    fastMessagesForUser: string[]
}

export async function GetBotAnswer(userMessae: string):Promise<TBotAnswer>{
    await Sleep(1500);
    const fastMessagesForUser = ["Заказать пиццу", "Установить будильник", "Вывести погоду"];
    const botMessage = {
        id: Date.now(),
        text: "Привет! Что я могу для Вас сделать?",
        authorname: "Чат бот",
        date:""
    }

    if (userMessae === "Заказать пиццу"){ 
        botMessage.text="Я закажу пиццу. Что то еще?"
    }else if (userMessae === "Установить будильник"){ 
        botMessage.text="Я установлю будильник. Что то еще?"
    }else if (userMessae === "Вывести погоду"){ 
        botMessage.text="Я покажу погоду. Что то еще?"
    }else {botMessage.text="Я постараюсь сделать все что в моих силах. Что то еще?" }

    return {
        botMessage,
        fastMessagesForUser
    }
}