export function getPlayer(name){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
      
    return fetch(`https://nba-stats-db.herokuapp.com/api/playerdata/name/${name}`, requestOptions)
    .then(response => response.json())
    .then(result => result.results[0])
    .catch(error => console.log('error', error));
}