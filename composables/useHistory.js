export default function useHistory() {
    const history = reactive([])
    const addHistory = (quizz, score) => {
        history.push({
            title: quizz.title,
            score: score,
            questions: quizz.questions
        })
        return
    }
    return {
        history,
        addHistory
    }
}