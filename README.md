## File Management API
This API provides endpoints to create folders, write files with timestamps, and read text files from a specified directory. The base path is provided as default via environment variables.

Setup:
Clone the Repository and then
```
cd file-management-api
```

Install Dependencies:
```
npm install
```

Create a .env File Create a .env file in the root directory and set the BASE_PATH variable to your desired directory:
```
BASE_PATH=/path/to/your/directory
```

Start the Server:
```
npm start
```

# API Endpoints

Create Folder
Endpoint: POST /createFolder

Description: Creates a folder inside the specified base path.

Request Body:
```
{
    "folderName": "exampleFolder"
}
```

Postman Url: 
```
https://www.postman.com/dark-crater-25789/workspace/test/request/30932673-bea57234-104f-4806-a1eb-388828b9a5f1?action=share&creator=30932673&ctx=documentation 
```

Write File
Endpoint: POST /writeFile

Description: Writes a text file with the current timestamp in the specified folder within the base path.

Request Body:
```
{
    "folderName": "exampleFolder" // Optional. If provided, the file will be created in this folder.
}
```

Postman url:
```
https://www.postman.com/dark-crater-25789/workspace/test/request/30932673-a8a9db33-4476-4497-a76a-f923177ccbbf?action=share&creator=30932673&ctx=documentation
```

Read Files:
Endpoint: GET /readFiles

Description: Retrieves all .txt files from the specified base path.

Request Body:
```
{
    "folderPath": "examplePath"  // Optional. If not provided, by default E:/ will be chosen.
}

```

Postman url:
```
https://www.postman.com/dark-crater-25789/workspace/test/request/30932673-af90f880-0706-4d77-a611-2b6ab9acf35c?action=share&creator=30932673&ctx=documentation
```

