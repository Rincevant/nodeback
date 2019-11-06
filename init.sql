CREATE TABLE utilisateur(
 pk_utilisateur_id SERIAL PRIMARY KEY,
 nom VARCHAR(100) NOT NULL,
 pass VARCHAR(100) NOT NULL,
 isadmin BOOLEAN NOT NULL,
 token VARCHAR(200),
 isban BOOLEAN NOT NULL 
);

CREATE TABLE task (
	pk_task_id SERIAL PRIMARY KEY,
	fk_utilisateur_id INT REFERENCES utilisateur (pk_utilisateur_id), 
	task_title VARCHAR(100),
	isdone BOOLEAN
);


/**
		JEU DE DONNEES		
**/
/* ID / NOM / PASS / ISADMIN / TOKEN / ISBAN */
INSERT INTO utilisateur VALUES (DEFAULT, 'Julien', '$2y$08$hyDb7VSrBD3Vw1kH1zAe8.YhKhMjCMw9v1.WutqR2jr9LDK5y91UG', true, NULL, false);
INSERT INTO utilisateur VALUES (DEFAULT, 'Thomas', '$2y$08$RJ3HBmMggnb.l8U27jSWQ.90czPweJcmHxTLpqg6TpyjZatqK.kii', false, NULL, false);


INSERT INTO task VALUES (DEFAULT, 1, 'faire le menage', false);
INSERT INTO task VALUES (DEFAULT, 2, 'regarder un film', false);
INSERT INTO task VALUES (DEFAULT, 2, 'faire du sport', false);
INSERT INTO task VALUES (DEFAULT, 2, 'jouer a skyrim', false);
INSERT INTO task VALUES (DEFAULT, 2, 'voir le monde', false);

