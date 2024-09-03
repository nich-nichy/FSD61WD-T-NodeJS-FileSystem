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

Write File
Endpoint: POST /writeFile

Description: Writes a text file with the current timestamp in the specified folder within the base path.
```
{
    "folderName": "exampleFolder" // Optional. If provided, the file will be created in this folder.
}
```

Read Files:
Endpoint: GET /readFiles

Description: Retrieves all .txt files from the specified base path.

