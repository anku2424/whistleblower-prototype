// const fetchDocs = async (url, options) => {
//     try {
//         const response = await fetch(url, options);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// };

// const fetchGPTAnswer = async (url, options) => {
//     try {
//         const response = await fetch(url, options);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

const dummyData = {
    docs: [
        {
            id: 1,
            title: "Document 1",
            url: "https://example.com/docs/doc1",
            filePath: "path/to/file",
            pageNumber: 25,
            batesNumber: "12345",
            snippet: "This is the snippet for document 1.",
        },
        {
            id: 2,
            title: "Document 2",
            url: "https://example.com/docs/doc2",

            filePath: "path/to/file",
            pageNumber: 26,
            batesNumber: "12342",
            snippet: "This is the snippet for document 2.",
        },
        {
            id: 3,
            title: "Document 3",
            url: "https://example.com/docs/doc3",

            filePath: "path/to/file",
            pageNumber: 27,
            batesNumber: "123",
            snippet: "This is the snippet for document 3.",
        },
    ],
    gptAnswer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

const fetchData = async (url, options) => {
    console.log("url:", url);
    console.log("options:", options);
    try {
        // const response = await fetch(url, options);
        // const data = await response.json();
        // setTimeout(() => {
        return dummyData;
        // }, 1000);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export default fetchData;
