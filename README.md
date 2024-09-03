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
https://dark-crater-25789.postman.co/workspace/My-Workspace~aecfdac6-b228-4c4f-85e8-e082e73b2e68/request/30932673-5c6e7f39-2580-442e-8e08-47ed0d7eee66?action=share&creator=30932673&ctx=documentation
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
https://dark-crater-25789.postman.co/workspace/My-Workspace~aecfdac6-b228-4c4f-85e8-e082e73b2e68/request/30932673-65abe913-8c02-4210-9116-c924cba5fdc0?action=share&creator=30932673&ctx=documentation
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
https://dark-crater-25789.postman.co/workspace/My-Workspace~aecfdac6-b228-4c4f-85e8-e082e73b2e68/request/30932673-333e3702-981b-4c98-9857-7deeaaca1cac?action=share&creator=30932673&ctx=documentation
```

