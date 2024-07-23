# FE Application

This application using ReactJS for the library and Vite for the framework. I use the tailwind for app styling.
For the app data, I use the TMDB Api to get the list movie.

## Run Locally

1. Clone the project

```bash
  git clone https://github.com/si-saaref/fe-incit.git
```

2. Go to the project directory

```bash
  cd fe-incit
```

3. Install dependencies

```bash
  npm install
```

4. Create file `.env ` in root project copy the list of environment varible from below and paste to your `.env` file

5. Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you have to add some variable name to your environment variable `.env` file

Edit file `.env-example` (rename the file to `.env`) and change the variable into

`VITE_GOOGLE_CLIENT_ID`=`<your_google_client_id`\
`VITE_FB_APP_ID`=`<your_facebook_app_id>`
`VITE_BASE_URL`=`http://localhost:7878/api/v1`
