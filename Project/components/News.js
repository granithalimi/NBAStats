export function mostFieldGoals(players){
    let bestPlayer = players[0]
    
    for(let n of players){
        if(n.field_goals > bestPlayer.field_goals){
            bestPlayer = n
        }
    }
    
    let html = `
        <p>What to expect: Headaches. The 76ers again reign as Team Turmoil. Only two years removed from watching former No. 1 pick Ben Simmons sit out and cause a roster disruption, the Sixers are at it again with James Harden. All Harden did in the offseason was pick up a $35.6 million contract option only to then demand a trade. When the Sixers couldn't find a suitor, Harden called team president Daryl Morey a liar and vowed he would never again play for a team run by Morey. Harden did report to the final days of training camp and practiced to meet certain contractual obligations before he skipped practices ahead of the preseason finale. The 76ers can only hope reigning NBA MVP and two-time scoring champion Joel Embiid and guard Tyrese Maxey can keep them afloat under first-year coach Nick Nurse until the situation is resolved.</p>
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
        <p>“I mean I try to get the easiest shot possible, but at this point in my career, all those shots are just repetition,” Randle said. “So just continuing to get my reps in, continuing to clean up my footwork, and continuing to try to find ways to get easier baskets, too.”NEW YORK — Twenty points and 10 rebounds. Eight made shots on 13 attempts. Four made 3s on six tries. Only one turnover — albeit in a blowout preseason loss to the Washington Wizards on Wednesday. This is the definition of the improved efficiency Julius Randle alluded to during training camp in Charleston, S.C. in early October. And if the limited sample size is an indication of the level of play to expect from the three-time All-Star this season, another jump in production for the Knicks star could be in store. Randle, who was one of just four NBA players to average 25 points, 10 rebounds and four assists last season — the other three being league MVPs — wants to build off his performance in the preseason finale.</p>
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
        <p>Tatum tallied 28 points (9-15 FG, 5-8 3Pt, 5-5 FT), eight rebounds, four assists, three steals and one block over 30 minutes in Tuesday's 123-110 preseason win over New York. Tatum returned after missing back-to-back games due to rest, leading the Celtics in scoring and steals while hauling in a team-high-tying rebound total in the preseason win. Tatum has appeared in two preseason games so far, averaging 20.5 points, 9.0 rebounds, 4.5 assists and 2.0 steals over 28.5 minutes over that span.</p>
    `
    return html
}