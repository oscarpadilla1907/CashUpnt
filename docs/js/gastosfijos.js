function createGastoFijo() {

}

function generarGastosFijos(){


    let div_container = document.createElement('div');
    div_container.classname = 'container2';

    for(i = 0; i < 5; i++){
        let center_tag = document.createElement('center');
    div_container.appendChild(center_tag);

    let div_card = document.createElement('div');
    div_card.className = 'card text-center';
    div_card.style = 'width: 18rem;';
    center_tag.appendChild(div_card);

    let div_card_body = document.createElement('div');
    div_card_body.className = 'card-body';
    div_card.appendChild(div_card_body);

    let card_title = document.createElement('h5');
    card_title.className = 'card-title';
    card_title.innerText = 'Cobro de ';

    let span_gasto = document.createElement('span');
    span_gasto.className = 'asuntogasto';
    span_gasto.innerText = 'Coche';
    card_title.appendChild(span_gasto);
    div_card_body.appendChild(card_title);
    
    let importe = document.createElement('p');
    importe.className = 'card-text';
    importe.innerText = '186,99 €';
    div_card_body.appendChild(importe);

    let fecha = document.createElement('p');
    fecha.className = 'card-text';
    fecha.innerText = 'Se cobra el dia';

    let fechanum = document.createElement('span');
    fechanum.className = 'asuntogasto';
    fechanum.innerText = '13';
    fecha.appendChild(fechanum);
    div_card_body.appendChild(fecha);
    }

    document.body.appendChild(div_container);
}