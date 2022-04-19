# openmusic-app-queue-consumer
This project is part of Dicoding final project for fundamental backend class, as coplimentary project to handle sending export file via email, create using HapiJs.

## Setting up environment

In the project directory, create file:

### `.env`

On the file, filled the postgres and server information:

```shell
# node-postgres configuration
PGUSER=user
PGHOST=localhost
PGPASSWORD=password
PGDATABASE=db
PGPORT=5432

# nodemailer SMTP authentication
MAIL_HOST=smtp.gmail.com
MAIL_PORT=465
MAIL_ADDRESS=<username>@gmail.com
MAIL_PASSWORD=<password>

# Message broker
RABBITMQ_SERVER=amqp://localhost

```

The SMTP example above for gmail.
