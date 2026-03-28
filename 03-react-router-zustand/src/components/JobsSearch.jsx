import { useId, useRef } from "react"
import { useSearchForm } from "../hooks/useSearchForm"

function SearchBar({initialValue, searchId, onTextChange}) {
    return (
        <div className="relative flex items-center bg-input-bg rounded-lg shadow-lg shadow-shadow py-1 px-2 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
            </svg>

            <input
                className="flex-1 bg-transparent border-none outline-none text-text-primary py-3 px-2 text-base placeholder:text-[#64748b]"
                defaultValue={initialValue} 
                name={searchId} 
                id="empleos-search-input" 
                type="text"
                placeholder="Buscar trabajos, empresas o habilidades" 
                onChange={onTextChange}
            />
        </div>
    )
}   

function TechnologyFilter({initialValue, technologyId}) {
    return (
        <select
            className="bg-[#242d3a] border-none rounded-lg py-2.5 px-5 text-sm text-[#ddd] cursor-pointer transition-all duration-200 appearance-none pr-10 hover:bg-primary-hover hover:text-white focus:outline-2 focus:outline-solid focus:outline-primary-outline focus:outline-offset-2"
            name={technologyId}
            id="filter-technology"
            defaultValue={initialValue}
        >
            <option value="">Tecnología</option>
            <optgroup label="Tecnologías populares">
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="react">React</option>
                <option value="nodejs">Node.js</option>
            </optgroup>
            <option value="java">Java</option>
                <hr />
            <option value="csharp">C#</option>
            <option value="c">C</option>
            <option value="c++">C++</option>
                <hr />
            <option value="ruby">Ruby</option>
            <option value="php">PHP</option>
        </select>
    )
}

function LocationFilter({initialValue, locationId}){
    return (
        <select
            className="bg-[#242d3a] border-none rounded-lg py-2.5 px-5 text-sm text-[#ddd] cursor-pointer transition-all duration-200 appearance-none pr-10 hover:bg-primary-hover hover:text-white focus:outline-2 focus:outline-solid focus:outline-primary-outline focus:outline-offset-2"
            name={locationId}
            id="filter-location"
            defaultValue={initialValue}
        >
            <option value="">Ubicación</option>
            <option value="remoto">Remoto</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="monterrey">Monterrey</option>
            <option value="barcelona">Barcelona</option>
        </select>
    )
}

function ExperienceLevelFilter({initialValue, experienceLevelId}){
    return (
        <select
            className="bg-[#242d3a] border-none rounded-lg py-2.5 px-5 text-sm text-[#ddd] cursor-pointer transition-all duration-200 appearance-none pr-10 hover:bg-primary-hover hover:text-white focus:outline-2 focus:outline-solid focus:outline-primary-outline focus:outline-offset-2"
            name={experienceLevelId}
            id="filter-experience-level"
            defaultValue={initialValue}
        >
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
        </select>
    )
}

export function JobsSearch({initialFilters, initialText, onFilterChange, onTextChange, onReset, showResetButton}) {
    const searchId = useId();
    const technologyId = useId();
    const locationId = useId();
    const experienceLevelId = useId();
    const formRef = useRef(null);

    const { handleChangeFilter, handleReset } = useSearchForm({
        technologyId,
        locationId,
        experienceLevelId,
        searchId,
        onFilterChange,
        onTextChange,
        onReset
    });

    return (
        <section className="h-auto text-center flex flex-col justify-center items-center m-0 p-0">
          <h1 className="text-[2.5rem] text-balance flex items-center gap-2 mt-9 mb-1">Encuentra tu próximo trabajo</h1>
          <p className="text-balance text-lg text-text-muted mb-6">Explora miles de oportunidades en el sector tecnológico.</p>

          <form className="max-w-7xl w-full my-0 mx-auto px-4" ref={formRef} role="search" onChange={handleChangeFilter}>
            <SearchBar initialValue={initialText} searchId={searchId}/>

            <div className="flex flex-wrap mt-2 flex-row rounded-lg gap-2">
                <TechnologyFilter initialValue={initialFilters.technology} technologyId={technologyId} />
                <LocationFilter initialValue={initialFilters.location} locationId={locationId} />
                <ExperienceLevelFilter initialValue={initialFilters.experienceLevel} experienceLevelId={experienceLevelId} />
                {
                    showResetButton && (
                        <button
                            type="button"
                            onClick={() => handleReset(formRef)}
                            className="py-3 px-6 ml-auto rounded-lg bg-primary font-normal border-none cursor-pointer transition-all duration-200 text-base whitespace-nowrap text-white hover:outline-2 hover:outline-solid hover:outline-white hover:outline-offset-2 hover:bg-primary-hover focus:outline-2 focus:outline-solid focus:outline-white focus:outline-offset-2 focus:bg-primary-hover active:scale-90 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Limpiar filtros
                        </button>
                    )
                }
            </div>
          </form>

          <span id="filter-selected-value"></span>
        </section>
    )    
}    