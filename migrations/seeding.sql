BEGIN;

INSERT INTO jeuxvideo ("titre","image","description","date_de_sortie","plateforme","note")
VALUES ('fifa 21', 1,'JEU DE FOOTBALL EXCELLENT', '19/10/2021',('PS4 / Xbox / Switch'), 10),
('Call of Duty', 2,'FPS EXCELLENT', '19/05/2021',('PS4 / Xbox'), 9),
('Dragon Ball Z Fighter Z ', 3,'JEU DE COMBAT EXCELLENT', '16/05/2021',('PS4 / Xbox / Switch'), 10),
('UFC 4', 4,'Jeu de combat dans dans le monde UFC ', '11/03/2019',('PS4 / Xbox '), 10),
('Red Dead Redemption II', 5,'Jeu aventure dans le monde du far west', '16/05/2021',('PS4 / Xbox / PC'), 10),
('GTA V', 6,'Bienvenue a Liberty City, Le monde du crime', '15/09/2018',('PS4 / Xbox / PC'), 10),
('Uncharted 4 ', 7,'Jouez dans la peau de Nathan Drake un explorateur en quete de trésors', '04/07/2019',('PS4 '), 10),
('Spiderman : Miles Morales', 8,'Incarnez Miles Morales le nouveau spiderman , sauvez la ville dans des graphismes éblouissant de la PS5', '10/04/2021',('PS5'), 10),
('Ratchet And CLank', 9,'Accompagnez Ratchet dans sa nouvelle quête contre Nefarious', '04/06/2021',('PS5'), 10),
('Zelda : Breath Of The Wild ', 10,'La princesse Zelda a de nouveaux ennuis , elle peut compter sur Link dans cette aventure pleines de nouveautés', '11/01/2020',('Switch'), 10),
('Pokemon : Epée et Bouclier', 11,'Attrapez les tous ! Nouvelle aventure Pokémon avec les pokémons de nouvelles générations en plus ', '11/02/2020',('Switch'), 8),
('Counter-Strike', 12,'La référence des jeux de tirs ! Qui peut dire je joues pas a counter strike? Tous les joueurs de FPS ont fait leurs armes dessus', '04/10/2016',('PC'), 10);

INSERT INTO genre ("libellé")
VALUES ('Sport'),
('FPS'),
('Combat'),
('Aventure');

INSERT INTO plateforme ("libellé")
VALUES ('PS5'),
('Xbox'),
('PC'),
('Switch');




COMMIT;