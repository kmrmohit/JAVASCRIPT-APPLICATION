const myheading = document.getElementsByTagName('p')[0];
const mybutton = document.getElementById('mybutton');
var textinput = document.getElementById('mytextinput');



var mygameslist = [
  {
    "title": "LittleBigPlanet PS Vita",
    "url": "/games/littlebigplanet-vita/vita-98907",
    "platform": "PlayStation Vita",
    "score": 9,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "LittleBigPlanet PS Vita -- Marvel Super Hero Edition",
    "url": "/games/littlebigplanet-ps-vita-marvel-super-hero-edition/vita-20027059",
    "platform": "PlayStation Vita",
    "score": 9,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Splice: Tree of Life",
    "url": "/games/splice/ipad-141070",
    "platform": "iPad",
    "score": 8.5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "NHL 13",
    "url": "/games/nhl-13/xbox-360-128182",
    "platform": "Xbox 360",
    "score": 8.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "NHL 13",
    "url": "/games/nhl-13/ps3-128181",
    "platform": "PlayStation 3",
    "score": 8.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Total War Battles: Shogun",
    "url": "/games/total-war-battles-shogun/mac-142565",
    "platform": "Macintosh",
    "score": 7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Double Dragon: Neon",
    "url": "/games/double-dragon-neon/xbox-360-131320",
    "platform": "Xbox 360",
    "score": 3,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Guild Wars 2",
    "url": "/games/guild-wars-2/pc-896298",
    "platform": "PC",
    "score": 9,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Double Dragon: Neon",
    "url": "/games/double-dragon-neon/ps3-131321",
    "platform": "PlayStation 3",
    "score": 3,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Total War Battles: Shogun",
    "url": "/games/total-war-battles-shogun/pc-142564",
    "platform": "PC",
    "score": 7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Tekken Tag Tournament 2",
    "url": "/games/tekken-tag-tournament-2/ps3-124584",
    "platform": "PlayStation 3",
    "score": 7.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Tekken Tag Tournament 2",
    "url": "/games/tekken-tag-tournament-2/xbox-360-124581",
    "platform": "Xbox 360",
    "score": 7.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Wild Blood",
    "url": "/games/wild-blood/iphone-139363",
    "platform": "iPhone",
    "score": 7,
    "genre": "",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Mark of the Ninja",
    "url": "/games/mark-of-the-ninja-135615/xbox-360-129276",
    "platform": "Xbox 360",
    "score": 9,
    "genre": "Action, Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Mark of the Ninja",
    "url": "/games/mark-of-the-ninja-135615/pc-143761",
    "platform": "PC",
    "score": 9,
    "genre": "Action, Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Home: A Unique Horror Adventure",
    "url": "/games/home-a-unique-horror-adventure/mac-20014750",
    "platform": "Macintosh",
    "score": 6.5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Home: A Unique Horror Adventure",
    "url": "/games/home-a-unique-horror-adventure/pc-137135",
    "platform": "PC",
    "score": 6.5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Avengers Initiative",
    "url": "/games/avengers-initiative/iphone-141579",
    "platform": "iPhone",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Way of the Samurai 4",
    "url": "/games/way-of-the-samurai-4/ps3-23516",
    "platform": "PlayStation 3",
    "score": 5.5,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "JoJo's Bizarre Adventure HD",
    "url": "/games/jojos-bizarre-adventure/xbox-360-137717",
    "platform": "Xbox 360",
    "score": 7,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "JoJo's Bizarre Adventure HD",
    "url": "/games/jojos-bizarre-adventure/ps3-137896",
    "platform": "PlayStation 3",
    "score": 7,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Mass Effect 3: Leviathan",
    "url": "/games/mass-effect-3-leviathan/xbox-360-138918",
    "platform": "Xbox 360",
    "score": 7.5,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Mass Effect 3: Leviathan",
    "url": "/games/mass-effect-3-leviathan/ps3-138915",
    "platform": "PlayStation 3",
    "score": 7.5,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Mass Effect 3: Leviathan",
    "url": "/games/mass-effect-3-leviathan/pc-138919",
    "platform": "PC",
    "score": 7.5,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Dark Souls (Prepare to Die Edition)",
    "url": "/games/dark-souls-prepare-to-die-edition/pc-131930",
    "platform": "PC",
    "score": 9,
    "genre": "Action, RPG",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Symphony",
    "url": "/games/symphony/pc-136470",
    "platform": "PC",
    "score": 7,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Bastion",
    "url": "/games/bastion/ipad-140874",
    "platform": "iPad",
    "score": 9,
    "genre": "Action, RPG",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Tom Clancy's Ghost Recon Phantoms",
    "url": "/games/tom-clancys-ghost-recon-online/pc-109114",
    "platform": "PC",
    "score": 7.5,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Thirty Flights of Loving",
    "url": "/games/thirty-flights-of-loving/pc-138374",
    "platform": "PC",
    "score": 8,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Legasista",
    "url": "/games/legasista/ps3-127147",
    "platform": "PlayStation 3",
    "score": 6.5,
    "genre": "Action, RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: The Game -- Episode 3: Long Road Ahead",
    "url": "/games/the-walking-dead-season-1-episode-3/mac-135875",
    "platform": "Macintosh",
    "score": 9,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "World of Warcraft: Mists of Pandaria",
    "url": "/games/world-of-warcraft-mists-of-pandaria/pc-114681",
    "platform": "PC",
    "score": 8.7,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Hell Yeah! Wrath of the Dead Rabbit",
    "url": "/games/hell-yeah-wrath-of-the-dead-rabbit/ps3-129409",
    "platform": "PlayStation 3",
    "score": 4.9,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Pokemon White Version 2",
    "url": "/games/pokemon-white-version-2/nds-129228",
    "platform": "Nintendo DS",
    "score": 9.6,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "War of the Roses",
    "url": "/games/war-of-the-roses-140577/pc-115849",
    "platform": "PC",
    "score": 7.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Pokemon Black Version 2",
    "url": "/games/pokemon-black-version-2/nds-129224",
    "platform": "Nintendo DS",
    "score": 9.6,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Drakerider",
    "url": "/games/drakerider/iphone-135745",
    "platform": "iPhone",
    "score": 6.5,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: The Game -- Episode 3: Long Road Ahead",
    "url": "/games/the-walking-dead-season-1-episode-3/xbox-360-135872",
    "platform": "Xbox 360",
    "score": 9,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: The Game -- Episode 3: Long Road Ahead",
    "url": "/games/the-walking-dead-season-1-episode-3/pc-135874",
    "platform": "PC",
    "score": 9,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: The Game -- Episode 3: Long Road Ahead",
    "url": "/games/the-walking-dead-season-1-episode-3/ps3-135873",
    "platform": "PlayStation 3",
    "score": 9,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Rock Band Blitz",
    "url": "/games/rock-band-blitz/xbox-360-131273",
    "platform": "Xbox 360",
    "score": 8.5,
    "genre": "Music",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Counter-Strike: Global Offensive",
    "url": "/games/counter-strike-global-offensive/mac-116695",
    "platform": "Macintosh",
    "score": 8,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Worms Revolution",
    "url": "/games/worms-revolution/ps3-131184",
    "platform": "PlayStation 3",
    "score": 8.5,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Worms Revolution",
    "url": "/games/worms-revolution/pc-131183",
    "platform": "PC",
    "score": 8.5,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Worms Revolution",
    "url": "/games/worms-revolution/xbox-360-131185",
    "platform": "Xbox 360",
    "score": 8.5,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Bad Piggies",
    "url": "/games/bad-piggies/iphone-141455",
    "platform": "iPhone",
    "score": 9.2,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Resident Evil 6",
    "url": "/games/resident-evil-6/ps3-85710",
    "platform": "PlayStation 3",
    "score": 7.9,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Resident Evil 6",
    "url": "/games/resident-evil-6/xbox-360-117995",
    "platform": "Xbox 360",
    "score": 7.9,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Shad'O",
    "url": "/games/shado/pc-141293",
    "platform": "PC",
    "score": 7,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Demon's Score",
    "url": "/games/demons-score/iphone-118050",
    "platform": "iPhone",
    "score": 6.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "NBA 2K13",
    "url": "/games/nba-2k13/xbox-360-132080",
    "platform": "Xbox 360",
    "score": 9.1,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Counter-Strike: Global Offensive",
    "url": "/games/counter-strike-global-offensive/pc-115451",
    "platform": "PC",
    "score": 8,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "The World Ends with You: Solo Remix",
    "url": "/games/the-world-ends-with-you-solo-remix/ipad-140661",
    "platform": "iPad",
    "score": 9.5,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Counter-Strike: Global Offensive",
    "url": "/games/counter-strike-global-offensive/ps3-115453",
    "platform": "PlayStation 3",
    "score": 8,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "The World Ends with You: Solo Remix",
    "url": "/games/the-world-ends-with-you-solo-remix/iphone-140269",
    "platform": "iPhone",
    "score": 9.5,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Counter-Strike: Global Offensive",
    "url": "/games/counter-strike-global-offensive/xbox-360-115452",
    "platform": "Xbox 360",
    "score": 8,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Madden NFL 13",
    "url": "/games/madden-nfl-2013/vita-128100",
    "platform": "PlayStation Vita",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Madden NFL 13",
    "url": "/games/madden-nfl-2013/ps3-128098",
    "platform": "PlayStation 3",
    "score": 9,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Madden NFL 13",
    "url": "/games/madden-nfl-2013/xbox-360-128097",
    "platform": "Xbox 360",
    "score": 9,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Hoodwink",
    "url": "/games/hoodwink/pc-136672",
    "platform": "PC",
    "score": 2.5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "NBA 2K13",
    "url": "/games/nba-2k13/ps3-132077",
    "platform": "PlayStation 3",
    "score": 9.1,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "NBA 2K13",
    "url": "/games/nba-2k13/pc-140490",
    "platform": "PC",
    "score": 9.1,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Lili: Child of Geos",
    "url": "/games/lili/iphone-138013",
    "platform": "iPhone",
    "score": 7,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Marvel vs. Capcom Origins",
    "url": "/games/marvel-vs-capcom-origins/xbox-360-137157",
    "platform": "Xbox 360",
    "score": 8.2,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Marvel vs. Capcom Origins",
    "url": "/games/marvel-vs-capcom-origins/ps3-137160",
    "platform": "PlayStation 3",
    "score": 8.2,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Dead or Alive 5",
    "url": "/games/dead-or-alive-5/ps3-117918",
    "platform": "PlayStation 3",
    "score": 8.8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Dead or Alive 5",
    "url": "/games/dead-or-alive-5/xbox-360-866449",
    "platform": "Xbox 360",
    "score": 8.8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Medal of Honor Warfighter",
    "url": "/games/medal-of-honor-warfighter/pc-101082",
    "platform": "PC",
    "score": 4,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Professor Layton and the Miracle Mask",
    "url": "/games/professor-layton-and-the-mask-of-miracle/3ds-77742",
    "platform": "Nintendo 3DS",
    "score": 8.7,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Hotline Miami",
    "url": "/games/hotline-miami/pc-139657",
    "platform": "PC",
    "score": 8.8,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Edna & Harvey: Harvey's New Eyes",
    "url": "/games/edna-harvey-harveys-new-eyes/pc-145776",
    "platform": "PC",
    "score": 6,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Medal of Honor Warfighter",
    "url": "/games/medal-of-honor-warfighter/ps3-101085",
    "platform": "PlayStation 3",
    "score": 4,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Medal of Honor Warfighter",
    "url": "/games/medal-of-honor-warfighter/xbox-360-101086",
    "platform": "Xbox 360",
    "score": 4,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Transformers: Fall of Cybertron",
    "url": "/games/transformers-fall-of-cybertron/xbox-360-92426",
    "platform": "Xbox 360",
    "score": 8.5,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Transformers: Fall of Cybertron",
    "url": "/games/transformers-fall-of-cybertron/ps3-92425",
    "platform": "PlayStation 3",
    "score": 8.5,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Hero Academy",
    "url": "/games/hero-academy-136971/pc-122908",
    "platform": "PC",
    "score": 9,
    "genre": "Board",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Hero Academy",
    "url": "/games/hero-academy-136971/iphone-122803",
    "platform": "iPhone",
    "score": 9,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Puzzle Craft",
    "url": "/games/puzzlecraft/iphone-134348",
    "platform": "iPhone",
    "score": 9,
    "genre": "Puzzle",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Realms Of Ancient War",
    "url": "/games/realms-of-ancient-war/xbox-360-111182",
    "platform": "Xbox 360",
    "score": 5.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Realms Of Ancient War",
    "url": "/games/realms-of-ancient-war/ps3-111181",
    "platform": "PlayStation 3",
    "score": 5.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Anomaly: Warzone Earth",
    "url": "/games/anomaly-warzone-earth/ps3-138479",
    "platform": "PlayStation 3",
    "score": 8.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Darksiders II",
    "url": "/games/darksiders-2/pc-91963",
    "platform": "PC",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Left 4 Dead 2: Cold Stream",
    "url": "/games/left-4-dead-2-cold-stream/mac-140189",
    "platform": "Macintosh",
    "score": 7,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Left 4 Dead 2: Cold Stream",
    "url": "/games/left-4-dead-2-cold-stream/pc-140187",
    "platform": "PC",
    "score": 7,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Puzzle Craft",
    "url": "/games/puzzlecraft/android-134352",
    "platform": "Android",
    "score": 9,
    "genre": "Puzzle",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Left 4 Dead 2: Cold Stream",
    "url": "/games/left-4-dead-2-cold-stream/xbox-360-140188",
    "platform": "Xbox 360",
    "score": 7,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Horn",
    "url": "/games/horn/iphone-136814",
    "platform": "iPhone",
    "score": 9,
    "genre": "Action, Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Forza Horizon",
    "url": "/games/forza-horizon/xbox-360-129564",
    "platform": "Xbox 360",
    "score": 9,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "FIFA Soccer 13",
    "url": "/games/fifa-2013/vita-115689",
    "platform": "PlayStation Vita",
    "score": 4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Mugen Souls",
    "url": "/games/mugen-souls/ps3-120256",
    "platform": "PlayStation 3",
    "score": 3.9,
    "genre": "Strategy, RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Crazy Taxi",
    "url": "/games/crazy-taxi/iphone-144755",
    "platform": "iPhone",
    "score": 7.1,
    "genre": "Racing, Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "New Little King's Story",
    "url": "/games/new-kings-story/vita-116369",
    "platform": "PlayStation Vita",
    "score": 5.8,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Fable: The Journey",
    "url": "/games/fable-the-journey/xbox-360-27948",
    "platform": "Xbox 360",
    "score": 7.2,
    "genre": "Action, RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "The Lord of the Rings Online: Riders of Rohan",
    "url": "/games/the-lord-of-the-rings-online-riders-of-rohan/pc-127207",
    "platform": "PC",
    "score": 8.3,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Doom 3: BFG Edition",
    "url": "/games/doom-3/xbox-360-135333",
    "platform": "Xbox 360",
    "score": 7.6,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Rugby League Live 2",
    "url": "/games/rugby-league-live-2/xbox-360-136983",
    "platform": "Xbox 360",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Rugby League Live 2",
    "url": "/games/rugby-league-live-2/ps3-136984",
    "platform": "PlayStation 3",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Doom 3: BFG Edition",
    "url": "/games/doom-3/ps3-135329",
    "platform": "PlayStation 3",
    "score": 7.6,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Punch Quest",
    "url": "/games/punch-quest/iphone-136667",
    "platform": "iPhone",
    "score": 9.3,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "He-Man: The Most Powerful Game in the Universe",
    "url": "/games/he-man-the-most-powerful-game-in-the-universe/iphone-144763",
    "platform": "iPhone",
    "score": 6.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Doom 3: BFG Edition",
    "url": "/games/doom-3/pc-135338",
    "platform": "PC",
    "score": 7.6,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Dokuro",
    "url": "/games/dokuro/vita-130906",
    "platform": "PlayStation Vita",
    "score": 8.8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Naughty Bear: Panic in Paradise",
    "url": "/games/naughty-bear-panic-in-paradise/xbox-360-135404",
    "platform": "Xbox 360",
    "score": 2.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Naughty Bear: Panic in Paradise",
    "url": "/games/naughty-bear-panic-in-paradise/ps3-135407",
    "platform": "PlayStation 3",
    "score": 2.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Borderlands 2: Captain Scarlett and her Pirate's Booty",
    "url": "/games/borderlands-2-captain-scarlett-and-her-pirates-booty/ps3-145419",
    "platform": "PlayStation 3",
    "score": 7.5,
    "genre": "Shooter, RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Skylanders Giants",
    "url": "/games/skylanders-giants/ps3-128142",
    "platform": "PlayStation 3",
    "score": 8,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Borderlands 2: Captain Scarlett and her Pirate's Booty",
    "url": "/games/borderlands-2-captain-scarlett-and-her-pirates-booty/pc-145418",
    "platform": "PC",
    "score": 7.5,
    "genre": "Shooter, RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Rayman: Jungle Run",
    "url": "/games/rayman-jungle-run/iphone-141641",
    "platform": "iPhone",
    "score": 8.8,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "FIFA Soccer 13",
    "url": "/games/fifa-2013/pc-115688",
    "platform": "PC",
    "score": 9,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "FIFA Soccer 13",
    "url": "/games/fifa-2013/ps3-115679",
    "platform": "PlayStation 3",
    "score": 9,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Torchlight II",
    "url": "/games/torchlight-ii/pc-82633",
    "platform": "PC",
    "score": 9.1,
    "genre": "Action, RPG",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "FIFA Soccer 13",
    "url": "/games/fifa-2013/xbox-360-115691",
    "platform": "Xbox 360",
    "score": 9,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "The Sims 3: Supernatural",
    "url": "/games/the-sims-3-supernatural/pc-136180",
    "platform": "PC",
    "score": 4.5,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Retro/Grade",
    "url": "/games/retrograde-138590/ps3-21766",
    "platform": "PlayStation 3",
    "score": 7,
    "genre": "",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Iron Brigade",
    "url": "/games/iron-brigade/pc-121033",
    "platform": "PC",
    "score": 9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Cafeteria Nipponica",
    "url": "/games/cafeteria-nipponica/iphone-139633",
    "platform": "iPhone",
    "score": 6,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Sleeping Dogs",
    "url": "/games/sleeping-dogs/xbox-360-14279324",
    "platform": "Xbox 360",
    "score": 8.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Sleeping Dogs",
    "url": "/games/sleeping-dogs/ps3-55068",
    "platform": "PlayStation 3",
    "score": 8.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Darksiders II",
    "url": "/games/darksiders-2/ps3-14336767",
    "platform": "PlayStation 3",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Papo & Yo",
    "url": "/games/papo-and-yo/ps3-110267",
    "platform": "PlayStation 3",
    "score": 4,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: The Game -- Episode 4: Around Every Corner",
    "url": "/games/the-walking-dead-season-1-episode-4/pc-135879",
    "platform": "PC",
    "score": 7.5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: The Game -- Episode 4: Around Every Corner",
    "url": "/games/the-walking-dead-season-1-episode-4/ipad-135882",
    "platform": "iPad",
    "score": 7.5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: The Game -- Episode 4: Around Every Corner",
    "url": "/games/the-walking-dead-season-1-episode-4/ps3-135880",
    "platform": "PlayStation 3",
    "score": 7.5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Cortex Command",
    "url": "/games/cortex-command/pc-14333880",
    "platform": "PC",
    "score": 5,
    "genre": "Action, Simulation",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: The Game -- Episode 4: Around Every Corner",
    "url": "/games/the-walking-dead-season-1-episode-4/xbox-360-135881",
    "platform": "Xbox 360",
    "score": 7.5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Derrick the Deathfin",
    "url": "/games/derrick-the-deathfin-133942/ps3-129921",
    "platform": "PlayStation 3",
    "score": 7.4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: The Game -- Episode 4: Around Every Corner",
    "url": "/games/the-walking-dead-season-1-episode-4/mac-135878",
    "platform": "Macintosh",
    "score": 7.5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "XCOM: Enemy Unknown",
    "url": "/games/xcom-enemy-unknown/xbox-360-126074",
    "platform": "Xbox 360",
    "score": 8.2,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "XCOM: Enemy Unknown",
    "url": "/games/xcom-enemy-unknown/pc-126070",
    "platform": "PC",
    "score": 8.2,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Silent Hill: Book of Memories",
    "url": "/games/silent-hill-book-of-memories/vita-110040",
    "platform": "PlayStation Vita",
    "score": 6,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Diaspora: Shattered Armistice",
    "url": "/games/diaspora-shattered-armistice/pc-145951",
    "platform": "PC",
    "score": 7.4,
    "genre": "Flight, Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Pocket Clothier",
    "url": "/games/pocket-clothier/iphone-145621",
    "platform": "iPhone",
    "score": 6.6,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Pocket Clothier",
    "url": "/games/pocket-clothier/android-145958",
    "platform": "Android",
    "score": 6.6,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Ravaged",
    "url": "/games/ravaged-135376/pc-128650",
    "platform": "PC",
    "score": 6.7,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "True Skate",
    "url": "/games/true-skate/iphone-145482",
    "platform": "iPhone",
    "score": 6.7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Zero Escape: Virtue's Last Reward",
    "url": "/games/virtues-last-reward/3ds-116383",
    "platform": "Nintendo 3DS",
    "score": 9.5,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Zero Escape: Virtue's Last Reward",
    "url": "/games/virtues-last-reward/vita-116380",
    "platform": "PlayStation Vita",
    "score": 9.5,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: The Game -- Episode 3: Long Road Ahead",
    "url": "/games/the-walking-dead-season-1-episode-3/ipad-135871",
    "platform": "iPad",
    "score": 9,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Skylanders Giants",
    "url": "/games/skylanders-giants/xbox-360-128140",
    "platform": "Xbox 360",
    "score": 8,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Skylanders Giants",
    "url": "/games/skylanders-giants/wii-128141",
    "platform": "Wii",
    "score": 8,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Borderlands 2: Captain Scarlett and her Pirate's Booty",
    "url": "/games/borderlands-2-captain-scarlett-and-her-pirates-booty/xbox-360-145420",
    "platform": "Xbox 360",
    "score": 7.5,
    "genre": "Shooter, RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Devil's Attorney",
    "url": "/games/devils-attorney/android-145462",
    "platform": "Android",
    "score": 8.3,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Devil's Attorney",
    "url": "/games/devils-attorney/iphone-145099",
    "platform": "iPhone",
    "score": 8.3,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Code of Princess",
    "url": "/games/code-of-princess-135813/3ds-125676",
    "platform": "Nintendo 3DS",
    "score": 6.9,
    "genre": "Action, RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "SunFlowers",
    "url": "/games/sun-flowers-134128/vita-132435",
    "platform": "PlayStation Vita",
    "score": 8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "007 Legends",
    "url": "/games/007-legends/xbox-360-132394",
    "platform": "Xbox 360",
    "score": 4.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Super Hexagon",
    "url": "/games/super-hexagon/iphone-143440",
    "platform": "iPhone",
    "score": 9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Machinarium",
    "url": "/games/machinarium/ps3-110942",
    "platform": "PlayStation 3",
    "score": 8,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Final Fantasy Dimensions",
    "url": "/games/final-fantasy-dimensions/iphone-135306",
    "platform": "iPhone",
    "score": 8,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "They Bleed Pixels",
    "url": "/games/they-bleed-pixels/pc-141012",
    "platform": "PC",
    "score": 8.2,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Jet Set Radio",
    "url": "/games/jet-set-radio/vita-135073",
    "platform": "PlayStation Vita",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Jet Set Radio",
    "url": "/games/jet-set-radio/ps3-129168",
    "platform": "PlayStation 3",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Jet Set Radio",
    "url": "/games/jet-set-radio/xbox-360-129165",
    "platform": "Xbox 360",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Pro Evolution Soccer 2013",
    "url": "/games/pro-evolution-soccer-2013/xbox-360-133009",
    "platform": "Xbox 360",
    "score": 8.5,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "F1 2012",
    "url": "/games/f1-2012/pc-130383",
    "platform": "PC",
    "score": 9,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Darksiders II",
    "url": "/games/darksiders-2/xbox-360-14336768",
    "platform": "Xbox 360",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Pitfall",
    "url": "/games/pitfall-working-title/iphone-137420",
    "platform": "iPhone",
    "score": 7,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Dust: An Elysian Tail",
    "url": "/games/dust-an-elysian-tail-139696/xbox-360-77719",
    "platform": "Xbox 360",
    "score": 8.5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Hybrid",
    "url": "/games/hybrid-140542/xbox-360-37860",
    "platform": "Xbox 360",
    "score": 8,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "The Dark Knight Rises",
    "url": "/games/the-dark-knight-rises/iphone-130653",
    "platform": "iPhone",
    "score": 5.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": 10000000,
    "url": "/games/10000000/iphone-139135",
    "platform": "iPhone",
    "score": 7.5,
    "genre": "",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "The Political Machine 2012",
    "url": "/games/the-political-machine-2012/pc-131306",
    "platform": "PC",
    "score": 6.5,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Sound Shapes",
    "url": "/games/sound-shapes-queasy-games/ps3-135578",
    "platform": "PlayStation 3",
    "score": 9,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Sound Shapes",
    "url": "/games/sound-shapes-queasy-games/vita-110145",
    "platform": "PlayStation Vita",
    "score": 9,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "One Piece: Pirate Warriors",
    "url": "/games/one-piece-pirate-warriors/ps3-116782",
    "platform": "PlayStation 3",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "XCOM: Enemy Unknown",
    "url": "/games/xcom-enemy-unknown/ps3-126073",
    "platform": "PlayStation 3",
    "score": 8.2,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Dishonored",
    "url": "/games/dishonored/xbox-360-112932",
    "platform": "Xbox 360",
    "score": 9.2,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Dishonored",
    "url": "/games/dishonored/pc-112928",
    "platform": "PC",
    "score": 9.2,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Dishonored",
    "url": "/games/dishonored/ps3-112931",
    "platform": "PlayStation 3",
    "score": 9.2,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Angry Birds Trilogy",
    "url": "/games/angry-birds-trilogy/3ds-82424",
    "platform": "Nintendo 3DS",
    "score": 7,
    "genre": "Puzzle, Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Angry Birds Trilogy",
    "url": "/games/angry-birds-trilogy/xbox-360-88826",
    "platform": "Xbox 360",
    "score": 7,
    "genre": "Puzzle, Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Angry Birds Trilogy",
    "url": "/games/angry-birds-trilogy/ps3-135852",
    "platform": "PlayStation 3",
    "score": 7,
    "genre": "Puzzle, Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Girls Like Robots",
    "url": "/games/girls-like-robots/iphone-145093",
    "platform": "iPhone",
    "score": 8.5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Happy Wars",
    "url": "/games/happy-wars/xbox-360-64840",
    "platform": "Xbox 360",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "007 Legends",
    "url": "/games/007-legends/ps3-132391",
    "platform": "PlayStation 3",
    "score": 4.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Funky Smugglers",
    "url": "/games/funky-smugglers/iphone-145106",
    "platform": "iPhone",
    "score": 9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Colour Bind",
    "url": "/games/colour-bind/pc-143757",
    "platform": "PC",
    "score": 6.2,
    "genre": "",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "WRC 3 FIA World Rally Championship",
    "url": "/games/wrc-3-fia-world-rally-championship/xbox-360-131357",
    "platform": "Xbox 360",
    "score": 5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "WRC 3 FIA World Rally Championship",
    "url": "/games/wrc-3-fia-world-rally-championship/pc-131360",
    "platform": "PC",
    "score": 5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Retro City Rampage",
    "url": "/games/retro-city-rampage/ps3-128971",
    "platform": "PlayStation 3",
    "score": 5.3,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Retro City Rampage",
    "url": "/games/retro-city-rampage/pc-129032",
    "platform": "PC",
    "score": 5.3,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Dance Central 3",
    "url": "/games/dance-central-3/xbox-360-135601",
    "platform": "Xbox 360",
    "score": 8,
    "genre": "Music",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "WRC 3 FIA World Rally Championship",
    "url": "/games/wrc-3-fia-world-rally-championship/ps3-131361",
    "platform": "PlayStation 3",
    "score": 5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Snapshot",
    "url": "/games/snapshot/pc-143174",
    "platform": "PC",
    "score": 5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "F1 2012",
    "url": "/games/f1-2012/ps3-130382",
    "platform": "PlayStation 3",
    "score": 9,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Pro Evolution Soccer 2013",
    "url": "/games/pro-evolution-soccer-2013/ps3-133012",
    "platform": "PlayStation 3",
    "score": 8.5,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "F1 2012",
    "url": "/games/f1-2012/xbox-360-130379",
    "platform": "Xbox 360",
    "score": 9,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Pro Evolution Soccer 2013",
    "url": "/games/pro-evolution-soccer-2013/pc-133014",
    "platform": "PC",
    "score": 8.5,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Borderlands 2",
    "url": "/games/borderlands-2/xbox-360-94188",
    "platform": "Xbox 360",
    "score": 9,
    "genre": "Shooter, RPG",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Borderlands 2",
    "url": "/games/borderlands-2/pc-94190",
    "platform": "PC",
    "score": 9,
    "genre": "Shooter, RPG",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Joe Danger: The Movie",
    "url": "/games/joe-danger-the-movie/xbox-360-115463",
    "platform": "Xbox 360",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Borderlands 2",
    "url": "/games/borderlands-2/ps3-94189",
    "platform": "PlayStation 3",
    "score": 9,
    "genre": "Shooter, RPG",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Sound Shapes",
    "url": "/games/sound-shapes-queasy-games/ps4-20007461",
    "platform": "PlayStation 4",
    "score": 9,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Persona 4 Arena",
    "url": "/games/persona-4-arena/ps3-116910",
    "platform": "PlayStation 3",
    "score": 9,
    "genre": "Fighting",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Persona 4 Arena",
    "url": "/games/persona-4-arena/xbox-360-116913",
    "platform": "Xbox 360",
    "score": 9,
    "genre": "Fighting",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Hell Yeah! Wrath of the Dead Rabbit",
    "url": "/games/hell-yeah-wrath-of-the-dead-rabbit/pc-129413",
    "platform": "PC",
    "score": 4.9,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Hell Yeah! Wrath of the Dead Rabbit",
    "url": "/games/hell-yeah-wrath-of-the-dead-rabbit/xbox-360-129412",
    "platform": "Xbox 360",
    "score": 4.9,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Retro City Rampage",
    "url": "/games/retro-city-rampage/vita-128972",
    "platform": "PlayStation Vita",
    "score": 5.3,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "The Unfinished Swan",
    "url": "/games/the-unfinished-swan/ps3-133433",
    "platform": "PlayStation 3",
    "score": 9,
    "genre": "Puzzle",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Tokyo Jungle",
    "url": "/games/tokyo-jungle-139049/ps3-85484",
    "platform": "PlayStation 3",
    "score": 8,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Halo 4",
    "url": "/games/halo-4/xbox-360-110563",
    "platform": "Xbox 360",
    "score": 9.8,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Halo 4 (Limited Edition)",
    "url": "/games/halo-4/xbox-360-134637",
    "platform": "Xbox 360",
    "score": 9.8,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Zone of the Enders HD Collection",
    "url": "/games/zone-of-the-enders-hd-collection/ps3-110049",
    "platform": "PlayStation 3",
    "score": 7,
    "genre": "Action, Compilation",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Harvest Moon: A New Beginning",
    "url": "/games/harvest-moon-hajimari-no-daichi/3ds-120299",
    "platform": "Nintendo 3DS",
    "score": 8.3,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Zone of the Enders HD Collection",
    "url": "/games/zone-of-the-enders-hd-collection/xbox-360-110060",
    "platform": "Xbox 360",
    "score": 7,
    "genre": "Action, Compilation",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Borderlands Legends",
    "url": "/games/borderlands-legends/iphone-145721",
    "platform": "iPhone",
    "score": 6.5,
    "genre": "Action, RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Borderlands Legends",
    "url": "/games/borderlands-legends/ipad-145832",
    "platform": "iPad",
    "score": 6.5,
    "genre": "Action, RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Okami HD",
    "url": "/games/okami/ps3-136378",
    "platform": "PlayStation 3",
    "score": 9.4,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Ragnarok Odyssey",
    "url": "/games/ragnarok-odyssey/vita-117348",
    "platform": "PlayStation Vita",
    "score": 5,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Need for Speed Most Wanted",
    "url": "/games/need-for-speed-most-wanted-2012/iphone-135825",
    "platform": "iPhone",
    "score": 6.9,
    "genre": "Racing, Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Pid",
    "url": "/games/pid/xbox-360-124089",
    "platform": "Xbox 360",
    "score": 7.8,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Pid",
    "url": "/games/pid/pc-124085",
    "platform": "PC",
    "score": 7.8,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Pid",
    "url": "/games/pid/ps3-124088",
    "platform": "PlayStation 3",
    "score": 7.8,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Need for Speed Most Wanted",
    "url": "/games/need-for-speed-most-wanted-2012/ps3-126560",
    "platform": "PlayStation 3",
    "score": 9,
    "genre": "Racing, Action",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Assassin's Creed III",
    "url": "/games/assassins-creed-iii/xbox-360-128701",
    "platform": "Xbox 360",
    "score": 8.5,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Need for Speed Most Wanted",
    "url": "/games/need-for-speed-most-wanted-2012/xbox-360-135486",
    "platform": "Xbox 360",
    "score": 9,
    "genre": "Racing, Action",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Assassin's Creed III: Liberation",
    "url": "/games/assassins-creed-vita/vita-115670",
    "platform": "PlayStation Vita",
    "score": 7.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Smart As...",
    "url": "/games/smart-as-135038/vita-98920",
    "platform": "PlayStation Vita",
    "score": 8.5,
    "genre": "Educational, Puzzle",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Assassin's Creed III",
    "url": "/games/assassins-creed-iii/ps3-128700",
    "platform": "PlayStation 3",
    "score": 8.5,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Need for Speed Most Wanted",
    "url": "/games/need-for-speed-most-wanted-2012/pc-135628",
    "platform": "PC",
    "score": 9,
    "genre": "Racing, Action",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "WWE '13",
    "url": "/games/wwe-13/ps3-127917",
    "platform": "PlayStation 3",
    "score": 8.4,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Street Fighter x Tekken",
    "url": "/games/street-fighter-x-tekken/vita-110720",
    "platform": "PlayStation Vita",
    "score": 6.6,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "WWE '13",
    "url": "/games/wwe-13/xbox-360-127923",
    "platform": "Xbox 360",
    "score": 8.4,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Chivalry: Medieval Warfare",
    "url": "/games/chivalry-medieval-warfare-142591/pc-75122",
    "platform": "PC",
    "score": 7.9,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Sonic Jump",
    "url": "/games/sonic-jump-2012/iphone-144482",
    "platform": "iPhone",
    "score": 7.5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "F1 Race Stars",
    "url": "/games/f1-race-stars/xbox-360-137846",
    "platform": "Xbox 360",
    "score": 5.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Call of Duty: Black Ops II",
    "url": "/games/call-of-duty-black-ops-ii/pc-126314",
    "platform": "PC",
    "score": 9.3,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "F1 Race Stars",
    "url": "/games/f1-race-stars/ps3-137849",
    "platform": "PlayStation 3",
    "score": 5.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Midway Arcade Origins",
    "url": "/games/midway-arcade-origins/ps3-143385",
    "platform": "PlayStation 3",
    "score": 5.5,
    "genre": "Action, Compilation",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Midway Arcade Origins",
    "url": "/games/midway-arcade-origins/xbox-360-143382",
    "platform": "Xbox 360",
    "score": 5.5,
    "genre": "Action, Compilation",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Call of Duty: Black Ops II",
    "url": "/games/call-of-duty-black-ops-ii/xbox-360-126311",
    "platform": "Xbox 360",
    "score": 9.3,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Call of Duty: Black Ops II",
    "url": "/games/call-of-duty-black-ops-ii/ps3-126313",
    "platform": "PlayStation 3",
    "score": 9.3,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "When Vikings Attack",
    "url": "/games/when-vikings-attack/ps3-135043",
    "platform": "PlayStation 3",
    "score": 6.5,
    "genre": "Fighting, Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "When Vikings Attack",
    "url": "/games/when-vikings-attack/vita-135040",
    "platform": "PlayStation Vita",
    "score": 6.5,
    "genre": "Fighting, Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Freakyforms Deluxe: Your Creations, Alive!",
    "url": "/games/freakyforms-deluxe-your-creations-alive/3ds-139655",
    "platform": "Nintendo 3DS",
    "score": 5,
    "genre": "Productivity",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Painkiller: Hell & Damnation",
    "url": "/games/painkiller-hell-and-damnation/pc-136319",
    "platform": "PC",
    "score": 5,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Transformers Prime",
    "url": "/games/transformers-prime/3ds-130988",
    "platform": "Nintendo 3DS",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Angry Birds Star Wars",
    "url": "/games/star-wars-angry-birds/iphone-144485",
    "platform": "iPhone",
    "score": 8.8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Farming Simulator 2013",
    "url": "/games/farming-simulator-2013/pc-144241",
    "platform": "PC",
    "score": 7.1,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Paper Mario: Sticker Star",
    "url": "/games/paper-mario-3ds/3ds-77808",
    "platform": "Nintendo 3DS",
    "score": 8.3,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Lucius",
    "url": "/games/lucius-shiver-games/pc-83378",
    "platform": "PC",
    "score": 6,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "LittleBigPlanet Karting",
    "url": "/games/littlebigplanet-karting/ps3-128163",
    "platform": "PlayStation 3",
    "score": 5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Primal Carnage",
    "url": "/games/primal-carnage/pc-60854",
    "platform": "PC",
    "score": 7.6,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Natural Selection 2",
    "url": "/games/natural-selection-2/pc-904386",
    "platform": "PC",
    "score": 8,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Symphonica: Grand Maestro",
    "url": "/games/symphonica-grand-maestro/iphone-141555",
    "platform": "iPhone",
    "score": 6,
    "genre": "Music",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Football Manager 2013",
    "url": "/games/football-manager-2013/mac-141666",
    "platform": "Macintosh",
    "score": 9,
    "genre": "Sports, Simulation",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: The Game -- Episode 5: No Time Left",
    "url": "/games/the-walking-dead-season-1-episode-5/pc-135888",
    "platform": "PC",
    "score": 9.5,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: The Game -- Episode 5: No Time Left",
    "url": "/games/the-walking-dead-season-1-episode-5/ipad-135885",
    "platform": "iPad",
    "score": 9.5,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: The Game -- Episode 5: No Time Left",
    "url": "/games/the-walking-dead-season-1-episode-5/mac-135889",
    "platform": "Macintosh",
    "score": 9.5,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: The Game -- Episode 5: No Time Left",
    "url": "/games/the-walking-dead-season-1-episode-5/ps3-135887",
    "platform": "PlayStation 3",
    "score": 9.5,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Football Manager 2013",
    "url": "/games/football-manager-2013/pc-141663",
    "platform": "PC",
    "score": 9,
    "genre": "Sports, Simulation",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Need for Speed Most Wanted",
    "url": "/games/need-for-speed-most-wanted-2012/vita-135721",
    "platform": "PlayStation Vita",
    "score": 7.4,
    "genre": "Racing, Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Orgarhythm",
    "url": "/games/orgarhythm-133846/vita-130950",
    "platform": "PlayStation Vita",
    "score": 4.7,
    "genre": "Music, Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Sports Champions 2",
    "url": "/games/sports-champions-2/ps3-135395",
    "platform": "PlayStation 3",
    "score": 7.6,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Kinect Party",
    "url": "/games/happy-action-theater-2/xbox-360-140195",
    "platform": "Xbox 360",
    "score": 8.5,
    "genre": "Party",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Sky Gamblers: Storm Raiders",
    "url": "/games/sky-gamblers-storm-raider/iphone-149216",
    "platform": "iPhone",
    "score": 7.1,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Oddworld: Stranger's Wrath HD",
    "url": "/games/oddworld-strangers-wrath/vita-110722",
    "platform": "PlayStation Vita",
    "score": 7.5,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "AirBuccaneers",
    "url": "/games/airbuccaneers/pc-150858",
    "platform": "PC",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Theatrhythm Final Fantasy",
    "url": "/games/theatrhythm-final-fantasy/iphone-150082",
    "platform": "iPhone",
    "score": 8,
    "genre": "Music, Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Sing Party",
    "url": "/games/sing/wii-u-135741",
    "platform": "Wii U",
    "score": 6.3,
    "genre": "Music",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Beatdown!",
    "url": "/games/beatdown/iphone-147890",
    "platform": "iPhone",
    "score": 6.3,
    "genre": "Fighting, Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Waking Mars",
    "url": "/games/waking-mars-148199/pc-148201",
    "platform": "PC",
    "score": 6.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Waking Mars",
    "url": "/games/waking-mars-148199/iphone-129356",
    "platform": "iPhone",
    "score": 6.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Hitman: Absolution",
    "url": "/games/hitman-absolution/ps3-14348845",
    "platform": "PlayStation 3",
    "score": 9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Hitman: Absolution",
    "url": "/games/hitman-absolution/xbox-360-14348846",
    "platform": "Xbox 360",
    "score": 9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "ZombiU",
    "url": "/games/zombi-u/wii-u-135661",
    "platform": "Wii U",
    "score": 6.3,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Grand Theft Auto: Vice City",
    "url": "/games/grand-theft-aut-vice-city/iphone-146059",
    "platform": "iPhone",
    "score": 7.7,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Street Fighter X Mega Man",
    "url": "/games/street-fighter-x-mega-man/pc-149856",
    "platform": "PC",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Sonic & All-Stars Racing Transformed",
    "url": "/games/sonic-all-stars-racing-transformed/vita-133506",
    "platform": "PlayStation Vita",
    "score": 7,
    "genre": "Racing, Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Sonic & All-Stars Racing Transformed",
    "url": "/games/sonic-all-stars-racing-transformed/3ds-133507",
    "platform": "Nintendo 3DS",
    "score": 7,
    "genre": "Racing, Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "The Sims 3: Seasons",
    "url": "/games/the-sims-3-seasons/pc-138921",
    "platform": "PC",
    "score": 7.5,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Tank! Tank! Tank!",
    "url": "/games/tank-tank-tank/wii-u-135735",
    "platform": "Wii U",
    "score": 5.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Guardians of Middle-earth",
    "url": "/games/guardians-of-middle-earth/xbox-360-135298",
    "platform": "Xbox 360",
    "score": 7.5,
    "genre": "Battle",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Ratchet & Clank: Full Frontal Assault",
    "url": "/games/ratchet-and-clank-full-frontal-assault/ps3-135296",
    "platform": "PlayStation 3",
    "score": 6.4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Page Chronica",
    "url": "/games/page-chronica/ps3-145412",
    "platform": "PlayStation 3",
    "score": 4.1,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Hitman: Absolution",
    "url": "/games/hitman-absolution/pc-14251574",
    "platform": "PC",
    "score": 9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Batman: Arkham City -- Armored Edition",
    "url": "/games/batman-arkham-city/wii-u-110822",
    "platform": "Wii U",
    "score": 9.5,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Disney Epic Mickey 2: The Power of Two",
    "url": "/games/disney-epic-mickey-2-the-power-of-two/ps3-125841",
    "platform": "PlayStation 3",
    "score": 6,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Disney Epic Mickey 2: The Power of Two",
    "url": "/games/disney-epic-mickey-2-the-power-of-two/xbox-360-125840",
    "platform": "Xbox 360",
    "score": 6,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Darksiders II",
    "url": "/games/darksiders-2/wii-u-110809",
    "platform": "Wii U",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Scribblenauts Unlimited",
    "url": "/games/scribblenauts-unlimited/wii-u-135731",
    "platform": "Wii U",
    "score": 8.8,
    "genre": "Puzzle, Action",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Call of Duty: Black Ops Declassified",
    "url": "/games/call-of-duty-black-ops-declassified/vita-98928",
    "platform": "PlayStation Vita",
    "score": 4,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Fallen Enchantress",
    "url": "/games/elemental-fallen-enchantress/pc-101961",
    "platform": "PC",
    "score": 7.9,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Guns of Icarus Online",
    "url": "/games/guns-of-icarus-online/pc-115437",
    "platform": "PC",
    "score": 7.3,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Miner Wars 2081",
    "url": "/games/miner-wars-2081/pc-21143",
    "platform": "PC",
    "score": 5,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Guardians of Middle-earth",
    "url": "/games/guardians-of-middle-earth/ps3-135301",
    "platform": "PlayStation 3",
    "score": 7.5,
    "genre": "Battle",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "The Elder Scrolls V: Skyrim -- Dragonborn",
    "url": "/games/the-elder-scrolls-v-skyrim-dragonborn/xbox-360-146422",
    "platform": "Xbox 360",
    "score": 8.8,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Baldur's Gate -- Enhanced Edition",
    "url": "/games/baldurs-gate-enhanced-edition/ipad-130702",
    "platform": "iPad",
    "score": 6,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Black Knight Sword",
    "url": "/games/black-knight-sword/xbox-360-115069",
    "platform": "Xbox 360",
    "score": 6.9,
    "genre": "Puzzle, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Black Knight Sword",
    "url": "/games/black-knight-sword/ps3-115068",
    "platform": "PlayStation 3",
    "score": 6.9,
    "genre": "Puzzle, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: A Telltale Game Series -- Season One",
    "url": "/games/the-walking-dead-the-game/xbox-360-100888",
    "platform": "Xbox 360",
    "score": 9.3,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Sonic & All-Stars Racing Transformed",
    "url": "/games/sonic-all-stars-racing-transformed/xbox-360-133505",
    "platform": "Xbox 360",
    "score": 8.6,
    "genre": "Racing, Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "New Super Mario Bros. U",
    "url": "/games/new-super-mario-bros-u/wii-u-135584",
    "platform": "Wii U",
    "score": 9.1,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Sonic & All-Stars Racing Transformed",
    "url": "/games/sonic-all-stars-racing-transformed/ps3-133498",
    "platform": "PlayStation 3",
    "score": 8.6,
    "genre": "Racing, Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Nintendo Land",
    "url": "/games/nintendo-land/wii-u-135744",
    "platform": "Wii U",
    "score": 8.7,
    "genre": "Party",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "ARC Squadron",
    "url": "/games/arc-squadron-145523/iphone-145520",
    "platform": "iPhone",
    "score": 7.3,
    "genre": "Flight, Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Ninja Gaiden III: Razor's Edge",
    "url": "/games/ninja-gaiden-iii-razors-edge/wii-u-110811",
    "platform": "Wii U",
    "score": 7.6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: A Telltale Game Series -- Season One",
    "url": "/games/the-walking-dead-the-game/ps3-100887",
    "platform": "PlayStation 3",
    "score": 9.3,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead -- Game of the Year Edition",
    "url": "/games/the-walking-dead-game-of-the-year-edition/pc-20008044",
    "platform": "PC",
    "score": 9.3,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: A Telltale Game Series -- Season One",
    "url": "/games/the-walking-dead-the-game/iphone-150119",
    "platform": "iPhone",
    "score": 9.3,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Real Boxing",
    "url": "/games/real-boxing-147889/iphone-147888",
    "platform": "iPhone",
    "score": 7.6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Baldur's Gate -- Enhanced Edition",
    "url": "/games/baldurs-gate-enhanced-edition/pc-130328",
    "platform": "PC",
    "score": 8.1,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Crashmo",
    "url": "/games/crashmo/3ds-144426",
    "platform": "Nintendo 3DS",
    "score": 9.5,
    "genre": "Puzzle, Action",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "PlanetSide 2",
    "url": "/games/planetside-2/pc-14242769",
    "platform": "PC",
    "score": 9,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Disney Epic Mickey 2: The Power of Two",
    "url": "/games/disney-epic-mickey-2-the-power-of-two/wii-u-142951",
    "platform": "Wii U",
    "score": 6,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: A Telltale Game Series -- Season One",
    "url": "/games/the-walking-dead-the-game/pc-100880",
    "platform": "PC",
    "score": 9.3,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: A Telltale Game Series -- Season One",
    "url": "/games/the-walking-dead-the-game/mac-100885",
    "platform": "Macintosh",
    "score": 9.3,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Strike Suit Zero",
    "url": "/games/strike-suit-zero/pc-115112",
    "platform": "PC",
    "score": 7.5,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2013
  },
  {
    "title": "Final Fantasy: All The Bravest",
    "url": "/games/final-fantasy-all-the-bravest-156962/iphone-156958",
    "platform": "iPhone",
    "score": 2.5,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2013
  },
  {
    "title": "Tokyo Crash Mobs",
    "url": "/games/tokyo-crash-mobs/3ds-144441",
    "platform": "Nintendo 3DS",
    "score": 7.7,
    "genre": "Puzzle, Action",
    "editors_choice": "N",
    "release_year": 2013
  },
  {
    "title": "Ni no Kuni: Wrath of the White Witch",
    "url": "/games/ni-no-kuni/ps3-14284017",
    "platform": "PlayStation 3",
    "score": 9.4,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 2013
  },
  {
    "title": "Marvel's The Avengers: Battle For Earth",
    "url": "/games/marvels-the-avengers-battle-for-earth/wii-u-134289",
    "platform": "Wii U",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2013
  },
  {
    "title": "Borderlands 2: Sir Hammerlock's Big Game Hunt",
    "url": "/games/borderlands-2-hammerlocks-big-game-hunt/xbox-360-150509",
    "platform": "Xbox 360",
    "score": 6.9,
    "genre": "Shooter, RPG",
    "editors_choice": "N",
    "release_year": 2013
  },
  {
    "title": "Assassin's Creed III",
    "url": "/games/assassins-creed-iii/pc-119437",
    "platform": "PC",
    "score": 8.6,
    "genre": "Action, Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Chasing Aurora",
    "url": "/games/chasing-aurora/wii-u-135575",
    "platform": "Wii U",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Adventure Time: Hey Ice King! Why'd You Steal Our Garbage?",
    "url": "/games/adventure-time-hey-ice-king-whyd-you-steal-our-garbage/3ds-135984",
    "platform": "Nintendo 3DS",
    "score": 8.5,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Madden NFL 13",
    "url": "/games/madden-nfl-2013/wii-128099",
    "platform": "Wii",
    "score": 8.3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Warriors Orochi 3 Hyper",
    "url": "/games/warriors-orochi-3-hyper/wii-u-142961",
    "platform": "Wii U",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Transformers Prime",
    "url": "/games/transformers-prime/wii-u-136308",
    "platform": "Wii U",
    "score": 7.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Skylanders Battlegrounds",
    "url": "/games/skylanders-battlegrounds/iphone-146163",
    "platform": "iPhone",
    "score": 6.6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Rage of the Gladiator",
    "url": "/games/rage-of-the-gladiator-2010/iphone-146969",
    "platform": "iPhone",
    "score": 7.6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "FIFA Soccer 13",
    "url": "/games/fifa-2013/wii-u-136146",
    "platform": "Wii U",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Family Guy: Back to the Multiverse",
    "url": "/games/family-guy-back-to-the-multiverse/xbox-360-133934",
    "platform": "Xbox 360",
    "score": 6,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Family Guy: Back to the Multiverse",
    "url": "/games/family-guy-back-to-the-multiverse/ps3-133931",
    "platform": "PlayStation 3",
    "score": 6,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Little Inferno",
    "url": "/games/little-inferno/pc-136966",
    "platform": "PC",
    "score": 5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Little Inferno",
    "url": "/games/little-inferno/wii-u-137620",
    "platform": "Wii U",
    "score": 5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead -- Game of the Year Edition",
    "url": "/games/the-walking-dead-game-of-the-year-edition/ps3-20008043",
    "platform": "PlayStation 3",
    "score": 9.3,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead -- Game of the Year Edition",
    "url": "/games/the-walking-dead-game-of-the-year-edition/xbox-360-20008042",
    "platform": "Xbox 360",
    "score": 9.3,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: A Telltale Game Series -- Season One",
    "url": "/games/the-walking-dead-the-game/ipad-100886",
    "platform": "iPad",
    "score": 9.3,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Minigore 2: Zombies",
    "url": "/games/minigore-2-zombies/iphone-149695",
    "platform": "iPhone",
    "score": 9.1,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Jet Set Radio",
    "url": "/games/jet-set-radio/iphone-138175",
    "platform": "iPhone",
    "score": 5.6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Forge",
    "url": "/games/forge/pc-136254",
    "platform": "PC",
    "score": 7,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Nancy Drew: The Deadly Device",
    "url": "/games/nancy-drew-the-deadly-device/pc-145847",
    "platform": "PC",
    "score": 6.8,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Into the Dead",
    "url": "/games/into-the-dead/iphone-149569",
    "platform": "iPhone",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Just Dance 4",
    "url": "/games/just-dance-4/wii-u-135665",
    "platform": "Wii U",
    "score": 5.3,
    "genre": "Music",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Borderlands 2: Sir Hammerlock's Big Game Hunt",
    "url": "/games/borderlands-2-hammerlocks-big-game-hunt/pc-150514",
    "platform": "PC",
    "score": 6.9,
    "genre": "Shooter, RPG",
    "editors_choice": "N",
    "release_year": 2013
  },
  {
    "title": "Borderlands 2: Sir Hammerlock's Big Game Hunt",
    "url": "/games/borderlands-2-hammerlocks-big-game-hunt/ps3-150510",
    "platform": "PlayStation 3",
    "score": 6.9,
    "genre": "Shooter, RPG",
    "editors_choice": "N",
    "release_year": 2013
  },
  {
    "title": "DmC: Devil May Cry",
    "url": "/games/dmc/pc-134823",
    "platform": "PC",
    "score": 8.9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2013
  },
  {
    "title": "Unchained Blades",
    "url": "/games/unchained-blades/3ds-101274",
    "platform": "Nintendo 3DS",
    "score": 8,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2013
  },
  {
    "title": "DmC: Devil May Cry",
    "url": "/games/dmc/ps3-85707",
    "platform": "PlayStation 3",
    "score": 8.5,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2013
  },
  {
    "title": "The Earth Defense Force 2017 Portable",
    "url": "/games/the-earth-defense-force-2017/vita-137197",
    "platform": "PlayStation Vita",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2013
  },
  {
    "title": "007 Legends",
    "url": "/games/007-legends/wii-u-142949",
    "platform": "Wii U",
    "score": 4.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2013
  },
  {
    "title": "Wraithborne",
    "url": "/games/wraithborne/iphone-146959",
    "platform": "iPhone",
    "score": 5.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Persona 4 Golden",
    "url": "/games/shin-megami-tensei-persona-4/vita-116892",
    "platform": "PlayStation Vita",
    "score": 9.3,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Call of Duty: Black Ops II",
    "url": "/games/call-of-duty-black-ops-ii/wii-u-136081",
    "platform": "Wii U",
    "score": 9.3,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Rabbids Land",
    "url": "/games/rayman-raving-rabbids-for-wii-u/wii-u-110845",
    "platform": "Wii U",
    "score": 5,
    "genre": "Party",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Tekken Tag Tournament 2: Wii U Edition",
    "url": "/games/tekken-tag-tournament-2/wii-u-110807",
    "platform": "Wii U",
    "score": 7.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Far Cry 3",
    "url": "/games/far-cry-3/pc-53492",
    "platform": "PC",
    "score": 9,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Madden NFL 13",
    "url": "/games/madden-nfl-2013/wii-u-110858",
    "platform": "Wii U",
    "score": 8.3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Far Cry 3",
    "url": "/games/far-cry-3/ps3-53488",
    "platform": "PlayStation 3",
    "score": 9,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Little Inferno",
    "url": "/games/little-inferno/mac-137618",
    "platform": "Macintosh",
    "score": 5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Little Inferno",
    "url": "/games/little-inferno/ipad-162572",
    "platform": "iPad",
    "score": 5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Little Inferno",
    "url": "/games/little-inferno/linux-137619",
    "platform": "Linux",
    "score": 5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Little Inferno",
    "url": "/games/little-inferno/iphone-159505",
    "platform": "iPhone",
    "score": 5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Little Chomp",
    "url": "/games/little-chomp/iphone-148128",
    "platform": "iPhone",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Trine 2: Director's Cut",
    "url": "/games/trine-2/wii-u-135737",
    "platform": "Wii U",
    "score": 9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "LEGO The Lord of the Rings [Portable]",
    "url": "/games/lego-the-lord-of-the-rings-portable/3ds-135997",
    "platform": "Nintendo 3DS",
    "score": 3.8,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "LEGO The Lord of the Rings [Portable]",
    "url": "/games/lego-the-lord-of-the-rings-portable/vita-140079",
    "platform": "PlayStation Vita",
    "score": 3.8,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "LEGO The Lord of the Rings",
    "url": "/games/lego-the-lord-of-the-rings/xbox-360-135464",
    "platform": "Xbox 360",
    "score": 6.8,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Writer Rumble",
    "url": "/games/writer-rumble/iphone-149247",
    "platform": "iPhone",
    "score": 8.2,
    "genre": "Puzzle, Word Game",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Mass Effect",
    "url": "/games/mass-effect/ps3-143827",
    "platform": "PlayStation 3",
    "score": 9,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Guilty Gear XX Accent Core Plus",
    "url": "/games/guilty-gear-xx-accent-core-plus/xbox-360-128867",
    "platform": "Xbox 360",
    "score": 8.3,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Guilty Gear XX Accent Core Plus",
    "url": "/games/guilty-gear-xx-accent-core-plus/ps3-128866",
    "platform": "PlayStation 3",
    "score": 8.3,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Uncharted: Fight For Fortune",
    "url": "/games/uncharted-fight-for-fortune/vita-146817",
    "platform": "PlayStation Vita",
    "score": 7,
    "genre": "Card, Battle",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Modern Combat 4: Zero Hour",
    "url": "/games/modern-combat-4-zero-hour/iphone-143811",
    "platform": "iPhone",
    "score": 7.8,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Wonderbook: Book  of Spells",
    "url": "/games/book-of-spells/ps3-135683",
    "platform": "PlayStation 3",
    "score": 6,
    "genre": "Simulation, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Rift: Storm Legion",
    "url": "/games/rift-storm-legion/pc-135457",
    "platform": "PC",
    "score": 8.3,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Joe Danger",
    "url": "/games/joe-danger-touch/iphone-136836",
    "platform": "iPhone",
    "score": 9.1,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2013
  },
  {
    "title": "DmC: Devil May Cry",
    "url": "/games/dmc/xbox-360-86431",
    "platform": "Xbox 360",
    "score": 8.9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2013
  },
  {
    "title": "Anarchy Reigns",
    "url": "/games/anarchy-reigns/xbox-360-98770",
    "platform": "Xbox 360",
    "score": 5.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2013
  },
  {
    "title": "Anarchy Reigns",
    "url": "/games/anarchy-reigns/ps3-95396",
    "platform": "PlayStation 3",
    "score": 5.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2013
  },
  {
    "title": "Kentucky Route Zero: Act 1",
    "url": "/games/kentucky-route-zero-154732/pc-115270",
    "platform": "PC",
    "score": 8.3,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2013
  },
  {
    "title": "Primordia",
    "url": "/games/primordia/pc-140042",
    "platform": "PC",
    "score": 6.8,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2013
  },
  {
    "title": "Mutant Mudds",
    "url": "/games/mutant-mudds/iphone-149490",
    "platform": "iPhone",
    "score": 9.1,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 2013
  },
  {
    "title": "Far Cry 3",
    "url": "/games/far-cry-3/xbox-360-53491",
    "platform": "Xbox 360",
    "score": 9,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Mass Effect 3 (Special Edition)",
    "url": "/games/mass-effect-3/wii-u-135743",
    "platform": "Wii U",
    "score": 9.5,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Nano Assault Neo",
    "url": "/games/nano-assault-neo/wii-u-142952",
    "platform": "Wii U",
    "score": 9,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Disney Epic Mickey: Power of Illusion",
    "url": "/games/disney-epic-mickey-power-of-illusion/3ds-130576",
    "platform": "Nintendo 3DS",
    "score": 7,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Assassin's Creed III",
    "url": "/games/assassins-creed-iii/wii-u-110823",
    "platform": "Wii U",
    "score": 8.5,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Borderlands 2: Mr. Torgue's Campaign of Carnage",
    "url": "/games/borderlands-2-mr-torgues-campaign-of-carnage/pc-147951",
    "platform": "PC",
    "score": 9.2,
    "genre": "Shooter, RPG",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Scribblenauts Unlimited",
    "url": "/games/scribblenauts-unlimited/pc-135828",
    "platform": "PC",
    "score": 8.8,
    "genre": "Puzzle, Action",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "Borderlands 2: Mr. Torgue's Campaign of Carnage",
    "url": "/games/borderlands-2-mr-torgues-campaign-of-carnage/xbox-360-147949",
    "platform": "Xbox 360",
    "score": 9.2,
    "genre": "Shooter, RPG",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "PlayStation All-Stars Battle Royale",
    "url": "/games/playstation-all-stars-battle-royale/vita-135678",
    "platform": "PlayStation Vita",
    "score": 8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Jetpack Joyride",
    "url": "/games/jetpack-joyride/psp-148152",
    "platform": "PlayStation Portable",
    "score": 7.4,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "LEGO The Lord of the Rings",
    "url": "/games/lego-the-lord-of-the-rings/ps3-135460",
    "platform": "PlayStation 3",
    "score": 6.8,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: Assault",
    "url": "/games/the-walking-dead-assault/iphone-149294",
    "platform": "iPhone",
    "score": 7.5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Miasmata",
    "url": "/games/miasmata/pc-149038",
    "platform": "PC",
    "score": 7.9,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Bladeslinger: Episode 1",
    "url": "/games/bladeslinger/iphone-119042",
    "platform": "iPhone",
    "score": 7.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Funky Barn",
    "url": "/games/funky-barn-142959/wii-u-142960",
    "platform": "Wii U",
    "score": 5,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "ESPN Sports Connection",
    "url": "/games/sports-connection/wii-u-135664",
    "platform": "Wii U",
    "score": 3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Sonic & All-Stars Racing Transformed",
    "url": "/games/sonic-all-stars-racing-transformed/wii-u-139639",
    "platform": "Wii U",
    "score": 8.8,
    "genre": "Racing, Action",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Infestation: Survivor Stories",
    "url": "/games/the-war-z/pc-138069",
    "platform": "PC",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2013
  },
  {
    "title": "Labyrinth Legends",
    "url": "/games/labyrinth-legends/ps3-148868",
    "platform": "PlayStation 3",
    "score": 7.7,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2013
  },
  {
    "title": "Ace of Spades",
    "url": "/games/ace-of-spades-149688/pc-106949",
    "platform": "PC",
    "score": 5.9,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2013
  },
  {
    "title": "Monsters Inc. Run",
    "url": "/games/monsters-inc-run/iphone-150128",
    "platform": "iPhone",
    "score": 7.7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2013
  },
  {
    "title": "Pudding Monsters",
    "url": "/games/pudding-monsters/iphone-149492",
    "platform": "iPhone",
    "score": 7.3,
    "genre": "Puzzle, Adventure",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "Borderlands 2: Mr. Torgue's Campaign of Carnage",
    "url": "/games/borderlands-2-mr-torgues-campaign-of-carnage/ps3-147950",
    "platform": "PlayStation 3",
    "score": 9.2,
    "genre": "Shooter, RPG",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "PlayStation All-Stars Battle Royale",
    "url": "/games/playstation-all-stars-battle-royale/ps3-123511",
    "platform": "PlayStation 3",
    "score": 8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2012
  },
  {
    "title": "NBA 2K13",
    "url": "/games/nba-2k13/wii-u-135328",
    "platform": "Wii U",
    "score": 9.1,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "The Walking Dead: The Game -- Episode 5: No Time Left",
    "url": "/games/the-walking-dead-season-1-episode-5/xbox-360-135886",
    "platform": "Xbox 360",
    "score": 9.5,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2012
  },
  {
    "title": "NFL Quarterback Club '97",
    "url": "/games/nfl-quarterback-club-97/ps-293",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Namco Museum Vol. 2",
    "url": "/games/namco-museum-vol-2/ps-730",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action, Compilation",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Raven Project",
    "url": "/games/raven-project/ps-184",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Silverload",
    "url": "/games/silverload/ps-585",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Return Fire",
    "url": "/games/return-fire/ps-172",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Rise 2: Resurrection",
    "url": "/games/rise-2-resurrection/ps-174",
    "platform": "PlayStation",
    "score": 2,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Robo Pit",
    "url": "/games/robo-pit/ps-175",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "NBA ShootOut",
    "url": "/games/nba-shootout/ps-163",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Beyond The Beyond",
    "url": "/games/beyond-the-beyond/ps-450",
    "platform": "PlayStation",
    "score": 4,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Crash Bandicoot",
    "url": "/games/crash-bandicoot/ps-603",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Bust-A-Move 2: Arcade Edition",
    "url": "/games/bust-a-move-2-arcade-edition/ps-684",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "CyberSpeed",
    "url": "/games/cyberspeed/ps-139",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "D",
    "url": "/games/d/ps-688",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Assault Rigs",
    "url": "/games/assault-rigs/ps-134",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "ESPN Extreme Games",
    "url": "/games/espn-extreme-games/ps-547",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Doom (1993)",
    "url": "/games/doom/ps-671",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Bottom of the 9th",
    "url": "/games/bottom-of-the-9th/ps-110",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Adidas Power Soccer",
    "url": "/games/adidas-power-soccer/ps-715",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Agile Warrior F-111X",
    "url": "/games/agile-warrior-f-111x/ps-133",
    "platform": "PlayStation",
    "score": 2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Alien Trilogy",
    "url": "/games/alien-trilogy/ps-452",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Alone in the Dark: One Eyed Jack's Revenge",
    "url": "/games/alone-in-the-dark-2/ps-677",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Fade to Black",
    "url": "/games/fade-to-black/ps-146",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Die Hard Trilogy",
    "url": "/games/die-hard-trilogy/ps-447",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Discworld",
    "url": "/games/discworld/ps-583",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Battle Arena Toshinden 2",
    "url": "/games/battle-arena-toshinden-2/ps-451",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "A-Train",
    "url": "/games/a-train/ps-670",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Casper -- A Haunting 3D Challenge",
    "url": "/games/casper-a-haunting-3d-challenge/ps-438",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Bogey Dead 6",
    "url": "/games/bogey-dead-6/ps-449",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Flight, Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Namco Museum Vol. 1",
    "url": "/games/namco-museum-vol-1/ps-702",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action, Compilation",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Road & Track Presents: The Need for Speed",
    "url": "/games/road-and-track-presents-the-need-for-speed/ps-1864",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Romance of the Three Kingdoms IV: Wall of Fire",
    "url": "/games/romance-of-the-three-kingdoms-iv-wall-of-fire/ps-478",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "PGA Tour '96",
    "url": "/games/pga-tour-96/ps-165",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Rayman",
    "url": "/games/rayman/ps-69",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Raiden Project",
    "url": "/games/raiden-project/ps-720",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Andretti Racing",
    "url": "/games/andretti-racing/ps-703",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Discworld",
    "url": "/games/discworld/ps-583",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Die Hard Trilogy",
    "url": "/games/die-hard-trilogy/ps-447",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Gunship",
    "url": "/games/gunship-23429/ps-280",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Olympic Summer Games: Atlanta '96",
    "url": "/games/olympic-summer-games-atlanta-96-808731/ps-551",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Revolution X",
    "url": "/games/revolution-x/ps-689",
    "platform": "PlayStation",
    "score": 1,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Shockwave Assault",
    "url": "/games/shockwave-assault/ps-679",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "HardBall 5",
    "url": "/games/hardball-5/ps-140",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Twisted Metal [1996]",
    "url": "/games/twisted-metal-1996/ps-444",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "WipEout XL",
    "url": "/games/wipeout-2097/ps-473",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1996
  },
  {
    "title": "WipEout",
    "url": "/games/wipeout/ps-192",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Tobal No. 1",
    "url": "/games/tobal-no-1/ps-743",
    "platform": "PlayStation",
    "score": 8.7,
    "genre": "Fighting",
    "editors_choice": "Y",
    "release_year": 1996
  },
  {
    "title": "Star Gladiator Episode 1: Final Crusade",
    "url": "/games/star-gladiator-episode-1-final-crusade/ps-461",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Starfighter",
    "url": "/games/starfighter/ps-287",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Battle Arena Toshinden",
    "url": "/games/battle-arena-toshinden/ps-716",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Destruction Derby",
    "url": "/games/destruction-derby/ps-144",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Racing, Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Aquanaut's Holiday",
    "url": "/games/aquanauts-holiday/ps-548",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Creature Shock (Special Edition)",
    "url": "/games/creature-shock/ps-136",
    "platform": "PlayStation",
    "score": 2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Air Combat",
    "url": "/games/air-combat/ps-393",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Flight, Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Descent",
    "url": "/games/descent-1995/ps-143",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Cyber Sled",
    "url": "/games/cyber-sled/ps-138",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "DEFCON 5",
    "url": "/games/defcon-5/ps-142",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "The King of Fighters '95",
    "url": "/games/the-king-of-fighters-95/ps-2072",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Jumping Flash! 2",
    "url": "/games/jumping-flash-2/ps-577",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Epidemic",
    "url": "/games/epidemic/ps-299",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Philosoma",
    "url": "/games/philosoma/ps-166",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "NBA In the Zone",
    "url": "/games/nba-in-the-zone-36223/ps-164",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Magic Carpet",
    "url": "/games/magic-carpet/ps-159",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Power Serve 3D Tennis",
    "url": "/games/power-serve-3d-tennis/ps-167",
    "platform": "PlayStation",
    "score": 2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Resident Evil [1996]",
    "url": "/games/resident-evil/ps-610",
    "platform": "PlayStation",
    "score": 8.7,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "NCAA GameBreaker",
    "url": "/games/ncaa-gamebreaker/ps-724",
    "platform": "PlayStation",
    "score": 6.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Project: Horned Owl",
    "url": "/games/project-horned-owl/ps-706",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Frank Thomas: Big Hurt Baseball",
    "url": "/games/frank-thomas-big-hurt-baseball/pc-672",
    "platform": "PC",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Goal Storm",
    "url": "/games/goal-storm/ps-150",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "In the Hunt",
    "url": "/games/in-the-hunt/ps-70",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "International Track & Field",
    "url": "/games/international-track-field/ps-12",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Novastorm",
    "url": "/games/novastorm/ps-554",
    "platform": "PlayStation",
    "score": 2,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "PO'ed",
    "url": "/games/poed/ps-2098",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "NBA Jam: Tournament Edition",
    "url": "/games/nba-jam-tournament-edition/ps-701",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "WWF Wrestlemania: The Arcade Game",
    "url": "/games/wwf-wrestlemania/ps-714",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Williams Arcade's Greatest Hits",
    "url": "/games/williams-arcades-greatest-hits/ps-202",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Compilation",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Tetris Plus",
    "url": "/games/tetris-plus/ps-725",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Slam 'n Jam '96: Featuring Magic and Kareem",
    "url": "/games/slam-n-jam-96-featuring-magic-and-kareem/ps-708",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "V-Tennis",
    "url": "/games/v-tennis/ps-712",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Tokyo Highway Battle",
    "url": "/games/tokyo-highway-battle/ps-185",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Zero Divide",
    "url": "/games/zero-divide/ps-193",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "X-COM: UFO Defense",
    "url": "/games/ufo-enemy-unknown/ps-686",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 1996
  },
  {
    "title": "Darkstalkers: The Night Warriors",
    "url": "/games/darkstalkers-the-night-warriors/ps-141",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "FIFA Soccer '96",
    "url": "/games/fifa-soccer-96/ps-542",
    "platform": "PlayStation",
    "score": 7.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Mortal Kombat Trilogy",
    "url": "/games/mortal-kombat-trilogy/n64-454",
    "platform": "Nintendo 64",
    "score": 4.1,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Wave Race 64",
    "url": "/games/wave-race-64/n64-81",
    "platform": "Nintendo 64",
    "score": 9.7,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1996
  },
  {
    "title": "Battle Arena Toshinden Remix",
    "url": "/games/battle-arena-toshinden-remix/saturn-195",
    "platform": "Saturn",
    "score": 5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Cruis'n USA",
    "url": "/games/cruisn-usa/n64-498",
    "platform": "Nintendo 64",
    "score": 4,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Batman Forever: The Arcade Game",
    "url": "/games/batman-forever/ps-318",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Pilotwings 64",
    "url": "/games/pilotwings-64/n64-83",
    "platform": "Nintendo 64",
    "score": 8.2,
    "genre": "Flight",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Road Rash",
    "url": "/games/road-rash/ps-102",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Racing, Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Ridge Racer [1995]",
    "url": "/games/ridge-racer-1995/ps-173",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Shellshock",
    "url": "/games/shellshock/ps-177",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "SimCity 2000",
    "url": "/games/simcity-2000/ps-680",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Street Fighter Alpha: Warriors' Dreams",
    "url": "/games/street-fighter-alpha/ps-181",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "The Hive",
    "url": "/games/the-hive/ps-693",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Loaded",
    "url": "/games/loaded/ps-157",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Revolution X",
    "url": "/games/revolution-x/ps-689",
    "platform": "PlayStation",
    "score": 1,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Olympic Summer Games: Atlanta '96",
    "url": "/games/olympic-summer-games-atlanta-96-808731/ps-551",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "NBA Live '96",
    "url": "/games/nba-live-96/ps-171",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Psychic Detective",
    "url": "/games/psychic-detective/ps-526",
    "platform": "PlayStation",
    "score": 2,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "NHL FaceOff",
    "url": "/games/nhl-faceoff/ps-555",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "NFL GameDay",
    "url": "/games/nfl-gameday/ps-553",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Kileak: The DNA Imperative",
    "url": "/games/kileak-the-dna-imperative/ps-718",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Raven Project",
    "url": "/games/raven-project/ps-184",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Silverload",
    "url": "/games/silverload/ps-585",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Formula 1",
    "url": "/games/formula-1/ps-106",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Worms",
    "url": "/games/worms/ps-277",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Zoop",
    "url": "/games/zoop/ps-721",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Space Griffon",
    "url": "/games/space-griffon/ps-709",
    "platform": "PlayStation",
    "score": 2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Tekken 2",
    "url": "/games/tekken-2/ps-475",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Fighting",
    "editors_choice": "Y",
    "release_year": 1996
  },
  {
    "title": "Warhawk",
    "url": "/games/warhawk/ps-189",
    "platform": "PlayStation",
    "score": 8.7,
    "genre": "Flight, Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Rayman",
    "url": "/games/rayman/ps-69",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Romance of the Three Kingdoms IV: Wall of Fire",
    "url": "/games/romance-of-the-three-kingdoms-iv-wall-of-fire/ps-478",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Advanced Dungeons & Dragons: Iron & Blood -- Warriors of Ravenloft",
    "url": "/games/advanced-dungeons-dragons-iron-blood-warriors-of-ravenloft/ps-303",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Super Mario 64",
    "url": "/games/super-mario-64/n64-606",
    "platform": "Nintendo 64",
    "score": 9.8,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 1996
  },
  {
    "title": "Baku Baku",
    "url": "/games/baku-baku/saturn-194",
    "platform": "Saturn",
    "score": 7,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "The Walking Dead: The Game -- Episode 1: A New Day",
    "url": "/games/the-walking-dead-season-1-episode-1/xbox-360-135866",
    "platform": "Xbox 360",
    "score": 8.5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1970
  },
  {
    "title": "Olympic Soccer",
    "url": "/games/olympic-soccer/ps-552",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Off-World Interceptor Extreme",
    "url": "/games/off-world-interceptor-extreme/ps-704",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Gex",
    "url": "/games/gex/ps-149",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Skeleton Warriors",
    "url": "/games/skeleton-warriors/ps-707",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Johnny Bazookatone",
    "url": "/games/johnny-bazookatone/ps-674",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "PGA Tour '96",
    "url": "/games/pga-tour-96/ps-165",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Namco Museum Vol. 1",
    "url": "/games/namco-museum-vol-1/ps-702",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action, Compilation",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Road & Track Presents: The Need for Speed",
    "url": "/games/road-and-track-presents-the-need-for-speed/ps-1864",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Mario Kart 64",
    "url": "/games/mario-kart/n64-502",
    "platform": "Nintendo 64",
    "score": 8.1,
    "genre": "Racing, Action",
    "editors_choice": "Y",
    "release_year": 1997
  },
  {
    "title": "Rally Cross",
    "url": "/games/rally-cross/ps-757",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Spider",
    "url": "/games/spider/ps-614",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Grid Runner",
    "url": "/games/grid-runner/ps-434",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Virtual Pool",
    "url": "/games/virtual-pool/ps-731",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Pro-Pinball",
    "url": "/games/pro-pinball/ps-756",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Pinball",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Deception: Invitation to Darkness",
    "url": "/games/deception-invitation-to-darkness/ps-755",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Peak Performance",
    "url": "/games/peak-performance/ps-2100",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Independence Day",
    "url": "/games/independence-day/ps-1860",
    "platform": "PlayStation",
    "score": 2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Buster Bros. Collection",
    "url": "/games/buster-bros-collection/ps-759",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Re-Loaded: The Hardcore Sequel",
    "url": "/games/re-loaded-the-hardcore-sequel/ps-41",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Destruction Derby 2",
    "url": "/games/destruction-derby-2/ps-7",
    "platform": "PlayStation",
    "score": 7.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Blood Omen: Legacy of Kain",
    "url": "/games/blood-omen-legacy-of-kain/ps-2024",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Action, RPG",
    "editors_choice": "Y",
    "release_year": 1997
  },
  {
    "title": "Tunnel B-1",
    "url": "/games/tunnel-b-1/ps-58",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Doom 64",
    "url": "/games/doom/n64-503",
    "platform": "Nintendo 64",
    "score": 7.4,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "NHL FaceOff '97",
    "url": "/games/nhl-faceoff-97/ps-753",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Super Puzzle Fighter II Turbo",
    "url": "/games/super-puzzle-fighter-ii-turbo/ps-728",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Puzzle, Action",
    "editors_choice": "Y",
    "release_year": 1997
  },
  {
    "title": "NBA Hang Time",
    "url": "/games/nba-hang-time/n64-270",
    "platform": "Nintendo 64",
    "score": 5.4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Suikoden",
    "url": "/games/suikoden/ps-443",
    "platform": "PlayStation",
    "score": 9,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Battle Stations",
    "url": "/games/battle-stations/ps-758",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Nanotek Warrior",
    "url": "/games/nanotek-warrior/ps-748",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Rush Hour",
    "url": "/games/rush-hour/ps-746",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "BRAHMA Force: The Assault On Beltlogger 9",
    "url": "/games/brahma-force-the-assault-on-beltlogger-9/ps-735",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Vandal Hearts",
    "url": "/games/vandal-hearts/ps-727",
    "platform": "PlayStation",
    "score": 8,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "MechWarrior 2",
    "url": "/games/mechwarrior-2/ps-89",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "VR Baseball '97",
    "url": "/games/vr-baseball-97/ps-742",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Need for Speed II",
    "url": "/games/need-for-speed-collection/ps-739",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Samurai Shodown III: Blades of Blood",
    "url": "/games/samurai-shodown-best-collection/ps-101",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Mortal Kombat Trilogy",
    "url": "/games/mortal-kombat-trilogy/ps-462",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Pitball",
    "url": "/games/pitball/ps-308",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "MLB Pennant Race",
    "url": "/games/mlb-pennant-race/ps-80",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Tempest X3: An Inter-Galactic Battle Zone",
    "url": "/games/tempest-x3-an-inter-galactic-battle-zone/ps-40",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Project Overkill",
    "url": "/games/project-overkill/ps-169",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Crusader: No Remorse",
    "url": "/games/crusader-no-remorse/ps-752",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "VR Golf '97",
    "url": "/games/vr-golf-97/ps-751",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Iron Man / XO Manowar in Heavy Metal",
    "url": "/games/iron-man-xo-manowar-in-heavy-metal/ps-750",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Disruptor",
    "url": "/games/disruptor/ps-135",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Final Doom",
    "url": "/games/final-doom/ps-446",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Twisted Metal 2",
    "url": "/games/twisted-metal-2/ps-325",
    "platform": "PlayStation",
    "score": 7.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "NFL GameDay 97",
    "url": "/games/nfl-gameday-97/ps-326",
    "platform": "PlayStation",
    "score": 7.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Jet Moto",
    "url": "/games/jet-moto/ps-442",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "FIFA Soccer 64",
    "url": "/games/fifa-97/n64-767",
    "platform": "Nintendo 64",
    "score": 4.2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Command & Conquer (1997)",
    "url": "/games/command-and-conquer/ps-500",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Mega Man 8",
    "url": "/games/mega-man-8/ps-561",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Big Bass World Championship",
    "url": "/games/big-bass-world-championship/ps-729",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Blast Corps",
    "url": "/games/blast-corps-138193/n64-416",
    "platform": "Nintendo 64",
    "score": 9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 1997
  },
  {
    "title": "NBA Live '97",
    "url": "/games/nba-live-97/ps-529",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "NBA ShootOut '97",
    "url": "/games/nba-shootout-97/ps-740",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 1997
  },
  {
    "title": "Turok: Dinosaur Hunter",
    "url": "/games/turok-dinosaur-hunter/n64-425",
    "platform": "Nintendo 64",
    "score": 8.6,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "The Crow: City of Angels",
    "url": "/games/the-crow-city-of-angels/ps-738",
    "platform": "PlayStation",
    "score": 1,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Star Wars: Dark Forces",
    "url": "/games/star-wars-dark-forces/ps-27",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Tomb Raider -- Featuring Lara Croft",
    "url": "/games/tomb-raider-featuring-lara-croft/ps-97",
    "platform": "PlayStation",
    "score": 9.3,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Pandemonium",
    "url": "/games/magical-hoppers/ps-611",
    "platform": "PlayStation",
    "score": 6.6,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Cool Boarders",
    "url": "/games/cool-boarders/ps-71",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "NBA In the Zone 2",
    "url": "/games/nba-in-the-zone-2/ps-331",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Street Fighter Alpha 2",
    "url": "/games/street-fighter-alpha-2/ps-476",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "TNN Motorsports Hardcore 4X4",
    "url": "/games/hard-core-4x4/ps-747",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Black Dawn",
    "url": "/games/black-dawn/ps-11",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Namco Museum Vol. 3",
    "url": "/games/namco-museum-vol-3/ps-733",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action, Compilation",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Crypt Killer",
    "url": "/games/crypt-killer/ps-734",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Carnage Heart",
    "url": "/games/carnage-heart/ps-304",
    "platform": "PlayStation",
    "score": 9.2,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Soul Blade",
    "url": "/games/soul-blade/ps-2117",
    "platform": "PlayStation",
    "score": 8.3,
    "genre": "Fighting",
    "editors_choice": "Y",
    "release_year": 1997
  },
  {
    "title": "Hi-Octane",
    "url": "/games/hi-octane/ps-152",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Star Wars: Shadows of the Empire",
    "url": "/games/star-wars-shadows-of-the-empire/n64-415",
    "platform": "Nintendo 64",
    "score": 6.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Wayne Gretzky's 3D Hockey",
    "url": "/games/wayne-gretzkys-3d-hockey/n64-765",
    "platform": "Nintendo 64",
    "score": 7.1,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Killer Instinct Gold",
    "url": "/games/killer-instinct-gold/n64-499",
    "platform": "Nintendo 64",
    "score": 6.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Spot Goes to Hollywood",
    "url": "/games/spot-goes-to-hollywood/ps-565",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Space Hulk: Vengeance of the Blood Angels",
    "url": "/games/space-hulk-vengeance-of-the-blood-angels/ps-533",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Tekken",
    "url": "/games/tekken/ps-182",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "VR Soccer '96",
    "url": "/games/vr-soccer/ps-14",
    "platform": "PlayStation",
    "score": 7.7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Top Gun: Fire At Will",
    "url": "/games/top-gun-fire-at-will/ps-682",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "World Cup Golf: Professional Edition",
    "url": "/games/world-cup-golf-hyatt-dorado-beach/ps-685",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "Tobal No. 1",
    "url": "/games/tobal-no-1/ps-743",
    "platform": "PlayStation",
    "score": 8.7,
    "genre": "Fighting",
    "editors_choice": "Y",
    "release_year": 1996
  },
  {
    "title": "Twisted Metal [1996]",
    "url": "/games/twisted-metal-1996/ps-444",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1996
  },
  {
    "title": "WipEout XL",
    "url": "/games/wipeout-2097/ps-473",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1996
  },
  {
    "title": "Doraemon Nobita & The 3 Fairy Spirit Stones",
    "url": "/games/doraemon-nobita-the-3-fairy-spirit-stones/n64-1901",
    "platform": "Nintendo 64",
    "score": 3,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Xevious 3D/G+",
    "url": "/games/xevious-3d-g/ps-2134",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Thunder Truck Rally",
    "url": "/games/thunder-truck-rally/ps-2125",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "NBA Hang Time",
    "url": "/games/nba-hang-time/ps-264",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "All-Star Baseball '97 Featuring Frank Thomas",
    "url": "/games/all-star-baseball-97-featuring-frank-thomas/ps-2017",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "War Gods",
    "url": "/games/war-gods/n64-463",
    "platform": "Nintendo 64",
    "score": 4.3,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Broken Helix",
    "url": "/games/broken-helix/ps-441",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Codename: Tenka",
    "url": "/games/codename-tenka/ps-2033",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "War Gods",
    "url": "/games/war-gods/ps-268",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Hexen",
    "url": "/games/hexen/ps-2065",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Descent Maximum",
    "url": "/games/descent-maximum/ps-2043",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "The City of Lost Children",
    "url": "/games/the-city-of-lost-children/ps-2031",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Wing Commander IV: The Price of Freedom",
    "url": "/games/wing-commander-iv-the-price-of-freedom/ps-1876",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Overblood",
    "url": "/games/overblood/ps-564",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Wild ARMs",
    "url": "/games/wild-arms/ps-1875",
    "platform": "PlayStation",
    "score": 8,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Rage Racer",
    "url": "/games/rage-racer/ps-505",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Star Fox 64",
    "url": "/games/star-fox-64/n64-419",
    "platform": "Nintendo 64",
    "score": 8.7,
    "genre": "Flight, Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Swagman",
    "url": "/games/swagman/ps-579",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Grand Slam",
    "url": "/games/grand-slam/ps-2062",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Triple Play '98",
    "url": "/games/triple-play-98/ps-1874",
    "platform": "PlayStation",
    "score": 9.2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Norse By Norse West: The Return of the Lost Vikings",
    "url": "/games/norse-by-norse-west-the-return-of-the-lost-vikings/ps-2093",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Tail of the Sun",
    "url": "/games/tail-of-the-sun/ps-2122",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Goal Storm '97",
    "url": "/games/goal-storm-97/ps-1857",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Sentient [1997]",
    "url": "/games/sentient-1997/ps-2115",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Psychic Force",
    "url": "/games/psychic-force/ps-57",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "NHL Powerplay '98",
    "url": "/games/nhl-powerplay-98/ps-2156",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Madden NFL '98",
    "url": "/games/madden-football-64/ps-2079",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "The Lost World: Jurassic Park",
    "url": "/games/the-lost-world-jurassic-park/ps-2124",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "NFL GameDay 98",
    "url": "/games/nfl-gameday-98/ps-2087",
    "platform": "PlayStation",
    "score": 8.8,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 1997
  },
  {
    "title": "GoldenEye 007",
    "url": "/games/goldeneye/n64-1991",
    "platform": "Nintendo 64",
    "score": 9.7,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 1997
  },
  {
    "title": "Ace Combat 2",
    "url": "/games/ace-combat-2/ps-481",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Flight, Action",
    "editors_choice": "Y",
    "release_year": 1997
  },
  {
    "title": "Warcraft II: The Dark Saga",
    "url": "/games/warcraft-ii-the-dark-saga/ps-2132",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Machine Hunter",
    "url": "/games/machine-hunter/ps-2078",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Tetrisphere",
    "url": "/games/tetrisphere/n64-420",
    "platform": "Nintendo 64",
    "score": 8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Ogre Battle",
    "url": "/games/ogre-battle/ps-2095",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Porsche Challenge",
    "url": "/games/porsche-challenge/ps-2103",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "NCAA Football '98",
    "url": "/games/ncaa-football-98/ps-2086",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Lethal Enforcers I & II",
    "url": "/games/lethal-enforcers/ps-2074",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "VMX Racing",
    "url": "/games/vmx-racing/ps-68",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Duke Nukem 64",
    "url": "/games/duke-nukem-3d/n64-85",
    "platform": "Nintendo 64",
    "score": 8,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "NBA Live '98",
    "url": "/games/nba-live-98/ps-2142",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Jet Moto 2",
    "url": "/games/jet-moto-2/ps-2068",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Cool Boarders 2",
    "url": "/games/cool-boarders-2/ps-2035",
    "platform": "PlayStation",
    "score": 7.2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Time Crisis",
    "url": "/games/time-crisis/ps-2126",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 1997
  },
  {
    "title": "Maximum Force",
    "url": "/games/maximum-force/ps-2080",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Treasures of the Deep",
    "url": "/games/treasures-of-the-deep/ps-2155",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Discworld II: Mortality Bytes!",
    "url": "/games/discworld-ii-mortality-bytes/ps-2044",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Nuclear Strike",
    "url": "/games/nuclear-strike/ps-2140",
    "platform": "PlayStation",
    "score": 7.6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "NHL FaceOff '98",
    "url": "/games/nhl-faceoff-98/ps-2088",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "NASCAR 98",
    "url": "/games/nascar-98/ps-2085",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "MLB '98",
    "url": "/games/mlb-98/ps-2077",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Herc's Adventures",
    "url": "/games/hercs-adventures/ps-1858",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Namco Museum Vol. 4",
    "url": "/games/namco-museum-vol-4/ps-2089",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action, Compilation",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Syndicate Wars",
    "url": "/games/syndicate-wars/ps-534",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Dark Rift",
    "url": "/games/dark-rift/n64-1954",
    "platform": "Nintendo 64",
    "score": 5.4,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Hercules",
    "url": "/games/hercules/ps-2045",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Battlesport",
    "url": "/games/battlesport-805676/ps-320",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Darklight Conflict",
    "url": "/games/darklight-conflict/ps-2041",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Dynasty Warriors",
    "url": "/games/dynasty-warriors-806701/ps-2047",
    "platform": "PlayStation",
    "score": 7.8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "F1 Pole Position 64",
    "url": "/games/f1-pole-position-64/n64-1977",
    "platform": "Nintendo 64",
    "score": 4.1,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Madden Football 64",
    "url": "/games/madden-football-64/n64-2196",
    "platform": "Nintendo 64",
    "score": 7.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "1080° Snowboarding",
    "url": "/games/1080-snowboarding/n64-2225",
    "platform": "Nintendo 64",
    "score": 8.6,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "San Francisco Rush: Extreme Racing",
    "url": "/games/san-francisco-rush-extreme-racing/ps-3725",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Judge Dredd",
    "url": "/games/judge-dredd-14213549/ps-2326",
    "platform": "PlayStation",
    "score": 2,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Tennis Arena",
    "url": "/games/tennis-arena/ps-2204",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Rampage: World Tour",
    "url": "/games/rampage-world-tour/n64-2289",
    "platform": "Nintendo 64",
    "score": 4.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Pitfall 3D",
    "url": "/games/pitfall-3d/ps-2101",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "San Francisco Rush: Extreme Racing",
    "url": "/games/san-francisco-rush-extreme-racing/n64-1941",
    "platform": "Nintendo 64",
    "score": 8.9,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Dragon Ball GT Final Bout",
    "url": "/games/dragon-ball-gt-final-bout/ps-2207",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Mass Destruction",
    "url": "/games/mass-destruction/ps-2164",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Need for Speed: V-Rally",
    "url": "/games/need-for-speed-v-rally/ps-2129",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Caesars Palace",
    "url": "/games/caesars-palace/ps-2028",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Casino",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Crash Bandicoot 2: Cortex Strikes Back",
    "url": "/games/crash-bandicoot-2-cortex-strikes-back/ps-2037",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Colony Wars",
    "url": "/games/colony-wars/ps-2034",
    "platform": "PlayStation",
    "score": 9.3,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 1997
  },
  {
    "title": "Frogger",
    "url": "/games/frogger-108479/ps-2057",
    "platform": "PlayStation",
    "score": 2,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Moto Racer",
    "url": "/games/moto-racer/ps-2141",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Jeopardy! [1998]",
    "url": "/games/jeopardy-1998/n64-1998",
    "platform": "Nintendo 64",
    "score": 3.8,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NCAA March Madness '98",
    "url": "/games/ncaa-march-madness-98/ps-2292",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Shadow Master",
    "url": "/games/shadow-master/ps-2116",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Oddworld: Abe's Oddysee",
    "url": "/games/oddworld-abes-oddysee/ps-2094",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "NHL '98",
    "url": "/games/nhl-98/ps-1732",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Poy Poy",
    "url": "/games/poy-poy/ps-2104",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 1997
  },
  {
    "title": "Bottom of the 9th '97",
    "url": "/games/bottom-of-the-9th-97/ps-2025",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Magic: The Gathering -- Battlemage",
    "url": "/games/magic-the-gathering-battlemage/ps-321",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Steel Reign",
    "url": "/games/steel-reign/ps-2119",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Tecmo Stackers",
    "url": "/games/tecmo-stackers/ps-2123",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Multi Racing Championship",
    "url": "/games/multi-racing-championship/n64-1916",
    "platform": "Nintendo 64",
    "score": 6.4,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "RayStorm",
    "url": "/games/g-darius-raystorm-pack/ps-2108",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Hexen",
    "url": "/games/hexen/n64-1994",
    "platform": "Nintendo 64",
    "score": 3.7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Battle Arena Toshinden 3",
    "url": "/games/battle-arena-toshinden-3/ps-2022",
    "platform": "PlayStation",
    "score": 6.3,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "WCW vs. NWO: World Tour",
    "url": "/games/wcw-vs-nwo-world-tour/n64-1985",
    "platform": "Nintendo 64",
    "score": 7.5,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Spawn: The Eternal",
    "url": "/games/spawn-the-eternal/ps-324",
    "platform": "PlayStation",
    "score": 2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Mortal Kombat Mythologies: Sub-Zero",
    "url": "/games/mortal-kombat-mythologies-sub-zero/n64-1914",
    "platform": "Nintendo 64",
    "score": 3,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Wheel of Fortune [1997]",
    "url": "/games/wheel-of-fortune-n64/n64-1981",
    "platform": "Nintendo 64",
    "score": 6.4,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Bug Riders",
    "url": "/games/bug-riders/ps-2027",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Automobili Lamborghini",
    "url": "/games/automobili-lamborghini/n64-2002",
    "platform": "Nintendo 64",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Excalibur 2555 AD",
    "url": "/games/excalibur-2555-ad/ps-2049",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Armored Core",
    "url": "/games/armored-core/ps-2020",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "ClayFighter 63 1/3",
    "url": "/games/clayfighter-63-13/n64-1940",
    "platform": "Nintendo 64",
    "score": 3.7,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Persona",
    "url": "/games/persona/ps-2193",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Golden Nugget",
    "url": "/games/golden-nugget/ps-295",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Bushido Blade",
    "url": "/games/bushido-blade/ps-464",
    "platform": "PlayStation",
    "score": 8.7,
    "genre": "Fighting",
    "editors_choice": "Y",
    "release_year": 1997
  },
  {
    "title": "Diablo",
    "url": "/games/diablo/ps-2255",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Action, RPG",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Dead or Alive",
    "url": "/games/dead-or-alive-806438/ps-2306",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Fighting",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Speed Racer",
    "url": "/games/speed-racer/ps-3662",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Lode Runner: The Legend Returns",
    "url": "/games/lode-runner-the-legend-returns/ps-2298",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Saga Frontier",
    "url": "/games/saga-frontier/ps-2114",
    "platform": "PlayStation",
    "score": 7,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Rascal",
    "url": "/games/rascal/ps-2106",
    "platform": "PlayStation",
    "score": 2,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Quake",
    "url": "/games/aftershock-for-quake/n64-397",
    "platform": "Nintendo 64",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "ReBoot",
    "url": "/games/reboot/ps-2109",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Snowboard Kids",
    "url": "/games/snowboard-kids/n64-2262",
    "platform": "Nintendo 64",
    "score": 8,
    "genre": "Sports, Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Test Drive 4",
    "url": "/games/test-drive-4/ps-2143",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Fighting Force",
    "url": "/games/fighting-force/ps-2053",
    "platform": "PlayStation",
    "score": 5.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Jimmy Johnson's VR Football 98",
    "url": "/games/jimmy-johnsons-vr-football-98/ps-2069",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Reel Fishing",
    "url": "/games/reel-fishing-950449/ps-2111",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Shipwreckers!",
    "url": "/games/shipwreckers-2097/ps-2097",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Command & Conquer: Red Alert",
    "url": "/games/command-and-conquer-red-alert/ps-2198",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Rampage: World Tour",
    "url": "/games/rampage-world-tour/ps-2174",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Street Fighter EX Plus Alpha",
    "url": "/games/street-fighter-ex-plus/ps-2120",
    "platform": "PlayStation",
    "score": 8.3,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Nightmare Creatures",
    "url": "/games/nightmare-creatures/ps-2091",
    "platform": "PlayStation",
    "score": 7.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "NBA In the Zone '98",
    "url": "/games/nba-in-the-zone-98/n64-2265",
    "platform": "Nintendo 64",
    "score": 4.7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Nagano Winter Olympics '98",
    "url": "/games/nagano-winter-olympics-98/n64-2259",
    "platform": "Nintendo 64",
    "score": 4.2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Skullmonkeys",
    "url": "/games/skullmonkeys/ps-2175",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Nagano Winter Olympics '98",
    "url": "/games/nagano-winter-olympics-98/ps-2293",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NBA in the Zone '98",
    "url": "/games/nba-in-the-zone-98/ps-2214",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Fighters Destiny",
    "url": "/games/fighters-destiny/n64-2168",
    "platform": "Nintendo 64",
    "score": 8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NHL Breakaway '98",
    "url": "/games/nhl-breakaway-98/ps-1863",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Felony 11-79",
    "url": "/games/felony-11-79/ps-2052",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Racing, Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Arcade's Greatest Hits: The Atari Collection 1",
    "url": "/games/arcades-greatest-hits-atari-collection-1/ps-9792",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Compilation",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Tiger Shark",
    "url": "/games/tiger-shark/ps-522",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Final Fantasy VII",
    "url": "/games/final-fantasy-vii/ps-494",
    "platform": "PlayStation",
    "score": 9.5,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 1997
  },
  {
    "title": "International Superstar Soccer 64",
    "url": "/games/international-superstar-soccer-64/n64-1996",
    "platform": "Nintendo 64",
    "score": 9,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "K-1 The Arena Fighters",
    "url": "/games/k-1-the-arena-fighters/ps-2070",
    "platform": "PlayStation",
    "score": 4.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "The Incredible Hulk: The Pantheon Saga",
    "url": "/games/the-incredible-hulk-the-pantheon-saga/ps-570",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Duke Nukem: Total Meltdown",
    "url": "/games/duke-nukem-total-meltdown/ps-2194",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Bomberman 64",
    "url": "/games/bomberman-64/n64-1932",
    "platform": "Nintendo 64",
    "score": 7.6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Vs.",
    "url": "/games/vs/ps-2130",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "AeroFighters Assault",
    "url": "/games/aerofighters-assault/n64-1918",
    "platform": "Nintendo 64",
    "score": 5,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Ghost in the Shell",
    "url": "/games/ghost-in-the-shell/ps-619",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Arcade's Greatest Hits: The Midway Collection 2",
    "url": "/games/arcades-greatest-hits-the-midway-collection-2/ps-2208",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Namco Museum Vol. 5",
    "url": "/games/namco-museum-vol-5/ps-2090",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action, Compilation",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Tomb Raider II Starring Lara Croft",
    "url": "/games/tomb-raider-2-starring-lara-croft/ps-2128",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Diddy Kong Racing",
    "url": "/games/diddy-kong-racing/n64-2146",
    "platform": "Nintendo 64",
    "score": 8.4,
    "genre": "Racing, Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "G-Police",
    "url": "/games/g-police/ps-2160",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Clock Tower",
    "url": "/games/clock-tower-14279453/ps-2032",
    "platform": "PlayStation",
    "score": 5.5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "CART World Series",
    "url": "/games/cart-world-series/ps-2163",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Bravo Air Race",
    "url": "/games/bravo-air-race/ps-2026",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "WCW vs. The World",
    "url": "/games/wcw-vs-the-world/ps-2131",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Mace: The Dark Age",
    "url": "/games/mace-the-dark-age/n64-1906",
    "platform": "Nintendo 64",
    "score": 7.1,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Top Gear Rally",
    "url": "/games/boss-rally/n64-417",
    "platform": "Nintendo 64",
    "score": 8.4,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "NBA ShootOut '98",
    "url": "/games/nba-shootout-98/ps-2267",
    "platform": "PlayStation",
    "score": 8.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Yoshi's Story",
    "url": "/games/yoshis-story/n64-563",
    "platform": "Nintendo 64",
    "score": 7,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Klonoa: Door to Phantomile",
    "url": "/games/klonoa/ps-2227",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Ray Tracers",
    "url": "/games/ray-tracers/ps-2107",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Triple Play '99",
    "url": "/games/triple-play-99/ps-2263",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Bloody Roar",
    "url": "/games/bloody-roar/ps-2222",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "X-Men: Children of the Atom",
    "url": "/games/x-men-children-of-the-atom/ps-2331",
    "platform": "PlayStation",
    "score": 3.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "SimCity 2000",
    "url": "/games/simcity-2000/n64-1950",
    "platform": "Nintendo 64",
    "score": 3.5,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Extreme-G",
    "url": "/games/extreme-g/n64-1973",
    "platform": "Nintendo 64",
    "score": 7.9,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "NFL Quarterback Club '98",
    "url": "/games/nfl-quarterback-club-98/n64-1921",
    "platform": "Nintendo 64",
    "score": 7.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Final Fantasy Tactics",
    "url": "/games/final-fantasy-tactics/ps-26",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Strategy, RPG",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Monopoly [1998]",
    "url": "/games/monopoly-1998/ps-2280",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Board",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Auto Destruct",
    "url": "/games/auto-destruct/ps-2177",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Resident Evil 2 [1998]",
    "url": "/games/resident-evil-2/ps-504",
    "platform": "PlayStation",
    "score": 9.3,
    "genre": "Action, Adventure",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Riven: The Sequel to Myst",
    "url": "/games/riven/ps-2218",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "WCW Nitro",
    "url": "/games/wcw-nitro/ps-2187",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Beast Wars: Transformers",
    "url": "/games/beast-wars-transformers-805694/ps-2270",
    "platform": "PlayStation",
    "score": 2.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Red Asphalt",
    "url": "/games/red-asphalt/ps-4",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Micro Machines V3",
    "url": "/games/micro-machines-64-turbo/ps-2220",
    "platform": "PlayStation",
    "score": 8.7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "BallBlazer Champions",
    "url": "/games/ballblazer-champions/ps-2021",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Fantastic Four",
    "url": "/games/fantastic-four/ps-2051",
    "platform": "PlayStation",
    "score": 1,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "FIFA Road to World Cup 98",
    "url": "/games/fifa-road-to-world-cup-98/ps-2050",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "NCAA GameBreaker '98",
    "url": "/games/ncaa-gamebreaker-98/ps-2213",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "MDK",
    "url": "/games/mdk/ps-2076",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "NBA Fastbreak '98",
    "url": "/games/nba-fastbreak-98-142150/ps-13735",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Star Wars: Masters of Teras Kasi",
    "url": "/games/star-wars-masters-of-teras-kasi/ps-2118",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Courier Crisis",
    "url": "/games/courier-crisis/ps-2036",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Monster Rancher",
    "url": "/games/monster-rancher/ps-2180",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Castlevania: Symphony of the Night",
    "url": "/games/castlevania-symphony-of-the-night/ps-336",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Action, Adventure",
    "editors_choice": "Y",
    "release_year": 1997
  },
  {
    "title": "Mischief Makers",
    "url": "/games/mischief-makers/n64-1917",
    "platform": "Nintendo 64",
    "score": 6.2,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Croc: Legend of the Gobbos",
    "url": "/games/croc-legend-of-the-gobbos/ps-2039",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Formula 1: Championship Edition",
    "url": "/games/formula-1-championship-edition/ps-2056",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Mortal Kombat Mythologies: Sub-Zero",
    "url": "/games/mortal-kombat-mythologies-sub-zero/ps-2084",
    "platform": "PlayStation",
    "score": 3.5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Mega Man X4",
    "url": "/games/mega-man-x4/ps-2083",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "PGA Tour '98",
    "url": "/games/pga-tour-98/ps-2162",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Resident Evil: Director's Cut",
    "url": "/games/resident-evil-directors-cut/ps-2112",
    "platform": "PlayStation",
    "score": 8.9,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Marvel Super Heroes",
    "url": "/games/marvel-super-heroes/ps-160",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "NHL Breakaway '98",
    "url": "/games/nhl-breakaway-98/n64-1919",
    "platform": "Nintendo 64",
    "score": 7.4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Wayne Gretzky's 3D Hockey '98",
    "url": "/games/wayne-gretzkys-3d-hockey-98/n64-2169",
    "platform": "Nintendo 64",
    "score": 5.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Alundra",
    "url": "/games/alundra/ps-2018",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Action, RPG",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Robotron 64",
    "url": "/games/robotron-64/n64-1937",
    "platform": "Nintendo 64",
    "score": 6.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Puyo Puyo Sun64",
    "url": "/games/puyo-puyo-sun/n64-2245",
    "platform": "Nintendo 64",
    "score": 7.2,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "FIFA Road to World Cup 98",
    "url": "/games/fifa-road-to-world-cup-98/n64-2246",
    "platform": "Nintendo 64",
    "score": 7.7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Street Fighter Collection",
    "url": "/games/street-fighter-collection/ps-2121",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Fighting, Compilation",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Chameleon Twist",
    "url": "/games/chameleon-twist/n64-1938",
    "platform": "Nintendo 64",
    "score": 6.5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "One",
    "url": "/games/one-66131/ps-2096",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Parappa The Rapper",
    "url": "/games/parappa-the-rapper/ps-490",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Music",
    "editors_choice": "Y",
    "release_year": 1997
  },
  {
    "title": "Critical Depth",
    "url": "/games/critical-depth/ps-2038",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Intelligent Qube",
    "url": "/games/intelligent-qube/ps-2199",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Car and Driver Presents Grand Tour Racing 98",
    "url": "/games/car-and-driver-presents-grand-tour-racing-98/ps-2063",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1997
  },
  {
    "title": "Jersey Devil",
    "url": "/games/jersey-devil/ps-2067",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Wetrix",
    "url": "/games/wetrix/n64-2139",
    "platform": "Nintendo 64",
    "score": 8.4,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Soviet Strike",
    "url": "/games/soviet-strike/ps-525",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "X-Men vs. Street Fighter",
    "url": "/games/x-men-vs-street-fighter/ps-39",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Quest 64",
    "url": "/games/quest-64-164875/n64-1995",
    "platform": "Nintendo 64",
    "score": 5.9,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Road Rash 3D",
    "url": "/games/road-rash-3d/ps-2284",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Vigilante 8",
    "url": "/games/vigilante-8/ps-2210",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Forsaken 64",
    "url": "/games/forsaken/n64-1988",
    "platform": "Nintendo 64",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Major League Baseball Featuring Ken Griffey Jr.",
    "url": "/games/major-league-baseball-featuring-ken-griffey-jr/n64-421",
    "platform": "Nintendo 64",
    "score": 7.7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "All-Star Baseball '99",
    "url": "/games/all-star-baseball-99/n64-2275",
    "platform": "Nintendo 64",
    "score": 8.2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Bust-A-Move 2 Arcade Edition",
    "url": "/games/bust-a-move-2-arcade-edition/n64-3606",
    "platform": "Nintendo 64",
    "score": 8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Aero Gauge",
    "url": "/games/aero-gauge/n64-2006",
    "platform": "Nintendo 64",
    "score": 5.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Bio F.R.E.A.K.S.",
    "url": "/games/bio-freaks/ps-2318",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Bio F.R.E.A.K.S.",
    "url": "/games/bio-freaks/n64-1924",
    "platform": "Nintendo 64",
    "score": 6.4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "World Cup 98",
    "url": "/games/world-cup-98/n64-3533",
    "platform": "Nintendo 64",
    "score": 8.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Breath of Fire III",
    "url": "/games/breath-of-fire-iii/ps-448",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Hot Shots Golf",
    "url": "/games/hot-shots-golf/ps-2273",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Sports, Action",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Kobe Bryant in NBA Courtside",
    "url": "/games/kobe-bryant-in-nba-courtside/n64-2266",
    "platform": "Nintendo 64",
    "score": 7.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Mystical Ninja Starring Goemon",
    "url": "/games/mystical-ninja-starring-goemon-949069/n64-608",
    "platform": "Nintendo 64",
    "score": 7.6,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Theme Hospital",
    "url": "/games/theme-hospital/ps-3747",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "MLB '99",
    "url": "/games/mlb-99/ps-3748",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Blasto",
    "url": "/games/blasto/ps-2023",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Newman Haas Racing",
    "url": "/games/newman-haas-racing/ps-2216",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Point Blank",
    "url": "/games/point-blank/ps-2102",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Deathtrap Dungeon",
    "url": "/games/deathtrap-dungeon/ps-2042",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "SWAT 2",
    "url": "/games/swat-2/pc-4024",
    "platform": "PC",
    "score": 7,
    "genre": "Action, Simulation",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Batman & Robin",
    "url": "/games/batman-robin/ps-2274",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "SEGA Touring Car Championship",
    "url": "/games/sega-touring-car-championship/pc-3661",
    "platform": "PC",
    "score": 5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Fox Sports Golf '99",
    "url": "/games/fox-sports-golf-99/pc-3881",
    "platform": "PC",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Army Men",
    "url": "/games/army-men/pc-3782",
    "platform": "PC",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Revenge of Arcade",
    "url": "/games/revenge-of-arcade/pc-3980",
    "platform": "PC",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Dominion:  Storm Over Gift 3",
    "url": "/games/dominion-storm-over-gift-3/pc-3742",
    "platform": "PC",
    "score": 4,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Addiction Pinball",
    "url": "/games/addiction-pinball/pc-3831",
    "platform": "PC",
    "score": 8,
    "genre": "Pinball",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "F-1 World Grand Prix",
    "url": "/games/f-1-world-grand-prix/n64-3535",
    "platform": "Nintendo 64",
    "score": 8.3,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Mission: Impossible",
    "url": "/games/mission-impossible-808345/n64-29",
    "platform": "Nintendo 64",
    "score": 6.6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "World Cup 98",
    "url": "/games/world-cup-98/ps-3532",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NFL Xtreme",
    "url": "/games/nfl-xtreme/ps-3528",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Granstream Saga",
    "url": "/games/granstream-saga/ps-2305",
    "platform": "PlayStation",
    "score": 6,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Forsaken",
    "url": "/games/forsaken/ps-2290",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Grand Theft Auto",
    "url": "/games/grand-theft-auto-1/ps-151",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Crime Killer",
    "url": "/games/crime-killer/ps-2173",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Off-Road Challenge",
    "url": "/games/off-road-challenge/n64-2201",
    "platform": "Nintendo 64",
    "score": 2.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Banjo-Kazooie",
    "url": "/games/banjo-kazooie/n64-1922",
    "platform": "Nintendo 64",
    "score": 9.6,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Mortal Kombat 4",
    "url": "/games/mortal-kombat-4/n64-1912",
    "platform": "Nintendo 64",
    "score": 8.8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Mortal Kombat 4",
    "url": "/games/mortal-kombat-4/ps-3723",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Jeremy McGrath Supercross '98",
    "url": "/games/jeremy-mcgrath-supercross-98/ps-3915",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "N2O: Nitrous Oxide",
    "url": "/games/n2o-nitrous-oxide/ps-2328",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Chopper Attack",
    "url": "/games/chopper-attack-140530/n64-3750",
    "platform": "Nintendo 64",
    "score": 5.6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "C: The Contra Adventure",
    "url": "/games/c-the-contra-adventure/ps-3773",
    "platform": "PlayStation",
    "score": 1,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Dune 2000",
    "url": "/games/dune-2000/pc-2330",
    "platform": "PC",
    "score": 5.3,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Future Cop: L.A.P.D.",
    "url": "/games/future-cop-lapd/ps-3923",
    "platform": "PlayStation",
    "score": 8.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "M.A.X. 2",
    "url": "/games/max-2/pc-3829",
    "platform": "PC",
    "score": 3.7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Mega Man Legends",
    "url": "/games/mega-man-legends/ps-2082",
    "platform": "PlayStation",
    "score": 8.4,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Parasite Eve",
    "url": "/games/parasite-eve/ps-2228",
    "platform": "PlayStation",
    "score": 7.4,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "MechCommander",
    "url": "/games/mechcommander/pc-3835",
    "platform": "PC",
    "score": 7.8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Pro Bass Fishing",
    "url": "/games/pro-bass-fishing/pc-4031",
    "platform": "PC",
    "score": 2.9,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "WarGames",
    "url": "/games/wargames/pc-3963",
    "platform": "PC",
    "score": 7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Triple Play '99",
    "url": "/games/triple-play-99/pc-3137",
    "platform": "PC",
    "score": 5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "High Heat Baseball 1999",
    "url": "/games/high-heat-baseball-1999/pc-3858",
    "platform": "PC",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Flesh Feast",
    "url": "/games/flesh-feast/pc-3636",
    "platform": "PC",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Grim Fandango",
    "url": "/games/grim-fandango/pc-3100",
    "platform": "PC",
    "score": 9.4,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Rally Cross 2",
    "url": "/games/rally-cross-2/ps-10396",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Return Fire II",
    "url": "/games/return-fire-ii/pc-9953",
    "platform": "PC",
    "score": 7.8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Hedz",
    "url": "/games/hedz/pc-10460",
    "platform": "PC",
    "score": 6.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Mike Piazza's StrikeZone",
    "url": "/games/mike-piazzas-strikezone/n64-2276",
    "platform": "Nintendo 64",
    "score": 3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Virtual Chess 64",
    "url": "/games/virtual-chess-64/n64-2317",
    "platform": "Nintendo 64",
    "score": 7.7,
    "genre": "Board",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Metal Gear Solid",
    "url": "/games/metal-gear-solid/ps-569",
    "platform": "PlayStation",
    "score": 9.8,
    "genre": "Action, Adventure",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "NASCAR 99",
    "url": "/games/nascar-99/n64-3968",
    "platform": "Nintendo 64",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Kagero: Deception II",
    "url": "/games/kagero-deception-ii/ps-3716",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Red Jack: Revenge of the Brethren",
    "url": "/games/red-jack-revenge-of-the-brethren/pc-10369",
    "platform": "PC",
    "score": 7,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Xenogears",
    "url": "/games/xenogears/ps-2230",
    "platform": "PlayStation",
    "score": 9.5,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Deadly Arts",
    "url": "/games/deadly-arts/n64-2172",
    "platform": "Nintendo 64",
    "score": 3.2,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "GT 64 Championship Edition",
    "url": "/games/gt-64-championship-edition/n64-3749",
    "platform": "Nintendo 64",
    "score": 3.9,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NFL Blitz [1998]",
    "url": "/games/nfl-blitz-1997/n64-2200",
    "platform": "Nintendo 64",
    "score": 9.1,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NFL Blitz [1998]",
    "url": "/games/nfl-blitz-1997/ps-2285",
    "platform": "PlayStation",
    "score": 9.4,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NCAA Football '99",
    "url": "/games/ncaa-football-99/pc-10182",
    "platform": "PC",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Gex 64: Enter the Gecko",
    "url": "/games/gex-64-enter-the-gecko/n64-2291",
    "platform": "Nintendo 64",
    "score": 5.7,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Incoming",
    "url": "/games/incoming/pc-2282",
    "platform": "PC",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Deathtrap Dungeon",
    "url": "/games/deathtrap-dungeon/pc-4026",
    "platform": "PC",
    "score": 4.7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "HardBall 6",
    "url": "/games/hardball-99/pc-3752",
    "platform": "PC",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Forsaken",
    "url": "/games/forsaken/pc-3104",
    "platform": "PC",
    "score": 8.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Urban Assault",
    "url": "/games/urban-assault/pc-3139",
    "platform": "PC",
    "score": 6.8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Warhammer: Dark Omen",
    "url": "/games/warhammer-dark-omen/pc-3246",
    "platform": "PC",
    "score": 7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Panzer Commander",
    "url": "/games/panzer-commander/pc-3691",
    "platform": "PC",
    "score": 7,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Bio F.R.E.A.K.S.",
    "url": "/games/bio-freaks/pc-4032",
    "platform": "PC",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Icarus: Sanctuary of the Gods",
    "url": "/games/icarus-sanctuary-of-the-gods/pc-4028",
    "platform": "PC",
    "score": 4,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Rosco McQueen: Firefighter Extreme",
    "url": "/games/rosco-mcqueen-firefighter-extreme/ps-10337",
    "platform": "PlayStation",
    "score": 4.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Cool Boarders 3",
    "url": "/games/cool-boarders-3/ps-10196",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Trespasser",
    "url": "/games/trespasser/pc-4037",
    "platform": "PC",
    "score": 4.7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NCAA GameBreaker '99",
    "url": "/games/ncaa-gamebreaker-99/ps-10399",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Extreme PaintBrawl",
    "url": "/games/extreme-paintbrawl/pc-10455",
    "platform": "PC",
    "score": 0.7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Bushido Blade 2",
    "url": "/games/bushido-blade-2/ps-2333",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Front Office Football",
    "url": "/games/front-office-football/pc-10432",
    "platform": "PC",
    "score": 8,
    "genre": "Sports, Simulation",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NHL '99",
    "url": "/games/ea-sports-mania-pack/pc-3987",
    "platform": "PC",
    "score": 9,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "F-Zero X",
    "url": "/games/f-zero-x/n64-418",
    "platform": "Nintendo 64",
    "score": 9.1,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Armored Core: Project Phantasma",
    "url": "/games/armored-core-project-phantasma/ps-9658",
    "platform": "PlayStation",
    "score": 7.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Quake II Mission Pack: Ground Zero",
    "url": "/games/quake-ii-mission-pack-ground-zero/pc-3935",
    "platform": "PC",
    "score": 7.5,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Star Trek: The Next Generation: Klingon Honor Guard",
    "url": "/games/star-trek-the-next-generation-klingon-honor-guard/pc-3112",
    "platform": "PC",
    "score": 7,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Team Losi RC Racer",
    "url": "/games/team-losi-rc-racer/ps-2327",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Duke Nukem: Time to Kill",
    "url": "/games/duke-nukem-time-to-kill/ps-2314",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Knights and Merchants: The Shattered Kingdom",
    "url": "/games/knights-and-merchants-the-shattered-kingdom/pc-3861",
    "platform": "PC",
    "score": 5.9,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Iggy's Reckin' Balls",
    "url": "/games/iggys-reckin-balls/n64-2272",
    "platform": "Nintendo 64",
    "score": 6.9,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Independence War",
    "url": "/games/independence-war/pc-3110",
    "platform": "PC",
    "score": 8,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Spyro the Dragon",
    "url": "/games/spyro-the-dragon/ps-3920",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Tom Clancy's Rainbow Six",
    "url": "/games/tom-clancys-rainbow-six/pc-3836",
    "platform": "PC",
    "score": 9.4,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Command & Conquer: Red Alert Retaliation",
    "url": "/games/command-and-conquer-red-alert-retaliation/ps-3785",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Heart of Darkness",
    "url": "/games/heart-of-darkness/ps-4033",
    "platform": "PlayStation",
    "score": 7.8,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NFL GameDay 99",
    "url": "/games/nfl-gameday-99/pc-10158",
    "platform": "PC",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Pro-Pinball: Timeshock!",
    "url": "/games/pro-pinball-timeshock/ps-10153",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Pinball",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Motocross Madness [1998]",
    "url": "/games/motocross-madness/pc-3569",
    "platform": "PC",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Sanitarium",
    "url": "/games/sanitarium/pc-3424",
    "platform": "PC",
    "score": 7,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Peter Jacobsen's Golden Tee Golf",
    "url": "/games/peter-jacobsens-golden-tee-golf/pc-3106",
    "platform": "PC",
    "score": 7.2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Ultim@te Race Pro",
    "url": "/games/ultimte-race-pro/pc-3630",
    "platform": "PC",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Nam",
    "url": "/games/nam/pc-4020",
    "platform": "PC",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Unreal",
    "url": "/games/unreal/pc-2189",
    "platform": "PC",
    "score": 9,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Final Fantasy VII",
    "url": "/games/final-fantasy-vii/pc-2301",
    "platform": "PC",
    "score": 8.2,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Game, Net & Match",
    "url": "/games/game-net-match/pc-3955",
    "platform": "PC",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "The Operational Art of War, Vol. 1",
    "url": "/games/the-operational-art-of-war-vol-1/pc-4021",
    "platform": "PC",
    "score": 9,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Might and Magic VI: The Mandate of Heaven",
    "url": "/games/might-and-magic-vi-the-mandate-of-heaven/pc-3546",
    "platform": "PC",
    "score": 9,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Test Drive Off-Road 2",
    "url": "/games/test-drive-off-road-2/ps-10309",
    "platform": "PlayStation",
    "score": 5.8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Railroad Tycoon II",
    "url": "/games/railroad-tycoon-2-platinum-edition/pc-10174",
    "platform": "PC",
    "score": 8.9,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "WCW/NWO Revenge",
    "url": "/games/wcwnwo-revenge/n64-3875",
    "platform": "Nintendo 64",
    "score": 8,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Rival Schools: United by Fate",
    "url": "/games/rival-schools-united-by-fate/ps-3739",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Space Station Silicon Valley",
    "url": "/games/space-station-silicon-valley/n64-1946",
    "platform": "Nintendo 64",
    "score": 9.5,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Cardinal Syn",
    "url": "/games/cardinal-syn/ps-3965",
    "platform": "PlayStation",
    "score": 5.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NHL '99",
    "url": "/games/ea-sports-mania-pack/n64-3970",
    "platform": "Nintendo 64",
    "score": 8.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Need for Speed III: Hot Pursuit",
    "url": "/games/need-for-speed-iii-hot-pursuit/pc-3900",
    "platform": "PC",
    "score": 7.3,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Brunswick Circuit Pro Bowling",
    "url": "/games/brunswick-circuit-pro-bowling/pc-10176",
    "platform": "PC",
    "score": 6.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Redline Racer",
    "url": "/games/redline-racer/pc-3125",
    "platform": "PC",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Ninja: Shadow of Darkness",
    "url": "/games/ninja-shadow-of-darkness/ps-2092",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Caesar III",
    "url": "/games/caesar-iii/pc-10142",
    "platform": "PC",
    "score": 8.7,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Cruis'n World",
    "url": "/games/cruisn-world/n64-73",
    "platform": "Nintendo 64",
    "score": 6.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Running Wild",
    "url": "/games/running-wild/ps-2113",
    "platform": "PlayStation",
    "score": 6.1,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Test Drive 5",
    "url": "/games/test-drive-5/ps-3928",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Bottom of the 9th '99",
    "url": "/games/bottom-of-the-9th-99/ps-10146",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Warlords III: Darklords Rising",
    "url": "/games/warlords-iii-darklords-rising/pc-3942",
    "platform": "PC",
    "score": 8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Commandos: Behind Enemy Lines",
    "url": "/games/commandos-behind-enemy-lines/pc-3853",
    "platform": "PC",
    "score": 8.2,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Leisure Suit Larry's Casino",
    "url": "/games/leisure-suit-larrys-casino/pc-3884",
    "platform": "PC",
    "score": 6.2,
    "genre": "Casino",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Castrol Honda Superbike World Champions",
    "url": "/games/castrol-honda-superbike-world-champions-142679/pc-3595",
    "platform": "PC",
    "score": 7.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "WWF Warzone",
    "url": "/games/wwf-warzone/n64-1980",
    "platform": "Nintendo 64",
    "score": 8.5,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Pro Pilot 99",
    "url": "/games/pro-pilot-99/pc-4019",
    "platform": "PC",
    "score": 5.8,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Body Harvest",
    "url": "/games/body-harvest/n64-405",
    "platform": "Nintendo 64",
    "score": 8.4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Madden NFL '99",
    "url": "/games/madden-football/pc-9982",
    "platform": "PC",
    "score": 8.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "MediEvil",
    "url": "/games/medievil/ps-3950",
    "platform": "PlayStation",
    "score": 7.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Lemmings and Oh No! More Lemmings",
    "url": "/games/lemmings/ps-10302",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Axis & Allies [1998]",
    "url": "/games/axis-allies-1998/pc-9954",
    "platform": "PC",
    "score": 8.2,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "The Game of Life [1998]",
    "url": "/games/the-game-of-life-1998/pc-10306",
    "platform": "PC",
    "score": 7.2,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Rogue Trip: Vacation 2012",
    "url": "/games/rogue-trip-vacation-2012/ps-3768",
    "platform": "PlayStation",
    "score": 7.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "S.C.A.R.S.",
    "url": "/games/scars-809360/ps-9925",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Bomberman World",
    "url": "/games/bomberman-world/ps-2297",
    "platform": "PlayStation",
    "score": 7.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NFL Blitz [1998]",
    "url": "/games/nfl-blitz-1997/pc-2286",
    "platform": "PC",
    "score": 8.5,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Dragon Seeds",
    "url": "/games/dragon-seeds/ps-10303",
    "platform": "PlayStation",
    "score": 6.9,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Jane's IAF -- Israeli Air Force",
    "url": "/games/janes-2-pack-usnf-97-iaf-israeli-air-force/pc-10178",
    "platform": "PC",
    "score": 7,
    "genre": "Flight, Simulation",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Brunswick Circuit Pro Bowling",
    "url": "/games/brunswick-circuit-pro-bowling/ps-3791",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "iF/A-18 Carrier Strike Fighter",
    "url": "/games/ifa-18-carrier-strike-fighter/pc-9946",
    "platform": "PC",
    "score": 6.8,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "The Fifth Element",
    "url": "/games/nyr-new-york-race/ps-3936",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Get Medieval",
    "url": "/games/get-medieval/pc-3981",
    "platform": "PC",
    "score": 6.1,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Sensible Soccer '98",
    "url": "/games/sensible-soccer-98/pc-3959",
    "platform": "PC",
    "score": 4.3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Wild 9",
    "url": "/games/wild-9/ps-1869",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "TOCA Championship Racing",
    "url": "/games/toca-championship-racing/pc-3381",
    "platform": "PC",
    "score": 8.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NHL FaceOff '99",
    "url": "/games/nhl-faceoff-99/ps-10240",
    "platform": "PlayStation",
    "score": 8.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NASCAR 99",
    "url": "/games/nascar-99/ps-3841",
    "platform": "PlayStation",
    "score": 7.1,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Pool Hustler",
    "url": "/games/pool-hustler/ps-10238",
    "platform": "PlayStation",
    "score": 6.7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Spearhead",
    "url": "/games/spearhead/pc-3132",
    "platform": "PC",
    "score": 7,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Activision Classics",
    "url": "/games/activision-classics/ps-4023",
    "platform": "PlayStation",
    "score": 2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Heart of Darkness",
    "url": "/games/heart-of-darkness/pc-2254",
    "platform": "PC",
    "score": 5.8,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NHL '99",
    "url": "/games/ea-sports-mania-pack/ps-10157",
    "platform": "PlayStation",
    "score": 8.9,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Starship Titanic",
    "url": "/games/starship-titanic/pc-3133",
    "platform": "PC",
    "score": 4.9,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Tiger Woods '99",
    "url": "/games/pga-tour-golf-the-monterey-courses/pc-4006",
    "platform": "PC",
    "score": 7.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "X-COM: Interceptor",
    "url": "/games/x-com-interceptor/pc-3144",
    "platform": "PC",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Super B-Daman Battle Phoenix 64",
    "url": "/games/super-b-daman-battle-phoenix-64/n64-4000",
    "platform": "Nintendo 64",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Pokemon Stadium [Japanese Version]",
    "url": "/games/pokemon-stadium-jp-version/n64-3997",
    "platform": "Nintendo 64",
    "score": 5,
    "genre": "Battle",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Waialae Country Club: True Golf Classics",
    "url": "/games/waialae-country-club-true-golf-classics/n64-3825",
    "platform": "Nintendo 64",
    "score": 5.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NCAA Football '99",
    "url": "/games/ncaa-football-99-877941/ps-3843",
    "platform": "PlayStation",
    "score": 7.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NFL GameDay 99",
    "url": "/games/nfl-gameday-99/ps-4016",
    "platform": "PlayStation",
    "score": 9.3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "WWF Warzone",
    "url": "/games/wwf-warzone/ps-3730",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Devil Dice",
    "url": "/games/devil-dice/ps-3896",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Puzzle",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Trap Gunner",
    "url": "/games/trap-gunner/ps-3864",
    "platform": "PlayStation",
    "score": 8.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Deep Sea Trophy Fishing",
    "url": "/games/deep-sea-trophy-fishing/pc-10224",
    "platform": "PC",
    "score": 1.8,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Unholy War",
    "url": "/games/unholy-war/ps-3911",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Madden NFL '99",
    "url": "/games/madden-football/n64-3844",
    "platform": "Nintendo 64",
    "score": 8.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Industry Giant [1998]",
    "url": "/games/industry-giant-1998/pc-3745",
    "platform": "PC",
    "score": 5,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Madden NFL '99",
    "url": "/games/madden-football/ps-3840",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Turbo Prop Racing",
    "url": "/games/turbo-prop-racing/ps-3962",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Tomba!",
    "url": "/games/tomba/ps-2260",
    "platform": "PlayStation",
    "score": 8.7,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Elemental Gearbolt",
    "url": "/games/elemental-gearbolt/ps-2244",
    "platform": "PlayStation",
    "score": 8.3,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Azure Dreams",
    "url": "/games/azure-dreams/ps-2224",
    "platform": "PlayStation",
    "score": 7,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Spice World",
    "url": "/games/spice-world/ps-3954",
    "platform": "PlayStation",
    "score": 2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Gex: Enter the Gecko",
    "url": "/games/gex-64-enter-the-gecko/ps-2061",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Need for Speed III: Hot Pursuit",
    "url": "/games/need-for-speed-iii-hot-pursuit/ps-2231",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Moto Racer 2",
    "url": "/games/moto-racer-2/ps-3898",
    "platform": "PlayStation",
    "score": 8.7,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Circuit Breakers [1998]",
    "url": "/games/circuit-breakers/ps-3943",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Tenchu: Stealth Assassins",
    "url": "/games/tenchu-shinobi-hyakusen/ps-2332",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "G Darius",
    "url": "/games/g-darius/ps-3895",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Bomberman Hero",
    "url": "/games/bomberman-hero/n64-3781",
    "platform": "Nintendo 64",
    "score": 6,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Einhander",
    "url": "/games/einhander/ps-2048",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Gran Turismo [1998]",
    "url": "/games/gran-turismo-1998/ps-2226",
    "platform": "PlayStation",
    "score": 9.5,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Tekken 3",
    "url": "/games/tekken-3/ps-2294",
    "platform": "PlayStation",
    "score": 9.3,
    "genre": "Fighting",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Vangers",
    "url": "/games/vangers/pc-3628",
    "platform": "PC",
    "score": 6.7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Mortal Kombat 4",
    "url": "/games/mortal-kombat-4/pc-3940",
    "platform": "PC",
    "score": 8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Twisted Edge Extreme Snowboading",
    "url": "/games/twisted-edge-extreme-snowboading/n64-2007",
    "platform": "Nintendo 64",
    "score": 6.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Fallout 2",
    "url": "/games/fallout-2/pc-3783",
    "platform": "PC",
    "score": 8.9,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Asteroids",
    "url": "/games/asteroids/ps-10365",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Twisted Metal 3",
    "url": "/games/twisted-metal-3/ps-10296",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Rush 2: Extreme Racing USA",
    "url": "/games/rush-2-extreme-racing-usa/n64-3852",
    "platform": "Nintendo 64",
    "score": 8.9,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Small Soldiers",
    "url": "/games/small-soldiers/ps-3969",
    "platform": "PlayStation",
    "score": 7.2,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Knife Edge: Nose Gunner",
    "url": "/games/knife-edge-nose-gunner/n64-3930",
    "platform": "Nintendo 64",
    "score": 4.6,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "X Games Pro Boarder",
    "url": "/games/x-games-pro-boarder/ps-10376",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Brave Fencer Musashi",
    "url": "/games/brave-fencer-musashi/ps-3951",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Guilty Gear",
    "url": "/games/guilty-gear/ps-4034",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NFL Quarterback Club '99",
    "url": "/games/nfl-quarterback-club-99/n64-3796",
    "platform": "Nintendo 64",
    "score": 8.4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NBA Live '99",
    "url": "/games/nba-live-99/pc-10147",
    "platform": "PC",
    "score": 8.6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Dual Heroes",
    "url": "/games/dual-heroes/n64-1964",
    "platform": "Nintendo 64",
    "score": 2.8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Glover",
    "url": "/games/glover/n64-3899",
    "platform": "Nintendo 64",
    "score": 8.3,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NBA Live '99",
    "url": "/games/nba-live-99/ps-10154",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Delta Force",
    "url": "/games/delta-force-908388/pc-10223",
    "platform": "PC",
    "score": 8.7,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Shogo: Mobile Armor Division",
    "url": "/games/shogo-mobile-armor-division/pc-3561",
    "platform": "PC",
    "score": 9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "NBA Live '99",
    "url": "/games/nba-live-99/n64-3918",
    "platform": "Nintendo 64",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Colony Wars: Vengeance",
    "url": "/games/colony-wars-vengeance/ps-2323",
    "platform": "PlayStation",
    "score": 9.5,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "VR Baseball 2000",
    "url": "/games/vr-baseball-2000/pc-3834",
    "platform": "PC",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Rage of Mages",
    "url": "/games/rage-of-mages/pc-10195",
    "platform": "PC",
    "score": 4.6,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "International Superstar Soccer '98",
    "url": "/games/international-superstar-soccer-98/n64-3848",
    "platform": "Nintendo 64",
    "score": 9.1,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Crash Bandicoot: Warped",
    "url": "/games/crash-bandicoot-warped/ps-3919",
    "platform": "PlayStation",
    "score": 9.1,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "WipEout 64",
    "url": "/games/wipeout-64/n64-3872",
    "platform": "Nintendo 64",
    "score": 9.1,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Lucky Luke",
    "url": "/games/lucky-luke/ps-10339",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Glover",
    "url": "/games/glover/pc-10599",
    "platform": "PC",
    "score": 8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Thief: The Dark Project",
    "url": "/games/thief-gold/pc-3476",
    "platform": "PC",
    "score": 8.9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "FIFA '99",
    "url": "/games/fifa-99/ps-10166",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Turok 2: Seeds of Evil",
    "url": "/games/turok-2-seeds-of-evil/n64-1969",
    "platform": "Nintendo 64",
    "score": 9,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Tomb Raider III: Adventures of Lara Croft",
    "url": "/games/tomb-raider-3-adventures-of-lara-croft/pc-10338",
    "platform": "PC",
    "score": 7.7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Kensei: Sacred Fist",
    "url": "/games/kensei-sacred-fist-139017/ps-10437",
    "platform": "PlayStation",
    "score": 5.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "The Elder Scrolls Adventures: Redguard",
    "url": "/games/the-elder-scrolls-adventures-redguard/pc-10576",
    "platform": "PC",
    "score": 7,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Space Bunnies Must Die",
    "url": "/games/space-bunnies-must-die/pc-3131",
    "platform": "PC",
    "score": 6.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Star Wars: Rogue Squadron",
    "url": "/games/star-wars-rogue-squadron/n64-3964",
    "platform": "Nintendo 64",
    "score": 8.8,
    "genre": "Flight, Action",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Roll Away",
    "url": "/games/roll-away/ps-3993",
    "platform": "PlayStation",
    "score": 8.9,
    "genre": "Puzzle, Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Jeopardy! [1998]",
    "url": "/games/jeopardy-1998-807664/ps-10380",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "O.D.T.: Escape... ...Or Die Trying",
    "url": "/games/odt-escape-or-die-trying/ps-2329",
    "platform": "PlayStation",
    "score": 5.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Streak: Hoverboard Racing",
    "url": "/games/streak-hoverboard-racing/ps-3767",
    "platform": "PlayStation",
    "score": 4.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NHL Breakaway '99",
    "url": "/games/nhl-breakaway-99/n64-9947",
    "platform": "Nintendo 64",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Milo's Astro Lanes",
    "url": "/games/milos-astro-lanes/n64-2295",
    "platform": "Nintendo 64",
    "score": 6.1,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "FOX Sports College Hoops '99",
    "url": "/games/fox-sports-college-hoops-99/n64-2235",
    "platform": "Nintendo 64",
    "score": 4.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Star Wars: Rogue Squadron 3D",
    "url": "/games/star-wars-rogue-squadron/pc-10583",
    "platform": "PC",
    "score": 8.3,
    "genre": "Flight, Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "S.C.A.R.S",
    "url": "/games/scars/n64-3958",
    "platform": "Nintendo 64",
    "score": 7.9,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Knockout Kings",
    "url": "/games/knockout-kings/ps-3989",
    "platform": "PlayStation",
    "score": 7.3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Motorhead",
    "url": "/games/motorhead/ps-10435",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "No One Can Stop Mr. Domino",
    "url": "/games/no-one-can-stop-mr-domino/ps-10165",
    "platform": "PlayStation",
    "score": 7.8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Rugrats: The Search for Reptar",
    "url": "/games/rugrats-the-search-for-reptar/ps-10340",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Top Gear Overdrive",
    "url": "/games/top-gear-overdrive/n64-3901",
    "platform": "Nintendo 64",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Test Drive 5",
    "url": "/games/test-drive-5/pc-10568",
    "platform": "PC",
    "score": 7.8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Wheel of Fortune",
    "url": "/games/wheel-of-fortune-107470/pc-10570",
    "platform": "PC",
    "score": 6.9,
    "genre": "Trivia",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Buck Bumble",
    "url": "/games/buck-bumble/n64-2304",
    "platform": "Nintendo 64",
    "score": 7.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Oddworld: Abe's Exoddus",
    "url": "/games/oddworld-abes-exoddus/ps-10403",
    "platform": "PlayStation",
    "score": 7.8,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "FIFA '99",
    "url": "/games/fifa-99/pc-10156",
    "platform": "PC",
    "score": 8.7,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Nightmare Creatures",
    "url": "/games/nightmare-creatures/n64-4018",
    "platform": "Nintendo 64",
    "score": 7.4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Half-Life",
    "url": "/games/half-life-1/pc-3107",
    "platform": "PC",
    "score": 9.5,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Heretic II",
    "url": "/games/heretic-ii/pc-3715",
    "platform": "PC",
    "score": 7.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "SiN",
    "url": "/games/sin/pc-3130",
    "platform": "PC",
    "score": 7,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Bust A Groove",
    "url": "/games/bust-a-groove/ps-2308",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Music, Action",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "The Legend of Zelda: Ocarina of Time",
    "url": "/games/the-legend-of-zelda-ocarina-of-time/n64-437",
    "platform": "Nintendo 64",
    "score": 10,
    "genre": "Action, Adventure",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Darkstalkers 3",
    "url": "/games/darkstalkers-3/ps-3949",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Street Fighter Collection 2",
    "url": "/games/street-fighter-collection-2/ps-3863",
    "platform": "PlayStation",
    "score": 8.4,
    "genre": "Fighting, Compilation",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Tiger Woods '99",
    "url": "/games/pga-tour-golf-the-monterey-courses/ps-5469",
    "platform": "PlayStation",
    "score": 7.1,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Kartia",
    "url": "/games/kartia-141842/ps-2256",
    "platform": "PlayStation",
    "score": 8,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Asteroids",
    "url": "/games/asteroids/pc-10495",
    "platform": "PC",
    "score": 6.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Jeopardy 1998",
    "url": "/games/jeopardy-1998-807664/pc-10558",
    "platform": "PC",
    "score": 7.4,
    "genre": "Trivia",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Tomb Raider III: Adventures of Lara Croft",
    "url": "/games/tomb-raider-3-adventures-of-lara-croft/ps-5468",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Assault: Retribution",
    "url": "/games/assault-108436/ps-3925",
    "platform": "PlayStation",
    "score": 5.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Apocalypse",
    "url": "/games/apocalypse/ps-2019",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "A Bug's Life",
    "url": "/games/a-bugs-life/ps-10232",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Blood II: The Chosen",
    "url": "/games/blood-ii-the-chosen/pc-3525",
    "platform": "PC",
    "score": 6.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Extreme-G 2",
    "url": "/games/extreme-g-2/n64-3788",
    "platform": "Nintendo 64",
    "score": 6.9,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Centipede [1999]",
    "url": "/games/centipede-1999/pc-9943",
    "platform": "PC",
    "score": 7.6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Psybadek",
    "url": "/games/psybadek/ps-9938",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Vigilance",
    "url": "/games/vigilance/pc-3141",
    "platform": "PC",
    "score": 5.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Thunder Force V: Perfect System",
    "url": "/games/thunder-force-v-special-pack/ps-3878",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Star Soldier: Vanishing Earth",
    "url": "/games/star-soldier-vanishing-earth/n64-3799",
    "platform": "Nintendo 64",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Sid Meier's Civilization II",
    "url": "/games/sid-meiers-civilization-ii/ps-10640",
    "platform": "PlayStation",
    "score": 8.8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Fatal Abyss",
    "url": "/games/fatal-abyss/pc-3953",
    "platform": "PC",
    "score": 5.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Akuji The Heartless",
    "url": "/games/akuji-the-heartless/ps-3927",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "ruthless.com",
    "url": "/games/ruthlesscom/pc-10831",
    "platform": "PC",
    "score": 5.2,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "FunPack 3D",
    "url": "/games/funpack-3d/pc-11142",
    "platform": "PC",
    "score": 3.7,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Microsoft Pinball Arcade",
    "url": "/games/microsoft-pinball-arcade/pc-11141",
    "platform": "PC",
    "score": 5.2,
    "genre": "Pinball",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "WCW Nitro",
    "url": "/games/wcw-nitro/n64-1979",
    "platform": "Nintendo 64",
    "score": 4.7,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Mario Party",
    "url": "/games/mario-party/n64-10397",
    "platform": "Nintendo 64",
    "score": 7.9,
    "genre": "Party",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Tom Clancy's Rainbow Six Mission Pack: Eagle Watch",
    "url": "/games/tom-clancys-rainbow-six-mission-pack-eagle-watch/pc-11107",
    "platform": "PC",
    "score": 8.6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Destrega",
    "url": "/games/destrega/ps-3838",
    "platform": "PlayStation",
    "score": 5.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "TOCA Championship Racing",
    "url": "/games/toca-championship-racing/ps-3155",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Sierra Sports: Skiing 1999 Edition",
    "url": "/games/sierra-sports-skiing-1999-edition/pc-10874",
    "platform": "PC",
    "score": 2.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Close Combat III: The Russian Front",
    "url": "/games/close-combat-iii-the-russian-front/pc-10799",
    "platform": "PC",
    "score": 9,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Baldur's Gate",
    "url": "/games/baldurs-gate/pc-9942",
    "platform": "PC",
    "score": 9.4,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Moto Racer 2",
    "url": "/games/moto-racer-2/pc-3777",
    "platform": "PC",
    "score": 8.6,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "BattleTanx",
    "url": "/games/battletanx/n64-3924",
    "platform": "Nintendo 64",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Starsiege: Tribes",
    "url": "/games/starsiege-tribes/pc-4005",
    "platform": "PC",
    "score": 9.3,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Invasion From Beyond",
    "url": "/games/invasion-from-beyond/ps-9924",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Magical Tetris Challenge",
    "url": "/games/magical-tetris-adventure-featuring-mickey-mouse/n64-2001",
    "platform": "Nintendo 64",
    "score": 7.8,
    "genre": "Puzzle, Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "ESPN X Games Pro Boarder",
    "url": "/games/espn-x-games-pro-boarder/pc-10789",
    "platform": "PC",
    "score": 7.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Penny Racers",
    "url": "/games/penny-racers-14288452/n64-2325",
    "platform": "Nintendo 64",
    "score": 6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Flying Dragon",
    "url": "/games/flying-dragon/n64-1913",
    "platform": "Nintendo 64",
    "score": 5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Irritating Stick",
    "url": "/games/irritating-stick/ps-10466",
    "platform": "PlayStation",
    "score": 5.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "The Settlers III",
    "url": "/games/the-settlers-iii/pc-3555",
    "platform": "PC",
    "score": 6.9,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "The Game of Life [1998]",
    "url": "/games/the-game-of-life-1998/ps-10381",
    "platform": "PlayStation",
    "score": 4.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Speed Busters: American Highways",
    "url": "/games/speed-busters-american-highways/pc-9945",
    "platform": "PC",
    "score": 7.8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Montezuma's Return",
    "url": "/games/montezumas-return/pc-3120",
    "platform": "PC",
    "score": 5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Snowmobile Racing",
    "url": "/games/snowmobile-racing/pc-10760",
    "platform": "PC",
    "score": 5.1,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NCAA March Madness '99",
    "url": "/games/ncaa-march-madness-99/ps-10749",
    "platform": "PlayStation",
    "score": 7.4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Populous: The Beginning",
    "url": "/games/populous-the-beginning/pc-10294",
    "platform": "PC",
    "score": 8.6,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Test Drive Off-Road 2",
    "url": "/games/test-drive-off-road-2/pc-10221",
    "platform": "PC",
    "score": 4.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NCAA Final Four 99",
    "url": "/games/ncaa-final-four-99/ps-10761",
    "platform": "PlayStation",
    "score": 7.9,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "WCW/NWO Thunder",
    "url": "/games/wcwnwo-thunder/ps-10463",
    "platform": "PlayStation",
    "score": 6.6,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Contender",
    "url": "/games/contender/ps-10523",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Dark Vengeance",
    "url": "/games/dark-vengeance/pc-3097",
    "platform": "PC",
    "score": 6.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "S.C.A.R.S.",
    "url": "/games/scars-809360/pc-3945",
    "platform": "PC",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Animaniacs Ten Pin Alley",
    "url": "/games/animaniacs-ten-pin-alley/ps-10242",
    "platform": "PlayStation",
    "score": 7.1,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "South Park",
    "url": "/games/south-park/n64-10075",
    "platform": "Nintendo 64",
    "score": 6.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Virtual Pool 64",
    "url": "/games/virtual-pool-64/n64-3902",
    "platform": "Nintendo 64",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "West Front",
    "url": "/games/john-tillers-west-front/pc-11028",
    "platform": "PC",
    "score": 7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Pro-Pinball: Big Race USA",
    "url": "/games/pro-pinball-big-race-usa/pc-11193",
    "platform": "PC",
    "score": 7.4,
    "genre": "Pinball",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Beavis and Butt-Head: Bunghole in One",
    "url": "/games/beavis-and-butt-head-bunghole-in-one/pc-10965",
    "platform": "PC",
    "score": 4.4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Oddworld: Abe's Exoddus",
    "url": "/games/oddworld-abes-exoddus/pc-10214",
    "platform": "PC",
    "score": 8.5,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Return to Krondor",
    "url": "/games/return-to-krondor/pc-8009",
    "platform": "PC",
    "score": 7.4,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Castlevania [1999]",
    "url": "/games/castlevania-64/n64-2229",
    "platform": "Nintendo 64",
    "score": 8.2,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Global Domination",
    "url": "/games/global-domination/pc-4009",
    "platform": "PC",
    "score": 3.6,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Carnivores",
    "url": "/games/carnivores/pc-10746",
    "platform": "PC",
    "score": 7.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Jane's WWII Fighters",
    "url": "/games/janes-wwii-fighters/pc-10745",
    "platform": "PC",
    "score": 8,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "European Air War",
    "url": "/games/european-air-war/pc-3996",
    "platform": "PC",
    "score": 8.2,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Combat Flight Simulator: WWII Europe Series",
    "url": "/games/3-great-planes-for-microsoft-combat-flight-simulator/pc-10505",
    "platform": "PC",
    "score": 6.9,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Powerslide",
    "url": "/games/powerslide/pc-3124",
    "platform": "PC",
    "score": 8.5,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1998
  },
  {
    "title": "Quest for Glory V: Dragon Fire",
    "url": "/games/quest-for-glory-v-dragon-fire/pc-3671",
    "platform": "PC",
    "score": 6.6,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Gangsters: Organized Crime",
    "url": "/games/gangsters-organized-crime/pc-10459",
    "platform": "PC",
    "score": 8.5,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "DethKarz",
    "url": "/games/dethkarz/pc-9926",
    "platform": "PC",
    "score": 6.8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "King's Quest VIII: Mask of Eternity",
    "url": "/games/kings-quest-viii-mask-of-eternity/pc-3529",
    "platform": "PC",
    "score": 7.8,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "FIFA '99",
    "url": "/games/fifa-99/n64-10065",
    "platform": "Nintendo 64",
    "score": 9,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Wargasm",
    "url": "/games/wargasm/pc-9940",
    "platform": "PC",
    "score": 7.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "3-D Ultra NASCAR Pinball",
    "url": "/games/3-d-ultra-nascar-pinball/pc-10938",
    "platform": "PC",
    "score": 3,
    "genre": "Pinball",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Extreme Tennis",
    "url": "/games/extreme-tennis/pc-10930",
    "platform": "PC",
    "score": 2.3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Wetrix",
    "url": "/games/wetrix/pc-9927",
    "platform": "PC",
    "score": 7.8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Nectaris: Military Madness [1999]",
    "url": "/games/nectaris-military-madness-1999/ps-10159",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Jeff Wayne's The War of the Worlds",
    "url": "/games/jeff-waynes-the-war-of-the-worlds/pc-10901",
    "platform": "PC",
    "score": 5.8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Microsoft Golf 1999 Edition",
    "url": "/games/microsoft-golf-1999-edition-142157/pc-10892",
    "platform": "PC",
    "score": 7.4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Blackstone Chronicles",
    "url": "/games/blackstone-chronicles/pc-10893",
    "platform": "PC",
    "score": 7,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Bust-A-Move 4",
    "url": "/games/bust-a-move-4/ps-10168",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Uprising-X",
    "url": "/games/uprising-x/ps-2315",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "NBA Jam 99",
    "url": "/games/nba-jam-99/n64-3798",
    "platform": "Nintendo 64",
    "score": 7.9,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Warhammer 40,000: Chaos Gate",
    "url": "/games/warhammer-40k-chaos-gate/pc-10638",
    "platform": "PC",
    "score": 7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Master of Monsters: Disciples of Gaia",
    "url": "/games/master-of-monsters-disciples-of-gaia/ps-2211",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Wheel of Fortune [1998]",
    "url": "/games/wheel-of-fortune-1998/ps-10374",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "F1 Formula 1 '98",
    "url": "/games/f1-formula-1-98/ps-10187",
    "platform": "PlayStation",
    "score": 7.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Future Cop: L.A.P.D.",
    "url": "/games/future-cop-lapd/pc-10635",
    "platform": "PC",
    "score": 7.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Golden Nugget 64",
    "url": "/games/golden-nugget-64/n64-10083",
    "platform": "Nintendo 64",
    "score": 7.8,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "Plane Crazy",
    "url": "/games/plane-crazy/pc-3549",
    "platform": "PC",
    "score": 8.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1998
  },
  {
    "title": "WCW Nitro",
    "url": "/games/wcw-nitro/pc-10877",
    "platform": "PC",
    "score": 4.8,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "South Park",
    "url": "/games/south-park/pc-10733",
    "platform": "PC",
    "score": 4.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "CyberStrike 2",
    "url": "/games/cyberstrike-2/pc-2299",
    "platform": "PC",
    "score": 6.9,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Barrage",
    "url": "/games/barrage/pc-3147",
    "platform": "PC",
    "score": 3.7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Rush Down",
    "url": "/games/rush-down/ps-11218",
    "platform": "PlayStation",
    "score": 1.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Brigandine: The Legend of Forsena",
    "url": "/games/brigandine-the-legend-of-forsena/ps-3865",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Snowboard Kids 2",
    "url": "/games/snowboard-kids-2/n64-10080",
    "platform": "Nintendo 64",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Guardian's Crusade",
    "url": "/games/guardians-crusade-132716/ps-10795",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Turok 2: Seeds of Evil",
    "url": "/games/turok-2-seeds-of-evil/pc-3976",
    "platform": "PC",
    "score": 7,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Eliminator",
    "url": "/games/eliminator/ps-10847",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "R-Types",
    "url": "/games/r-types/ps-2324",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Thunder Brigade",
    "url": "/games/thunder-brigade/pc-11206",
    "platform": "PC",
    "score": 6.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Marvel Super Heroes vs. Street Fighter",
    "url": "/games/marvel-super-heroes-vs-street-fighter/ps-10442",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Myth II: Soulblighter",
    "url": "/games/myth-ii-soulblighter/pc-10305",
    "platform": "PC",
    "score": 8.9,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Street Sk8er",
    "url": "/games/street-sk8er/ps-10653",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Silent Hill",
    "url": "/games/silent-hill/ps-3982",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Blast Radius",
    "url": "/games/blast-radius/ps-10443",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Tetris 64",
    "url": "/games/tetris-64/n64-4081",
    "platform": "Nintendo 64",
    "score": 8.4,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "SimCity 3000",
    "url": "/games/simcity-3000/pc-10849",
    "platform": "PC",
    "score": 9,
    "genre": "Simulation",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Fisherman's Bait",
    "url": "/games/fishermans-bait/ps-10561",
    "platform": "PlayStation",
    "score": 3.5,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Syphon Filter",
    "url": "/games/syphon-filter/ps-10574",
    "platform": "PlayStation",
    "score": 9.5,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Top Gun: Hornet's Nest",
    "url": "/games/top-gun-hornets-nest/pc-10538",
    "platform": "PC",
    "score": 5.1,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Tales of Destiny",
    "url": "/games/tales-of-destiny/ps-2215",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Sid Meier's Alpha Centauri",
    "url": "/games/sid-meiers-alpha-centauri/pc-9941",
    "platform": "PC",
    "score": 9.5,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Luftwaffe Commander",
    "url": "/games/luftwaffe-commander/pc-11144",
    "platform": "PC",
    "score": 5.2,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Notepad",
    "url": "/games/notepad/pc-11451",
    "platform": "PC",
    "score": 1.5,
    "genre": "Productivity",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Lode Runner 3D",
    "url": "/games/lode-runner-3d/n64-10067",
    "platform": "Nintendo 64",
    "score": 7,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Star Wars: X-Wing Alliance",
    "url": "/games/star-wars-x-wing-alliance/pc-10172",
    "platform": "PC",
    "score": 8.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Big Air",
    "url": "/games/big-air/ps-10441",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Interplay Sports Baseball 2000",
    "url": "/games/interplay-sports-baseball-2000/ps-10834",
    "platform": "PlayStation",
    "score": 8.4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Heroes of Might and Magic III: The Restoration of Erathia",
    "url": "/games/heroes-of-might-and-magic-platinum-edition/pc-10222",
    "platform": "PC",
    "score": 9,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Gex 3: Deep Cover Gecko",
    "url": "/games/gex-3-deep-cover-gecko/ps-10257",
    "platform": "PlayStation",
    "score": 8.1,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Redline",
    "url": "/games/redline-872199/pc-10588",
    "platform": "PC",
    "score": 7.1,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "EverQuest",
    "url": "/games/everquest/pc-2252",
    "platform": "PC",
    "score": 8.4,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Micro Machines 64 Turbo",
    "url": "/games/micro-machines-64-turbo/n64-3961",
    "platform": "Nintendo 64",
    "score": 8.6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Rollcage",
    "url": "/games/rollcage/ps-10582",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Beetle Adventure Racing",
    "url": "/games/beetle-adventure-racing/n64-10070",
    "platform": "Nintendo 64",
    "score": 9.1,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Need for Speed: High Stakes",
    "url": "/games/need-for-speed-high-stakes/ps-10968",
    "platform": "PlayStation",
    "score": 8.8,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Triple Play 2000",
    "url": "/games/triple-play-2000/ps-10788",
    "platform": "PlayStation",
    "score": 9.2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Triple Play 2000",
    "url": "/games/triple-play-2000/n64-10654",
    "platform": "Nintendo 64",
    "score": 5.4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Freestyle Boardin' '99",
    "url": "/games/freestyle-boardin-99-142173/ps-10373",
    "platform": "PlayStation",
    "score": 1,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Army Men 3D",
    "url": "/games/army-men-3d/ps-4030",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Resident Evil 2 (Platinum Edition)",
    "url": "/games/resident-evil-2/pc-10402",
    "platform": "PC",
    "score": 6.8,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "California Speed",
    "url": "/games/california-speed/n64-9860",
    "platform": "Nintendo 64",
    "score": 4.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Vigilante 8",
    "url": "/games/vigilante-8/n64-10066",
    "platform": "Nintendo 64",
    "score": 8.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "North vs. South: The Great American Civil War",
    "url": "/games/north-vs-south-the-great-american-civil-war/pc-11344",
    "platform": "PC",
    "score": 7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NASCAR Revolution",
    "url": "/games/nascar-revolution/pc-11339",
    "platform": "PC",
    "score": 4.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Legend of Legaia",
    "url": "/games/legend-of-legaia/ps-10730",
    "platform": "PlayStation",
    "score": 7,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Fighter Pilot: Ready - Aim - Fire",
    "url": "/games/fighter-pilot-ready-aim-fire/pc-11338",
    "platform": "PC",
    "score": 5,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Beavis and Butt-Head DO U",
    "url": "/games/beavis-and-butt-head-do-u/pc-11042",
    "platform": "PC",
    "score": 5.6,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NBA In the Zone '99",
    "url": "/games/nba-in-the-zone-99/n64-10383",
    "platform": "Nintendo 64",
    "score": 5.6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Warzone 2100",
    "url": "/games/warzone-2100/pc-10652",
    "platform": "PC",
    "score": 8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Triple Play 2000",
    "url": "/games/triple-play-2000/pc-11249",
    "platform": "PC",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Machines",
    "url": "/games/machines/pc-9948",
    "platform": "PC",
    "score": 7.2,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Falcon 4.0",
    "url": "/games/falcon-40/pc-3300",
    "platform": "PC",
    "score": 8.4,
    "genre": "Simulation",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Rollcage",
    "url": "/games/rollcage/pc-11495",
    "platform": "PC",
    "score": 5.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NHL Blades of Steel '99",
    "url": "/games/blades-of-steel-99/n64-10077",
    "platform": "Nintendo 64",
    "score": 5.1,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "All-Star Baseball 2000",
    "url": "/games/all-star-baseball-2000/n64-1907",
    "platform": "Nintendo 64",
    "score": 9,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "High Heat Baseball 2000",
    "url": "/games/high-heat-baseball-2000/pc-11036",
    "platform": "PC",
    "score": 9,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Charlie Blast's Territory",
    "url": "/games/charlie-blasts-territory/n64-4010",
    "platform": "Nintendo 64",
    "score": 6.9,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Imperialism II: The Age of Exploration",
    "url": "/games/imperialism-ii-the-age-of-exploration/pc-11488",
    "platform": "PC",
    "score": 8.4,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Bust-A-Move 99",
    "url": "/games/bust-a-move-3-dx/ps-11069",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Carmageddon 2: Carpocalypse Now",
    "url": "/games/carmageddon-2-carpocalypse-now/pc-3892",
    "platform": "PC",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Pro 18: World Tour Golf",
    "url": "/games/pro-18-world-tour-golf/ps-10445",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Sports Car GT",
    "url": "/games/sports-car-gt/ps-3726",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Fighter Squadron: Screamin' Demons Over Europe",
    "url": "/games/fighter-squadron-screamin-demons-over-europe/pc-3128",
    "platform": "PC",
    "score": 7.2,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Starsiege",
    "url": "/games/starsiege/pc-4011",
    "platform": "PC",
    "score": 7.7,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "MLB 2000",
    "url": "/games/mlb-2000/ps-10926",
    "platform": "PlayStation",
    "score": 8.9,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Bust-A-Move '99",
    "url": "/games/bust-a-move/n64-9937",
    "platform": "Nintendo 64",
    "score": 8.2,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Rampage 2: Universal Tour",
    "url": "/games/rampage-2-universal-tour/n64-10513",
    "platform": "Nintendo 64",
    "score": 5.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Rampage 2: Universal Tour",
    "url": "/games/rampage-2-universal-tour/ps-10528",
    "platform": "PlayStation",
    "score": 5.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Army Men II",
    "url": "/games/army-men-ii/pc-10210",
    "platform": "PC",
    "score": 4.4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "T'ai Fu: Wrath of the Tiger",
    "url": "/games/tai-fu-wrath-of-the-tiger/ps-10160",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Recoil",
    "url": "/games/recoil/pc-3717",
    "platform": "PC",
    "score": 8.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "RollerCoaster Tycoon",
    "url": "/games/rollercoaster-tycoon/pc-10759",
    "platform": "PC",
    "score": 8.5,
    "genre": "Simulation",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Motorhead [1998]",
    "url": "/games/motorhead/pc-3566",
    "platform": "PC",
    "score": 6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Grand Theft Auto: London 1969",
    "url": "/games/grand-theft-auto-london-1969/ps-11460",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Interplay Sports Baseball 2000",
    "url": "/games/interplay-sports-baseball-2000/pc-11635",
    "platform": "PC",
    "score": 5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Street Fighter Alpha 3",
    "url": "/games/street-fighter-alpha-3/ps-10362",
    "platform": "PlayStation",
    "score": 9.3,
    "genre": "Fighting",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Ken Griffey Jr.'s Slugfest",
    "url": "/games/ken-griffey-jrs-slugfest/n64-10764",
    "platform": "Nintendo 64",
    "score": 7.9,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Point Blank 2",
    "url": "/games/point-blank-2/ps-10800",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Tank Racer",
    "url": "/games/tank-racer/pc-11251",
    "platform": "PC",
    "score": 5.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Ehrgeiz: God Bless the Ring",
    "url": "/games/ehrgeiz/ps-10902",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "R4: Ridge Racer Type 4",
    "url": "/games/r4-ridge-racer-type-4/ps-10354",
    "platform": "PlayStation",
    "score": 9.4,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Extreme Rodeo",
    "url": "/games/extreme-rodeo/pc-11608",
    "platform": "PC",
    "score": 2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Extreme Bullrider",
    "url": "/games/extreme-bullrider/pc-11609",
    "platform": "PC",
    "score": 1.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Pokemon Stadium 2 [Japanese Version]",
    "url": "/games/pokemon-stadium-2-jp/n64-11758",
    "platform": "Nintendo 64",
    "score": 8.1,
    "genre": "Battle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Apache Havoc: Enemy Engaged",
    "url": "/games/apache-havoc-enemy-engaged/pc-10372",
    "platform": "PC",
    "score": 7.1,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Microsoft Baseball 2000",
    "url": "/games/microsoft-baseball-2000-142164/pc-11549",
    "platform": "PC",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NBA In the Zone '99",
    "url": "/games/nba-in-the-zone-99/ps-10559",
    "platform": "PlayStation",
    "score": 8.3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Hello Kitty's Cube Frenzy",
    "url": "/games/hello-kittys-cube-frenzy/ps-11554",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Chameleon Twist 2",
    "url": "/games/chameleon-twist-2/n64-3868",
    "platform": "Nintendo 64",
    "score": 6.1,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Super Smash Bros.",
    "url": "/games/super-smash-bros/n64-10494",
    "platform": "Nintendo 64",
    "score": 8.5,
    "genre": "Fighting",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Requiem: Avenging Angel",
    "url": "/games/requiem-avenging-angel/pc-10211",
    "platform": "PC",
    "score": 6.7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Commandos: Beyond the Call of Duty",
    "url": "/games/commandos-beyond-the-call-of-duty/pc-11528",
    "platform": "PC",
    "score": 7.9,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "3 Xtreme",
    "url": "/games/3-xtreme/ps-10928",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Bottom of the 9th",
    "url": "/games/bottom-of-the-9th/n64-10069",
    "platform": "Nintendo 64",
    "score": 6.2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Civilization: Call to Power",
    "url": "/games/civilization-call-to-power/pc-3999",
    "platform": "PC",
    "score": 4.8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Reah",
    "url": "/games/reah/pc-11098",
    "platform": "PC",
    "score": 5,
    "genre": "Puzzle, Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Dead in the Water",
    "url": "/games/dead-in-the-water/ps-3893",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Pac-Land",
    "url": "/games/pac-land/lynx-5869",
    "platform": "Lynx",
    "score": 7,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "MechWarrior 3",
    "url": "/games/mechwarrior-3/pc-3116",
    "platform": "PC",
    "score": 9.1,
    "genre": "Simulation",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Star Trek: The Next Generation: Birth of the Federation",
    "url": "/games/star-trek-the-next-generation-birth-of-the-federation/pc-10395",
    "platform": "PC",
    "score": 5.5,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Bloody Roar II: The New Breed",
    "url": "/games/bloody-roar-ii-the-new-breed/ps-10750",
    "platform": "PlayStation",
    "score": 8.8,
    "genre": "Fighting",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Sports Car GT",
    "url": "/games/sports-car-gt/pc-11888",
    "platform": "PC",
    "score": 7.3,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Grand Theft Auto: London 1969",
    "url": "/games/grand-theft-auto-london-1969/pc-11252",
    "platform": "PC",
    "score": 7.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Quake II",
    "url": "/games/jake2/n64-3821",
    "platform": "Nintendo 64",
    "score": 8.2,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Bugs Bunny: Lost in Time",
    "url": "/games/bugs-bunny-lost-in-time/ps-10546",
    "platform": "PlayStation",
    "score": 7.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Fighting Force 64",
    "url": "/games/fighting-force/n64-3774",
    "platform": "Nintendo 64",
    "score": 6.4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Austin Powers Operation: Trivia",
    "url": "/games/austin-powers-operation-trivia/pc-11883",
    "platform": "PC",
    "score": 8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Superman [1999]",
    "url": "/games/superman-1999/n64-1957",
    "platform": "Nintendo 64",
    "score": 3.4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "A Bug's Life",
    "url": "/games/a-bugs-life/n64-11211",
    "platform": "Nintendo 64",
    "score": 6.8,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Castrol Honda Superbike Racing",
    "url": "/games/castrol-honda-superbike-racing/ps-11787",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Centipede [1999]",
    "url": "/games/centipede-1999/ps-3983",
    "platform": "PlayStation",
    "score": 5.5,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Star Wars: Episode I: The Phantom Menace",
    "url": "/games/star-wars-episode-i-the-phantom-menace/pc-11411",
    "platform": "PC",
    "score": 6.2,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Star Wars: Episode I: Racer",
    "url": "/games/star-wars-episode-i-racer/pc-11398",
    "platform": "PC",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Alexi Lalas International Soccer",
    "url": "/games/alexi-lalas-international-soccer/ps-11538",
    "platform": "PlayStation",
    "score": 5.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Awesome Golf",
    "url": "/games/awesome-golf/lynx-5854",
    "platform": "Lynx",
    "score": 9,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Baseball Heroes",
    "url": "/games/baseball-heroes/lynx-4131",
    "platform": "Lynx",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Basketbrawl",
    "url": "/games/basketbrawl/lynx-5855",
    "platform": "Lynx",
    "score": 4,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Warzone 2100",
    "url": "/games/warzone-2100/ps-10813",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Batman Returns",
    "url": "/games/batman-returns/lynx-5856",
    "platform": "Lynx",
    "score": 8,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "A.P.B.",
    "url": "/games/apb/lynx-5847",
    "platform": "Lynx",
    "score": 8.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Command & Conquer (1999)",
    "url": "/games/command-and-conquer/n64-1947",
    "platform": "Nintendo 64",
    "score": 7.6,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Heavy Gear II",
    "url": "/games/heavy-gear-ii/pc-3820",
    "platform": "PC",
    "score": 8.4,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "The Next Tetris",
    "url": "/games/the-next-tetris/ps-11164",
    "platform": "PlayStation",
    "score": 8.8,
    "genre": "Puzzle",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Extreme Watersports",
    "url": "/games/extreme-watersports/pc-11834",
    "platform": "PC",
    "score": 1,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Magic & Mayhem",
    "url": "/games/magic-mayhem/pc-11185",
    "platform": "PC",
    "score": 7.3,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Apollo 18: The Moon Missions",
    "url": "/games/apollo-18-the-moon-missions/pc-11805",
    "platform": "PC",
    "score": 4.2,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "High Heat Baseball 2000",
    "url": "/games/high-heat-baseball-2000/ps-11553",
    "platform": "PlayStation",
    "score": 4.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Star Wars: Episode I: Racer",
    "url": "/games/star-wars-episode-i-racer/n64-10490",
    "platform": "Nintendo 64",
    "score": 7.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Yoot Tower",
    "url": "/games/yoot-tower/pc-11789",
    "platform": "PC",
    "score": 7.8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Need for Speed: High Stakes",
    "url": "/games/need-for-speed-high-stakes/pc-11562",
    "platform": "PC",
    "score": 7.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Unreal Mission Pack: Return to Na Pali",
    "url": "/games/unreal-mission-pack-return-to-na-pali/pc-11653",
    "platform": "PC",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Golf",
    "url": "/games/golf/gb-4116",
    "platform": "Game Boy",
    "score": 9,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Vegas Stakes",
    "url": "/games/vegas-stakes/gb-11994",
    "platform": "Game Boy",
    "score": 7,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Ape Escape",
    "url": "/games/ape-escape/ps-11105",
    "platform": "PlayStation",
    "score": 9.5,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Pokemon Blue Version",
    "url": "/games/pokemon-blue-version/gb-16708",
    "platform": "Game Boy",
    "score": 10,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Harvest Moon",
    "url": "/games/harvest-moon-gb/gb-10181",
    "platform": "Game Boy",
    "score": 8,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Pokemon Red Version",
    "url": "/games/pokemon-red-version/gb-9846",
    "platform": "Game Boy",
    "score": 10,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "James Bond 007 [1998]",
    "url": "/games/james-bond-007-1998/gb-9461",
    "platform": "Game Boy",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "F-16 Aggressor",
    "url": "/games/f-16-aggressor/pc-9920",
    "platform": "PC",
    "score": 7.3,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Gruntz",
    "url": "/games/gruntz/pc-11560",
    "platform": "PC",
    "score": 6,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Boss Rally",
    "url": "/games/boss-rally/pc-4004",
    "platform": "PC",
    "score": 7.3,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Motorhead [1998]",
    "url": "/games/motorhead/pc-3566",
    "platform": "PC",
    "score": 6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Might and Magic VII: For Blood and Honor",
    "url": "/games/might-and-magic-vii-for-blood-and-honor/pc-10208",
    "platform": "PC",
    "score": 7.7,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Championship Pool",
    "url": "/games/championship-pool/gb-12000",
    "platform": "Game Boy",
    "score": 4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Fighter Maker",
    "url": "/games/fighter-maker/ps-3775",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Star Ocean: The Second Story",
    "url": "/games/star-ocean-the-second-story/ps-4057",
    "platform": "PlayStation",
    "score": 8.8,
    "genre": "Action, RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Jeff Gordon XS Racing",
    "url": "/games/jeff-gordon-xs-racing/pc-10649",
    "platform": "PC",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "F-1 Race",
    "url": "/games/f-1-race/gb-4111",
    "platform": "Game Boy",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Boggle Plus",
    "url": "/games/boggle-plus/gb-11982",
    "platform": "Game Boy",
    "score": 6,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Bomberman GB (Japan)",
    "url": "/games/bomberman-gb-japan/gb-9831",
    "platform": "Game Boy",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Ultimate 8 Ball",
    "url": "/games/ultimate-8-ball/ps-11230",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Klax",
    "url": "/games/klax/gbc-11523",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Dracula the Undead",
    "url": "/games/dracula-the-undead/lynx-5849",
    "platform": "Lynx",
    "score": 7,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Hydra",
    "url": "/games/hydra/lynx-4143",
    "platform": "Lynx",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Hard Drivin'",
    "url": "/games/hard-drivin/lynx-4142",
    "platform": "Lynx",
    "score": 6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Xybots",
    "url": "/games/xybots/lynx-4134",
    "platform": "Lynx",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Steel Talons",
    "url": "/games/steel-talons/lynx-4159",
    "platform": "Lynx",
    "score": 9,
    "genre": "Flight, Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Turbo Sub",
    "url": "/games/turbo-sub/lynx-4166",
    "platform": "Lynx",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "World Driver Championship",
    "url": "/games/world-driver-championship/n64-10079",
    "platform": "Nintendo 64",
    "score": 8.8,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Pitfall: Beyond the Jungle",
    "url": "/games/pitfall-3d/gbc-10899",
    "platform": "Game Boy Color",
    "score": 3,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Mole Mania",
    "url": "/games/mole-mania/gb-11937",
    "platform": "Game Boy",
    "score": 8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Game & Watch Gallery",
    "url": "/games/game-watch-gallery/gb-9245",
    "platform": "Game Boy",
    "score": 8,
    "genre": "Compilation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Fleet Command",
    "url": "/games/fleet-command/pc-11936",
    "platform": "PC",
    "score": 6.8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Monkey Hero",
    "url": "/games/monkey-hero/ps-3797",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Kirby's Pinball Land",
    "url": "/games/kirbys-pinball-land/gb-5965",
    "platform": "Game Boy",
    "score": 8,
    "genre": "Pinball",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Descent 3",
    "url": "/games/descent-3/pc-3554",
    "platform": "PC",
    "score": 9,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Total Annihilation: Kingdoms",
    "url": "/games/total-annihilation-kingdoms/pc-10307",
    "platform": "PC",
    "score": 6.9,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "California Games",
    "url": "/games/california-games/lynx-5859",
    "platform": "Lynx",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Bubble Trouble",
    "url": "/games/bubble-trouble/lynx-4135",
    "platform": "Lynx",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Gauntlet: The Third Encounter",
    "url": "/games/gauntlet-the-third-encounter/lynx-5865",
    "platform": "Lynx",
    "score": 5.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Fidelity Ultimate Chess Challenge",
    "url": "/games/fidelity-ultimate-chess-challenge/lynx-4140",
    "platform": "Lynx",
    "score": 7,
    "genre": "Board",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "BattleWheels",
    "url": "/games/battlewheels/lynx-5857",
    "platform": "Lynx",
    "score": 9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Blockout",
    "url": "/games/blockout/lynx-4133",
    "platform": "Lynx",
    "score": 8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Metroid II: Return of Samus",
    "url": "/games/metroid-ii-return-of-samus/gb-9335",
    "platform": "Game Boy",
    "score": 9,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "The Smurfs' Nightmare",
    "url": "/games/the-smurfs-nightmare/gbc-11930",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Lunar: Silver Star Story Complete (Four Disc Collector's Edition)",
    "url": "/games/lunar-silver-star-harmony/ps-17",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Legend of the River King",
    "url": "/games/legend-of-the-river-king-925324/gb-10467",
    "platform": "Game Boy",
    "score": 7,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Midtown Madness",
    "url": "/games/midtown-madness/pc-11322",
    "platform": "PC",
    "score": 8.4,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Top Gear Rally",
    "url": "/games/top-gear-rally/gbc-11143",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Aliens vs. Predator [1999]",
    "url": "/games/aliens-vs-predator-1999/pc-3952",
    "platform": "PC",
    "score": 8,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Extreme Boards & Blades",
    "url": "/games/extreme-boards-blades/pc-11833",
    "platform": "PC",
    "score": 1.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Shadowgate 64: Trials of the Four Towers",
    "url": "/games/shadowgate-64-trials-of-the-four-towers/n64-3871",
    "platform": "Nintendo 64",
    "score": 6.2,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Rampage",
    "url": "/games/rampage/lynx-5873",
    "platform": "Lynx",
    "score": 9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Robotron: 2084",
    "url": "/games/robotron-2084/lynx-4147",
    "platform": "Lynx",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Klax",
    "url": "/games/klax/lynx-5851",
    "platform": "Lynx",
    "score": 9,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Super Asteroids & Missile Command",
    "url": "/games/bundle-super-asteroids-and-missile-command/lynx-4161",
    "platform": "Lynx",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Dirty Larry: Renegade Cop",
    "url": "/games/dirty-larry-renegade-cop/lynx-4137",
    "platform": "Lynx",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Hockey",
    "url": "/games/hockey/lynx-5867",
    "platform": "Lynx",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Warbirds",
    "url": "/games/warbirds-140576/lynx-4167",
    "platform": "Lynx",
    "score": 9,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Todd's Adventures in Slime World",
    "url": "/games/todds-adventures-in-slime-world/lynx-5877",
    "platform": "Lynx",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Toki",
    "url": "/games/toki/lynx-5879",
    "platform": "Lynx",
    "score": 7,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Monaco Grand Prix Racing Simulation 2",
    "url": "/games/monaco-grand-prix-racing-simulation-2/pc-11913",
    "platform": "PC",
    "score": 7.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Turok 2: Seeds of Evil",
    "url": "/games/turok-2-seeds-of-evil/gbc-10734",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Shadow Madness",
    "url": "/games/shadow-madness-142592/ps-2296",
    "platform": "PlayStation",
    "score": 7,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Desert Strike",
    "url": "/games/desert-strike/lynx-5862",
    "platform": "Lynx",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Crystal Mines II",
    "url": "/games/crystal-mines-ii/lynx-5861",
    "platform": "Lynx",
    "score": 7,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Worms Armageddon",
    "url": "/games/worms-armageddon/pc-11326",
    "platform": "PC",
    "score": 8.6,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Gordo 106",
    "url": "/games/gordo-106/lynx-4141",
    "platform": "Lynx",
    "score": 5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Electrocop",
    "url": "/games/electrocop-884184/lynx-5864",
    "platform": "Lynx",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "European Soccer Challenge",
    "url": "/games/european-soccer-challenge/lynx-4139",
    "platform": "Lynx",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Hyperdrome",
    "url": "/games/hyperdrome/lynx-12164",
    "platform": "Lynx",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Joust",
    "url": "/games/defenderjoust/lynx-4146",
    "platform": "Lynx",
    "score": 10,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Dinolympics",
    "url": "/games/dinolympics/lynx-5863",
    "platform": "Lynx",
    "score": 7,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Chip's Challenge",
    "url": "/games/chips-challenge/lynx-5860",
    "platform": "Lynx",
    "score": 8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Ninja Gaiden",
    "url": "/games/ninja-gaiden-arcade/lynx-4152",
    "platform": "Lynx",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Power Factor",
    "url": "/games/power-factor/lynx-5870",
    "platform": "Lynx",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Rampart",
    "url": "/games/rampart/lynx-5872",
    "platform": "Lynx",
    "score": 8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "S.T.U.N. Runner",
    "url": "/games/stun-runner/lynx-4160",
    "platform": "Lynx",
    "score": 9,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Robo-Squash",
    "url": "/games/robo-squash/lynx-4157",
    "platform": "Lynx",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Shadow of the Beast [1989]",
    "url": "/games/shadow-of-the-beast/lynx-5852",
    "platform": "Lynx",
    "score": 7,
    "genre": "Action, Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Shanghai",
    "url": "/games/shanghai-809520/lynx-5876",
    "platform": "Lynx",
    "score": 10,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Zarlor Mercenary",
    "url": "/games/zarlor-mercenary/lynx-5881",
    "platform": "Lynx",
    "score": 9,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Starshot: Space Circus Fever",
    "url": "/games/starshot-space-circus-fever/n64-1953",
    "platform": "Nintendo 64",
    "score": 5.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Ishido: The Way of the Stones",
    "url": "/games/ishido/lynx-4144",
    "platform": "Lynx",
    "score": 8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Krazy Ace Miniature Golf",
    "url": "/games/krazy-ace-miniature-golf/lynx-4148",
    "platform": "Lynx",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Bill & Ted's Excellent Adventure",
    "url": "/games/bill-teds-excellent-adventure/lynx-5848",
    "platform": "Lynx",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "S.I.M.I.S.",
    "url": "/games/simis/lynx-12176",
    "platform": "Lynx",
    "score": 9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Super Off Road",
    "url": "/games/ivan-ironman-stewarts-super-off-road/lynx-4162",
    "platform": "Lynx",
    "score": 5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "T-Tris",
    "url": "/games/t-tris/lynx-4164",
    "platform": "Lynx",
    "score": 4,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Ninja Gaiden III: The Ancient Ship of Doom",
    "url": "/games/ninja-gaiden-iii-the-ancient-ship-of-doom/lynx-4153",
    "platform": "Lynx",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Kingpin: Life of Crime",
    "url": "/games/kingpin-life-of-crime/pc-10506",
    "platform": "PC",
    "score": 8.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Monaco Grand Prix",
    "url": "/games/monaco-grand-prix/ps-10447",
    "platform": "PlayStation",
    "score": 8.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Switchblade 2",
    "url": "/games/switchblade-2/lynx-5878",
    "platform": "Lynx",
    "score": 5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Kung Food",
    "url": "/games/kung-food/lynx-4149",
    "platform": "Lynx",
    "score": 6,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Lemmings",
    "url": "/games/lemmings/lynx-5866",
    "platform": "Lynx",
    "score": 9,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Fat Bobby",
    "url": "/games/fat-bobby/lynx-6723",
    "platform": "Lynx",
    "score": 6,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Double Dragon",
    "url": "/games/double-dragon/lynx-4138",
    "platform": "Lynx",
    "score": 5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Tarzan",
    "url": "/games/disneys-collectors-edition-2002/ps-11563",
    "platform": "PlayStation",
    "score": 7.7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Jimmy Connors Tennis",
    "url": "/games/jimmy-connors-tennis/lynx-4145",
    "platform": "Lynx",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Dracula the Undead",
    "url": "/games/dracula-the-undead/lynx-5849",
    "platform": "Lynx",
    "score": 7,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Hard Drivin'",
    "url": "/games/hard-drivin/lynx-4142",
    "platform": "Lynx",
    "score": 6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Paperboy",
    "url": "/games/paperboy/lynx-4154",
    "platform": "Lynx",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Pit-Fighter",
    "url": "/games/pit-fighter/lynx-4156",
    "platform": "Lynx",
    "score": 5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Viking Child",
    "url": "/games/viking-child/lynx-5880",
    "platform": "Lynx",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Rugrats: Scavenger Hunt",
    "url": "/games/rugrats-scavenger-hunt/n64-3876",
    "platform": "Nintendo 64",
    "score": 3.7,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Malibu Bikini Volleyball",
    "url": "/games/malibu-bikini-volleyball/lynx-4150",
    "platform": "Lynx",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NFL Football",
    "url": "/games/nfl-football-141985/lynx-4151",
    "platform": "Lynx",
    "score": 4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Qix",
    "url": "/games/qix/lynx-5871",
    "platform": "Lynx",
    "score": 7,
    "genre": "Puzzle, Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Ms. Pac-Man",
    "url": "/games/ms-pac-man/lynx-5868",
    "platform": "Lynx",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Scrapyard Dog",
    "url": "/games/scrapyard-dog/lynx-4158",
    "platform": "Lynx",
    "score": 8,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Neo Cherry Master Color",
    "url": "/games/neo-cherry-master-color/ngpc-11061",
    "platform": "NeoGeo Pocket Color",
    "score": 4,
    "genre": "Casino",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Rugrats: The Movie",
    "url": "/games/rugrats-the-movie/gbc-11858",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "PGA Championship Golf 1999 Edition",
    "url": "/games/pga-championship-golf-1999-edition/pc-12125",
    "platform": "PC",
    "score": 7.6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Resident Evil 2 [1998]",
    "url": "/games/resident-evil-2/gcom-11169",
    "platform": "Game.Com",
    "score": 3,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Fatal Fury: First Contact",
    "url": "/games/fatal-fury-first-contact/ngpc-11933",
    "platform": "NeoGeo Pocket Color",
    "score": 7,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Neo Dragon's Wild",
    "url": "/games/neo-dragons-wild/ngpc-12123",
    "platform": "NeoGeo Pocket Color",
    "score": 4,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Steel Talons",
    "url": "/games/steel-talons/lynx-4159",
    "platform": "Lynx",
    "score": 9,
    "genre": "Flight, Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Xenophobe",
    "url": "/games/xenophobe-811082/lynx-5853",
    "platform": "Lynx",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "World Class Soccer",
    "url": "/games/world-class-soccer/lynx-4168",
    "platform": "Lynx",
    "score": 5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Raiden",
    "url": "/games/raiden/lynx-6724",
    "platform": "Lynx",
    "score": 7,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "RoadBlasters",
    "url": "/games/roadblasters/lynx-5874",
    "platform": "Lynx",
    "score": 9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Rygar",
    "url": "/games/rygar/lynx-5875",
    "platform": "Lynx",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Tournament Cyberball 2072",
    "url": "/games/tournament-cyberball-2072/lynx-4165",
    "platform": "Lynx",
    "score": 6,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Pinball Jam",
    "url": "/games/pinball-jam/lynx-4155",
    "platform": "Lynx",
    "score": 8,
    "genre": "Pinball",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Battlezone 2000",
    "url": "/games/battlezone-2000/lynx-4132",
    "platform": "Lynx",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Checkered Flag",
    "url": "/games/checkered-flag/lynx-4136",
    "platform": "Lynx",
    "score": 10,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Ultimate 8 Ball",
    "url": "/games/ultimate-8-ball/pc-11447",
    "platform": "PC",
    "score": 7.4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Fighting Steel",
    "url": "/games/fighting-steel/pc-12098",
    "platform": "PC",
    "score": 7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Links Extreme",
    "url": "/games/links-extreme/pc-11548",
    "platform": "PC",
    "score": 5.3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "V-Rally Edition '99",
    "url": "/games/v-rally-edition-99/gbc-11626",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Tarzan",
    "url": "/games/disneys-collectors-edition-2002/gbc-12026",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Pro 18: World Tour Golf",
    "url": "/games/pro-18-world-tour-golf/pc-10173",
    "platform": "PC",
    "score": 5.3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Men In Black: The Series",
    "url": "/games/men-in-black-the-series/gbc-10812",
    "platform": "Game Boy Color",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Populous: The Beginning",
    "url": "/games/populous-the-beginning/ps-11446",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Looney Tunes: Twouble",
    "url": "/games/looney-tunes-twouble/gbc-10871",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Gates of Zendocon",
    "url": "/games/gates-of-zendocon/lynx-5850",
    "platform": "Lynx",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Bust-A-Move 4",
    "url": "/games/bust-a-move-4/gbc-11916",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Bugs Bunny Crazy Castle 3",
    "url": "/games/bugs-bunny-crazy-castle-3/gbc-11155",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Dungeon Keeper II",
    "url": "/games/dungeon-keeper-ii/pc-9944",
    "platform": "PC",
    "score": 8.9,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Driver",
    "url": "/games/driver/ps-266",
    "platform": "PlayStation",
    "score": 9.7,
    "genre": "Racing, Action",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "F-22 Lightning 3",
    "url": "/games/f-22-lightning-3/pc-11884",
    "platform": "PC",
    "score": 8.4,
    "genre": "Flight, Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Official Formula 1 Racing",
    "url": "/games/official-formula-1-racing/pc-12094",
    "platform": "PC",
    "score": 5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Jade Cocoon: Story of the Tamamayu",
    "url": "/games/jade-cocoon-story-of-the-tamamayu/ps-10945",
    "platform": "PlayStation",
    "score": 8.1,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "In-Fisherman Bass Hunter 64",
    "url": "/games/in-fisherman-bass-hunter-64/n64-2312",
    "platform": "Nintendo 64",
    "score": 7.6,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Monster Truck Madness 64",
    "url": "/games/monster-truck-madness-64/n64-3908",
    "platform": "Nintendo 64",
    "score": 7.1,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Evil Zone",
    "url": "/games/evil-zone/ps-11480",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Mario Golf",
    "url": "/games/mario-golf/n64-10628",
    "platform": "Nintendo 64",
    "score": 8.3,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NFL Xtreme 2",
    "url": "/games/nfl-xtreme-2/ps-11802",
    "platform": "PlayStation",
    "score": 6.3,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Pokemon Snap",
    "url": "/games/pokemon-snap/n64-2335",
    "platform": "Nintendo 64",
    "score": 7.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Croc 2",
    "url": "/games/croc-2/ps-9922",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Atari Arcade Hits 1",
    "url": "/games/atari-arcade-hits-1/pc-12302",
    "platform": "PC",
    "score": 8.6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Super Mario Bros. Deluxe",
    "url": "/games/super-mario-bros-deluxe/gbc-11703",
    "platform": "Game Boy Color",
    "score": 10,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Neo Mystery Bonus",
    "url": "/games/neo-mystery-bonus/ngpc-11054",
    "platform": "NeoGeo Pocket Color",
    "score": 4,
    "genre": "Casino",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Prince of Persia [1999]",
    "url": "/games/prince-of-persia-1989/gbc-12259",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Samurai Shodown 2! Pocket Fighting Series",
    "url": "/games/samurai-shodown-2-pocket-fighting-series/ngpc-12019",
    "platform": "NeoGeo Pocket Color",
    "score": 9,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Bleem!",
    "url": "/games/bleem/ps-12258",
    "platform": "PlayStation",
    "score": 5.5,
    "genre": "Other",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Ring: The Legend of the Nibelungen",
    "url": "/games/ring-the-legend-of-the-nibelungen/pc-12166",
    "platform": "PC",
    "score": 2.7,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Baseball Stars Color",
    "url": "/games/baseball-stars-color/ngpc-12261",
    "platform": "NeoGeo Pocket Color",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NHL Blades of Steel",
    "url": "/games/blades-of-steel-99/gbc-12018",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Jeopardy! [1998]",
    "url": "/games/jeopardy-1998-14280352/gcom-9309",
    "platform": "Game.Com",
    "score": 6,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Bleem!",
    "url": "/games/bleem/pc-12072",
    "platform": "PC",
    "score": 5.5,
    "genre": "Other",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Bust-A-Move Pocket",
    "url": "/games/bust-a-move-deluxe/ngpc-12122",
    "platform": "NeoGeo Pocket Color",
    "score": 8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Looney Tunes: Carrot Crazy",
    "url": "/games/looney-tunes-carrot-crazy/gbc-11483",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Mortal Kombat 4",
    "url": "/games/mortal-kombat-4/gbc-5478",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Metal Slug: First Mission",
    "url": "/games/metal-slug-first-mission/ngpc-11050",
    "platform": "NeoGeo Pocket Color",
    "score": 9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "The King of Fighters R-2",
    "url": "/games/the-king-of-fighters-r-2/ngpc-11046",
    "platform": "NeoGeo Pocket Color",
    "score": 9,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Paperboy",
    "url": "/games/paperboy/gbc-12017",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Force 21",
    "url": "/games/force-21/pc-11030",
    "platform": "PC",
    "score": 7.8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NFL Blitz 2000",
    "url": "/games/nfl-blitz-2000/ps-11506",
    "platform": "PlayStation",
    "score": 8.6,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Joust / Defender",
    "url": "/games/joust-defender/gbc-11442",
    "platform": "Game Boy Color",
    "score": 9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Pokemon Pinball",
    "url": "/games/pokemon-pinball/gbc-11803",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Pinball",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Man of War II: Chains of Command",
    "url": "/games/man-of-war-ii-chains-of-command/pc-12697",
    "platform": "PC",
    "score": 5.7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Animaniacs: A Gigantic Adventure",
    "url": "/games/animaniacs-a-gigantic-adventure/pc-12696",
    "platform": "PC",
    "score": 3.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "KO",
    "url": "/games/ko/pc-13018",
    "platform": "PC",
    "score": 4.3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Soulcalibur",
    "url": "/games/soulcalibur/dc-10953",
    "platform": "Dreamcast",
    "score": 10,
    "genre": "Fighting",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "NASCAR 2000",
    "url": "/games/nascar-2000/n64-11673",
    "platform": "Nintendo 64",
    "score": 6.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Legacy of Kain: Soul Reaver",
    "url": "/games/legacy-of-kain-soul-reaver/pc-11337",
    "platform": "PC",
    "score": 9.2,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Biomotor Unitron",
    "url": "/games/biomotor-unitron/ngpc-13017",
    "platform": "NeoGeo Pocket Color",
    "score": 7,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "The Legend of Zelda: Link's Awakening DX",
    "url": "/games/the-legend-of-zelda-links-awakening/gbc-10683",
    "platform": "Game Boy Color",
    "score": 10,
    "genre": "Action, Adventure",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Darkstone",
    "url": "/games/darkstone/pc-10549",
    "platform": "PC",
    "score": 9,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Sid Meier's Civilization II: Test of Time",
    "url": "/games/sid-meiers-civilization-chronicles/pc-11481",
    "platform": "PC",
    "score": 7.8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Tarzan Untamed",
    "url": "/games/tarzan-untamed/pc-12657",
    "platform": "PC",
    "score": 7.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Pocket Tennis Color",
    "url": "/games/pocket-tennis-color/ngpc-10531",
    "platform": "NeoGeo Pocket Color",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Starshot: Space Circus Fever",
    "url": "/games/starshot-space-circus-fever/pc-12672",
    "platform": "PC",
    "score": 6.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Hidden & Dangerous",
    "url": "/games/hidden-dangerous/pc-11207",
    "platform": "PC",
    "score": 7.6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "The Operational Art of War II: Modern Battles 1956-2000",
    "url": "/games/the-operational-art-of-war-ii-modern-battles-1956-2000/pc-12999",
    "platform": "PC",
    "score": 8.6,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Mob Rule",
    "url": "/games/mob-rule/pc-12030",
    "platform": "PC",
    "score": 5.2,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Neo Turf Masters",
    "url": "/games/neo-turf-masters/ngpc-7912",
    "platform": "NeoGeo Pocket Color",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "All Star Tennis '99",
    "url": "/games/all-star-tennis-99/n64-10076",
    "platform": "Nintendo 64",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Missile Command [1980]",
    "url": "/games/missile-command-arcade/gbc-12992",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Extreme Mountain Biking",
    "url": "/games/extreme-mountain-biking/pc-12991",
    "platform": "PC",
    "score": 3.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Madden NFL 2000",
    "url": "/games/madden-nfl-2000/pc-12871",
    "platform": "PC",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "R/C Stunt Copter",
    "url": "/games/rc-stunt-copter/ps-10451",
    "platform": "PlayStation",
    "score": 8.8,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "LEGO Racers",
    "url": "/games/lego-racers/pc-11173",
    "platform": "PC",
    "score": 6.1,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "R-Type Delta",
    "url": "/games/r-type-delta/ps-11221",
    "platform": "PlayStation",
    "score": 8.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Clans",
    "url": "/games/clans/pc-11147",
    "platform": "PC",
    "score": 5.3,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NFL Quarterback Club 2000",
    "url": "/games/nfl-quarterback-club-2000/n64-10824",
    "platform": "Nintendo 64",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Revelations: The Demon Slayer",
    "url": "/games/revelations-the-demon-slayer-141870/gbc-12193",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Shadow Man",
    "url": "/games/shadow-man/pc-10207",
    "platform": "PC",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Klustar",
    "url": "/games/klustar/gbc-12856",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Crush Roller",
    "url": "/games/crush-roller/ngpc-12675",
    "platform": "NeoGeo Pocket Color",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Star Trek: Starfleet Command",
    "url": "/games/star-trek-starfleet-command/pc-11035",
    "platform": "PC",
    "score": 8.3,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NIRA Intense Import Drag Racing",
    "url": "/games/nira-intense-import-drag-racing-142886/pc-12667",
    "platform": "PC",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "WWII GI",
    "url": "/games/wwii-gi/pc-12577",
    "platform": "PC",
    "score": 3.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "WWF Attitude",
    "url": "/games/wwf-attitude/ps-11232",
    "platform": "PlayStation",
    "score": 8.3,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "TNN Motorsports Hardcore Heat",
    "url": "/games/tnn-motorsports-hardcore-heat/dc-12081",
    "platform": "Dreamcast",
    "score": 6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Trickstyle",
    "url": "/games/trickstyle-810604/dc-11333",
    "platform": "Dreamcast",
    "score": 8.8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Expendable",
    "url": "/games/expendable/dc-11946",
    "platform": "Dreamcast",
    "score": 7.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Mortal Kombat Gold",
    "url": "/games/mortal-kombat-gold/dc-10950",
    "platform": "Dreamcast",
    "score": 6.3,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Blue Stinger",
    "url": "/games/blue-stinger-167932/dc-10200",
    "platform": "Dreamcast",
    "score": 8.4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "The House of the Dead 2",
    "url": "/games/the-house-of-the-dead-2/dc-10956",
    "platform": "Dreamcast",
    "score": 8.7,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Final Fantasy VIII",
    "url": "/games/final-fantasy-viii/ps-3847",
    "platform": "PlayStation",
    "score": 9,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Shadow Man",
    "url": "/games/shadow-man/ps-10884",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Hybrid Heaven",
    "url": "/games/hybrid-heaven/n64-2138",
    "platform": "Nintendo 64",
    "score": 7,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Outcast",
    "url": "/games/outcast/pc-3121",
    "platform": "PC",
    "score": 8.5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "AeroWings",
    "url": "/games/aerowings/dc-12028",
    "platform": "Dreamcast",
    "score": 8,
    "genre": "Flight",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Power Stone",
    "url": "/games/power-stone/dc-10637",
    "platform": "Dreamcast",
    "score": 8.7,
    "genre": "Fighting, Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Monaco Grand Prix",
    "url": "/games/monaco-grand-prix/dc-10996",
    "platform": "Dreamcast",
    "score": 7.6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NFL Blitz 2000",
    "url": "/games/nfl-blitz-2000/dc-9981",
    "platform": "Dreamcast",
    "score": 8.3,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "AirForce Delta",
    "url": "/games/airforce-delta/dc-11956",
    "platform": "Dreamcast",
    "score": 8.1,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Frogger [1998]",
    "url": "/games/frogger/gbc-10900",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Centipede",
    "url": "/games/centipede/gbc-11592",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Braveheart",
    "url": "/games/braveheart-805871/pc-11657",
    "platform": "PC",
    "score": 4.2,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Quest for Camelot",
    "url": "/games/quest-for-camelot-167811/gbc-10783",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Re-Volt",
    "url": "/games/re-volt/ps-10894",
    "platform": "PlayStation",
    "score": 6.1,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Shadow Man",
    "url": "/games/shadow-man/n64-1945",
    "platform": "Nintendo 64",
    "score": 9.1,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Gulf War: Operation Desert Hammer",
    "url": "/games/gulf-war-operation-desert-hammer/pc-12819",
    "platform": "PC",
    "score": 3.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Curse You! Red Baron",
    "url": "/games/curse-you-red-baron/pc-12497",
    "platform": "PC",
    "score": 4.1,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Bomberman Fantasy Race",
    "url": "/games/bomberman-fantasy-race/ps-4035",
    "platform": "PlayStation",
    "score": 6.8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Superbike World Championship",
    "url": "/games/superbike-world-championship/pc-10203",
    "platform": "PC",
    "score": 8.3,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Skydive!",
    "url": "/games/skydive/pc-12049",
    "platform": "PC",
    "score": 2.2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "The New Tetris",
    "url": "/games/the-new-tetris/n64-10072",
    "platform": "Nintendo 64",
    "score": 8.8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NCAA Football 2000",
    "url": "/games/ncaa-football-2000/ps-11604",
    "platform": "PlayStation",
    "score": 8.2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Jagged Alliance 2",
    "url": "/games/jagged-alliance-2/pc-3557",
    "platform": "PC",
    "score": 8.5,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Warhammer 40,000: Rites of War",
    "url": "/games/warhammer-40k-rites-of-war/pc-11669",
    "platform": "PC",
    "score": 6.1,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "PenPen TriIcelon",
    "url": "/games/penpen-triicelon-168274/dc-10371",
    "platform": "Dreamcast",
    "score": 6.6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Soul of the Samurai",
    "url": "/games/soul-of-the-samurai/ps-10391",
    "platform": "PlayStation",
    "score": 7.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Sonic Adventure",
    "url": "/games/sonic-adventure/dc-10140",
    "platform": "Dreamcast",
    "score": 8.6,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Flag to Flag",
    "url": "/games/flag-to-flag-1999/dc-10958",
    "platform": "Dreamcast",
    "score": 8.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Tokyo Xtreme Racer",
    "url": "/games/tokyo-xtreme-racer/dc-11901",
    "platform": "Dreamcast",
    "score": 8.8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Hot Wheels: Turbo Racing",
    "url": "/games/hot-wheels-turbo-racing/ps-11638",
    "platform": "PlayStation",
    "score": 6.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Echo Night",
    "url": "/games/echo-night/ps-11507",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Hydro Thunder",
    "url": "/games/hydro-rush/dc-10949",
    "platform": "Dreamcast",
    "score": 8.7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Ready 2 Rumble Boxing",
    "url": "/games/ready-2-rumble-boxing/dc-11165",
    "platform": "Dreamcast",
    "score": 9.1,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Sled Storm",
    "url": "/games/ea-racing-pack-collectors-edition/ps-11637",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "NFL GameDay 2000",
    "url": "/games/nfl-gameday-2000/ps-12798",
    "platform": "PlayStation",
    "score": 8.3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NCAA GameBreaker 2000",
    "url": "/games/ncaa-gamebreaker-2000/ps-12806",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "System Shock 2",
    "url": "/games/system-shock-2/pc-11087",
    "platform": "PC",
    "score": 9,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Madden NFL 2000",
    "url": "/games/madden-nfl-2000/ps-11600",
    "platform": "PlayStation",
    "score": 8.6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Re-Volt",
    "url": "/games/re-volt/pc-10647",
    "platform": "PC",
    "score": 8.8,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Chessmaster II",
    "url": "/games/chessmaster-ii/ps-11800",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Board",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Command & Conquer: Tiberian Sun",
    "url": "/games/command-and-conquer-tiberian-sun/pc-3851",
    "platform": "PC",
    "score": 8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Pac-Man: Special Color Edition",
    "url": "/games/pac-man/gbc-12904",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Tiny Tank: Up Your Arsenal",
    "url": "/games/tiny-tank-up-your-arsenal/ps-3979",
    "platform": "PlayStation",
    "score": 6.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Pac-Man",
    "url": "/games/pac-man/ngpc-12293",
    "platform": "NeoGeo Pocket Color",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Jet Moto 3",
    "url": "/games/jet-moto-3/ps-11682",
    "platform": "PlayStation",
    "score": 8.6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Duke Nukem: Zero Hour",
    "url": "/games/duke-nukem-zero-hour/n64-1965",
    "platform": "Nintendo 64",
    "score": 7.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Drakan: Order of the Flame",
    "url": "/games/drakan-order-of-the-flame/pc-3832",
    "platform": "PC",
    "score": 8.1,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Rat Attack",
    "url": "/games/rat-attack/ps-4002",
    "platform": "PlayStation",
    "score": 5.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Re-Volt",
    "url": "/games/re-volt/n64-1934",
    "platform": "Nintendo 64",
    "score": 4.8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Legacy of Kain: Soul Reaver",
    "url": "/games/legacy-of-kain-soul-reaver/ps-3722",
    "platform": "PlayStation",
    "score": 9.3,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Um Jammer Lammy",
    "url": "/games/um-jammer-lammy/ps-10862",
    "platform": "PlayStation",
    "score": 8.6,
    "genre": "Music, Action",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Chocobo Racing",
    "url": "/games/chocobo-collection/ps-11439",
    "platform": "PlayStation",
    "score": 5.6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NFL Blitz 2000",
    "url": "/games/nfl-blitz-2000/n64-10212",
    "platform": "Nintendo 64",
    "score": 9.2,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Ken Griffey Jr.'s Slugfest",
    "url": "/games/ken-griffey-jrs-slugfest/gbc-12719",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Madden NFL 2000",
    "url": "/games/madden-nfl-2000/n64-11571",
    "platform": "Nintendo 64",
    "score": 8.4,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "WWF Attitude",
    "url": "/games/wwf-attitude/n64-10375",
    "platform": "Nintendo 64",
    "score": 8.7,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Dino Crisis",
    "url": "/games/dino-crisis/ps-11235",
    "platform": "PlayStation",
    "score": 9.2,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Road Rash 64",
    "url": "/games/road-rash-64/n64-3966",
    "platform": "Nintendo 64",
    "score": 7.8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Asteroids [1999]",
    "url": "/games/asteroids/gbc-12024",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Duke Nukem",
    "url": "/games/duke-nukem/gbc-12274",
    "platform": "Game Boy Color",
    "score": 9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "G-Police: Weapons of Justice",
    "url": "/games/g-police-weapons-of-justice/ps-10600",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Yars' Revenge [1999]",
    "url": "/games/yars-revenge-1981/gbc-12717",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Rats!",
    "url": "/games/rats-167808/gbc-10786",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Gallop Racer",
    "url": "/games/gallop-racer/ps-10631",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Championship Motocross Featuring Ricky Carmichael",
    "url": "/games/championship-motocross-featuring-ricky-carmichael/ps-10581",
    "platform": "PlayStation",
    "score": 8.7,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "NHL 2000",
    "url": "/games/nhl-2000/pc-13036",
    "platform": "PC",
    "score": 8.2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Gex: Enter the Gecko",
    "url": "/games/gex-64-enter-the-gecko/gbc-10822",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Battleship [1999]",
    "url": "/games/battleship-1991/gbc-10771",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Disciples: Sacred Lands",
    "url": "/games/disciples-sacred-lands/pc-12718",
    "platform": "PC",
    "score": 8.5,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Monaco Grand Prix",
    "url": "/games/monaco-grand-prix/n64-5485",
    "platform": "Nintendo 64",
    "score": 8.4,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Army Men: Sarge's Heroes",
    "url": "/games/army-men-gold/n64-1944",
    "platform": "Nintendo 64",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Vegas Games 2000",
    "url": "/games/vegas-games-2000/ps-11536",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Silver",
    "url": "/games/silver/pc-11228",
    "platform": "PC",
    "score": 7.1,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NHL FaceOff 2000",
    "url": "/games/nhl-faceoff-2000/ps-12003",
    "platform": "PlayStation",
    "score": 6.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Marvel vs. Capcom: Clash of Super Heroes",
    "url": "/games/marvel-vs-capcom-clash-of-super-heroes/dc-9967",
    "platform": "Dreamcast",
    "score": 8.8,
    "genre": "Fighting",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Panzer General 3D Assault",
    "url": "/games/panzer-general-3d-assault/pc-13200",
    "platform": "PC",
    "score": 7.6,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Frogger",
    "url": "/games/frogger/gcom-13197",
    "platform": "Game.Com",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "WCW Mayhem",
    "url": "/games/wcw-mayhem/n64-1911",
    "platform": "Nintendo 64",
    "score": 8.5,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Las Vegas Cool Hand",
    "url": "/games/las-vegas-cool-hand/gbc-11630",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "Casino",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Prince of Persia 3D",
    "url": "/games/arabian-nights-prince-of-persia/pc-11696",
    "platform": "PC",
    "score": 8.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NFL 2K",
    "url": "/games/nfl-2k/dc-10960",
    "platform": "Dreamcast",
    "score": 9.7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Tom Clancy's Rainbow Six: Rogue Spear",
    "url": "/games/tom-clancys-counter-terrorism-classics-pack/pc-11641",
    "platform": "PC",
    "score": 9.2,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "WipEout 3",
    "url": "/games/wipeout-3/ps-11070",
    "platform": "PlayStation",
    "score": 9.1,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Pandora's Box",
    "url": "/games/pandoras-box/pc-11881",
    "platform": "PC",
    "score": 7.6,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Omega Boost",
    "url": "/games/omega-boost/ps-11434",
    "platform": "PlayStation",
    "score": 6.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NFL Fever 2000",
    "url": "/games/microsoft-nfl-fever-2000/pc-11743",
    "platform": "PC",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Hot Wheels: Turbo Racing",
    "url": "/games/hot-wheels-turbo-racing/n64-11639",
    "platform": "Nintendo 64",
    "score": 7.7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Quake II",
    "url": "/games/jake2/ps-10446",
    "platform": "PlayStation",
    "score": 8.7,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Thousand Arms",
    "url": "/games/thousand-arms-141887/ps-11806",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Demolition Racer",
    "url": "/games/demolition-racer/ps-11323",
    "platform": "PlayStation",
    "score": 7.8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "WCW Mayhem",
    "url": "/games/wcw-mayhem/ps-11485",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Rage of Mages 2: Necromancer",
    "url": "/games/rage-of-mages-2-necromancer/pc-11336",
    "platform": "PC",
    "score": 4,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "BattleTanx: Global Assault",
    "url": "/games/battletanx-global-assault/n64-10980",
    "platform": "Nintendo 64",
    "score": 8.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Lexis",
    "url": "/games/lexis/lynx-13235",
    "platform": "Lynx",
    "score": 5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Puzzle Link",
    "url": "/games/puzzle-link/ngpc-12971",
    "platform": "NeoGeo Pocket Color",
    "score": 9,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Puyo Pop",
    "url": "/games/puyo-pop/ngpc-12970",
    "platform": "NeoGeo Pocket Color",
    "score": 9,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Fly!",
    "url": "/games/737-for-fly/pc-11649",
    "platform": "PC",
    "score": 4.8,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Antz",
    "url": "/games/antz/gbc-11890",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Mario Golf [Game Boy Color]",
    "url": "/games/mario-golf-gb/gbc-12206",
    "platform": "Game Boy Color",
    "score": 10,
    "genre": "Sports, Action",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Star Wars: Episode I: The Phantom Menace",
    "url": "/games/star-wars-episode-i-the-phantom-menace/ps-11410",
    "platform": "PlayStation",
    "score": 6.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Xena: Warrior Princess",
    "url": "/games/xena-warrior-princess/ps-11565",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Expert Pool",
    "url": "/games/expert-pool/pc-10177",
    "platform": "PC",
    "score": 8.3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "V-Rally Edition '99",
    "url": "/games/v-rally-edition-99/n64-9931",
    "platform": "Nintendo 64",
    "score": 5.9,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NBA Inside Drive 2000",
    "url": "/games/nba-inside-drive-2000/pc-11741",
    "platform": "PC",
    "score": 6.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Sinistar: Unleashed",
    "url": "/games/sinistar-unleashed/pc-12107",
    "platform": "PC",
    "score": 7.5,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Tonic Trouble",
    "url": "/games/tonic-trouble/n64-1967",
    "platform": "Nintendo 64",
    "score": 5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Ponx",
    "url": "/games/ponx/lynx-11996",
    "platform": "Lynx",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Monopoly [1999]",
    "url": "/games/monopoly-1999/gbc-10770",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Board",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Spawn",
    "url": "/games/spawn/gbc-12920",
    "platform": "Game Boy Color",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Goemon's Great Adventure",
    "url": "/games/ganbare-goemon-2-kiteretsu-shogun-magginesu/n64-3758",
    "platform": "Nintendo 64",
    "score": 8,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Motocross Maniacs 2",
    "url": "/games/motocross-maniacs-2/gbc-12200",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "The Chessmaster 7000",
    "url": "/games/the-chessmaster-7000/pc-13220",
    "platform": "PC",
    "score": 8.1,
    "genre": "Board",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Age of Empires II: The Age of Kings",
    "url": "/games/age-of-empires-ii/pc-11531",
    "platform": "PC",
    "score": 8.8,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Jet Force Gemini",
    "url": "/games/jet-force-gemini/n64-3862",
    "platform": "Nintendo 64",
    "score": 8.1,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Pocket Bowling",
    "url": "/games/pocket-bowling/gbc-13189",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Harley-Davidson: Race Across America",
    "url": "/games/harley-davidson-race-across-america/pc-13192",
    "platform": "PC",
    "score": 4.8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Cutthroats: Terror on the High Seas",
    "url": "/games/cutthroats-terror-on-the-high-seas/pc-8451",
    "platform": "PC",
    "score": 6.2,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "10-Pin Bowling",
    "url": "/games/10-pin-bowling/gbc-13190",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NHL 2000",
    "url": "/games/nhl-2000/ps-11605",
    "platform": "PlayStation",
    "score": 9.1,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Driver",
    "url": "/games/driver/pc-3933",
    "platform": "PC",
    "score": 8.9,
    "genre": "Racing, Action",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Monster Rancher 2",
    "url": "/games/monster-rancher-2/ps-11227",
    "platform": "PlayStation",
    "score": 8.8,
    "genre": "Simulation",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Final Fantasy Anthology",
    "url": "/games/final-fantasy-anthology/ps-11674",
    "platform": "PlayStation",
    "score": 9,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Destruction Derby 64",
    "url": "/games/destruction-derby/n64-1976",
    "platform": "Nintendo 64",
    "score": 6.7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Homeworld",
    "url": "/games/homeworld/pc-3786",
    "platform": "PC",
    "score": 9.5,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Chase H.Q. Secret Police",
    "url": "/games/chase-hq-secret-police/gbc-12315",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "SEGA Bass Fishing",
    "url": "/games/sega-bass-fishing/dc-10957",
    "platform": "Dreamcast",
    "score": 8.5,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "VMU Football",
    "url": "/games/vmu-football/dc-vmu-13181",
    "platform": "Dreamcast VMU",
    "score": 3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Virtua Fighter 3tb",
    "url": "/games/virtua-fighter-3/dc-9976",
    "platform": "Dreamcast",
    "score": 8.7,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "FreeSpace 2",
    "url": "/games/freespace-2/pc-12033",
    "platform": "PC",
    "score": 8.9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Gauntlet Legends",
    "url": "/games/gauntlet-legends/n64-2192",
    "platform": "Nintendo 64",
    "score": 7.7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Ted Nugent: Wild Hunting Adventure",
    "url": "/games/ted-nugent-wild-hunting-adventure-140602/pc-12841",
    "platform": "PC",
    "score": 7.4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Suzuki Alstare Racing",
    "url": "/games/suzuki-alstare-racing/dc-11926",
    "platform": "Dreamcast",
    "score": 4,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Toy Story 2: Buzz Lightyear to the Rescue",
    "url": "/games/toy-story-2/n64-11970",
    "platform": "Nintendo 64",
    "score": 5.9,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Ready 2 Rumble Boxing",
    "url": "/games/ready-2-rumble-boxing/n64-11100",
    "platform": "Nintendo 64",
    "score": 7.8,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Pharaoh",
    "url": "/games/pharaoh/pc-12061",
    "platform": "PC",
    "score": 9,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Bassmasters Classic",
    "url": "/games/bassmasters-classic/gbc-12089",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Omikron: The Nomad Soul",
    "url": "/games/omikron-the-nomad-soul/pc-10509",
    "platform": "PC",
    "score": 8.5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Clock Tower 2: The Struggle Within",
    "url": "/games/clock-tower-2-the-struggle-within/ps-10438",
    "platform": "PlayStation",
    "score": 4.8,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Septerra Core: Legacy of the Creator",
    "url": "/games/septerra-core-legacy-of-the-creator/pc-3129",
    "platform": "PC",
    "score": 8,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Pong: The Next Level",
    "url": "/games/pong-the-next-level/pc-13321",
    "platform": "PC",
    "score": 7.4,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Resident Evil 3: Nemesis",
    "url": "/games/resident-evil-3-nemesis/ps-11482",
    "platform": "PlayStation",
    "score": 9.4,
    "genre": "Action, Adventure",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "You Don't Know Jack! [1999]",
    "url": "/games/you-dont-know-jack-2001-811114/ps-10529",
    "platform": "PlayStation",
    "score": 8.2,
    "genre": "Trivia",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "LEGO Racers",
    "url": "/games/lego-racers/n64-1997",
    "platform": "Nintendo 64",
    "score": 7.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Suikoden II",
    "url": "/games/suikoden-ii/ps-10547",
    "platform": "PlayStation",
    "score": 9,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Nations: WWII Fighter Command",
    "url": "/games/nations-wwii-fighter-command/pc-9962",
    "platform": "PC",
    "score": 6.8,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Tail Concerto",
    "url": "/games/tail-concerto-141885/ps-3754",
    "platform": "PlayStation",
    "score": 7.2,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Psychic Force 2012",
    "url": "/games/psychic-force-2/dc-10993",
    "platform": "Dreamcast",
    "score": 6.9,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "WWF Attitude",
    "url": "/games/wwf-attitude/dc-12559",
    "platform": "Dreamcast",
    "score": 8,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Tasmanian Devil: Munching Madness",
    "url": "/games/tasmanian-devil-munching-madness/gbc-12134",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Langrisser Millenium",
    "url": "/games/langrisser-millenium/dc-13164",
    "platform": "Dreamcast",
    "score": 5.5,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Rippin' Riders Snowboarding",
    "url": "/games/cool-riders/dc-11005",
    "platform": "Dreamcast",
    "score": 7.3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "FIFA 2000 Major League Soccer",
    "url": "/games/fifa-2000-major-league-soccer/pc-11691",
    "platform": "PC",
    "score": 8.8,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Sid Meier's Alien Crossfire",
    "url": "/games/sid-meiers-alien-crossfire/pc-13414",
    "platform": "PC",
    "score": 8.7,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Pocket Bomberman",
    "url": "/games/pocket-bomberman/gbc-5494",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "The King of Fighters: Dream Match 1999",
    "url": "/games/neogeo-online-collection-vol-7-the-king-of-fighters-nests-version/dc-11947",
    "platform": "Dreamcast",
    "score": 8.4,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Earthworm Jim 3D",
    "url": "/games/earthworm-jim-3d/n64-1970",
    "platform": "Nintendo 64",
    "score": 7.3,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "R-Type DX",
    "url": "/games/r-type-dx/gbc-12101",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Armored Fist 3",
    "url": "/games/armored-fist-3/pc-11688",
    "platform": "PC",
    "score": 6.9,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Trickstyle",
    "url": "/games/trickstyle-810604/pc-11656",
    "platform": "PC",
    "score": 8.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "A Collection of Intellivision Classic Games",
    "url": "/games/a-collection-of-intellivision-classic-games/ps-12124",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Poker Night with David Sklansky",
    "url": "/games/poker-night-with-david-sklansky/pc-13326",
    "platform": "PC",
    "score": 6.4,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Ms. Pac-Man",
    "url": "/games/ms-pac-man/gbc-12935",
    "platform": "Game Boy Color",
    "score": 9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Revenant",
    "url": "/games/revenant-139566/pc-10364",
    "platform": "PC",
    "score": 8.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Madden NFL 2000",
    "url": "/games/madden-nfl-2000/gbc-12083",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Paperboy (2000)",
    "url": "/games/paperboy-2000/n64-572",
    "platform": "Nintendo 64",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Ballistic",
    "url": "/games/ballistic/gbc-12579",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NHL Championship 2000",
    "url": "/games/nhl-championship-2000/ps-11676",
    "platform": "PlayStation",
    "score": 9.1,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Rising Zan: The Samurai Gunman",
    "url": "/games/rising-zan-the-samurai-gunman/ps-11472",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Space Invaders",
    "url": "/games/space-invaders/ps-11496",
    "platform": "PlayStation",
    "score": 7.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Spy Hunter / Moon Patrol",
    "url": "/games/spy-hunter-moon-patrol/gbc-13296",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Extreme Wintersports",
    "url": "/games/extreme-wintersports/pc-13316",
    "platform": "PC",
    "score": 3.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Logical",
    "url": "/games/logical/gbc-10769",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Knockout Kings 2000",
    "url": "/games/knockout-kings-2000/n64-11588",
    "platform": "Nintendo 64",
    "score": 6.7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "South Park",
    "url": "/games/south-park/ps-11537",
    "platform": "PlayStation",
    "score": 2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Tom and Jerry",
    "url": "/games/tom-and-jerry/gbc-12194",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "WinBack: Covert Operations",
    "url": "/games/winback-covert-operations/n64-3937",
    "platform": "Nintendo 64",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Tony Hawk's Pro Skater",
    "url": "/games/tony-hawks-pro-skater/ps-11132",
    "platform": "PlayStation",
    "score": 9.4,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Hole in One Golf",
    "url": "/games/hole-in-one-golf-167826/gbc-11892",
    "platform": "Game Boy Color",
    "score": 3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Pokemon Yellow: Special Pikachu Edition",
    "url": "/games/pokemon-yellow-special-pikachu-edition/gb-12045",
    "platform": "Game Boy",
    "score": 10,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Flight Unlimited III",
    "url": "/games/flight-unlimited-iii/pc-10979",
    "platform": "PC",
    "score": 9,
    "genre": "Simulation",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "AMA Superbike",
    "url": "/games/ama-superbike/pc-13202",
    "platform": "PC",
    "score": 4.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NBA 2K",
    "url": "/games/nba-2k/dc-9970",
    "platform": "Dreamcast",
    "score": 9.2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "RollerCoaster Tycoon: Corkscrew Follies",
    "url": "/games/roller-coaster-tycoon-deluxe-jewel-case-edition/pc-13462",
    "platform": "PC",
    "score": 7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Turok: Rage Wars",
    "url": "/games/turok-rage-wars/n64-10823",
    "platform": "Nintendo 64",
    "score": 8.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Resident Evil 2 [1998]",
    "url": "/games/resident-evil-2/n64-10798",
    "platform": "Nintendo 64",
    "score": 9.1,
    "genre": "Action, Adventure",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "WWF Wrestlemania 2000",
    "url": "/games/wwf-wrestlemania-2000/n64-1962",
    "platform": "Nintendo 64",
    "score": 8.9,
    "genre": "Wrestling",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Shadow Company: Left for Dead",
    "url": "/games/shadow-company-left-for-dead-139869/pc-10194",
    "platform": "PC",
    "score": 7.3,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Toy Commander",
    "url": "/games/toy-commander-140593/dc-11900",
    "platform": "Dreamcast",
    "score": 8.9,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Pong: The Next Level",
    "url": "/games/pong-the-next-level/ps-11431",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Tanktics",
    "url": "/games/tanktics/pc-11666",
    "platform": "PC",
    "score": 3.5,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Nightlong: Union City Conspiracy",
    "url": "/games/nightlong-union-city-conspiracy/pc-10449",
    "platform": "PC",
    "score": 6.8,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Grandia",
    "url": "/games/grandia/ps-12007",
    "platform": "PlayStation",
    "score": 9,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "007: Tomorrow Never Dies",
    "url": "/games/007-tomorrow-never-dies/ps-2310",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "SuperCross Circuit",
    "url": "/games/supercross-circuit/ps-13229",
    "platform": "PlayStation",
    "score": 5.8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Sim Theme Park",
    "url": "/games/sim-theme-park/pc-12060",
    "platform": "PC",
    "score": 8.4,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Rayman 2: The Great Escape",
    "url": "/games/rayman-2-revolution/pc-10732",
    "platform": "PC",
    "score": 9.2,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "The X-Files: The Game",
    "url": "/games/the-x-files-the-game/ps-12716",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NFL Blitz 2000",
    "url": "/games/nfl-blitz-2000/pc-13473",
    "platform": "PC",
    "score": 8,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Rayman 2: The Great Escape",
    "url": "/games/rayman-2-revolution/n64-5489",
    "platform": "Nintendo 64",
    "score": 9,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Rocket: Robot on Wheels",
    "url": "/games/rocket-robot-on-wheels/n64-11736",
    "platform": "Nintendo 64",
    "score": 9,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "SEGA Rally 2: Sega Rally Championship",
    "url": "/games/sega-rally-2-sega-rally-championship/dc-9972",
    "platform": "Dreamcast",
    "score": 9,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Tom Clancy's Rainbow Six",
    "url": "/games/tom-clancys-rainbow-six/n64-10587",
    "platform": "Nintendo 64",
    "score": 8.5,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NBA Basketball 2000",
    "url": "/games/nba-basketball-2000/ps-11678",
    "platform": "PlayStation",
    "score": 7.2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Game & Watch Gallery 2",
    "url": "/games/game-watch-gallery-2/gbc-10563",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Delta Force 2",
    "url": "/games/delta-force-2/pc-11686",
    "platform": "PC",
    "score": 7.5,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NCAA Final Four 2000",
    "url": "/games/ncaa-final-four-2000/ps-13366",
    "platform": "PlayStation",
    "score": 7.9,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Trick N' Snowboarder",
    "url": "/games/trick-n-snowboarder/ps-11670",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Ballistic",
    "url": "/games/ballistic/ps-12540",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Knockout Kings 2000",
    "url": "/games/knockout-kings-2000/ps-11602",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Space Invaders",
    "url": "/games/space-invaders/gbc-12328",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "FIFA 2000 Major League Soccer",
    "url": "/games/fifa-2000-major-league-soccer/ps-11607",
    "platform": "PlayStation",
    "score": 9.1,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Dynamite Cop",
    "url": "/games/dynamite-cop/dc-11897",
    "platform": "Dreamcast",
    "score": 4.1,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Speed Devils",
    "url": "/games/speed-devils/dc-11902",
    "platform": "Dreamcast",
    "score": 7.9,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NASCAR 2000",
    "url": "/games/nascar-2000/ps-11603",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Crash Team Racing",
    "url": "/games/crash-team-racing/ps-11595",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Racing, Action",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Warpath: Jurassic Park",
    "url": "/games/warpath-jurassic-park/ps-11493",
    "platform": "PlayStation",
    "score": 5.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Medal of Honor [1999]",
    "url": "/games/medal-of-honor-1999/ps-11925",
    "platform": "PlayStation",
    "score": 9.3,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Spyro 2: Ripto's Rage",
    "url": "/games/spyro-2-riptos-rage/ps-11598",
    "platform": "PlayStation",
    "score": 8.8,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Grand Theft Auto II",
    "url": "/games/grand-theft-auto-ii/pc-11648",
    "platform": "PC",
    "score": 7.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Jane's USAF [1999]",
    "url": "/games/janes-usaf-1999/pc-11527",
    "platform": "PC",
    "score": 8.2,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Test Drive Off-Road 3",
    "url": "/games/test-drive-off-road-3/ps-12542",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Spec Ops II: Green Berets",
    "url": "/games/spec-ops-ii-green-berets/pc-12069",
    "platform": "PC",
    "score": 5.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Army Men: Air Attack",
    "url": "/games/army-men-air-attack/ps-11534",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Soul Fighter",
    "url": "/games/soul-fighter-168269/dc-11790",
    "platform": "Dreamcast",
    "score": 2.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Twisted Metal 4",
    "url": "/games/twisted-metal-4/ps-11680",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Nocturne",
    "url": "/games/nocturne/pc-11644",
    "platform": "PC",
    "score": 7.4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Test Drive 6",
    "url": "/games/test-drive-6/ps-11889",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Centipede [1999]",
    "url": "/games/centipede-1999/dc-12812",
    "platform": "Dreamcast",
    "score": 2.9,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "South Park: Chef's Luv Shack",
    "url": "/games/south-park-chefs-luv-shack/dc-13159",
    "platform": "Dreamcast",
    "score": 4.3,
    "genre": "Other",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "The Next Tetris",
    "url": "/games/the-next-tetris/pc-13361",
    "platform": "PC",
    "score": 6.5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Army Men: Toys in Space",
    "url": "/games/army-men-toys-in-space/pc-13221",
    "platform": "PC",
    "score": 4.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Gex 3: Deep Cover Gecko",
    "url": "/games/gex-3-deep-cover-gecko/n64-10575",
    "platform": "Nintendo 64",
    "score": 5.8,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Grand Theft Auto II",
    "url": "/games/grand-theft-auto-ii/ps-12390",
    "platform": "PlayStation",
    "score": 6.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Metal Gear Solid: VR Missions",
    "url": "/games/metal-gear-solid-vr-missions/ps-11591",
    "platform": "PlayStation",
    "score": 7.1,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NASCAR Racing 3",
    "url": "/games/nascar-racing-3/pc-11160",
    "platform": "PC",
    "score": 9.2,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "UEFA Striker",
    "url": "/games/uefa-striker/dc-13287",
    "platform": "Dreamcast",
    "score": 7.9,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Plus Plum",
    "url": "/games/plus-plum/dc-13323",
    "platform": "Dreamcast",
    "score": 5.9,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Beauty and the Beast: A Board Game Adventure",
    "url": "/games/beauty-and-the-beast-a-board-game-adventure/gbc-12301",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Party",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Earthworm Jim: Menace 2 the Galaxy",
    "url": "/games/earthworm-jim-menace-2-the-galaxy/gbc-12001",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "The Chronicles of Jaruu Tenk",
    "url": "/games/the-chronicles-of-jaruu-tenk/pc-13452",
    "platform": "PC",
    "score": 6,
    "genre": "Virtual Pet",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Toy Story 2",
    "url": "/games/toy-story-2/gbc-12027",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NBA Showtime: NBA on NBC",
    "url": "/games/nba-showtime-nba-on-nbc/n64-11969",
    "platform": "Nintendo 64",
    "score": 7.1,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "CyberTiger",
    "url": "/games/cyber-tiger/ps-11601",
    "platform": "PlayStation",
    "score": 5.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NBA Showtime: NBA on NBC",
    "url": "/games/nba-showtime-nba-on-nbc/dc-12037",
    "platform": "Dreamcast",
    "score": 8.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NERF Arena Blast",
    "url": "/games/nerf-arena-blast/pc-12982",
    "platform": "PC",
    "score": 8.8,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Axis & Allies: Iron Blitz",
    "url": "/games/axis-allies-iron-blitz/pc-12946",
    "platform": "PC",
    "score": 7.7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Slave Zero",
    "url": "/games/slave-zero/pc-3932",
    "platform": "PC",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NBA Live 2000",
    "url": "/games/ea-sports-mania-pack-2/n64-11619",
    "platform": "Nintendo 64",
    "score": 7.1,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Supercross 2000",
    "url": "/games/supercross-2000/ps-11713",
    "platform": "PlayStation",
    "score": 4.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "LEGO Racers",
    "url": "/games/lego-racers/n64-1997",
    "platform": "Nintendo 64",
    "score": 7.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Seven Kingdoms II: The Fryhtan Wars",
    "url": "/games/seven-kingdoms-ii-the-fryhtan-wars/pc-9949",
    "platform": "PC",
    "score": 8.6,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Cool Boarders 4",
    "url": "/games/cool-boarders-4/ps-13365",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Slave Zero",
    "url": "/games/slave-zero/dc-11968",
    "platform": "Dreamcast",
    "score": 3.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Heroes of Might and Magic III: Armageddon's Blade",
    "url": "/games/heroes-of-might-and-magic-iii-armageddons-blade/pc-13406",
    "platform": "PC",
    "score": 9,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Pac-Man World 20th Anniversary",
    "url": "/games/pac-man-world-20th-anniversary/ps-3887",
    "platform": "PlayStation",
    "score": 7.8,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Space Griffon",
    "url": "/games/space-griffon/dc-11022",
    "platform": "Dreamcast",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "South Park: Chef's Luv Shack",
    "url": "/games/south-park-chefs-luv-shack/n64-11792",
    "platform": "Nintendo 64",
    "score": 5.3,
    "genre": "Trivia",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Links LS 2000",
    "url": "/games/atari-arcade-collection/pc-12715",
    "platform": "PC",
    "score": 8.2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "MTV Sports Snowboarding",
    "url": "/games/mtv-sports-snowboarding/ps-13432",
    "platform": "PlayStation",
    "score": 6.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "The Smurfs [1999]",
    "url": "/games/the-smurfs-1999/ps-12581",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Godzilla: The Series",
    "url": "/games/godzilla-the-series/gbc-11924",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Who Wants To Be A Millionaire? [1999]",
    "url": "/games/who-wants-to-be-a-millionaire-1999/pc-13563",
    "platform": "PC",
    "score": 6.2,
    "genre": "Trivia",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Arcade Party Pak",
    "url": "/games/arcade-party-pak/ps-11812",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Action, Compilation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Ultima IX: Ascension",
    "url": "/games/ultima-ix-ascension/pc-11753",
    "platform": "PC",
    "score": 6.2,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Tomb Raider: The Last Revelation",
    "url": "/games/tomb-raider-the-last-revelation/pc-12059",
    "platform": "PC",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Quake III: Arena",
    "url": "/games/quake-arena-arcade/pc-10794",
    "platform": "PC",
    "score": 9.3,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Armada [1999]",
    "url": "/games/armada-1999/dc-12138",
    "platform": "Dreamcast",
    "score": 9.1,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Star Trek: Hidden Evil",
    "url": "/games/star-trek-hidden-evil/pc-12126",
    "platform": "PC",
    "score": 4,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "V-Rally 2 Presented by Need for Speed",
    "url": "/games/v-rally-2-presented-by-need-for-speed/ps-12866",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Mickey's Racing Adventure",
    "url": "/games/mickeys-racing-adventure/gbc-12219",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Ready 2 Rumble Boxing",
    "url": "/games/ready-2-rumble-boxing/ps-11103",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Game & Watch Gallery 3",
    "url": "/games/game-watch-gallery-3/gbc-12939",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Puzzle Master",
    "url": "/games/puzzle-master-167813/gbc-12326",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Castlevania: Legacy of Darkness",
    "url": "/games/castlevania-legacy-of-darkness/n64-11971",
    "platform": "Nintendo 64",
    "score": 6.8,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Hype: The Time Quest",
    "url": "/games/hype-the-time-quest/pc-11880",
    "platform": "PC",
    "score": 7.8,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Tonka Raceway",
    "url": "/games/tonka-raceway/gbc-13425",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NBA Jam 2000",
    "url": "/games/nba-jam-2000/n64-10825",
    "platform": "Nintendo 64",
    "score": 7.1,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Babe and Friends",
    "url": "/games/babe-and-friends/gbc-12011",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Abomination: The Nemesis Project",
    "url": "/games/abomination-the-nemesis-project/pc-11551",
    "platform": "PC",
    "score": 5,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Amerzone: The Explorer's Legacy",
    "url": "/games/amerzone-the-explorers-legacy/pc-12127",
    "platform": "PC",
    "score": 5.5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Toy Story 2: Buzz Lightyear to the Rescue!",
    "url": "/games/toy-story-2/ps-11697",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Avalon Hill's Diplomacy",
    "url": "/games/avalon-hills-diplomacy-139492/pc-11993",
    "platform": "PC",
    "score": 6.6,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Test Drive 6",
    "url": "/games/test-drive-6/gbc-12216",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Mission: Impossible",
    "url": "/games/mission-impossible-808345/ps-11739",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NBA 3 on 3 Featuring Kobe Bryant",
    "url": "/games/nba-3-on-3-featuring-kobe-bryant/gbc-12218",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Re-Volt",
    "url": "/games/re-volt/dc-13219",
    "platform": "Dreamcast",
    "score": 8.7,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Close Combat IV: Battle of the Bulge",
    "url": "/games/close-combat-iv-battle-of-the-bulge/pc-12064",
    "platform": "PC",
    "score": 8.4,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NBA Live 2000",
    "url": "/games/ea-sports-mania-pack-2/pc-11692",
    "platform": "PC",
    "score": 9.2,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Star Wars: Episode I: Racer",
    "url": "/games/star-wars-episode-i-racer/gbc-12211",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Hangsim",
    "url": "/games/hangsim/pc-12910",
    "platform": "PC",
    "score": 7,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "WWF Wrestlemania 2000",
    "url": "/games/wwf-wrestlemania-2000/gbc-12391",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "SWAT 3: Close Quarters Battle",
    "url": "/games/swat-3-tactical-game-of-the-year-edition/pc-11663",
    "platform": "PC",
    "score": 8.6,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Namco Museum 64",
    "url": "/games/namco-museum-64/n64-13076",
    "platform": "Nintendo 64",
    "score": 5.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Wu-Tang: Shaolin Style",
    "url": "/games/wu-tang-shaolin-style-139728/ps-11695",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Akuma: Demon Spawn",
    "url": "/games/akuma-demon-spawn/pc-13492",
    "platform": "PC",
    "score": 3.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Interstate '82",
    "url": "/games/interstate-82/pc-9921",
    "platform": "PC",
    "score": 6.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Grand Theft Auto",
    "url": "/games/grand-theft-auto-1/gbc-5473",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Evel Knievel [1999]",
    "url": "/games/evel-knievel/gbc-12940",
    "platform": "Game Boy Color",
    "score": 2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NFL Quarterback Club 2000",
    "url": "/games/nfl-quarterback-club-2000/dc-12493",
    "platform": "Dreamcast",
    "score": 2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Tiny Toon Adventure: Toonenstein -- Dare to Scare",
    "url": "/games/tiny-toon-adventure-toonenstein-dare-to-scare/ps-13548",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Sonic The Hedgehog: Pocket Adventure",
    "url": "/games/sonic-the-hedgehog-pocket-adventure/ngpc-12670",
    "platform": "NeoGeo Pocket Color",
    "score": 10,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Unreal Tournament [1999]",
    "url": "/games/unreal-tournament/pc-10821",
    "platform": "PC",
    "score": 9.6,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Odium",
    "url": "/games/odium/pc-11494",
    "platform": "PC",
    "score": 7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "South Park: Chef's Luv Shack",
    "url": "/games/south-park-chefs-luv-shack/ps-13390",
    "platform": "PlayStation",
    "score": 2.1,
    "genre": "Trivia",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Xena: Warrior Princess -- The Talisman of Fate",
    "url": "/games/xena-warrior-princess-the-talisman-of-fate/n64-10189",
    "platform": "Nintendo 64",
    "score": 7.4,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Jeff Gordon XS Racing",
    "url": "/games/jeff-gordon-xs-racing/gbc-12198",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Half-Life: Opposing Force",
    "url": "/games/half-life-opposing-force/pc-11667",
    "platform": "PC",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "F-1 World Grand Prix",
    "url": "/games/f-1-world-grand-prix/dc-13237",
    "platform": "Dreamcast",
    "score": 8.6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NBA Courtside 2: Featuring Kobe Bryant",
    "url": "/games/nba-courtside-2-featuring-kobe-bryant/n64-11539",
    "platform": "Nintendo 64",
    "score": 9.2,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Donkey Kong 64",
    "url": "/games/donkey-kong-64/n64-607",
    "platform": "Nintendo 64",
    "score": 9,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Caesars Palace II",
    "url": "/games/caesars-palace-1-2/gbc-13469",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Shadow Man",
    "url": "/games/shadow-man/dc-12987",
    "platform": "Dreamcast",
    "score": 8.5,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Indiana Jones and the Infernal Machine",
    "url": "/games/indiana-jones-and-the-infernal-machine/pc-11694",
    "platform": "PC",
    "score": 7.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Top Gear Rally 2",
    "url": "/games/top-gear-rally-2/n64-10793",
    "platform": "Nintendo 64",
    "score": 8.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Age of Wonders",
    "url": "/games/age-of-wonders/pc-11983",
    "platform": "PC",
    "score": 8.8,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "NBA Live 2000",
    "url": "/games/ea-sports-mania-pack-2/ps-11606",
    "platform": "PlayStation",
    "score": 8.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Worms Armageddon",
    "url": "/games/worms-armageddon/dc-12811",
    "platform": "Dreamcast",
    "score": 9,
    "genre": "Puzzle",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Thrasher: Skate and Destroy",
    "url": "/games/thrasher-skate-and-destroy/ps-11885",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Gabriel Knight III: Blood of the Sacred, Blood of the Damned",
    "url": "/games/gabriel-knight-iii-blood-of-the-sacred-blood-of-the-damned/pc-11944",
    "platform": "PC",
    "score": 8.3,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Mr. Nutz",
    "url": "/games/mr-nutz/gbc-12580",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "The Wheel of Time",
    "url": "/games/the-wheel-of-time/pc-2316",
    "platform": "PC",
    "score": 7.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Nuclear Strike",
    "url": "/games/nuclear-strike/n64-2000",
    "platform": "Nintendo 64",
    "score": 7.1,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Supercross 2000",
    "url": "/games/supercross-2000/n64-11672",
    "platform": "Nintendo 64",
    "score": 8.1,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Billy Bob's Huntin' 'n Fishin'",
    "url": "/games/billy-bobs-huntin-n-fishin/gbc-13034",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Incoming",
    "url": "/games/incoming/dc-10382",
    "platform": "Dreamcast",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Armorines: Project S.W.A.R.M.",
    "url": "/games/armorines-project-swarm-805472/n64-10826",
    "platform": "Nintendo 64",
    "score": 5.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Marble Madness",
    "url": "/games/marble-madness/gbc-12222",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Boombots",
    "url": "/games/boombots/ps-13397",
    "platform": "PlayStation",
    "score": 3.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Rampart",
    "url": "/games/rampart/gbc-12320",
    "platform": "Game Boy Color",
    "score": 9,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Tomb Raider: The Last Revelation",
    "url": "/games/tomb-raider-the-last-revelation/ps-11882",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Panzer Elite",
    "url": "/games/panzer-elite/pc-9978",
    "platform": "PC",
    "score": 5.3,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Colt's Wild West Shootout",
    "url": "/games/colts-wild-west-shootout/pc-13662",
    "platform": "PC",
    "score": 3.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Rubik's Games",
    "url": "/games/rubiks-games/pc-13663",
    "platform": "PC",
    "score": 7.5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Glover",
    "url": "/games/glover/ps-3903",
    "platform": "PlayStation",
    "score": 2.6,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Broken Sword II: The Smoking Mirror",
    "url": "/games/broken-sword-ii-the-smoking-mirror/ps-9681",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Dune 2000",
    "url": "/games/dune-2000/ps-12016",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Tom Clancy's Rainbow Six",
    "url": "/games/tom-clancys-rainbow-six/ps-12260",
    "platform": "PlayStation",
    "score": 3.8,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Urban Chaos",
    "url": "/games/urban-chaos/pc-11440",
    "platform": "PC",
    "score": 8.7,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Harvest Moon 64",
    "url": "/games/harvest-moon-64/n64-1910",
    "platform": "Nintendo 64",
    "score": 8.2,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Star Wars: Pit Droids",
    "url": "/games/star-wars-pit-droids/pc-13630",
    "platform": "PC",
    "score": 7.5,
    "genre": "Educational, Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Vigilante 8: Second Offense",
    "url": "/games/vigilante-8-second-offense/dc-11945",
    "platform": "Dreamcast",
    "score": 8.6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NCAA March Madness 2000",
    "url": "/games/ncaa-march-madness-2000/ps-13463",
    "platform": "PlayStation",
    "score": 9.1,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Armorines: Project S.W.A.R.M.",
    "url": "/games/armorines-project-swarm-805472/gbc-13195",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Asteroids Hyper 64",
    "url": "/games/asteroids-hyper-64/n64-427",
    "platform": "Nintendo 64",
    "score": 6.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Tonic Trouble",
    "url": "/games/tonic-trouble/pc-9368",
    "platform": "PC",
    "score": 6.3,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Touring Car Challenge",
    "url": "/games/touring-car-challenge/pc-13588",
    "platform": "PC",
    "score": 5.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Godzilla Generations Maximum Impact",
    "url": "/games/godzilla-generations-maximum-impact/dc-13276",
    "platform": "Dreamcast",
    "score": 2.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Black Bass with Blue Marlin",
    "url": "/games/black-bass-with-blue-marlin/ps-10436",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "SNK vs. Capcom: Card Fighter's Clash",
    "url": "/games/snk-vs-capcom-card-fighters-clash/ngpc-12974",
    "platform": "NeoGeo Pocket Color",
    "score": 9,
    "genre": "Card, Battle",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Konami Arcade Classics",
    "url": "/games/konami-arcade-classics/ps-11714",
    "platform": "PlayStation",
    "score": 4.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Seventh Cross",
    "url": "/games/seventh-cross-168270/dc-9986",
    "platform": "Dreamcast",
    "score": 4.2,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Fighting Force 2",
    "url": "/games/fighting-force-2/ps-11543",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "40 Winks",
    "url": "/games/40-winks/ps-13538",
    "platform": "PlayStation",
    "score": 5.5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Crusaders of Might and Magic",
    "url": "/games/crusaders-of-might-and-magic/pc-13531",
    "platform": "PC",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NBA ShootOut 2000",
    "url": "/games/nba-shootout-2000/ps-13585",
    "platform": "PlayStation",
    "score": 8.3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Killer Loop",
    "url": "/games/killer-loop/ps-11742",
    "platform": "PlayStation",
    "score": 4.8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Test Drive 6",
    "url": "/games/test-drive-6/dc-12002",
    "platform": "Dreamcast",
    "score": 3.4,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Wild Metal",
    "url": "/games/wild-metal/dc-11886",
    "platform": "Dreamcast",
    "score": 8.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Worms: Armageddon",
    "url": "/games/worms-armageddon/gbc-12121",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Crazy Taxi",
    "url": "/games/crazy-taxi/dc-12006",
    "platform": "Dreamcast",
    "score": 9.6,
    "genre": "Racing, Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Final Fantasy VIII",
    "url": "/games/final-fantasy-viii/pc-11737",
    "platform": "PC",
    "score": 7.4,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "NHL 2000",
    "url": "/games/nhl-2000/gbc-12090",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Turok: Rage Wars",
    "url": "/games/turok-rage-wars/gbc-12202",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NFL Blitz 2000",
    "url": "/games/nfl-blitz-2000/gbc-12215",
    "platform": "Game Boy Color",
    "score": 2,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Planescape: Torment",
    "url": "/games/planescape-torment/pc-9939",
    "platform": "PC",
    "score": 9.2,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Gex 3: Deep Pocket Gecko",
    "url": "/games/gex-3-deep-cover-gecko/gbc-12815",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Bubble Bobble",
    "url": "/games/bubble-bobble/gbc-12314",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Bass Landing",
    "url": "/games/bass-landing/ps-3939",
    "platform": "PlayStation",
    "score": 7.7,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Shanghai: Second Dynasty",
    "url": "/games/shanghai-second-dynasty/pc-13728",
    "platform": "PC",
    "score": 8.8,
    "genre": "Puzzle",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Sid Meier's Antietam!",
    "url": "/games/sid-meiers-antietam/pc-12668",
    "platform": "PC",
    "score": 8.8,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Knockout Kings",
    "url": "/games/knockout-kings/gbc-12725",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "No Fear Downhill Mountain Bike Racing",
    "url": "/games/no-fear-downhill-mountain-bike-racing/ps-13483",
    "platform": "PlayStation",
    "score": 5.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Juggernaut [1999]",
    "url": "/games/juggernaut-1999-142177/ps-13203",
    "platform": "PlayStation",
    "score": 4.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Shanghai Pocket",
    "url": "/games/shanghai-pocket/gbc-10787",
    "platform": "Game Boy Color",
    "score": 9,
    "genre": "Puzzle",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Extreme Rock Climbing",
    "url": "/games/extreme-rock-climbing/pc-13720",
    "platform": "PC",
    "score": 4.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Space Invaders",
    "url": "/games/space-invaders/pc-13718",
    "platform": "PC",
    "score": 6.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Space Channel 5 (Dream Collection)",
    "url": "/games/space-channel-5/dc-13021",
    "platform": "Dreamcast",
    "score": 9.2,
    "genre": "Music",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "3-D Ultra Radio Control Racers",
    "url": "/games/3-d-ultra-radio-control-racers/pc-13618",
    "platform": "PC",
    "score": 6.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Wild Wild West: The Steel Assassin",
    "url": "/games/wild-wild-west-the-steel-assassin/pc-11981",
    "platform": "PC",
    "score": 7,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Survival Kids",
    "url": "/games/survival-kids/gbc-12204",
    "platform": "Game Boy Color",
    "score": 9,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Gran Turismo 2",
    "url": "/games/gran-turismo-2/ps-11426",
    "platform": "PlayStation",
    "score": 9.8,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Test Drive Off-Road 3",
    "url": "/games/test-drive-off-road-3/pc-13427",
    "platform": "PC",
    "score": 7.3,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Scrabble [1999]",
    "url": "/games/scrabble-1999-809445/ps-11433",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Star Wars: Yoda Stories",
    "url": "/games/star-wars-yoda-stories/gbc-12088",
    "platform": "Game Boy Color",
    "score": 2,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Hot Wheels: Stunt Track Driver",
    "url": "/games/hot-wheels-stunt-track-driver/gbc-13350",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Uno [2000]",
    "url": "/games/uno-2000/gbc-13351",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Micro Machines I & II: Twin Turbo",
    "url": "/games/micro-machines-1-and-2-twin-turbo/gbc-12048",
    "platform": "Game Boy Color",
    "score": 9,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Dragon Warrior Monsters",
    "url": "/games/dragon-quest-monsters/gbc-12825",
    "platform": "Game Boy Color",
    "score": 9,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Monopoly Casino",
    "url": "/games/monopoly-casino/pc-13581",
    "platform": "PC",
    "score": 7.5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "NBA Showtime: NBA on NBC",
    "url": "/games/nba-showtime-nba-on-nbc/ps-11815",
    "platform": "PlayStation",
    "score": 6.9,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Space Invaders",
    "url": "/games/space-invaders/n64-10407",
    "platform": "Nintendo 64",
    "score": 7.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Worms Armageddon",
    "url": "/games/worms-armageddon/ps-11509",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Ready 2 Rumble Boxing",
    "url": "/games/ready-2-rumble-boxing/gbc-12329",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Bass Rise",
    "url": "/games/bass-rise/ps-11464",
    "platform": "PlayStation",
    "score": 5.5,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Rampage 2: Universal Tour",
    "url": "/games/rampage-2-universal-tour/gbc-12220",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Napoleon 1813",
    "url": "/games/napoleon-1813/pc-13582",
    "platform": "PC",
    "score": 6.4,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Missile Command [1999]",
    "url": "/games/missile-command-1999/ps-11505",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Zombie Revenge",
    "url": "/games/zombie-revenge/dc-11024",
    "platform": "Dreamcast",
    "score": 5.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "International Track & Field 2000",
    "url": "/games/international-track-field-2000/ps-13428",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "NASCAR Legends",
    "url": "/games/nascar-acceleration-pack/pc-13812",
    "platform": "PC",
    "score": 8.9,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Tomba! 2 -- The Evil Swine Return",
    "url": "/games/tomba-2-the-evil-swine-return/ps-12951",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Tee Off Golf",
    "url": "/games/tee-off-golf/dc-13439",
    "platform": "Dreamcast",
    "score": 7.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Wings of Fury",
    "url": "/games/wings-of-fury/gbc-12854",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Roadsters",
    "url": "/games/roadsters/n64-3941",
    "platform": "Nintendo 64",
    "score": 7.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "The Dukes of Hazzard: Racing for Home",
    "url": "/games/the-dukes-of-hazzard-racing-for-home/ps-11715",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "South Park Rally",
    "url": "/games/south-park-rally/ps-12322",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Shenmue (Limited Edition)",
    "url": "/games/shenmue/dc-10962",
    "platform": "Dreamcast",
    "score": 9.2,
    "genre": "Action, RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Missile Command [1999]",
    "url": "/games/missile-command-1999/pc-13160",
    "platform": "PC",
    "score": 6.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Legacy of Kain: Soul Reaver",
    "url": "/games/legacy-of-kain-soul-reaver/dc-13436",
    "platform": "Dreamcast",
    "score": 9.1,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Bionic Commando: Elite Forces",
    "url": "/games/bionic-commando-elite-forces/gbc-13460",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Q*bert",
    "url": "/games/qbert-886070/pc-12065",
    "platform": "PC",
    "score": 6.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Oddworld Adventures 2",
    "url": "/games/oddworld-adventures-2/gbc-12849",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Tiger Woods PGA Tour 2000",
    "url": "/games/buick-pga-tour-courses/ps-13477",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Rainbow Cotton",
    "url": "/games/rainbow-cotton/dc-11966",
    "platform": "Dreamcast",
    "score": 6,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Ghosts 'N Goblins",
    "url": "/games/capcom-generation-2/gbc-12207",
    "platform": "Game Boy Color",
    "score": 9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Monkey Magic",
    "url": "/games/monkey-magic/ps-13539",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Vigilante 8: Second Offense",
    "url": "/games/vigilante-8-second-offense/ps-11535",
    "platform": "PlayStation",
    "score": 8.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Virtua Striker 2 v2000.1",
    "url": "/games/virtua-striker-2/dc-13274",
    "platform": "Dreamcast",
    "score": 6.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Test Drive 6",
    "url": "/games/test-drive-6/pc-12312",
    "platform": "PC",
    "score": 6.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "South Park: Chef's Luv Shack",
    "url": "/games/south-park-chefs-luv-shack/pc-13575",
    "platform": "PC",
    "score": 5.5,
    "genre": "Trivia",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Evolution: The World of Sacred Device",
    "url": "/games/evolution-the-world-of-sacred-device/dc-11038",
    "platform": "Dreamcast",
    "score": 6.5,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Jet Coaster Dream",
    "url": "/games/jet-coaster-dream/dc-13446",
    "platform": "Dreamcast",
    "score": 9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 1999
  },
  {
    "title": "Dirt Track Racing",
    "url": "/games/dirt-track-racing/pc-12874",
    "platform": "PC",
    "score": 8.8,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 1999
  },
  {
    "title": "Battlezone II: Combat Commander",
    "url": "/games/battlezone-ii-combat-commander/pc-11248",
    "platform": "PC",
    "score": 7.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Asheron's Call",
    "url": "/games/asherons-call/pc-11330",
    "platform": "PC",
    "score": 6.4,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Catz",
    "url": "/games/catz/gbc-12930",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Mortyr: 2093-1944",
    "url": "/games/mortyr-2093-1944/pc-10526",
    "platform": "PC",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Resident Evil 2 [1998]",
    "url": "/games/resident-evil-2/dc-13388",
    "platform": "Dreamcast",
    "score": 8.5,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Professional Bull Rider",
    "url": "/games/professional-bull-rider/pc-13790",
    "platform": "PC",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "LEGO Rock Raiders",
    "url": "/games/lego-rock-raiders/pc-13767",
    "platform": "PC",
    "score": 6,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "MiG Alley",
    "url": "/games/mig-alley/pc-11421",
    "platform": "PC",
    "score": 9,
    "genre": "Simulation",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "MechWarrior 3: Pirate's Moon",
    "url": "/games/mechwarrior-3-pirates-moon/pc-13688",
    "platform": "PC",
    "score": 7.2,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "NASCAR Challenge",
    "url": "/games/nascar-challenge/gbc-12541",
    "platform": "Game Boy Color",
    "score": 2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "SNK vs. Capcom: Match of the Millennium",
    "url": "/games/snk-vs-capcom-match-of-the-millennium/ngpc-12975",
    "platform": "NeoGeo Pocket Color",
    "score": 10,
    "genre": "Fighting",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Fatal Fury: Wild Ambition",
    "url": "/games/fatal-fury-wild-ambition/ps-11987",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Q*bert",
    "url": "/games/qbert-886070/ps-11432",
    "platform": "PlayStation",
    "score": 6.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Monopoly 64",
    "url": "/games/monopoly-64/n64-11445",
    "platform": "Nintendo 64",
    "score": 7.4,
    "genre": "Board",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Carnivores II",
    "url": "/games/carnivores-ii/pc-13298",
    "platform": "PC",
    "score": 7.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Mario Party 2",
    "url": "/games/mario-party-2/n64-12860",
    "platform": "Nintendo 64",
    "score": 7.9,
    "genre": "Party",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Magical Drop Pocket",
    "url": "/games/magical-drop-pocket/ngpc-11049",
    "platform": "NeoGeo Pocket Color",
    "score": 8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Descent 3: Mercenary",
    "url": "/games/descent-3-mercenary/pc-13879",
    "platform": "PC",
    "score": 8.8,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Chocobo's Dungeon 2",
    "url": "/games/chocobos-dungeon-2/ps-11529",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Action, RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Brunswick Circuit Pro Bowling",
    "url": "/games/brunswick-circuit-pro-bowling/n64-12184",
    "platform": "Nintendo 64",
    "score": 7.3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Scrabble [1999]",
    "url": "/games/scrabble-1999-809445/pc-13416",
    "platform": "PC",
    "score": 7.8,
    "genre": "Board",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Boarder Zone",
    "url": "/games/boarder-zone/gbc-13158",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Dogz",
    "url": "/games/dogz/gbc-12929",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Vigilante 8",
    "url": "/games/vigilante-8/gbc-12839",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Flanker 2.0",
    "url": "/games/flanker-20/pc-13461",
    "platform": "PC",
    "score": 7,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Disney's Story Studio: Mulan",
    "url": "/games/disneys-story-studio-mulan/ps-13750",
    "platform": "PlayStation",
    "score": 7.7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "EGG: Elemental Gimmick Gear",
    "url": "/games/egg-elemental-gimmick-gear-167953/dc-9988",
    "platform": "Dreamcast",
    "score": 8,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Fighting Force 2",
    "url": "/games/fighting-force-2/dc-12891",
    "platform": "Dreamcast",
    "score": 3.6,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "MTV Music Generator",
    "url": "/games/mtv-music-generator/ps-13748",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Music, Editor",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Silhouette Mirage",
    "url": "/games/silhouette-mirage/ps-3921",
    "platform": "PlayStation",
    "score": 8.9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Scooby-Doo! Mystery of the Fun Park Phantom",
    "url": "/games/scooby-doo-mystery-of-the-fun-park-phantom/pc-12318",
    "platform": "PC",
    "score": 5.2,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Lightbringer: The Next Giant Leap for Mankind",
    "url": "/games/lightbringer-the-next-giant-leap-for-mankind/pc-13741",
    "platform": "PC",
    "score": 5.2,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Wetrix+",
    "url": "/games/wetrix-958154/dc-13554",
    "platform": "Dreamcast",
    "score": 8.7,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "A Bug's Life",
    "url": "/games/a-bugs-life/gbc-10782",
    "platform": "Game Boy Color",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "All-Star Baseball 2000",
    "url": "/games/all-star-baseball-2000/gbc-12071",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "NHL 2K [2000]",
    "url": "/games/nhl-2k/dc-13401",
    "platform": "Dreamcast",
    "score": 8.6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Sakura Wars: Hanagumi Taisen Columns 2",
    "url": "/games/sakura-wars-hanagumi-taisen-columns-2/dc-13228",
    "platform": "Dreamcast",
    "score": 9,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Zebco Fishing",
    "url": "/games/zebco-fishing/gbc-12919",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "NASCAR Rumble",
    "url": "/games/nascar-rumble/ps-12167",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "The Sims",
    "url": "/games/the-sims-1/pc-11754",
    "platform": "PC",
    "score": 9.5,
    "genre": "Simulation",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Conker's Pocket Tales",
    "url": "/games/conkers-pocket-tales/gbc-10774",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Deer Hunter: Interactive Hunting Experience",
    "url": "/games/deer-hunter/gbc-12890",
    "platform": "Game Boy Color",
    "score": 2,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Tokyo Bus Guide",
    "url": "/games/tokyo-bus-guide/dc-13166",
    "platform": "Dreamcast",
    "score": 7,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Matchbox Caterpillar Construction Zone",
    "url": "/games/matchbox-caterpillar-construction-zone/gbc-13352",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Road Rash: Jailbreak",
    "url": "/games/road-rash-jailbreak/ps-11652",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Racing, Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Jane's F/A-18 Simulator",
    "url": "/games/janes-fa-18-simulator/pc-13961",
    "platform": "PC",
    "score": 8.5,
    "genre": "Flight, Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Top Gear Pocket 2",
    "url": "/games/top-gear-pocket-2/gbc-12213",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Saga Frontier 2",
    "url": "/games/saga-frontier-2/ps-11162",
    "platform": "PlayStation",
    "score": 7,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "ECW: Hardcore Revolution",
    "url": "/games/ecw-hardcore-revolution/n64-13318",
    "platform": "Nintendo 64",
    "score": 5,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Super Breakout",
    "url": "/games/battlezonesuper-breakout/gbc-11995",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Blaze & Blade: Eternal Quest",
    "url": "/games/blaze-blade-eternal-quest/pc-14143",
    "platform": "PC",
    "score": 4.4,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Pong: The Next Level",
    "url": "/games/pong/gbc-13407",
    "platform": "Game Boy Color",
    "score": 2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Speedy Gonzales: Aztec Adventure",
    "url": "/games/speedy-gonzales-aztec-adventure-167925/gbc-12135",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Vandal Hearts II",
    "url": "/games/vandal-hearts-ii/ps-11625",
    "platform": "PlayStation",
    "score": 7.4,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Legend of the River King GBC",
    "url": "/games/legend-of-the-river-king-925324/gbc-12933",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Formula 1 '99",
    "url": "/games/formula-1-99/ps-11718",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Undercover A.D. 2025 Kei",
    "url": "/games/undercover-ad-2025-kei/dc-12173",
    "platform": "Dreamcast",
    "score": 2.5,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Touring Car Challenge",
    "url": "/games/touring-car-challenge/ps-12870",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "K-1 Grand Prix",
    "url": "/games/k-1-grand-prix/ps-10625",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Tiger Woods PGA Tour 2000",
    "url": "/games/buick-pga-tour-courses/gbc-12093",
    "platform": "Game Boy Color",
    "score": 3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "International Track & Field",
    "url": "/games/international-track-field/gbc-12221",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Quest: Brian's Journey",
    "url": "/games/quest-brians-journey-167810/gbc-13691",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Wario Land II",
    "url": "/games/wario-land-ii/gbc-11140",
    "platform": "Game Boy Color",
    "score": 9,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Bust-A-Move 4",
    "url": "/games/bust-a-move-4/pc-14125",
    "platform": "PC",
    "score": 6.4,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Rising Sun",
    "url": "/games/rising-sun/pc-13376",
    "platform": "PC",
    "score": 7.7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Shadowgate Classic",
    "url": "/games/shadowgate-classic/gbc-10775",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Catwoman",
    "url": "/games/catwoman/gbc-12199",
    "platform": "Game Boy Color",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Vigilante 8: Second Offense",
    "url": "/games/vigilante-8-second-offense/n64-10896",
    "platform": "Nintendo 64",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "The Mask of Zorro",
    "url": "/games/the-mask-of-zorro/gbc-13344",
    "platform": "Game Boy Color",
    "score": 2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Virtual Pool Hall",
    "url": "/games/virtual-pool/pc-13955",
    "platform": "PC",
    "score": 8.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Fisherman's Bait 2:  Big Ol' Bass",
    "url": "/games/fishermans-bait-2-big-ol-bass/ps-11623",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Ridge Racer 64",
    "url": "/games/ridge-racer-64/n64-11541",
    "platform": "Nintendo 64",
    "score": 9,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Tarzan",
    "url": "/games/disneys-collectors-edition-2002/n64-11226",
    "platform": "Nintendo 64",
    "score": 7.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Railroad Tycoon II",
    "url": "/games/railroad-tycoon-2-platinum-edition/ps-11104",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Microsoft Flight Simulator 2000",
    "url": "/games/3-great-planes-for-microsoft-flight-simulator-2000/pc-13204",
    "platform": "PC",
    "score": 4,
    "genre": "Flight, Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "South Park Rally",
    "url": "/games/south-park-rally/pc-11701",
    "platform": "PC",
    "score": 4.9,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Jeremy McGrath Supercross 2000",
    "url": "/games/jeremy-mcgrath-supercross-2000/n64-10811",
    "platform": "Nintendo 64",
    "score": 4.9,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "WWF Smackdown!",
    "url": "/games/wwf-smackdown/ps-13317",
    "platform": "PlayStation",
    "score": 8.8,
    "genre": "Wrestling",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "South Park Rally",
    "url": "/games/south-park-rally/n64-11752",
    "platform": "Nintendo 64",
    "score": 5.7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Animaniacs Splat Ball",
    "url": "/games/animaniacs-splat-ball/pc-12319",
    "platform": "PC",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Carrier",
    "url": "/games/carrier/dc-11003",
    "platform": "Dreamcast",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Extreme PaintBrawl 2",
    "url": "/games/extreme-paintbrawl-2/pc-14025",
    "platform": "PC",
    "score": 2.6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "TNN Outdoor Fishing Championship",
    "url": "/games/tnn-outdoor-fishing-championship/gbc-12927",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Marvel vs. Capcom: Clash of Super Heroes",
    "url": "/games/marvel-vs-capcom-clash-of-super-heroes/ps-13440",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Neo*Geo Cup '98 Plus",
    "url": "/games/neogeo-cup-98/ngpc-12972",
    "platform": "NeoGeo Pocket Color",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "1602 A.D.",
    "url": "/games/1602-ad/pc-13577",
    "platform": "PC",
    "score": 7.9,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "UpWords",
    "url": "/games/upwords/pc-14073",
    "platform": "PC",
    "score": 6,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Dark Arms: Beast Busters 1999",
    "url": "/games/dark-arms-beast-busters-1999/ngpc-12973",
    "platform": "NeoGeo Pocket Color",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "NBA In The Zone 2000",
    "url": "/games/nba-in-the-zone-2000/n64-11731",
    "platform": "Nintendo 64",
    "score": 5.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Black Bass Lure Fishing",
    "url": "/games/black-bass-lure-fishing/gbc-14189",
    "platform": "Game Boy Color",
    "score": 2,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Microsoft International Soccer 2000",
    "url": "/games/microsoft-international-soccer-2000-142322/pc-14207",
    "platform": "PC",
    "score": 7.6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Magical Tetris Challenge",
    "url": "/games/magical-tetris-adventure-featuring-mickey-mouse/gbc-12229",
    "platform": "Game Boy Color",
    "score": 10,
    "genre": "Puzzle, Adventure",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "FIFA 2000 Major League Soccer",
    "url": "/games/fifa-2000-major-league-soccer/gbc-12047",
    "platform": "Game Boy Color",
    "score": 2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "World League Soccer 2000",
    "url": "/games/world-league-soccer-2000-142266/n64-10163",
    "platform": "Nintendo 64",
    "score": 4.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Nox",
    "url": "/games/nox/pc-3724",
    "platform": "PC",
    "score": 8.9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Hidden & Dangerous: Devil's Bridge",
    "url": "/games/hidden-dangerous-devils-bridge/pc-13690",
    "platform": "PC",
    "score": 6.4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Dance Dance Revolution 2nd Mix: Dreamcast Edition",
    "url": "/games/dance-dance-revolution-2nd-mix/dc-13500",
    "platform": "Dreamcast",
    "score": 8,
    "genre": "Music",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Azure Dreams",
    "url": "/games/azure-dreams/gbc-12214",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Looney Tunes",
    "url": "/games/looney-tunes/gbc-12132",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Roadsters",
    "url": "/games/roadsters/gbc-13293",
    "platform": "Game Boy Color",
    "score": 3,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "ECW: Hardcore Revolution",
    "url": "/games/ecw-hardcore-revolution/ps-13387",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Colin McRae Rally [2000]",
    "url": "/games/colin-mcrae-rally/ps-10167",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Brunswick Circuit Pro Bowling 2",
    "url": "/games/brunswick-circuit-pro-bowling-2/ps-13680",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Shanghai Mini",
    "url": "/games/shanghai-mini/ngpc-13885",
    "platform": "NeoGeo Pocket Color",
    "score": 9,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Neo 21",
    "url": "/games/neo-21/ngpc-12976",
    "platform": "NeoGeo Pocket Color",
    "score": 3,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "NBA In The Zone 2000",
    "url": "/games/nba-in-the-zone-2000/ps-11621",
    "platform": "PlayStation",
    "score": 4.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "The New Adventures of Mary-Kate & Ashley",
    "url": "/games/the-new-adventures-of-mary-kate-ashley/gbc-14158",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Fear Effect",
    "url": "/games/fear-effect/ps-11545",
    "platform": "PlayStation",
    "score": 8.9,
    "genre": "Action, Adventure",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Gals Fighters",
    "url": "/games/gals-fighters/ngpc-13579",
    "platform": "NeoGeo Pocket Color",
    "score": 9,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Croc 2",
    "url": "/games/croc-2/pc-11706",
    "platform": "PC",
    "score": 6.5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Triple Play 2001",
    "url": "/games/triple-play-2001/ps-13628",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Sim Theme Park",
    "url": "/games/sim-theme-park/ps-13684",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Total Annihilation: Kingdoms -- The Iron Plague",
    "url": "/games/total-annihilation-kingdoms-the-iron-plague/pc-14319",
    "platform": "PC",
    "score": 5.8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Roadsters",
    "url": "/games/roadsters/dc-13206",
    "platform": "Dreamcast",
    "score": 4.6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "PD Ultraman Battle Collection 64",
    "url": "/games/pd-ultraman-battle-collection-64/n64-10471",
    "platform": "Nintendo 64",
    "score": 2,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Top Gear Hyperbike",
    "url": "/games/top-gear-hyperbike/n64-11443",
    "platform": "Nintendo 64",
    "score": 6.1,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Armored Core: Master of Arena",
    "url": "/games/armored-core-master-of-arena/ps-11462",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Tomb Raider: The Last Revelation",
    "url": "/games/tomb-raider-the-last-revelation/dc-14127",
    "platform": "Dreamcast",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Rugrats: Time Travelers",
    "url": "/games/rugrats-time-travelers/gbc-12092",
    "platform": "Game Boy Color",
    "score": 3,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Street Fighter Alpha: Warriors' Dreams",
    "url": "/games/street-fighter-alpha/gbc-12036",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Worms Armageddon",
    "url": "/games/worms-armageddon/n64-10790",
    "platform": "Nintendo 64",
    "score": 8.7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Spy vs. Spy",
    "url": "/games/spy-vs-spy-809801/gbc-11891",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Sammy Sosa Softball Slam",
    "url": "/games/sammy-sosa-softball-slam/ps-13841",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Cyber Tiger",
    "url": "/games/cyber-tiger/n64-11399",
    "platform": "Nintendo 64",
    "score": 8.4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Montezuma's Return",
    "url": "/games/montezumas-return/gbc-5477",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Thief II: The Metal Age",
    "url": "/games/thief-ii-the-metal-age/pc-11726",
    "platform": "PC",
    "score": 9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Tony Hawk's Pro Skater",
    "url": "/games/tony-hawks-pro-skater/gbc-13842",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Star Wars: Force Commander",
    "url": "/games/star-wars-force-commander/pc-3732",
    "platform": "PC",
    "score": 4.7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Invictus: In the Shadow of Olympus",
    "url": "/games/invictus-in-the-shadow-of-olympus/pc-12327",
    "platform": "PC",
    "score": 5.9,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "NBA Jam 99",
    "url": "/games/nba-jam-99/gbc-10776",
    "platform": "Game Boy Color",
    "score": 3,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "PBA Tour Bowling 2",
    "url": "/games/pba-tour-bowling-2/pc-14307",
    "platform": "PC",
    "score": 4.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Might and Magic VIII: Day of the Destroyer",
    "url": "/games/might-and-magic-platinum-edition/pc-13975",
    "platform": "PC",
    "score": 6.5,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Superbike 2000",
    "url": "/games/superbike-2000/ps-13682",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Boarder Zone",
    "url": "/games/boarder-zone/pc-12128",
    "platform": "PC",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Championship Bass",
    "url": "/games/championship-bass/ps-14026",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Test Drive Off-Road 3",
    "url": "/games/test-drive-off-road-3/gbc-13349",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Army Men: Sarge's Heroes",
    "url": "/games/army-men-gold/ps-11584",
    "platform": "PlayStation",
    "score": 3.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Superbike 2000",
    "url": "/games/superbike-2000/pc-14295",
    "platform": "PC",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Treasure Strike",
    "url": "/games/treasure-strike/dc-13279",
    "platform": "Dreamcast",
    "score": 5.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Crusaders of Might and Magic",
    "url": "/games/crusaders-of-might-and-magic/ps-11628",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Stephen King's F13",
    "url": "/games/stephen-kings-f13/pc-14296",
    "platform": "PC",
    "score": 2.1,
    "genre": "Other",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Hydro Thunder",
    "url": "/games/hydro-rush/ps-11564",
    "platform": "PlayStation",
    "score": 7.3,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Vegas Games",
    "url": "/games/vegas-games-167943/gbc-13215",
    "platform": "Game Boy Color",
    "score": 3,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "BattleTanx: Global Assault",
    "url": "/games/battletanx-global-assault/ps-13360",
    "platform": "PlayStation",
    "score": 4.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Virtual Pro Wrestling 2",
    "url": "/games/virtual-pro-wrestling-2/n64-11131",
    "platform": "Nintendo 64",
    "score": 7.9,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Rayman 2: The Great Escape",
    "url": "/games/rayman-2-revolution/dc-12005",
    "platform": "Dreamcast",
    "score": 9.6,
    "genre": "Platformer",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Front Mission 3",
    "url": "/games/front-mission-3/ps-12913",
    "platform": "PlayStation",
    "score": 8.8,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Virtua Striker 2",
    "url": "/games/virtua-striker-2/dc-13962",
    "platform": "Dreamcast",
    "score": 4.1,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Mobil 1 Rally Championship",
    "url": "/games/mobil-1-rally-championship/pc-13586",
    "platform": "PC",
    "score": 8.8,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Chu Chu Rocket",
    "url": "/games/chu-chu-rocket/dc-14096",
    "platform": "Dreamcast",
    "score": 9,
    "genre": "Puzzle",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Swamp Buggy Racing",
    "url": "/games/swamp-buggy-racing/pc-14234",
    "platform": "PC",
    "score": 1.9,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Family Game Pack",
    "url": "/games/family-game-pack/ps-13668",
    "platform": "PlayStation",
    "score": 2,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Quest: Fantasy Challenge",
    "url": "/games/quest-fantasy-challenge-167812/gbc-11594",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "ECW: Hardcore Revolution",
    "url": "/games/ecw-hardcore-revolution/gbc-13686",
    "platform": "Game Boy Color",
    "score": 3,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Killer Loop",
    "url": "/games/killer-loop/pc-13476",
    "platform": "PC",
    "score": 8.1,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "X: Beyond the Frontier",
    "url": "/games/x-beyond-the-frontier/pc-736740",
    "platform": "PC",
    "score": 7.7,
    "genre": "Action, Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "SEGA Swirl",
    "url": "/games/sega-swirl/dc-13481",
    "platform": "Dreamcast",
    "score": 8.2,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Beatmania",
    "url": "/games/beatmania/ws-14273",
    "platform": "WonderSwan",
    "score": 7,
    "genre": "Music",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Sword of the Berserk: Guts' Rage",
    "url": "/games/sword-of-the-berserk-guts-rage/dc-13963",
    "platform": "Dreamcast",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Army Men",
    "url": "/games/army-men/gbc-13214",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Renegade Racers",
    "url": "/games/renegade-racers/ps-11550",
    "platform": "PlayStation",
    "score": 4.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Die Hard Trilogy 2: Viva Las Vegas",
    "url": "/games/die-hard-trilogy-2-viva-las-vegas/pc-11707",
    "platform": "PC",
    "score": 5.7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "NHL Rock the Rink",
    "url": "/games/nhl-rock-the-rink/ps-13626",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Bakuretsu Muteki Bangaioh",
    "url": "/games/bakuretsu-muteki-bangaioh/n64-12031",
    "platform": "Nintendo 64",
    "score": 7.8,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "F1 2000",
    "url": "/games/f1-2000/ps-14985",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Messiah",
    "url": "/games/messiah/pc-3117",
    "platform": "PC",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Gauntlet Legends",
    "url": "/games/gauntlet-legends/ps-10967",
    "platform": "PlayStation",
    "score": 7.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Army Men: World War",
    "url": "/games/army-men-value-pack-2/ps-13722",
    "platform": "PlayStation",
    "score": 4.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "ECW: Hardcore Revolution",
    "url": "/games/ecw-hardcore-revolution/dc-13553",
    "platform": "Dreamcast",
    "score": 6.9,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Hydro Thunder",
    "url": "/games/hydro-rush/n64-10882",
    "platform": "Nintendo 64",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Deception III: Dark Delusion",
    "url": "/games/deception-iii-dark-delusion/ps-13681",
    "platform": "PlayStation",
    "score": 6,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Pokemon Stadium",
    "url": "/games/pokemon-stadium/n64-11154",
    "platform": "Nintendo 64",
    "score": 8.2,
    "genre": "Battle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Polaris SnoCross",
    "url": "/games/polaris-snocross/gbc-12942",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "NBA Showtime: NBA on NBC",
    "url": "/games/nba-showtime-nba-on-nbc/gbc-12226",
    "platform": "Game Boy Color",
    "score": 3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Die Hard Trilogy 2: Viva Las Vegas",
    "url": "/games/die-hard-trilogy-2-viva-las-vegas/ps-11675",
    "platform": "PlayStation",
    "score": 3.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Mega Man & Bass",
    "url": "/games/mega-man-and-bass/ws-13082",
    "platform": "WonderSwan",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Muppets",
    "url": "/games/muppets/gbc-12931",
    "platform": "Game Boy Color",
    "score": 2,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Shadow Watch",
    "url": "/games/shadow-watch/pc-11650",
    "platform": "PC",
    "score": 8.4,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "F/A 18 Super Hornet",
    "url": "/games/fa-18-super-hornet/pc-14450",
    "platform": "PC",
    "score": 5.5,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Gundam Side Story: 0079",
    "url": "/games/gundam-side-story-0079/dc-11025",
    "platform": "Dreamcast",
    "score": 7.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "LEGO Racers",
    "url": "/games/lego-racers/ps-11172",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Street Sk8er 2",
    "url": "/games/street-sk8er-2/ps-13528",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Deer Hunter 3: The Legend Continues",
    "url": "/games/deer-hunter-3-gold/pc-12983",
    "platform": "PC",
    "score": 8.2,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Syphon Filter 2",
    "url": "/games/syphon-filter-2/ps-13667",
    "platform": "PlayStation",
    "score": 8.9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Tread Marks",
    "url": "/games/tread-marks/pc-13442",
    "platform": "PC",
    "score": 6.9,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Tony Hawk's Pro Skater",
    "url": "/games/tony-hawks-pro-skater/n64-12180",
    "platform": "Nintendo 64",
    "score": 9.1,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Hot Shots Golf 2",
    "url": "/games/hot-shots-golf-2/ps-13666",
    "platform": "PlayStation",
    "score": 9.2,
    "genre": "Sports, Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Ace Combat 3: Electrosphere",
    "url": "/games/ace-combat-3-electrosphere/ps-11755",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Star Wars: Episode I: Jedi Power Battles",
    "url": "/games/star-wars-episode-i-jedi-power-battles/ps-13674",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Codename Eagle",
    "url": "/games/codename-eagle/pc-13936",
    "platform": "PC",
    "score": 7.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Rayman",
    "url": "/games/rayman/gbc-12960",
    "platform": "Game Boy Color",
    "score": 9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Star Wars: Episode I: Racer",
    "url": "/games/star-wars-episode-i-racer/dc-13399",
    "platform": "Dreamcast",
    "score": 6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Time Stalkers",
    "url": "/games/time-stalkers/dc-13937",
    "platform": "Dreamcast",
    "score": 6.5,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Galerians",
    "url": "/games/galerians/ps-13319",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Army Men: Air Tactics",
    "url": "/games/army-men-value-pack/pc-14170",
    "platform": "PC",
    "score": 4.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Virtua Cop 2",
    "url": "/games/virtua-cop-1-2/dc-13791",
    "platform": "Dreamcast",
    "score": 5.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Mission: Impossible",
    "url": "/games/mission-impossible-808345/gbc-12223",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Y2K [2000]",
    "url": "/games/y2k-142185/pc-14222",
    "platform": "PC",
    "score": 5.7,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Hello Kitty's Cube Frenzy",
    "url": "/games/hello-kittys-cube-frenzy/gbc-12217",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Pro Darts",
    "url": "/games/pro-darts/gbc-12925",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Tom Clancy's Rainbow Six",
    "url": "/games/tom-clancys-rainbow-six/gbc-12025",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Beetle Buggin'",
    "url": "/games/beetle-buggin/pc-14423",
    "platform": "PC",
    "score": 7.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Tzar: The Burden of the Crown",
    "url": "/games/tzar-the-burden-of-the-crown/pc-13337",
    "platform": "PC",
    "score": 6.9,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "NHL Blades of Steel 2000",
    "url": "/games/nhl-blades-of-steel-2000/ps-11620",
    "platform": "PlayStation",
    "score": 2.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Kaze no Klonoa: Moonlight Museum",
    "url": "/games/kaze-no-klonoa-moonlight-museum/ws-14414",
    "platform": "WonderSwan",
    "score": 6,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Walt Disney World Quest: Magical Racing Tour",
    "url": "/games/disneys-collectors-edition-2004/ps-14216",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Alundra 2",
    "url": "/games/alundra-2/ps-13020",
    "platform": "PlayStation",
    "score": 7.7,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Star Trek: Armada",
    "url": "/games/star-trek-armada/pc-12307",
    "platform": "PC",
    "score": 6,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Tom Clancy's Rainbow Six: Rogue Spear: Urban Operations",
    "url": "/games/tom-clancys-rainbow-six-rogue-spear-urban-operations/pc-14259",
    "platform": "PC",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Custom Robo",
    "url": "/games/custom-robo/n64-12861",
    "platform": "Nintendo 64",
    "score": 8.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Last Call",
    "url": "/games/last-call/pc-13196",
    "platform": "PC",
    "score": 7,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Majesty: The Fantasy Kingdom",
    "url": "/games/majesty-the-fantasy-kingdom/pc-13230",
    "platform": "PC",
    "score": 8.4,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Battlezone: Rise of the Black Dogs",
    "url": "/games/battlezone-rise-of-the-black-dogs/n64-1984",
    "platform": "Nintendo 64",
    "score": 3.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Soldier of Fortune",
    "url": "/games/soldier-of-fortune/pc-12287",
    "platform": "PC",
    "score": 9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "NASCAR 2000",
    "url": "/games/nascar-2000/pc-13877",
    "platform": "PC",
    "score": 7.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Need for Speed: Porsche Unleashed",
    "url": "/games/need-for-speed-porsche-unleashed/pc-13845",
    "platform": "PC",
    "score": 7.9,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Jackie Chan's Stuntmaster",
    "url": "/games/jackie-chans-stuntmaster/ps-3948",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Plasma Sword: Nightmare of Bilstein",
    "url": "/games/plasma-sword-nightmare-of-bilstein/dc-13372",
    "platform": "Dreamcast",
    "score": 6.8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Carmageddon",
    "url": "/games/carmageddon/gbc-12888",
    "platform": "Game Boy Color",
    "score": 3,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "JoJo's Bizarre Adventure",
    "url": "/games/jojos-bizarre-adventure/ps-13745",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "BattleTanx",
    "url": "/games/battletanx/gbc-12968",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Need for Speed: Porsche Unleashed",
    "url": "/games/need-for-speed-porsche-unleashed/ps-13669",
    "platform": "PlayStation",
    "score": 8.3,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Microsoft Baseball 2001",
    "url": "/games/microsoft-baseball-2001-142165/pc-14146",
    "platform": "PC",
    "score": 7.9,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Striker Pro 2000",
    "url": "/games/striker-pro-2000/dc-13218",
    "platform": "Dreamcast",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Resident Evil -- CODE: Veronica",
    "url": "/games/resident-evil-code-veronica/dc-10948",
    "platform": "Dreamcast",
    "score": 9.2,
    "genre": "Action, Adventure",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Risk II",
    "url": "/games/macintosh-board-game-trio/pc-13205",
    "platform": "PC",
    "score": 8.3,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "MDK2",
    "url": "/games/mdk2/dc-10954",
    "platform": "Dreamcast",
    "score": 9.4,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Bassmasters 2000",
    "url": "/games/bassmasters-2000/n64-10190",
    "platform": "Nintendo 64",
    "score": 3.1,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "All-Star Baseball 2001",
    "url": "/games/all-star-baseball-2001/n64-13194",
    "platform": "Nintendo 64",
    "score": 9.1,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Mobil 1 Rally Championship",
    "url": "/games/mobil-1-rally-championship/ps-14325",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Command & Conquer: Tiberian Sun -- Firestorm",
    "url": "/games/command-and-conquer-tiberian-sun-firestorm/pc-13294",
    "platform": "PC",
    "score": 7.4,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Jeremy McGrath Supercross 2000",
    "url": "/games/jeremy-mcgrath-supercross-2000/gbc-13972",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Pokemon Trading Card Game",
    "url": "/games/pokemon-trading-card-game/gbc-11879",
    "platform": "Game Boy Color",
    "score": 9,
    "genre": "Card, Battle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Motocross Madness 2",
    "url": "/games/motocross-madness-2/pc-14057",
    "platform": "PC",
    "score": 8.6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Bomberman Max -- Red: Challenger",
    "url": "/games/bomberman-max-red-challenger/gbc-13138",
    "platform": "Game Boy Color",
    "score": 9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Konami GB Collection Vol. 2",
    "url": "/games/konami-gb-collection-vol-2/gbc-14917",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Dinosaur",
    "url": "/games/dinosaur/gbc-14326",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": 1942,
    "url": "/games/1942/gbc-12195",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Grind Session",
    "url": "/games/grind-session/ps-14317",
    "platform": "PlayStation",
    "score": 7.6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Toobin'",
    "url": "/games/toobin/gbc-14198",
    "platform": "Game Boy Color",
    "score": 3,
    "genre": "Sports, Editor",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Tony Hawk's Pro Skater",
    "url": "/games/tony-hawks-pro-skater/dc-13716",
    "platform": "Dreamcast",
    "score": 9.8,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Last Blade",
    "url": "/games/last-blade/ngpc-11048",
    "platform": "NeoGeo Pocket Color",
    "score": 7,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Millennium Winter Sports",
    "url": "/games/millennium-winter-sports/gbc-13493",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Grand Theft Auto II",
    "url": "/games/grand-theft-auto-ii/dc-13234",
    "platform": "Dreamcast",
    "score": 6.7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Harvest Moon GBC",
    "url": "/games/harvest-moon-gbc/gbc-12210",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Who Wants To Be A Millionaire? Second Edition",
    "url": "/games/who-wants-to-be-a-millionaire-2nd-edition/pc-14900",
    "platform": "PC",
    "score": 7,
    "genre": "Trivia",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Mr. Driller",
    "url": "/games/mr-driller/ps-14179",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Test Drive Le Mans",
    "url": "/games/test-drive-le-mans/ps-12578",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Armorines: Project S.W.A.R.M",
    "url": "/games/armorines-project-swarm/ps-11699",
    "platform": "PlayStation",
    "score": 3.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Medievil II",
    "url": "/games/medievil-ii/ps-12952",
    "platform": "PlayStation",
    "score": 8.4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "NBA In the Zone 2000",
    "url": "/games/nba-in-the-zone-2000/gbc-13348",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Starlancer",
    "url": "/games/starlancer/pc-10584",
    "platform": "PC",
    "score": 9.2,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Maken X",
    "url": "/games/maken-x/dc-14177",
    "platform": "Dreamcast",
    "score": 7.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Triple Play 2001",
    "url": "/games/triple-play-2001/pc-13876",
    "platform": "PC",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Sammy Sosa Softball Slam",
    "url": "/games/sammy-sosa-softball-slam/pc-14167",
    "platform": "PC",
    "score": 4.6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Romance of the Three Kingdoms VI: Awakening of the Dragon",
    "url": "/games/romance-of-the-three-kingdoms-v/ps-12434",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Puzzle Link 2",
    "url": "/games/puzzle-link-2/ngpc-14094",
    "platform": "NeoGeo Pocket Color",
    "score": 9,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Metal Gear Solid [2000]",
    "url": "/games/metal-gear-solid-gb/gbc-13458",
    "platform": "Game Boy Color",
    "score": 10,
    "genre": "Action, Adventure",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Wild ARMs 2",
    "url": "/games/wild-arms-2/ps-12916",
    "platform": "PlayStation",
    "score": 6,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Tachyon: The Fringe",
    "url": "/games/tachyon-the-fringe/pc-11519",
    "platform": "PC",
    "score": 8.4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Vagrant Story",
    "url": "/games/vagrant-story/ps-12288",
    "platform": "PlayStation",
    "score": 9.6,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Striker Pro 2000",
    "url": "/games/striker-pro-2000/ps-13527",
    "platform": "PlayStation",
    "score": 7.2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Perfect Dark",
    "url": "/games/perfect-dark/n64-3906",
    "platform": "Nintendo 64",
    "score": 9.8,
    "genre": "Shooter",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Tom Clancy's Rainbow Six",
    "url": "/games/tom-clancys-rainbow-six/dc-11887",
    "platform": "Dreamcast",
    "score": 8,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Vanark",
    "url": "/games/vanark/ps-14178",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "The Crystal Key",
    "url": "/games/the-crystal-key/pc-14517",
    "platform": "PC",
    "score": 6.8,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Atari Greatest Hits",
    "url": "/games/atari-greatest-hits/pc-14100",
    "platform": "PC",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Sammy Sosa High Heat Baseball 2001",
    "url": "/games/sammy-sosa-high-heat-baseball-2001/ps-13803",
    "platform": "PlayStation",
    "score": 5.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Edgar Torronteras' Moto-X 2000",
    "url": "/games/edgar-torronteras-moto-x-2000-142664/pc-14510",
    "platform": "PC",
    "score": 5.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Colin McRae Rally [2000]",
    "url": "/games/colin-mcrae-rally/pc-12378",
    "platform": "PC",
    "score": 6.7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "4 Wheel Thunder",
    "url": "/games/4-wheel-thunder-2000/dc-12901",
    "platform": "Dreamcast",
    "score": 8.1,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Test Drive Le Mans",
    "url": "/games/test-drive-le-mans/pc-14091",
    "platform": "PC",
    "score": 7.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Chase Ace 2",
    "url": "/games/chase-ace-2/pc-14583",
    "platform": "PC",
    "score": 8.4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Street Fighter Alpha 3",
    "url": "/games/street-fighter-alpha-3/dc-11950",
    "platform": "Dreamcast",
    "score": 9.5,
    "genre": "Fighting",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "WCW Mayhem",
    "url": "/games/wcw-mayhem/gbc-12818",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Driver",
    "url": "/games/driver/gbc-12947",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Racing, Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Puzz 3D: The Orient Express",
    "url": "/games/puzz-3d-the-orient-express/pc-14633",
    "platform": "PC",
    "score": 3.5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "The Legend of Lotus Spring",
    "url": "/games/the-legend-of-lotus-spring/pc-14512",
    "platform": "PC",
    "score": 4.2,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Heroes of Might and Magic III: Shadow of Death",
    "url": "/games/heroes-of-might-and-magic-iii-complete/pc-14503",
    "platform": "PC",
    "score": 9,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Sammy Sosa High Heat Baseball 2001",
    "url": "/games/sammy-sosa-high-heat-baseball-2001/pc-14210",
    "platform": "PC",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Silent Bomber",
    "url": "/games/silent-bomber/ps-11837",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Speed Punks",
    "url": "/games/speed-punks/ps-13364",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Winnie The Pooh: Adventures in the 100 Acre Woods",
    "url": "/games/winnie-the-pooh-adventures-in-the-100-acre-woods/gbc-14203",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Pocket Fighter",
    "url": "/games/pocket-fighter/ws-13093",
    "platform": "WonderSwan",
    "score": 8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Urban Chaos",
    "url": "/games/urban-chaos/ps-11544",
    "platform": "PlayStation",
    "score": 4.5,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Allegiance",
    "url": "/games/allegiance/pc-11589",
    "platform": "PC",
    "score": 8.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Sorcerian: Apprentice of Seven Star Magic",
    "url": "/games/sorcerian-apprentice-of-seven-star-magic/dc-13969",
    "platform": "Dreamcast",
    "score": 6.4,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Dive Alert, Matt's Version",
    "url": "/games/dive-alert-matts-version/ngpc-12977",
    "platform": "NeoGeo Pocket Color",
    "score": 4,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Dive Alert, Becky's Version",
    "url": "/games/dive-alert-beckys-version/ngpc-16710",
    "platform": "NeoGeo Pocket Color",
    "score": 4,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Safecracker [2000]",
    "url": "/games/safecracker-943316/pc-3426",
    "platform": "PC",
    "score": 5.2,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "F1 2000",
    "url": "/games/f1-2000/pc-14629",
    "platform": "PC",
    "score": 8.1,
    "genre": "Racing, Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Imperium Galactica II: Alliances",
    "url": "/games/imperium-galactica-ii-alliances/pc-11651",
    "platform": "PC",
    "score": 9,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Ultimate Hunt Challenge",
    "url": "/games/ultimate-hunt-challenge/pc-14628",
    "platform": "PC",
    "score": 5.5,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "MLB 2001",
    "url": "/games/mlb-2001/ps-14141",
    "platform": "PlayStation",
    "score": 7.4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Super Scattergories",
    "url": "/games/super-scattergories/pc-14488",
    "platform": "PC",
    "score": 6.2,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Eagle One: Harrier Attack",
    "url": "/games/eagle-one-harrier-attack/ps-11744",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Twinkle Star Sprites",
    "url": "/games/twinkle-star-sprites/dc-13792",
    "platform": "Dreamcast",
    "score": 5.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "EverQuest: Ruins of Kunark",
    "url": "/games/everquest-ruins-of-kunark/pc-13953",
    "platform": "PC",
    "score": 8.5,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "JoJo's Bizarre Adventure",
    "url": "/games/jojos-bizarre-adventure/dc-13163",
    "platform": "Dreamcast",
    "score": 8.5,
    "genre": "Fighting",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Monster Rancher Battle Card GB",
    "url": "/games/monster-rancher-battle-card-gb/gbc-13336",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Card, Battle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Samba de Amigo",
    "url": "/games/samba-de-amigo/arcade-14185",
    "platform": "Arcade",
    "score": 9.4,
    "genre": "Music",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Roadsters",
    "url": "/games/roadsters/ps-11757",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Expendable",
    "url": "/games/expendable/ps-14425",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Excitebike 64",
    "url": "/games/excitebike-894349/n64-11838",
    "platform": "Nintendo 64",
    "score": 9.7,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Gunship!",
    "url": "/games/gunship-109173/pc-793815",
    "platform": "PC",
    "score": 8,
    "genre": "Flight, Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Metal Slug: 2nd Mission",
    "url": "/games/metal-slug-2nd-mission/ngpc-13051",
    "platform": "NeoGeo Pocket Color",
    "score": 9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "NHL Blades of Steel 2000",
    "url": "/games/nhl-blades-of-steel-2000/gbc-12228",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Championship Bass",
    "url": "/games/championship-bass/pc-14554",
    "platform": "PC",
    "score": 8.5,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Papyrus",
    "url": "/games/papyrus/gbc-14980",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Earth 2150",
    "url": "/games/earth-2150/pc-13583",
    "platform": "PC",
    "score": 8.9,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Tomb Raider -- Featuring Lara Croft",
    "url": "/games/tomb-raider-featuring-lara-croft/gbc-13623",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "The Legend of Dragoon",
    "url": "/games/the-legend-of-dragoon/ps-13238",
    "platform": "PlayStation",
    "score": 7,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Nightmare Creatures II",
    "url": "/games/nightmare-creatures-ii/dc-13742",
    "platform": "Dreamcast",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Ground Control",
    "url": "/games/ground-control/pc-12690",
    "platform": "PC",
    "score": 8.6,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "PGA European Tour",
    "url": "/games/pga-european-tour/n64-13233",
    "platform": "Nintendo 64",
    "score": 4.6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Final Fantasy Legend",
    "url": "/games/final-fantasy-legend/gb-8021",
    "platform": "Game Boy",
    "score": 6,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Industrial Spy: Operation Espionage",
    "url": "/games/industrial-spy-operation-espionage/dc-13552",
    "platform": "Dreamcast",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Final Fantasy Adventure",
    "url": "/games/final-fantasy-adventure/gb-8020",
    "platform": "Game Boy",
    "score": 9,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Virtual-On: Oratorio Tangram",
    "url": "/games/virtual-on-oratorio-tangram/dc-14534",
    "platform": "Dreamcast",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Emergency Rescue: Firefighters",
    "url": "/games/emergency-rescue-firefighters-138553/pc-14944",
    "platform": "PC",
    "score": 5.5,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Crystalis",
    "url": "/games/crystalis/gbc-13597",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Beach Head 2000",
    "url": "/games/beach-head-2000/pc-14975",
    "platform": "PC",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Looney Tunes Collector: Alert!",
    "url": "/games/looney-tunes-collector-alert/gbc-13850",
    "platform": "Game Boy Color",
    "score": 9,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "NGEN Racing",
    "url": "/games/ngen-racing/ps-14335",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Croc: Legend of the Gobbos",
    "url": "/games/croc-legend-of-the-gobbos/gbc-13033",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Flying Heroes",
    "url": "/games/flying-heroes/pc-14017",
    "platform": "PC",
    "score": 8.3,
    "genre": "Flight, Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "StarCraft 64",
    "url": "/games/starcraft-64/n64-3894",
    "platform": "Nintendo 64",
    "score": 7.7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Ultima Online: Renaissance",
    "url": "/games/ultima-online-renaissance/pc-14484",
    "platform": "PC",
    "score": 7.5,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "AI Wars: The Awakening",
    "url": "/games/ai-wars-the-awakening/pc-14949",
    "platform": "PC",
    "score": 5.8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Bomberman 64: The Second Attack",
    "url": "/games/bomberman-64-the-second-attack/n64-10648",
    "platform": "Nintendo 64",
    "score": 5.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "The Misadventures of Tron Bonne",
    "url": "/games/the-misadventures-of-tron-bonne/ps-11671",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Mr. Driller",
    "url": "/games/mr-driller/dc-14308",
    "platform": "Dreamcast",
    "score": 8.6,
    "genre": "Puzzle, Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Deus Ex",
    "url": "/games/deus-ex/pc-11727",
    "platform": "PC",
    "score": 9.4,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Iron Soldier 3",
    "url": "/games/iron-soldier-3/ps-13188",
    "platform": "PlayStation",
    "score": 6.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Mortal Kombat Special Forces",
    "url": "/games/mortal-kombat-special-forces/ps-11729",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Transformers: Beast Wars Transmetals",
    "url": "/games/transformers-beast-wars-transmetals/n64-14373",
    "platform": "Nintendo 64",
    "score": 3,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Toy Story 2: Buzz Lightyear to the Rescue",
    "url": "/games/toy-story-2/dc-13445",
    "platform": "Dreamcast",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Icewind Dale",
    "url": "/games/icewind-dale/pc-13559",
    "platform": "PC",
    "score": 8.8,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Konami GB Collection Vol. 1",
    "url": "/games/konami-gb-collection-vol-1/gbc-14938",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Gekido",
    "url": "/games/gekido-psx/ps-11974",
    "platform": "PlayStation",
    "score": 7.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "StarCraft",
    "url": "/games/starcraft/pc-2159",
    "platform": "PC",
    "score": 9.5,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Samurai Shodown: Warrior's Rage",
    "url": "/games/samurai-shodown-warriors-rage/ps-13533",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Shamus",
    "url": "/games/shamus/gbc-12892",
    "platform": "Game Boy Color",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Space Channel 5",
    "url": "/games/space-channel-5/dc-14181",
    "platform": "Dreamcast",
    "score": 9.2,
    "genre": "Music, Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Airport Tycoon",
    "url": "/games/airport-tycoon/pc-14936",
    "platform": "PC",
    "score": 3,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Trick Boarder",
    "url": "/games/trick-boarder/gbc-14458",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Space Station Silicon Valley",
    "url": "/games/space-station-silicon-valley/gbc-12324",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Covert Ops: Nuclear Dawn",
    "url": "/games/covert-ops-nuclear-dawn-139503/ps-13494",
    "platform": "PlayStation",
    "score": 4.8,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Army Men: World War",
    "url": "/games/army-men-value-pack-2/pc-14580",
    "platform": "PC",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Ultimate Paintball",
    "url": "/games/ultimate-paintball-gbc/gbc-15004",
    "platform": "Game Boy Color",
    "score": 2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Animastar",
    "url": "/games/animastar/dc-13513",
    "platform": "Dreamcast",
    "score": 7.3,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "MDK2",
    "url": "/games/mdk2/pc-12044",
    "platform": "PC",
    "score": 8.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "All-Star Baseball 2001",
    "url": "/games/all-star-baseball-2001/gbc-14204",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Triple Play 2001",
    "url": "/games/triple-play-2001/gbc-13687",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Legend of Mana",
    "url": "/games/legend-of-mana/ps-12141",
    "platform": "PlayStation",
    "score": 8.3,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Gauntlet Legends",
    "url": "/games/gauntlet-legends/dc-13555",
    "platform": "Dreamcast",
    "score": 8.4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Martian Gothic: Unification",
    "url": "/games/martian-gothic-unification/pc-13855",
    "platform": "PC",
    "score": 7.9,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Mary-Kate & Ashley: Get a Clue!",
    "url": "/games/mary-kate-ashley-get-a-clue/gbc-14878",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Let's Ride!",
    "url": "/games/lets-ride/pc-15036",
    "platform": "PC",
    "score": 3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Rampage Through Time",
    "url": "/games/rampage-through-time/ps-14430",
    "platform": "PlayStation",
    "score": 3.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Indy Racing 2000",
    "url": "/games/indy-racing-2000-142370/n64-14230",
    "platform": "Nintendo 64",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Toonsylvania",
    "url": "/games/toonsylvania/gbc-14267",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Transformers: Beast Wars Transmetals",
    "url": "/games/transformers-beast-wars-transmetals/ps-15027",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "SimCity 3000 Unlimited",
    "url": "/games/simcity-3000/pc-14520",
    "platform": "PC",
    "score": 9.1,
    "genre": "Simulation",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "PGA Championship Golf 2000",
    "url": "/games/pga-championship-golf-titanium-edition/pc-14331",
    "platform": "PC",
    "score": 7.7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Test Drive Le Mans",
    "url": "/games/test-drive-le-mans/gbc-14231",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Diablo II",
    "url": "/games/diablo-ii/pc-10629",
    "platform": "PC",
    "score": 8.3,
    "genre": "Action, RPG",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Caesars Palace 2000: Millennium Gold Edition",
    "url": "/games/caesars-palace-2000-millennium-gold-edition/ps-15044",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Other",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Dark Reign 2",
    "url": "/games/dark-reign-2/pc-14056",
    "platform": "PC",
    "score": 8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Virtua Tennis",
    "url": "/games/virtua-tennis/dc-14627",
    "platform": "Dreamcast",
    "score": 9.4,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Xtreme Sports",
    "url": "/games/xtreme-sports/gbc-14341",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Panty Raider: From Here to Immaturity",
    "url": "/games/panty-raider-from-here-to-immaturity/pc-14066",
    "platform": "PC",
    "score": 1.5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Spec Ops: Stealth Patrol",
    "url": "/games/spec-ops-stealth-patrol/ps-13683",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Daikatana",
    "url": "/games/daikatana/pc-3095",
    "platform": "PC",
    "score": 5.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Hot Wheels: Micro Racers",
    "url": "/games/hot-wheels-micro-racers/pc-14116",
    "platform": "PC",
    "score": 6.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "International Track & Field 2000",
    "url": "/games/international-track-field-2000/n64-13743",
    "platform": "Nintendo 64",
    "score": 6.1,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Casper",
    "url": "/games/casper-806053/gbc-13354",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Ka-52 Team Alligator",
    "url": "/games/ka-52-team-alligator/pc-11934",
    "platform": "PC",
    "score": 6.3,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Tech Romancer",
    "url": "/games/tech-romancer/dc-13240",
    "platform": "Dreamcast",
    "score": 8.9,
    "genre": "Fighting, Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Fighter Destiny 2",
    "url": "/games/fighter-destiny-2/n64-11590",
    "platform": "Nintendo 64",
    "score": 6.3,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Super Magnetic Neo",
    "url": "/games/super-magnetic-neo-2000/dc-13698",
    "platform": "Dreamcast",
    "score": 6.9,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Innova Disc Golf",
    "url": "/games/innova-disc-golf/pc-15006",
    "platform": "PC",
    "score": 3.3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Final Fantasy Legend III",
    "url": "/games/final-fantasy-legend-iii/gb-8023",
    "platform": "Game Boy",
    "score": 7,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Towers: Lord Baniff's Deceit",
    "url": "/games/towers-lord-baniffs-deceit-167950/gbc-12895",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Bust-A-Move 4",
    "url": "/games/bust-a-move-4/dc-14152",
    "platform": "Dreamcast",
    "score": 8.8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Konami GB Collection Vol. 3",
    "url": "/games/konami-gb-collection-vol-3/gbc-15021",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Densha De Go! 64",
    "url": "/games/densha-de-go-64/n64-13341",
    "platform": "Nintendo 64",
    "score": 5.1,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Kirby 64: The Crystal Shards",
    "url": "/games/kirby-64-the-crystal-shards/n64-571",
    "platform": "Nintendo 64",
    "score": 7.9,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Street Fighter III: Double Impact",
    "url": "/games/street-fighter-iii-double-impact/dc-9991",
    "platform": "Dreamcast",
    "score": 8.8,
    "genre": "Fighting, Compilation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Star Trek: Klingon Academy",
    "url": "/games/star-trek-klingon-academy/pc-10308",
    "platform": "PC",
    "score": 7.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Fur Fighters",
    "url": "/games/fur-fighters/dc-11072",
    "platform": "Dreamcast",
    "score": 8.3,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Looney Tunes: Duck Dodgers Starring Daffy Duck",
    "url": "/games/looney-tunes-duck-dodgers-starring-daffy-duck/n64-1959",
    "platform": "Nintendo 64",
    "score": 7.6,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Star Trek: ConQuest Online",
    "url": "/games/star-trek-conquest-online/pc-14215",
    "platform": "PC",
    "score": 7.8,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Vanguard Bandits",
    "url": "/games/vanguard-bandits/ps-14330",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Digimon World",
    "url": "/games/digimon-world/ps-11241",
    "platform": "PlayStation",
    "score": 5.8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Silver",
    "url": "/games/silver/dc-12682",
    "platform": "Dreamcast",
    "score": 7.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Omikron: the Nomad Soul",
    "url": "/games/omikron-the-nomad-soul/dc-13732",
    "platform": "Dreamcast",
    "score": 6.7,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Wacky Races",
    "url": "/games/wacky-races-810838/dc-13929",
    "platform": "Dreamcast",
    "score": 8.4,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Rent A Hero No. 1",
    "url": "/games/rent-a-hero-no-1/dc-12989",
    "platform": "Dreamcast",
    "score": 8.4,
    "genre": "Action, Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Grudge Warriors",
    "url": "/games/grudge-warriors/ps-14426",
    "platform": "PlayStation",
    "score": 5.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Nightmare Creatures II",
    "url": "/games/nightmare-creatures-ii/ps-11698",
    "platform": "PlayStation",
    "score": 8.3,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Formula One '99",
    "url": "/games/formula-1-99/pc-14921",
    "platform": "PC",
    "score": 4.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Wario Land 3",
    "url": "/games/wario-land-3/gbc-13730",
    "platform": "Game Boy Color",
    "score": 9,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Kurt Warner's Arena Football Unleashed",
    "url": "/games/kurt-warners-arena-football-unleashed/ps-13362",
    "platform": "PlayStation",
    "score": 4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Tonic Trouble",
    "url": "/games/tonic-trouble/gbc-14920",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Rugrats: Totally Angelica",
    "url": "/games/rugrats-totally-angelica/gbc-13724",
    "platform": "Game Boy Color",
    "score": 2,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Vampire: The Masquerade -- Redemption",
    "url": "/games/vampire-the-masquerade-redemption/pc-11636",
    "platform": "PC",
    "score": 7,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Traitors Gate",
    "url": "/games/traitors-gate/pc-14990",
    "platform": "PC",
    "score": 5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Street Fighter EX 2 Plus",
    "url": "/games/street-fighter-ex-2/ps-13643",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Deja Vu & Deja Vu II: The Casebooks of Ace Harding",
    "url": "/games/deja-vu-deja-vu-ii-the-casebooks-of-ace-harding/gbc-12042",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Earthworm Jim 3D",
    "url": "/games/earthworm-jim-3d/pc-3731",
    "platform": "PC",
    "score": 6,
    "genre": "Platformer",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Final Fantasy Legend II",
    "url": "/games/final-fantasy-legend-ii/gb-8022",
    "platform": "Game Boy",
    "score": 8,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Evolva",
    "url": "/games/evolva/pc-11756",
    "platform": "PC",
    "score": 7.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Who Wants To Be A Millionaire? 2nd Edition",
    "url": "/games/who-wants-to-be-a-millionaire-2nd-edition/ps-14432",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Trivia",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Shogun: Total War",
    "url": "/games/shogun-total-war/pc-8631",
    "platform": "PC",
    "score": 8.5,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "ISS Pro Evolution",
    "url": "/games/iss-pro-evolution/ps-14428",
    "platform": "PlayStation",
    "score": 5.1,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Dracula Resurrection",
    "url": "/games/2-for-1-dracula-resurrection-the-last-sanctuary/pc-15019",
    "platform": "PC",
    "score": 8,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Kawasaki ATV Powersports",
    "url": "/games/kawasaki-atv-powersports/pc-15017",
    "platform": "PC",
    "score": 1,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Draconus: Cult of the Wyrm",
    "url": "/games/draconus-cult-of-the-wyrm-139506/dc-11935",
    "platform": "Dreamcast",
    "score": 6.7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Gold and Glory: The Road to El Dorado",
    "url": "/games/gold-and-glory-the-road-to-el-dorado/gbc-14263",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "South Park Rally",
    "url": "/games/south-park-rally/dc-13474",
    "platform": "Dreamcast",
    "score": 4.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Evolution 2: Far off Promise",
    "url": "/games/evolution-2-far-off-promise/dc-12689",
    "platform": "Dreamcast",
    "score": 4.5,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "10Six",
    "url": "/games/10six/pc-3085",
    "platform": "PC",
    "score": 6.2,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Heroes of Might and Magic",
    "url": "/games/heroes-of-might-magic-millennium-edition/gbc-13216",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Mario Artist: Talent Studio",
    "url": "/games/mario-artist-talent-studio/64dd-10085",
    "platform": "Nintendo 64DD",
    "score": 8.2,
    "genre": "Productivity",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Marvel vs. Capcom 2: New Age of Heroes",
    "url": "/games/marvel-vs-capcom-2/dc-14736",
    "platform": "Dreamcast",
    "score": 9.3,
    "genre": "Fighting",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Koudelka",
    "url": "/games/koudelka/ps-12449",
    "platform": "PlayStation",
    "score": 6.8,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Rhapsody: A Musical Adventure",
    "url": "/games/rhapsody-a-musical-adventure/ps-13954",
    "platform": "PlayStation",
    "score": 7.3,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Lemmings Revolution",
    "url": "/games/lemmings-revolution/pc-14916",
    "platform": "PC",
    "score": 8,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Wacky Races",
    "url": "/games/wacky-races-810838/gbc-13851",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Colony Wars: Red Sun",
    "url": "/games/colony-wars-red-sun/ps-11722",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Renegade Racers",
    "url": "/games/renegade-racers/pc-15013",
    "platform": "PC",
    "score": 7.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Rally Challenge 2000",
    "url": "/games/rally-challenge-2000-142325/n64-11847",
    "platform": "Nintendo 64",
    "score": 6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Dogs of War: Battle On Primus IV",
    "url": "/games/dogs-of-war-battle-on-primus-iv/pc-13853",
    "platform": "PC",
    "score": 7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "SnoCross Championship Racing",
    "url": "/games/snocross-championship-racing/ps-14224",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Mega Man Battle & Fighters",
    "url": "/games/mega-man-battle-and-fighters/ngpc-15241",
    "platform": "NeoGeo Pocket Color",
    "score": 8,
    "genre": "Fighting, Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "NASCAR 2000",
    "url": "/games/nascar-2000/gbc-14461",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Action Bass",
    "url": "/games/action-bass/ps-15046",
    "platform": "PlayStation",
    "score": 5,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Turok 3: Shadow of Oblivion",
    "url": "/games/turok-3-shadow-of-oblivion/gbc-14464",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Reel Fishing II",
    "url": "/games/reel-fishing-ii/ps-13685",
    "platform": "PlayStation",
    "score": 6.3,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Railroad Tycoon II (Gold Edition)",
    "url": "/games/railroad-tycoon-2-platinum-edition/dc-14768",
    "platform": "Dreamcast",
    "score": 8.2,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Monster Rancher Battle Card: Episode II",
    "url": "/games/monster-rancher-battle-card-episode-ii/ps-14889",
    "platform": "PlayStation",
    "score": 5.5,
    "genre": "Card, Battle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Go Kart Challenge",
    "url": "/games/go-kart-challenge/pc-15228",
    "platform": "PC",
    "score": 5.1,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Tennis",
    "url": "/games/tennis-game-boy/gb-5984",
    "platform": "Game Boy",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Walt Disney World Magical Racing Tour",
    "url": "/games/disneys-collectors-edition-2004/dc-14600",
    "platform": "Dreamcast",
    "score": 6.3,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "World Series Baseball 2K1",
    "url": "/games/world-series-baseball-2k1/dc-13023",
    "platform": "Dreamcast",
    "score": 5.5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Bang! Gunship Elite",
    "url": "/games/bang-gunship-elite/pc-14780",
    "platform": "PC",
    "score": 7.9,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Warlocked",
    "url": "/games/warlocked/gbc-13959",
    "platform": "Game Boy Color",
    "score": 9,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Warlords Battlecry",
    "url": "/games/warlords-battlecry/pc-12054",
    "platform": "PC",
    "score": 8.4,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Gromada",
    "url": "/games/gromada/pc-15158",
    "platform": "PC",
    "score": 6.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Mario Tennis",
    "url": "/games/mario-tennis-nintendo-64/n64-14400",
    "platform": "Nintendo 64",
    "score": 9,
    "genre": "Sports, Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "AeroWings 2: Air Strike",
    "url": "/games/aero-dancing-f-todoroki-tsubasa-no-hatsu-hikou/dc-14539",
    "platform": "Dreamcast",
    "score": 8,
    "genre": "Flight",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Jeremy McGrath Supercross 2000",
    "url": "/games/jeremy-mcgrath-supercross-2000/dc-13241",
    "platform": "Dreamcast",
    "score": 4,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "NCAA Football 2001",
    "url": "/games/ncaa-football-2001/ps-14657",
    "platform": "PlayStation",
    "score": 8.3,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Kyojin no Doshin -- Kaihou Sensen Chibikko Chikko Daishuugou",
    "url": "/games/kyojin-no-doshin-kaihou-sensen-chibikko-chikko-daishuugou/64dd-14481",
    "platform": "Nintendo 64DD",
    "score": 2.5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "SimCity 64",
    "url": "/games/simcity-64/64dd-1948",
    "platform": "Nintendo 64DD",
    "score": 6,
    "genre": "Simulation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Carmageddon 64",
    "url": "/games/carmageddon-64/n64-10078",
    "platform": "Nintendo 64",
    "score": 1.3,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Wham-o Frisbee Golf",
    "url": "/games/wham-o-frisbee-golf/pc-15201",
    "platform": "PC",
    "score": 4.2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Strider 2",
    "url": "/games/strider-2/ps-14187",
    "platform": "PlayStation",
    "score": 8.5,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "KISS Psycho Circus: The Nightmare Child",
    "url": "/games/kiss-psycho-circus-the-nightmare-child/pc-11646",
    "platform": "PC",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Pharaoh: Cleopatra",
    "url": "/games/pharaoh-cleopatra/pc-14754",
    "platform": "PC",
    "score": 8.6,
    "genre": "Strategy",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Field & Stream Trophy Bass 4",
    "url": "/games/field-and-stream-trophy-bass-4/pc-14522",
    "platform": "PC",
    "score": 8,
    "genre": "Hunting",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Army Men: Air Combat",
    "url": "/games/army-men-air-combat-881860/n64-14246",
    "platform": "Nintendo 64",
    "score": 7.6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Breakneck",
    "url": "/games/breakneck/pc-13307",
    "platform": "PC",
    "score": 8.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "F-Zero X Expansion Kit",
    "url": "/games/f-zero-x-expansion-kit/64dd-5488",
    "platform": "Nintendo 64DD",
    "score": 8.4,
    "genre": "Productivity",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Threads of Fate",
    "url": "/games/threads-of-fate/ps-12029",
    "platform": "PlayStation",
    "score": 7.7,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "F-18 Thunder Strike",
    "url": "/games/f-18-thunder-strike/gbc-13430",
    "platform": "Game Boy Color",
    "score": 2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Soulbringer",
    "url": "/games/advanced-dungeons-dragons-planescape-torment-soulbringer-combo-pack/pc-15135",
    "platform": "PC",
    "score": 7,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Kyojin no Doshin 1",
    "url": "/games/kyojin-no-doshin-1/64dd-10116",
    "platform": "Nintendo 64DD",
    "score": 6.5,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Cool Cool Toon",
    "url": "/games/cool-cool-toon-167929/dc-14240",
    "platform": "Dreamcast",
    "score": 7.8,
    "genre": "Music, Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "LEGO Rock Raiders",
    "url": "/games/lego-rock-raiders/ps-11740",
    "platform": "PlayStation",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Hidden & Dangerous",
    "url": "/games/hidden-dangerous/dc-12076",
    "platform": "Dreamcast",
    "score": 6.2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Who Wants to Beat Up a Millionaire?",
    "url": "/games/who-wants-to-beat-up-a-millionaire/pc-14784",
    "platform": "PC",
    "score": 5.7,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Madden NFL 2001",
    "url": "/games/madden-nfl-2001/ps-14648",
    "platform": "PlayStation",
    "score": 9.4,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "WWF Royal Rumble",
    "url": "/games/wwf-royal-rumble/dc-14753",
    "platform": "Dreamcast",
    "score": 5.2,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Beyond Atlantis",
    "url": "/games/beyond-atlantis/pc-14599",
    "platform": "PC",
    "score": 6.4,
    "genre": "Adventure",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "MagForce Racing",
    "url": "/games/magforce-racing/dc-14518",
    "platform": "Dreamcast",
    "score": 7.7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "International Superstar Soccer '99",
    "url": "/games/international-superstar-soccer-99/gbc-15179",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Giga Wing",
    "url": "/games/giga-wing/dc-12809",
    "platform": "Dreamcast",
    "score": 6,
    "genre": "Shooter",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Maya the Bee & Her Friends",
    "url": "/games/maya-the-bee-her-friends/gbc-15168",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Daily Racing Form: Horse Racing",
    "url": "/games/daily-racing-form-horse-racing/pc-15147",
    "platform": "PC",
    "score": 4,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "X-Men: Mutant Academy",
    "url": "/games/x-men-mutant-academy/ps-14171",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Bugs Bunny in Crazy Castle 4",
    "url": "/games/bugs-bunny-in-crazy-castle-4/gbc-12201",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Power Rangers: Lightspeed Rescue",
    "url": "/games/power-rangers-lightspeed-rescue/gbc-14243",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "AMF Xtreme Bowling",
    "url": "/games/amf-xtreme-bowling/gbc-12926",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Men In Black: The Series 2",
    "url": "/games/men-in-black-the-series-2/gbc-14318",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "X-Men: Mutant Academy",
    "url": "/games/x-men-mutant-academy/gbc-13525",
    "platform": "Game Boy Color",
    "score": 3,
    "genre": "Fighting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Communication Logic Battle Daisessen",
    "url": "/games/communication-logic-battle-daisessen/dc-13699",
    "platform": "Dreamcast",
    "score": 7.5,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Caesars Palace 2000",
    "url": "/games/caesars-palace-2000/pc-15138",
    "platform": "PC",
    "score": 7.2,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Namco Museum",
    "url": "/games/namco-museum-dreamcast/dc-15131",
    "platform": "Dreamcast",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Chrono Cross",
    "url": "/games/chrono-cross/ps-12503",
    "platform": "PlayStation",
    "score": 9.7,
    "genre": "RPG",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Heavy Metal: F.A.K.K.2",
    "url": "/games/heavy-metal-fakk2/pc-11647",
    "platform": "PC",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Ecco the Dolphin: Defender of the Future",
    "url": "/games/ecco-the-dolphin-defender-of-the-future/dc-12357",
    "platform": "Dreamcast",
    "score": 7.6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Mr. Driller",
    "url": "/games/mr-driller/gbc-14337",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Sergei Bubka's Millennium Games",
    "url": "/games/sergei-bubkas-millennium-games/pc-15256",
    "platform": "PC",
    "score": 7.9,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Spirit of Speed 1937",
    "url": "/games/spirit-of-speed-1937/dc-14868",
    "platform": "Dreamcast",
    "score": 2.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "F-1 World Grand Prix",
    "url": "/games/f-1-world-grand-prix/pc-15139",
    "platform": "PC",
    "score": 8.3,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Midway's Greatest Arcade Hits Volume I",
    "url": "/games/midways-greatest-arcade-hits-volume-i/dc-14392",
    "platform": "Dreamcast",
    "score": 7.5,
    "genre": "Compilation",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Terminus",
    "url": "/games/terminus/pc-3522",
    "platform": "PC",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Giant Gram: All Japan Pro Wrestling 2",
    "url": "/games/giant-gram-all-japan-pro-wrestling-2/dc-11949",
    "platform": "Dreamcast",
    "score": 8.4,
    "genre": "Wrestling",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Tenchu 2: Birth of the Stealth Assassins",
    "url": "/games/tenchu-2-birth-of-the-stealth-assassins/ps-11797",
    "platform": "PlayStation",
    "score": 9.1,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Metal Fatigue",
    "url": "/games/metal-fatigue/pc-10250",
    "platform": "PC",
    "score": 7.1,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Surf Riders",
    "url": "/games/surf-riders/ps-14578",
    "platform": "PlayStation",
    "score": 6.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Seaman",
    "url": "/games/seaman/dc-14720",
    "platform": "Dreamcast",
    "score": 8.3,
    "genre": "Virtual Pet",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Zusar Vasar",
    "url": "/games/zusar-vasar/dc-13794",
    "platform": "Dreamcast",
    "score": 6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Virtual Deep Sea Fishing",
    "url": "/games/virtual-deep-sea-fishing/pc-15243",
    "platform": "PC",
    "score": 3.3,
    "genre": "Hunting",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Test Drive Cycles",
    "url": "/games/test-drive-cycles/gbc-12230",
    "platform": "Game Boy Color",
    "score": 4,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Dance Dance Revolution [2001]",
    "url": "/games/dance-dance-revolution-2001/gbc-15242",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "Music",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Tokyo Xtreme Racer 2",
    "url": "/games/tokyo-xtreme-racer-2/dc-14596",
    "platform": "Dreamcast",
    "score": 9.3,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Army Men: World War Land, Sea, Air",
    "url": "/games/army-men-world-war-land-sea-air/ps-15375",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Pokemon Puzzle League",
    "url": "/games/pokemon-puzzle-challenge/n64-14801",
    "platform": "Nintendo 64",
    "score": 8.9,
    "genre": "Puzzle",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Michelin Rally Masters Race of Champions",
    "url": "/games/michelin-rally-masters-race-of-champions/pc-11180",
    "platform": "PC",
    "score": 9,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Frogger 2",
    "url": "/games/frogger-2/gbc-14132",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Army Men: Sarge's Heroes 2",
    "url": "/games/army-men-sarges-heroes-2/n64-14496",
    "platform": "Nintendo 64",
    "score": 5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Metal Gear Solid",
    "url": "/games/metal-gear-solid/pc-14593",
    "platform": "PC",
    "score": 9,
    "genre": "Action, Adventure",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Dino Crisis 2",
    "url": "/games/dino-crisis-2/ps-14705",
    "platform": "PlayStation",
    "score": 9.3,
    "genre": "Adventure",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "NHL 2001",
    "url": "/games/nhl-2001/ps-14658",
    "platform": "PlayStation",
    "score": 8.4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Sanity: Aiken's Artifact",
    "url": "/games/sanity-aikens-artifact/pc-11237",
    "platform": "PC",
    "score": 8.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Crimson Skies",
    "url": "/games/crimson-skies/pc-14175",
    "platform": "PC",
    "score": 8.8,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Battleship: Surface Thunder",
    "url": "/games/battleship-surface-thunder/pc-14564",
    "platform": "PC",
    "score": 7.4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Buffy the Vampire Slayer",
    "url": "/games/buffy-the-vampire-slayer/gbc-14811",
    "platform": "Game Boy Color",
    "score": 2,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Dragon Warrior I & II",
    "url": "/games/dragon-quest-1-and-2-collection/gbc-14493",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Star Wars: Episode I: Jedi Power Battles",
    "url": "/games/star-wars-episode-i-jedi-power-battles/dc-14800",
    "platform": "Dreamcast",
    "score": 6.8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "San Francisco Rush 2049",
    "url": "/games/san-francisco-rush-2049/dc-13634",
    "platform": "Dreamcast",
    "score": 9,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "NFL 2K1",
    "url": "/games/nfl-2k1/dc-14601",
    "platform": "Dreamcast",
    "score": 9.5,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "MTV Sports: Skateboarding Featuring Andy Macdonald",
    "url": "/games/mtv-sports-skateboarding-featuring-andy-macdonald/gbc-14463",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Microsoft Golf 2001 Edition",
    "url": "/games/microsoft-golf-2001-edition-142158/pc-15350",
    "platform": "PC",
    "score": 7.7,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "San Francisco Rush 2049",
    "url": "/games/san-francisco-rush-2049/n64-13526",
    "platform": "Nintendo 64",
    "score": 9,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Lil' Monster",
    "url": "/games/lil-monster/gbc-15394",
    "platform": "Game Boy Color",
    "score": 5,
    "genre": "RPG",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "NFL Blitz 2001",
    "url": "/games/nfl-blitz-special-edition/gbc-14884",
    "platform": "Game Boy Color",
    "score": 3,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "NFL Blitz 2001",
    "url": "/games/nfl-blitz-special-edition/n64-14947",
    "platform": "Nintendo 64",
    "score": 7.4,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "RPG Maker",
    "url": "/games/rpg-maker/ps-3771",
    "platform": "PlayStation",
    "score": 8.2,
    "genre": "RPG, Editor",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Professional Bull Rider 2",
    "url": "/games/professional-bull-rider-2/pc-14523",
    "platform": "PC",
    "score": 5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Panzer General III: Scorched Earth",
    "url": "/games/panzer-general-iii-scorched-earth/pc-15192",
    "platform": "PC",
    "score": 7.9,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Blaster Master: Enemy Below",
    "url": "/games/blaster-master-enemy-below/gbc-12137",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Dave Mirra Freestyle BMX",
    "url": "/games/dave-mirra-freestyle-bmx/ps-14595",
    "platform": "PlayStation",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "MindRover: The Europa Project",
    "url": "/games/mindrover-the-europa-project/pc-11245",
    "platform": "PC",
    "score": 8.5,
    "genre": "Simulation",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "High Impact Paintball",
    "url": "/games/high-impact-paintball/pc-14943",
    "platform": "PC",
    "score": 3.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Madden NFL 2001",
    "url": "/games/madden-nfl-2001/n64-14731",
    "platform": "Nintendo 64",
    "score": 8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Ganbare! Nippon! Olympics 2000",
    "url": "/games/ganbare-nippon-olympics-2000/dc-15257",
    "platform": "Dreamcast",
    "score": 6.1,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Tyco R/C: Assault With A Battery",
    "url": "/games/tyco-rc-assault-with-a-battery/ps-15050",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Spin Jam",
    "url": "/games/spin-jam/ps-15047",
    "platform": "PlayStation",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Ultimate Fighting Championship",
    "url": "/games/ultimate-fighting-championship/dc-14160",
    "platform": "Dreamcast",
    "score": 9.1,
    "genre": "Fighting",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Enemy Engaged: Comanche vs. Hokum",
    "url": "/games/enemy-engaged-comanche-vs-hokum/pc-15325",
    "platform": "PC",
    "score": 9,
    "genre": "Simulation",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Ball Breakers",
    "url": "/games/ball-breakers/ps-15012",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Sydney 2000",
    "url": "/games/sydney-2000/dc-14239",
    "platform": "Dreamcast",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Sydney 2000",
    "url": "/games/sydney-2000/pc-14563",
    "platform": "PC",
    "score": 6.4,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Muppet Race Mania",
    "url": "/games/muppet-race-mania/ps-14832",
    "platform": "PlayStation",
    "score": 8.3,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Chessmaster",
    "url": "/games/chessmaster/gbc-15463",
    "platform": "Game Boy Color",
    "score": 8,
    "genre": "Board",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Stunt Racer 64",
    "url": "/games/stunt-racer-64/n64-11217",
    "platform": "Nintendo 64",
    "score": 7,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Destruction Derby Raw",
    "url": "/games/destruction-derby-raw/ps-11721",
    "platform": "PlayStation",
    "score": 7.9,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Pro-Pinball: Fantastic Journey",
    "url": "/games/pro-pinball-fantastic-journey/ps-15053",
    "platform": "PlayStation",
    "score": 4.8,
    "genre": "Pinball",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Caesars Palace 2000",
    "url": "/games/caesars-palace-2000/dc-13165",
    "platform": "Dreamcast",
    "score": 2.5,
    "genre": "Casino",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Who Wants To Be A Millionaire?",
    "url": "/games/who-wants-to-be-a-millionaire-1999/gbc-15146",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Trivia",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "ESPN International Track & Field",
    "url": "/games/espn-international-track-field/dc-15151",
    "platform": "Dreamcast",
    "score": 6,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Power Rangers Lightspeed Rescue",
    "url": "/games/power-rangers-lightspeed-rescue/n64-14188",
    "platform": "Nintendo 64",
    "score": 3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Wal-Mart FLW Tour Tournament 2000",
    "url": "/games/wal-mart-flw-tour-tournament-2000-142269/pc-15349",
    "platform": "PC",
    "score": 5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Perfect Dark",
    "url": "/games/perfect-dark/gbc-13801",
    "platform": "Game Boy Color",
    "score": 7,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "NFL QB Club 2001",
    "url": "/games/nfl-qb-club-2001/n64-14294",
    "platform": "Nintendo 64",
    "score": 5.8,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Star Trek: New Worlds",
    "url": "/games/star-trek-new-worlds/pc-11308",
    "platform": "PC",
    "score": 6.2,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Pro-Pinball: Big Race USA",
    "url": "/games/pro-pinball-big-race-usa/ps-15045",
    "platform": "PlayStation",
    "score": 4.8,
    "genre": "Pinball",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Turok 3: Shadow of Oblivion",
    "url": "/games/turok-3-shadow-of-oblivion/n64-12303",
    "platform": "Nintendo 64",
    "score": 7.4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Grand Prix 3",
    "url": "/games/grand-prix-3/pc-14102",
    "platform": "PC",
    "score": 9,
    "genre": "Racing",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "F1 Racing Championship",
    "url": "/games/f1-racing-championship/ps-14389",
    "platform": "PlayStation",
    "score": 7.5,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Star Trek: Voyager: Elite Force",
    "url": "/games/star-trek-voyager-elite-force/pc-11735",
    "platform": "PC",
    "score": 8.6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Ferrari F355 Challenge",
    "url": "/games/ferrari-f355-challenge/dc-15388",
    "platform": "Dreamcast",
    "score": 9.2,
    "genre": "Racing, Simulation",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Tony Hawk's Pro Skater 2",
    "url": "/games/tony-hawks-pro-skater-2/ps-14304",
    "platform": "PlayStation",
    "score": 9.6,
    "genre": "Sports",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "ATV Quad Power Racing",
    "url": "/games/atv-quad-power-racing/ps-14709",
    "platform": "PlayStation",
    "score": 3,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "NCAA GameBreaker 2001",
    "url": "/games/ncaa-gamebreaker-2001/ps-15028",
    "platform": "PlayStation",
    "score": 7.2,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Return of The Incredible Machine: Contraptions",
    "url": "/games/return-of-the-incredible-machine-contraptions/pc-6754",
    "platform": "PC",
    "score": 8.4,
    "genre": "Puzzle",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Ms. Pac-Man Maze Madness",
    "url": "/games/ms-pac-man-maze-madness/ps-14379",
    "platform": "PlayStation",
    "score": 8.3,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "MTV Sports: Skateboarding Featuring Andy Macdonald",
    "url": "/games/mtv-sports-skateboarding-featuring-andy-macdonald/pc-14708",
    "platform": "PC",
    "score": 5,
    "genre": "Sports",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Space Marauder",
    "url": "/games/space-marauder-167927/gbc-14881",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "NFL Blitz 2001",
    "url": "/games/nfl-blitz-special-edition/dc-14809",
    "platform": "Dreamcast",
    "score": 8,
    "genre": "Sports, Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "San Francisco Rush 2049",
    "url": "/games/san-francisco-rush-2049/gbc-14883",
    "platform": "Game Boy Color",
    "score": 6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Virtua Athlete 2K",
    "url": "/games/decathlete-collection/dc-14535",
    "platform": "Dreamcast",
    "score": 4,
    "genre": "Action",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "SEGA GT",
    "url": "/games/sega-gt/dc-13367",
    "platform": "Dreamcast",
    "score": 9.2,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Age of Empires II: The Conquerors",
    "url": "/games/age-of-empires-ii-the-conquerors/pc-15239",
    "platform": "PC",
    "score": 8.2,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Bust A Groove 2",
    "url": "/games/bust-a-groove-2/ps-11939",
    "platform": "PlayStation",
    "score": 6.8,
    "genre": "Music",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Spider-Man [2000]",
    "url": "/games/spider-man-2000/ps-11498",
    "platform": "PlayStation",
    "score": 9,
    "genre": "Action",
    "editors_choice": "Y",
    "release_year": 2000
  },
  {
    "title": "Submarine TITANS",
    "url": "/games/submarine-titans/pc-13614",
    "platform": "PC",
    "score": 7,
    "genre": "Strategy",
    "editors_choice": "N",
    "release_year": 2000
  },
  {
    "title": "Hot Chix n' Gear Stix",
    "url": "/games/hot-chix-n-gear-stix/pc-15318",
    "platform": "PC",
    "score": 6,
    "genre": "Racing",
    "editors_choice": "N",
    "release_year": 2000
  }
]
/*const mylist = document.getElementsByTagName('li');
for(let i=0;i<mylist.length;i++)
{
	mylist[i].style.color='pink';
}
const errornotpurple = document.getElementsByClassName('error-not-purple');
for(let i=0;i<errornotpurple.length;i++)
{
	errornotpurple[i].style.color='red';
	errornotpurple[i].style.fontSize='130px';
}
*/

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) 
  {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
mybutton.addEventListener('click',() => 
{
	//textinput.value = textinput.value.toLowerCase();
	var cnt =0;
	var getsearchtype = document.getElementById('searchby');
	getsearchtype = getsearchtype.value;
	getsearchtype = getsearchtype.toLowerCase();
	//console.log(typeof getsearchtype);
	
	var orderedlist = document.getElementsByTagName("ol");
	
	//orderel.style.
	var res = document.getElementById('div1');
	res.innerHTML="";
	var orderedlist = document.createElement("ol");
    	for(var i=0;i<mygameslist.length;i++)
	{
		
		if(getsearchtype === 'title'){
		if(String(mygameslist[i].title).toLowerCase() === textinput.value.toLowerCase())
		{
			cnt+=1;
			var list = document.createElement("li");
			var para = document.createElement("p");
			var node = document.createTextNode("Game Title: " + String(mygameslist[i].title));
			var node2 = document.createTextNode("Release Year: " + String(mygameslist[i].release_year));
			var node3 = document.createTextNode("Game Url: " + String(mygameslist[i].url));
			var node4 = document.createTextNode("Game Genre: " + String(mygameslist[i].genre));
			var breake = document.createElement("br");
			para.appendChild(node);
		    	list.appendChild(para);
			para = document.createElement("p");
			para.appendChild(node2);
			list.appendChild(para);
			para = document.createElement("p");
			para.appendChild(node3);
			list.appendChild(para);
			para = document.createElement("p");
			para.appendChild(node4);
			list.appendChild(para);
			list.style.backgroundColor = getRandomColor();	
            		orderedlist.appendChild(list);
			orderedlist.appendChild(breake);
		}
		}
		else if(getsearchtype == 'platform')
		{
		if(String(mygameslist[i].platform).toLowerCase() === textinput.value.toLowerCase())
		{
			cnt+=1;
			var list = document.createElement("li");
			var para = document.createElement("p");
			var node = document.createTextNode("Game Title: " + String(mygameslist[i].title));
			var node2 = document.createTextNode("Release Year: " + String(mygameslist[i].release_year));
			var node3 = document.createTextNode("Game Url: " + String(mygameslist[i].url));
			var node4 = document.createTextNode("Game Genre: " + String(mygameslist[i].genre));
			var breake = document.createElement("br");
			para.appendChild(node);
		    	list.appendChild(para);
			para = document.createElement("p");
			para.appendChild(node2);
			list.appendChild(para);
			para = document.createElement("p");
			para.appendChild(node3);
			list.appendChild(para);
			para = document.createElement("p");
			para.appendChild(node4);
			list.appendChild(para);
			list.style.backgroundColor = getRandomColor();	
            		orderedlist.appendChild(list);
			orderedlist.appendChild(breake);
		}			
		}
		else if(getsearchtype == 'release year')
		{
		if(mygameslist[i].release_year === parseInt(textinput.value,10))
		{
			cnt+=1;
			var list = document.createElement("li");
			var para = document.createElement("p");
			var node = document.createTextNode("Game Title: " + String(mygameslist[i].title));
			var node2 = document.createTextNode("Release Year: " + String(mygameslist[i].release_year));
			var node3 = document.createTextNode("Game Url: " + String(mygameslist[i].url));
			var node4 = document.createTextNode("Game Genre: " + String(mygameslist[i].genre));
			var breake = document.createElement("br");
			para.appendChild(node);
		    	list.appendChild(para);
			para = document.createElement("p");
			para.appendChild(node2);
			list.appendChild(para);
			para = document.createElement("p");
			para.appendChild(node3);
			list.appendChild(para);
			para = document.createElement("p");
			para.appendChild(node4);
			list.appendChild(para);			
			list.style.backgroundColor = getRandomColor();			   
            		orderedlist.appendChild(list);
			orderedlist.appendChild(breake);
		}			
		}
		else if(getsearchtype == 'votes')
		{
			
		if(mygameslist[i].score >= parseFloat(textinput.value,10))
		{
			cnt+=1;
			var list = document.createElement("li");
			var para = document.createElement("p");
			var node = document.createTextNode("Game Title: " + String(mygameslist[i].title));
			var node2 = document.createTextNode("Release Year: " + String(mygameslist[i].release_year));
			var node3 = document.createTextNode("Game Url: " + String(mygameslist[i].url));
			var node4 = document.createTextNode("Votes: " + String(mygameslist[i].score));
			var breake = document.createElement("br");
			para.appendChild(node);
		    	list.appendChild(para);
			para = document.createElement("p");
			para.appendChild(node2);
			list.appendChild(para);
			para = document.createElement("p");
			para.appendChild(node3);
			list.appendChild(para);
			para = document.createElement("p");
			para.appendChild(node4);
			list.appendChild(para);
            		list.style.backgroundColor = getRandomColor();			
            		orderedlist.appendChild(list);
			orderedlist.appendChild(breake);
		}			
		}
		else if(getsearchtype == 'genre')
		{
		if(String(mygameslist[i].genre).toLowerCase() === textinput.value.toLowerCase())
		{
			cnt+=1;
			var list = document.createElement("li");
			var para = document.createElement("p");
			var node = document.createTextNode("Game Title: " + String(mygameslist[i].title));
			var node2 = document.createTextNode("Release Year: " + String(mygameslist[i].release_year));
			var node3 = document.createTextNode("Game Url: " + String(mygameslist[i].url));
			var node4 = document.createTextNode("Game Genre: " + String(mygameslist[i].genre));
			var breake = document.createElement("br");
			para.appendChild(node);
		    	list.appendChild(para);
			para = document.createElement("p");
			para.appendChild(node2);
			list.appendChild(para);
			para = document.createElement("p");
			para.appendChild(node3);
			list.appendChild(para);
			para = document.createElement("p");
			para.appendChild(node4);
			list.appendChild(para);
			list.style.backgroundColor = getRandomColor();	
                        orderedlist.appendChild(list);
			orderedlist.appendChild(breake);
		}			
		}		
	}
	if(cnt>0)
	{
		var breake = document.createElement("br");
		res.appendChild(breake);
		var para = document.createElement("h3");
		var node = document.createTextNode("SEARCH RESULTS:-");
		para.style.backgroundColor = "red";
		para.appendChild(node);
		res.appendChild(para);
		res.appendChild(orderedlist);
	}
		
	else
	{
		res.innerHTML = "No Data Found!";
	}


});



