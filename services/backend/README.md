# Backend
The Backend service is the backbone of the entire application.
Everything relating to the domain model is ultimately settled here in the Backend, since only the Backend has access to the Postgres database.

# Teck Stack
- Language: NodeJS/JavaScript
- API Framework: Express
- ORM: Sequelize

# Interactions with Other Services
The following explains how the Backend service interacts with the other StaffHub services.

## Frontend
The Frontend calls the Backend for all manner of things (i.e. CRUD) relating to the data models (employee data).