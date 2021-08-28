import React from 'react';
import Movie from './Movie';

export default class MovieList extends React.Component {

    render() {
        return (
            <div>
                <h1>Movie Review</h1>
                <div style={{ marginLeft: '25px' }}>
                    <Movie
                        movieName="Candyman"
                        director="Nia DaCosta"
                        yearReleased="2021"
                        runTime="91 minutes"
                        synopsis="Oscar® winner Jordan Peele and director Nia DaCosta unleash a fresh take on a cult horror classic. When artist Anthony McCoy (Yahya Abdul-Mateen II) begins to explore the blood-chilling urban legend of Candyman in his paintings, he opens a door to a complex past that unravels his sanity and unleashes a terrifying wave of violence."
                        rating={2}
                        reviews={['This was the worst movie ever.  I would rather die before watching it again.', 'This terrified my 8 year old when she watched it.  I wish we got the movie rating for viewers in this website.']}
                    />
                    <Movie
                        movieName="Reminiscence"
                        director="Lisa Joy"
                        yearReleased="2021"
                        runTime="116 minutes"
                        synopsis="A scientist discovers a way to relive your past and uses the technology to search for his long lost love."
                        rating={4}
                        reviews={['This was a great first-date movie.  My girlfriend was in a *good mood* afterward.', 'The people watching this movie were just awful.  They talked all the way through it.  One couple, apparently on their first date, were making out like no one\'s business.  I\'ll bet he got lucky after that movie.']}
                    />
                    <Movie
                        movieName="The Night House"
                        director="David Bruckner"
                        yearReleased="2021"
                        runTime="108 minutes"
                        synopsis="Reeling from the unexpected death of her husband, Beth (Rebecca Hall) is left alone in the lakeside home he built for her. She tries as best she can to keep it together - but then nightmares come. Disturbing visions of a presence in the house calling to her, beckoning her with a ghostly allure. Against the advice of her friends, she begins digging into her husband's belongings, yearning for answers. What she finds are secrets both strange and disturbing - a mystery she's determined to unravel. THE NIGHT HOUSE stars Rebecca Hall (GODZILLA VS. KONG), Sarah Goldberg (Barry, Elementary), Vondie Curtis Hall (DIE HARD 2, EVE'S BAYOU), Evan Jonigkeit (Togetherish, Sweetbitter), and Stacy Martin (VOX LUX, NYMPHOMANIAC)."
                        rating={5}
                        reviews={['I leave reviews just so people can see what I think.  What I think is important.', 'The guy that left that review is a moron.', 'Screw-you.  I am not.']}
                    />
                </div>
            </div>
        );
    }

}