# web_api_base

- web_api_base is a Node js project template that could be used as a base to get you up and running with your project.
- It includes some services that are expected to be needed for any project.
- The template follows an **MVC** approach to structure project files.

## Services

- [Express web framework](https://www.npmjs.com/package/express)
- [Mongoose object document mapper](https://www.npmjs.com/package/mongoose)
- [Morgan http-logger](https://www.npmjs.com/package/morgan)
- [Winston logger](https://www.npmjs.com/package/winston)
- [Log files daily rotation](https://www.npmjs.com/package/winston-daily-rotate-file)
- [Incoming requests validation](https://www.npmjs.com/package/express-validator)
- [Jwt authentication](https://www.npmjs.com/package/jsonwebtoken)
- [Dotenv environment variables](https://www.npmjs.com/package/dotenv)

## Get Started

- execute the command: `npm install`
- Replace all occurance of the string 'web_api_base' with your project name
- create 'config/.env' file that includes the following:
  - PORT: Application port
  - DB_URI: MongoDb URI
  - JWT_SECRET_KEY: Secret used to sign authentication tokens
  - JWT_EXPIRES_IN: Time for token to expire, refer to package docs for valid values
  - COOKIE_EXPIRES: Time for cookie to expire in days
- Enjoy 💖
