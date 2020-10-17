// export const config = {
//   "dev": {
//     "username": process.env.POSTGRESS_USERNAME,
//     "password": process.env.POSTGRESS_PASSWORD,
//     "database": process.env.POSTGRESS_DB,
//     "host": process.env.POSTGRESS_HOST,
//     "dialect": "postgres",
//     "aws_reigion": process.env.AWS_REGION,
//     "aws_profile": process.env.AWS_PROFILE,
//     "aws_media_bucket": process.env.AWS_BUCKET
//   },
//   "prod": {
//     "username": "",
//     "password": "",
//     "database": "udagram_prod",
//     "host": "",
//     "dialect": "postgres"
//   },
//   "jwt": {
//     "secret": process.env.JWT_SECRET
//   }

// }

export const config = {
  "dev": {
    "username": "udagramezradev",
    "password": "udagramezradev",
    "database": "udagramezradev",
    "host": "udagramezradev.ccguxurr5ary.us-east-2.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-2",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-ezra-dev"
  },
  "jwt": {
    "secret":"helloworld"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
