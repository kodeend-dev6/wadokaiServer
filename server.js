/* eslint-disable no-undef */
const app = require("./app");
const { port } = require("./secret") || 4000;

// Uncaught exception
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION! 💣 Shutting down...");
  console.error(err.message);
  process.exit(1);
});

let server;
// Run the server
const startServer = async () => {
  try {
    // Start the server
    server = app.listen(port, () => {
      console.log(`Server listening on port: ${port}`);
    });
  } catch (error) {
    console.error(error.message);
  }

  // Unhandled promise rejection
  process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED REJECTION! 💥 Shutting down...");
    console.log(err.message);
    if (server) {
      server.close(() => {
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
};

// Run the server
startServer();

// SIGTERM
process.on("SIGTERM", () => {
  console.info("SIGTERM RECEIVED 🚦 Shutting down gracefully");
  if (server) {
    server.close();
  }
});
