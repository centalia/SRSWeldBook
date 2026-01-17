import "./Table.scss";

const Table = () =>{
    const data = [
        {id:1, workshop:"ТЦ", number:"10927",  location:"4 пролет", model:"Cварочный роботизированный комплекс IGM RMB-9544", date:"сентябрь 2024 г.", worker: "Юрченко, Кирдянов" },
        {id:2, workshop:"ТЦ", number:"10997",  location:"4 пролет", model:"сварочный роботизированный комплекс", date:"сентябрь 2024 г.", worker: "Куцаков" },
        {id:3, workshop:"ЦМТ-2", number:"С002",  location:"14 пролет, 3 позиция", model:"Fronius TransSteel 5000", date:"декабрь 2024 г.", worker: "Кирдянов" },
        {id:4, workshop:"ЦМТ-2", number:"С003",  location:"14 пролет, 6 позиция", model:"Fronius TransSteel 5000", date:"октябрь 2025 гю", worker: "Куцаков" },
        {id:5, workshop:"ЦМТ-1", number:"С005",  location:"2 пролет", model:"HyperTherm PMX65-CE", date:"сентябрь 2024 г.", worker: "Епищенко" },
    ];

    return(
        <section className="weld__table">
            <div className="row row--header weld__table-row " >
                <div className="col weld__table-col">№</div>
                <div className="col weld__table-col">Цех</div>
                <div className="col weld__table-col">Номер</div>
                <div className="col weld__table-col">Местонахождение</div>
                <div className="col weld__table-col">Модель</div>
                <div className="col weld__table-col">Дата ТО</div>
                <div className="col weld__table-col">Наладчик</div>
            </div>
                        
            {data.map(row => ( 
                <div className="row weld__table-row">
                    <div className="col weld__table-col" key={`id-${row.id}`}>{row.id}</div>
                    <div className="col weld__table-col" key={`id-${row.workshop}`}>{row.workshop}</div>
                    <div className="col weld__table-col" key={`id-${row.number}`}>{row.number}</div>
                    <div className="col weld__table-col" key={`id-${row.location}`}>{row.location}</div>
                    <div className="col weld__table-col" key={`id-${row.model}`}>{row.model}</div>
                    <div className="col weld__table-col" key={`id-${row.date}`}>{row.date}</div>
                    <div className="col weld__table-col" key={`id-${row.worker}`}>{row.worker}</div>
                </div> 
            ))}
        </section>
    )
};
export default Table 