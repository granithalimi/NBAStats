export function nba({page, search}){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    let api = `https://nba-stats-db.herokuapp.com/api/playerdata/season/2023/${(page == undefined) ? '' : `?page=${page}`}`
    
    if(search != undefined && search.length > 0) {
        api = `https://nba-stats-db.herokuapp.com/api/playerdata/name/${search}`
    }
      
    return fetch(api, requestOptions)
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log('error', error))
}

export function nbaAllTime({page, search}){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    let api = `https://nba-stats-db.herokuapp.com/api/playerdata/topscorers/playoffs/2011/${(page == undefined) ? '' : `?page=${page}`}`

    if(search != undefined && search.length > 0) {
        api = `https://nba-stats-db.herokuapp.com/api/playerdata/name/${search}`
    }
      
    return fetch(api, requestOptions)
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log('error', error))
}

export function nbaPlayers(players, limit=null){
    const data = limit==null ? players : players.slice(0, limit)
    let html = '<div class="d-flex flex-column">'
    
    for(let players of data){
        html += `
            <a href="player.html?name=${players.player_name}" id="links" class="col-6">
                Player: <b><em>${players.id}</em></b>
                Name: <b><em>${players.player_name}</em></b>
            </a>
        `
    }
    
    html += '</div>'
    return html
}

