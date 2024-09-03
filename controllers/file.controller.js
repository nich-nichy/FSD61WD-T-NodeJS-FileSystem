const fs = require("fs");
const path = require("path");
require('dotenv').config();

const basePath = process.env.BASE_PATH || __dirname;

// Create folder in the base path
const createFolderFunction = async (req, res) => {
    try {
        const { folderName } = req.body;
        if (!folderName) {
            return res.status(400).json({ message: "Folder name is required" });
        }
        const newFolderPath = path.join(basePath, folderName);
        if (fs.existsSync(newFolderPath)) {
            return res.status(400).json({ message: "Folder already exists", folderPath: newFolderPath });
        }
        fs.mkdirSync(newFolderPath, { recursive: true });
        res.status(200).json({ message: `Folder created in ${basePath} successfully`, folderPath: newFolderPath });
    } catch (error) {
        res.status(500).json({ message: "Error creating folder", error: error.message });
    }
};

// Write a file with the current timestamp in the base path
const writeFileFunction = async (req, res) => {
    try {
        const { folderName } = req.body || '';
        let folderPath = basePath;
        if (folderName) {
            folderPath = path.join(basePath, folderName);
        }
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }
        const now = new Date();
        const timestamp = now.toISOString();
        const filename = `${now.toISOString().replace(/[:.-]/g, '_')}.txt`;
        const filePath = path.join(folderPath, filename);
        fs.writeFile(filePath, timestamp, (err) => {
            if (err) {
                return res.status(500).json({ message: "Error writing file", error: err.message });
            }
            res.status(200).json({ message: `File created in ${folderPath} successfully`, filename });
        });
    } catch (error) {
        res.status(400).json({ message: "Cannot write file", error: error.message });
    }
};

// Read all text files from the base path
const readFilesFunction = async (req, res) => {
    try {
        const { folderPath } = req.body || basePath;
        const invalidChars = /["\\]/;
        if (invalidChars.test(folderPath)) {
            return res.status(400).json({ message: "Please check the path and try again" });
        }
        fs.readdir(folderPath, (err, files) => {
            if (err) {
                return res.status(500).json({ message: "Error reading directory", error: err.message });
            }
            const textFiles = files.filter(file => path.extname(file) === '.txt');
            res.status(200).json({ files: textFiles, message: `Fetched files from ${folderPath} successfully` });
        });
    } catch (error) {
        res.status(400).json({ message: "Cannot read files", error: error.message });
    }
};

module.exports = { createFolderFunction, readFilesFunction, writeFileFunction };
