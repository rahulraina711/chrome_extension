let movieNames = ['The Shawshank Redemption', 'The Godfather', 'The Godfather: Part II', 'The Dark Knight', '12 Angry Men', "Schindler's List", 'The Lord of the Rings: The Return of the King', 'Pulp Fiction', 'The Lord of the Rings: The Fellowship of the Ring', 'Fight Club', 'Forrest Gump', 'Inception', 'The Lord of the Rings: The Two Towers', 'Star Wars: Episode V - The Empire Strikes Back', 'The Matrix', 'Goodfellas', "One Flew Over the Cuckoo's Nest", 'Se7en', "It's a Wonderful Life", 'The Silence of the Lambs', 'Star Wars', 'Saving Private Ryan', 'Interstellar', 'The Green Mile', 'Léon', 'The Usual Suspects', 'The Lion King', 'Modern Times', 'Hamilton', 'The Pianist', 'Back to the Future', 'Terminator 2: Judgment Day', 'American History X', 'Gladiator', 'Psycho', 'The Departed', 'Whiplash', 'The Prestige', 'Once Upon a Time in the West', 'Casablanca', 'Rear Window', 'The Great Dictator', 'Alien', 'Apocalypse Now', 'Memento', 'Raiders of the Lost Ark', 'Django Unchained', 'Joker', 'Paths of Glory', 'Witness for the Prosecution', 'Avengers: Infinity War', 'WALL·E', 'Sunset Blvd.', 'The Shining', 'Spider-Man: Into the Spider-Verse', 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', 'The Dark Knight Rises', 'Once Upon a Time in America', 'Avengers: Endgame', 'Coco', 'Aliens', 'Braveheart', 'American Beauty', 'Amadeus', 'Toy Story', 'Inglourious Basterds', 'Star Wars: Episode VI - Return of the Jedi', 'Good Will Hunting', 'Reservoir Dogs', '2001: A Space Odyssey', 'Requiem for a Dream', 'Vertigo', 'Eternal Sunshine of the Spotless Mind', "Singin' in the Rain", 'Citizen Kane', '1917', 'North by Northwest', 'Full Metal Jacket', 'Snatch', 'Scarface', 'A Clockwork Orange', 'The Sting', 'Lawrence of Arabia', 'The Apartment', 'Double Indemnity', 'Taxi Driver', 'Toy Story 3', 'To Kill a Mockingbird', 'Up', 'Indiana Jones and the Last Crusade', 'Heat', 'Green Book', 'L.A. Confidential', 'Monty Python and the Holy Grail', 'Die Hard', 'Batman Begins', 'Some Like It Hot', 'Judgment at Nuremberg', 'All About Eve', 'Unforgiven', 'The Great Escape', 'To Be or Not to Be', 'A Beautiful Mind', 'Casino', 'The Wolf of Wall Street', 'The Treasure of the Sierra Madre', 'Lock, Stock and Two Smoking Barrels', 'There Will Be Blood', 'Raging Bull', 'Klaus', 'Dial M for Murder', 'Shutter Island', 'Three Billboards Outside Ebbing, Missouri', 'Chinatown', 'V for Vendetta', 'The Elephant Man', 'Warrior', 'Inside Out', 'No Country for Old Men', 'The Thing', 'Gone with the Wind', 'Trainspotting', 'The Sixth Sense', 'Jurassic Park', 'The Truman Show', 'The Bridge on the River Kwai', 'On the Waterfront', 'The Message', 'Finding Nemo', 'Blade Runner', 'The Third Man', 'Kill Bill: Vol. 1', 'Room', 'Mary and Max', 'In the Name of the Father', 'Fargo', 'The Deer Hunter', 'Gran Torino', 'Before Sunrise', 'Hacksaw Ridge', 'Mr. Smith Goes to Washington', 'Soul', 'The Grand Budapest Hotel', 'Barry Lyndon', 'Gone Girl', 'Catch Me If You Can', 'Ford v Ferrari', 'Prisoners', 'The Big Lebowski', 'How to Train Your Dragon', 'The Red Shoes', "Hachi: A Dog's Tale", 'Network', '12 Years a Slave', 'White Heat', 'Cool Hand Luke', 'Harry Potter and the Deathly Hallows: Part 2', 'Ben-Hur', 'Mad Max: Fury Road', 'Inherit the Wind', 'Dead Poets Society', 'Ace in the Hole', 'Stand by Me', 'Song of the Sea', 'Million Dollar Baby', 'Logan', 'Into the Wild', 'Rush', "La leggenda del pianista sull'oceano", 'Platoon', 'Life of Brian', 'Rebecca', 'Sunrise: A Song of Two Humans', 'Hotel Rwanda', 'The Man Who Shot Liberty Valance', 'Paris, Texas', 'Spotlight', 'It Happened One Night', 'Rocky', 'What Ever Happened to Baby Jane?', 'Monsters, Inc.', 'Before Sunset', 'The Shop Around the Corner', 'Paper Moon', 'The Princess Bride', 'The Help', 'Pink Floyd: The Wall', 'The Grapes of Wrath', 'Lion', 'Scent of a Woman', 'All Quiet on the Western Front', 'Aladdin', 'Roman Holiday', 'Guardians of the Galaxy', 'Sweet Smell of Success', 'Gandhi', 'Butch Cassidy and the Sundance Kid', 'Pirates of the Caribbean: The Curse of the Black Pearl', 'The Terminator', 'Dogville', 'The Best Years of Our Lives', 'The Exorcist', 'Papillon', 'The Iron Giant', 'Beauty and the Beast', 'Groundhog Day', 'Dog Day Afternoon', 'The Sound of Music', 'The Imitation Game', 'Donnie Darko', 'Brief Encounter', 'Jaws', 'Anatomy of a Murder', 'The Wizard of Oz', 'Young Frankenstein', 'JFK', 'Dances with Wolves', 'The Incredibles', 'Ratatouille', 'The Bourne Ultimatum', 'Zootopia', 'Rain Man', 'The Avengers', "Rosemary's Baby", 'Kind Hearts and Coronets', 'The Night of the Hunter', 'Magnolia', 'Kill Bill: Vol. 2', 'La La Land', 'Twelve Monkeys', 'Out of the Past', "Who's Afraid of Virginia Woolf?", 'Blood Diamond', 'The Pursuit of Happyness', 'The Martian', 'Her', 'Fiddler on the Roof', 'Cat on a Hot Tin Roof', "The King's Speech", 'Blade Runner 2049', 'The Last Picture Show', 'Rio Bravo', 'Rope', 'Sling Blade', 'Touch of Evil', 'Annie Hall', 'The Nightmare Before Christmas', 'Cinderella Man', 'Togo', 'The Straight Story'];
// console.log(movieNames.length)
let movieSection = document.getElementById('movie');

// Creating a movie card class

class MovieCard {
    constructor(title) {
        this.title = title;
        this.url;

    };
    // this function concates the movie title received from the script with the API key and ststic address
    stringCon() {
        let API_KEY = "4e245984"; //"4e245984" // next time use an .env variable to store API keys 
        let url = "https://www.omdbapi.com/?apikey=" + API_KEY + "&t=" + this.title;
        // console.log(url);
        this.url = url
        return this
    };
    // this function fetches the data from the omdbAPI and creates elements in HTML for viewing
    theFetcher() {

        fetch(this.url).then((resp) => {
            //console.log(resp)
            //if(!resp.ok){console.log("Something went wrong")}
            return resp.json()
 
            })
            .then((data) => {
                if(data.Response=="False"){console.log(data.Error)}
                //console.log(data)
                if (data.Poster !== undefined) {
                    var posterDiv = document.createElement("div");
                    posterDiv.className = "poster-container";
                    posterDiv.style.backgroundImage = 'url(' + data.Poster + ')';
                    posterDiv.setAttribute("data-plot", data.Title + "\n" + data.Plot + "\n" + "Starring:\n" + data.Actors + "\nRating: " + data.imdbRating);


                    movieSection.appendChild(posterDiv);
                    // console.log(data.Title);
                }
             })
    }
}





// this snippet initializes the whole process
for (i = 0; i <= 6; i++) {
    var randomIdx = Math.floor(Math.floor(Math.random() * movieNames.length));
    var movieObj = new MovieCard(movieNames[randomIdx]);
    console.log(movieObj)
    movieObj.stringCon().theFetcher();
}