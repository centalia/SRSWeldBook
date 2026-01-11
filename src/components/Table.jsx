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
        // <div className="table">
        //     <div className="table__header">№</div>
        //     <div className="table__header">Цех</div>
        //     <div className="table__header">Номер</div>
        //     <div className="table__header">Местонахождение</div>
        //     <div className="table__header">Модель</div>
        //     <div className="table__header">Дата ТО</div>
        //     <div className="table__header">Наладчик</div>
        //     {data.map(row => (
        //         <>
        //             <div className="table__row" key={`id-${row.id}`}>{row.id}</div>
        //             <div className="table__row" key={`id-${row.workshop}`}>{row.workshop}</div>
        //             <div className="table__row" key={`id-${row.number}`}>{row.number}</div>
        //             <div className="table__row" key={`id-${row.location}`}>{row.location}</div>
        //             <div className="table__row" key={`id-${row.model}`}>{row.model}</div>
        //             <div className="table__row" key={`id-${row.date}`}>{row.date}</div>
        //             <div className="table__row" key={`id-${row.worker}`}>{row.worker}</div>
        //         </>
        //     ))}
        // </div>
        <section class="tracker-table" role="table" >
        <div class="tracker-table__header" role="rowgroup">
            <div class="row row_header" role="row">
              <div class="col" role="columnheader">#</div>
              <div class="col" role="columnheader">Title</div>  
              <div class="col" role="columnheader">Status</div>  
              <div class="col" role="columnheader">Episode</div>
            </div>            
            <div class="row" role="row">
              <div class="col" role="columnbody">1</div>
              <div class="col" role="columnbody">Атака на титанов</div>  
              <div class="col status status--watching" role="columnbody">Смотрю</div>  
              <div class="col" role="columnbody">23</div>
            </div>            
            <div class="row" role="row">
              <div class="col" role="columnbody">2</div>
              <div class="col" role="columnbody">Рубеж Шангри-Ла</div>  
              <div class="col status status--planned" role="columnbody">В планах</div>  
              <div class="col" role="columnbody">26</div>
            </div>            
            <div class="row" role="row">
              <div class="col" role="columnbody">3</div>
              <div class="col" role="columnbody">Вампир не умеет сосать</div>  
              <div class="col status status--on-hold" role="columnbody">Отложено</div>  
              <div class="col" role="columnbody">12</div>
            </div>            
            <div class="row" role="row">
              <div class="col" role="columnbody">4</div>
              <div class="col" role="columnbody">Первородный грех Такопи</div>  
              <div class="col status status--dropped" role="columnbody">Брошено</div>  
              <div class="col" role="columnbody">12</div>
            </div>            
            <div class="row" role="row">
              <div class="col" role="columnbody">5</div>
              <div class="col" role="columnbody">Наруто</div>  
              <div class="col status status--completed" role="columnbody">Просмотрено</div>  
              <div class="col" role="columnbody">720</div>
            </div>
        </div>      
      </section>
    );
};
export default Table 