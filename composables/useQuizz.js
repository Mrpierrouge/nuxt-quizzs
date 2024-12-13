export default function useQuizz(quizz) {
    const history = inject('history')
    const values = reactive({
        step: 1,
        score: 0,
        date: Date.now(),
        MAX_TIME: 50
    })
    const answer = (bool) => {
        if (bool) {
            const elapsedTime = (Date.now() - values.date ) / 100
            if (elapsedTime > values.MAX_TIME) {
                values.score+=10
            } else {
                for (let i = 0; i < values.MAX_TIME; i++) {
                    if (elapsedTime - 20 < i) {
                        values.score++
                    } 
                }
            }
        }
        values.step++
        values.date = Date.now()
        if (values.step > quizz.questions.length) {
            end();
        }
        return
    }
    const end = () => {
        history.addHistory(quizz, values.score)
        return
    }
    const restart = () => {
        values.score = 0;
        values.step = 1;
        values.date = Date.now();
    }
    return {
        values,
        answer,
        restart
    }
}