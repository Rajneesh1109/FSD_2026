function logMessage(level, message) {
    const time = new Date().toISOString();
    console.log(`[${time}] [${level}] ${message}`);
}

// Usage
logMessage("INFO", "User clicked button");
logMessage("ERROR", "Something went wrong");
logMessage("WARNING", "Low battery");
