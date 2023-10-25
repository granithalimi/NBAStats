export function mostFieldGoals(players){
    let bestPlayer = players[0]
    
    for(let n of players){
        if(n.field_goals > bestPlayer.field_goals){
            bestPlayer = n
        }
    }
    
    let html = `
        <p>The 76ers can only hope reigning NBA MVP and two-time scoring...</p>
        <br>
        <a href="news.html" class="btn btn-sm btn-outline-dark w-25">Learn more...</a>
    `
    return html
}

export function mostMinutesPlayed(players){
    let bestPlayer = players[0]
    
    for(let n of players){
        if(n.minutes_played > bestPlayer.minutes_played){
            bestPlayer = n
        }
    }
    
    let html = `
        <p>“I mean I try to get the easiest shot possible, but at this point in my career, all those shots are just repetition...</p>
        <br>
        <a href="news.html" class="btn btn-sm btn-outline-dark w-25">Learn more...</a>
    `
    return html
}

export function mostThreesScored(players){
    let bestPlayer = players[0]
    
    for(let n of players){
        if(n.three_fg > bestPlayer.three_fg){
            bestPlayer = n
        }
    }
    
    let html = `
        <p>Tatum tallied 28 points (9-15 FG, 5-8 3Pt, 5-5 FT), eight rebounds, four assists...</p>
        <br>
        <a href="news.html" class="btn btn-sm btn-outline-dark w-25">Learn more...</a>
    `
    return html
}