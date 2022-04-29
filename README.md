# userCreation

Project inspired by a small project I do on my node.js course.

I added some things that we didnt do on the course and refactored it.

This can create a user(with a password and verification token sent to the users email),a log in (that logs a user in only if the email and password match, and the user needs to be verified), a route that re-sends the token and delets the old one and a verification route that verifies the user by comparing the inputed token to the token in the database. All the info from the user is stored in the database and can be accessed if needed.

Things i used in this project: JavaScript with node.js, express for routing, bcrypt for password hashing, dbeaver and sequelize for the database, node mailer with mail trap for all the mail verification and JOI for data validation.

This is just a small project to demonstrate what i can do in JS. I am gonna add later more features and maybe some front end to make something sort of a Facebook clone.