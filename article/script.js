addEventListener('click', (event) => onClick(event));


function onClick(event) {
    reducer(event.target.id);
}

function reducer(action) {
    switch (action) {
        case 'align-center':
        case 'align-left':
        case 'align-right':
            document.getElementById('title').className = action;
            break;
        case 'white-space-nowrap':
        case 'work-breal-all':
            document.getElementById('details-article').className = action;
            break;
        default:
            break;
    }
}