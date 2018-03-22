# technocrats
Project 2

Development instructions:
	-Run SQL schema
	-Run server.js to initiate server
		-server.js will call index.js in the models folder, which will
		initialize the sequelize tables
		-the current sequelize commands will overwrite existing tables - update for production
	-run dummy.js to populate the sql table with dummy information



Project changelog (3/22/18):
-	The login.html was not linking to the login.js (the route was broken)
-	What is the add.js that login.html links to? Old filepath?
-	In login.js -> line 65-126 seems related to the coverr video, but it makes it stop working. Not sure what was going on here. When commented out, the background runs fine. 
-	Currently enroll only has two fields (email and password) while the database also has First/Last name. We will need to add additional field options when the user selects enroll
