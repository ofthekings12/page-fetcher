const axios = require("axios");
const fs = require("fs").promises;

const url = process.argv[2]; // get the url from the command line argument ( what you type in the terminal )
const filePath = process.argv[3]; // get the url from the command line argument ( what you type in the terminal )

console.log(`User input; url: ${url} filepath: ${filePath}`);

const data = axios
  .get(url)
  .then(async (succesfullResponse) => {
    // Make an HTTP GET request against the url that the user provided
    const theDataWeGotFromTheGetRequest = succesfullResponse.data;
    console.log(
      "I succesfully made an http GET request and got the succesfullResponse from ",
      url,
      ": ",
      theDataWeGotFromTheGetRequest
    );

    const writeToFileResponse = await writeToFile(
      theDataWeGotFromTheGetRequest
    );
  })
  .catch((failureResponse) => {
    console.log(
      `Uh oh :( encountered an error running GET request against url; ${url}`,
      failureResponse
    );
  });

const writeToFile = async function (dataToWrite) {
  try {
    await fs.writeFile(filePath, dataToWrite); // asynchronously write to the file that the user input

    console.log(
      `Downloaded and saved ${dataToWrite.length} bytes to ${filePath}`
    ); // 1 character = 1 byte, so dataToWrite.length gives us the amount of bytes

    return response;
  } catch (error) {
    console.log(
      `Uh oh :( encountered an error running fs.writeFile request against path; ${filePath}`,
      error
    );
  }
};
