// ============================================================
// SHARED DATA — villain-origins dataset
// Used by index.html (the dossier) and dataset.html (methodology).
// ============================================================

const decades = [
  { id: "1940s", year: 1945, label: "1940s", era: "World War II",       deck: "Hollywood mobilizes. Nazi officers and Imperial Japan dominate the screen; even noir villains feel like a wartime hangover." },
  { id: "1950s", year: 1955, label: "1950s", era: "The Red Scare",      deck: "Soviet spies arrive on screen. Aliens stand in for communists. The other major register is small-town American anxiety." },
  { id: "1960s", year: 1965, label: "1960s", era: "Cold War peak",      deck: "Bond institutionalizes the Soviet villain: SPECTRE, Red China, the Manchurian Candidate. Norman Bates and the proto-Corleones suggest the threat is also closer to home." },
  { id: "1970s", year: 1975, label: "1970s", era: "Disillusion",        deck: "Watergate, Vietnam, the oil crisis. Hollywood turns its lens inward: corrupt cops, evil corporations, broken families. The biggest villain category this decade is American." },
  { id: "1980s", year: 1985, label: "1980s", era: "Reagan's America",   deck: "Soviets return at maximum volume — Drago, Red Dawn, Rambo. Nazi-looters chase Indiana Jones. Yuppies and corporations metastasize." },
  { id: "1990s", year: 1995, label: "1990s", era: "Unipolar moment",    deck: "The Wall falls. The Russians are briefly reduced to mobsters. Terrorists, Serbs, and rogue generals fill the gap. Domestic serial killers and Wall Street rise to dominate." },
  { id: "2000s", year: 2005, label: "2000s", era: "War on Terror",      deck: "9/11 reshapes everything. The Middle East category swells: Iraq, Saudi Arabia, Afghanistan, Persia, 300's Xerxes. Alongside them, billionaires, oil men, and the Joker carry the domestic side." },
  { id: "2010s", year: 2015, label: "2010s", era: "The Return",         deck: "Russia comes back: John Wick, Atomic Blonde, MI: Ghost Protocol. North Korea has a brief moment. The loudest villains are American — tech bros, white supremacists, the Get Out family." },
  { id: "2020s", year: 2023, label: "2020s", era: "Anxious present",    deck: "The villain is the algorithm, the billionaire, the autocrat, the bomb. Russia returns again. AI takes over for the alien." }
];

const keys = ["Germany", "Russia", "Middle East", "North Korea", "China", "Japan", "UK", "Latin America", "USA", "Vietnam", "Other"];

const fullNames = {
  "Germany":       "Germany",
  "Russia":        "Russia / USSR",
  "Middle East":   "Middle East",
  "North Korea":   "North Korea",
  "China":         "China",
  "Japan":         "Japan",
  "UK":            "United Kingdom",
  "Latin America": "Latin America",
  "USA":           "USA (Domestic)",
  "Vietnam":       "Vietnam",
  "Other":         "Non-national"
};

// Cold War Declassified palette — ink tones on manila
const colors = {
  "Germany":       "#5a1818",
  "Russia":        "#b03020",
  "Middle East":   "#7a5530",
  "North Korea":   "#3a4a1a",
  "China":         "#6b2a1a",
  "Japan":         "#a05a30",
  "UK":            "#1a3550",
  "Latin America": "#3d6b3d",
  "USA":           "#475670",
  "Vietnam":       "#4a5430",
  "Other":         "#5a2a5a"
};

