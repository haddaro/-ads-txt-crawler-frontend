# Project Overview
*Description*
This application is designed to parse the ads.txt file from a given domain and display a table of all advertisers listed in the document along with their frequency of occurrence. It's a full-stack application with a Node.js backend and a React frontend.

Deployed:  https://ads-txt-crawler.vercel.app/

*Backend*
Source code: https://github.com/haddaro/ads-txt-crawler-backend
Technology: Built with Node.js and Express.
Caching: Implemented using node-cache to enhance performance by reducing redundant parsing for frequently requested domains.
Security: Integrated helmet for secure HTTP headers and rate-limit to prevent abuse of the service.
Data Handling: Utilizes regular expressions (regex) for efficient parsing of the ads.txt files.
HTTP Requests: Employs axios for making HTTP requests to fetch ads.txt files from specified domains.
Error Handling: Comprehensive exception handling to ensure robustness and reliability.

*Frontend*
Technology: Developed using React with JSX.
UI Framework: Styled with Material UI for a responsive and user-friendly interface.
Functionality: Presents the parsed data in a clear, organized table, showcasing the advertisers and their frequencies, along with tha parsing duration.
