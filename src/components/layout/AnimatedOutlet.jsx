import { useRef } from "react"
import { useOutlet } from "react-router"
import { usePresence } from "motion/react"

function AnimatedOutlet() {
    const [isPresent] = usePresence()
    const outlet = useOutlet()
    const outletRef = useRef(outlet)

    // Enquanto o componente estiver "presente" (não saindo), sempre atualiza
    // com o outlet mais recente -> navegação entre rotas funciona normal.
    // Só quando isPresent vira false (o Motion começou a animação de saída)
    // é que paramos de atualizar, travando o último conteúdo válido na tela.
    if (isPresent) {
        outletRef.current = outlet
    }

    return outletRef.current
}

export default AnimatedOutlet