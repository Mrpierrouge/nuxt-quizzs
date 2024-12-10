export default function useQuizz() {
    const values = reactive({
        step: 1,
        score: 0,

    })
    const answer = (bool) => {
        if (bool) {
            values.score++
        }
        values.step++
    }
    return {
        values,
        answer
    }
}