export default function useQuizz(data) {
    const values = reactive({
        step: 1,
        score: 0,
        data: data
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