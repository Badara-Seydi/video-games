const client = require('../app/data/database');
require('dotenv').config();



(async ()=>{
    await client.query(`
    BEGIN;

INSERT INTO "jeuxvideo" ("titre","image","description","date_de_sortie","plateforme","note")
VALUES ('Fifa 21', 1,'Simulation de football incontesté dans le monde du jeu vidéo , fifa 21 est la référence du genre... Mais pour encore combien de temps ???', '19/10/2021',('PS4 / Xbox / Switch'), 10),
('Call of Duty', 2,'Activision a frappé un grand coup avec ce FPS , en incluant le mode Warzone qui réunit des centaines de milliers de joueurs a travers le monde. Un must have pour tout joueur de FPS', '19/05/2021',('PS4 / Xbox'), 9),
('Dragon Ball Z Fighter Z ', 3,'Dans la licence Dragon Ball je demande le meilleur jeu de tous les temps ! Et bien le voila ! un jeu de combat en 2D époustouflant ', '16/05/2021',('PS4 / Xbox / Switch'), 10),
('UFC 4', 4,'Vous vous etes dé&jà vu lever la ceinture dorée en plein milieu du ring a huit cotés? Avec des graphismes a tomber , un gameplay aux petits oignons vous pourrez affronter les plus grands combattants UFC', '11/03/2019',('PS4 / Xbox '), 10),
('Red Dead Redemption II', 5,'Jeu aventure dans le monde du far west, Incroyablement beau et remplis de quête en tout genre . On ne se lassent pas de chasser , pecher , traquer des hors la loi dans ce monde ouvert inspiré du Western...QUEL JEU !', '16/05/2021',('PS4 / Xbox / PC'), 10),
('GTA V', 6,'Bienvenue a Liberty City, Le monde du crime, en ligne ou en solo GTA reste un régal sans pareil dans le monde du JV', '15/09/2018',('PS4 / Xbox / PC'), 10),
('Uncharted 4 ', 7,'Jouez dans la peau de Nathan Drake un explorateur en quete de trésors', '04/07/2019',('PS4 '), 10),
('Spiderman : Miles Morales', 8,'Incarnez Miles Morales le nouveau spiderman , sauvez la ville dans des graphismes éblouissant de la PS5', '10/04/2021',('PS5'), 10),
('Ratchet And CLank', 9,'Accompagnez Ratchet dans sa nouvelle quête contre Nefarious', '04/06/2021',('PS5'), 10),
('Zelda : Breath Of The Wild ', 10,'La princesse Zelda a de nouveaux ennuis , elle peut compter sur Link dans cette aventure pleines de nouveautés', '11/01/2020',('Switch'), 10),
('Pokemon : Epée et Bouclier', 11,'Attrapez les tous ! Nouvelle aventure Pokémon avec les pokémons de nouvelles générations en plus ', '11/02/2020',('Switch'), 8),
('Counter-Strike', 12,'La référence des jeux de tirs ! Qui peut dire je joues pas a counter strike? Tous les joueurs de FPS ont fait leurs armes dessus', '04/10/2016',('PC'), 10),
('Horizon Forbidden West',13,'Incarnez Aloy dans une nouvelle aventure exclusive a la derniere née de chez Sony la PS5 qui permettra des graphismes de toute bôté ainsi que des chargements quasi-inexistants','22/03/2022',('PS5'),10),
('Pokemon Lets Go Evoli',14,'Revivez la 1ére aventure Pokemon mais avec de nouveaux graphismes. Ce jeu plaira aux nostalgique de la 1ére génération comme aux néohpytes','18/05/2019',('Switch'),8),
('The Witcher III',15,'Une aventure incroyable est ce jeu vidéo , un monde ouvert presque sans limite , un coté fantaisie digne des plus grands films du genre , et une histoire a tomber par terre...Chapeau pour ce jeu','15/07/2018',('PS4/XBOX/Switch'),10),
('The Last Of Us II',16,'Un survival horror qui fut le dernier game of the year...je ne dis rien de plus...A FAIRE tout simplement', '17/06/2020',('PS4'),10),
('Kena Bridge Of The Spirits',17,'Vivez une nouvelle aventure avec Kena , Nous savons encore peu de choses a son sujet mais nous sommes conquis par le game design proposer....A suivre','22/02/2022',('PS4'),10),
('Fortnite',18,'Sautez du bus volant et entamer une guerre sans merci a vos adversaires... Fortnite a conquis le monde et ne finis pas de grossir sa fanbase','15/04/2016',('PS4/Switch/Xbox/PC'),10),
('World Of Warcraft',19,'MMORPG avec une grande communauté , bien que sa sortie date un peu désormais , ses joueurs chevronnés continue a remplir les serveurs, pas étonnant vu la réussite du jeu , a tester','16/04/2018',('PC'),7),
('Super Mario 3D World + Bowser Fury' ,20, 'Mario est une icone dans le monde du JV , il le démontre encore une fois dans ce 2 jeux en 1 qui sont vraiments réussis! surtout en multi des fous rires garantis !', '24/02/2020',('Switch'),10),
('Final Fantasy VII',21,'Aidez Cloud dans cette épopée qui est un remaster du bijou de la PS1. Une fois fini vous vous rendrez compte de la magnifique aventure que représente ce jeu','17/10/2019',('PS4'), 10),
('Demons Soul Remastered',22,'Retournez dans le monde de Demons Souls,MAIS...avec les graphismes incroyable de la PS5. Le 1er jeu de la Next-Gen... EPOUSTOUFLANT','24/10/2020',('PS5'),10),
('CyberPunk 2077',23,'Un GTA-Like d ns un monde futuriste? pourquoi pas ? CD Projekt nous propose ici de voyager dans le futur avec Keanu Reeves comme guest.Voici un titre a faire sur Next-Gen sans aucun doute','15/03/2021',('PS4/Xbox/PC/PS5'),8),
('God Of War',24,'Pardon??Jamais vous avez joué a ce jeu?? Sortez tout de suite acheter cette perle, il est juste INCROYABLE, on attend tous la suite "RAGNAROK"','20/07/2019',('PS4'),10);

INSERT INTO "genre" ("libellé")
VALUES ('Sport'),
('FPS'),
('Combat'),
('Aventure');

INSERT INTO "plateforme" ("libellé")
VALUES ('PS5'),
('Xbox'),
('PC'),
('Switch');




COMMIT;
    `)
})()

