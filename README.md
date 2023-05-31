# portfolio-v2-backend

The backend of this project is a Node.js server that serves a static web page to the client using Express. It is designed to handle client requests and respond with the necessary resources to render the web page.

## Technologies Used

The following technologies were used in the development of the backend:

- Node.js
- Express

## Configuration with Google Cloud Build

This backend is configured to use Google Cloud Build for continuous integration and deployment (CI/CD). Google Cloud Build provides a robust and streamlined workflow for building, testing, and deploying your application.

To set up Google Cloud Build for this project, follow these steps:

1. Create a Google Cloud Platform (GCP) project.
2. Enable Cloud Build API in your GCP project.
3. Create a Cloud Build configuration file (`cloudbuild.yaml` or `cloudbuild.json`) in the root directory of your backend project. This configuration file specifies the build steps and deployment instructions.
4. Configure Cloud Build triggers to automatically trigger builds on specific events, such as pushing code changes to a repository or merging pull requests.

With Google Cloud Build, you can enjoy the benefits of an automated CI/CD pipeline, ensuring that your backend code is built, tested, and deployed efficiently.

## Getting Started

To run the backend server locally, follow these steps:

1. Clone this repository: `git clone https://github.com/your-username/backend.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

The backend server should now be running and ready to serve the static web page to the client.

## Frontend

The frontend of this project, named Portfolio-v2, is responsible for the user interface and interactive elements. You can find the frontend repository [here](https://github.com/BrettBuhler/portfolio-v2).

## Contributing

Contributions to the backend of this project are welcome. If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and distribute this code for personal or commercial purposes.
