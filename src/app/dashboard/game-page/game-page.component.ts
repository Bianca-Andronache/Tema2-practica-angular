import { Component } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent {
  gameList = [
    {
      title: 'Dwarf Fortress',
      image:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/975370/header.jpg?t=1670338868',
      description:
        "The deepest, most intricate simulation of a world that's ever been created.",
      releaseDate:
        "November 9, 2022",
      about:
        "It’s a deep simulator. Every dwarf in your fortress has moods, preferences, skills, needs, and whims. Every chair, statue, mug, and bed you make has a quality and value. The world generates with rules for hydrology and geology and precipitation. Beyond the walls of your fortress, the world evolves as civilizations rise and fall. You make trade agreements with other settlements and, if you’re not careful, enemies."
    },
    {
      title: 'Counter-Strike: Global Offensive',
      image:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1668125812',
      description:
        'Expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago',
      releaseDate:
        "August 21, 2012",
      about:
        "Counter-Strike: Global Offensive (CS:GO) expands upon the team-based first person shooter gameplay the original Counter-Strike pioneered when it launched in 1999. Two teams compete in multiple rounds of objective-based game modes with the goal of winning enough rounds to win the match."
    },
    {
      title: 'God of War Ragnarök',
      image:
        'https://image.api.playstation.com/vulcan/ap/rnd/202207/1117/4uH3OH4dQtHMe2gmdFuth02u.jpg?w=620',
      description:
        'Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go',
      releaseDate:
        "August 8, 2006",
      about:
        "Journey through dangerous and stunning landscapes while facing a wide variety of enemy creatures, monsters and Norse gods as Kratos and Atreus search for answers."
    },
  ];

  
}
