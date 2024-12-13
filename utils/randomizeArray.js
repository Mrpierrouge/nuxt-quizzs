export default function randomizeArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
    
        // Échange les éléments aux positions i et j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}