// films[decade][country] = [[title, year, villain], ...]
const films = {
  "1940s": {
    Germany: [
      ["Casablanca", 1942, "Maj. Heinrich Strasser"],
      ["Notorious", 1946, "Alex Sebastian"],
      ["Foreign Correspondent", 1940, "Stephen Fisher"],
      ["Lifeboat", 1944, "Willi"],
      ["Sahara", 1943, "Capt. von Schletow"],
      ["To Be or Not to Be", 1942, "Col. Ehrhardt"],
      ["Sergeant York", 1941, "The German Army"],
      ["Watch on the Rhine", 1943, "Teck de Brancovis"],
      ["The Great Dictator", 1940, "Adenoid Hynkel"],
      ["Mrs. Miniver", 1942, "The German pilot"],
      ["The Mortal Storm", 1940, "Fritz Marberg"],
      ["Hangmen Also Die!", 1943, "Reinhard Heydrich"],
      ["The Stranger", 1946, "Franz Kindler"],
      ["This Land Is Mine", 1943, "Major von Keller"],
      ["Saboteur", 1942, "Charles Tobin / Fry"],
      ["Five Graves to Cairo", 1943, "Field Marshal Rommel"]
    ],
    Japan: [
      ["Bataan", 1943, "Imperial Japanese Army"],
      ["Thirty Seconds Over Tokyo", 1944, "Japanese Forces"],
      ["Air Force", 1943, "Japanese Forces"],
      ["They Were Expendable", 1945, "Imperial Japanese Navy"],
      ["Wake Island", 1942, "Japanese forces"],
      ["Guadalcanal Diary", 1943, "Japanese forces"],
      ["Objective, Burma!", 1945, "Japanese army"],
      ["The Purple Heart", 1944, "Japanese tribunal"],
      ["Behind the Rising Sun", 1943, "Imperial Japan"],
      ["Back to Bataan", 1945, "Imperial Japanese Army"]
    ],
    UK: [
      ["The Maltese Falcon", 1941, "Kasper Gutman"]
    ],
    "Latin America": [
      ["The Treasure of the Sierra Madre", 1948, "Gold Hat"]
    ],
    USA: [
      ["Double Indemnity", 1944, "Phyllis Dietrichson"],
      ["Key Largo", 1948, "Johnny Rocco"],
      ["The Big Sleep", 1946, "Eddie Mars"],
      ["Mildred Pierce", 1945, "Monte Beragon"],
      ["The Postman Always Rings Twice", 1946, "Cora & Frank"],
      ["Out of the Past", 1947, "Whit Sterling"],
      ["Detour", 1945, "Vera"],
      ["The Killers", 1946, "Big Jim Colfax"],
      ["Murder, My Sweet", 1944, "Helen Grayle"],
      ["The Lady from Shanghai", 1947, "Elsa Bannister"],
      ["Force of Evil", 1948, "Ben Tucker"],
      ["The Naked City", 1948, "Garzah"],
      ["White Heat", 1949, "Cody Jarrett"],
      ["Citizen Kane", 1941, "Charles Foster Kane"]
    ],
    Other: [
      ["The Wolf Man", 1941, "The Werewolf"],
      ["Cat People", 1942, "Irena Dubrovna"],
      ["I Walked with a Zombie", 1943, "The curse"],
      ["The Body Snatcher", 1945, "John Gray"]
    ]
  },
  "1950s": {
    Germany: [
      ["Stalag 17", 1953, "Price (Nazi mole)"],
      ["The Young Lions", 1958, "Christian Diestl"],
      ["Decision Before Dawn", 1951, "Nazi remnants"],
      ["The Desert Fox", 1951, "Field Marshal Rommel"],
      ["The Diary of Anne Frank", 1959, "The Gestapo"]
    ],
    Russia: [
      ["Pickup on South Street", 1953, "Joey (Communist agent)"],
      ["North by Northwest", 1959, "Phillip Vandamm"],
      ["My Son John", 1952, "John Jefferson"],
      ["Big Jim McLain", 1952, "Sturak"],
      ["I Was a Communist for the FBI", 1951, "The Party"],
      ["Walk East on Beacon", 1952, "Communist agents"],
      ["Invasion U.S.A.", 1952, "Soviet invaders"],
      ["The Atomic City", 1952, "Soviet spies"]
    ],
    China: [
      ["The Bridges at Toko-Ri", 1954, "Communist forces"],
      ["The Steel Helmet", 1951, "Communist forces"]
    ],
    Japan: [
      ["The Bridge on the River Kwai", 1957, "Col. Saito"],
      ["Three Came Home", 1950, "Col. Suga"]
    ],
    UK: [
      ["The Third Man", 1949, "Harry Lime"]
    ],
    "Latin America": [
      ["Touch of Evil", 1958, "Grandi crime family"]
    ],
    USA: [
      ["Strangers on a Train", 1951, "Bruno Antony"],
      ["Rear Window", 1954, "Lars Thorwald"],
      ["Sunset Boulevard", 1950, "Norma Desmond"],
      ["The Night of the Hunter", 1955, "Harry Powell"],
      ["Touch of Evil", 1958, "Hank Quinlan"],
      ["Vertigo", 1958, "Gavin Elster"],
      ["Sweet Smell of Success", 1957, "J.J. Hunsecker"],
      ["The Big Heat", 1953, "Vince Stone"],
      ["Kiss Me Deadly", 1955, "Dr. Soberin"],
      ["A Streetcar Named Desire", 1951, "Stanley Kowalski"],
      ["12 Angry Men", 1957, "Juror 3"],
      ["A Place in the Sun", 1951, "George Eastman"],
      ["The Bad and the Beautiful", 1952, "Jonathan Shields"],
      ["Anatomy of a Murder", 1959, "Lt. Manion"]
    ],
    Other: [
      ["The Day the Earth Stood Still", 1951, "Humanity itself"],
      ["The War of the Worlds", 1953, "Martians"],
      ["Forbidden Planet", 1956, "The Id Monster"],
      ["Invasion of the Body Snatchers", 1956, "Pod people"],
      ["The Thing from Another World", 1951, "The Thing"],
      ["Creature from the Black Lagoon", 1954, "Gill-man"],
      ["Them!", 1954, "Giant ants"]
    ]
  },
  "1960s": {
    Germany: [
      ["Goldfinger", 1964, "Auric Goldfinger"],
      ["The Train", 1964, "Col. von Waldheim"],
      ["Judgment at Nuremberg", 1961, "The Nazi judges"],
      ["The Dirty Dozen", 1967, "Nazi officers"],
      ["Where Eagles Dare", 1968, "Col. Kramer"],
      ["Battle of Britain", 1969, "Luftwaffe"]
    ],
    Russia: [
      ["From Russia with Love", 1963, "Rosa Klebb / SPECTRE"],
      ["Dr. Strangelove", 1964, "Soviet Doomsday Device"],
      ["Fail Safe", 1964, "Cold War itself"],
      ["The Spy Who Came in from the Cold", 1965, "Hans-Dieter Mundt"],
      ["Torn Curtain", 1966, "Gromek"],
      ["The Russians Are Coming!", 1966, "Soviet submariners (comic)"],
      ["Topaz", 1969, "Soviet intelligence"],
      ["Ice Station Zebra", 1968, "Soviet agents"],
      ["The Bedford Incident", 1965, "Soviet submarine"],
      ["The Ipcress File", 1965, "Soviet operatives"]
    ],
    "Middle East": [
      ["Lawrence of Arabia", 1962, "Turkish Bey"]
    ],
    China: [
      ["Dr. No", 1962, "Julius No"],
      ["The Manchurian Candidate", 1962, "Yen Lo"],
      ["You Only Live Twice", 1967, "SPECTRE (Asian front)"],
      ["55 Days at Peking", 1963, "Boxer Rebellion"],
      ["The Sand Pebbles", 1966, "Chinese warlords"]
    ],
    Japan: [
      ["Bridge to the Sun", 1961, "Imperial militarism"],
      ["None But the Brave", 1965, "Japanese forces"]
    ],
    UK: [
      ["The Servant", 1963, "Hugo Barrett"],
      ["The Italian Job", 1969, "Mr. Bridger"]
    ],
    "Latin America": [
      ["The Wild Bunch", 1969, "Gen. Mapache"],
      ["The Magnificent Seven", 1960, "Calvera"],
      ["The Professionals", 1966, "Jesus Raza"],
      ["Che!", 1969, "Castro & Guevara"]
    ],
    USA: [
      ["Psycho", 1960, "Norman Bates"],
      ["Bonnie and Clyde", 1967, "Bonnie & Clyde"],
      ["Rosemary's Baby", 1968, "Roman Castevet"],
      ["The Manchurian Candidate", 1962, "Eleanor Iselin"],
      ["In Cold Blood", 1967, "Smith & Hickock"],
      ["Cape Fear", 1962, "Max Cady"],
      ["Cool Hand Luke", 1967, "The Captain"],
      ["The Graduate", 1967, "Mrs. Robinson"],
      ["The Hustler", 1961, "Bert Gordon"],
      ["True Grit", 1969, "Tom Chaney"],
      ["Hud", 1963, "Hud Bannon"],
      ["Easy Rider", 1969, "Southern bigots"],
      ["Midnight Cowboy", 1969, "New York itself"]
    ],
    Vietnam: [
      ["The Green Berets", 1968, "Viet Cong"],
      ["The Ugly American", 1963, "Communist insurgents"]
    ],
    Other: [
      ["2001: A Space Odyssey", 1968, "HAL 9000"],
      ["The Birds", 1963, "The birds"],
      ["Planet of the Apes", 1968, "Dr. Zaius"],
      ["Night of the Living Dead", 1968, "The zombies"],
      ["Fantastic Voyage", 1966, "Dr. Michaels"],
      ["Barbarella", 1968, "Durand-Durand"],
      ["The Time Machine", 1960, "Morlocks"],
      ["Village of the Damned", 1960, "Alien children"],
      ["Hush... Hush, Sweet Charlotte", 1964, "Cousin Miriam"]
    ]
  },
  "1970s": {
    Germany: [
      ["Marathon Man", 1976, "Christian Szell"],
      ["The Boys from Brazil", 1978, "Dr. Josef Mengele"],
      ["Cabaret", 1972, "The rising Reich"],
      ["The Odessa File", 1974, "Eduard Roschmann"],
      ["The Eagle Has Landed", 1976, "Col. Radl"]
    ],
    Russia: [
      ["The Spy Who Loved Me", 1977, "Karl Stromberg"],
      ["Telefon", 1977, "Nikolai Dalchimsky"],
      ["Three Days of the Condor", 1975, "CIA / Cold War"],
      ["Moonraker", 1979, "Hugo Drax"],
      ["The Cassandra Crossing", 1976, "Soviet authorities"],
      ["Avalanche Express", 1979, "Soviet defector pursuit"]
    ],
    "Middle East": [
      ["Black Sunday", 1977, "Dahlia Iyad"]
    ],
    China: [
      ["Enter the Dragon", 1973, "Han"],
      ["The Killer Elite", 1975, "Chinese ninja assassins"]
    ],
    Japan: [
      ["The Yakuza", 1974, "Tono"]
    ],
    UK: [
      ["A Clockwork Orange", 1971, "Alex DeLarge"],
      ["Get Carter", 1971, "Cyril Kinnear"]
    ],
    "Latin America": [
      ["The Godfather Part II", 1974, "Hyman Roth + Cuba"],
      ["Bring Me the Head of Alfredo Garcia", 1974, "El Jefe"]
    ],
    USA: [
      ["The Godfather", 1972, "Vito & Michael Corleone"],
      ["Dirty Harry", 1971, "Scorpio"],
      ["Taxi Driver", 1976, "Travis Bickle"],
      ["Chinatown", 1974, "Noah Cross"],
      ["Network", 1976, "The networks"],
      ["All the President's Men", 1976, "The Nixon White House"],
      ["The Conversation", 1974, "Corporate surveillance"],
      ["Halloween", 1978, "Michael Myers"],
      ["Carrie", 1976, "Margaret White"],
      ["Death Wish", 1974, "NYC criminals"],
      ["One Flew Over the Cuckoo's Nest", 1975, "Nurse Ratched"],
      ["The Parallax View", 1974, "The Parallax Corp."],
      ["Serpico", 1973, "Corrupt NYPD"],
      ["The Sting", 1973, "Doyle Lonnegan"],
      ["Klute", 1971, "Peter Cable"],
      ["Mean Streets", 1973, "Tony"],
      ["Soylent Green", 1973, "The corporation"],
      ["Dog Day Afternoon", 1975, "The system"],
      ["The French Connection", 1971, "Alain Charnier"],
      ["The Texas Chain Saw Massacre", 1974, "Leatherface"],
      ["Saturday Night Fever", 1977, "Despair"],
      ["Kramer vs. Kramer", 1979, "Divorce"],
      ["Manhattan", 1979, "Modern relationships"]
    ],
    Vietnam: [
      ["Apocalypse Now", 1979, "Col. Kurtz"],
      ["The Deer Hunter", 1978, "Viet Cong captors"],
      ["Coming Home", 1978, "The war itself"],
      ["Go Tell the Spartans", 1978, "NVA forces"]
    ],
    Other: [
      ["Jaws", 1975, "The Shark"],
      ["Star Wars", 1977, "Darth Vader"],
      ["Alien", 1979, "The Xenomorph"],
      ["The Exorcist", 1973, "Pazuzu"],
      ["Westworld", 1973, "The Gunslinger"],
      ["Logan's Run", 1976, "The central computer"],
      ["The Omen", 1976, "Damien"],
      ["The Wicker Man", 1973, "Lord Summerisle"],
      ["Don't Look Now", 1973, "Fate"],
      ["Suspiria", 1977, "Helena Markos"],
      ["Invasion of the Body Snatchers", 1978, "Pod people (remake)"],
      ["Phantasm", 1979, "The Tall Man"]
    ]
  },
  "1980s": {
    Germany: [
      ["Raiders of the Lost Ark", 1981, "Toht / The Nazis"],
      ["Indiana Jones and the Last Crusade", 1989, "Walter Donovan"],
      ["Die Hard", 1988, "Hans Gruber"],
      ["Beverly Hills Cop", 1984, "Victor Maitland"],
      ["Sophie's Choice", 1982, "The camp"]
    ],
    Russia: [
      ["Rocky IV", 1985, "Ivan Drago"],
      ["Red Dawn", 1984, "Soviet invaders"],
      ["Rambo: First Blood Part II", 1985, "Lt. Col. Podovsky"],
      ["Rambo III", 1988, "Col. Zaysen"],
      ["Top Gun", 1986, "Soviet MiG pilots"],
      ["White Nights", 1985, "Col. Chaiko"],
      ["Firefox", 1982, "Soviet Air Force"],
      ["Moscow on the Hudson", 1984, "The Soviet state"],
      ["WarGames", 1983, "WOPR / Soviet adversary"],
      ["Gorky Park", 1983, "Jack Osborne (Soviet conspiracy)"],
      ["The Falcon and the Snowman", 1985, "Soviet handlers"],
      ["No Way Out", 1987, "Soviet mole conspiracy"],
      ["Russkies", 1987, "Soviet sailor"]
    ],
    "Middle East": [
      ["Back to the Future", 1985, "Libyan terrorists"],
      ["Iron Eagle", 1986, "Akir Nakesh"],
      ["The Delta Force", 1986, "Lebanese hijackers"],
      ["Death Before Dishonor", 1987, "Arab terrorists"]
    ],
    China: [
      ["Big Trouble in Little China", 1986, "Lo Pan"],
      ["The Last Emperor", 1987, "Imperial intrigue"]
    ],
    Japan: [
      ["Black Rain", 1989, "Sato"],
      ["The Karate Kid Part II", 1986, "Chozen"],
      ["Gung Ho", 1986, "Japanese execs (corporate)"]
    ],
    UK: [
      ["A View to a Kill", 1985, "Max Zorin"],
      ["The Long Good Friday", 1980, "Harold Shand's rivals"]
    ],
    "Latin America": [
      ["Scarface", 1983, "Tony Montana / Alejandro Sosa"],
      ["Commando", 1985, "Arius"],
      ["Salvador", 1986, "The death squads"],
      ["Romancing the Stone", 1984, "Colonel Zolo"],
      ["Missing", 1982, "Chilean junta"],
      ["Under Fire", 1983, "Somoza regime"]
    ],
    USA: [
      ["Wall Street", 1987, "Gordon Gekko"],
      ["RoboCop", 1987, "Clarence Boddicker / OCP"],
      ["The Untouchables", 1987, "Al Capone"],
      ["Fatal Attraction", 1987, "Alex Forrest"],
      ["Blue Velvet", 1986, "Frank Booth"],
      ["The Shining", 1980, "Jack Torrance"],
      ["A Nightmare on Elm Street", 1984, "Freddy Krueger"],
      ["Batman", 1989, "The Joker"],
      ["Friday the 13th", 1980, "Mrs. Voorhees"],
      ["Witness", 1985, "Lt. McFee"],
      ["Raging Bull", 1980, "Jake LaMotta"],
      ["Once Upon a Time in America", 1984, "Max"],
      ["Lethal Weapon", 1987, "Shadow Company"],
      ["The Color of Money", 1986, "Vincent's hubris"],
      ["Body Heat", 1981, "Matty Walker"],
      ["Wise Guys", 1986, "Tony Castelo"],
      ["Atlantic City", 1980, "Crime fading"],
      ["Sea of Love", 1989, "Helen"],
      ["When Harry Met Sally...", 1989, "Loneliness"]
    ],
    Vietnam: [
      ["Platoon", 1986, "Sgt. Barnes / NVA"],
      ["Full Metal Jacket", 1987, "The Sniper"],
      ["Hamburger Hill", 1987, "NVA forces"],
      ["Good Morning, Vietnam", 1987, "Censors"],
      ["Casualties of War", 1989, "Sgt. Meserve"]
    ],
    Other: [
      ["The Terminator", 1984, "T-800 / Skynet"],
      ["Aliens", 1986, "The Queen"],
      ["Predator", 1987, "The Predator"],
      ["The Thing", 1982, "The Thing"],
      ["Gremlins", 1984, "Stripe"],
      ["Ghostbusters", 1984, "Gozer"],
      ["Beetlejuice", 1988, "Betelgeuse"],
      ["Poltergeist", 1982, "The spirits"],
      ["The Evil Dead", 1981, "Deadites"],
      ["They Live", 1988, "The aliens"],
      ["Return of the Jedi", 1983, "The Emperor"],
      ["The Empire Strikes Back", 1980, "Darth Vader"],
      ["Hellraiser", 1987, "Pinhead"],
      ["The Lost Boys", 1987, "David's vampires"]
    ]
  },
  "1990s": {
    Germany: [
      ["Schindler's List", 1993, "Amon Göth"],
      ["Saving Private Ryan", 1998, "Steamboat Willie"],
      ["Die Hard with a Vengeance", 1995, "Simon Gruber"],
      ["The English Patient", 1996, "WWII tragedy"]
    ],
    Russia: [
      ["The Hunt for Red October", 1990, "Capt. Tupolev"],
      ["GoldenEye", 1995, "Alec Trevelyan"],
      ["Air Force One", 1997, "Ivan Korshunov"],
      ["The World Is Not Enough", 1999, "Renard"],
      ["Crimson Tide", 1995, "Russian ultranationalists"],
      ["The Saint", 1997, "Ivan Tretiak"],
      ["The Jackal", 1997, "The Jackal (Russian contract)"]
    ],
    "Middle East": [
      ["True Lies", 1994, "Salim Abu Aziz"],
      ["Executive Decision", 1996, "Nagi Hassan"],
      ["The Siege", 1998, "Samir Nazhde"],
      ["Three Kings", 1999, "Capt. Said"],
      ["Not Without My Daughter", 1991, "Moody"],
      ["G.I. Jane", 1997, "Libyan militants"]
    ],
    China: [
      ["Red Corner", 1997, "Chinese state"],
      ["Seven Years in Tibet", 1997, "PLA in Tibet"]
    ],
    Japan: [
      ["Rising Sun", 1993, "Eddie Sakamura"]
    ],
    UK: [
      ["Mission: Impossible", 1996, "Jim Phelps"],
      ["Patriot Games", 1992, "Sean Miller"],
      ["Tomorrow Never Dies", 1997, "Elliot Carver"],
      ["The Devil's Own", 1997, "Frankie McGuire (IRA)"]
    ],
    "Latin America": [
      ["Clear and Present Danger", 1994, "Felix Cortez"],
      ["Carlito's Way", 1993, "Benny Blanco"],
      ["Desperado", 1995, "Bucho"],
      ["The Mambo Kings", 1992, "Cuban diaspora struggles"]
    ],
    USA: [
      ["The Silence of the Lambs", 1991, "Hannibal Lecter"],
      ["Se7en", 1995, "John Doe"],
      ["Heat", 1995, "Neil McCauley"],
      ["L.A. Confidential", 1997, "Dudley Smith"],
      ["Pulp Fiction", 1994, "Marsellus Wallace"],
      ["Reservoir Dogs", 1992, "Mr. Blonde"],
      ["The Usual Suspects", 1995, "Keyser Söze"],
      ["Cape Fear", 1991, "Max Cady"],
      ["Falling Down", 1993, "William Foster"],
      ["Natural Born Killers", 1994, "Mickey & Mallory"],
      ["American History X", 1998, "Derek Vinyard"],
      ["Fight Club", 1999, "Tyler Durden"],
      ["The Fugitive", 1993, "Charles Nichols"],
      ["The Talented Mr. Ripley", 1999, "Tom Ripley"],
      ["Goodfellas", 1990, "Henry Hill's milieu"],
      ["Casino", 1995, "Nicky Santoro"],
      ["JFK", 1991, "Conspiracy"],
      ["A Few Good Men", 1992, "Col. Jessup"],
      ["The Firm", 1993, "The firm itself"],
      ["Boyz n the Hood", 1991, "Gang violence"],
      ["Menace II Society", 1993, "Cycle of violence"],
      ["Wild at Heart", 1990, "Bobby Peru"],
      ["Bad Lieutenant", 1992, "The Lieutenant"],
      ["Misery", 1990, "Annie Wilkes"],
      ["Disclosure", 1994, "Meredith Johnson"],
      ["American Beauty", 1999, "Suburban rot"],
      ["The Insider", 1999, "Big Tobacco"],
      ["Magnolia", 1999, "Family wounds"],
      ["Election", 1999, "Tracy Flick"]
    ],
    Other: [
      ["Jurassic Park", 1993, "Dinosaurs / Dennis Nedry"],
      ["The Matrix", 1999, "Agent Smith"],
      ["Terminator 2", 1991, "T-1000"],
      ["Independence Day", 1996, "The Aliens"],
      ["The Lion King", 1994, "Scar"],
      ["Aladdin", 1992, "Jafar"],
      ["The Phantom Menace", 1999, "Darth Maul"],
      ["Armageddon", 1998, "The Asteroid"],
      ["Mars Attacks!", 1996, "Martians"],
      ["Twister", 1996, "The storm"],
      ["The Sixth Sense", 1999, "Ghosts"],
      ["The Mummy", 1999, "Imhotep"],
      ["The Crow", 1994, "Top Dollar"],
      ["Hocus Pocus", 1993, "Sanderson Sisters"],
      ["The Nightmare Before Christmas", 1993, "Oogie Boogie"]
    ]
  },
  "2000s": {
    Germany: [
      ["Inglourious Basterds", 2009, "Hans Landa"],
      ["Valkyrie", 2008, "Hitler"],
      ["The Pianist", 2002, "The Reich"],
      ["The Reader", 2008, "Hanna Schmitz"]
    ],
    Russia: [
      ["The Bourne Supremacy", 2004, "Kirill / Yuri Gretkov"],
      ["Eastern Promises", 2007, "Semyon"],
      ["Lord of War", 2005, "Andre Baptiste / arms trade"],
      ["We Own the Night", 2007, "Vadim Nezhinski"],
      ["The Bourne Ultimatum", 2007, "CIA + Russian links"],
      ["Behind Enemy Lines", 2001, "Serbian forces"]
    ],
    "Middle East": [
      ["The Kingdom", 2007, "Abu Hamza"],
      ["Body of Lies", 2008, "Al-Saleem"],
      ["Munich", 2005, "Black September"],
      ["Syriana", 2005, "Oil power brokers"],
      ["Iron Man", 2008, "The Ten Rings"],
      ["300", 2006, "Xerxes"],
      ["The Hurt Locker", 2008, "Iraqi insurgents"],
      ["Black Hawk Down", 2001, "Aidid militia"],
      ["Rendition", 2007, "North African terror"],
      ["Babel", 2006, "Cross-border misunderstanding"],
      ["The Messenger", 2009, "Casualty system"],
      ["Charlie Wilson's War", 2007, "Soviets in Afghanistan"],
      ["Lions for Lambs", 2007, "Afghanistan war"]
    ],
    "North Korea": [
      ["Die Another Day", 2002, "Col. Tan-Sun Moon / Graves"]
    ],
    China: [
      ["The Forbidden Kingdom", 2008, "The Jade Warlord"]
    ],
    UK: [
      ["Layer Cake", 2004, "Eddie Temple"],
      ["Mission: Impossible 2", 2000, "Sean Ambrose"],
      ["Rocknrolla", 2008, "Lenny Cole"],
      ["In Bruges", 2008, "Harry Waters"]
    ],
    "Latin America": [
      ["Traffic", 2000, "Tijuana Cartel"],
      ["Miami Vice", 2006, "Arcángel de Jesús Montoya"],
      ["Blow", 2001, "Pablo Escobar"],
      ["Man on Fire", 2004, "Mexican kidnappers"]
    ],
    USA: [
      ["The Dark Knight", 2008, "The Joker"],
      ["The Departed", 2006, "Frank Costello"],
      ["There Will Be Blood", 2007, "Daniel Plainview"],
      ["No Country for Old Men", 2007, "Anton Chigurh"],
      ["American Psycho", 2000, "Patrick Bateman"],
      ["Spider-Man", 2002, "Green Goblin"],
      ["Spider-Man 2", 2004, "Doc Ock"],
      ["Gangs of New York", 2002, "Bill the Butcher"],
      ["Mystic River", 2003, "A neighborhood's silence"],
      ["Mulholland Drive", 2001, "Hollywood itself"],
      ["Donnie Darko", 2001, "Frank / fate"],
      ["Memento", 2000, "Teddy"],
      ["Sin City", 2005, "Roark family"],
      ["Crash", 2004, "Prejudice"],
      ["Million Dollar Baby", 2004, "Billie 'The Blue Bear'"],
      ["Capote", 2005, "Truman Capote himself"],
      ["Michael Clayton", 2007, "U-North Corp"],
      ["Wall-E", 2008, "Buy n Large"],
      ["Up in the Air", 2009, "Ryan Bingham's job"],
      ["The Wrestler", 2008, "Aging body"]
    ],
    Other: [
      ["The Lord of the Rings", 2001, "Sauron / Saruman"],
      ["Casino Royale", 2006, "Le Chiffre"],
      ["War of the Worlds", 2005, "The Tripods"],
      ["I Am Legend", 2007, "The Darkseekers"],
      ["Cloverfield", 2008, "The Monster"],
      ["Pan's Labyrinth", 2006, "Capt. Vidal"],
      ["28 Days Later", 2002, "The Infected"],
      ["The Mist", 2007, "The Mist / Mrs. Carmody"],
      ["District 9", 2009, "MNU corporation"],
      ["Star Wars: Revenge of the Sith", 2005, "The Emperor"],
      ["The Incredibles", 2004, "Syndrome"],
      ["Shrek", 2001, "Lord Farquaad"],
      ["Monsters, Inc.", 2001, "Randall Boggs"],
      ["Finding Nemo", 2003, "(life's hazards)"],
      ["Avatar", 2009, "RDA / Col. Quaritch"]
    ]
  },
  "2010s": {
    Germany: [
      ["The Monuments Men", 2014, "Nazi looters"],
      ["Allied", 2016, "Nazi spy ring"]
    ],
    Russia: [
      ["Salt", 2010, "Orlov / Russian sleepers"],
      ["Jack Ryan: Shadow Recruit", 2014, "Viktor Cherevin"],
      ["A Good Day to Die Hard", 2013, "Yuri Komarov"],
      ["Iron Man 2", 2010, "Ivan Vanko"],
      ["The Equalizer", 2014, "Teddy / Russian mob"],
      ["John Wick", 2014, "Viggo Tarasov"],
      ["Atomic Blonde", 2017, "Bremovych"],
      ["Bridge of Spies", 2015, "KGB"],
      ["Red Sparrow", 2018, "Russian intelligence"],
      ["Tinker Tailor Soldier Spy", 2011, "Karla's mole"],
      ["John Wick: Chapter 2", 2017, "Santino D'Antonio (with Russian milieu)"],
      ["The Equalizer 2", 2018, "Resnik & associates"],
      ["Anna", 2019, "Russian intel"],
      ["Mission: Impossible – Ghost Protocol", 2011, "Kurt Hendricks"]
    ],
    "Middle East": [
      ["Zero Dark Thirty", 2012, "Bin Laden / Al-Qaeda"],
      ["American Sniper", 2014, "Mustafa"],
      ["Argo", 2012, "Revolutionary Guard"],
      ["13 Hours", 2016, "Benghazi militants"],
      ["Lone Survivor", 2013, "Taliban"],
      ["Eye in the Sky", 2015, "Al-Shabaab"],
      ["Rosewater", 2014, "Iranian interrogators"],
      ["The Promise", 2016, "Ottoman authorities"]
    ],
    "North Korea": [
      ["Olympus Has Fallen", 2013, "Kang"],
      ["The Interview", 2014, "Kim Jong-un"],
      ["Red Dawn", 2012, "North Korean invasion"]
    ],
    China: [
      ["Skyscraper", 2018, "Kores Botha"],
      ["The Great Wall", 2016, "The Tao Tei"]
    ],
    Japan: [
      ["The Wolverine", 2013, "Shingen / Silver Samurai"]
    ],
    UK: [
      ["Skyfall", 2012, "Raoul Silva"],
      ["Mission: Impossible – Rogue Nation", 2015, "Solomon Lane"],
      ["Mission: Impossible – Fallout", 2018, "Solomon Lane / Walker"],
      ["Spectre", 2015, "Blofeld"],
      ["Kingsman: The Secret Service", 2014, "Valentine"],
      ["Kingsman: The Golden Circle", 2017, "Poppy Adams"]
    ],
    "Latin America": [
      ["Sicario", 2015, "Alejandro / Medellín cartel"],
      ["Sicario: Day of the Soldado", 2018, "Reyes cartel"],
      ["Beasts of No Nation", 2015, "Commandant (Africa)"]
    ],
    USA: [
      ["The Wolf of Wall Street", 2013, "Jordan Belfort"],
      ["The Social Network", 2010, "Mark Zuckerberg"],
      ["Gone Girl", 2014, "Amy Dunne"],
      ["Get Out", 2017, "The Armitages"],
      ["Joker", 2019, "Arthur Fleck"],
      ["Black Panther", 2018, "Killmonger"],
      ["Django Unchained", 2012, "Calvin Candie"],
      ["12 Years a Slave", 2013, "Edwin Epps"],
      ["The Hateful Eight", 2015, "All of them"],
      ["Once Upon a Time in Hollywood", 2019, "The Manson Family"],
      ["Knives Out", 2019, "Ransom Drysdale"],
      ["Nightcrawler", 2014, "Louis Bloom"],
      ["Whiplash", 2014, "Terence Fletcher"],
      ["Three Billboards", 2017, "Officer Dixon"],
      ["The Big Short", 2015, "Wall Street"],
      ["Spotlight", 2015, "Catholic Church (Boston)"],
      ["Manchester by the Sea", 2016, "Lee's grief"],
      ["The Florida Project", 2017, "Poverty"],
      ["Hell or High Water", 2016, "Texas Midlands Bank"],
      ["Prisoners", 2013, "Alex Jones"],
      ["Birdman", 2014, "Ego / criticism"],
      ["La La Land", 2016, "Ambition"],
      ["Us", 2019, "The Tethered"],
      ["mother!", 2017, "Humanity"],
      ["Vice", 2018, "Dick Cheney"],
      ["The Revenant", 2015, "John Fitzgerald"],
      ["Hereditary", 2018, "Paimon's cult"],
      ["Midsommar", 2019, "Hårga commune"]
    ],
    Other: [
      ["Mad Max: Fury Road", 2015, "Immortan Joe"],
      ["The Force Awakens", 2015, "Kylo Ren / First Order"],
      ["Avengers: Infinity War", 2018, "Thanos"],
      ["Captain America: Civil War", 2016, "Zemo"],
      ["Wonder Woman", 2017, "Ares"],
      ["It", 2017, "Pennywise"],
      ["A Quiet Place", 2018, "The Creatures"],
      ["The Avengers", 2012, "Loki / Chitauri"],
      ["Captain America: The Winter Soldier", 2014, "Hydra"],
      ["Doctor Strange", 2016, "Dormammu / Kaecilius"],
      ["Guardians of the Galaxy", 2014, "Ronan"],
      ["Thor: Ragnarok", 2017, "Hela"],
      ["The Last Jedi", 2017, "Snoke / Kylo Ren"],
      ["Rogue One", 2016, "Krennic"],
      ["Avengers: Endgame", 2019, "Thanos"],
      ["Inception", 2010, "Mal / Cobol Engineering"],
      ["Interstellar", 2014, "Time / Dr. Mann"],
      ["Gravity", 2013, "Space debris"],
      ["The Babadook", 2014, "The Babadook"],
      ["Annabelle", 2014, "Annabelle"],
      ["The Conjuring", 2013, "Bathsheba"],
      ["Pacific Rim", 2013, "Kaiju"]
    ]
  },
  "2020s": {
    Germany: [
      ["Oppenheimer", 2023, "Hitler (off-screen)"]
    ],
    Russia: [
      ["No Time to Die", 2021, "Lyutsifer Safin"],
      ["Tenet", 2020, "Andrei Sator"],
      ["Black Widow", 2021, "Dreykov / Red Room"],
      ["Bullet Train", 2022, "The White Death"],
      ["Extraction 2", 2023, "Zurab Radiani"],
      ["Heart of Stone", 2023, "Parker / The Charter"],
      ["The Beekeeper", 2024, "Russian phishing op"],
      ["The Equalizer 3", 2023, "Camorra (with Russian links)"]
    ],
    "Middle East": [
      ["Top Gun: Maverick", 2022, "Unnamed rogue state"],
      ["The Covenant", 2023, "Taliban"]
    ],
    China: [
      ["Shang-Chi", 2021, "Wenwu / The Mandarin"]
    ],
    UK: [
      ["Argylle", 2024, "The Division"],
      ["The King's Man", 2021, "The Shepherd"]
    ],
    USA: [
      ["Glass Onion", 2022, "Miles Bron"],
      ["Don't Look Up", 2021, "President Orlean"],
      ["Promising Young Woman", 2020, "Al Monroe"],
      ["The Batman", 2022, "The Riddler"],
      ["Joker: Folie à Deux", 2024, "Arthur Fleck"],
      ["Civil War", 2024, "The President"],
      ["Killers of the Flower Moon", 2023, "William Hale"],
      ["Nightmare Alley", 2021, "Stanton Carlisle"],
      ["The Gray Man", 2022, "Lloyd Hansen"],
      ["Saltburn", 2023, "Oliver Quick"],
      ["May December", 2023, "Gracie Atherton-Yoo"],
      ["Babylon", 2022, "The machine of Hollywood"],
      ["The Power of the Dog", 2021, "Phil Burbank"],
      ["The Whale", 2022, "Self-destruction"],
      ["Tár", 2022, "Lydia Tár"],
      ["Anatomy of a Fall (US release)", 2023, "Sandra Voyter"],
      ["Past Lives", 2023, "Time"],
      ["The Holdovers", 2023, "Loneliness"],
      ["Air", 2023, "Sneaker industry"],
      ["Maestro", 2023, "Lenny Bernstein himself"],
      ["Spencer", 2021, "The Royal Family"],
      ["Aftersun", 2022, "Memory"],
      ["The Banshees of Inisherin", 2022, "Colm / Pádraic"],
      ["The Killer", 2023, "The Killer"]
    ],
    Other: [
      ["Dune", 2021, "Baron Harkonnen"],
      ["Dune: Part Two", 2024, "Feyd-Rautha / Harkonnens"],
      ["Spider-Man: No Way Home", 2021, "Multiverse villains"],
      ["Wakanda Forever", 2022, "Namor"],
      ["Mission: Impossible – Dead Reckoning", 2023, "The Entity (AI)"],
      ["Leave the World Behind", 2023, "Unknown actors"],
      ["Nope", 2022, "Jean Jacket"],
      ["Everything Everywhere All at Once", 2022, "Jobu Tupaki"],
      ["Avatar: The Way of Water", 2022, "Col. Quaritch"],
      ["The Suicide Squad", 2021, "Starro"],
      ["Black Adam", 2022, "Sabbac"],
      ["Doctor Strange in the Multiverse of Madness", 2022, "Scarlet Witch"],
      ["Thor: Love and Thunder", 2022, "Gorr"],
      ["Eternals", 2021, "The Deviants"],
      ["A Quiet Place Part II", 2021, "The Creatures"],
      ["Smile", 2022, "The Entity"],
      ["Barbarian", 2022, "The Mother"]
    ]
  }
};

