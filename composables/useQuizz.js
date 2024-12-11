export default function useQuizz() {

    const values = reactive({
        step: 1,
        score: 0,
        date: Date.now(),
        MAX_TIME: 50
    })
    const answer = (bool) => {
        if (bool) {
            const elapsedTime = (Date.now() - values.date ) / 100
            console.log(elapsedTime)
            for (let i = 0; i < values.MAX_TIME; i++) {
                if (elapsedTime - 10 < i) {
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