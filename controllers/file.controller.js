// file.controller.js
const fs = require("fs");
const path = require("path");

// Create folder in a specified path
const createFolderFunction = async (req, res) => {
    try {
        const { specifyPath, folderName } = req.body;
        if (!specifyPath || !folderName) {
            return res.status(400).json({ message: "Path and folder name are required" });
        }
        const baseFolderPath = path.resolve(specifyPath);
        const newFolderPath = path.join(baseFolderPath, folderName);
        if (fs.existsSync(newFolderPath)) {
            return res.status(400).json({ message: "Folder already exists", folderPath: newFolderPath });
        }
        fs.mkdirSync(newFolderPath, { recursive: true });
        res.status(200).json({ message: "Folder created successfully", folderPath: newFolderPath });
    } catch (error) {
        res.status(500).json({ message: "Error creating folder", error: error.message });
    }
};

// Write file in specified folder
const writeFileFunction = async (req, res) => {
    try {
        const { specifyPath } = req.body;
        if (!specifyPath) {
            return res.status(400).json({ message: "Path is required" });
        }
        const invalidChars = /["\\]/;
        if (invalidChars.test(specifyPath)) {
            return res.status(400).json({ message: "Please check the path" });
        }
        const now = new Date();
        const timestamp = now.toISOString();
        const filename = `${now.toISOString().replace(/[:.-]/g, '_')}.txt`;
        const filePath = path.resolve(__dirname, specifyPath, filename);

        fs.writeFile(filePath, timestamp, (err) => {
            if (err) {
                return res.status(500).json({ message: "Error writing file", error: err.message });
            }
            res.status(200).json({ message: "File created successfully", filename });
        });
    } catch (error) {
        res.status(400).json({ message: "Cannot write file", error: error.message });
    }
};

// Read files from specified folder
const readFilesFunction = async (req, res) => {
    try {
        const { specifyPath } = req.body;
        if (!specifyPath) {
            return res.status(400).json({ message: "Path is required" });
        }

        const folderPath = path.resolve(__dirname, specifyPath);

        fs.readdir(folderPath, (err, files) => {
            if (err) {
                return res.status(500).json({ message: "Error reading directory", error: err.message });
            }
            const textFiles = files.filter(file => path.extname(file) === '.txt');
            res.status(200).json({ files: textFiles, message: "Fetched files" });
        });
    } catch (error) {
        res.status(400).json({ message: "Cannot read files", error: error.message });
    }
};


module.exports = { createFolderFunction, readFilesFunction, writeFileFunction };