const events = [
  { year: 1945, label: "End of WWII" },
  { year: 1962, label: "Cuban Missile Crisis" },
  { year: 1975, label: "Fall of Saigon" },
  { year: 1989, label: "Berlin Wall falls" },
  { year: 2001, label: "9/11" },
  { year: 2014, label: "Crimea annexed" },
  { year: 2022, label: "Ukraine invasion" }
];

const eraBands = [
  { x0: 1940, x1: 1948, label: "WORLD WAR II" },
  { x0: 1948, x1: 1991, label: "COLD WAR" },
  { x0: 1991, x1: 2001, label: "UNIPOLAR DECADE" },
  { x0: 2001, x1: 2014, label: "WAR ON TERROR" },
  { x0: 2014, x1: 2025, label: "MULTIPOLAR RETURN" }
];

// ISO 3-digit numeric → category (for world map)
const isoToCategory = {
  276: "Germany",
  643: "Russia",
  // Middle East family
  364: "Middle East", 368: "Middle East", 682: "Middle East",
  4:   "Middle East", 376: "Middle East", 760: "Middle East",
  434: "Middle East", 586: "Middle East", 275: "Middle East",
  // East Asia
  408: "North Korea", 156: "China", 392: "Japan",
  826: "UK",
  // Latin America family
  484: "Latin America", 170: "Latin America", 192: "Latin America",
  76:  "Latin America", 222: "Latin America",
  840: "USA",
  704: "Vietnam"
  // "Other" intentionally has no ISO
};

