# OpenAI Integration App

This is an integration with OpenAI, allowing users to input text prompts and receive generated responses based on the provided prompts.

## Table of Contents

- [Client](#client)
- [Server](#server)
- [Features](#features)
- [Live Version](#live-version)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Client

The client side of the application consists of React components that facilitate user interaction. Here's how it works:

1. Users provide input in the React components.
2. The input is sent to the server.
3. The server places the input into a prompt and makes an API call to OpenAI.
4. The server receives the response and sends it back to the React components for rendering.

## Server

The server handles the server-side logic, including making API calls to OpenAI. To ensure smooth operation and avoid timeout limitations, server functions have been deployed on Firebase.

## Features

At the moment, the app offers the following features:

1. **Meeting Notes Writer**: Generate meeting notes from user input.
2. **Cover Letter Writer**: Generate cover letters based on user-provided content.
3. **Code Commenting Functionality**: Automatically add comments to code snippets.
4. **Draft Unit Test Functionality**: Generate unit test drafts.

## Live Version

You can access the live version of this application hosted on Vercel https://ai-integrations-front.vercel.app/ .

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository.
2. Set up the client and server components.
3. Ensure you have the required API keys and credentials for OpenAI.
4. Install dependencies.
5. Deploy Firebase Functions
6. React Components will fetch the Firebase Function URL
7. Run your application



## License

This project is licensed under the [MIT License](/LICENSE).

## Contact

If you have questions, feedback, or need assistance, you can reach out to us at andresbarrigaru@gmail.com or via (https://www.linkedin.com/in/andres-barriga/)

We hope you find this project helpful and welcome your contributions to make it even better!

