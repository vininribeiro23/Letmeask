import { useEffect, useState } from "react";
import { database } from "../services/firebase";

type FirebaseQuestions = Record<string, {
    author: {
    name: string;
    avatar: string;
}
content: string;
isAnswered: boolean;
isHighlighted: boolean;
}>

type QuestionType = {
    id: string;
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;

}

export function useRoom(rooomId: string){
    const [questions, setQuestions] = useState<QuestionType[]>([])
    const [title, setTitle] = useState('');

    useEffect(() => {
        const roomRef = database.ref(`rooms/${rooomId}`);

        roomRef.on('value', room => {
            const databaseRoom = room.val();
            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};
            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author:value.author,
                    isHighlighted: value.isHighlighted,
                    isAnswered: value.isHighlighted,
                }
            })
            setTitle(databaseRoom.title);
            setQuestions(parsedQuestions)
            
        })
    }, [rooomId])
    return{questions, title}
}