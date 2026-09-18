import {Search, SearchCode} from 'lucide-react'

export function SearchBar() {
    return (
        <div className="flex flex-row w-full min-w-full h-[40px] p-2 component-background rounded-lg items-center gap-3">

            <Search className={"shrink-0"} size={20} color={"var(--color-primary)"} />
            <input className="bg-transparent border-none w-full focus:outline-none focus:ring-0" type="text" placeholder="Pesquisar" />

        </div>
    )
}