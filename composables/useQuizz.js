export default function useQuizz() {

    const values = reactive({
        step: 1,
        score: 0,
        data: Date.now(),
        MAX_TIME: 50
    })
    const answer = (bool) => {
        if (bool) {
            values.score++
            const elapsedTime = (Date.now() - values.date ) / 100
            for (let i = 0; i < values.MAX_TIME; i++) {
                if (elapsedTime < i) {
                    values.score++
                }
            }
        }
        values.step++
        values.date = Date.now()
    }
    return {
        values,
        answer
    }
}