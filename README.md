# Rock Paper Scissors Lizard Spock

Rock, Paper, Scissors, Lizard, Spock is a game of chance that expands the traditional game of Rock, Paper, Scissors. This project builds UI and provides backend services so the user can play.


## Prerequisites

- Node.js
- npm or yarn
- .NET Core SDK
- Azure Functions Core Tools

## Setup Instructions

### Backend

1. Navigate to the backend directory:
    ```bash
    cd RSPLS_Backend
    ```

2. Install Azure Functions Core Tools

3. Restore .NET dependencies:
    ```bash
    dotnet restore
    ```

4. Create a `local.settings.json` file for local development and add necessary settings:
    ```json
   {
     "IsEncrypted": false,
     "Values":{
                 "AzureWebJobsStorage": 
                 "UseDevelopmentStorage=true",
                 "FUNCTIONS_WORKER_RUNTIME": "dotnet-isolated"
     },
      "Host":{
                "LocalHttpPort": 7206,
                "CORS": "*",
                "CORSCredentials": false
      }
   }
    ```

5. Start the Azure Function
6. The backend server will start at `http://localhost:7206`.

### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd rpsls_client
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Create a `.env.development` file and add the backend URL:
    ```plaintext
    NEXT_PUBLIC_CHOICES_DOMAIN=http://localhost:7206
    CHOICES_DOMAIN=http://localhost:7206
    ```

4. Start the frontend server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. The frontend will start at `http://localhost:3000`.

## Development

### Backend

The backend is an Azure Function built with .NET that handles game logic.

### Frontend

The frontend is a Next.js application that provides the user interface for the game. It uses Material-UI for styling and TypeScript for type safety.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