// Industry context — rough US theatrical releases + domestic box office per decade
// Sources: MPAA THEME reports, IMDb, Box Office Mojo, Wikipedia (approximate).
const industryContext = {
  "1940s": { releases: 4000, boxOfficeBn: 15.0, note: "Studio era peak; ~400 theatrical releases per year." },
  "1950s": { releases: 3000, boxOfficeBn: 12.0, note: "TV cuts theatrical attendance roughly in half over the decade." },
  "1960s": { releases: 2000, boxOfficeBn: 11.0, note: "Lowest theatrical output of the post-war era." },
  "1970s": { releases: 2500, boxOfficeBn: 20.0, note: "New Hollywood reboots both output and the cultural footprint." },
  "1980s": { releases: 3500, boxOfficeBn: 40.0, note: "Blockbuster era; multiplexes proliferate." },
  "1990s": { releases: 5500, boxOfficeBn: 60.0, note: "Indie wave + big-budget tentpoles; output roughly doubles." },
  "2000s": { releases: 6500, boxOfficeBn: 90.0, note: "Output keeps climbing; piracy and DVD reshape economics." },
  "2010s": { releases: 8000, boxOfficeBn: 110.0, note: "Streaming begins to siphon mid-budget films from theaters." },
  "2020s": { releases: 3500, boxOfficeBn: 45.0, note: "COVID era + structural shift to streaming; through ~2024." }
};
