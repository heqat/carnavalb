export default function CardBloco({ nome, dia, horario, categoria, localizacao, mapa }) {
    return (
        <div className="card border border-2 m-1 bloco">
            {/* Categoria no canto superior direito */}
            <div className="container-categoriabloco">
                <span className="categoria bloco">{categoria}</span>
            </div>

            <div className="card-body bloco d-flex justify-content-between flex-column">
                {/* Nome e Dia */}
                <div>
                    <span className="dia bloco">{dia}</span>
                    <h5 className="card-title bloco">{nome}</h5>
                </div>

                {/* Horário e Localização */}
                <div className="info-bloco">
                    <h6 className="card-subtitle bloco">
                        <i className="text-white bx bx-time"></i> {horario}
                    </h6>
                    <h6 className="card-subtitle bloco">
                        <i className="text-white bx bx-map-pin"></i> 
                     {localizacao}
                    </h6>
                </div>
            </div>
        </div>
    );
}
